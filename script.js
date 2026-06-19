let questions = []; // Se llenará desde el Excel

let quizQuestions = [];
let currentQuestionIndex = 0;
let correctCount = 0;
let incorrectCount = 0;
let answeredCurrentQuestion = false;
let timerInterval;
let totalSeconds;

// Referencias a elementos del DOM
const configScreen = document.getElementById('config-screen');
const quizScreen = document.getElementById('quiz-screen');
const numQuestionsSlider = document.getElementById('num-questions-slider');
const numQuestionsVal = document.getElementById('num-questions-val');
const timeSlider = document.getElementById('time-slider');
const timeVal = document.getElementById('time-val');
const startButton = document.getElementById('start-quiz-button');
const quizModeSelect = document.getElementById('quiz-mode-select');
const questionOrderSelect = document.getElementById('question-order-select'); // Nuevo
const clearReviewButton = document.getElementById('clear-review-button'); // Botón para vaciar repaso
const excelUpload = document.getElementById('excel-upload');
const timerDisplay = document.getElementById('timer-display');

const questionTextElement = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const toggleReviewButton = document.getElementById('toggle-review-button');
const answerButton = document.getElementById('answer-button');
const nextButton = document.getElementById('next-button');
const explanationArea = document.getElementById('explanation-area');
const explanationText = document.getElementById('explanation-text');
const currentQuestionNumberSpan = document.getElementById('current-question-number');
const totalQuestionsSpan = document.getElementById('total-questions');
const correctCountSpan = document.getElementById('correct-count');
const incorrectCountSpan = document.getElementById('incorrect-count');
const quizEndMessage = document.getElementById('quiz-end-message');
const finalCorrectCountSpan = document.getElementById('final-correct-count');
const finalIncorrectCountSpan = document.getElementById('final-incorrect-count');
const percentageCountSpan = document.getElementById('percentage-count');
const currentPercentageCountSpan = document.getElementById('current-percentage-count'); // Nuevo span para el porcentaje actual
const topRestartButton = document.getElementById('top-restart-button'); // Nuevo botón de reiniciar arriba
const restartButton = document.getElementById('restart-button');
const endStatusLabel = document.getElementById('end-status-label');
const endTitle = document.getElementById('end-title');
const tryAgainButton = document.getElementById('try-again-button');

// Deshabilitar inicio hasta cargar datos
startButton.disabled = true;
startButton.innerText = "Cargando preguntas...";

// Configuración de Sliders
numQuestionsSlider.oninput = function() { numQuestionsVal.innerHTML = this.value; }
timeSlider.oninput = function() { timeVal.innerHTML = this.value; }

// --- Lógica de Repaso (LocalStorage) ---
function getReviewList() {
    return JSON.parse(localStorage.getItem('scrum_quiz_review_list') || '[]');
}

function toggleReviewStatus() {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    let reviewList = getReviewList();
    if (reviewList.includes(currentQuestion.question)) {
        reviewList = reviewList.filter(q => q !== currentQuestion.question);
    } else {
        reviewList.push(currentQuestion.question);
    }
    localStorage.setItem('scrum_quiz_review_list', JSON.stringify(reviewList));
    updateReviewButtonUI();
}

function clearReviewList() {
    if (confirm("¿Estás seguro de que quieres borrar todas las preguntas marcadas para repaso?")) {
        localStorage.removeItem('scrum_quiz_review_list');
        alert("Lista de repaso vaciada.");
        updateConfigUI();
    }
}

function updateReviewButtonUI() {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    const reviewList = getReviewList();
    if (reviewList.includes(currentQuestion.question)) {
        toggleReviewButton.classList.add('active');
        toggleReviewButton.innerText = "⭐ Quitar de repaso";
    } else {
        toggleReviewButton.classList.remove('active');
        toggleReviewButton.innerText = "☆ Añadir a repaso";
    }
}

// Función para cargar Excel
async function loadQuestionsFromExcel() {
    // Ya no se carga el excel externo, se usan las defaultQuestions.
    // Esta función se mantiene vacía para no romper la llamada inicial.
}

function processWorkbookData(data) {
    const workbook = XLSX.read(data, { type: 'array' });
    const firstSheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[firstSheetName];
    const jsonData = XLSX.utils.sheet_to_json(worksheet);

    questions = [];
    jsonData.forEach((row, index) => {
        // Validar que los campos obligatorios existan y no estén vacíos
        const hasQuestion = row.question && row.question.toString().trim() !== "";
        const hasType = row.type && row.type.toString().trim() !== "";
        const hasOptions = row.options && row.options.toString().trim() !== "";
        const hasAnswer = row.correctAnswer !== undefined && row.correctAnswer !== null && row.correctAnswer.toString().trim() !== "";

        if (hasQuestion && hasType && hasOptions && hasAnswer) {
            try {
                const options = row.options.toString().split(';').map(opt => opt.trim()).filter(opt => opt !== "");
                if (options.length < 2) throw new Error("Debe tener al menos 2 opciones");

                let correctAnswer;
                if (row.type === 'multiple_choice') {
                    // Convertir "0,1" en [0, 1] y filtrar valores no numéricos
                    correctAnswer = row.correctAnswer.toString().split(',').map(n => parseInt(n.trim())).filter(n => !isNaN(n));
                    if (correctAnswer.length === 0) throw new Error("Respuesta múltiple mal formateada");
                } else {
                    correctAnswer = parseInt(row.correctAnswer);
                    if (isNaN(correctAnswer)) throw new Error("Respuesta única no es un número válido");
                }

                questions.push({
                    question: row.question.toString(),
                    type: row.type.toString(),
                    options: options,
                    correctAnswer: correctAnswer,
                    explanation: row.explanation || "Sin explicación disponible."
                });
            } catch (error) {
                console.warn(`Fila ${index + 2} omitida: ${error.message}`);
            }
        } else {
            console.warn(`Fila ${index + 2} omitida por campos incompletos.`);
        }
    });

    updateConfigUI();
    startButton.disabled = false;
    startButton.innerText = "Empezar Quiz";
    console.log("Preguntas cargadas correctamente");
}

// Función para actualizar la interfaz de configuración (conteos y límites)
function updateConfigUI() {
    const totalQuestions = questions.length;
    const reviewCount = getReviewList().length;

    // Actualizar etiquetas del selector
    document.getElementById('option-all').textContent = `Todas las preguntas (${totalQuestions})`;
    document.getElementById('option-review').textContent = `Solo preguntas para repasar (${reviewCount})`;

    // Ajustar slider según modo seleccionado
    let maxVal = quizModeSelect.value === 'review' ? reviewCount : totalQuestions;
    
    numQuestionsSlider.min = maxVal > 0 ? 1 : 0; // Ajustar mínimo si hay pocas preguntas
    numQuestionsSlider.max = Math.max(1, maxVal);
    numQuestionsSlider.value = Math.min(parseInt(numQuestionsSlider.value), numQuestionsSlider.max);
    numQuestionsVal.textContent = numQuestionsSlider.value;
}

// Evento para carga manual de archivo
if (excelUpload) {
    excelUpload.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (evt) => {
            processWorkbookData(evt.target.result);
        };
        reader.readAsArrayBuffer(file);
    });
}

// Inicialización de preguntas base desde el documento interno
if (typeof defaultQuestions !== 'undefined' && defaultQuestions.length > 0) {
    questions = [...defaultQuestions];
    updateConfigUI();
    startButton.disabled = false;
    startButton.innerText = "Empezar Quiz";
    console.log("Banco interno precargado con éxito.");
}

function startQuiz() {
    const mode = quizModeSelect.value;
    let questionsToUse = [...questions];

    if (mode === 'review') {
        const reviewList = getReviewList();
        questionsToUse = questionsToUse.filter(q => reviewList.includes(q.question));
        
        if (questionsToUse.length === 0) {
            alert("No tienes preguntas marcadas para repasar. ¡Marca algunas primero durante el quiz!");
            return;
        }
    }

    const count = parseInt(numQuestionsSlider.value);
    totalSeconds = parseInt(timeSlider.value) * 60;
    const order = questionOrderSelect.value; // Obtener el orden seleccionado
    
    if (order === 'random') {
        // Barajar las preguntas si se selecciona orden aleatorio
        questionsToUse = questionsToUse.sort(() => 0.5 - Math.random());
    }
    // Seleccionar el número de preguntas solicitado (o todas si se pide más de las disponibles)
    quizQuestions = questionsToUse.slice(0, Math.min(count, questionsToUse.length));
    configScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');
    topRestartButton.classList.remove('hidden'); // Mostrar el botón de reiniciar superior
    quizEndMessage.classList.add('hidden');
    
    currentQuestionIndex = 0;
    correctCount = 0;
    incorrectCount = 0;
    totalQuestionsSpan.textContent = quizQuestions.length;
    
    startTimer();
    loadQuestion();
}

function startTimer() {
    clearInterval(timerInterval);
    updateTimerDisplay();
    timerInterval = setInterval(() => {
        totalSeconds--;
        updateTimerDisplay();
        if (totalSeconds <= 0) {
            clearInterval(timerInterval);
            displayQuizEnd();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    timerDisplay.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

function loadQuestion() {
    answeredCurrentQuestion = false;
    explanationArea.classList.add('hidden');
    nextButton.classList.add('hidden');
    answerButton.classList.remove('hidden');
    answerButton.disabled = true; // Deshabilita el botón de responder hasta que se seleccione una opción

    if (currentQuestionIndex >= quizQuestions.length) {
        displayQuizEnd();
        return;
    }

    const question = quizQuestions[currentQuestionIndex];
    questionTextElement.textContent = question.question;
    updateReviewButtonUI();
    optionsContainer.innerHTML = ''; // Limpiar opciones anteriores

    question.options.forEach((option, index) => {
        const label = document.createElement('label');
        label.classList.add('option-label');
        const input = document.createElement('input');
        input.name = 'option';
        input.value = index;

        if (question.type === 'multiple_choice') {
            input.type = 'checkbox';
        } else {
            input.type = 'radio';
        }

        input.addEventListener('change', () => {
            answerButton.disabled = false; // Habilita el botón de responder al seleccionar una opción
        });

        // Lógica para resaltar la selección del usuario
        input.addEventListener('click', () => {
            if (question.type !== 'multiple_choice') {
                // Para single_choice y true_false, quitar el resaltado de los demás
                optionsContainer.querySelectorAll('.option-label').forEach(l => l.classList.remove('selected'));
            }
            // Añadir o quitar el resaltado en el actual
            if (input.checked) {
                label.classList.add('selected');
            } else {
                label.classList.remove('selected');
            }
        });


        label.appendChild(input);
        label.appendChild(document.createTextNode(option));
        optionsContainer.appendChild(label);
    });

    updateScoreBoard();
}

function checkAnswer() {
    if (answeredCurrentQuestion) return; // Evitar responder múltiples veces

    answeredCurrentQuestion = true;
    answerButton.classList.add('hidden');
    nextButton.classList.remove('hidden');
    nextButton.disabled = false; // Asegurarse de que el botón Siguiente esté habilitado

    const question = quizQuestions[currentQuestionIndex];
    let isCorrect = false;
    const selectedOptions = [];
    const optionInputs = optionsContainer.querySelectorAll('input');

    optionInputs.forEach((input, index) => {
        if (input.checked) {
            selectedOptions.push(parseInt(input.value));
        }
        // Deshabilitar todas las opciones después de responder
        input.disabled = true;
    });

    if (question.type === 'true_false' || question.type === 'single_choice') {
        if (selectedOptions.length === 1 && selectedOptions[0] === question.correctAnswer) {
            isCorrect = true;
        }
    } else if (question.type === 'multiple_choice') {
        // Para múltiples opciones, la respuesta es correcta si todas las correctas fueron seleccionadas
        // y no se seleccionaron opciones incorrectas adicionales.
        const correctAnswersSet = new Set(question.correctAnswer);
        const selectedOptionsSet = new Set(selectedOptions);

        isCorrect = (correctAnswersSet.size === selectedOptionsSet.size) &&
                    [...selectedOptionsSet].every(option => correctAnswersSet.has(option));
    }

    // Marcar visualmente las opciones
    optionInputs.forEach((input, index) => {
        const label = input.closest('.option-label');
        if (question.type === 'multiple_choice') {
            if (question.correctAnswer.includes(index)) {
                label.classList.add('correct');
            } else if (selectedOptions.includes(index) && !question.correctAnswer.includes(index)) {
                label.classList.add('incorrect');
            }
        } else { // true_false o single_choice
            if (index === question.correctAnswer) {
                label.classList.add('correct');
            } else if (selectedOptions.includes(index) && index !== question.correctAnswer) {
                label.classList.add('incorrect');
            }
        }
    });


    if (isCorrect) {
        correctCount++;
        correctCountSpan.parentElement.classList.add('highlight-correct');
    } else {
        incorrectCount++;
        incorrectCountSpan.parentElement.classList.add('highlight-incorrect');
    }

    explanationText.textContent = question.explanation;
    explanationArea.classList.remove('hidden');
    updateScoreBoard();
}

function nextQuestion() {
    // Limpiar resaltados del marcador antes de pasar a la siguiente
    correctCountSpan.parentElement.classList.remove('highlight-correct');
    incorrectCountSpan.parentElement.classList.remove('highlight-incorrect');

    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestions.length) {
        loadQuestion();
    } else {
        displayQuizEnd();
    }
}

function updateScoreBoard() {
    currentQuestionNumberSpan.textContent = Math.min(currentQuestionIndex + 1, quizQuestions.length);
    correctCountSpan.textContent = correctCount;
    incorrectCountSpan.textContent = incorrectCount;

    // Calcular y mostrar el porcentaje actual
    const currentTotalAnswered = currentQuestionIndex + (answeredCurrentQuestion ? 1 : 0); // Considera la pregunta actual si ya fue respondida
    const currentPercentage = currentTotalAnswered > 0 ? Math.round((correctCount / currentTotalAnswered) * 100) : 0;
    currentPercentageCountSpan.textContent = currentPercentage;
}

function displayQuizEnd() {
    clearInterval(timerInterval);
    quizScreen.classList.add('hidden');
    explanationArea.classList.add('hidden');

    topRestartButton.classList.add('hidden'); // Ocultar el botón de reiniciar superior al finalizar
    quizEndMessage.classList.remove('hidden');
    finalCorrectCountSpan.textContent = correctCount;
    finalIncorrectCountSpan.textContent = incorrectCount;
    
    const percentage = quizQuestions.length > 0 ? Math.round((correctCount / quizQuestions.length) * 100) : 0;
    percentageCountSpan.textContent = percentage;

    // Lógica de Victoria o Derrota (ej: 70% para ganar)
    if (percentage >= 70) {
        endStatusLabel.textContent = "¡GENIAL!";
        endTitle.textContent = "¡HAS GANADO!";
        endTitle.style.color = "#1A237E";
        tryAgainButton.classList.add('hidden');
    } else {
        endStatusLabel.textContent = "¡OH NO!";
        endTitle.textContent = "¡HAS PERDIDO!";
        endTitle.style.color = "#D32F2F";
        tryAgainButton.classList.remove('hidden');
    }
}

function restartQuiz() {
    updateConfigUI(); // Actualizar contadores de repaso y totales al volver al menú
    configScreen.classList.remove('hidden');
    quizEndMessage.classList.add('hidden');
    quizScreen.classList.add('hidden'); // Asegurarse de ocultar la pantalla del quiz
    topRestartButton.classList.add('hidden'); // Ocultar el botón de reiniciar superior
}

// Event Listeners
if (startButton) startButton.addEventListener('click', startQuiz);
if (answerButton) answerButton.addEventListener('click', checkAnswer);
if (nextButton) nextButton.addEventListener('click', nextQuestion);
if (toggleReviewButton) toggleReviewButton.addEventListener('click', toggleReviewStatus);
if (clearReviewButton) clearReviewButton.addEventListener('click', clearReviewList);
if (topRestartButton) topRestartButton.addEventListener('click', restartQuiz); // Event listener para el nuevo botón
if (restartButton) restartButton.addEventListener('click', restartQuiz);
if (tryAgainButton) tryAgainButton.addEventListener('click', restartQuiz);

const exitButton = document.getElementById('exit-button');
if (exitButton) {
    exitButton.addEventListener('click', () => {
        window.location.reload();
    });
}

// Cargar datos al iniciar
loadQuestionsFromExcel();
