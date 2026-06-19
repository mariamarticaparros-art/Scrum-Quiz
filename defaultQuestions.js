const defaultQuestions = [
    {
        question: "Si un elemento del Sprint Backlog no puede terminarse antes de que termine el Sprint (resultó que hay mucho más trabajo del que se estimaba), el Sprint se cancela.",
        type: "true_false",
        options: [
            "Cierto",
            "Falso"
        ],
        correctAnswer: 1,
        explanation: "El Sprint solo se cancela en caso de que el Sprint Goal quede obsoleto. Si no se podía realizar algún trabajo, el Sprint Backlog debería renegociarse entre el Product Owner y el equipo de desarrollo."
    },
    {
        question: "El equipo de melé está formado por",
        type: "single_choice",
        options: [
            "El Product Owner",
            "Los principales actores",
            "El Scrum Master",
            "El equipo de desarrollo"
        ],
        correctAnswer: [0, 2, 3],
        explanation: "El equipo Scrum está formado oficialmente por un Product Owner, el equipo de desarrollo y un Scrum Master de forma horizontal y cohesionada."
    },
    {
        question: "¿Qué compone Scrum (seleccionar cuatro)?",
        type: "multiple_choice",
        options: [
            "Roles",
            "Informes",
            "Listas de quemado",
            "Eventos",
            "Artefactos",
            "Reglas"
        ],
        correctAnswer: [0, 3, 4, 5],
        explanation: "El marco Scrum consta de los equipos Scrum y sus roles, eventos, artefactos y reglas asociados. Cada componente dentro del marco cumple un propósito específico y es esencial para el éxito."
    },
    {
        question: "¿Quién puede hacer cambios en el Product Backlog? Selecciona dos opciones.",
        type: "multiple_choice",
        options: [
            "Cualquiera",
            "El Product Owner",
            "El Scrum Master",
            "Los principales actores",
            "El equipo de desarrollo, pero con permiso del Product Owner"
        ],
        correctAnswer: [1, 4],
        explanation: "El Product Owner es la única persona responsable del Product Backlog. Sin embargo, puede delegar parte del trabajo relacionado con la gestión del backlog de producto al equipo de desarrollo."
    },
    {
        question: "¿Quién es responsable de supervisar el progreso hacia objetivos de alto nivel?",
        type: "single_choice",
        options: [
            "El Scrum Master y el Equipo de Desarrollo",
            "El Scrum Master",
            "El Product Owner y el equipo de desarrollo",
            "El equipo de melé",
            "El equipo de desarrollo",
            "El Product Owner"
        ],
        correctAnswer: 5,
        explanation: "El Product Owner registra el trabajo total restante al menos en cada revisión de Sprint y evalúa el progreso hacia la finalización del trabajo proyectado antes del tiempo deseado."
    },
    {
        question: "El equipo de desarrollo debería ser capaz de explicar al Product Owner y al Scrum Master cómo pretende trabajar como un equipo autoorganizado para lograr el objetivo del Sprint y crear el Incremento previsto.",
        type: "true_false",
        options: [
            "Falso",
            "Cierto"
        ],
        correctAnswer: 1,
        explanation: "Al final de la Planificación del Sprint, el equipo de desarrollo debería ser capaz de explicar al Product Owner y al Scrum Master cómo pretende trabajar como un equipo autoorganizado para lograr el Sprint Goal."
    },
    {
        question: "¿Qué es el Sprint Backlog?",
        type: "single_choice",
        options: [
            "Los elementos de Product Backlog seleccionados para este Sprint",
            "El plan para entregar los artículos de Product Backlog",
            "Los artículos de Product Backlog seleccionados para este Sprint más el plan para su entrega",
            "Los elementos de Product Backlog seleccionados para este Sprint más los elementos de Team Backlog"
        ],
        correctAnswer: 2,
        explanation: "El Backlog de Sprint es el conjunto de elementos de Product Backlog seleccionados para el Sprint, además de un plan para entregar el Incremento del producto y alcanzar el objetivo del Sprint."
    },
    {
        question: "Revisa todas las oportunidades formales para inspeccionar y adaptarse.",
        type: "multiple_choice",
        options: [
            "El Sprint",
            "La Revisión de Sprint",
            "El Daily Scrum",
            "La retrospectiva del sprint",
            "La planificación del sprint"
        ],
        correctAnswer: [0, 1, 2, 3, 4],
        explanation: "Aparte del propio Sprint, que es un contenedor para todos los demás eventos, cada evento en Scrum es una oportunidad formal para inspeccionar y adaptar algo."
    },
    {
        question: "¿Qué debe tenerse en cuenta para la definición de \"hecho\"? Selecciona los dos elementos más apropiados.",
        type: "multiple_choice",
        options: [
            "Experiencia del Product Owner",
            "Definición de \"Hecho\" de otros equipos Scrum trabajando en el mismo producto",
            "Definición de \"Hecho\" de otros equipos Scrum trabajando en otros productos",
            "Convenciones, normas y directrices de la Organización",
            "Consejo del Scrum Master"
        ],
        correctAnswer: [1, 3],
        explanation: "Si la definición es parte de las convenciones organizacionales, todos los equipos deben seguirla. Si no, el equipo debe definirla. Si hay varios equipos en el mismo producto, deben definirla mutuamente."
    },
    {
        question: "¿Cómo sirve el Scrum Master a la organización? Selecciona las tres respuestas más adecuadas.",
        type: "multiple_choice",
        options: [
            "Planificación de implementaciones de Scrum dentro de la organización",
            "Combinar desarrolladores experimentados y especialistas junior en diferentes equipos de desarrollo de la organización para acelerar la adopción de Scrum",
            "Asegurarse de que los principales interesados estén invitados a todas las revisiones de Scrum dentro de la organización",
            "Liderar y entrenar a la organización en su adopción de Scrum",
            "Colaborando con otros Scrum Masters para aumentar la eficacia de la aplicación de Scrum en la organización"
        ],
        correctAnswer: [0, 3, 4],
        explanation: "El Scrum Master sirve liderando y entrenando en la adopción, planificando implementaciones y colaborando con otros Scrum Masters para aumentar la eficacia del marco."
    },
    {
        question: "¿Qué es el Incremento?",
        type: "single_choice",
        options: [
            "La suma de todos los elementos del Product Backlog completados durante el Sprint y el valor de los incrementos de todos los Sprints anteriores",
            "La suma de todos los elementos del Product Backlog completados durante el Sprint",
            "Todos los elementos del Sprint Backlog que podrían ser publicados independientemente de si el Product Owner decide hacerlo o no",
            "Todos los elementos \"Hechos\" en el Backlog de Sprint"
        ],
        correctAnswer: 0,
        explanation: "El incremento es la suma de todos los elementos del Product Backlog completados durante el Sprint y el valor de los incrementos de todos los Sprints anteriores."
    },
    {
        question: "¿Qué muestra Cone of Doubt?",
        type: "single_choice",
        options: [
            "Dependencias, horarios de inicio y de finalización de las tareas del proyecto",
            "Jerarquía de tareas que conforman un proyecto",
            "Cuánto trabajo queda hasta el final del Sprint",
            "Cuánto se sabe sobre el Producto a lo largo del tiempo"
        ],
        correctAnswer: 3,
        explanation: "El Cono de Incertidumbre describe la evolución de la cantidad de incertidumbre durante un proyecto, demostrando que sabemos más a lo largo del tiempo."
    },
    {
        question: "¿Qué incluye la gestión del Product Backlog? Selecciona los tres elementos más aplicables.",
        type: "multiple_choice",
        options: [
            "Asegurarse de que el Product Backlog sea visible, transparente y claro para todos, y muestre en qué trabajará el equipo Scrum a continuación",
            "Trasladar los elementos del retraso de producto al backlog de Sprint",
            "Presentar los elementos del Backlog de Producto a los Principales Interesados",
            "Optimizar el valor del trabajo que realiza el Equipo de Desarrollo",
            "Encargar los artículos del Product Backlog para lograr mejor los objetivos y misiones"
        ],
        correctAnswer: [0, 3, 4],
        explanation: "Incluye expresar claramente los elementos, ordenarlos para lograr mejor objetivos y misiones, optimizar el valor y asegurarse de que el backlog sea visible, transparente y claro."
    },
    {
        question: "La definición de Hecho puede revisarse y adaptarse en cada Sprint Retrospective. ¿Verdadero o falso?",
        type: "true_false",
        options: [
            "Cierto",
            "Falso"
        ],
        correctAnswer: 0,
        explanation: "Durante cada retrospectiva de Sprint, el equipo Scrum planifica formas de aumentar la calidad del producto mejorando los procesos de trabajo o adaptando la definición de \"Hecho\" si es apropiado."
    },
    {
        question: "¿Dónde se puede usar Scrum? Revisa todos los elementos aplicables.",
        type: "multiple_choice",
        options: [
            "Gestión del funcionamiento de una organización",
            "Investigación e identificación de mercados, tecnologías y capacidades de producto viables",
            "Desarrollo y mantenimiento de entornos operativos en la nube y otros",
            "Desarrollo de productos y mejoras",
            "Desarrollo de software y hardware",
            "Desarrollo de casi todo lo que usamos en nuestra vida diaria como individuos y sociedades"
        ],
        correctAnswer: [0, 1, 2, 3, 4, 5],
        explanation: "Scrum se utiliza extensamente en todo el mundo para desarrollo complejo en software, hardware, funcionamiento organizacional, investigación de mercados y prácticamente cualquier cosa en nuestra vida diaria."
    },
    {
        question: "¿Podría terminarse la planificación del Sprint si solo el trabajo planificado para los primeros días del Sprint se descompone en unidades de un día o menos?",
        type: "single_choice",
        options: [
            "Sí, si también se estima el trabajo restante, quizá en unidades más grandes",
            "No, todos los elementos del Sprint Backlog deberían descomponerse en unidades de un día o menos al final de la planificación del Sprint"
        ],
        correctAnswer: 0,
        explanation: "La Guía Scrum requiere que solo el trabajo planificado para los primeros días del Sprint se descomponga al final de la Planificación, a menudo en unidades de un día o menos."
    },
    {
        question: "¿Cuáles son las preguntas que responde la Planificación de Sprints? Selecciona dos.",
        type: "multiple_choice",
        options: [
            "¿Qué se puede ofrecer en el Incremento resultante del próximo Sprint?",
            "¿Cómo se logrará el trabajo necesario para entregar el Incremento?",
            "¿Cuál es el tamaño de la Deuda Técnica y cómo podría eliminarse?",
            "¿Qué nuevas tecnologías podrían usarse para acelerar la velocidad del equipo de desarrollo?",
            "¿Quién será responsable de cada elemento en el Backlog de Sprint?"
        ],
        correctAnswer: [0, 1],
        explanation: "La reunión de Sprint Planning responde de manera oficial a dos preguntas críticas: ¿Qué se puede entregar? y ¿Cómo se logrará hacer ese trabajo?"
    },
    {
        question: "¿Cuáles son los cuadros de tiempo para la Sprint Review y la Sprint Retrospective?",
        type: "single_choice",
        options: [
            "Caja de tiempo de 4 horas para cada una",
            "3 y 4 horas respectivamente",
            "Caja de tiempo de 3 horas para cada una",
            "4 y 3 horas respectivamente"
        ],
        correctAnswer: 3,
        explanation: "La Revisión del Sprint es, como mucho, una reunión de cuatro horas para Sprints de un mes. La Retrospectiva del Sprint es, como mucho, una reunión de tres horas para los Sprints de un mes."
    },
    {
        question: "¿Cuánto debería durar la Planificación del Sprint?",
        type: "single_choice",
        options: [
            "No más de 8 horas",
            "Hasta que todos los elementos del Sprint Backlog se descomponen en unidades de un día o menos",
            "No más de 4 horas",
            "No más del 10% de la capacidad del equipo de desarrollo"
        ],
        correctAnswer: 0,
        explanation: "La planificación de sprints está limitada a un máximo de ocho horas para un sprint de duración mensual (un mes estándar)."
    },
    {
        question: "¿Quién es responsable de todas las estimaciones en el Product Backlog?",
        type: "single_choice",
        options: [
            "El equipo de desarrollo",
            "El Product Owner",
            "El equipo de melé",
            "El Product Owner y el Scrum Master",
            "El Scrum Master y el Equipo de Desarrollo",
            "El Product owner y el equipo de desarrollo",
            "El Scrum Master"
        ],
        correctAnswer: 0,
        explanation: "El equipo de desarrollo es responsable de todas las estimaciones. El Product Owner puede influir y guiar ayudando a entender los intercambios, pero quien hace el trabajo tiene la última palabra."
    },
    {
        question: "¿Se permite saltarse el Daily Scrum si no hay nada interesante de qué hablar?",
        type: "single_choice",
        options: [
            "Sí",
            "No"
        ],
        correctAnswer: 1,
        explanation: "Cada evento es una oportunidad formal de inspección y adaptación. No incluir alguno de estos eventos resulta en una menor transparencia y es una oportunidad perdida para el marco empírico."
    },
    {
        question: "El propósito de la Retrospectiva Sprint es (seleccionar tres):",
        type: "multiple_choice",
        options: [
            "Identificar y ordenar los principales elementos que han ido bien y las posibles mejoras",
            "Crea un plan para implementar mejoras en la forma en que el equipo Scrum realiza su trabajo",
            "Observa cómo fue el último Sprint en cuanto a personas, relaciones, procesos y herramientas",
            "Obtén asesoramiento técnico o de dominio de especialistas invitados por el Equipo de Desarrollo o el Scrum Master",
            "Recibe comentarios de los Principales Interesados invitados por el Product Owner"
        ],
        correctAnswer: [0, 1, 2],
        explanation: "El propósito es inspeccionar el último Sprint respecto a personas, relaciones, procesos y herramientas; identificar qué salió bien y qué se puede mejorar; y crear un plan de implementación."
    },
    {
        question: "La caja de tiempo de Daily Scrum depende del tamaño del equipo de desarrollo.",
        type: "true_false",
        options: [
            "Cierto",
            "Falso"
        ],
        correctAnswer: 1,
        explanation: "El Daily Scrum es un evento con un timebox estricto de 15 minutos diseñado para el equipo de desarrollo, sin importar si el tamaño de este es grande o pequeño."
    },
    {
        question: "¿Podrían el Product Owner y el Scrum Master formar parte del equipo de desarrollo?",
        type: "single_choice",
        options: [
            "No",
            "Sí"
        ],
        correctAnswer: 1,
        explanation: "Sí. Scrum no prohíbe que el Product Owner ni el Scrum Master realicen trabajo técnico de desarrollo, aunque no se considere una mejor práctica por potenciales conflictos de interés."
    },
    {
        question: "¿Quién tiene autoridad para cancelar el Sprint?",
        type: "single_choice",
        options: [
            "El Scrum Master",
            "El equipo de desarrollo",
            "Los principales actores",
            "El Product Owner y el Scrum Master",
            "El Product Owner"
        ],
        correctAnswer: 4,
        explanation: "Solo el Product Owner tiene la autoridad exclusiva para cancelar el Sprint, aunque pueda recibir influencias legítimas de stakeholders o de los desarrolladores."
    },
    {
        question: "Solo el Product Owner y el equipo de desarrollo participan en la planificación del sprint. No hay nada que hacer para el Scrum Master.",
        type: "true_false",
        options: [
            "Cierto",
            "Falso"
        ],
        correctAnswer: 1,
        explanation: "El trabajo que se realizará en el Sprint se planifica mediante la colaboración activa de todo el Scrum Team completo, incluyendo la facilitación y coaching del Scrum Master."
    },
    {
        question: "¿Qué son los artefactos Scrum? Selecciona todos los elementos aplicables.",
        type: "multiple_choice",
        options: [
            "La lista de impedimentos eliminados",
            "Catálogo de productos",
            "Lista de Sprint",
            "El objetivo del sprint",
            "Incremento"
        ],
        correctAnswer: [1, 2, 4],
        explanation: "Los únicos tres artefactos oficiales definidos dentro de Scrum son el Product Backlog (Catálogo), el Sprint Backlog (Lista de Sprint) y el Incremento."
    },
    {
        question: "El Sprint Backlog se crea en la Planificación de Sprints. El equipo de desarrollo prohíbe añadir nuevo trabajo al Sprint Backlog posteriormente.",
        type: "true_false",
        options: [
            "Falso",
            "Cierto"
        ],
        correctAnswer: 0,
        explanation: "El equipo de desarrollo modifica el Backlog de Sprint a lo largo de la iteración según surge y se aprende más sobre el trabajo necesario para alcanzar el objetivo del Sprint."
    },
    {
        question: "¿Cuáles son las dos características esenciales que debe poseer un equipo de scrum?",
        type: "multiple_choice",
        options: [
            "Debe tener todas las competencias necesarias para realizar el trabajo sin depender de otros que no forman parte del equipo",
            "Debería ser lo suficientemente flexible para completar todo el trabajo previsto para el Sprint incluso si algunos miembros del equipo están de vacaciones",
            "Debe elegir cómo realizar mejor su trabajo, en lugar de ser dirigida por otros fuera del equipo",
            "Debe utilizar herramientas, procesos y técnicas aprobados por la Organización"
        ],
        correctAnswer: [0, 2],
        explanation: "Los equipos Scrum son autoorganizados (eligen la mejor manera de realizar su trabajo en lugar de ser dirigidos desde fuera) y multifuncionales (poseen todas las competencias)."
    },
    {
        question: "Imagina que eres un Scrum Master en una pequeña organización que intenta adoptar Scrum. Hay 10 desarrolladores y el Product Owner. ¿Cómo pueden dividirse en equipos? Elige todas las opciones aplicables:",
        type: "multiple_choice",
        options: [
            "2 equipos de 6 y 4 personas (porque es bueno tener un equipo de control de calidad aparte)",
            "3 equipos de 4, 3 y 3 personas (cada equipo es multifuncional)",
            "1 equipo de 10 personas (porque no hay razón para dividirse)",
            "2 equipos de 6 y 4 personas (tras una breve reunión, los desarrolladores decidieron que esta era la mejor opción)"
        ],
        correctAnswer: [1, 3],
        explanation: "El tamaño óptimo del equipo de desarrollo es entre 3 y 9 miembros. Tener 10 personas en desarrollo rompe la regla de un máximo de 9. Dividirlos en 2 equipos multifuncionales elegidos por ellos mismos o en 3 equipos pequeños es lo idóneo."
    },
    {
        question: "¿Qué muestra el Burn-down Chart?",
        type: "single_choice",
        options: [
            "Dependencias, horarios de inicio y de finalización de las tareas del proyecto",
            "Cuánto trabajo queda hasta el final del Sprint",
            "Jerarquía de tareas que conforman un proyecto",
            "La evolución de la cantidad de incertidumbre durante un proyecto"
        ],
        correctAnswer: 1,
        explanation: "El gráfico de burn-down muestra de manera visual la evolución del esfuerzo o trabajo restante acumulado contra el paso del tiempo dentro del Sprint."
    },
    {
        question: "¿Quién participa en la Sprint Review? Selecciona todas las variantes aplicables.",
        type: "multiple_choice",
        options: [
            "El CEO de la Organización",
            "Los principales actores",
            "El Product Owner",
            "El equipo de desarrollo",
            "El Scrum Master"
        ],
        correctAnswer: [1, 2, 3, 4],
        explanation: "Durante la Revisión, el equipo Scrum completo (PO, SM y Desarrolladores) y los stakeholders (principales actores clave) invitados colaboran activas sobre lo que se construyó."
    },
    {
        question: "¿Cuál es el horario del Daily Scrum?",
        type: "single_choice",
        options: [
            "25 minutos",
            "20 minutos",
            "No limitado. Cada miembro del equipo de desarrollo debería tener tiempo suficiente para responder a las tres preguntas principales.",
            "15 minutos"
        ],
        correctAnswer: 3,
        explanation: "El Daily Scrum es un evento diario interno de los desarrolladores limitado estrictamente a una caja de tiempo máxima de 15 minutos."
    },
    {
        question: "¿Cuál podría ser la fuente de los requisitos para que se hagan cambios en el producto?",
        type: "single_choice",
        options: [
            "El retraso de productos",
            "El CEO de la Organización",
            "Los principales actores"
        ],
        correctAnswer: 0,
        explanation: "El Product Backlog (retraso de productos) es una lista ordenada de todo lo que pueda necesitarse y constituye la única fuente oficial de requisitos para cualquier cambio en el producto."
    },
    {
        question: "¿En qué reuniones se permite la participación de los Actores Clave?",
        type: "single_choice",
        options: [
            "La retrospectiva del sprint",
            "La Revisión de Sprint",
            "La planificación del sprint",
            "El Daily Scrum"
        ],
        correctAnswer: 1,
        explanation: "Los Principales Actores o Stakeholders sólo están invitados formalmente a participar en la reunión de Revisión del Sprint para dar feedback del incremento."
    },
    {
        question: "La definición de \"Hecho\" se crea durante el primer Sprint y permanece sin cambios hasta el lanzamiento del producto.",
        type: "true_false",
        options: [
            "Cierto",
            "Falso"
        ],
        correctAnswer: 1,
        explanation: "Durante cada retrospectiva de Sprint, el equipo Scrum planifica formas de aumentar la calidad del producto adaptando y madurando la definición de \"Hecho\" según corresponda."
    },
    {
        question: "¿Cuáles son las características de un equipo de desarrollo? Selecciona las tres opciones más adecuadas.",
        type: "multiple_choice",
        options: [
            "El scrum no reconoce a ningún equipo secundario en el equipo de desarrollo",
            "La responsabilidad corresponde al equipo de desarrollo en su conjunto",
            "Contar con al menos un ingeniero de pruebas en el equipo de desarrollo",
            "Scrum no reconoce títulos para los miembros del equipo de desarrollo",
            "Tener al Scrum Master como desarrollador a tiempo parcial en el equipo de desarrollo"
        ],
        correctAnswer: [0, 1, 3],
        explanation: "No se reconocen subequipos internos, la responsabilidad es colectiva del equipo entero y no existen títulos o jerarquías para sus miembros individuales, independientemente de su especialidad."
    },
    {
        question: "El Scrum Master se centra principalmente en el Scrum Team y normalmente no le importan los que están fuera del Scrum Team.",
        type: "true_false",
        options: [
            "Cierto",
            "Falso"
        ],
        correctAnswer: 1,
        explanation: "El Scrum Master es un líder al servicio de la organización, ayudando a las personas externas a entender qué interacciones con el equipo son de utilidad para maximizar el valor."
    },
    {
        question: "¿Qué significa la palabra \"desarrollo\" en el contexto de Scrum? Selecciona la mejor opción.",
        type: "single_choice",
        options: [
            "Desarrollo de software y hardware",
            "Desarrollo de producto, su lanzamiento y mantenimiento",
            "Trabajo complejo que puede incluir todas las opciones sugeridas e incluso más",
            "Investigación e identificación de mercados, tecnologías y capacidades de producto viables",
            "Desarrollo de un entorno operativo para el producto"
        ],
        correctAnswer: 2,
        explanation: "En la Guía Scrum, el desarrollo se refiere a trabajos complejos y amplios que engloban investigación, creación, mantenimiento de entornos, hardware, software y soporte a lo largo de la vida del producto."
    },
    {
        question: "¿Cuál es la entrada a la planificación de los sprints? Selecciona cuatro.",
        type: "multiple_choice",
        options: [
            "El último producto Increment",
            "Capacidad proyectada del equipo de desarrollo durante el Sprint",
            "El retraso de productos",
            "Comentarios de los principales actores",
            "Comentarios del CEO de la Organización",
            "Rendimiento previo del equipo de desarrollo"
        ],
        correctAnswer: [0, 1, 2, 5],
        explanation: "Las entradas oficiales son: el Product Backlog, el Incremento más reciente, la capacidad proyectada de los desarrolladores para la iteración y el rendimiento histórico del equipo."
    },
    {
        question: "Es buena práctica tener de vez en cuando un Sprint técnico especial que consista únicamente en tareas para eliminar la deuda técnica sin implementar ninguna funcionalidad nueva.",
        type: "true_false",
        options: [
            "Cierto",
            "Falso"
        ],
        correctAnswer: 1,
        explanation: "Cada Sprint debe entregar obligatoriamente un Incremento de funcionalidad potencialmente liberable que aporte valor y cumpla el \"Hecho\". No existen los Sprints exclusivamente técnicos."
    },
    {
        question: "¿Qué pertenece exclusivamente al equipo de desarrollo?",
        type: "single_choice",
        options: [
            "El Incremento",
            "El retraso de productos",
            "El retraso en Sprint",
            "La definición de hecho"
        ],
        correctAnswer: 2,
        explanation: "El Sprint Backlog (retraso en Sprint) es una imagen visible y en tiempo real del plan que pertenece única y exclusivamente al equipo de desarrollo para cumplir el Sprint Goal."
    },
    {
        question: "¿Quién es responsable de hacer un seguimiento del trabajo total restante en el Sprint Backlog para proyectar la probabilidad de alcanzar el objetivo del Sprint?",
        type: "single_choice",
        options: [
            "El Product Owner y el equipo de desarrollo",
            "El equipo de desarrollo",
            "El Product Owner",
            "El equipo de melé",
            "El Scrum Master"
        ],
        correctAnswer: 1,
        explanation: "Los desarrolladores registran y analizan el trabajo total restante al menos en cada Daily Scrum para evaluar las probabilidades de cumplir el Sprint Goal y gestionar su propio progreso."
    },
    {
        question: "Todos los equipos de desarrollo que trabajan en el mismo producto deben usar el mismo backlog de productos.",
        type: "true_false",
        options: [
            "Cierto",
            "Falso"
        ],
        correctAnswer: 0,
        explanation: "Varios equipos Scrum pueden trabajar juntos en el mismo producto. En ese escenario, se utiliza un único y unificado Product Backlog para describir el trabajo futuro."
    },
    {
        question: "¿Quién es responsable del retraso de productos?",
        type: "single_choice",
        options: [
            "El Product Owner y el equipo de desarrollo",
            "El Product Owner y el Scrum Master",
            "El equipo de desarrollo",
            "El Product Owner",
            "El Scrum Master y el Equipo de Desarrollo",
            "El Scrum Master"
        ],
        correctAnswer: 3,
        explanation: "El Product Owner es el único y máximo responsable de la gestión del Product Backlog (retraso de productos), incluyendo su contenido, disponibilidad y ordenamiento."
    },
    {
        question: "¿Quién puede participar en el Daily Scrum?",
        type: "single_choice",
        options: [
            "Los principales actores",
            "El Scrum Master",
            "El equipo de desarrollo",
            "El Product Owner"
        ],
        correctAnswer: 2,
        explanation: "El Daily Scrum es una reunión estructurada e interna exclusivamente para los desarrolladores. Si otros asisten, el Scrum Master cuida que no interfieran en la sesión."
    },
    {
        question: "¿Quién es responsable de gestionar el Backlog de Producto?",
        type: "single_choice",
        options: [
            "El Scrum Master",
            "El Product Owner",
            "El equipo de desarrollo",
            "Los principales actores"
        ],
        correctAnswer: 1,
        explanation: "El Product Owner es la única persona con la responsabilidad integral sobre la gestión, refinamiento y mantenimiento del Product Backlog."
    },
    {
        question: "¿Quién puede cambiar el backlog del Sprint durante el Sprint?",
        type: "single_choice",
        options: [
            "El equipo de desarrollo",
            "El Scrum Master",
            "El equipo de desarrollo y el Product Owner",
            "El Product Owner",
            "El equipo de melé"
        ],
        correctAnswer: 0,
        explanation: "Sólo los desarrolladores tienen la autoridad para modificar su propio Sprint Backlog basándose en lo que descubren a lo largo del Sprint. El artefacto les pertenece."
    },
    {
        question: "El Daily Scrum siempre debería durar exactamente 15 minutos. Por ejemplo, si tu equipo lo ha conseguido en 5 minutos, deberías dedicar 10 minutos más a alguna actividad útil del equipo como el refinamiento del Product Backlog, pero no más.",
        type: "true_false",
        options: [
            "Falso",
            "Cierto"
        ],
        correctAnswer: 0,
        explanation: "Los eventos en Scrum tienen una duración máxima determinada (caja de tiempo), pero no se exige un tiempo mínimo. Si el equipo cumple el propósito en 5 minutos, la sesión termina."
    },
    {
        question: "¿Cuál es el orden de los artículos en el catálogo de productos?",
        type: "single_choice",
        options: [
            "Menos valiosos y los objetos más poco claros están al final",
            "Los elementos menos claros en la parte superior",
            "Los elementos añadidos recientemente en la parte superior",
            "Alfabético"
        ],
        correctAnswer: 0,
        explanation: "El Product Backlog se ordena de mayor a menor valor, lo que sitúa los elementos más valiosos, prioritarios y claros arriba, y los menos claros o valiosos al final."
    },
    {
        question: "¿Quién es responsable de la creación de la definición de \"hecho\"?",
        type: "single_choice",
        options: [
            "El equipo de melé",
            "El Scrum Master",
            "El equipo de desarrollo",
            "El Product Owner"
        ],
        correctAnswer: 2,
        explanation: "Si no es proporcionada por los estándares de la organización de desarrollo, el equipo de desarrollo dentro del Scrum Team es responsable de definir el criterio de \"Hecho\" idóneo para el producto."
    },
    {
        question: "Todos los equipos Scrum que trabajan en el mismo producto deberían tener la misma duración de Sprint.",
        type: "true_false",
        options: [
            "Falso",
            "Cierto"
        ],
        correctAnswer: 0,
        explanation: "Scrum no requiere ni impone que los Sprints tengan que estar alineados en duración o fechas para diferentes equipos trabajando en paralelo."
    },
    {
        question: "Selecciona los cinco Valores Scrum.",
        type: "multiple_choice",
        options: [
            "Respeto",
            "Apertura",
            "Efectividad",
            "Enfoque",
            "Autoorganización",
            "Compromiso",
            "Agilidad",
            "Valor"
        ],
        correctAnswer: [0, 1, 3, 5, 7],
        explanation: "Los cinco valores definidos de forma explícita en la Guía oficial de Scrum son: compromiso (commitment), coraje/valor (courage), enfoque (focus), apertura (openness) y respeto (respect)."
    },
    {
        question: "Selecciona las dos reuniones en las que se permite la participación de personas fuera del Equipo Scrum.",
        type: "multiple_choice",
        options: [
            "La retrospectiva del sprint",
            "El Daily Scrum",
            "La Revisión de Sprint",
            "La planificación del sprint"
        ],
        correctAnswer: [2, 3],
        explanation: "Los desarrolladores pueden invitar a asesores técnicos externos en el Sprint Planning, y el Product Owner invita de forma activa a los Stakeholders clave a la Sprint Review."
    },
    {
        question: "¿Cómo sirve el Scrum Master al equipo de desarrollo? Selecciona las tres respuestas más adecuadas.",
        type: "multiple_choice",
        options: [
            "Ayudar al equipo de desarrollo a crear productos de alto valor",
            "Añadir o eliminar desarrolladores del equipo de desarrollo según los cambios en la velocidad del equipo",
            "Coaching al equipo de desarrollo en autoorganización y funcionalidad transversal",
            "Eliminación de obstáculos para el progreso del equipo de desarrollo",
            "Ayudar al equipo de desarrollo como líder del equipo"
        ],
        correctAnswer: [0, 2, 3],
        explanation: "Sirve entrenando en autoorganización y multifuncionalidad, eliminando los impedimentos que bloquean el avance y guiándolos en la creación de productos de alto valor."
    },
    {
        question: "¿Qué son las características del Product Backlog? Selecciona tres.",
        type: "multiple_choice",
        options: [
            "Nunca está completo",
            "Un Product Backlog podría cerrarse cuando no contiene elementos para incluir en el siguiente Sprint",
            "Es dinámico",
            "Cuando se lanza la versión final de un producto, se descarta su Backlog de Producto",
            "Mientras exista un producto, también existe su Backlog de Productos"
        ],
        correctAnswer: [0, 2, 4],
        explanation: "El Product Backlog es dinámico, cambia constantemente, nunca se da por completado de forma definitiva y coexiste con el ciclo de vida real del producto en el mercado."
    },
    {
        question: "¿Cuáles son los tres pilares que sostienen el Scrum?",
        type: "multiple_choice",
        options: [
            "Inspección",
            "Transparencia",
            "Funcionalidad cruzada",
            "Autoorganización",
            "Agilidad",
            "Adaptación"
        ],
        correctAnswer: [0, 1, 5],
        explanation: "El control de procesos empírico en el que se cimienta Scrum requiere de tres pilares fundamentales que sustentan su éxito: la transparencia, la inspección y la adaptación."
    },
    {
        question: "Cómo ayuda la definición de \"Hecho\" al equipo de scrum? Selecciona los tres elementos más aplicables.",
        type: "multiple_choice",
        options: [
            "El DoD ayuda en la inspección y adaptación",
            "El DoD guía al equipo de desarrollo para saber cuántos elementos de Product Backlog puede seleccionar durante una planificación de sprint",
            "El DoD se utiliza para evaluar cuándo se ha completado el trabajo en el producto Incremento",
            "El DoD garantiza la transparencia de los artefactos",
            "El DoD ayuda a calcular la velocidad del equipo de melé"
        ],
        correctAnswer: [1, 2, 3],
        explanation: "Ayuda a evaluar la completitud del Incremento, sirve de guía en la planificación sobre cuántos elementos se pueden tomar y aporta una transparencia crítica a los artefactos."
    },
    {
        question: "¿Quién crea el incremento?",
        type: "single_choice",
        options: [
            "El Product Owner",
            "El equipo de melé",
            "El equipo de desarrollo y el propietario del producto",
            "El Scrum Master",
            "El equipo de desarrollo"
        ],
        correctAnswer: 4,
        explanation: "Única y exclusivamente las personas asignadas como desarrolladores dentro del equipo de Scrum poseen el rol operativo para fabricar y crear un Incremento 'Hecho'."
    },
    {
        question: "¿Qué es Scrum?",
        type: "single_choice",
        options: [
            "Un proceso de diseño secuencial, utilizado en procesos de desarrollo de software, en el que el progreso se percibe como un flujo constante hacia abajo.",
            "Un marco dentro del cual las personas pueden abordar problemas adaptativos complejos, mientras entregan productos valiosos.",
            "Una metodología de desarrollo de software destinada a mejorar la calidad del software."
        ],
        correctAnswer: 1,
        explanation: "Scrum no es un proceso ni metodología pesada; está definido textualmente como un marco liviano que ayuda a personas, equipos y organizaciones a generar valor mediante soluciones adaptativas."
    },
    {
        question: "¿Quién es responsable de promover y apoyar Scrum? Selecciona la mejor opción.",
        type: "single_choice",
        options: [
            "El Scrum Master",
            "El equipo de desarrollo",
            "El equipo de melé",
            "El Product Owner",
            "El Scrum Master y el Product Owner"
        ],
        correctAnswer: 0,
        explanation: "El Scrum Master es el responsable explícito de promover, divulgar y apoyar Scrum enseñando la teoría, prácticas, reglas y valores esenciales a todo el entorno."
    },
    {
        question: "¿Qué ocurre durante el Sprint? Selecciona tres respuestas.",
        type: "multiple_choice",
        options: [
            "No se han hecho cambios que pongan en peligro el Sprint Goal",
            "Los objetivos de calidad no disminuyen",
            "El Objetivo de Sprint cambia frecuentemente para reflejar el estado de la obra restante",
            "El alcance puede aclararse y renegociarse entre el Product Owner y el equipo de desarrollo a medida que se aprenda más",
            "El alcance del sprint se define en la Planificación del Sprint y no puede cambiarse"
        ],
        correctAnswer: [0, 1, 3],
        explanation: "Durante la iteración no se ejecutan cambios que afecten al Sprint Goal, los estándares de calidad se mantienen firmes y el alcance se puede renegociar con el PO si se aprende más."
    },
    {
        question: "¿Quién es responsable de elaborar el Objetivo de Sprint en la Planificación de Sprint?",
        type: "single_choice",
        options: [
            "El Scrum Master",
            "El equipo de desarrollo",
            "Los principales actores",
            "El equipo de melé",
            "El Product Owner"
        ],
        correctAnswer: 3,
        explanation: "Después de que los desarrolladores pronostican los elementos a entregar, el Scrum Team en conjunto (el equipo completo de melé) elabora de manera consensuada el Sprint Goal."
    },
    {
        question: "¿Cuáles son las tres características más aplicables del Product Owner?",
        type: "multiple_choice",
        options: [
            "Maximizador de valor del producto",
            "Evangelista líder de Scrum en la organización",
            "Facilitador principal de la participación de los principales actores",
            "Facilitador de eventos Scrum",
            "Experto en el mercado de productos"
        ],
        correctAnswer: [0, 2, 4],
        explanation: "El Product Owner destaca principalmente por optimizar y maximizar el valor del producto, actuar como el enlace con los interesados clave (stakeholders) y dominar el negocio del mercado."
    },
    {
        question: "¿Qué parte de la capacidad del equipo de desarrollo suele consumir el refinamiento del Product Backlog?",
        type: "single_choice",
        options: [
            "El equipo de desarrollo no está autorizado para el refinamiento del Product Backlog",
            "No más del 10%",
            "No más del 20%",
            "No más del 5%"
        ],
        correctAnswer: 1,
        explanation: "El proceso continuo de refinamiento y detalle del Product Backlog por parte del equipo técnico de desarrollo normalmente no consume más del 10% de su capacidad total diaria."
    },
    {
        question: "¿Quién es responsable de afrontar la transparencia incompleta de los artefactos?",
        type: "single_choice",
        options: [
            "El Scrum Master",
            "El equipo de desarrollo",
            "El equipo de melé",
            "El Product Owner"
        ],
        correctAnswer: 0,
        explanation: "Es responsabilidad inherente al rol del Scrum Master colaborar activamente con el equipo y la organización para potenciar e incrementar los niveles de transparencia de los artefactos."
    },
    {
        question: "Es normal tener un Sprint de \"endurecimiento\" para eliminar toda deuda técnica y preparar el producto para su próximo lanzamiento.",
        type: "true_false",
        options: [
            "Cierto",
            "Falso"
        ],
        correctAnswer: 1,
        explanation: "Falso. Al terminar cada Sprint, el Incremento entregado ya debe encontrarse en estado utilizable y potencialmente liberable cumpliendo el \"Hecho\", eliminando la necesidad de Sprints de preparación especiales."
    },
    {
        question: "Es buena práctica tener al menos dos Product Owners en proyectos grandes.",
        type: "true_false",
        options: [
            "Falso",
            "Cierto"
        ],
        correctAnswer: 0,
        explanation: "El Product Owner representa a una persona individual única, no a un comité multifacético, con el objetivo de resguardar una toma de decisiones ágil y transparente sobre el backlog."
    },
    {
        question: "Imagina la siguiente situación. En la reunión retrospectiva de Sprint, el equipo Scrum identificó algunas mejoras que se pueden hacer. ¿Qué debería hacer el Scrum Team? Selecciona la mejor opción.",
        type: "single_choice",
        options: [
            "Asigna miembros responsables para cada mejora. Consulta el progreso en la próxima retrospectiva.",
            "Asigna un miembro responsable para al menos una mejora. Consulta el progreso en la próxima retrospectiva.",
            "Asegúrate de que el Sprint Backlog para el próximo Sprint incluya todas las mejoras.",
            "Asegúrate de que el backlog de Sprint para el próximo Sprint incluya al menos una mejora de proceso de alta prioridad."
        ],
        correctAnswer: 3,
        explanation: "Para garantizar la mejora e inspección continuas, el Sprint Backlog del ciclo venidero debe incluir por regla al menos una acción o mejora de proceso prioritaria identificada en la retrospectiva."
    },
    {
        question: "¿Cuál es la esencia de Scrum? Selecciona la opción más adecuada.",
        type: "single_choice",
        options: [
            "El equipo de desarrollo",
            "La Guía de la melé",
            "El Scrum Master y el Product Owner",
            "Un equipo pequeño de personas, muy flexible y adaptable"
        ],
        correctAnswer: 3,
        explanation: "La esencia de Scrum radica intrínsecamente en el funcionamiento de un núcleo o equipo humano pequeño, sumamente adaptable, multifuncional y ágil ante entornos complejos."
    },
    {
        question: "¿Con qué frecuencia deberían los usuarios de Scrum inspeccionar artefactos de Scrum y avanzar hacia un objetivo de Sprint?",
        type: "single_choice",
        options: [
            "Después del Daily Scrum",
            "En la Sprint Review",
            "Con frecuencia, pero no debería interponerse en el trabajo",
            "Tan a menudo como sea posible"
        ],
        correctAnswer: 2,
        explanation: "La inspección de artefactos y del avance diario hacia el Sprint Goal debe ser frecuente, pero cuidando meticulosamente que no interfiera ni se convierta en una traba constante para el desarrollo real del trabajo."
    },
    {
        question: "Scrum recomienda usar solo aquellos componentes y reglas de Scrum que más se adapten a un proyecto en particular.",
        type: "true_false",
        options: [
            "Cierto",
            "Falso"
        ],
        correctAnswer: 1,
        explanation: "Scrum es un marco inmutable. Aunque se pueden usar prácticas complementarias, el uso fragmentado de Scrum deja de ser considerado Scrum, ya que cada componente cumple un fin esencial para el empirismo."
    },
    {
        question: "¿Cuáles son las tres preguntas que da la Guía de Scrum como ejemplo que pueden usarse en el Daily Scrum?",
        type: "multiple_choice",
        options: [
            "¿Le expliqué todos los problemas descubiertos que encontré ayer al Product Owner?",
            "¿Qué haré hoy para ayudar al equipo de desarrollo a alcanzar el objetivo del Sprint?",
            "¿Veo algún impedimento que impida que yo o el equipo de desarrollo alcancemos el objetivo del Sprint?",
            "¿Qué hice ayer que ayudó al equipo de desarrollo a alcanzar el objetivo del Sprint?",
            "¿Tengo una comprensión completa del elemento de Sprint Backlog en el que estoy trabajando?"
        ],
        correctAnswer: [1, 2, 3],
        explanation: "Las preguntas ejemplo son: ¿Qué hice ayer que ayudó a lograr el Sprint Goal? ¿Qué haré hoy para ayudar a lograr el Sprint Goal? y ¿Detecto algún impedimento que bloquee el cumplimiento del Sprint Goal?"
    },
    {
        question: "El Scrum Master realiza lo siguiente respecto al Scrum Diario (selecciona todas las variantes aplicables):",
        type: "multiple_choice",
        options: [
            "Es responsable de llevar a cabo el Daily Scrum",
            "Si hay otros presentes en el Daily Scrum, asegúrate de que no interrumpan la reunión",
            "Garantiza que el equipo de desarrollo tenga la reunión",
            "Enseña al equipo de desarrollo a mantener el Daily Scrum dentro del límite de 15 minutos"
        ],
        correctAnswer: [1, 2, 3],
        explanation: "El SM se asegura de que la sesión ocurra, enseña a mantenerla en el timebox de 15 minutos y se cerciora de que asistentes externos no interrumpan las dinámicas propias del equipo técnico."
    },
    {
        question: "¿Qué guía al equipo de desarrollo sobre por qué está construyendo el Incremento?",
        type: "single_choice",
        options: [
            "El Scrum Master",
            "El objetivo del sprint",
            "El Product Owner",
            "El retraso en Sprint"
        ],
        correctAnswer: 1,
        explanation: "El Sprint Goal (Objetivo del Sprint) suministra una guía estratégica e inspiradora sobre el propósito del negocio detrás de por qué se construye el Incremento de valor en la iteración."
    },
    {
        question: "¿Qué ocurre cuando se cancela un Sprint? Selecciona tres.",
        type: "multiple_choice",
        options: [
            "Se revisan cualquier elemento del Backlog de Producto completado o \"Hecho\"",
            "Si parte del trabajo es potencialmente liberable, el Product Owner normalmente lo acepta",
            "En la Retrospectiva del Sprint, el Scrum Master determina quién, del equipo de desarrollo, es responsable de cancelar el Sprint",
            "Todos los artículos incompletos del catálogo de productos se reestiman y se vuelven a añadir al porquería de productos",
            "Varios de los principales artículos de Product Backlog se incorporan al Sprint Backlog para reemplazar los artículos obsoletos"
        ],
        correctAnswer: [0, 1, 3],
        explanation: "Al cancelarse el Sprint, se analizan los elementos terminados bajo el criterio \"Hecho\". Lo que aporte valor liberable es aceptado por el PO, y todo lo inacabado se reestima y se regresa al Product Backlog general."
    },
    {
        question: "La estructura del Scrum Diario está bien definida y es constante. Cada miembro del equipo debe responder a las tres preguntas principales: ¿Qué hice ayer? ¿Qué haré hoy? ¿Veo algún impedimento?",
        type: "true_false",
        options: [
            "Cierto",
            "Falso"
        ],
        correctAnswer: 1,
        explanation: "La Guía Scrum no prescribe una estructura obligatoria o estricta. Las preguntas clásicas son solo un ejemplo disponible; los desarrolladores definen soberanamente el formato idóneo enfocado en el Sprint Goal."
    },
    {
        question: "Si un inspector determina que uno o más aspectos de un proceso se desvían de los límites aceptables, ¿cuándo debe realizarse un ajuste?",
        type: "single_choice",
        options: [
            "Las desviaciones deben discutirse en el Daily Scrum y luego debe hacerse un ajuste",
            "Lo antes posible para minimizar desviaciones adicionales",
            "Después de aclarar todos los detalles con el Product Owner",
            "Tras la aprobación del Scrum Master"
        ],
        correctAnswer: 1,
        explanation: "Bajo la premisa empírica de la adaptación rápida, si un proceso sale de las métricas admisibles arriesgando la calidad del producto, el ajuste operativo correspondiente se debe realizar de forma inmediata."
    },
    {
        question: "Scrum no permite reuniones adicionales que no estén definidas en Scrum.",
        type: "true_false",
        options: [
            "Cierto",
            "Falso"
        ],
        correctAnswer: 1,
        explanation: "Scrum no tiene un enfoque prohibitivo hacia otros espacios de coordinación técnica. Permite y promueve sesiones adicionales que sean sanas y útiles para facilitar la conquista del Sprint Goal."
    },
    {
        question: "¿Cuáles son las tres cualidades principales que el modelo de equipo en Scrum está diseñado para optimizar?",
        type: "multiple_choice",
        options: [
            "Agilidad",
            "Productividad",
            "Flexibilidad",
            "Creatividad",
            "Competencia",
            "Responsabilidad"
        ],
        correctAnswer: [1, 2, 3],
        explanation: "El modelo estructural de los Scrum Teams (orientado a la autogestión y multifuncionalidad) está configurado explícitamente para optimizar e impulsar la flexibilidad, la creatividad y la productividad global."
    },
    {
        question: "El scrum se basa en",
        type: "single_choice",
        options: [
            "Empirismo",
            "Crítica empírica",
            "Sentido común",
            "Sistema Kanban"
        ],
        correctAnswer: 0,
        explanation: "Scrum fue concebido sobre los fundamentos teóricos del empirismo (el conocimiento nace de la experiencia vivida) junto al pensamiento esbelto (lean thinking) para reducir desperdicios."
    },
    {
        question: "Otras personas además del equipo Scrum pueden asistir a la Planificación de Sprint para ofrecer asesoramiento técnico o de dominio.",
        type: "true_false",
        options: [
            "Cierto",
            "Falso"
        ],
        correctAnswer: 0,
        explanation: "Cierto. Los desarrolladores y el equipo tienen la facultad de invitar a asesores, expertos técnicos o de negocio externos a la sesión de Sprint Planning para recibir orientación detallada."
    },
    {
        question: "¿Cómo ayuda el Scrum Master al Product Owner? Selecciona las tres respuestas más adecuadas.",
        type: "multiple_choice",
        options: [
            "Facilitar eventos de Scrum según se solicite o sea necesario",
            "Liderar y entrenar a la organización en su adopción de Scrum",
            "Introducción de prácticas de desarrollo de vanguardia",
            "Encontrar técnicas para una gestión eficaz del backlog de productos",
            "Comprender la planificación de productos en un entorno empírico"
        ],
        correctAnswer: [0, 3, 4],
        explanation: "El SM ayuda al PO encontrando técnicas eficientes para gestionar y ordenar el backlog, facilitando el entendimiento de la planificación empírica de productos y dinamizando los eventos necesarios."
    },
    {
        question: "¿Qué es la Sprint Retrospective?",
        type: "single_choice",
        options: [
            "Es una reunión para inspeccionar el Incremento y adaptar el Backlog de Producto si es necesario",
            "Es una reunión en la que el Equipo de Desarrollo sincroniza las actividades y crea un plan para las próximas 24 horas",
            "Es la reunión clave para inspeccionar y adaptar",
            "Es una oportunidad para que el equipo Scrum se autoexamine y cree un plan para las mejoras que se implementarán durante el próximo Sprint"
        ],
        correctAnswer: 3,
        explanation: "La Retrospectiva es el último evento oficial del Sprint destinado puntualmente a la autoinspección del equipo sobre sus dinámicas internas (procesos, herramientas, relaciones) para trazar mejoras de calidad."
    },
    {
        question: "El scrum no es un proceso ni una técnica. ¿Verdadero o falso?",
        type: "true_false",
        options: [
            "Falso",
            "Cierto"
        ],
        correctAnswer: 1,
        explanation: "Cierto. Scrum no es un manual de pasos mecánicos o rígidos. Es un marco de trabajo de diseño minimalista (framework) dentro del cual los equipos inyectan sus metodologías operativas internas."
    },
    {
        question: "¿Quién participa en la Planificación del Sprint? Selecciona tres.",
        type: "multiple_choice",
        options: [
            "Los principales actores",
            "El Product Owner",
            "El Scrum Master",
            "El Jefe del Equipo",
            "El equipo de desarrollo"
        ],
        correctAnswer: [1, 2, 4],
        explanation: "El Sprint Planning requiere la participación integral y colaborativa del Scrum Team en su totalidad, compuesto por el Product Owner, el Scrum Master y la totalidad de los Desarrolladores."
    },
    {
        question: "¿Cuál es el resultado de la Sprint Review?",
        type: "single_choice",
        options: [
            "Comprensión común de lo que se puede entregar en el Incremento y cómo se realizará el trabajo necesario para lograr dicho Incremento",
            "Comprensión común del progreso hacia el objetivo de Sprint y cómo se está orientando hacia completar el trabajo en el Sprint Backlog",
            "Un Product Backlog revisado que define los probables elementos del Product Backlog para el próximo Sprint",
            "Una lista de mejoras que el equipo Scrum implementará en el próximo Sprint"
        ],
        correctAnswer: 2,
        explanation: "El resultado o entregable neto de la Sprint Review es un Product Backlog adaptado, priorizado y actualizado frente al feedback de los stakeholders, proyectando los pasos más probables a seguir."
    },
    {
        question: "¿Quién puede hacer cambios en el Product Backlog? Selecciona dos opciones.",
        type: "multiple_choice",
        options: [
            "El Scrum Master",
            "Cualquiera",
            "El Product Owner",
            "Los principales actores",
            "El equipo de desarrollo, pero con permiso del Product Owner"
        ],
        correctAnswer: [2, 4],
        explanation: "El Product Owner es la única persona responsable del Product Backlog. Sin embargo, puede delegar parte del trabajo relacionado con la gestión del backlog de producto al equipo de desarrollo."
    },
    {
        question: "¿Quién es responsable de gestionar el Backlog de Producto?",
        type: "single_choice",
        options: [
            "Los principales actores",
            "El Product Owner",
            "El Scrum Master",
            "El equipo de desarrollo"
        ],
        correctAnswer: 1,
        explanation: "El Product Owner es la única persona responsable de gestionar el Product Backlog."
    },
    {
        question: "El Sprint Backlog se crea en la Planificación de Sprints. El equipo de desarrollo prohíbe añadir nuevo trabajo al Sprint Backlog posteriormente.",
        type: "true_false",
        options: [
            "Cierto",
            "Falso"
        ],
        correctAnswer: 1,
        explanation: "El equipo de desarrollo modifica el Backlog de Sprint a lo largo del Sprint, y el Backlog de Sprint surge durante el Sprint mientras se aprende más sobre el trabajo necesario para alcanzar el objetivo."
    },
    {
        question: "¿Podrían el Product Owner y el Scrum Master formar parte del equipo de desarrollo?",
        type: "true_false",
        options: [
            "Sí",
            "No"
        ],
        correctAnswer: 0,
        explanation: "Sí. Scrum no prohíbe que el Product Owner ni el Scrum Master realicen trabajo de desarrollo, aunque no es la mejor práctica por conflictos de intereses."
    },
    {
        question: "Selecciona las dos reuniones en las que se permite la participación de personas fuera del Equipo Scrum.",
        type: "multiple_choice",
        options: [
            "La retrospectiva del sprint",
            "La planificación del sprint",
            "El Daily Scrum",
            "La Revisión de Sprint"
        ],
        correctAnswer: [1, 3],
        explanation: "El equipo de desarrollo puede invitar a otras personas a asistir a la Planificación del Sprint para asesoramiento técnico. El Product Owner es responsable de invitar a los principales interesados a la reunión de Sprint Review."
    },
    {
        question: "¿Quién debería encargarse de recopilar los datos del mercado para el Product Owner?",
        type: "single_choice",
        options: [
            "No importa quién haga el trabajo",
            "El Product Owner",
            "El equipo Scrum y los principales actores",
            "El equipo de melé"
        ],
        correctAnswer: 0,
        explanation: "El Product Owner puede o no ser quien esté recopilando los datos del mercado, pero el PO debería estar al tanto de dichos datos/investigaciones."
    },
    {
        question: "¿Quién es el principal visionario del producto?",
        type: "single_choice",
        options: [
            "El Product Owner",
            "El Scrum Master",
            "El Director de Marketing (CMO)",
            "El Director Ejecutivo (CEO)"
        ],
        correctAnswer: 0,
        explanation: "El Product Owner es el principal visionario del producto y debe ser capaz de articular claramente la visión al equipo Scrum y a los principales interesados."
    },
    {
        question: "¿Quién es el líder en cuanto a recibir feedback de los Actores Clave en la Revisión Sprint?",
        type: "single_choice",
        options: [
            "El equipo de desarrollo",
            "El equipo de melé",
            "El Product Owner",
            "El Scrum Master"
        ],
        correctAnswer: 2,
        explanation: "El Product Owner es un líder vital a la hora de obtener retroalimentación de los principales actores en la Revisión Sprint."
    },
    {
        question: "¿Cómo comunica el Product Owner su conocimiento del mercado al equipo Scrum (seleccionando tres)?",
        type: "multiple_choice",
        options: [
            "Retrospectivas de Sprint",
            "Scrums diarios",
            "Refinamiento del retraso de productos",
            "Interacciones diarias ad hoc",
            "Análisis de Sprint"
        ],
        correctAnswer: [2, 3, 4],
        explanation: "El Product Owner comunica todo este conocimiento del mercado al equipo de Scrum mediante interacciones diarias ad hoc, así como refinamiento del Product Backlog y revisiones en Sprint."
    },
    {
        question: "Todos los equipos de desarrollo que trabajan en el mismo producto deben usar el mismo backlog de productos.",
        type: "true_false",
        options: [
            "Cierto",
            "Falso"
        ],
        correctAnswer: 0,
        explanation: "Varios equipos Scrum suelen trabajar juntos en el mismo producto. Un Backlog de Producto se utiliza para describir el trabajo próximo en el producto."
    },
    {
        question: "¿Cuáles son las características de un artículo de la lista de productos que está \"listo\" para ser seleccionado en una planificación de sprints? Selecciona tres.",
        type: "multiple_choice",
        options: [
            "Se puede \"hacer\" en un solo sprint",
            "Puede implementarse en un Sprint y probadoes en el siguiente Sprint",
            "En algún lugar de la cima del catálogo de productos",
            "Tiene menos detalle",
            "En algún lugar al final de la lista de productos pendientes",
            "Bien refinado"
        ],
        correctAnswer: [0, 2, 5],
        explanation: "Los elementos en la parte superior suelen ser más claros, detallados y refinados. Los elementos del Product Backlog que pueden ser \"Hechos\" por el equipo dentro de un Sprint se consideran \"Listos\"."
    },
    {
        question: "¿Qué parte de la capacidad del equipo de desarrollo suele consumir el refinamiento del Product Backlog?",
        type: "single_choice",
        options: [
            "No más del 5%",
            "El equipo de desarrollo no está autorizado para el refinamiento del Product Backlog",
            "No más del 20%",
            "No más del 10%"
        ],
        correctAnswer: 3,
        explanation: "El refinamiento del Product Backlog normalmente no consume más del 10% de la capacidad del equipo de desarrollo."
    },
    {
        question: "¿Qué muestra el Burn-down Chart?",
        type: "single_choice",
        options: [
            "Jerarquía de tareas que conforman un proyecto",
            "Cuánto trabajo queda hasta el final del Sprint",
            "La evolución de la cantidad de incertidumbre durante un proyecto",
            "Dependencias, horarios de inicio y de finalización de las tareas del proyecto"
        ],
        correctAnswer: 1,
        explanation: "El gráfico de burn-down muestra la evolución del esfuerzo restante contra el tiempo."
    },
    {
        question: "¿Cuál es la esencia de Scrum? Selecciona la opción más adecuada.",
        type: "single_choice",
        options: [
            "Un equipo pequeño de personas, muy flexible y adaptable",
            "El equipo de desarrollo",
            "La Guía de la melé",
            "El Scrum Master y el Product Owner"
        ],
        correctAnswer: 0,
        explanation: "La esencia de Scrum es un equipo pequeño de personas. El equipo individual es muy flexible y adaptable."
    },
    {
        question: "Imagina la siguiente situación. En la reunión retrospectiva de Sprint, el equipo Scrum identificó algunas mejoras que se pueden hacer. ¿Qué debería hacer el Scrum Team? Selecciona la mejor opción.",
        type: "single_choice",
        options: [
            "Asigna un miembro responsable para al menos una mejora. Consulta el progreso en la próxima retrospectiva.",
            "Asegúrate de que el backlog de Sprint para el próximo Sprint incluya al menos una mejora de proceso de alta prioridad.",
            "Asegúrate de que el Sprint Backlog para el próximo Sprint incluya todas las mejoras.",
            "Asigna miembros responsables para cada mejora. Consulta el progreso en la próxima retrospectiva."
        ],
        correctAnswer: 1,
        explanation: "Para garantizar la mejora continua, incluye al menos una mejora de procesos de alta prioridad identificada en la reunión retrospectiva anterior."
    },
    {
        question: "¿Quién es responsable de promover y apoyar Scrum? Selecciona la mejor opción.",
        type: "single_choice",
        options: [
            "El Scrum Master",
            "El equipo de melé",
            "El Product Owner",
            "El equipo de desarrollo",
            "El Scrum Master y el Product Owner"
        ],
        correctAnswer: 0,
        explanation: "El Scrum Master es responsable de promover y apoyar Scrum según lo definido en la Guía Scrum ayudando a todos a entender la teoría, prácticas, reglas y valores."
    },
    {
        question: "¿Cuáles son los cuadros de tiempo para la Sprint Review y la Sprint Retrospective?",
        type: "single_choice",
        options: [
            "3 y 4 horas respectivamente",
            "4 y 3 horas respectivamente",
            "Caja de tiempo de 4 horas para cada una",
            "Caja de tiempo de 3 horas para cada una"
        ],
        correctAnswer: 1,
        explanation: "La Revisión del Sprint es, como mucho, una reunión de cuatro horas para Sprints de un mes. La Retrospectiva del Sprint es, como mucho, una reunión de tres horas para los Sprints de un mes."
    },
    {
        question: "La práctica de refinamiento del backlog de producto se centra en los ítems de los próximos Sprints, no en el Sprint actual en curso. ¿Verdadero o falso?",
        type: "true_false",
        options: [
            "Falso",
            "Cierto"
        ],
        correctAnswer: 1,
        explanation: "Cierto. Los elementos del Sprint actual ya no están en el Product Backlog, porque ahora están en el Sprint Backlog. Sin embargo, está bien que el PO aporte detalles al trabajo actual."
    },
    {
        question: "Cada artículo de Pendiente de Producto debe ser creado personalmente por el Product Owner y solo entonces el equipo de desarrollo podrá añadir detalles a discreción del PO.",
        type: "true_false",
        options: [
            "Cierto",
            "Falso"
        ],
        correctAnswer: 1,
        explanation: "Falso. El PO es el responsable de las decisiones en el Product Backlog, pero el trabajo de gestión puede delegarse completamente al equipo de desarrollo, por lo que es posible que el PO nunca escriba un ítem."
    },
    {
        question: "Una vez que el Product Owner ha adquirido su Visión de Producto y definido las tácticas para hacer realidad esta visión, es una mala idea cambiarlas antes del próximo Lanzamiento del Producto.",
        type: "true_false",
        options: [
            "Cierto",
            "Falso"
        ],
        correctAnswer: 1,
        explanation: "El PO nunca debería tener miedo de cambiar la visión o las tácticas según los cambios del mercado. Poder reorientar estratégicamente es uno de los principales beneficios de una mentalidad Ágil."
    },
    {
        question: "¿Dónde se puede usar Scrum? Revisa todos los elementos aplicables.",
        type: "multiple_choice",
        options: [
            "Desarrollo de productos y mejoras",
            "Investigación e identificación de mercados, tecnologías y capacidades de producto viables",
            "Desarrollo y mantenimiento de entornos operativos en la nube y otros",
            "Gestión del funcionamiento de una organización",
            "Desarrollo de software y hardware",
            "Desarrollo de casi todo lo que usamos en nuestra vida diaria como individuos y sociedades"
        ],
        correctAnswer: [0, 1, 2, 3, 4, 5],
        explanation: "Scrum se ha utilizado para desarrollar software, hardware, vehículos autónomos, escuelas, gobierno, marketing, gestión organizativa y casi todo lo que utilizamos en nuestra vida diaria."
    },
    {
        question: "¿Quién es responsable de todas las estimaciones en el Product Backlog?",
        type: "single_choice",
        options: [
            "El equipo de desarrollo",
            "El Product Owner",
            "El Scrum Master",
            "El equipo de melé",
            "El Product owner y el equipo de desarrollo",
            "El Scrum Master y el Equipo de Desarrollo",
            "El Product Owner y el Scrum Master"
        ],
        correctAnswer: 0,
        explanation: "El equipo de desarrollo es responsable de todas las estimaciones en el Product Backlog. Las personas que realizarán el trabajo hacen la estimación final."
    },
    {
        question: "El Product Owner quiere aplicar algunos requisitos no funcionales al Producto. ¿Cuál es la mejor manera de proceder?",
        type: "single_choice",
        options: [
            "Crea un nuevo artículo para cada requisito en el Catálogo de Producto",
            "Añadir los requisitos no funcionales al DoD y comprobar cada Incremento con estos criterios",
            "Encontrar una forma de convertir los requisitos no funcionales en características del Producto y actuar en consecuencia",
            "Los requisitos no funcionales no pueden gestionarse dentro de los límites de Scrum"
        ],
        correctAnswer: 1,
        explanation: "La única forma de cumplir con estos requisitos es tenerlos como parte de la Definición de Hecho (DoD) y comprobar cada incremento según estos criterios."
    },
    {
        question: "El Product Owner debe conocer de forma experta el mercado del producto.",
        type: "single_choice",
        options: [
            "Depende",
            "Falso",
            "Cierto"
        ],
        correctAnswer: 2,
        explanation: "El Product Owner debe conocer de forma experta el mercado del producto. Deben estar constantemente recopilando información para maximizar el valor."
    },
    {
        question: "¿Quién es responsable de hacer un seguimiento del trabajo total restante en el Sprint Backlog para proyectar la probabilidad de alcanzar el objetivo del Sprint?",
        type: "single_choice",
        options: [
            "El Product Owner",
            "El equipo de desarrollo",
            "El Product Owner y el equipo de desarrollo",
            "El equipo de melé",
            "El Scrum Master"
        ],
        correctAnswer: 1,
        explanation: "El equipo de desarrollo registra este trabajo total restante al menos para cada Daily Scrum para proyectar la probabilidad de alcanzar el objetivo del Sprint."
    },
    {
        question: "¿Cuánto tiempo dura el Product Backlog?",
        type: "single_choice",
        options: [
            "Mientras el Producto exista",
            "No más de 5 años",
            "Hasta el lanzamiento final del producto",
            "Mientras al menos un equipo de desarrollo está trabajando en ello"
        ],
        correctAnswer: 0,
        explanation: "El Backlog de Productos es dinámico. Si existe un producto, también existe su lista de productos pendientes."
    },
    {
        question: "¿Quién decide si lanza la última versión del producto?",
        type: "single_choice",
        options: [
            "El equipo de desarrollo",
            "El Scrum Master",
            "El Product Owner",
            "El Product Owner y el Scrum Master",
            "El equipo de melé"
        ],
        correctAnswer: 2,
        explanation: "El Product Owner es la única persona que puede decidir si lanzar el último incremento del producto."
    },
    {
        question: "Es buena práctica tener al menos dos Product Owners en proyectos grandes.",
        type: "true_false",
        options: [
            "Cierto",
            "Falso"
        ],
        correctAnswer: 1,
        explanation: "El Product Owner es una sola persona, no un comité, pero el Product Owner puede representar los deseos de un comité en el Product Backlog."
    },
    {
        question: "¿Qué técnica debería emplearse para representar los artículos de la lista de productos pendientes?",
        type: "single_choice",
        options: [
            "Historias de usuario",
            "Pruebas de aceptación",
            "Cualquier técnica, incluso una mezcla de varias técnicas",
            "Casos de uso",
            "Escenarios"
        ],
        correctAnswer: 2,
        explanation: "Las historias de usuario son una técnica común, pero se pueden utilizar otras técnicas (escenarios, casos de uso, etc.). El Product Backlog podría contener una mezcla heterogénea."
    },
    {
        question: "¿Qué guía al equipo de desarrollo sobre por qué está construyendo el Incremento?",
        type: "single_choice",
        options: [
            "El objetivo del sprint",
            "El retraso en Sprint",
            "El Scrum Master",
            "El Product Owner"
        ],
        correctAnswer: 0,
        explanation: "El objetivo del Sprint proporciona orientación al equipo de desarrollo sobre por qué está construyendo el Incremento."
    },
    {
        question: "¿Quién identifica a los principales interesados del producto?",
        type: "single_choice",
        options: [
            "El equipo de melé",
            "La alta dirección",
            "El Scrum Master",
            "El equipo de desarrollo",
            "El Product Owner"
        ],
        correctAnswer: 4,
        explanation: "Para maximizar el valor, el Product Owner debe identificar a los principales interesados del producto e involucrarlos según sea necesario."
    },
    {
        question: "¿Quién tiene autoridad para cancelar el Sprint?",
        type: "single_choice",
        options: [
            "Los principales actores",
            "El equipo de desarrollo",
            "El Scrum Master",
            "El Product Owner",
            "El Product Owner y el Scrum Master"
        ],
        correctAnswer: 3,
        explanation: "Solo el Product Owner tiene la autoridad para cancelar el Sprint, aunque pueda hacerlo bajo la influencia de los interesados, el equipo de desarrollo o el Scrum Master."
    },
    {
        question: "Refinamiento del catálogo de productos... Selecciona los tres finales de frase más apropiados.",
        type: "multiple_choice",
        options: [
            "Es el acto de añadir detalles, presupuestos y pedidos a los artículos del Product Backlog",
            "Es un proceso continuo",
            "Normalmente no ocupa más del 10% de la capacidad del equipo de desarrollo",
            "Está limitado a un máximo de 4 horas",
            "Responde a la pregunta: ¿cómo se logrará el trabajo necesario para entregar el Incremento",
            "Normalmente ocurre 2-4 veces dependiendo de la longitud del Sprint"
        ],
        correctAnswer: [0, 1, 2],
        explanation: "El refinamiento del Product Backlog es el acto de añadir detalles, estimaciones y pedidos. Es un proceso continuo y consume normalmente no más del 10% de la capacidad del equipo."
    },
    {
        question: "¿Quién participa en la Planificación del Sprint? Selecciona tres.",
        type: "multiple_choice",
        options: [
            "El equipo de desarrollo",
            "El Product Owner",
            "El Jefe del Equipo",
            "Los principales actores",
            "El Scrum Master"
        ],
        correctAnswer: [0, 1, 4],
        explanation: "El plan se crea gracias al trabajo colaborativo de todo el equipo Scrum (Product Owner, Scrum Master y Equipo de desarrollo)."
    },
    {
        question: "¿Qué significa la palabra \"desarrollo\" en el contexto de Scrum? Selecciona la mejor opción.",
        type: "single_choice",
        options: [
            "Desarrollo de producto, su lanzamiento y mantenimiento",
            "Desarrollo de software y hardware",
            "Desarrollo de un entorno operativo para el producto",
            "Investigación e identificación de mercados, tecnologías y capacidades de producto viables",
            "Trabajo complejo que puede incluir todas las opciones sugeridas e incluso más"
        ],
        correctAnswer: 4,
        explanation: "En la Guía Scrum, se refiere a trabajos complejos que incluyen el desarrollo de software, hardware, lanzamiento de productos, mantenimiento de entornos, investigación y más."
    },
    {
        question: "¿Cómo puede el Product Owner dar vida a su visión de producto (selecciona 3)?",
        type: "multiple_choice",
        options: [
            "Utilizando las características subyacentes de planificación empírica de productos de Scrum",
            "Pidiendo la aprobación de la alta dirección",
            "A través del Product Backlog e iterando hacia esa visión en cada Sprint",
            "Hacer que el Scrum Master lleve la visión al equipo Scrum y a los principales actores",
            "Articular la visión del producto al equipo Scrum y a los Stakeholders Clave desde el principio y con frecuencia"
        ],
        correctAnswer: [0, 2, 4],
        explanation: "El PO debe comunicar su visión desde el principio y con frecuencia, utilizando la planificación empírica y dando vida de manera táctica a través del Product Backlog e iterando cada Sprint."
    },
    {
        question: "¿Qué dos atributos son opcionales para un artículo de Product Backlog?",
        type: "multiple_choice",
        options: [
            "Descripciones de pruebas que demuestren la completitud del ítem PB cuando esté \"Hecho\"",
            "Valor",
            "Descripción",
            "Orden",
            "Estimación",
            "Dependencias"
        ],
        correctAnswer: [0, 5],
        explanation: "Los artículos de Product Backlog tienen obligatoriamente descripción, orden, estimación y valor. Las descripciones de pruebas (y dependencias) son atributos opcionales."
    },
    {
        question: "El equipo de desarrollo debería ser capaz de explicar al Product Owner y al Scrum Master cómo pretende trabajar como un equipo autoorganizado para lograr el objetivo del Sprint y crear el Incremento previsto.",
        type: "true_false",
        options: [
            "Cierto",
            "Falso"
        ],
        correctAnswer: 0,
        explanation: "Al final de la Planificación del Sprint, el equipo de desarrollo debería ser capaz de explicar cómo pretende trabajar como un equipo autoorganizado para lograr el Sprint Goal."
    },
    {
        question: "¿Qué muestra Cone of Doubt?",
        type: "single_choice",
        options: [
            "Jerarquía de tareas que conforman un proyecto",
            "Dependencias, horarios de inicio y de finalización de las tareas del proyecto",
            "Cuánto trabajo queda hasta el final del Sprint",
            "Cuánto se sabe sobre el Producto a lo largo del tiempo"
        ],
        correctAnswer: 3,
        explanation: "El Cono de Incertidumbre (Cone of Doubt) describe la evolución de la cantidad de incertidumbre durante un proyecto (cuánto se sabe a lo largo del tiempo)."
    },
    {
        question: "¿Qué ocurre durante el Sprint? Selecciona tres respuestas.",
        type: "multiple_choice",
        options: [
            "El Objetivo de Sprint cambia frecuentemente para reflejar el estado de la obra restante",
            "No se han hecho cambios que pongan en peligro el Sprint Goal",
            "El alcance puede aclararse y renegociarse entre el Product Owner y el equipo de desarrollo a medida que se aprenda más",
            "Los objetivos de calidad no disminuyen",
            "El alcance del sprint se define en la Planificación del Sprint y no puede cambiarse"
        ],
        correctAnswer: [1, 2, 3],
        explanation: "Durante el sprint no se realizan cambios que peligren el Sprint Goal, los objetivos de calidad no disminuyen y el alcance puede aclararse y renegociarse a medida que se aprende más."
    },
    {
        question: "Todos los equipos Scrum que trabajan en el mismo producto deberían tener la misma duración de Sprint.",
        type: "true_false",
        options: [
            "Cierto",
            "Falso"
        ],
        correctAnswer: 1,
        explanation: "Falso. Scrum no requiere tener Sprints alineados ni con la misma duración para varios equipos."
    },
    {
        question: "¿Qué son las características del Product Backlog? Selecciona tres.",
        type: "multiple_choice",
        options: [
            "Cuando se lanza la versión final de un producto, se descarta su Backlog de Producto",
            "Es dinámico",
            "Un Product Backlog podría cerrarse cuando no contiene elementos para incluir en el siguiente Sprint",
            "Nunca está completo",
            "Mientras exista un producto, también existe su Backlog de Productos"
        ],
        correctAnswer: [1, 3, 4],
        explanation: "Un Product Backlog nunca se completa, es dinámico, cambia constantemente y mientras exista un producto, también existirá su backlog."
    },
    {
        question: "¿Cuándo se permite al equipo Scrum interactuar con los Stakeholders Clave (seleccionar la opción más aplicable)?",
        type: "single_choice",
        options: [
            "La Revisión de Sprint",
            "El Daily Scrum",
            "Siempre que sea valioso contar con la opinión de los Stakeholders",
            "La retrospectiva del sprint"
        ],
        correctAnswer: 2,
        explanation: "Los Stakeholders pueden estar involucrados con el equipo Scrum en cualquier momento cuando sea valioso contar con su aportación."
    },
    {
        question: "¿Cómo ayuda la definición de \"Hecho\" al equipo de scrum? Selecciona los tres elementos más aplicables.",
        type: "multiple_choice",
        options: [
            "El DoD ayuda a calcular la velocidad del equipo de melé",
            "El DoD garantiza la transparencia de los artefactos",
            "El DoD se utiliza para evaluar cuándo se ha completado el trabajo en el producto Incremento",
            "El DoD ayuda en la inspección y adaptación",
            "Guía al equipo de desarrollo para saber cuántos elementos de Product Backlog puede seleccionar durante una planificación de sprint"
        ],
        correctAnswer: [1, 2, 4],
        explanation: "El DoD se utiliza para evaluar cuándo se ha completado el incremento, garantiza la transparencia de los artefactos y guía al equipo en cuántos elementos seleccionar en la planificación."
    },
    {
        question: "Selecciona los cinco Valores Scrum.",
        type: "multiple_choice",
        options: [
            "Valor",
            "Respeto",
            "Enfoque",
            "Apertura",
            "Agilidad",
            "Autoorganización",
            "Efectividad",
            "Compromiso"
        ],
        correctAnswer: [0, 1, 2, 3, 7],
        explanation: "La Guía Scrum reconoce los siguientes Valores Scrum: compromiso, coraje (valor), enfoque, apertura y respeto."
    },
    {
        question: "Si un elemento del Sprint Backlog no puede terminarse antes de que termine el Sprint (resultó que hay mucho más trabajo del que se estimaba), el Sprint se cancela.",
        type: "true_false",
        options: [
            "Cierto",
            "Falso"
        ],
        correctAnswer: 1,
        explanation: "El Sprint solo se cancela en caso de que el Sprint Goal quede obsoleto. Si no se podía realizar el trabajo, el Sprint Backlog se renegocia entre el PO y los desarrolladores."
    },
    {
        question: "¿Cuál es el orden de los artículos en el catálogo de productos?",
        type: "single_choice",
        options: [
            "Menos valiosos y los objetos más poco claros están al final",
            "Los elementos menos claros en la parte superior",
            "Alfabético",
            "Los elementos añadidos recientemente en la parte superior"
        ],
        correctAnswer: 0,
        explanation: "El Product Owner es responsable de colocar los elementos más valiosos y claros en la parte superior, dejando los menos valiosos e indefinidos al final."
    },
    {
        question: "¿Quién puede participar en el Daily Scrum?",
        type: "single_choice",
        options: [
            "El Scrum Master",
            "El equipo de desarrollo",
            "Los principales actores",
            "El Product Owner"
        ],
        correctAnswer: 1,
        explanation: "El Daily Scrum es una reunión interna del equipo de desarrollo. Si hay otras personas, el Scrum Master se asegura de que no interrumpan."
    },
    {
        question: "¿Cómo ayuda el Scrum Master al Product Owner? Selecciona las tres respuestas más adecuadas.",
        type: "multiple_choice",
        options: [
            "Introducción de prácticas de desarrollo de vanguardia",
            "Facilitar eventos de Scrum según se solicite o sea necesario",
            "Comprender la planificación de productos en un entorno empírico",
            "Encontrar técnicas para una gestión eficaz del backlog de productos",
            "Liderar y entrenar a la organización en su adopción de Scrum"
        ],
        correctAnswer: [1, 2, 3],
        explanation: "El SM sirve al PO encontrando técnicas para una gestión eficaz del backlog, ayudando a comprender la planificación empírica y facilitando eventos según sea necesario."
    },
    {
        question: "¿Qué categorías de KVA debería considerar el Product Owner para medir y rastrear la creación y entrega de valor al mercado (selecciona tres)?",
        type: "multiple_choice",
        options: [
            "Reducción de riesgos",
            "Tiempo de salida al mercado",
            "Capacidad para innovar",
            "Valor actual",
            "Satisfacción de los empleados",
            "Desarrollo de capacidades"
        ],
        correctAnswer: [1, 2, 3],
        explanation: "Según la Gestión Basada en la Evidencia (EBM), las Áreas Clave de Valor (KVA) son: Valor Actual, Tiempo de salida al mercado y Capacidad para innovar."
    },
    {
        question: "¿Quiénes son los típicos Actores Clave (selecciona tres)?",
        type: "multiple_choice",
        options: [
            "Las personas humanas que realmente usan el producto en desarrollo",
            "Las personas responsables de pagar para usar el producto",
            "Las personas responsables del desarrollo de productos",
            "Las personas responsables de tomar las decisiones de financiación para el esfuerzo de desarrollo del producto",
            "Las personas responsables del marketing de producto"
        ],
        correctAnswer: [0, 1, 3],
        explanation: "Los stakeholders se dividen en tres grandes categorías: Usuarios (los que usan el producto), Clientes Externos (los que pagan) y Clientes Internos (los que financian)."
    },
    {
        question: "El Scrum Master no debe permitir que el Product Owner asista a la Planificación del Sprint si el PO no está preparado con un Objetivo de Sprint. ¿Es esto cierto o falso?",
        type: "true_false",
        options: [
            "Falso",
            "Cierto"
        ],
        correctAnswer: 0,
        explanation: "Falso. El equipo de Scrum en su conjunto colabora y elabora un objetivo de sprint durante la planificación del sprint."
    },
    {
        question: "Si varios actores tienen intereses diferentes en el producto y diferentes puntos de vista, ¿cuál es la mejor estrategia para el Product Owner?",
        type: "single_choice",
        options: [
            "Calcula el ROI (Retorno de la Inversión) para cada punto de vista y selecciona el máximo",
            "Escucha a quienes financian el desarrollo del producto porque siempre tienen la última palabra",
            "Mantente fiel a la perspectiva que promete el tiempo de salida al mercado más rápido",
            "Haz un equilibrio inteligente de intereses e intenta maximizar el valor del producto en su conjunto"
        ],
        correctAnswer: 3,
        explanation: "La responsabilidad del Product Owner es maximizar el valor del producto en su conjunto, y esto implicará un equilibrio inteligente de intereses."
    },
    {
        question: "¿Quién puede decirle al equipo de desarrollo que trabaje según un conjunto de requisitos?",
        type: "single_choice",
        options: [
            "El Product Owner y el Scrum Master",
            "Los principales actores",
            "El Product Owner",
            "El Scrum Master",
            "Alta dirección"
        ],
        correctAnswer: 2,
        explanation: "Las decisiones del Product Owner son visibles en el Product Backlog. Nadie más puede decirle al equipo de desarrollo que trabaje con un conjunto diferente de requisitos."
    },
    {
        question: "¿Quién participa en la Sprint Review? Selecciona todas las variantes aplicables.",
        type: "multiple_choice",
        options: [
            "Los principales actores",
            "El CEO de la Organización",
            "El Product Owner",
            "El Scrum Master",
            "El equipo de desarrollo"
        ],
        correctAnswer: [0, 2, 3, 4],
        explanation: "Durante la Revisión del Sprint, el equipo Scrum (PO, SM, equipo de desarrollo) y los Stakeholders (principales actores) colaboran sobre lo realizado."
    },
    {
        question: "¿Cuál podría ser la fuente de los requisitos para que se hagan cambios en el producto?",
        type: "single_choice",
        options: [
            "El retraso de productos",
            "El CEO de la Organización",
            "Los principales actores"
        ],
        correctAnswer: 0,
        explanation: "El Product Backlog es una lista ordenada de todo lo que pueda necesitarse y es la única fuente de requisitos para cualquier cambio en el producto."
    },
    {
        question: "¿Quién es responsable del retraso de productos?",
        type: "single_choice",
        options: [
            "El Scrum Master y el Equipo de Desarrollo",
            "El Product Owner",
            "El Product Owner y el equipo de desarrollo",
            "El Scrum Master",
            "El Product Owner y el Scrum Master",
            "El equipo de desarrollo"
        ],
        correctAnswer: 1,
        explanation: "El Product Owner es responsable del Backlog de Producto (retraso de productos), incluyendo su contenido, disponibilidad y pedidos."
    },
    {
        question: "Selecciona las tres mejores opciones para terminar la frase a continuación. La deuda técnica...",
        type: "multiple_choice",
        options: [
            "es la falta de suministros técnicos",
            "es un riesgo real que realmente puede incurrir",
            "pertenece íntegramente al equipo de desarrollo. Nadie más debería saberlo.",
            "refleja un trabajo adicional de desarrollo",
            "compromete la calidad a largo plazo del producto"
        ],
        correctAnswer: [1, 3, 4],
        explanation: "La deuda técnica refleja el trabajo adicional que surge por decisiones de diseño rápidas o deficientes, compromete la calidad a largo plazo y es un riesgo real."
    },
    {
        question: "Cuando un producto crece, es muy posible que la oficina de compra reciba ayuda de otros Product Managers y de otros miembros de la organización que interactúan en las actividades de atención al cliente y el conocimiento del mercado de productos. ¿Es buena idea que el PO haga un proxy o externalice algunas de sus tareas del equipo Scrum a estas personas (por ejemplo, tareas del equipo Scrum que se enfrentan a ellos)?",
        type: "true_false",
        options: [
            "Sí",
            "No"
        ],
        correctAnswer: 1,
        explanation: "No es aceptable que el PO intente hacer un proxy o externalizar sus funciones nucleares o tareas del equipo Scrum hacia personas externas."
    },
    {
        question: "¿Con qué frecuencia debe el Product Owner comunicar y reiterar su visión de producto al equipo Scrum y a los principales grupos de interés?",
        type: "single_choice",
        options: [
            "Cada Daily Scrum",
            "Cada retrospectiva de Sprint",
            "Temprano y con frecuencia",
            "Una vez en la primera Planificación del Sprint"
        ],
        correctAnswer: 2,
        explanation: "El PO debe comunicar y reiterar su visión del producto al equipo Scrum y a los Stakeholders Clave desde el principio y con frecuencia para maximizar el valor."
    },
    {
        question: "¿Quién puede cambiar el backlog del Sprint durante el Sprint?",
        type: "single_choice",
        options: [
            "El equipo de desarrollo y el Product Owner",
            "El Scrum Master",
            "El Product Owner",
            "El equipo de desarrollo",
            "El equipo de melé"
        ],
        correctAnswer: 3,
        explanation: "Solo el equipo de desarrollo puede modificar su Backlog de Sprint durante un Sprint, ya que pertenece exclusivamente a ellos."
    },
    {
        question: "La Revisión del Sprint es simplemente una demostración de los elementos del Product Backlog completados durante un Sprint. ¿Estás de acuerdo?",
        type: "single_choice",
        options: [
            "No, la Sprint Review contiene muchas más actividades",
            "No, la demo también debería incluir los ítems completados en los Sprints anteriores que por alguna razón no se demostraron",
            "Sí. No hay mucha diferencia."
        ],
        correctAnswer: 0,
        explanation: "No. La Revisión contiene muchas más actividades para inspeccionar el incremento y adaptar el backlog (colaborar en qué hacer a continuación, revisar presupuesto, mercado, etc.)."
    },
    {
        question: "¿Cuánto debería durar la Planificación del Sprint?",
        type: "single_choice",
        options: [
            "No más del 10% de la capacidad del equipo de desarrollo",
            "No más de 4 horas",
            "No más de 8 horas",
            "Hasta que todos los elementos del Sprint Backlog se descomponen en unidades de un día o menos"
        ],
        correctAnswer: 2,
        explanation: "La planificación de sprints está limitada a un máximo de ocho horas para un sprint de un mes."
    },
    {
        question: "¿Quién es responsable de elaborar el Objetivo de Sprint en la Planificación de Sprint?",
        type: "single_choice",
        options: [
            "El Product Owner",
            "El Scrum Master",
            "El equipo de melé",
            "El equipo de desarrollo",
            "Los principales actores"
        ],
        correctAnswer: 2,
        explanation: "Después de que el equipo de desarrollo pronostica los elementos que entregará, el equipo Scrum (equipo de melé) en conjunto elabora el objetivo."
    },
    {
        question: "¿Qué incluye la gestión del Product Backlog? Selecciona los tres elementos más aplicables.",
        type: "multiple_choice",
        options: [
            "Trasladar los elementos del retraso de producto al backlog de Sprint",
            "Optimizar el valor del trabajo que realiza el Equipo de Desarrollo",
            "Asegurarse de que el Product Backlog sea visible, transparente y claro para todos, y muestre en qué trabajará el equipo Scrum a continuación",
            "Presentar los elementos del Backlog de Producto a los Principales Interesados",
            "Encargar los artículos del Product Backlog para lograr mejor los objetivos y misiones"
        ],
        correctAnswer: [1, 2, 4],
        explanation: "Incluye expresar claramente los elementos, ordenarlos (encargarlos) para lograr objetivos, optimizar el valor y asegurar que sea visible, transparente y claro."
    },
    {
        question: "¿Qué es el Incremento?",
        type: "single_choice",
        options: [
            "Todos los elementos del Sprint Backlog que podrían ser publicados independientemente de si el Product Owner decide hacerlo o no",
            "Todos los elementos \"Hechos\" en el Backlog de Sprint",
            "La suma de todos los elementos del Product Backlog completados durante el Sprint",
            "La suma de todos los elementos del Product Backlog completados durante el Sprint y el valor de los incrementos de todos los Sprints anteriores"
        ],
        correctAnswer: 3,
        explanation: "El incremento es la suma de todos los elementos del Product Backlog completados durante el Sprint y el valor de los incrementos de todos los Sprints anteriores."
    },
    {
        question: "Selecciona las dos áreas de enfoque que no se consideran en la ejecución del Desarrollo Orientado al Valor por parte del Product Owner.",
        type: "multiple_choice",
        options: [
            "Responsable de Toma de Decisiones de Lanzamientos de Producto",
            "Visionario del producto",
            "Experto en el mercado de productos",
            "Eliminación de los obstáculos para el progreso del Equipo de Desarrollo",
            "Facilitador principal de la participación de los principales actores",
            "Maximizador de valor del producto",
            "Entrenador del equipo de desarrollo en autoorganización y funcionalidad"
        ],
        correctAnswer: [3, 6],
        explanation: "Al ejecutar el Desarrollo Orientado al Valor, el PO se enfoca en maximizar el valor, ser visionario, experto del mercado, líder con stakeholders y tomador de decisiones de lanzamientos. La eliminación de obstáculos y el coaching técnico corresponden al Scrum Master."
    },
    {
        question: "¿Con qué frecuencia deberían producirse los lanzamientos de productos?",
        type: "single_choice",
        options: [
            "Con suficiente frecuencia como para eliminar el riesgo de que el valor del producto se desajuste del mercado",
            "Cada sprint",
            "Cada 3 meses",
            "Al final del desarrollo del producto",
            "Al menos cada 6 meses"
        ],
        correctAnswer: 0,
        explanation: "Cuanto más tiempo pase desde el último lanzamiento, mayor es el riesgo de que el valor se desajuste del mercado. Debe lanzarse con suficiente frecuencia para mitigar este riesgo."
    },
    {
        question: "Cuando algo en Scrum frustra al Product Owner, el PO puede delegar algunas responsabilidades al Scrum Master.",
        type: "true_false",
        options: [
            "Falso",
            "Cierto"
        ],
        correctAnswer: 0,
        explanation: "Falso. No es aceptable externalizar o delegar las funciones del PO. Cuando algo le frustre, debe consultar al SM para encontrar formas de implementar el framework de forma efectiva."
    },
    {
        question: "¿Quién es responsable de supervisar el progreso hacia objetivos de alto nivel?",
        type: "single_choice",
        options: [
            "El equipo de melé",
            "El Product Owner",
            "El Scrum Master",
            "El Scrum Master y el Equipo de Desarrollo",
            "El Product Owner y el equipo de desarrollo",
            "El equipo de desarrollo"
        ],
        correctAnswer: 1,
        explanation: "El Product Owner registra el trabajo total restante al menos en cada revisión de Sprint y evalúa el progreso hacia la finalización del trabajo proyectado en relación al objetivo."
    },
    {
        question: "Un equipo de desarrollo está esperando un componente de software específico que necesita integrar y utilizar. El componente debería estar listo en un mes. Los Elementos de Backlog con mayores prioridades dependen de este componente específico. ¿Qué debería hacer el Product Owner?",
        type: "single_choice",
        options: [
            "Elimina los artículos dependientes del porquería de productos y ponlos en una lista de espera especial. Cuando se resuelve la dependencia, los Elementos deben ser devueltos.",
            "Nada. El Product Backlog ya tiene los artículos más valiosos en la parte superior. El equipo de desarrollo no puede continuar hasta que se resuelva la dependencia.",
            "Asegúrate de que la dependencia sea visible en el Product Backlog y que el equipo de desarrollo tenga suficientes elementos independientes para el siguiente Sprint.",
            "Transfiere los elementos dependientes al equipo de integración"
        ],
        correctAnswer: 2,
        explanation: "El Product Backlog debería hacer visible la dependencia. Normalmente, elementos con dependencias externas no están \"listos\" para seleccionarse en el Sprint Planning."
    },
    {
        question: "¿Quién es responsable de la creación de la definición de \"hecho\"?",
        type: "single_choice",
        options: [
            "El Scrum Master",
            "El Product Owner",
            "El equipo de desarrollo",
            "El equipo de melé"
        ],
        correctAnswer: 2,
        explanation: "Si no es una convención de la organización de desarrollo, el equipo de desarrollo del equipo Scrum debe definir una definición de \"hecho\" adecuada para el producto."
    },
    {
        question: "¿Cuáles son las tres características más aplicables del Product Owner?",
        type: "multiple_choice",
        options: [
            "Facilitador principal de la participación de los principales actores",
            "Maximizador de valor del producto",
            "Facilitador de eventos Scrum",
            "Evangelista líder de Scrum en la organización",
            "Experto en el mercado de productos"
        ],
        correctAnswer: [0, 1, 4],
        explanation: "Las tres características clave del rol de PO son: Maximizador de valor del producto, Facilitador principal de la participación de los Stakeholders y Experto en el mercado."
    },
    {
        question: "¿Qué son los artefactos Scrum? Selecciona todos los elementos aplicables.",
        type: "multiple_choice",
        options: [
            "Lista de Sprint",
            "Catálogo de productos",
            "La lista de impedimentos eliminados",
            "Incremento",
            "El objetivo del sprint"
        ],
        correctAnswer: [0, 1, 3],
        explanation: "Los únicos artefactos oficiales de Scrum son el Product Backlog (Catálogo de productos), Sprint Backlog (Lista de Sprint) y el Incremento."
    },
    {
        question: "¿Qué ocurre cuando se cancela un Sprint? Selecciona tres.",
        type: "multiple_choice",
        options: [
            "Si parte del trabajo es potencialmente liberable, el Product Owner normalmente lo acepta",
            "Todos los artículos incompletos del catálogo de productos se reestiman y se vuelven a añadir al porquería de productos",
            "Varios de los principales artículos de Product Backlog se incorporan al Sprint Backlog para reemplazar los artículos obsoletos",
            "Se revisan cualquier elemento del Backlog de Producto completado o \"Hecho\"",
            "En la Retrospectiva del Sprint, el Scrum Master determina quién, del equipo de desarrollo, es responsable de cancelar el Sprint"
        ],
        correctAnswer: [0, 1, 3],
        explanation: "Se revisan los elementos \"Hechos\". Si parte es liberable, el PO lo acepta. Todos los artículos incompletos se reestiman y se vuelven a añadir al backlog (contenido pendiente)."
    },
    {
        question: "El equipo de melé está formado por",
        type: "single_choice",
        options: [
            "Los principales actores",
            "El Scrum Master",
            "El Product Owner",
            "El equipo de desarrollo"
        ],
        correctAnswer: [1, 2, 3],
        explanation: "El equipo Scrum (equipo de melé) está formado por un Product Owner, el equipo de desarrollo y un Scrum Master."
    },
    {
        question: "¿En qué reuniones se permite la participación de los Actores Clave?",
        type: "single_choice",
        options: [
            "La retrospectiva del sprint",
            "El Daily Scrum",
            "La Revisión de Sprint",
            "La planificación del sprint"
        ],
        correctAnswer: 2,
        explanation: "Los Principales Actores solo pueden participar formalmente en la reunión de Revisión Sprint."
    },
    {
        question: "¿Qué es el Sprint Backlog?",
        type: "single_choice",
        options: [
            "Los artículos de Product Backlog seleccionados para este Sprint más el plan para su entrega",
            "El plan para entregar los artículos de Product Backlog",
            "Los elementos de Product Backlog seleccionados para este Sprint",
            "Los elementos de Product Backlog seleccionados para este Sprint más los elementos de Team Backlog"
        ],
        correctAnswer: 0,
        explanation: "El Backlog de Sprint es el conjunto de elementos de Product Backlog seleccionados para el Sprint, además de un plan para entregar el Incremento del producto."
    },
    {
        question: "¿Quién tiene la \"última palabra\" sobre el orden de los artículos en el Product Backlog?",
        type: "single_choice",
        options: [
            "El Product Owner",
            "El Scrum Master",
            "El equipo de desarrollo",
            "El Product Owner y el Scrum Master"
        ],
        correctAnswer: 0,
        explanation: "Aunque otros puedan influir, el Product Owner tiene la \"última palabra\" sobre el orden del Product Backlog."
    },
    {
        question: "¿Qué factores debe tener en cuenta el Product Owner en la decisión de lanzamiento (seleccionar cuatro)?",
        type: "multiple_choice",
        options: [
            "La cantidad de trabajo que queda para alcanzar el objetivo del Sprint",
            "Los costes y beneficios de la mejora",
            "¿El incremento cumple con la definición de \"hecho\"?",
            "Los clientes que estarán limitados por el nuevo lanzamiento",
            "¿Pueden los clientes realmente absorber el nuevo lanzamiento?",
            "Aprobación de los principales actores",
            "El riesgo de que el valor del producto pueda desalinearse con el mercado"
        ],
        correctAnswer: [1, 3, 4, 6],
        explanation: "El PO evalúa el riesgo de desalineación con el mercado, si los clientes pueden absorber el lanzamiento, las limitaciones de estos y el balance de costes y beneficios de la actualización."
    },
    {
        question: "¿Por qué debería haber un solo Product Owner para un producto? Elige las tres mejores respuestas.",
        type: "multiple_choice",
        options: [
            "Facilitates las cosas para el Scrum Master, que no tiene que gestionar un equipo de product owners",
            "Existe una clara responsabilidad por el éxito o fracaso del producto",
            "Las decisiones sobre el producto pueden tomarse más rápido",
            "Es claro para los desarrolladores quién decide el orden de los elementos del Product Backlog",
            "Garantiza que todos los requisitos estén redactados en detalle por la misma persona"
        ],
        correctAnswer: [1, 2, 3],
        explanation: "Tener un único Product Owner optimiza la velocidad en la toma de decisiones, establece una responsabilidad clara sobre el ROI y evita confusiones en los desarrolladores sobre la prioridad del Backlog."
    },
    {
        question: "Las dependencias pueden afectar la forma en que el Product Owner decide pedir artículos del Product Backlog.",
        type: "true_false",
        options: [
            "Sí",
            "No"
        ],
        correctAnswer: 0,
        explanation: "El Product Owner debe considerar dependencias técnicas o externas al ordenar el Backlog para minimizar bloqueos durante los Sprints."
    },
    {
        question: "¿Cuáles son métricas que hablan del valor que el equipo Scrum está aportando? Elige los dos mejores.",
        type: "multiple_choice",
        options: [
            "Velocidad de sprint",
            "Momento de salida al mercado",
            "Puntuaciones de satisfacción del cliente",
            "Alcance que se ha completado",
            "Alta productividad"
        ],
        correctAnswer: [1, 2],
        explanation: "El valor real en Scrum se mide mediante resultados e impacto de negocio (como la satisfacción del cliente y el Time-to-Market), no mediante métricas de rendimiento interno como la velocidad."
    },
    {
        question: "Como Product Owner, ¿cuáles son los criterios válidos para pedir el Product Backlog? Elige todos los que sean relevantes.",
        type: "multiple_choice",
        options: [
            "Valor",
            "Dependencias entre elementos",
            "Perspectivas de la anterior Retrospectiva Sprint",
            "Dependencias relacionada con otros productos",
            "La productividad del Scrum Master",
            "Todo lo anterior es correcto"
        ],
        correctAnswer: [0, 1, 3],
        explanation: "El Product Backlog se ordena considerando principalmente el valor, pero también las dependencias internas y externas del ecosistema de productos."
    },
    {
        question: "El Product Owner debe tener varios Product Backlogs cuando varios equipos trabajan en el mismo producto.",
        type: "true_false",
        options: [
            "Sí",
            "No"
        ],
        correctAnswer: 1,
        explanation: "Un solo producto tiene un único Product Backlog, independientemente de cuántos equipos Scrum trabajen en él."
    },
    {
        question: "¿Qué aspectos podría considerar un Product Owner de Scrum para asegurarse de que el producto genere valor? Elige las tres mejores.",
        type: "multiple_choice",
        options: [
            "Cómo está mejorando la velocidad",
            "Comentarios y datos de los clientes",
            "Qué facilidad para el uso del producto puede ser utilizado por los clientes finales",
            "Qué porcentaje de funcionalidad se está utilizando",
            "Evitar cambios en el alcance del proyecto"
        ],
        correctAnswer: [1, 2, 3],
        explanation: "Para asegurar el valor, el PO inspecciona el uso real de las funciones, la usabilidad y los comentarios/datos del mercado."
    },
    {
        question: "¿Es la reseña de Sprint un foro adecuado para recopilar opiniones de clientes?",
        type: "true_false",
        options: [
            "Sí",
            "No"
        ],
        correctAnswer: 0,
        explanation: "La Sprint Review es un evento colaborativo diseñado específicamente para que los Stakeholders y clientes inspeccionen el incremento y aporten feedback."
    },
    {
        question: "El Product Owner es el equivalente a un Project Manager tradicional, en un contexto ágil.",
        type: "true_false",
        options: [
            "Sí",
            "No"
        ],
        correctAnswer: 1,
        explanation: "El PO no es un Project Manager; su enfoque está en maximizar el valor del producto y el ROI, no en gestionar cronogramas, presupuestos o asignación de tareas de forma directiva."
    },
    {
        question: "Todo el trabajo que los desarrolladores extraigan debe provenir del Product Backlog.",
        type: "true_false",
        options: [
            "Sí",
            "No"
        ],
        correctAnswer: 0,
        explanation: "El Product Backlog es la única fuente de requisitos para cualquier cambio o trabajo a realizar en el producto."
    },
    {
        question: "¿Cuál es una señal de que el Product Owner necesita trabajar más estrechamente con el resto del equipo Scrum?",
        type: "single_choice",
        options: [
            "El Product Owner no trabaja como miembro a tiempo completo del equipo Scrum",
            "El incremento del producto que se mostró durante la revisión de Sprint no es lo que el Product Owner pensaba que había pedido",
            "No se han implementado pruebas automatizadas",
            "Los desarrolladores duplicaron su velocidad durante el Sprint anterior"
        ],
        correctAnswer: 1,
        explanation: "Si el Incremento final no coincide con las expectativas del PO, evidencia una falta de comunicación, colaboración y refinamiento continuo durante el Sprint."
    },
    {
        question: "Si el Daily Scrum se celebrara cada dos días, ¿qué tres aspectos deberíamos preocuparnos? Elige las tres mejores respuestas.",
        type: "multiple_choice",
        options: [
            "Los impedimentos pueden ser señalados y eliminados con retraso",
            "El Product Owner no podrá actualizar a la dirección ni a los grupos de interés a diario",
            "El plan para el Sprint puede no ser preciso",
            "El Scrum Master no podrá seguir el progreso realizado por los desarrolladores",
            "Se reduce la inspección y adaptación sobre el Sprint Backlog"
        ],
        correctAnswer: [0, 2, 4],
        explanation: "Reducir la frecuencia del Daily Scrum daña el empirismo: se tarda más en detectar impedimentos, el plan pierde precisión ante imprevistos y cae la capacidad de adaptación."
    },
    {
        question: "¿Quién es responsable de maximizar el valor del producto?",
        type: "single_choice",
        options: [
            "Los desarrolladores",
            "Los actores",
            "El CTO",
            "El CEO",
            "El Propietario del Producto",
            "El Scrum Master"
        ],
        correctAnswer: 4,
        explanation: "El Product Owner (Propietario del Producto) es el responsable único de maximizar el valor resultante del trabajo del Scrum Team."
    },
    {
        question: "El propietario del producto:",
        type: "single_choice",
        options: [
            "Es quien dirige a los desarrolladores",
            "Es el guardián que detiene interrupciones externas a los desarrolladores",
            "Es el responsable de optimizar el valor del trabajo de los desarrolladores",
            "Es la persona que gestiona el proyecto y optimiza su entrega a tiempo, presupuesto y alcance",
            "Es el que establece la definición de Hecho"
        ],
        correctAnswer: 2,
        explanation: "El rol central del PO en Scrum es optimizar de manera continua el valor del trabajo realizado por el equipo."
    },
    {
        question: "¿Con qué frecuencia cambiará la composición del equipo de melé?",
        type: "single_choice",
        options: [
            "No debe cambiarse en absoluto",
            "Cada Sprint si es posible, para promover un espíritu de fuerte colaboración en equipo",
            "Cuando sea necesario, aunque la productividad pueda verse afectada a corto plazo",
            "Cada tres Sprints, para mejorar la moral del equipo"
        ],
        correctAnswer: 2,
        explanation: "Los cambios en los miembros del equipo deben minimizarse, pero si es necesario, se realizan asumiendo una baja temporal de rendimiento a corto plazo mientras el equipo se estabiliza."
    },
    {
        question: "¿Qué preguntas deberían usar los desarrolladores en el Daily Scrum? Elige los dos mejores.",
        type: "multiple_choice",
        options: [
            "¿Qué hice ayer que ayudó al equipo a alcanzar el objetivo del Sprint? ¿Qué haré hoy para ayudar a alcanzar el objetivo del Sprint? ¿Veo algún impedimento?",
            "¿Cuántas horas ideales trabajé ayer? ¿Qué haré mañana para ayudar a los desarrolladores a alcanzar el objetivo del Sprint? ¿Han aprobado mis tareas diarias por el Product Owner?",
            "Las tres preguntas \"clásicas\" no son obligatorias ni forman parte del marco de Scrum",
            "Los desarrolladores deciden la estructura del Daily Scrum y qué preguntas pueden usar"
        ],
        correctAnswer: [2, 3],
        explanation: "La Guía Scrum actual eliminó las 3 preguntas clásicas. Los desarrolladores tienen total autonomía para estructurar la sesión como prefieran mientras se enfoquen en el progreso hacia el Sprint Goal."
    },
    {
        question: "¿Cuándo se considera implementado un artículo de Product Backlog?",
        type: "single_choice",
        options: [
            "When los evaluadores han cumplido su parte y se cumplen los criterios de aceptación",
            "En la Sprint Review",
            "Cuando el elemento del Product Backlog no tiene trabajo pendiente y puede ser publicado si el Product Owner así lo decide",
            "Cuando se hayan finalizado todas las tareas de desarrollo en el Backlog de Sprint",
            "Cuando el Scrum Master declara el elemento \"Hecho\""
        ],
        correctAnswer: 2,
        explanation: "Un elemento está terminado cuando cumple completamente con la Definition of Done (DoD), quedando en un estado potencialmente desplegable y de valor utilizable."
    },
    {
        question: "En cuanto a la gestión del retraso de productos, ¿qué prácticas ayudarían a reducir el desperdicio? Elige los dos mejores.",
        type: "multiple_choice",
        options: [
            "Escribir elementos de Product Backlog como historias de usuario sin ambigüedades",
            "Nombrar a otro Product Owner como especialista en Product Backlog",
            "Añadir detalles a los elementos del Product Backlog solo cuando sea probable que se implementen en el próximo Sprint (s)",
            "Eliminación de elementos antiguos del retraso de productos"
        ],
        correctAnswer: [2, 3],
        explanation: "El enfoque Just-in-Time reduce desperdicios detallando los ítems solo cuando se acerca su desarrollo, y eliminando periódicamente los requisitos obsoletos que quitan claridad."
    },
    {
        question: "Usando el framework Scrum, ¿quién crea la definición de Hecho?",
        type: "single_choice",
        options: [
            "Los promotores, si la organización de desarrollo no tiene uno",
            "El Scrum Master",
            "El Equipo Scrum, si la organización de desarrollo no tiene uno",
            "El Product Owner, si los interesados no presentan uno"
        ],
        correctAnswer: 2,
        explanation: "Si la organización matriz no cuenta con una definición estándar de Hecho, el Scrum Team en conjunto debe adoptar una adecuada para el producto."
    },
    {
        question: "Los desarrolladores son responsables de lanzar el producto más valioso que puedan implementar.",
        type: "true_false",
        options: [
            "Sí",
            "No"
        ],
        correctAnswer: 1,
        explanation: "Falso. Los desarrolladores crean el incremento técnico según los estándares de calidad, pero la responsabilidad y decisión de lanzar ese valor comercial al mercado recae exclusivamente en el Product Owner."
    },
    {
        question: "¿Cuándo actualiza el Product Owner de un equipo Scrum el plan del proyecto?",
        type: "single_choice",
        options: [
            "El gráfico de Gantt del proyecto debe actualizarse antes de la reunión de planificación del sprint",
            "Esto no es trabajo del Product Owner, el Scrum Master debe actualizar el plan del proyecto",
            "En Scrum, el Product Backlog es el plan, que se actualiza a medida que se obtiene nueva información y retroalimentación",
            "Scrum es incompatible con la planificación",
            "Durante la retrospectiva del Sprint, con la ayuda de los desarrolladores"
        ],
        correctAnswer: 2,
        explanation: "En Scrum el Product Backlog actúa como el plan vivo del proyecto. Es un artefacto dinámico que se adapta continuamente ante nueva información."
    },
    {
        question: "El catálogo de productos (elige las tres mejores respuestas):",
        type: "multiple_choice",
        options: [
            "Está gestionado por el Scrum Master",
            "Es gestionado por el Product Owner",
            "Está ordenado en función de la prioridad, el valor, las dependencias, el riesgo y el coste",
            "Es una lista o inventario de elementos que el Producto puede incluir",
            "Es una lista finalizada de todos los requisitos futuros que puedan afectar al Producto"
        ],
        correctAnswer: [1, 2, 3],
        explanation: "El Product Backlog es una lista viva gestionada por el PO que abarca todo lo que el producto puede necesitar, ordenada dinámicamente bajo múltiples factores de valor y riesgo."
    },
    {
        question: "¿Cuáles son los requisitos de Scrum? Elige todos los que se presentan.",
        type: "multiple_choice",
        options: [
            "Scrum diario",
            "Los desarrolladores tienen que levantarse durante el Daily Scrum",
            "Planificación de la publicación",
            "Revisión de Sprint",
            "Gráfico de Burndown de Lanzamiento",
            "Todo lo anterior es correcto"
        ],
        correctAnswer: [0, 3],
        explanation: "El Daily Scrum y la Sprint Review son eventos oficiales obligatorios dentro de la estructura de Scrum."
    },
    {
        question: "¿Quién forma parte del equipo de Scrum? Elige todas las respuestas que se apliquen.",
        type: "multiple_choice",
        options: [
            "Propietario del producto",
            "Los desarrolladores",
            "La oficina de gestión de proyectos",
            "Partes interesadas",
            "Scrum Master",
            "Clientes"
        ],
        correctAnswer: [0, 1, 4],
        explanation: "El Scrum Team está compuesto estrictamente por tres roles: el Product Owner, los Developers (desarrolladores) y el Scrum Master."
    },
    {
        question: "Hay cuatro equipos Scrum trabajando en un producto, y algunos desarrolladores preguntan al Scrum Master cómo podrían coordinar mejor el trabajo entre equipos. ¿Cuál de los siguientes sería el mejor camino para el Scrum Master?",
        type: "single_choice",
        options: [
            "El Scrum Master debería fusionar las tareas de Sprint de cada equipo en un plan maestro para el Sprint",
            "El Scrum Master debería entrenar al Product Owner para colaborar con un desarrollador senior de cada equipo, que actuaría como representantes del equipo",
            "El Scrum Master debe enseñar al Product Owner a trabajar con desarrolladores senior para evitar superposiciones excesivas de desarrollo durante el Sprint",
            "El Scrum Master debe enseñar a los desarrolladores que son responsables de trabajar con los demás equipos, para producir un incremento integrado y finalizado",
            "El Scrum Master debe supervisar a diario a los cuatro equipos para eliminar cualquier dependencia"
        ],
        correctAnswer: 3,
        explanation: "La coordinación técnica entre múltiples equipos es responsabilidad directa de los propios desarrolladores, quienes deben autoorganizarse para asegurar un incremento integrado."
    },
    {
        question: "¿Qué resultado de la reunión de planificación del Sprint proporciona una dirección general a los desarrolladores durante todo el Sprint?",
        type: "single_choice",
        options: [
            "El Plan de Lanzamiento del Producto",
            "El objetivo del sprint",
            "Actas de planificación del sprint",
            "El retraso en los sprints",
            "El retraso de productos",
            "El objetivo del producto"
        ],
        correctAnswer: 1,
        explanation: "El Sprint Goal (objetivo del sprint) es el pilar que da propósito, foco y flexibilidad a los desarrolladores durante el transcurso del Sprint."
    },
    {
        question: "¿Cuáles de las siguientes acciones aumentan la transparencia del retraso de productos? Elige los dos mejores.",
        type: "multiple_choice",
        options: [
            "Mantenerlo actualizado con la información y los conocimientos más recientes de los clientes",
            "Dimensionar sus artículos de forma que ninguno tenga más de 8 puntos de trabajo",
            "Asegurarse de que los elementos de arriba estén dimensionados de tal forma que puedan completarse en un Sprint",
            "Asegurarse de que solo se actualice durante la revisión del Sprint, permitiendo que el Product Owner y los interesados colaboren y lo ajusten",
            "Actualizarlo solo durante el Daily Scrum, cuando está presente todo el equipo Scrum"
        ],
        correctAnswer: [0, 2],
        explanation: "La transparencia aumenta manteniendo el backlog refinado con feedback real del cliente y asegurando que los ítems superiores sean pequeños y listos para ser completados."
    },
    {
        question: "¿Quién estima los artículos del retraso de productos?",
        type: "single_choice",
        options: [
            "El Scrum Master, tras aclarar cualquier aspecto con el Product Owner",
            "El Product Owner, tras aclarar cualquier aspecto con los desarrolladores",
            "Los desarrolladores, tras aclarar cualquier aspecto con el Product Owner",
            "Los desarrolladores, tras aclarar cualquier aspecto con el Scrum Master"
        ],
        correctAnswer: 2,
        explanation: "Los encargados de realizar el esfuerzo técnico (los desarrolladores) son los únicos responsables de estimar las tareas del Product Backlog."
    },
    {
        question: "¿Qué trabajo de Product Owner puede delegar en otros?",
        type: "single_choice",
        options: [
            "Escribir historias de usuario claras",
            "Pedido de los productos pendientes",
            "Participación en la reunión de Sprint Review",
            "Representar a los interesados ante el resto del equipo Scrum",
            "Todo lo anterior"
        ],
        correctAnswer: 1,
        explanation: "El PO puede delegar la estructuración u ordenación detallada de ciertos elementos a los desarrolladores, pero sigue manteniendo la responsabilidad última de la gestión."
    },
    {
        question: "¿Qué es el cono de incertidumbre?",
        type: "single_choice",
        options: [
            "Muestra que, a medida que avanza el proyecto, la incertidumbre se reduce",
            "Es una herramienta de gestión para estimar las ganancias y pérdidas de un proyecto antes de que comience",
            "Muestra el esfuerzo acumulado de desarrollo a lo largo del tiempo, ajustado por incertidumbre",
            "Proporciona una representación visual del trabajo restante en un Sprint frente al alcance total del proyecto"
        ],
        correctAnswer: 0,
        explanation: "El Cono de Incertidumbre grafica de qué forma disminuye la variabilidad y el desconocimiento sobre el producto conforme se obtiene conocimiento empírico."
    },
    {
        question: "¿Cuáles de las siguientes acciones podría realizar el Scrum Master durante el Sprint? Elige los dos mejores.",
        type: "multiple_choice",
        options: [
            "Seguir cómo progresan los desarrolladores",
            "Asignar tareas de Sprint Backlog a los desarrolladores",
            "Eliminar impedimentos",
            "Asegurarse de que el Product Owner asista a todas las reuniones de Scrum",
            "Facilitar oportunidades de mejoras en inspección, adaptación y transparencia según sea necesario",
            "Escribir todas las historias de usuario para el Product Owner"
        ],
        correctAnswer: [2, 4],
        explanation: "El Scrum Master actúa como líder servicial removiendo bloqueos externos y facilitando el uso correcto de los pilares empíricos (inspección/adaptación)."
    },
    {
        question: "El Backlog de Sprint puede actualizarse mediante:",
        type: "single_choice",
        options: [
            "El propietario del producto",
            "El Scrum Master",
            "Los desarrolladores",
            "El Scrum Manager"
        ],
        correctAnswer: 2,
        explanation: "El Sprint Backlog pertenece únicamente a los desarrolladores. Nadie más puede modificar su contenido durante el Sprint."
    },
    {
        question: "Los equipos Scrum deberían tener un Sprint de Liberación (Release Sprint).",
        type: "true_false",
        options: [
            "Sí",
            "No"
        ],
        correctAnswer: 1,
        explanation: "Scrum no contempla los \"Sprints de estabilización o liberación\". El equipo debe generar un incremento utilizable y potencialmente desplegable al final de cada Sprint regular."
    },
    {
        question: "Durante Sprint 0, el Product Owner debe:",
        type: "single_choice",
        options: [
            "No existe Sprint 0",
            "Hacer todo el trabajo de descubrimiento desde el principio, antes de que comience el proyecto",
            "Formar un equipo de desarrolladores senior",
            "Elaborar un diagrama de Gantt con todas las actividades relevantes y una previsión presupuestaria"
        ],
        correctAnswer: 0,
        explanation: "En la teoría pura de Scrum el \"Sprint 0\" no existe. El desarrollo y el marco empírico inician formalmente desde el Sprint 1."
    },
    {
        question: "Los desarrolladores concluyen que han seleccionado demasiado trabajo para un Sprint. ¿Qué deberían hacer?",
        type: "single_choice",
        options: [
            "Pedir al Scrum Master que contrate a más desarrolladores, para que se pueda realizar el trabajo extra",
            "Hacer horas extra y asegurarse de que todo el trabajo se realice, independientemente",
            "Informar al Product Owner lo antes posible para eliminar algunos artículos del Product Backlog",
            "Acortar la definición de Hecho, para permitir que el trabajo restante encaje."
        ],
        correctAnswer: 2,
        explanation: "Los desarrolladores deben colaborar inmediatamente con el Product Owner para remover o renegociar ítems del Sprint Backlog sin alterar el objetivo principal."
    },
    {
        question: "¿Quién es responsable de hacer todo el trabajo para que un artículo de Product Backlog cumpla con la definición de Hecho?",
        type: "single_choice",
        options: [
            "El departamento de Aseguramiento de la Calidad",
            "El Propietario del Producto",
            "Los desarrolladores",
            "El Scrum Master",
            "El equipo de melé",
            "La organización de desarrollo"
        ],
        correctAnswer: 2,
        explanation: "Los desarrolladores son los responsables directos de ejecutar todas las actividades técnicas necesarias para llevar un elemento al estándar de \"Hecho\"."
    },
    {
        question: "Es obligatorio que el Product Owner de Scrum escriba todos los elementos del Product Backlog para poder entregarlos a los desarrolladores para su implementación.",
        type: "true_false",
        options: [
            "Sí",
            "No"
        ],
        correctAnswer: 1,
        explanation: "El PO puede delegar la redacción técnica o creación de historias en los desarrolladores u otros colaboradores, manteniendo la rendición de cuentas final."
    },
    {
        question: "Los desarrolladores de un equipo de Scrum han empezado a trabajar de forma remota pero están teniendo problemas de coordinación para configurar el Scrum Diario. Por ejemplo, les cuesta encontrar la herramienta adecuada de videoconferencia. ¿Qué debería hacer el Scrum Master?",
        type: "single_choice",
        options: [
            "Dejar que los desarrolladores se autogestionen y decidan cómo resolver los problemas",
            "Organizar el Daily Scrum y no dejar que el equipo pierda su tiempo con esto",
            "Instruir a los desarrolladores para que roten la propiedad del Daily Scrum",
            "Pedir al Product Owner que intervenga y elija la mejor herramienta de comunicación para el equipo"
        ],
        correctAnswer: 0,
        explanation: "El Scrum Master debe guiar e incentivar la autogestión de los desarrolladores para que resuelvan de forma autónoma sus retos operativos de coordinación."
    },
    {
        question: "La caja de tiempo para la Sprint Review es:",
        type: "single_choice",
        options: [
            "4 horas para un Sprint de un mes",
            "3 horas para un sprint de un mes",
            "4 horas para un Sprint de un mes, aunque puede extenderse otras 4 horas si es necesario",
            "3 horas para un Sprint de un mes, aunque puede extenderse otras 3 horas si es necesario"
        ],
        correctAnswer: 0,
        explanation: "La Sprint Review posee un Timebox estricto de máximo 4 horas para Sprints estandarizados de un mes completo."
    },
    {
        question: "Si los desarrolladores le dicen al Product Owner que probablemente no implementarán toda la funcionalidad que previeron, ¿qué debería hacer el Product Owner?",
        type: "single_choice",
        options: [
            "Despedir al desarrollador principal y poner al resto del equipo en evaluación de desempeño",
            "Cambiar el objetivo de sprint según sea necesario",
            "Trabajar con los desarrolladores para eliminar o modificar los elementos del Retraso de Producto, de modo que se pueda cumplir el Objetivo del Sprint",
            "Saltarse la Retrospectiva del Sprint para ahorrar tiempo",
            "Exigir a los desarrolladores que trabajen horas extra si es necesario"
        ],
        correctAnswer: 2,
        explanation: "El PO colabora activamente con el equipo para ajustar y refinar el alcance del Sprint protegiendo la integridad del Sprint Goal."
    },
    {
        question: "¿Qué tamaño tiene un artículo \"listo\" en Product Backlog?",
        type: "single_choice",
        options: [
            "Tiene 8 puntos de historia o menos",
            "Se puede hacer en un día o menos",
            "Se puede hacer dentro de un Sprint",
            "Puede hacerse en un Sprint por un solo desarrollador"
        ],
        correctAnswer: 2,
        explanation: "Un ítem está \"listo\" cuando su nivel de claridad y tamaño permite ser completado holgadamente dentro de los límites de un único Sprint."
    },
    {
        question: "El Product Owner debe elaborar criterios de aceptación exhaustivos antes de que un artículo de Product Backlog pueda incluirse en la Planificación del Sprint.",
        type: "true_false",
        options: [
            "Sí",
            "No"
        ],
        correctAnswer: 1,
        explanation: "No se requieren especificaciones exhaustivas previas; los detalles y criterios se complementan y emergen de manera colaborativa durante el refinamiento y la planificación."
    },
    {
        question: "Se necesita un objetivo de Sprint (Sprint Goal) porque:",
        type: "single_choice",
        options: [
            "Los desarrolladores tienen un objetivo compartido que también proporciona flexibilidad durante el Sprint",
            "Los objetivos de sprint no son útiles, el Scrum Master debería impedir que los desarrolladores tengan uno",
            "Expresa toda la visión del producto",
            "Garantiza que todos los elementos seleccionados del Product Backlog sean realizados por los desarrolladores durante el Sprint"
        ],
        correctAnswer: 0,
        explanation: "El Sprint Goal unifica los esfuerzos del equipo bajo una meta común, brindando flexibilidad ante imprevistos técnicos."
    },
    {
        question: "Los desarrolladores eligen:",
        type: "single_choice",
        options: [
            "Cómo pedir el retraso de productos",
            "La duración de un Sprint",
            "Cómo realizar el trabajo durante el Sprint",
            "Cuándo lanzar el producto Incremento"
        ],
        correctAnswer: 2,
        explanation: "Como equipo autogestionado, los desarrolladores poseen la autonomía absoluta de decidir el método técnico y operativo para construir el Incremento."
    },
    {
        question: "¿Con qué frecuencia deberíamos medir la satisfacción del cliente?",
        type: "single_choice",
        options: [
            "A veces",
            "Cada trimestre",
            "Cada día",
            "Frecuentemente"
        ],
        correctAnswer: 3,
        explanation: "La satisfacción del cliente debe ser evaluada de forma constante y frecuente para validar empíricamente que se está aportando valor continuo."
    },
    {
        question: "¿Quién es responsable de crear el objetivo del producto?",
        type: "single_choice",
        options: [
            "El Scrum Master",
            "Los desarrolladores",
            "El Propietario del Producto",
            "El Product Owner y el Scrum Master"
        ],
        correctAnswer: 2,
        explanation: "El Product Owner es el responsable de definir el Product Goal (Objetivo del Producto), el cual describe el estado futuro a largo plazo del producto."
    },
    {
        question: "¿Cuál de los siguientes aspectos no debería afectar al orden del retraso de productos?",
        type: "single_choice",
        options: [
            "Dependencias",
            "Relevancia para clientes y usuarios",
            "Estrategia empresarial",
            "Herramientas utilizadas por los desarrolladores",
            "Riesgo",
            "Valor"
        ],
        correctAnswer: 3,
        explanation: "El entorno tecnológico o las herramientas operativas de los desarrolladores no determinan la prioridad de negocio del Product Backlog."
    },
    {
        question: "¿Cuáles son las actividades habituales para el Product Owner durante un Sprint? Elige los dos mejores.",
        type: "multiple_choice",
        options: [
            "Reunirse y trabajar con los grupos de interés y otros gestores de producto",
            "Participar en cada Daily Scrum para resolver las dudas planteadas por los desarrolladores",
            "Analizar el informe diario recopilado por el Scrum Master sobre el trabajo pendiente",
            "Realizar el refinamiento del backlog de producto con los desarrolladores",
            "Establecer informes diarios para el equipo Scrum en función del tiempo invertido, presupuesto y alcance"
        ],
        correctAnswer: [0, 3],
        explanation: "Durante el ciclo, el PO divide su tiempo interactuando externamente con Stakeholders y refinando internamente los requisitos del backlog con el equipo."
    },
    {
        question: "¿Cuál de la siguientes opciones pueden ofrecer los desarrolladores en un Sprint?",
        type: "single_choice",
        options: [
            "Un producto mínimo viable con algunos fallos",
            "Un documento funcional integral",
            "Un conjunto de pruebas unitarias que puedan usarse para pruebas adecuadas en el próximo Sprint",
            "Un incremento realizado de software funcional"
        ],
        correctAnswer: 3,
        explanation: "El output obligatorio de cada Sprint debe ser un incremento utilizable, inspeccionable y funcional que cumpla con los criterios de \"Hecho\"."
    },
    {
        question: "¿Por qué deberíamos celebrar el Daily Scrum en el mismo momento y lugar?",
        type: "single_choice",
        options: [
            "Al contrario, se recomienda la variedad diaria",
            "Reducir la complejidad",
            "Que encaje en el calendario del Product Owner",
            "Facilitar que el Scrum Master envíe las invitaciones a las reuniones"
        ],
        correctAnswer: 1,
        explanation: "Mantener un horario y locación fija remueve barreras logísticas, minimiza la complejidad y establece un hábito predecible para el equipo."
    },
    {
        question: "¿Cuándo deberían los desarrolladores cancelar un Sprint?",
        type: "single_choice",
        options: [
            "Cuando los impedimentos son demasiados que no pueden superarse",
            "Cuando el Scrum Master declara que la infraestructura de desarrollo no es adecuada",
            "Cuando el equipo no tiene el nivel adecuado de autoorganización",
            "Los desarrolladores no pueden cancelar un Sprint, solo el Product Owner puede"
        ],
        correctAnswer: 3,
        explanation: "Únicamente el Product Owner retiene la autoridad formal para decretar la cancelación prematura de un Sprint en curso si el objetivo queda obsoleto."
    },
    {
        question: "Para tomar decisiones de inversión, el Product Owner probablemente analizará el Coste Total de Propiedad (TCO) del producto que se está construyendo. ¿Qué costes tendrá en cuenta un Product Owner?",
        type: "single_choice",
        options: [
            "El coste acumulado sobre el valor ganado del producto",
            "El dinero invertido en el desarrollo y la entrega del producto",
            "Todas las inversiones necesarias para concebir, desarrollar, operar y mantener el producto"
        ],
        correctAnswer: 2,
        explanation: "El Product Owner no solo es responsable del desarrollo y lanzamiento de un producto, sino también del coste de mantenimiento y operación del producto a lo largo de su vida útil."
    },
    {
        question: "¿Qué descripción encaja mejor con el rol del Product Owner?",
        type: "single_choice",
        options: [
            "Protector de mira",
            "Analista Jefe de Negocios",
            "Maximizador de valor",
            "Recaudador de requisitos",
            "Gestor de Proyecto 2.0"
        ],
        correctAnswer: 2,
        explanation: "El Product Owner es responsable de maximizar el valor del producto resultante del trabajo del Scrum Team."
    },
    {
        question: "El valor que aporta un producto solo puede determinarse por los ingresos.",
        type: "true_false",
        options: [
            "Cierto",
            "Falso"
        ],
        correctAnswer: 1,
        explanation: "El valor es un concepto subjetivo y multidimensional que probablemente varía entre diferentes tipos de productos y organizaciones, no limitándose solo a los ingresos financieros."
    },
    {
        question: "¿Cuál es el valor principal de liberar el Incremento para los clientes?",
        type: "single_choice",
        options: [
            "Para conocer la previsión de funcionalidad que se desarrolló",
            "Para validar las suposiciones hechas al crear el producto",
            "Para aprender sobre la productividad del equipo Scrum"
        ],
        correctAnswer: 1,
        explanation: "Liberar el Incremento a clientes o usuarios reales en el mercado es la única forma empírica de validar las suposiciones hechas sobre el valor."
    },
    {
        question: "El equipo Scrum debe elegir al menos un elemento de mejora de procesos de alta prioridad, identificado durante la retrospectiva de Sprint, e incluirlo en el Backlog de Sprint.",
        type: "true_false",
        options: [
            "Cierto",
            "Falso"
        ],
        correctAnswer: 1,
        explanation: "Falso. Aunque versiones anteriores de la Guía Scrum lo exigían como obligatorio, la actualización actual eliminó esta restricción para no ser tan prescriptiva, dejando la práctica como opcional si aporta valor al equipo."
    },
    {
        question: "El Product Owner gestiona el Product Backlog. ¿Quién es responsable de estimar el esfuerzo para completar los elementos del Product Backlog?",
        type: "single_choice",
        options: [
            "Los desarrolladores",
            "El PMO",
            "El Product Owner"
        ],
        correctAnswer: 0,
        explanation: "Los desarrolladores que realizarán el trabajo son los únicos responsables de estimar el esfuerzo y presupuesto final de los elementos."
    },
    {
        question: "¿Cómo sabe una organización que un producto construido con Scrum es exitoso?",
        type: "single_choice",
        options: [
            "Midiendo el tiempo real dedicado al desarrollo frente al tiempo estimado para el desarrollo",
            "Al medir esa velocidad, ha aumentado desde la última liberación",
            "Liberando frecuentemente el Incremento al cliente y midiendo el valor que recibe el cliente",
            "Por parte del Product Owner y los interesados que aceptan el Incremento en la Revisión Sprint"
        ],
        correctAnswer: 2,
        explanation: "Scrum funciona de forma iterativa e incremental. Si el Incremento no se publica con frecuencia, se pierde la oportunidad de captar la opinión de los clientes y medir el verdadero valor real."
    },
    {
        question: "¿Cómo ayudan los timeboxes al Product Owner y a los demás miembros del equipo Scrum a validar suposiciones, adaptarse y maximizar el valor de su producto?",
        type: "single_choice",
        options: [
            "Al final de cada Sprint, cuando expira la caja de tiempo, se dispone de un informe detallado con todos los casos de prueba y resultados de las pruebas",
            "Timeboxes asegura al Product Owner que los desarrolladores terminarán todo el trabajo en el Sprint Backlog antes de que termine el Sprint",
            "Los Timeboxes ayudan asegurándose de que un Sprint no se detenga hasta que se completen todas las pruebas y el trabajo sea verificado por el Product Owner",
            "Las cajas de tiempo ayudan a minimizar el riesgo creando la oportunidad de validar suposiciones utilizando la retroalimentación de usuarios y del mercado; permitiendo a los equipos Scrum inspeccionar el progreso hacia el objetivo del producto y decidir si cambiar de rumbo o perseverar"
        ],
        correctAnswer: 3,
        explanation: "El PO asume que un elemento generará valor, pero esa suposición debe validarse en el mercado. Mantener Sprints cortos limita el riesgo financiero y temporal a un mes o menos."
    },
    {
        question: "¿Qué expresiones describen mejor la relación entre el Product Owner y los desarrolladores? Elige las dos mejores respuestas.",
        type: "multiple_choice",
        options: [
            "Deben trabajar separados tanto como sea posible para mantener separadas las preocupaciones de los negocios y la tecnología",
            "Colaboran con frecuencia para que los desarrolladores construyan incrementos teniendo en cuenta las preocupaciones de los usuarios finales y partes interesadas",
            "Colaboran con frecuencia para que el Product Owner pueda tomar decisiones informadas equilibrando el esfuerzo y el valor de los artículos del Product Backlog",
            "No deberían compartir más que la reunión de Planificación de Sprint y Revisión de Sprints",
            "El Product Owner debe estar con los desarrolladores a tiempo completo para desarrollar un conocimiento profundo de la tecnología utilizada"
        ],
        correctAnswer: [1, 2],
        explanation: "El PO colabora con frecuencia con el equipo para que comprendan la visión del negocio, el valor esperado de los ítems y para renegociar el alcance si el esfuerzo técnico crece."
    },
    {
        question: "¿Qué describe mejor la relación entre el Product Owner y los grupos de interés?",
        type: "single_choice",
        options: [
            "El Product Owner redacta las User Stories tal y como las proporcionan los stakeholders",
            "El Product Owner proporciona a los interesados los formularios de aceptación en la Revisión Sprint para que consten su acuerdo formal sobre el software entregado",
            "El Product Owner tiene la decisión final sobre los requisitos y debe implicar a las partes interesadas lo menos posible",
            "El Product Owner solicita activamente la opinión de los interesados y las expectativas que se incorporen al Backlog de Producto"
        ],
        correctAnswer: 3,
        explanation: "El Product Owner representa activamente las necesidades de los interesados (stakeholders) ante el equipo de Scrum, integrando sus expectativas en el Product Backlog."
    },
    {
        question: "¿Qué dos cosas ayudan mejor al Product Owner a gestionar el valor de un producto? Elige las dos mejores respuestas.",
        type: "multiple_choice",
        options: [
            "Ideando una fórmula para un cálculo neutral del valor",
            "Establecer valor en los artículos individuales del catálogo de productos mediante Value Poker",
            "El orden del catálogo de productos",
            "Validando suposiciones de valor mediante publicaciones frecuentes"
        ],
        correctAnswer: [2, 3],
        explanation: "El orden explícito del Product Backlog sirve como plan predictivo de valor, pero dicho valor solo se gestiona y confirma eficazmente lanzando el incremento frecuentemente al mercado."
    },
    {
        question: "¿Cuáles son las actividades típicas para un Product Owner en un Sprint? Elige las dos mejores respuestas.",
        type: "multiple_choice",
        options: [
            "Actualiza el plan de trabajo para los desarrolladores a diario",
            "Colabora con los interesados, las comunidades de usuarios y los expertos en la materia",
            "Asiste a cada Daily Scrum para responder preguntas funcionales sobre los elementos discutidos del Sprint Backlog",
            "Trabaja con los desarrolladores en el refinamiento del backlog de producto",
            "Elabora informes financieros sobre las horas dedicadas reportadas por el equipo Scrum"
        ],
        correctAnswer: [1, 3],
        explanation: "Durante el Sprint, el PO equilibra su tiempo colaborando con el ecosistema externo de stakeholders y refinando continuamente los detalles del Product Backlog con los desarrolladores."
    },
    {
        question: "¿Está obligado el Product Owner a estar presente en la Sprint Retrospective?",
        type: "single_choice",
        options: [
            "Su asistencia es obligatoria. La Retrospectiva del Sprint es una oportunidad para que el equipo de Scrum se evalúe y mejore",
            "No están permitidas. La Sprint Retrospective es una oportunidad para que los desarrolladores mejoren",
            "Son opcionales. Solo se requiere asistencia cuando el Product Owner es invitado por el Scrum Master"
        ],
        correctAnswer: 0,
        explanation: "Es obligatoria. Al ser un miembro pleno del Scrum Team, el Product Owner debe participar activamente en la Retrospectiva para inspeccionar y adaptar los procesos y relaciones del equipo."
    },
    {
        question: "Un primer Sprint puede comenzar antes de que el Product Owner tenga un Product Backlog completo y exhaustivo establecido.",
        type: "true_false",
        options: [
            "Cierto",
            "Falso"
        ],
        correctAnswer: 0,
        explanation: "Cierto. Un primer Sprint solo requiere la presencia del Scrum Team y que existan suficientes ideas iniciales en el backlog para poder trabajar y cumplir un objetivo en ese ciclo inicial."
    },
    {
        question: "¿Qué deberían hacer los desarrolladores si el Product Owner no está disponible?",
        type: "single_choice",
        options: [
            "Espera hasta que el Product Owner esté disponible de nuevo",
            "La dirección debería asignar un Product Owner sustituto para cubrir cuando el Product Owner no pueda estar presente",
            "Pide al responsable del Product Owner que decida en ausencia del Product Owner",
            "Dentro del Sprint, los desarrolladores toman las mejores decisiones posibles para asegurar el progreso hacia el objetivo del Sprint, realineándose con el Product Owner una vez que este esté disponible de nuevo"
        ],
        correctAnswer: 3,
        explanation: "Scrum fomenta la autogestión. En ausencia temporal del PO, los desarrolladores operan de forma autónoma bajo su mejor criterio para proteger el avance del Sprint Goal, ajustándose después cuando este regrese."
    },
    {
        question: "¿Cuáles son tres afirmaciones incorrectas, falsas o engañosas sobre Scrum? Elige las tres mejores respuestas.",
        type: "multiple_choice",
        options: [
            "Scrum es un marco para desarrollar y mantener productos complejos",
            "Scrum se basa en el empirismo y el pensamiento lean",
            "Scrum es un marco que elimina la complejidad",
            "Cada componente de Scrum cumple un propósito específico y es esencial para tu capacidad de usar Scrum para desarrollar productos complejos",
            "Scrum es como los procesos tradicionales pero con autoorganización para sustituir a los Jefes de Proyecto",
            "Scrum es una metodología en la que puedes elegir qué partes de Scrum crees que funcionarán para tu entorno"
        ],
        correctAnswer: [2, 4, 5],
        explanation: "Scrum no es una metodología donde se eligen partes, sino un marco obligatorio en su totalidad. No elimina la complejidad del mundo real (ofrece una estructura para gestionarla) ni sustituye de forma directa los roles tradicionales como el Jefe de Proyecto."
    },
    {
        question: "Es obligatorio que el Incremento del producto se libere al mercado o producción al final de cada Sprint.",
        type: "true_false",
        options: [
            "Cierto",
            "Falso"
        ],
        correctAnswer: 1,
        explanation: "El Incremento debe ser utilizable y cumplir con la Definición de Hecho (potencialmente desplegable), pero la decisión comercial de lanzarlo o no al mercado corresponde exclusivamente al Product Owner."
    },
    {
        question: "¿Quién es responsable de gestionar el Product Backlog?",
        type: "single_choice",
        options: [
            "El Scrum Master",
            "Los Desarrolladores",
            "El Product Owner",
            "El Jefe de Proyecto"
        ],
        correctAnswer: 2,
        explanation: "El Product Owner es el único responsable de gestionar el Product Backlog para optimizar el valor del producto."
    },
    {
        question: "¿Cuándo empieza el próximo Sprint?",
        type: "single_choice",
        options: [
            "Inmediatamente después de la conclusión del Sprint anterior",
            "El lunes siguiente de la semana posterior",
            "Tan pronto como el Product Owner defina el nuevo Sprint Goal",
            "Después de una fase corta de estabilización arquitectónica"
        ],
        correctAnswer: 0,
        explanation: "Un nuevo Sprint comienza inmediatamente después de que concluye el Sprint anterior, garantizando un ritmo y cadencia continuos sin pausas artificiales."
    },
    {
        question: "¿Cuáles son los tres pilares del empirismo? Elige las tres mejores respuestas.",
        type: "multiple_choice",
        options: [
            "Transparencia",
            "Planificación",
            "Inspección",
            "Adaptación",
            "Respeto",
            "Colaboración"
        ],
        correctAnswer: [0, 2, 3],
        explanation: "El control de procesos empíricos en Scrum se basa estrictamente en tres pilares: Transparencia, Inspección y Adaptación."
    },
    {
        question: "¿Cuál es la duración máxima permitida para un Sprint en Scrum?",
        type: "single_choice",
        options: [
            "Dos semanas",
            "Un mes o menos",
            "6 semanas",
            "Tantas semanas como sea necesario para cumplir el alcance"
        ],
        correctAnswer: 1,
        explanation: "Un Sprint tiene una duración fija (caja de tiempo) de un mes o menos para reducir el riesgo ante la complejidad y la incertidumbre."
    },
    {
        question: "Durante el Sprint, el alcance puede aclararse y renegociarse a medida que se aprende más. ¿Quiénes participan en esta renegociación?",
        type: "single_choice",
        options: [
            "El Product Owner y los Stakeholders",
            "El Scrum Master y los Desarrolladores",
            "El Product Owner y los Desarrolladores",
            "Todo el Scrum Team junto con los clientes"
        ],
        correctAnswer: 2,
        explanation: "A medida que se avanza en el Sprint y surge nuevo conocimiento técnico, el alcance se aclara y renegocia estrictamente entre el Product Owner y los Desarrolladores."
    },
    {
        question: "¿Quién tiene la última palabra sobre el orden del Product Backlog?",
        type: "single_choice",
        options: [
            "El Scrum Master",
            "El CEO o la Dirección de la empresa",
            "Los Desarrolladores basados en dependencias técnicas",
            "El Product Owner"
        ],
        correctAnswer: 3,
        explanation: "El Product Owner es la máxima autoridad y el responsable único de ordenar los elementos del Product Backlog."
    },
    {
        question: "¿Qué dos cosas debe hacer un Scrum Master si los Desarrolladores no pueden resolver un impedimento de forma autónoma? Elige las dos mejores respuestas.",
        type: "multiple_choice",
        options: [
            "Resolver el problema directamente asignando tareas específicas al equipo",
            "Ayudar a eliminar el impedimento para que el equipo recupere su efectividad",
            "Llevar el impedimento ante la dirección o la organización si es necesario fuera del alcance del equipo",
            "Decidir qué elementos del Sprint Backlog deben eliminarse para compensar el tiempo perdido"
        ],
        correctAnswer: [1, 2],
        explanation: "El Scrum Master actúa como un líder que sirve al equipo; su rol implica guiar la autogestión pero también remover activamente obstáculos que bloqueen al equipo, escalándolos en la organización si es externo."
    },
    {
        question: "El Scrum Team está compuesto por los siguientes roles:",
        type: "single_choice",
        options: [
            "Product Owner, Scrum Master, Desarrolladores y Stakeholders",
            "Product Owner, Scrum Master y Desarrolladores",
            "Jefe de Proyecto, Product Owner y Desarrolladores",
            "Product Owner, Diseñadores, Desarrolladores y QA"
        ],
        correctAnswer: 1,
        explanation: "El Scrum Team es un equipo cohesionado y autosuficiente integrado exclusivamente por tres roles: el Product Owner, el Scrum Master y los Desarrolladores."
    },
    {
        question: "¿Quién es responsable de velar por que Scrum se entienda y se adopte según lo definido en la Guía de Scrum?",
        type: "single_choice",
        options: [
            "El Product Owner",
            "El Scrum Master",
            "Los Desarrolladores",
            "La Oficina de Gestión de Proyectos (PMO)"
        ],
        correctAnswer: 1,
        explanation: "El Scrum Master es el responsable de establecer Scrum ayudando a todos a comprender la teoría y práctica de Scrum, tanto internamente como en la organización."
    },
    {
        question: "¿Cuándo puede considerarse terminado un elemento del Product Backlog?",
        type: "single_choice",
        options: [
            "Cuando pasa las pruebas del departamento de Aseguramiento de la Calidad (QA)",
            "Cuando el Product Owner firma el formulario de aceptación formal",
            "Cuando cumple completamente con los criterios definidos en la Definición de Hecho (Definition of Done)",
            "Cuando se han codificado todas sus tareas asociadas en el Sprint Backlog"
        ],
        correctAnswer: 2,
        explanation: "Un elemento está verdaderamente terminado cuando el incremento resultante se ajusta de manera estricta y transparente a la Definición de Hecho (DoD)."
    },
    {
        question: "¿Qué enunciado describe mejor la autogestión en un Scrum Team?",
        type: "single_choice",
        options: [
            "El equipo decide internamente quién hace qué, cómo y cuándo hacerlo de forma autónoma",
            "El Product Owner decide qué se hace y el Scrum Master decide cómo lo hacen los Desarrolladores",
            "La dirección de la organización asigna las tareas diarias a cada miembro del equipo",
            "Los Desarrolladores eligen libremente en qué producto trabajar sin intervención del Product Owner"
        ],
        correctAnswer: 0,
        explanation: "Los equipos Scrum son autogestionados, lo que significa que eligen internamente quién hace qué, cómo y cuándo hacerlo, en lugar de ser dirigidos por personas externas."
    },
    {
        question: "¿Cuál es el propósito principal del Daily Scrum?",
        type: "single_choice",
        options: [
            "Informar el estado de las tareas individuales al Scrum Master y al Product Owner",
            "Inspeccionar el progreso hacia el Sprint Goal y adaptar el Sprint Backlog si es necesario, creando un plan para las próximas 24 horas",
            "Aprobar las horas invertidas en la herramienta de seguimiento del proyecto",
            "Revisar el desempeño individual de los desarrolladores de bajo rendimiento"
        ],
        correctAnswer: 1,
        explanation: "El Daily Scrum es un evento exclusivo para los Desarrolladores diseñado para inspeccionar el avance hacia el Sprint Goal y adaptar dinámicamente su plan de trabajo inmediato."
    },
    {
        question: "¿Quién decide cómo se llevará a cabo el trabajo seleccionado en el Sprint Backlog durante el Sprint?",
        type: "single_choice",
        options: [
            "El Product Owner",
            "El Scrum Master",
            "Los Desarrolladores",
            "El Arquitecto Técnico Principal"
        ],
        correctAnswer: 2,
        explanation: "Los Desarrolladores cuentan con autonomía absoluta; nadie más puede decirles cómo transformar los elementos del Product Backlog en Incrementos de valor."
    },
    {
        question: "¿Cuál es la función del Sprint Goal?",
        type: "single_choice",
        options: [
            "Garantizar que los Desarrolladores no cambien ninguna de las tareas estimadas",
            "Proporcionar foco, un propósito claro y un marco de flexibilidad para el trabajo que se realiza durante el Sprint",
            "Servir de métrica para evaluar el rendimiento individual de cada desarrollador",
            "Fijar de forma inamovible el alcance exacto acordado en la planificación"
        ],
        correctAnswer: 1,
        explanation: "El Sprint Goal es el único objetivo del Sprint. Brinda un propósito unificado al equipo y le ofrece flexibilidad en la ejecución técnica para alcanzarlo."
    },
    {
        question: "¿Qué sucede con los elementos del Product Backlog que no se completaron al finalizar el Sprint?",
        type: "single_choice",
        options: [
            "El Product Owner los acepta automáticamente como completados de manera parcial",
            "Se trasladan al Sprint Backlog del siguiente ciclo sin necesidad de revisión",
            "Se vuelven a estimar y regresan al Product Backlog general para que el Product Owner decida su prioridad futura",
            "El Scrum Master penaliza la velocidad estimada del equipo de desarrollo"
        ],
        correctAnswer: 2,
        explanation: "Cualquier trabajo incompleto que no cumpla con la Definición de Hecho no forma parte del Incremento; regresa al Product Backlog general para ser reestimado y repriorizado."
    },
    {
        question: "¿Quién tiene la autoridad exclusiva para cancelar un Sprint antes de que expire su caja de tiempo?",
        type: "single_choice",
        options: [
            "Los Desarrolladores en conjunto si encuentran un bloqueo técnico insuperable",
            "El Scrum Master tras evaluar la baja moral del equipo",
            "El Product Owner",
            "La Dirección ejecutiva de la organización"
        ],
        correctAnswer: 2,
        explanation: "Únicamente el Product Owner retiene la facultad de cancelar un Sprint de forma prematura si el objetivo del mismo (Sprint Goal) se vuelve obsoleto."
    },
    {
        question: "¿Cuál es el propósito principal del evento Sprint Retrospective?",
        type: "single_choice",
        options: [
            "Inspeccionar el incremento técnico con los Stakeholders externos para recibir feedback de mercado",
            "Planificar las mejoras en la eficiencia, los procesos, las relaciones y las herramientas para el próximo Sprint",
            "Presentar un informe analítico sobre el cumplimiento presupuestario del proyecto",
            "Actualizar el Product Backlog con los nuevos requisitos de los clientes finales"
        ],
        correctAnswer: 1,
        explanation: "La Retrospectiva es el espacio para que el Scrum Team se inspeccione a sí mismo e identifique mejoras concretas en su forma de trabajar que implementará en el ciclo venidero."
    },
    {
        question: "¿Cuáles son los cinco valores de Scrum?",
        type: "single_choice",
        options: [
            "Planificación, Transparencia, Inspección, Adaptación, Calidad",
            "Compromiso, Foco, Apertura, Respeto, Coraje",
            "Respeto, Colaboración, Entrega, Organización, Confianza",
            "Velocidad, Calidad, Productividad, Transparencia, Eficiencia"
        ],
        correctAnswer: 1,
        explanation: "Los miembros del Scrum Team viven y respiran cinco valores fundamentales: Compromiso, Foco, Apertura, Respeto y Coraje."
    },
    {
        question: "¿Por qué Scrum define eventos con cajas de tiempo (timeboxes)?",
        type: "single_choice",
        options: [
            "Para obligar al equipo a trabajar horas extra si no cumplen los plazos",
            "Para crear regularidad, enfocar los esfuerzos y limitar el desperdicio o los riesgos asociados en entornos complejos",
            "Para que la PMO tenga un control exacto de las horas trabajadas",
            "Para impedir que el Product Owner cambie de opinión durante el año"
        ],
        correctAnswer: 1,
        explanation: "Las cajas de tiempo restringen la duración máxima de los eventos para generar regularidad, maximizar el enfoque del equipo y mitigar riesgos e incertidumbre."
    },
    {
        question: "¿Cuál es la duración máxima permitida para la reunión de Sprint Planning en un Sprint de un mes?",
        type: "single_choice",
        options: [
            "2 horas",
            "4 horas",
            "8 horas",
            "Toda la primera semana del Sprint"
        ],
        correctAnswer: 2,
        explanation: "El Sprint Planning tiene un límite de tiempo máximo de 8 horas para un Sprint estándar de un mes (proporcionalmente menor para Sprints más cortos)."
    },
    {
        question: "¿Qué es el Sprint Backlog?",
        type: "single_choice",
        options: [
            "Una lista inmutable de tareas asignadas por el Product Owner al inicio del proyecto",
            "El conjunto de elementos seleccionados del Product Backlog, junto con el Sprint Goal y un plan de acción detallado para entregar el Incremento",
            "Un informe técnico que detalla la arquitectura del producto",
            "La lista de errores detectados en producción que el equipo debe solucionar"
        ],
        correctAnswer: 1,
        explanation: "El Sprint Backlog se compone del Sprint Goal (por qué), los elementos seleccionados (qué) y el plan entregable de los Desarrolladores (cómo)."
    },
    {
        question: "¿Qué es el Incremento en Scrum?",
        type: "single_choice",
        options: [
            "Un prototipo de diseño o maqueta no funcional que sirve para ilustrar una idea",
            "Un paso concreto hacia el Objetivo del Producto, que representa una pieza de software utilizable y de valor real que cumple con Hecho",
            "La suma total de todas las horas que los desarrolladores registraron en sus hojas de tiempo",
            "Un documento técnico detallado que especifica los requisitos arquitectónicos del sistema"
        ],
        correctAnswer: 1,
        explanation: "Cada Incremento se añade a los incrementos anteriores y se verifica minuciosamente, asegurando que todos funcionen juntos y aporten valor real alineado al Product Goal."
    },
    {
        question: "¿Cuáles de los siguientes son artefactos oficiales en Scrum? Elige las tres mejores respuestas.",
        type: "multiple_choice",
        options: [
            "Product Backlog",
            "Sprint Backlog",
            "Tablero Kanban",
            "Incremento",
            "Gráfico de Burndown",
            "Definición de Hecho"
        ],
        correctAnswer: [0, 1, 3],
        explanation: "El marco Scrum define únicamente tres artefactos oficiales para maximizar la transparencia: el Product Backlog, el Sprint Backlog y el Incremento."
    },
    {
        question: "¿Qué rol tiene la obligación absoluta de asistir al Daily Scrum?",
        type: "single_choice",
        options: [
            "El Product Owner",
            "El Scrum Master",
            "Los Desarrolladores",
            "Todo el Scrum Team incluyendo a los Stakeholders interesados"
        ],
        correctAnswer: 2,
        explanation: "El Daily Scrum es un evento exclusivo para los Desarrolladores. Si el PO o el SM tienen tareas técnicas asignadas en el backlog, asisten únicamente en su rol de desarrolladores."
    },
    {
        question: "¿Qué resultado se espera obtener al finalizar el evento de Sprint Review?",
        type: "single_choice",
        options: [
            "La firma contractual de un acta de aceptación formal por parte de los clientes",
            "Un Product Backlog actualizado y ordenado que define los elementos probables para el próximo Sprint basándose en el feedback recibido",
            "La evaluación de desempeño y rendimiento individual de cada desarrollador",
            "La asignación detallada de tareas técnicas para las próximas dos semanas"
        ],
        correctAnswer: 1,
        explanation: "El resultado de la Sprint Review es un Product Backlog revisado y adaptado empíricamente según las necesidades del mercado e interesados que asistieron."
    },
    {
        question: "Si el Scrum Master no puede estar presente en el Daily Scrum, ¿qué debe suceder?",
        type: "single_choice",
        options: [
            "El Daily Scrum se cancela hasta que el Scrum Master regrese",
            "Los Desarrolladores continúan realizando el Daily Scrum de forma autónoma",
            "El Product Owner dirige la reunión y asigna las tareas correspondientes",
            "Se reprograma el evento para el final de la tarde"
        ],
        correctAnswer: 1,
        explanation: "El Daily Scrum es de los Desarrolladores; el Scrum Master solo se asegura de que ocurra. Su ausencia física no impide que los desarrolladores se coordinen de forma autogestionada."
    },
    {
        question: "¿Cuál es la función o propósito de la gestión organizacional externa (Management) en Scrum?",
        type: "single_choice",
        options: [
            "Supervisar diariamente el progreso de las tareas de los Desarrolladores",
            "Asignar los miembros a cada equipo y controlar sus horas de entrada",
            "Apoyar al Product Owner con información estratégica y ayudar al Scrum Master a impulsar cambios organizacionales que fomenten el empirismo y la autogestión",
            "Aprobar o rechazar el incremento técnico en lugar del Product Owner"
        ],
        correctAnswer: 2,
        explanation: "El Management externo respalda el éxito de Scrum despejando el entorno organizacional para habilitar la agilidad, la inteligencia colectiva y el empirismo."
    },
    {
        question: "¿Qué significa decir que un evento tiene una caja temporal (timebox)?",
        type: "single_choice",
        options: [
            "Que el evento no puede durar más de un tiempo máximo establecido",
            "Que el evento debe completarse exactamente en el tiempo promedio estimado",
            "Que el evento tiene una duración fija que no puede acortarse aunque se cumpla el objetivo rápido",
            "Que el evento debe ocurrir exactamente a la misma hora del día obligatoriamente"
        ],
        correctAnswer: 0,
        explanation: "Un evento con caja de tiempo (timeboxed) significa que posee una duración máxima estricta; si el objetivo se logra antes, el evento concluye de forma inmediata."
    },
    {
        question: "¿Cuándo pueden los desarrolladores estimar los artículos de rezago de producto? Selecciona las dos mejores respuestas.",
        type: "multiple_choice",
        options: [
            "Scrum diario",
            "Actividad de refinamiento del backlog de productos",
            "Revisión de Sprint",
            "Planificación de sprints"
        ],
        correctAnswer: [1, 3],
        explanation: "La estimación suele ocurrir de manera continua durante la actividad de refinamiento del Product Backlog (Catálogo de Producto). Si es necesario, el Product Backlog también puede seguir refinándose y estimándose durante la reunión de planificación del sprint (Sprint Planning)."
    },
    {
        question: "Al medir el Coste Total de Propiedad (TCO), el Product Owner puede saber si el producto está entregando valor o no.",
        type: "true_false",
        options: [
            "Verdadero",
            "Falso"
        ],
        correctAnswer: 1,
        explanation: "Falso. El coste puede afectar indirectamente la rentabilidad, pero mirar únicamente el TCO no permite establecer si el producto es exitoso o entrega valor real al mercado. Aunque un bajo TCO es deseable, simplemente tener un bajo coste no es suficiente para confirmar la generación de valor."
    },
    {
        question: "El Product Owner puede delegar la responsabilidad de gestionar el Product Backlog a personas ajenas al equipo Scrum. ¿Verdadero o falso?",
        type: "true_false",
        options: [
            "Verdadero",
            "Falso"
        ],
        correctAnswer: 0,
        explanation: "Verdadero. El Product Owner puede delegar tareas y trabajo relacionado con la gestión tanto a personas dentro como fuera del equipo Scrum. Sin embargo, incluso si delega el trabajo, el Product Owner sigue siendo el responsable final del resultado."
    },
    {
        question: "El Product Owner acaba de tener una reunión productiva con los principales grupos de interés y recibió tres nuevas ideas para el producto. ¿Qué debería hacer el Product Owner a continuación? Selecciona la mejor respuesta.",
        type: "single_choice",
        options: [
            "Informa al equipo Scrum",
            "Añade las ideas a la lista de características del producto",
            "Añade las ideas a Product Backlog",
            "Envía las notas de la reunión a todos los interesados",
            "Obtén la aprobación de los demás Stakeholders antes de añadir las nuevas ideas al Catálogo de Productos"
        ],
        correctAnswer: 2,
        explanation: "Todos los requisitos del producto, incluyendo nuevas ideas, características solicitadas, defectos técnicos u otros requisitos futuros, deben almacenarse de forma centralizada en el Product Backlog (Catálogo de Productos)."
    },
    {
        question: "El Product Owner ha solicitado a los desarrolladores un presupuesto respecto a un artículo de la lista de productos pendientes. Carla, una de las desarrolladoras, no está segura del valor de implementarlo y decide compartir sus preocupaciones con el resto del equipo Scrum. ¿Qué valores de Scrum ha demostrado Carla haciendo esto? Selecciona las dos mejores respuestas.",
        type: "multiple_choice",
        options: [
            "Valor",
            "Compromiso",
            "Apertura",
            "Integridad",
            "Honestidad"
        ],
        correctAnswer: [0, 2],
        explanation: "Carla demuestra el valor de \"Apertura\" al ser transparente con sus dudas sobre el valor del elemento, y el valor de \"Valor\" (Coraje/Courage) al atreverse a compartir de manera directa y honesta su preocupación con el resto del Scrum Team."
    },
    {
        question: "Durante el Sprint, los desarrolladores trabajarán de forma oficial con los siguientes artefactos de Scrum: Selecciona todas las respuestas que correspondan.",
        type: "multiple_choice",
        options: [
            "Incremento",
            "Gráfico de quema",
            "Lista de productos pendientes",
            "Acumulación de sprints",
            "Scrum board"
        ],
        correctAnswer: [0, 2, 3],
        explanation: "Los únicos artefactos oficiales de Scrum con los que se trabaja activamente son el Incremento, la Lista de productos pendientes (Product Backlog) —que el PO actualiza y el equipo refina— y la Acumulación de sprints (Sprint Backlog), desde donde los desarrolladores gestionan el ciclo. Herramientas de métricas o tableros visuales no son artefactos oficiales del marco."
    },
    {
        question: "Los desarrolladores utilizan los siguientes artefactos oficiales de Scrum durante el Sprint. Selecciona las dos mejores respuestas.",
        type: "multiple_choice",
        options: [
            "Incremento",
            "Plan de liberación",
            "Scrum board",
            "Plan de sprint",
            "Acumulación de sprints",
            "Plan de proyecto"
        ],
        correctAnswer: [0, 4],
        explanation: "Los desarrolladores interactúan directamente con la Acumulación de sprints (Sprint Backlog) para gestionar y actualizar su plan de trabajo diario, y con el Incremento para asegurar que los elementos cumplan estrictamente con la Definición de Hecho (DoD). Elementos como planes de liberación o tableros complementarios no entran en la categoría de artefactos oficiales de Scrum."
    },
    {
        question: "¿Qué ocurre cuando se cancela un Sprint? Selecciona tres.",
        type: "multiple_choice",
        options: [
            "Se revisan elementos \"Hecho\"",
            "Se incorporan artículos al Sprint",
            "El Scrum Master determina quién es responsable",
            "El Product Owner acepta trabajo liberable",
            "Se reestiman artículos incompletos"
        ],
        correctAnswer: [0, 3, 4],
        explanation: "Se revisan los elementos \"Hecho\", el PO acepta trabajo potencialmente liberable y los incompletos se reestiman y vuelven al Backlog[cite: 10]."
    },
    {
        question: "¿Qué incluye la gestión del Product Backlog? Selecciona los tres elementos más aplicables.",
        type: "multiple_choice",
        options: [
            "Encargar artículos para objetivos",
            "Asegurar visibilidad y transparencia",
            "Presentar elementos a interesados",
            "Trasladar elementos al Sprint Backlog",
            "Optimizar el valor del trabajo"
        ],
        correctAnswer: [0, 1, 4],
        explanation: "Incluye ordenar para lograr objetivos, asegurar visibilidad y optimizar el valor del trabajo[cite: 10]."
    },
    {
        question: "¿Qué categorías de KVA debería considerar el Product Owner para medir y rastrear la creación y entrega de valor?",
        type: "multiple_choice",
        options: [
            "Tiempo de salida al mercado",
            "Reducción de riesgos",
            "Desarrollo de capacidades",
            "Valor actual",
            "Satisfacción empleados",
            "Capacidad para innovar"
        ],
        correctAnswer: [0, 3, 5],
        explanation: "Las categorías son: Valor actual, Tiempo de salida al mercado y Capacidad para innovar[cite: 10]."
    },
    {
        question: "¿Quién es responsable del retraso de productos?",
        type: "single_choice",
        options: [
            "PO y Scrum Master",
            "Scrum Master",
            "Scrum Master y Equipo",
            "PO y equipo",
            "Product Owner",
            "Equipo de desarrollo"
        ],
        correctAnswer: 4,
        explanation: "El Product Owner es responsable del Backlog de Producto (contenido, disponibilidad y orden)[cite: 10]."
    },
    {
        question: "¿En qué reuniones se permite la participación de los Actores Clave?",
        type: "single_choice",
        options: [
            "Retrospectiva",
            "Daily Scrum",
            "Revisión de Sprint",
            "Planificación de sprints"
        ],
        correctAnswer: 2,
        explanation: "Los actores clave solo participan oficialmente en la Revisión de Sprint[cite: 10]."
    },
    {
        question: "Cada artículo de Product Backlog debe ser creado personalmente por el Product Owner. ¿Cierto o Falso?",
        type: "true_false",
        options: [
            "Cierto",
            "Falso"
        ],
        correctAnswer: 1,
        explanation: "Falso; el PO es responsable pero puede delegar la gestión al equipo[cite: 10]."
    },
    {
        question: "¿Quién hace seguimiento del trabajo total restante en el Sprint Backlog?",
        type: "single_choice",
        options: [
            "Equipo de desarrollo",
            "Equipo Scrum",
            "Scrum Master",
            "PO y equipo",
            "Product Owner"
        ],
        correctAnswer: 0,
        explanation: "El equipo de desarrollo registra este trabajo para gestionar su progreso[cite: 10]."
    },
    {
        question: "¿Quién puede participar en el Daily Scrum?",
        type: "single_choice",
        options: [
            "Equipo de desarrollo",
            "Product Owner",
            "Scrum Master",
            "Actores clave"
        ],
        correctAnswer: 0,
        explanation: "Es una reunión interna exclusiva del equipo de desarrollo[cite: 10]."
    },
    {
        question: "Refinamiento del catálogo de productos... Selecciona los tres finales más apropiados.",
        type: "multiple_choice",
        options: [
            "Ocurre 2-4 veces",
            "Es añadir detalles y pedidos",
            "No ocupa más del 10%",
            "Limitado a 4 horas",
            "Responde al cómo",
            "Es un proceso continuo"
        ],
        correctAnswer: [1, 2, 5],
        explanation: "Es un proceso continuo de añadir detalles/estimaciones que ocupa máximo el 10% de capacidad[cite: 10]."
    },
    {
        question: "¿Cuál podría ser la fuente de los requisitos para cambios en el producto?",
        type: "single_choice",
        options: [
            "Product Backlog",
            "Actores clave",
            "CEO"
        ],
        correctAnswer: 0,
        explanation: "El Product Backlog es la única fuente de requisitos para cambios en el producto[cite: 10]."
    },
    {
        question: "El Product Owner quiere aplicar requisitos no funcionales. ¿Cuál es la mejor manera?",
        type: "single_choice",
        options: [
            "Crear nuevo artículo",
            "Convertir en características",
            "Añadirlos al DoD",
            "No se pueden gestionar"
        ],
        correctAnswer: 2,
        explanation: "La única forma es añadirlos al DoD y comprobar cada incremento[cite: 10]."
    },
    {
        question: "¿Quién es responsable de supervisar el progreso hacia objetivos de alto nivel?",
        type: "single_choice",
        options: [
            "Scrum Master",
            "Product Owner",
            "PO y equipo",
            "Equipo Scrum",
            "SM y equipo",
            "Equipo de desarrollo"
        ],
        correctAnswer: 1,
        explanation: "El Product Owner registra el trabajo y compara el progreso hacia el objetivo[cite: 10]."
    },
    {
        question: "Cuando algo frustra al Product Owner, este puede delegar responsabilidades al Scrum Master.",
        type: "true_false",
        options: [
            "Falso",
            "Cierto"
        ],
        correctAnswer: 0,
        explanation: "No es aceptable delegar funciones; el PO debe consultar al SM para implementar Scrum bien[cite: 10]."
    },
    {
        question: "¿Quién es responsable de todas las estimaciones en el Product Backlog?",
        type: "single_choice",
        options: [
            "Scrum Master",
            "PO y SM",
            "Equipo de desarrollo",
            "SM y equipo",
            "Equipo Scrum",
            "PO y equipo",
            "Product Owner"
        ],
        correctAnswer: 2,
        explanation: "El equipo de desarrollo realiza la estimación final[cite: 10]."
    },
    {
        question: "¿Cuáles son actividades típicas para un Product Owner en un Sprint? (elige dos)",
        type: "multiple_choice",
        options: [
            "Refinamiento con desarrolladores",
            "Asistir a Daily Scrum",
            "Actualizar plan diario",
            "Colaborar con interesados",
            "Informes financieros"
        ],
        correctAnswer: [0, 3],
        explanation: "El PO debe interactuar con interesados y colaborar en el refinamiento[cite: 10]."
    },
    {
        question: "El equipo Scrum debe incluir una mejora de procesos de la retrospectiva en el Sprint Backlog.",
        type: "true_false",
        options: [
            "Cierto",
            "Falso"
        ],
        correctAnswer: 1,
        explanation: "Falso; es una práctica opcional desde la actualización de 2020[cite: 10]."
    },
    {
        question: "¿Cómo sirve el Scrum Master para habilitar equipos efectivos? (elige dos)",
        type: "multiple_choice",
        options: [
            "Facilitación",
            "Mantener alto valor",
            "Eliminar obstáculos",
            "Empezar reuniones a tiempo"
        ],
        correctAnswer: [0, 2],
        explanation: "Sirve mediante la facilitación y la eliminación de impedimentos[cite: 10]."
    },
    {
        question: "¿Quién crea la definición de Hecho?",
        type: "single_choice",
        options: [
            "Equipo Scrum",
            "Scrum Master",
            "Equipo colaborativo",
            "Product Owner"
        ],
        correctAnswer: 0,
        explanation: "El equipo Scrum debe crear la Definición de Hecho si no hay un estándar organizativo[cite: 10]."
    },
    {
        question: "Durante un Sprint, si no se puede completar la previsión, ¿quién ajusta los elementos?",
        type: "single_choice",
        options: [
            "PO y desarrolladores",
            "SM, Gestor y desarrolladores",
            "PO e interesados",
            "Desarrolladores"
        ],
        correctAnswer: 0,
        explanation: "El alcance se renegocia entre el PO y los desarrolladores[cite: 10]."
    },
    {
        question: "¿Quién es responsable de hacer el seguimiento del trabajo restante hacia el Sprint Goal?",
        type: "single_choice",
        options: [
            "Los desarrolladores",
            "El Jefe de Proyecto",
            "El Product Owner",
            "El Scrum Master"
        ],
        correctAnswer: 0,
        explanation: "Los desarrolladores son responsables de gestionar su progreso hacia el objetivo del Sprint[cite: 4]."
    },
    {
        question: "¿Cuál es el intervalo de tiempo para el evento de Planificación de Sprints?",
        type: "single_choice",
        options: [
            "Mensualmente",
            "Cuando se termine",
            "8 horas para un Sprint de un mes",
            "4 horas para un Sprint de un mes"
        ],
        correctAnswer: 2,
        explanation: "El timebox es de 8 horas para un Sprint de un mes, proporcional a la duración del mismo[cite: 4]."
    },
    {
        question: "¿Cómo minimizar el desperdicio en el Product Backlog? (Selecciona dos)",
        type: "multiple_choice",
        options: [
            "Evitar distraer al equipo",
            "Entregar la propiedad a otro",
            "Eliminar elementos no abordados",
            "Describir solo cuando sea probable la implementación"
        ],
        correctAnswer: [2, 3],
        explanation: "Se recomienda eliminar lo antiguo y detallar solo lo próximo a implementar[cite: 4]."
    },
    {
        question: "¿Por qué necesitan los desarrolladores un objetivo de sprint?",
        type: "single_choice",
        options: [
            "Da propósito al Sprint 0",
            "No tienen valor",
            "Todo se conoce del Product Backlog",
            "Centrarse en un objetivo común y específico"
        ],
        correctAnswer: 3,
        explanation: "Proporciona enfoque y alineación para colaborar eficazmente como equipo[cite: 4]."
    },
    {
        question: "Verdadero o falso: Un Scrum Master cumple el mismo papel que un Project Manager tradicional.",
        type: "true_false",
        options: [
            "Cierto",
            "Falso"
        ],
        correctAnswer: 1,
        explanation: "El Scrum Master es un líder servidor, no gestiona el proyecto ni el alcance como un PM[cite: 4]."
    },
    {
        question: "¿Debe el Product Owner escribir todos los elementos del Backlog antes de entregarlos?",
        type: "true_false",
        options: [
            "Cierto",
            "Falso"
        ],
        correctAnswer: 1,
        explanation: "Es una lista emergente; el PO puede involucrar a otros en su creación[cite: 4]."
    },
    {
        question: "Durante la retrospectiva, ¿qué hacer con las mejoras de proceso?",
        type: "single_choice",
        options: [
            "Añadirlas al Sprint Backlog",
            "Rechazarlas si todo va bien",
            "Elegir una para el Product Backlog",
            "Que el SM las elija"
        ],
        correctAnswer: 0,
        explanation: "El equipo Scrum debe implementar mejoras identificadas en el próximo Sprint[cite: 4]."
    },
    {
        question: "¿De qué es responsable el Product Owner durante un Sprint? (Selecciona dos)",
        type: "multiple_choice",
        options: [
            "Asistir a cada Daily",
            "Informes financieros",
            "Colaborar con interesados",
            "Refinamiento del Backlog",
            "Nada"
        ],
        correctAnswer: [2, 3],
        explanation: "El PO colabora con interesados y trabaja en el refinamiento del Product Backlog[cite: 4]."
    },
    {
        question: "Verdadero o falso: El PO invita a interesados a la Retrospectiva.",
        type: "true_false",
        options: [
            "Cierto",
            "Falso"
        ],
        correctAnswer: 1,
        explanation: "La Retrospectiva es un evento interno exclusivo para el Equipo Scrum[cite: 4]."
    },
    {
        question: "¿Qué hacer si un stakeholder está descontento con la calidad? (Selecciona dos)",
        type: "multiple_choice",
        options: [
            "Entrenar al PO",
            "Esperar a la retrospectiva",
            "Pedir a los testers",
            "Incluir especificaciones en el Backlog",
            "Llevar preocupación a testers"
        ],
        correctAnswer: [0, 3],
        explanation: "El SM entrena al PO y este incluye especificaciones en el Backlog[cite: 4]."
    },
    {
        question: "¿Es el equipo Scrum responsable de crear un incremento valioso en cada Sprint?",
        type: "true_false",
        options: [
            "Cierto",
            "Falso"
        ],
        correctAnswer: 0,
        explanation: "Todo el equipo Scrum es responsable de entregar un incremento valioso y útil[cite: 4]."
    },
    {
        question: "¿Cuáles son ciertos sobre el Product Owner? (Selecciona dos)",
        type: "multiple_choice",
        options: [
            "Es una sola persona",
            "Puede haber varios PO",
            "Puede ser un comité",
            "Es responsable de pedir el Product Backlog"
        ],
        correctAnswer: [0, 3],
        explanation: "El PO es una sola persona y responsable de ordenar el Backlog[cite: 4]."
    },
    {
        question: "¿Quién es responsable de crear un incremento valioso en cada Sprint?",
        type: "single_choice",
        options: [
            "Los desarrolladores",
            "El equipo Scrum",
            "El Scrum Master",
            "El Product Owner",
            "El CEO"
        ],
        correctAnswer: 1,
        explanation: "Todo el Equipo Scrum es responsable de crear un incremento valioso[cite: 4]."
    },
    {
        question: "¿Qué debe conocer un PO para maximizar el valor?",
        type: "single_choice",
        options: [
            "Investigación competitiva",
            "Comentarios de clientes",
            "Visión del producto",
            "Previsión y viabilidad",
            "Todo lo anterior"
        ],
        correctAnswer: 4,
        explanation: "El PO debe conocer el panorama completo para maximizar el valor[cite: 4]."
    },
    {
        question: "¿Todo equipo Scrum debe tener un Product Owner y un Scrum Master?",
        type: "true_false",
        options: [
            "Cierto",
            "Falso"
        ],
        correctAnswer: 0,
        explanation: "Ambos roles son esenciales y deben estar involucrados durante todo el Sprint[cite: 4]."
    },
    {
        question: "¿Quién es el dueño del Sprint Backlog?",
        type: "single_choice",
        options: [
            "El Scrum Master",
            "El equipo Scrum",
            "El Product Owner",
            "Los desarrolladores"
        ],
        correctAnswer: 3,
        explanation: "Los desarrolladores son los dueños y quienes actualizan el Sprint Backlog[cite: 4]."
    },
    {
        question: "¿Qué temas se tratan en la Revisión Sprint?",
        type: "single_choice",
        options: [
            "Proceso Scrum",
            "Prácticas de ingeniería",
            "El Incremento del producto",
            "Todo lo anterior"
        ],
        correctAnswer: 2,
        explanation: "El tema central es la inspección del Incremento del producto[cite: 4]."
    },
    {
        question: "¿Quién decide cuándo actualizar el Sprint Backlog?",
        type: "single_choice",
        options: [
            "El Jefe de Proyecto",
            "El equipo Scrum",
            "Los desarrolladores",
            "El Product Owner"
        ],
        correctAnswer: 2,
        explanation: "Los desarrolladores son los encargados de actualizar su plan durante el Sprint[cite: 4]."
    },
    {
        question: "¿De qué suele ser responsable un PO durante un Sprint? (Selecciona dos)",
        type: "multiple_choice",
        options: [
            "Informes financieros",
            "Colaborar con interesados",
            "Actualizar plan",
            "Refinamiento del Backlog",
            "Nada"
        ],
        correctAnswer: [1, 3],
        explanation: "El PO colabora con interesados y trabaja en el refinamiento del Backlog[cite: 4]."
    },
    {
        question: "¿Los equipos multifuncionales están optimizados para trabajar en un solo componente?",
        type: "true_false",
        options: [
            "Cierto",
            "Falso"
        ],
        correctAnswer: 1,
        explanation: "Deben tener todas las habilidades para entregar valor completo[cite: 4]."
    },
    {
        question: "¿Se asegura el PO de que los desarrolladores seleccionen suficiente trabajo para satisfacer a los interesados?",
        type: "true_false",
        options: [
            "Cierto",
            "Falso"
        ],
        correctAnswer: 1,
        explanation: "Los desarrolladores determinan cuánto trabajo pueden realizar en el Sprint[cite: 4]."
    },
    {
        question: "¿Quién crea la definición de Hecho?",
        type: "single_choice",
        options: [
            "El Scrum Master",
            "El equipo Scrum",
            "El Product Owner",
            "Los desarrolladores"
        ],
        correctAnswer: 1,
        explanation: "La crea el equipo Scrum para asegurar una comprensión compartida[cite: 4]."
    },
    {
        question: "¿Quién puede cancelar un Sprint?",
        type: "single_choice",
        options: [
            "El equipo Scrum",
            "El Scrum Master",
            "El Product Owner",
            "Los interesados"
        ],
        correctAnswer: 2,
        explanation: "Solo el Product Owner tiene la autoridad para cancelar el Sprint[cite: 4]."
    },
    {
        question: "¿Qué ocurre si el equipo no completa el trabajo al final del Sprint?",
        type: "single_choice",
        options: [
            "La duración no cambia",
            "Se extiende el Sprint",
            "Es temporal",
            "Se aprenden lecciones"
        ],
        correctAnswer: 0,
        explanation: "No se extiende; el trabajo pendiente vuelve al Product Backlog[cite: 4]."
    },
    {
        question: "¿Qué hacer si la carga de trabajo supera la capacidad? (Selecciona dos)",
        type: "multiple_choice",
        options: [
            "Eliminar elementos",
            "Informa y supervisa",
            "Reclutar desarrolladores",
            "Cancelar Sprint",
            "Trabajar horas extra"
        ],
        correctAnswer: [0, 1],
        explanation: "Los desarrolladores colaboran con el PO para ajustar el alcance[cite: 4]."
    },
    {
        question: "¿Un Product Owner es lo mismo que un Project Manager?",
        type: "true_false",
        options: [
            "Cierto",
            "Falso"
        ],
        correctAnswer: 1,
        explanation: "Son roles distintos; el PO se enfoca en el valor, no en la gestión tradicional[cite: 4]."
    },
    {
        question: "¿Cómo debería ser la duración de un Sprint?",
        type: "single_choice",
        options: [
            "Corto por riesgo",
            "Sincronizado con eventos",
            "No más de un mes",
            "Todo lo anterior"
        ],
        correctAnswer: 3,
        explanation: "Todas las opciones anteriores son correctas según Scrum[cite: 4]."
    },
    {
        question: "¿El PO debe crear criterios de aceptación claros antes de seleccionar un elemento?",
        type: "true_false",
        options: [
            "Cierto",
            "Falso"
        ],
        correctAnswer: 1,
        explanation: "No son obligatorios; pueden refinarse durante el proceso[cite: 4]."
    },
    {
        question: "¿Cuándo puede cancelarse un Sprint?",
        type: "single_choice",
        options: [
            "Plan inviable",
            "No terminado",
            "Oportunidad de ventas",
            "Objetivo obsoleto"
        ],
        correctAnswer: 3,
        explanation: "Un Sprint solo se cancela si el objetivo del Sprint queda obsoleto[cite: 4]."
    },
    {
        question: "¿Qué ventajas tiene compartir un Objetivo de Producto claro? (Selecciona tres)",
        type: "multiple_choice",
        options: [
            "Estimar fecha",
            "No es obligatorio",
            "No hay ventaja",
            "Dirección general",
            "Enfoque",
            "Facilita inspección"
        ],
        correctAnswer: [3, 4, 5],
        explanation: "Ayuda a la dirección, el enfoque y la inspección del progreso[cite: 4]."
    },
    {
        question: "¿Cuándo es responsable un desarrollador del valor del elemento seleccionado?",
        type: "single_choice",
        options: [
            "Cuando hay espacio",
            "En la planificación",
            "Durante el Daily",
            "Nieve",
            "Todo el equipo"
        ],
        correctAnswer: 4,
        explanation: "Todo el equipo Scrum es responsable colectivamente[cite: 4]."
    },
    {
        question: "¿Cuál es el propósito de una Revisión Sprint?",
        type: "single_choice",
        options: [
            "Espíritu de equipo",
            "Juzgar proyecto",
            "Inspeccionar incremento",
            "Revisar procesos"
        ],
        correctAnswer: 2,
        explanation: "Inspeccionar el incremento con interesados y recopilar comentarios[cite: 4]."
    },
    {
        question: "¿Cuándo y quién refina el Product Backlog? (Selecciona dos)",
        type: "multiple_choice",
        options: [
            "Equipo durante el Sprint",
            "Analistas de negocio",
            "PO en Sprint 0",
            "PO entre Sprints",
            "Equipo continuamente"
        ],
        correctAnswer: [0, 4],
        explanation: "Es un proceso continuo que involucra a todo el equipo Scrum[cite: 4]."
    },
    {
        question: "¿Qué hacer si hay demasiado trabajo al inicio del Sprint?",
        type: "single_choice",
        options: [
            "Dar trabajo a otro equipo",
            "Trabajar con PO para eliminar elementos",
            "Informa en la revisión",
            "Reducir definición de hecho"
        ],
        correctAnswer: 1,
        explanation: "Colaborar con el PO para negociar el alcance del Sprint Backlog[cite: 4]."
    },
    {
        question: "¿Cuál es el tiempo del Daily Scrum?",
        type: "single_choice",
        options: [
            "4 horas",
            "Misma hora diaria",
            "2 minutos por persona",
            "15 minutos"
        ],
        correctAnswer: 3,
        explanation: "Es un evento con un tiempo límite de 15 minutos[cite: 4]."
    },
    {
        question: "¿Deben los PO especificar criterios de aceptación antes de la Planificación?",
        type: "true_false",
        options: [
            "Cierto",
            "Falso"
        ],
        correctAnswer: 1,
        explanation: "No tienen que especificarlos totalmente antes de la selección[cite: 4]."
    },
    {
        question: "¿Qué medidas aseguran que el Product Backlog sea transparente? (Selecciona dos)",
        type: "multiple_choice",
        options: [
            "Está ordenado",
            "Disponible para interesados",
            "Prioridad MoSCoW",
            "Trabajo de 2 sprints",
            "Herramienta web"
        ],
        correctAnswer: [0, 1],
        explanation: "El orden y la visibilidad para los interesados aseguran transparencia[cite: 4]."
    },
    {
        question: "¿Cómo dividir 100 personas en equipos Scrum?",
        type: "single_choice",
        options: [
            "Matriz de habilidades",
            "Consultar al jefe",
            "Entendiendo producto y visión",
            "No importa"
        ],
        correctAnswer: 2,
        explanation: "Se debe basar en la visión del producto y las reglas de Scrum[cite: 4]."
    },
    {
        question: "¿Cuándo empieza el segundo Sprint?",
        type: "single_choice",
        options: [
            "Tras pruebas",
            "Tras arquitectura",
            "Inmediatamente tras el primero",
            "Tras seleccionar elementos"
        ],
        correctAnswer: 2,
        explanation: "Un nuevo Sprint comienza inmediatamente después del anterior[cite: 4]."
    },
    {
        question: "¿Qué temas trata la Planificación de Sprints?",
        type: "single_choice",
        options: [
            "Quiénes son",
            "Condiciones",
            "Qué y quién",
            "Qué, cómo y por qué",
            "Errores previos"
        ],
        correctAnswer: 3,
        explanation: "Se define qué, cómo y por qué se hará el trabajo[cite: 4]."
    },
    {
        question: "¿Tiene Scrum un rol de Gestor de Proyecto?",
        type: "true_false",
        options: [
            "Cierto",
            "Falso"
        ],
        correctAnswer: 1,
        explanation: "Scrum no tiene el rol de Project Manager[cite: 4]."
    },
    {
        question: "¿Qué métricas indican valor? (Selecciona dos)",
        type: "multiple_choice",
        options: [
            "Satisfacción cliente",
            "Productividad",
            "Velocidad",
            "Tiempo salida mercado",
            "Alcance"
        ],
        correctAnswer: [0, 3],
        explanation: "La satisfacción del cliente y el tiempo de salida al mercado son clave[cite: 4]."
    },
    {
        question: "¿Cuándo se crea el Sprint Backlog?",
        type: "single_choice",
        options: [
            "Antes planificación",
            "Refinamiento",
            "Retrospectiva",
            "Planificación"
        ],
        correctAnswer: 3,
        explanation: "Se crea durante la Planificación del Sprint[cite: 4]."
    },
    {
        question: "¿Qué debatir en la Retrospectiva? (Selecciona tres)",
        type: "multiple_choice",
        options: [
            "Relaciones",
            "Valor backlog",
            "Cómo trabaja equipo",
            "Definición Hecho",
            "Organizar backlog"
        ],
        correctAnswer: [0, 2, 3],
        explanation: "Se reflexiona sobre relaciones, procesos y la definición de Hecho[cite: 4]."
    },
    {
        question: "¿Qué hacer en el primer Sprint? (Selecciona dos)",
        type: "multiple_choice",
        options: [
            "Plan proyecto",
            "Arquitectura",
            "Documentar",
            "Construir funcionalidad",
            "Crear incremento"
        ],
        correctAnswer: [3, 4],
        explanation: "Se debe construir funcionalidad valiosa y crear un incremento[cite: 4]."
    },
    {
        question: "¿Cómo hacer visibles requisitos no funcionales? (Selecciona dos)",
        type: "multiple_choice",
        options: [
            "Añadir al Backlog",
            "Pruebas",
            "Definición de Hecho",
            "Lista aparte"
        ],
        correctAnswer: [0, 2],
        explanation: "Añadiéndolos al Backlog o a la definición de Hecho[cite: 4]."
    },
    {
        question: "¿Qué preguntar al formar equipos de 45 personas?",
        type: "single_choice",
        options: [
            "Senior/Junior",
            "Expertos",
            "Líderes",
            "Experiencia adecuada"
        ],
        correctAnswer: 3,
        explanation: "La clave es asegurar la experiencia adecuada en cada equipo[cite: 4]."
    },
    {
        question: "¿Cuándo pueden los desarrolladores cancelar un sprint?",
        type: "single_choice",
        options: [
            "Expectativas",
            "Inalcanzable",
            "No pueden",
            "Solo PO",
            "Ausencia PO",
            "Dependencia"
        ],
        correctAnswer: 2,
        explanation: "Los desarrolladores no tienen autoridad para cancelar un sprint[cite: 4]."
    },
    {
        question: "¿Cuál es el artefacto que describe cómo es probable que crezca el producto?",
        type: "single_choice",
        options: [
            "Sprint Backlog",
            "Product Backlog",
            "Roadmap del Producto",
            "Project Charter"
        ],
        correctAnswer: 1,
        explanation: "El Product Backlog es el artefacto que evoluciona y describe el crecimiento del producto."
    },
    {
        question: "¿Qué es importante en todos los proyectos de Scrum?",
        type: "multiple_choice",
        options: [
            "1, 2, 3 y 4",
            "1, 3 y 4",
            "1, 4",
            "1, 2 y 3"
        ],
        correctAnswer: 1,
        explanation: "La auto-organización, comunicación y mejora continua son pilares clave."
    },
    {
        question: "¿Cuál de las siguientes NO es una responsabilidad del Product Owner?",
        type: "single_choice",
        options: [
            "Garantizar el ROI",
            "Ejecución de la Daily Scrum",
            "Reunir los PBI",
            "Inspección en el Sprint Review"
        ],
        correctAnswer: 1,
        explanation: "La ejecución de la Daily Scrum es responsabilidad de los Developers."
    },
    {
        question: "¿Qué son responsabilidades del Product Owner? (Selecciona dos)",
        type: "multiple_choice",
        options: [
            "1 y 2",
            "2 y 3",
            "1 y 3",
            "Todas"
        ],
        correctAnswer: 3,
        explanation: "Expresar elementos, ordenarlos y entender la agilidad son sus funciones."
    },
    {
        question: "¿Qué es cierto sobre el Project Charter en Scrum?",
        type: "single_choice",
        options: [
            "Es contractual",
            "Establece línea base",
            "No está en la guía de Scrum",
            "Da autoridad al PM"
        ],
        correctAnswer: 2,
        explanation: "La Guía de Scrum no define el Project Charter."
    },
    {
        question: "¿La liberación (release) de un producto terminado es responsabilidad del?",
        type: "single_choice",
        options: [
            "Scrum Master",
            "Product Owner",
            "Scrum Team",
            "Development Team"
        ],
        correctAnswer: 1,
        explanation: "El Product Owner decide sobre la liberación del incremento."
    },
    {
        question: "¿Puede el Scrum Master asumir el rol de Product Owner?",
        type: "true_false",
        options: [
            "Verdadero",
            "Falso"
        ],
        correctAnswer: 1,
        explanation: "No se recomienda que la misma persona asuma ambos roles."
    },
    {
        question: "¿Quiénes definen el Sprint Goal?",
        type: "single_choice",
        options: [
            "Dev Team y SM",
            "Scrum Team",
            "SM y PO",
            "PO y Dev Team"
        ],
        correctAnswer: 3,
        explanation: "El PO y los Developers colaboran para definir el objetivo."
    },
    {
        question: "¿Cómo deben ordenarse los elementos en el Product Backlog?",
        type: "single_choice",
        options: [
            "Alfabéticamente",
            "Necesidad/Cronología",
            "Prioridad/Valor/Claridad",
            "Cronológicamente"
        ],
        correctAnswer: 2,
        explanation: "La prioridad basada en valor de negocio y claridad es fundamental."
    },
    {
        question: "¿Qué son la DoD y los criterios de aceptación?",
        type: "single_choice",
        options: [
            "Definidos por Dev",
            "Deben ser iguales",
            "Definidos por SM",
            "Conceptos diferentes"
        ],
        correctAnswer: 3,
        explanation: "Son conceptos distintos con propósitos diferentes."
    },
    {
        question: "¿Debe el Product Owner participar en el Daily Meeting?",
        type: "true_false",
        options: [
            "Verdadero",
            "Falso"
        ],
        correctAnswer: 1,
        explanation: "No es obligatorio que participe, es un evento de los Developers."
    },
    {
        question: "¿Quién informa a los stakeholders sobre el progreso?",
        type: "single_choice",
        options: [
            "Líder Dev",
            "Project Manager",
            "Product Owner",
            "Scrum Master"
        ],
        correctAnswer: 2,
        explanation: "Es una responsabilidad central del Product Owner."
    },
    {
        question: "Duración máxima del Daily Standup (Sprint de un mes).",
        type: "single_choice",
        options: [
            "10 min",
            "20 min",
            "Lo que decida SM",
            "15 minutos"
        ],
        correctAnswer: 3,
        explanation: "La guía establece un máximo de 15 minutos."
    },
    {
        question: "¿Un Sprint corto tiene más riesgo que uno largo?",
        type: "true_false",
        options: [
            "Verdadero",
            "Falso"
        ],
        correctAnswer: 1,
        explanation: "Los Sprints cortos reducen el riesgo al permitir mayor feedback."
    },
    {
        question: "Duración del Sprint Planning.",
        type: "single_choice",
        options: [
            "8 horas siempre",
            "8h para 1 mes, proporcional si es menor",
            "Liderada por PO",
            "Participa cliente"
        ],
        correctAnswer: 1,
        explanation: "Es de 8 horas para un mes, y más corto si el Sprint lo es."
    },
    {
        question: "¿Secuencia más común en un ciclo de vida Scrum?",
        type: "single_choice",
        options: [
            "Daily, Plan, Retro, Review",
            "Plan, Daily, Retro, Review",
            "Plan, Daily, Review, Retro",
            "Ninguna"
        ],
        correctAnswer: 2,
        explanation: "El flujo lógico es Planificación, Daily, Revisión y Retrospectiva."
    },
    {
        question: "¿El Product Owner preside el Sprint Planning?",
        type: "single_choice",
        options: [
            "Participa Daily",
            "Participa Cierre",
            "Preside Planning",
            "Ninguna"
        ],
        correctAnswer: 2,
        explanation: "El PO colabora en la planificación, pero Scrum no tiene un rol de \"presidente\"."
    },
    {
        question: "¿Scrum reconoce sub-equipos en el Development Team?",
        type: "single_choice",
        options: [
            "PO",
            "SM",
            "Recursos Humanos",
            "No reconoce"
        ],
        correctAnswer: 3,
        explanation: "Scrum no fomenta sub-equipos especializados dentro del equipo."
    },
    {
        question: "¿Duración del Backlog Refinement?",
        type: "single_choice",
        options: [
            "4 horas max",
            "5-10% proyecto",
            "8-10% Sprint",
            "Ninguna"
        ],
        correctAnswer: 2,
        explanation: "Se recomienda dedicar aproximadamente 10% de la capacidad."
    },
    {
        question: "¿Se recomienda tener dos Product Owners?",
        type: "single_choice",
        options: [
            "Dos PO",
            "Solo uno",
            "PO y 2 SM",
            "SM hace trabajo de PO"
        ],
        correctAnswer: 1,
        explanation: "Se recomienda siempre un único Product Owner."
    },
    {
        question: "¿Qué técnica se usa para estimar en Scrum?",
        type: "single_choice",
        options: [
            "Asignadas SM",
            "Grupales",
            "Todas",
            "Ninguna"
        ],
        correctAnswer: 3,
        explanation: "Scrum no prescribe una técnica específica, pero suelen ser grupales."
    },
    {
        question: "¿Si dos equipos trabajan en un producto, tienen backlogs distintos?",
        type: "true_false",
        options: [
            "Si",
            "No"
        ],
        correctAnswer: 1,
        explanation: "Se utiliza un único Product Backlog para el producto."
    },
    {
        question: "¿La suma de los Sprint Backlogs es el Product Backlog?",
        type: "true_false",
        options: [
            "Si",
            "No"
        ],
        correctAnswer: 0,
        explanation: "El Sprint Backlog es un plan táctico extraído del Product Backlog."
    },
    {
        question: "¿Qué hace el Development Team?",
        type: "single_choice",
        options: [
            "Participa Daily",
            "Levantamiento req",
            "Kick-off",
            "Ninguna"
        ],
        correctAnswer: 0,
        explanation: "La participación en la Daily es una de sus actividades clave."
    },
    {
        question: "¿El Product Increment debe entregarse siempre al cliente?",
        type: "true_false",
        options: [
            "Verdadero",
            "Falso"
        ],
        correctAnswer: 0,
        explanation: "El incremento debe estar listo para entregarse al final del Sprint."
    },
    {
        question: "¿Características de una User Story?",
        type: "single_choice",
        options: [
            "Define PO",
            "Se descompone en tareas",
            "Criterios aceptación",
            "Todas"
        ],
        correctAnswer: 0,
        explanation: "Las historias de usuario son técnicas comunes, a menudo definidas por el PO."
    },
    {
        question: "¿El Product Owner estima las User Stories?",
        type: "true_false",
        options: [
            "Verdadero",
            "Falso"
        ],
        correctAnswer: 1,
        explanation: "La estimación es responsabilidad de los Developers."
    },
    {
        question: "¿Solo el PO puede cancelar el Sprint con influencia de interesados?",
        type: "true_false",
        options: [
            "Si",
            "No"
        ],
        correctAnswer: 1,
        explanation: "El PO puede cancelarlo, pero no es una cuestión de \"influencia\" de terceros."
    },
    {
        question: "¿En qué se divide el Product Backlog?",
        type: "single_choice",
        options: [
            "Nunca completo",
            "Cambia constante",
            "Evoluciona",
            "Todas"
        ],
        correctAnswer: 3,
        explanation: "El Product Backlog es dinámico y nunca está \"completo\"."
    },
    {
        question: "¿Qué se crea en cada mitad del Sprint Planning?",
        type: "single_choice",
        options: [
            "Prod/Sprint Backlog",
            "Cartera/Tareas",
            "Sprint Goal/Backlog",
            "Burndown/Pila"
        ],
        correctAnswer: 2,
        explanation: "Se define el objetivo (por qué) y el plan (qué/cómo)."
    },
    {
        question: "¿Diferencia entre Product Backlog y Sprint Backlog?",
        type: "single_choice",
        options: [
            "Igual",
            "PB es subconjunto SB",
            "SB es subconjunto PB",
            "SB es respo PO"
        ],
        correctAnswer: 2,
        explanation: "El Sprint Backlog contiene lo que se hará en el Sprint actual."
    },
    {
        question: "¿Qué ocurre cuando el Sprint se cancela?",
        type: "single_choice",
        options: [
            "Se disuelve",
            "Vuelve a PB",
            "Se descarta incompleto",
            "Evaluación y retorno a PB"
        ],
        correctAnswer: 3,
        explanation: "Los elementos terminados se revisan y los otros vuelven al Product Backlog."
    },
    {
        question: "¿Quién determina cuándo actualizar el Sprint Backlog?",
        type: "single_choice",
        options: [
            "PM",
            "Scrum Team",
            "Dev Team",
            "PO"
        ],
        correctAnswer: 2,
        explanation: "Los Developers gestionan su Sprint Backlog."
    },
    {
        question: "¿El Sprint Goal se selecciona antes del Sprint Backlog?",
        type: "true_false",
        options: [
            "Verdadero",
            "Falso"
        ],
        correctAnswer: 0,
        explanation: "El objetivo da contexto para crear el plan."
    },
    {
        question: "¿Cuándo se puede cancelar un Sprint?",
        type: "single_choice",
        options: [
            "Dev no cumple",
            "Cambio mercado/tecnología",
            "Nunca",
            "Rumbo empresa"
        ],
        correctAnswer: 2,
        explanation: "Si el objetivo del Sprint pierde sentido, el PO puede cancelarlo."
    },
    {
        question: "¿Cuáles son los eventos en Scrum?",
        type: "single_choice",
        options: [
            "Daily",
            "Retro",
            "Review y Planning",
            "Todas"
        ],
        correctAnswer: 3,
        explanation: "Todos los mencionados son eventos oficiales de Scrum."
    },
    {
        question: "¿El Product Owner es el único responsable de gestionar el PB?",
        type: "true_false",
        options: [
            "Verdadero",
            "Falso"
        ],
        correctAnswer: 0,
        explanation: "El PO es el único dueño, aunque otros puedan colaborar."
    },
    {
        question: "¿Consumo del refinamiento?",
        type: "single_choice",
        options: [
            "10%",
            "20%",
            "30%",
            "40%"
        ],
        correctAnswer: 0,
        explanation: "El refinamiento suele consumir alrededor del 10%."
    },
    {
        question: "¿Propósito del Sprint?",
        type: "single_choice",
        options: [
            "Entregar incremento",
            "Falso"
        ],
        correctAnswer: 0,
        explanation: "Entregar incrementos funcionales es el núcleo de Scrum."
    },
    {
        question: "¿Cuáles son los artefactos de Scrum?",
        type: "single_choice",
        options: [
            "PB, SB, Increment",
            "SB, Incr, Sprint",
            "Increment, PB, User Story"
        ],
        correctAnswer: 0,
        explanation: "Los artefactos oficiales son Product Backlog, Sprint Backlog e Incremento."
    },
    {
        question: "El Product Owner (Dueño del Producto) es una única persona, no un comité. El Product Owner podría representar los deseos de un comité en la Product Backlog, pero aquellos que quieran cambiar la prioridad de un elemento deben hacerlo a través del Product Owner.",
        type: "true_false",
        options: [
            "Verdadero",
            "Falso"
        ],
        correctAnswer: 0,
        explanation: "El Product Owner es un rol individual responsable único del Product Backlog, garantizando una toma de decisiones ágil y centralizada."
    },
    {
        question: "La velocidad es el factor que sirve para ver cuánto trabajo se entrega en cada Sprint. Si por ejemplo la velocidad de un Developer es de 15 PH, se puede interpretar como que este entrega 15 Historias de Usuario promedio en cada iteración.",
        type: "true_false",
        options: [
            "Verdadero",
            "Falso"
        ],
        correctAnswer: 1,
        explanation: "La velocidad es una métrica colectiva que pertenece a todo el conjunto de los Developers, nunca se mide de forma individual por desarrollador ni equivale estrictamente a un número fijo de historias."
    },
    {
        question: "Para que el Product Owner (Dueño del Producto) pueda hacer bien su trabajo, toda la organización debe respetar sus decisiones. Las decisiones del Product Owner se reflejan en el contenido y en la priorización de la Product Backlog.",
        type: "true_false",
        options: [
            "Verdadero",
            "Falso"
        ],
        correctAnswer: 0,
        explanation: "El éxito del Product Owner depende de que toda la organización, incluidos directivos y clientes, respeten sus decisiones sobre el contenido y orden del Backlog."
    },
    {
        question: "El Product Owner es la única persona responsable de gestionar la Product Backlog. La gestión de la Product Backlog incluye (marca 2):",
        type: "multiple_choice",
        options: [
            "Asegurar que los objetivos, el alcance y el dominio del producto sean entendidos por todos en el Scrum Team",
            "Expresar claramente los elementos de la Product Backlog y el Objetivo del Producto",
            "Ordenar los elementos en la Product Backlog para alcanzar los objetivos de la mejor manera posible",
            "Encontrar técnicas para gestionar la Product Backlog de manera efectiva"
        ],
        correctAnswer: [1, 2],
        explanation: "Crear y comunicar con claridad los elementos del Backlog, así como ordenarlos para maximizar el valor, son funciones explícitas y fundamentales del Product Owner."
    },
    {
        question: "Seleccione qué elementos se deben tener en cuenta para una Sprint Planning. Marque 3.",
        type: "multiple_choice",
        options: [
            "Presentar los resultados del trabajo a los interesados clave",
            "El Scrum Team crea este plan resultante mediante trabajo colaborativo",
            "El Product Owner se asegura de que los asistentes estén preparados para discutir los elementos más importantes del Product Backlog y cómo se relacionan con el Objetivo del Producto",
            "Identificar los cambios más útiles para mejorar la efectividad",
            "Inicia el Sprint al establecer el trabajo que se realizará para el Sprint"
        ],
        correctAnswer: [1, 2, 4],
        explanation: "La Sprint Planning da inicio al Sprint, requiere la participación colaborativa de todo el Scrum Team y se centra en los elementos de mayor prioridad previamente preparados por el PO."
    },
    {
        question: "La Alta Gerencia desea auditar periódicamente si el Scrum Team está siguiendo las prácticas y principios de Scrum. ¿Quién está en la mejor posición para realizar tal auditoría?",
        type: "single_choice",
        options: [
            "El Scrum Master",
            "El Product Owner",
            "Los Responsables de Pruebas",
            "Los Developers"
        ],
        correctAnswer: 0,
        explanation: "El Scrum Master es el responsable de adoptar y defender Scrum, guiando y ayudando a la organización a comprender su teoría, reglas y valores."
    },
    {
        question: "El Product Owner es responsable de maximizar el valor del producto resultante del trabajo del Scrum Team. La forma en que esto se hace puede variar ampliamente entre organizaciones, Scrum Teams e individuos.",
        type: "true_false",
        options: [
            "Verdadero",
            "Falso"
        ],
        correctAnswer: 0,
        explanation: "Maximizar el valor es la misión principal del Product Owner, y las dinámicas operativas para lograrlo se adaptan según el contexto de cada equipo."
    },
    {
        question: "¿Cuáles de los siguientes eventos son definidos por el Framework Scrum? (Marca 3)",
        type: "multiple_choice",
        options: [
            "Daily Sprint",
            "Sprint Retrospective",
            "Sprint Planning",
            "Sprint Review"
        ],
        correctAnswer: [1, 2, 3],
        explanation: "Los eventos oficiales contemplados en el marco Scrum son la Sprint Planning, la Daily Scrum, la Sprint Review y la Sprint Retrospective."
    },
    {
        question: "El Daily Scrum es una reunión con tiempo prefijado de 5 a 15 minutos, dirigida por el Scrum Master y en ella cada miembro informa sobre lo realizado, lo que hará y los impedimentos.",
        type: "true_false",
        options: [
            "Verdadero",
            "Falso"
        ],
        correctAnswer: 1,
        explanation: "El Daily Scrum es un evento de y para los Developers; el Scrum Master no lo dirige. Además, el formato estricto de las tres preguntas ya no es obligatorio según la guía actual."
    },
    {
        question: "Un Scrum Master dirige la Sprint Planning para que no dure más de 8 horas para un Sprint de 1 mes. Debe evitar que los Developers comiencen a profundizar en trabajos de análisis o arquitectura propios del Sprint.",
        type: "true_false",
        options: [
            "Verdadero",
            "Falso"
        ],
        correctAnswer: 1,
        explanation: "El Scrum Master actúa como facilitador, no dirige la sesión. Además, en el Tema 3 de la planificación, los Developers analizan el diseño técnico y la arquitectura necesaria para descomponer el trabajo del Sprint."
    },
    {
        question: "El refinamiento del Product Backlog es el acto de dividir y definir elementos en otros más pequeños y precisos. Seleccione la respuesta correcta:",
        type: "single_choice",
        options: [
            "Consume entre el 15% y el 20% del proyecto total",
            "Menos del 20% del proyecto total",
            "Consume aproximadamente el 20% del proyecto total",
            "Es una actividad continua para agregar detalles como descripción, orden y tamaño"
        ],
        correctAnswer: 3,
        explanation: "El refinamiento es un proceso continuo e interactivo dentro del Sprint en el que se detallan, dimensionan y estiman los elementos del Backlog."
    },
    {
        question: "¿Cuáles de los siguientes roles no están definidos por el Framework Scrum? (Marque 3)",
        type: "multiple_choice",
        options: [
            "Product Owner",
            "Scrum Manager",
            "QA Analyst Scrum",
            "Project Manager",
            "Scrum Master"
        ],
        correctAnswer: [1, 2, 3],
        explanation: "Scrum no reconoce jerarquías ni puestos tradicionales como Project Manager o analistas especializados; solo define tres responsabilidades fundamentales: PO, SM y Developers."
    },
    {
        question: "¿Cuáles son importantes en la implementación de Scrum? (Marca 4)",
        type: "multiple_choice",
        options: [
            "Colaboración",
            "Organización propia",
            "Comunicación",
            "Jerarquías claras en la empresa",
            "Mejora continua"
        ],
        correctAnswer: [0, 1, 2, 4],
        explanation: "Scrum prospera en entornos basados en colaboración, comunicación fluida, mejora continua y equipos autogestionados, alejándose de los esquemas jerárquicos rígidos."
    },
    {
        question: "De los principios del Manifiesto Ágil, seleccione cuáles NO pertenecen (Marca 2)",
        type: "multiple_choice",
        options: [
            "Construcción de proyectos en torno a individuos motivados",
            "Entrega temprana y continua de documentación",
            "Comunicación cara a cara es la más eficiente",
            "Negocio y Developers trabajan juntos diariamente",
            "La documentación exhaustiva es la principal medida de progreso"
        ],
        correctAnswer: [1, 4],
        explanation: "El Manifiesto Ágil valora el software funcionando por encima de la documentación exhaustiva y establece que el producto útil es la métrica principal de avance."
    },
    {
        question: "Un alto gerente del cliente puede forzar a los Developers a trabajar en elementos que no están en el Product Backlog.",
        type: "true_false",
        options: [
            "Verdadero",
            "Falso"
        ],
        correctAnswer: 1,
        explanation: "Nadie externo puede asignar trabajo directo a los Developers; cualquier petición de alcance obligatoriamente debe pasar y ser evaluada por el Product Owner."
    },
    {
        question: "Existen varias prácticas para pronosticar el progreso (burn-down, burn-up, cumulative flow). Seleccione la afirmación correcta:",
        type: "single_choice",
        options: [
            "En entornos complejos, se conoce lo que sucederá",
            "Si bien han demostrado su utilidad, no reemplazan la importancia del empirismo",
            "Lo más importante es la representation del Burn-Down",
            "Lo más importante es la representación del Burn-Up"
        ],
        correctAnswer: 1,
        explanation: "En entornos complejos con alta incertidumbre, los gráficos de proyección son herramientas útiles, pero el principio del empirismo (tomar decisiones basadas en hechos reales) es lo primordial."
    },
    {
        question: "Artefactos en el que se pueden encontrar las necesidades del cliente (Marque 2)",
        type: "multiple_choice",
        options: [
            "Product Backlog",
            "Sprint Backlog",
            "Documento de procesos",
            "Acta de Sprint Planning",
            "Documento de requisitos"
        ],
        correctAnswer: [0, 4],
        explanation: "El Product Backlog es el artefacto central de Scrum que aglutina las necesidades del cliente. En simuladores tradicionales, se suele vincular también al antiguo concepto de documento de requisitos."
    },
    {
        question: "Elementos identificativos de una Sprint Review (Marque 3)",
        type: "multiple_choice",
        options: [
            "Es una reunión informal",
            "Se debe usar alguna herramienta para presentar resultados",
            "El objetivo es ver el incremento realizado",
            "Solo se ejecutan pruebas que funcionarán",
            "Es una reunión informativa",
            "El equipo guía al Product Owner en la comprobación"
        ],
        correctAnswer: [0, 2, 4],
        explanation: "La Sprint Review se define como una sesión de trabajo informal para inspeccionar el incremento del Sprint, recopilar opiniones de los interesados e informar del progreso."
    },
    {
        question: "Scrum se basa en el empirismo y Lean. Seleccione qué otros elementos se deben tener en cuenta según la teoría de Scrum (Marque 2)",
        type: "multiple_choice",
        options: [
            "Scrum emplea un enfoque iterativo e incremental para optimizar previsibilidad y controlar riesgo",
            "Los artefactos deben inspeccionarse cada semana",
            "Los procesos deben ajustarse si las personas no están empoderadas",
            "Scrum involucra grupos que colectivamente tienen todas las habilidades necesarias"
        ],
        correctAnswer: [0, 3],
        explanation: "Scrum combines los ciclos iterativos e incrementales para controlar riesgos junto con equipos multidisciplinares capaces de entregar valor de forma autónoma."
    },
    {
        question: "De los valores relacionados con el manifiesto ágil, seleccione cuáles pertenecen (Marque 4)",
        type: "multiple_choice",
        options: [
            "Responder al cambio por encima de seguir un plan",
            "Software funcionando por encima de documentación exhaustiva",
            "Individuos e interacciones sobre procesos y herramientas",
            "Colaboración con el cliente sobre negociación contractual",
            "Procesos por encima de personas"
        ],
        correctAnswer: [0, 1, 2, 3],
        explanation: "Estas cuatro directrices representan fielmente los pilares fundamentales expuestos y defendidos en el texto original del Manifiesto Ágil."
    },
    {
        question: "Seleccione cuáles se consideran artefactos del Framework Scrum (Marque 3)",
        type: "multiple_choice",
        options: [
            "Sprint Backlog",
            "Sprint",
            "Incremento",
            "Product Backlog"
        ],
        correctAnswer: [0, 2, 3],
        explanation: "Los tres artefactos formales que proveen transparencia y medición en Scrum son el Product Backlog, el Sprint Backlog y el Incremento. El Sprint es un evento contenedor."
    },
    {
        question: "En una reunión Sprint Planning, se debe (Marque 2)",
        type: "multiple_choice",
        options: [
            "Los Developers seleccionan elementos del Product Backlog mediante conversación con el Product Owner",
            "El Product Owner propone cómo incrementar el valor del producto en el Sprint",
            "Determinar la duración del Sprint y fecha de la Review",
            "El Scrum Master propone soluciones"
        ],
        correctAnswer: [0, 1],
        explanation: "El Product Owner define qué metas incrementarán el valor del producto mientras que los Developers seleccionan colaborativamente cuántos elementos pueden completar en el Sprint."
    },
    {
        question: "Los tres pilares del empirismo en Scrum son (Marque 3)",
        type: "multiple_choice",
        options: [
            "Inspección",
            "Transparencia",
            "Adaptación",
            "Experimentación"
        ],
        correctAnswer: [0, 1, 2],
        explanation: "El control de procesos empírico en Scrum se sustenta estrictamente sobre tres pilares inseparables: la Transparencia, la Inspección y la Adaptación."
    },
    {
        question: "La Sprint Review consiste en inspeccionar el incremento generado y adaptar el Product Backlog si es necesario.",
        type: "true_false",
        options: [
            "Verdadero",
            "Falso"
        ],
        correctAnswer: 0,
        explanation: "El propósito de la Sprint Review es inspeccionar el resultado del Sprint (el Incremento) junto con los stakeholders y ajustar el Product Backlog para el futuro."
    },
    {
        question: "Scrum es un marco de trabajo que, al implementarse, permite el solapamiento de las fases del desarrollo (no secuencial) y una estrategia de desarrollo incremental a través de iteraciones (Sprints).",
        type: "true_false",
        options: [
            "Verdadero",
            "Falso"
        ],
        correctAnswer: 0,
        explanation: "Scrum rompe el modelo clásico en cascada al implementar un desarrollo cíclico y flexible en el que el diseño, las pruebas y la programación ocurren de forma simultánea dentro de cada Sprint."
    }
];
