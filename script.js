let questions = []; // Se llenará desde el Excel
let questionsByTopic = []; // Para las preguntas por temática

let quizQuestions = [];
let currentQuestionIndex = 0;
let correctCount = 0;
let incorrectCount = 0;
let answeredCurrentQuestion = false;
let timerInterval;
let totalSeconds;
let selectedStartIndex = 0; // Índice de la pregunta desde la que se empezará en modo secuencial
let userAnswers = []; // Almacena las respuestas del usuario en modo examen
let visitedQuestions = []; // Almacena las preguntas visitadas en modo examen
let isExamMode = false;

// Referencias a elementos del DOM
const configScreen = document.getElementById('config-screen');
const quizScreen = document.getElementById('quiz-screen');
const numQuestionsSlider = document.getElementById('num-questions-slider');
const questionTypeSelect = document.getElementById('question-type-select');
const numQuestionsVal = document.getElementById('num-questions-val');
const timeSlider = document.getElementById('time-slider');
const timeVal = document.getElementById('time-val');
const quizModeSelect = document.getElementById('quiz-mode-select');
const questionOrderSelect = document.getElementById('question-order-select'); // Nuevo
const clearReviewButton = document.getElementById('clear-review-button'); // Botón para vaciar repaso
// const excelUpload = document.getElementById('excel-upload'); // Comentado porque ya no se usa
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
const reviewExamButton = document.getElementById('review-exam-button');
const topCloseButton = document.getElementById('top-close-button'); // Nuevo botón de cierre

// Nuevos elementos para la lista de preguntas
const viewQuestionsButton = document.getElementById('view-questions-button');
const questionsListScreen = document.getElementById('questions-list-screen');
const questionsListContainer = document.getElementById('questions-list-container');
const backToConfigButton = document.getElementById('back-to-config-button');
const reviewCountInList = document.getElementById('review-count-in-list');
const theoryButton = document.getElementById('theory-button');
const theoryScreen = document.getElementById('theory-screen');
const backToConfigFromTheoryButton = document.getElementById('back-to-config-from-theory-button');
const topNavButtons = document.querySelector('.top-nav-buttons');

const startPracticeButton = document.getElementById('start-practice-button');
const examReviewScreen = document.getElementById('exam-review-screen');
const examReviewContainer = document.getElementById('exam-review-container');
const backToEndScreenButton = document.getElementById('back-to-end-screen-button');

// Nuevos elementos para Test por Temática
const topicTestButton = document.getElementById('topic-test-button');
const reviewScreenTopBackButton = document.getElementById('review-screen-top-back-button');

// Nuevos elementos para Filtros
// Los botones de filtros se eliminaron del HTML, pero mantenemos las variables de la pantalla
const filtersScreen = document.getElementById('filters-screen');
const filtersTopicCheckboxes = document.getElementById('filters-topic-checkboxes');
const numQuestionsSliderFilters = document.getElementById('num-questions-slider-filters');
const numQuestionsValFilters = document.getElementById('num-questions-val-filters');
const timeSliderFilters = document.getElementById('time-slider-filters');
const timeValFilters = document.getElementById('time-val-filters');
const startFilteredQuizButton = document.getElementById('start-filtered-quiz-button');
const backToConfigFromFiltersButton = document.getElementById('back-to-config-from-filters-button');
const categoryButtonsContainer = document.getElementById('category-buttons-container');

// Nuevos elementos para el modo examen
const startExamButton = document.getElementById('start-exam-button');
const examNavigationBar = document.getElementById('exam-navigation-bar');
const examNavQuestionsContainer = document.getElementById('exam-nav-questions-container');
const finishExamButton = document.getElementById('finish-exam-button');
const hamburgerMenu = document.getElementById('hamburger-menu');
const quizContainer = document.querySelector('.quiz-container'); // Contenedor principal

// Deshabilitar inicio hasta cargar datos
// startPracticeButton.disabled = true; // Se habilita al cargar las preguntas por defecto
// startPracticeButton.innerText = "Cargando preguntas...";

// Configuración de Sliders
numQuestionsSlider.oninput = function() { numQuestionsVal.innerHTML = this.value; }
numQuestionsSliderFilters.oninput = function() { numQuestionsValFilters.innerHTML = this.value; }
timeSlider.oninput = function() { timeVal.innerHTML = this.value; }
timeSliderFilters.oninput = function() { timeValFilters.innerHTML = this.value; }

// --- Lógica de Repaso (LocalStorage) ---
function getReviewList() {
    return JSON.parse(localStorage.getItem('scrum_quiz_review_list') || '[]');
}

function toggleReviewStatus() {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    // Usar un Set para garantizar que no haya duplicados
    const reviewListSet = new Set(getReviewList());

    if (reviewListSet.has(currentQuestion.question)) {
        reviewListSet.delete(currentQuestion.question);
    } else {
        reviewListSet.add(currentQuestion.question);
    }
    localStorage.setItem('scrum_quiz_review_list', JSON.stringify(Array.from(reviewListSet)));
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
// async function loadQuestionsFromExcel() {
//     // Ya no se carga el excel externo, se usan las defaultQuestions.
//     // Esta función se mantiene vacía para no romper la llamada inicial.
// }

// function processWorkbookData(data) {
//     const workbook = XLSX.read(data, { type: 'array' });
//     const firstSheetName = workbook.SheetNames[0];
//     const worksheet = workbook.Sheets[firstSheetName];
//     const jsonData = XLSX.utils.sheet_to_json(worksheet);

//     questions = [];
//     jsonData.forEach((row, index) => {
//         // Validar que los campos obligatorios existan y no estén vacíos
//         const hasQuestion = row.question && row.question.toString().trim() !== "";
//         const hasType = row.type && row.type.toString().trim() !== "";
//         const hasOptions = row.options && row.options.toString().trim() !== "";
//         const hasAnswer = row.correctAnswer !== undefined && row.correctAnswer !== null && row.correctAnswer.toString().trim() !== "";

//         if (hasQuestion && hasType && hasOptions && hasAnswer) {
//             try {
//                 const options = row.options.toString().split(';').map(opt => opt.trim()).filter(opt => opt !== "");
//                 if (options.length < 2) throw new Error("Debe tener al menos 2 opciones");

//                 let correctAnswer;
//                 if (row.type === 'multiple_choice') {
//                     // Convertir "0,1" en [0, 1] y filtrar valores no numéricos
//                     correctAnswer = row.correctAnswer.toString().split(',').map(n => parseInt(n.trim())).filter(n => !isNaN(n));
//                     if (correctAnswer.length === 0) throw new Error("Respuesta múltiple mal formateada");
//                 } else {
//                     correctAnswer = parseInt(row.correctAnswer);
//                     if (isNaN(correctAnswer)) throw new Error("Respuesta única no es un número válido");
//                 }

//                 questions.push({
//                     question: row.question.toString(),
//                     type: row.type.toString(),
//                     options: options,
//                     correctAnswer: correctAnswer,
//                     explanation: row.explanation || "Sin explicación disponible."
//                 });
//             } catch (error) {
//                 console.warn(`Fila ${index + 2} omitida: ${error.message}`);
//             }
//         } else {
//             console.warn(`Fila ${index + 2} omitida por campos incompletos.`);
//         }
//     });

//     updateConfigUI();
//     startPracticeButton.disabled = false;
//     startPracticeButton.innerText = "Empezar Quiz";
//     console.log("Preguntas cargadas correctamente");
// }

// Función para actualizar la interfaz de configuración (conteos y límites)
function updateConfigUI() {
    const totalQuestions = questions.length;
    const reviewCount = getReviewList().length;

    // Actualizar etiquetas del selector
    document.getElementById('option-all').textContent = `Todas las preguntas (${totalQuestions})`;
    document.getElementById('option-review').textContent = `Solo preguntas para repasar (${reviewCount})`;

    // Ajustar slider según modo seleccionado
    let maxVal = questionTypeSelect.value === 'review' ? reviewCount : totalQuestions;
    
    numQuestionsSlider.min = maxVal > 0 ? 1 : 0; // Ajustar mínimo si hay pocas preguntas
    numQuestionsSlider.max = Math.max(1, maxVal);
    numQuestionsSlider.value = Math.min(parseInt(numQuestionsSlider.value), numQuestionsSlider.max);
    numQuestionsVal.textContent = numQuestionsSlider.value;
}

// Evento para carga manual de archivo
// if (excelUpload) {
//     excelUpload.addEventListener('change', (e) => {
//         const file = e.target.files[0];
//         if (!file) return;
//         const reader = new FileReader();
//         reader.onload = (evt) => {
//             processWorkbookData(evt.target.result);
//         };
//         reader.readAsArrayBuffer(file);
//     });
// }

// Inicialización de preguntas base desde el documento interno
function cleanUpReviewList() {
    const allQuestionTexts = new Set(questions.map(q => q.question));
    let reviewList = getReviewList();
    const originalCount = reviewList.length;
    const cleanedList = reviewList.filter(reviewQuestionText => allQuestionTexts.has(reviewQuestionText));
    const newCount = cleanedList.length;

    if (originalCount !== newCount) {
        localStorage.setItem('scrum_quiz_review_list', JSON.stringify(cleanedList));
        updateConfigUI(); // Forzar actualización de la UI con el nuevo conteo
        console.log(`Limpieza de repaso: Se eliminaron ${originalCount - newCount} preguntas de repaso obsoletas.`);
    }
}

if (typeof defaultQuestions !== 'undefined' && defaultQuestions.length > 0) {
    questions = [...defaultQuestions];
    cleanUpReviewList(); // Limpiar la lista de repaso con las preguntas actuales
    updateConfigUI(); startPracticeButton.disabled = false;
    startPracticeButton.innerText = "Empezar Quiz";
    console.log("Banco interno precargado con éxito.");
}

if (typeof defaultQuestionsFiltros !== 'undefined' && defaultQuestionsFiltros.length > 0) {
    questionsByTopic = [...defaultQuestionsFiltros];
    console.log("Banco de preguntas por temática cargado con éxito. Cantidad:", questionsByTopic.length);
} else {
    topicTestButton.style.display = 'none';
    // También ocultar el botón de filtros si no hay preguntas para filtrar
    filtersButton.style.display = 'none';
    console.log("defaultQuestionsFiltros no está definido o está vacío. Ocultando botones de temática y filtros.");
}

function startRealExam() {
    isExamMode = true;
    let questionsToUse = [...questions];
    let count;

    count = 80;
    totalSeconds = 60 * 60; // 60 minutos
    questionsToUse = questionsToUse.sort(() => 0.5 - Math.random()); // Siempre aleatorio en modo examen
    quizQuestions = questionsToUse.slice(0, Math.min(count, questionsToUse.length));
    userAnswers = new Array(quizQuestions.length).fill(null);
    visitedQuestions = new Array(quizQuestions.length).fill(false);
    
    startQuizCommon();
}

function startPracticeQuiz() {
    isExamMode = false;
    let questionsToUse = [...questions];
    let count;

    const questionType = questionTypeSelect.value;
    if (questionType === 'review') {
        const reviewList = getReviewList();
        questionsToUse = questionsToUse.filter(q => reviewList.includes(q.question));
        if (questionsToUse.length === 0) {
            alert("No tienes preguntas marcadas para repasar. ¡Marca algunas primero durante el quiz!");
            return;
        }
    }
    count = questionType === 'review' ? questionsToUse.length : parseInt(numQuestionsSlider.value);
    totalSeconds = parseInt(timeSlider.value) * 60;
    const order = questionOrderSelect.value;

    if (order === 'random') {
        questionsToUse = questionsToUse.sort(() => 0.5 - Math.random());
        // Si es aleatorio, no tiene sentido empezar desde un índice específico.
        quizQuestions = questionsToUse.slice(0, count);
    } else {
        // Para secuencial, sí respetamos el índice de inicio.
        quizQuestions = questionsToUse.slice(selectedStartIndex, selectedStartIndex + count);
    }

    startQuizCommon();
}

function startFilteredQuiz() {
    isExamMode = false;
    const selectedTopics = [];
    filtersTopicCheckboxes.querySelectorAll('.filter-btn.selected').forEach(button => {
        selectedTopics.push(button.dataset.section);
    });

    if (selectedTopics.length === 0) {
        alert("Por favor, selecciona al menos una temática para empezar el test.");
        return;
    }

    let filteredQuestions = questionsByTopic.filter(q => selectedTopics.includes(q.section));
    const count = parseInt(numQuestionsSliderFilters.value);
    totalSeconds = parseInt(timeSliderFilters.value) * 60;

    filteredQuestions = filteredQuestions.sort(() => 0.5 - Math.random());
    quizQuestions = filteredQuestions.slice(0, count);
    filtersScreen.classList.add('hidden');
    startQuizCommon();
}
function startQuizCommon() {
    configScreen.classList.add('hidden');
    questionsListScreen.classList.add('hidden');
    theoryScreen.classList.add('hidden');
    filtersScreen.classList.add('hidden');
    
    quizScreen.classList.remove('hidden');
    topNavButtons.style.display = 'none'; // Ocultar botones de navegación al empezar el quiz
    topRestartButton.classList.remove('hidden'); // Mostrar el botón de reiniciar superior
    quizEndMessage.classList.add('hidden');
    currentQuestionIndex = 0; // El quiz interno siempre empieza en 0
    correctCount = 0;
    incorrectCount = 0;
    totalQuestionsSpan.textContent = quizQuestions.length;
    toggleReviewButton.style.display = isExamMode ? 'inline-block' : 'inline-block'; // Siempre visible

    if (isExamMode) {
        examNavigationBar.classList.remove('hidden');
        document.getElementById('correct-stat').classList.add('hidden');
        document.getElementById('incorrect-stat').classList.add('hidden');
        document.getElementById('score-stat').classList.add('hidden');
        populateExamNav();
    } else {
        examNavigationBar.classList.add('hidden');
        document.getElementById('correct-stat').classList.remove('hidden');
        document.getElementById('incorrect-stat').classList.remove('hidden');
        document.getElementById('score-stat').classList.remove('hidden');
    }
    startTimer();
    loadQuestion();
}

// --- Lógica para la pantalla de listado de preguntas ---

function populateQuestionsList() {
    questionsListContainer.innerHTML = ''; // Limpiar la lista anterior
    const reviewList = getReviewList(); // Obtener la lista de repaso una vez
    if (reviewCountInList) {
        reviewCountInList.textContent = reviewList.length;
    }
    questions.forEach((question, index) => {
        const questionItem = document.createElement('div');
        questionItem.classList.add('question-list-item');
        questionItem.dataset.index = index;
        
        // Contenedor para el texto de la pregunta (para que sea clickeable)
        const questionTitle = document.createElement('div');
        questionTitle.classList.add('question-list-title');
        let questionText = `${index + 1}. ${question.question}`;

        if (index === selectedStartIndex) {
            questionItem.classList.add('selected-start-question');
        }

        // Crear el contenedor de detalles (respuesta y explicación), oculto por defecto
        const detailsContainer = document.createElement('div');
        detailsContainer.classList.add('question-details');

        const correctAnswer = Array.isArray(question.correctAnswer) 
            ? question.correctAnswer.map(i => question.options[i]).join(', ')
            : question.options[question.correctAnswer];

        detailsContainer.innerHTML = `
            <p><strong>Respuesta Correcta:</strong> ${correctAnswer}</p>
            <p><strong>Explicación:</strong> ${question.explanation}</p>
        `;

        questionTitle.addEventListener('click', () => {
            selectedStartIndex = index; // Actualizar el índice de inicio
            
            // Quitar el resaltado anterior y aplicar el nuevo
            const currentlySelected = document.querySelector('.selected-start-question');
            if (currentlySelected) {
                currentlySelected.classList.remove('selected-start-question');
            }
            questionItem.classList.add('selected-start-question');

            // Lógica para expandir/colapsar la respuesta
            const isExpanded = questionItem.classList.contains('expanded');

            // Opcional: Colapsar cualquier otro item que esté expandido
            document.querySelectorAll('.question-list-item.expanded').forEach(item => {
                item.classList.remove('expanded');
            });

            // Expandir o colapsar el item actual
            if (!isExpanded) {
                questionItem.classList.add('expanded');
            }
        });

        // Marcar si es una pregunta de repaso
        if (reviewList.includes(question.question)) {
            questionItem.classList.add('is-review-question');
            questionText = `⭐ ${questionText}`; // Añadir estrella
        }
        questionTitle.textContent = questionText;
        questionItem.appendChild(questionTitle);
        questionItem.appendChild(detailsContainer);
        questionsListContainer.appendChild(questionItem);
    });
}

function restartQuiz() {
    updateConfigUI(); // Actualizar contadores de repaso y totales al volver al menú
    configScreen.classList.remove('hidden');
    quizEndMessage.classList.add('hidden');
    quizScreen.classList.add('hidden'); // Asegurarse de ocultar la pantalla del quiz
    topRestartButton.classList.add('hidden'); // Ocultar el botón de reiniciar superior
    reviewExamButton.classList.add('hidden');
    topCloseButton.classList.add('hidden'); // Ocultar el botón de cierre en el menú principal
    topNavButtons.style.display = ''; // Restaurar la visibilidad de los botones de navegación
    questionsListScreen.classList.add('hidden');
    filtersScreen.classList.add('hidden');
    theoryScreen.classList.add('hidden');
    console.log("Reiniciando quiz. questionsByTopic:", questionsByTopic.length);
    examReviewScreen.classList.add('hidden');
    topNavButtons.style.display = ''; // Asegurarse de que los botones superiores sean visibles
}

// --- Lógica del Quiz ---
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
    // Marcar la pregunta actual como visitada en modo examen
    if (isExamMode) {
        visitedQuestions[currentQuestionIndex] = true;
    }
    
    answeredCurrentQuestion = false;
    explanationArea.classList.add('hidden');
    nextButton.classList.add('hidden');
    answerButton.classList.remove('hidden');
    answerButton.disabled = true;

    // Fin del quiz
    if (currentQuestionIndex >= quizQuestions.length) {
        displayQuizEnd();
        return;
    }

    const question = quizQuestions[currentQuestionIndex];
    questionTextElement.textContent = question.question;
    updateReviewButtonUI();
    optionsContainer.innerHTML = ''; // Limpiar opciones anteriores
    
    if (isExamMode) {
        answerButton.classList.add('hidden');
        nextButton.classList.remove('hidden');
    }
    
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
            if (!isExamMode) {
                answerButton.disabled = false;
            }
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
            if (isExamMode) {
                saveCurrentAnswer();
                updateExamNav();
            }
        });

        label.appendChild(input);
        label.appendChild(document.createTextNode(option));
        optionsContainer.appendChild(label);
    });

    // Restaurar respuesta del usuario en modo examen
    if (isExamMode && userAnswers[currentQuestionIndex] !== null) {
        const savedAnswers = userAnswers[currentQuestionIndex];
        optionsContainer.querySelectorAll('input').forEach(input => {
            if (savedAnswers.includes(parseInt(input.value))) {
                input.checked = true;
                input.closest('.option-label').classList.add('selected');
            }
        });
    }

    updateScoreBoard();
    if (isExamMode) {
        updateExamNav();
    }
}

function saveCurrentAnswer() {
    const selectedOptions = [];
    optionsContainer.querySelectorAll('input:checked').forEach(input => {
        selectedOptions.push(parseInt(input.value));
    });
    userAnswers[currentQuestionIndex] = selectedOptions.length > 0 ? selectedOptions : null;
}

function goToQuestion(index) {
    // Guardar la respuesta de la pregunta actual ANTES de cambiar de índice
    if (isExamMode) {
        saveCurrentAnswer();
    }

    if (index >= 0 && index < quizQuestions.length) {
        currentQuestionIndex = index;
        loadQuestion();
    }
}

function nextQuestion() {
    // Guardar la respuesta actual ANTES de pasar a la siguiente
    if (isExamMode) {
        if (currentQuestionIndex < quizQuestions.length) {
            goToQuestion(currentQuestionIndex + 1);
        }
    } else {
        processNextQuestionInPractice();
    }
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

function processNextQuestionInPractice() {
    // Limpiar resaltados del marcador antes de pasar a la siguiente
    correctCountSpan.parentElement.classList.remove('highlight-correct');
    incorrectCountSpan.parentElement.classList.remove('highlight-incorrect');

    currentQuestionIndex++;
    selectedStartIndex = Math.max(selectedStartIndex, currentQuestionIndex); // Para modo secuencial

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
    
    if (isExamMode) return; // No mostrar porcentaje en tiempo real en modo examen

    
    // Calcular y mostrar el porcentaje actual
    const currentTotalAnswered = currentQuestionIndex + (answeredCurrentQuestion ? 1 : 0); // Considera la pregunta actual si ya fue respondida
    const currentPercentage = currentTotalAnswered > 0 ? Math.round((correctCount / currentTotalAnswered) * 100) : 0;
    currentPercentageCountSpan.textContent = currentPercentage;
}

function displayQuizEnd() {
    clearInterval(timerInterval);
    quizScreen.classList.add('hidden');
    examNavigationBar.classList.add('hidden');

    topRestartButton.classList.add('hidden'); // Ocultar el botón de reiniciar superior al finalizar
    quizEndMessage.classList.remove('hidden');

    if (isExamMode) {
        // Calcular resultados finales para el modo examen
        correctCount = 0;
        incorrectCount = 0;
        quizQuestions.forEach((q, index) => {
            const userAnswer = userAnswers[index];
            if (userAnswer !== null) {
                const correctAnswersSet = new Set(Array.isArray(q.correctAnswer) ? q.correctAnswer : [q.correctAnswer]);
                const selectedOptionsSet = new Set(userAnswer);
                const isCorrect = (correctAnswersSet.size === selectedOptionsSet.size) && [...selectedOptionsSet].every(option => correctAnswersSet.has(option));
                if (isCorrect) correctCount++;
                else incorrectCount++;
            } else {
                incorrectCount++; // No respondida cuenta como incorrecta
            }
        });
    }

    finalCorrectCountSpan.textContent = correctCount;
    finalIncorrectCountSpan.textContent = incorrectCount;

    const percentage = quizQuestions.length > 0 ? Math.round((correctCount / quizQuestions.length) * 100) : 0;
    percentageCountSpan.textContent = percentage;

    // Lógica de Victoria o Derrota (ej: 85% para ganar)
    if (percentage >= 85) {
        endStatusLabel.textContent = "¡GENIAL!";
        endTitle.textContent = "¡HAS APROBADO!";
        endTitle.style.color = "#1A237E";
        tryAgainButton.classList.add('hidden');
        if (isExamMode) reviewExamButton.classList.remove('hidden');
    } else {
        endStatusLabel.textContent = "¡OH NO!";
        endTitle.textContent = "OHH, HAS SUSPENDIDO. ¡VUELVE A INTENTARLO!";
        endTitle.style.color = "#D32F2F";
        tryAgainButton.classList.remove('hidden');
        if (isExamMode) reviewExamButton.classList.remove('hidden');
    }
}

// --- Funciones para el Modo Examen ---

function populateExamNav() {
    examNavQuestionsContainer.innerHTML = '';
    quizQuestions.forEach((_, index) => {
        const navButton = document.createElement('button');
        navButton.textContent = index + 1;
        navButton.classList.add('exam-nav-btn');
        navButton.dataset.index = index;
        navButton.addEventListener('click', () => goToQuestion(index));
        examNavQuestionsContainer.appendChild(navButton);
    });
}

function updateExamNav() {
    const reviewList = getReviewList();
    examNavQuestionsContainer.querySelectorAll('.exam-nav-btn').forEach((btn, index) => {
        btn.classList.remove('current', 'answered-exam', 'unanswered-visited-exam');

        if (index === currentQuestionIndex) {
            btn.classList.add('current');
        }

        if (userAnswers[index] !== null) {
            btn.classList.add('answered-exam');
        } else if (visitedQuestions[index]) {
            btn.classList.add('unanswered-visited-exam');
        }
    });
}

function showExamReview() {
    quizEndMessage.classList.add('hidden');
    examReviewScreen.classList.remove('hidden');
    const reviewNavBar = document.getElementById('exam-review-nav-bar');
    examReviewContainer.innerHTML = '';
    reviewNavBar.innerHTML = '';

    quizQuestions.forEach((q, index) => {
        // --- Crear el item de la pregunta en la lista de revisión ---
        const reviewItem = document.createElement('div');
        reviewItem.classList.add('exam-review-item');

        let questionStatus = 'unanswered';
        const userAnswer = userAnswers[index];
        const correctAnswersSet = new Set(Array.isArray(q.correctAnswer) ? q.correctAnswer : [q.correctAnswer]);
        let isCorrect = false;

        if (userAnswer !== null) {
            const selectedOptionsSet = new Set(userAnswer);
            isCorrect = (correctAnswersSet.size === selectedOptionsSet.size) && [...selectedOptionsSet].every(option => correctAnswersSet.has(option));
            questionStatus = isCorrect ? 'correct' : 'incorrect';
        }
        reviewItem.classList.add(questionStatus);
        reviewItem.id = `review-q-${index}`; // Añadir un ID para el anclaje

        // --- Crear el botón de navegación para la barra superior ---
        const navButton = document.createElement('button');
        navButton.textContent = index + 1;
        navButton.classList.add('exam-review-nav-btn');
        navButton.classList.add(isCorrect ? 'correct-review' : 'incorrect-review');
        navButton.addEventListener('click', () => {
            // Desplazarse a la pregunta correspondiente
            const targetQuestion = document.getElementById(`review-q-${index}`);
            if (targetQuestion) {
                targetQuestion.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
        reviewNavBar.appendChild(navButton);


        const questionTitle = document.createElement('h3');
        questionTitle.textContent = `${index + 1}. ${q.question}`;
        reviewItem.appendChild(questionTitle);

        const optionsDiv = document.createElement('div');
        optionsDiv.classList.add('options-container');
        q.options.forEach((opt, optIndex) => {
            const label = document.createElement('div');
            label.classList.add('option-label');
            
            const isCorrectOption = correctAnswersSet.has(optIndex);
            const isUserSelection = userAnswer && userAnswer.includes(optIndex);

            if (isCorrectOption) {
                label.classList.add('correct');
            }
            if (isUserSelection && !isCorrectOption) {
                label.classList.add('incorrect');
            }
            if (isUserSelection) {
                label.classList.add('selected');
            }

            label.textContent = opt;
            optionsDiv.appendChild(label);
        });
        reviewItem.appendChild(optionsDiv);

        const explanationDiv = document.createElement('div');
        explanationDiv.classList.add('explanation-area');
        explanationDiv.classList.remove('hidden');
        explanationDiv.innerHTML = `<h3>Explicación:</h3><p>${q.explanation}</p>`;
        reviewItem.appendChild(explanationDiv);

        examReviewContainer.appendChild(reviewItem);
    });
}

// --- Funciones para Filtros ---
function showFiltersScreen() {
    configScreen.classList.add('hidden');
    questionsListScreen.classList.add('hidden');
    theoryScreen.classList.add('hidden');
    filtersScreen.classList.remove('hidden');
    topNavButtons.classList.remove('hidden');
    topCloseButton.classList.remove('hidden');
    console.log("Mostrando pantalla de filtros. questionsByTopic:", questionsByTopic.length);

    populateFilterCheckboxes(true); // Pasar true para resetear
}

function populateFilterCheckboxes() {
    filtersTopicCheckboxes.innerHTML = '';
    filtersTopicCheckboxes.className = 'topic-grid-container'; // Reutilizar el estilo de la cuadrícula
    // Generar secciones dinámicamente desde el archivo de preguntas
    const sections = [...new Set(questionsByTopic.map(q => q.section))];

    sections.forEach(section => {
        const filterButton = document.createElement('button');
        filterButton.textContent = section;
        filterButton.classList.add('topic-btn', 'filter-btn'); // Usar clases de botón
        filterButton.dataset.section = section;

        filterButton.addEventListener('click', () => {
            filterButton.classList.toggle('selected'); // Activar/desactivar selección
            updateFilteredQuestionsCount();
        });

        filtersTopicCheckboxes.appendChild(filterButton);
    });
    updateFilteredQuestionsCount();
}

function updateFilteredQuestionsCount(isInitialLoad = false) {
    const selectedTopics = [];
    filtersTopicCheckboxes.querySelectorAll('.filter-btn.selected').forEach(button => {
        selectedTopics.push(button.dataset.section);
    });
    const availableQuestions = questionsByTopic.filter(q => selectedTopics.includes(q.section)).length;
    
    numQuestionsSliderFilters.max = availableQuestions > 0 ? availableQuestions : 1; // Evitar max < min
    
    if (isInitialLoad || availableQuestions === 0) {
        numQuestionsSliderFilters.value = 0;
    } else {
        numQuestionsSliderFilters.value = Math.min(parseInt(numQuestionsSliderFilters.value), numQuestionsSliderFilters.max);
        if (numQuestionsSliderFilters.value == 0 && availableQuestions > 0) numQuestionsSliderFilters.value = 1;
    }
    numQuestionsSliderFilters.min = availableQuestions > 0 ? 1 : 0;
    numQuestionsValFilters.textContent = numQuestionsSliderFilters.value;
}

// El único botón que queda para filtros/temáticas es topicTestButton
if (topicTestButton) topicTestButton.addEventListener('click', showFiltersScreen);
if (startFilteredQuizButton) startFilteredQuizButton.addEventListener('click', startFilteredQuiz);
if (backToConfigFromFiltersButton) backToConfigFromFiltersButton.addEventListener('click', restartQuiz);
if (startExamButton) startExamButton.addEventListener('click', startRealExam);
viewQuestionsButton.addEventListener('click', () => {
    populateQuestionsList();
    configScreen.classList.add('hidden');
    theoryScreen.classList.add('hidden');
    filtersScreen.classList.add('hidden'); // Asegurarse de ocultar filtros
    questionsListScreen.classList.remove('hidden');
    topNavButtons.classList.remove('hidden');
    topCloseButton.classList.remove('hidden');
});

// Event Listeners
if (startPracticeButton) startPracticeButton.addEventListener('click', startPracticeQuiz);
if (answerButton) answerButton.addEventListener('click', checkAnswer);
if (nextButton) nextButton.addEventListener('click', nextQuestion);
if (toggleReviewButton) toggleReviewButton.addEventListener('click', toggleReviewStatus);
if (clearReviewButton) clearReviewButton.addEventListener('click', clearReviewList);
if (topRestartButton) topRestartButton.addEventListener('click', restartQuiz); // Event listener para el nuevo botón
if (restartButton) restartButton.addEventListener('click', restartQuiz);
if (tryAgainButton) tryAgainButton.addEventListener('click', restartQuiz);
if (backToConfigButton) {
    backToConfigButton.addEventListener('click', restartQuiz);
}



const exitButton = document.getElementById('exit-button'); // This seems to be the old close button from the end screen
if (exitButton) { // Let's make it also restart the quiz to be consistent
    exitButton.addEventListener('click', restartQuiz);
}

if (topCloseButton) {
    topCloseButton.addEventListener('click', restartQuiz);
}

if (theoryButton) {
    theoryButton.addEventListener('click', () => {
        filtersScreen.classList.add('hidden');
        configScreen.classList.add('hidden');
        questionsListScreen.classList.add('hidden');
        theoryScreen.classList.remove('hidden');
        topNavButtons.classList.remove('hidden');
        topCloseButton.classList.remove('hidden');
    });
}

if (backToConfigFromTheoryButton) {
    backToConfigFromTheoryButton.addEventListener('click', restartQuiz);
}

if (finishExamButton) {
    finishExamButton.addEventListener('click', () => {
        if (confirm("¿Estás seguro de que quieres finalizar el examen?")) {
            displayQuizEnd();
        }
    });
}
if (reviewExamButton) reviewExamButton.addEventListener('click', showExamReview);
if (backToEndScreenButton) backToEndScreenButton.addEventListener('click', () => {
    examReviewScreen.classList.add('hidden');
    quizEndMessage.classList.remove('hidden');
});
if (reviewScreenTopBackButton) reviewScreenTopBackButton.addEventListener('click', () => {
    examReviewScreen.classList.add('hidden');
    quizEndMessage.classList.remove('hidden');
});

if (hamburgerMenu) {
    hamburgerMenu.addEventListener('click', () => {
        const navButtons = document.getElementById('top-nav-buttons');
        navButtons.classList.toggle('show');
    });

    // Cerrar el menú de hamburguesa al hacer clic en un botón
    document.querySelectorAll('.top-nav-buttons button').forEach(button => {
        button.addEventListener('click', () => {
            document.getElementById('top-nav-buttons').classList.remove('show');
        });
    });
}

function setupCollapsibleTheory() {
    const theoryContent = document.querySelector('.theory-content');
    if (!theoryContent) return;

    const theoryContainer = document.getElementById('theory-container');
    const nodes = Array.from(theoryContent.childNodes);
    let currentSection = null;

    nodes.forEach(node => {
        if (node.nodeName === 'H2') {
            // Crear un nuevo contenedor para la sección
            const sectionDiv = document.createElement('div');
            sectionDiv.className = 'theory-section';

            // Crear el encabezado
            const headerDiv = document.createElement('div');
            headerDiv.className = 'theory-section-header';
            headerDiv.appendChild(node); // Mover el H2 al header

            const closeBtn = document.createElement('button');
            closeBtn.className = 'theory-section-close-btn';
            closeBtn.innerHTML = '✖';
            headerDiv.appendChild(closeBtn); // Añadir el botón de cierre al encabezado
            
            // Crear el cuerpo del contenido
            const bodyDiv = document.createElement('div');
            bodyDiv.className = 'theory-section-body';

            // Evento para el botón de cierre (evita que el clic se propague al header)
            closeBtn.addEventListener('click', (e) => {
                e.stopPropagation(); // Detener la propagación para no abrir/cerrar el panel
                sectionDiv.classList.remove('expanded');
            });


            sectionDiv.appendChild(headerDiv);
            sectionDiv.appendChild(bodyDiv);
            theoryContainer.appendChild(sectionDiv);

            currentSection = bodyDiv;

            headerDiv.addEventListener('click', () => {
                sectionDiv.classList.toggle('expanded');
            });

        } else if (currentSection && node.nodeType !== Node.COMMENT_NODE && (node.nodeType !== Node.TEXT_NODE || node.textContent.trim() !== '')) {
            // Añadir el resto de nodos al cuerpo de la sección actual
            currentSection.appendChild(node.cloneNode(true));
        }
    });

    theoryContent.style.display = 'none'; // Ocultar el contenido original
}

// Cargar datos al iniciar
// loadQuestionsFromExcel(); // Ya no es necesario
document.addEventListener('DOMContentLoaded', setupCollapsibleTheory);
