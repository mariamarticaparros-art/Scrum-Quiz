const defaultQuestions = [
    {
        question: "Si un elemento del Sprint Backlog no puede terminarse antes de que termine el Sprint (resultó que hay mucho más trabajo del que se estimaba), el Sprint se cancela.",
        type: "true_false",
        options: ["Cierto", "Falso"],
        correctAnswer: 1,
        explanation: "El Sprint solo se cancela en caso de que el Sprint Goal quede obsoleto. Si no se podía realizar algún trabajo, el Sprint Backlog debería renegociarse entre el Product Owner y el equipo de desarrollo."
    },
    {
        question: "El equipo de melé está formado por",
        type: "multiple_choice",
        options: ["El Product Owner", "Los principales actores", "El Scrum Master", "El equipo de desarrollo"],
        correctAnswer: [0, 2, 3],
        explanation: "El equipo Scrum está formado oficialmente por un Product Owner, el equipo de desarrollo y un Scrum Master de forma horizontal y cohesionada."
    },
    {
        question: "¿Qué compone Scrum (seleccionar cuatro)?",
        type: "multiple_choice",
        options: ["Roles", "Informes", "Listas de quemado", "Eventos", "Artefactos", "Reglas"],
        correctAnswer: [0, 3, 4, 5],
        explanation: "El marco Scrum consta de los equipos Scrum y sus roles, eventos, artefactos y reglas asociados. Cada componente dentro del marco cumple un propósito específico y es esencial para el éxito."
    },
    {
        question: "¿Quién puede hacer cambios en el Product Backlog? Selecciona dos opciones.",
        type: "multiple_choice",
        options: ["Cualquiera", "El Product Owner", "El Scrum Master", "Los principales actores", "El equipo de desarrollo, pero con permiso del Product Owner"],
        correctAnswer: [1, 4],
        explanation: "El Product Owner es la única persona responsable del Product Backlog. Sin embargo, puede delegar parte del trabajo relacionado con la gestión del backlog de producto al equipo de desarrollo."
    },
    {
        question: "¿Quién es responsable de supervisar el progreso hacia objetivos de alto nivel?",
        type: "single_choice",
        options: ["El Scrum Master y el Equipo de Desarrollo", "El Scrum Master", "El Product Owner y el equipo de desarrollo", "El equipo de melé", "El equipo de desarrollo", "El Product Owner"],
        correctAnswer: 5,
        explanation: "El Product Owner registra el trabajo total restante al menos en cada revisión de Sprint y evalúa el progreso hacia la finalización del trabajo proyectado antes del tiempo deseado."
    },
    {
        question: "El equipo de desarrollo debería ser capaz de explicar al Product Owner y al Scrum Master cómo pretende trabajar como un equipo autoorganizado para lograr el objetivo del Sprint y crear el Incremento previsto.",
        type: "true_false",
        options: ["Falso", "Cierto"],
        correctAnswer: 1,
        explanation: "Al final de la Planificación del Sprint, el equipo de desarrollo debería ser capaz de explicar al Product Owner y al Scrum Master cómo pretende trabajar como un equipo autoorganizado para lograr el Sprint Goal."
    },
    {
        question: "¿Qué es el Sprint Backlog?",
        type: "single_choice",
        options: ["Los elementos de Product Backlog seleccionados para este Sprint", "El plan para entregar los artículos de Product Backlog", "Los artículos de Product Backlog seleccionados para este Sprint más el plan para su entrega", "Los elementos de Product Backlog seleccionados para este Sprint más los elementos de Team Backlog"],
        correctAnswer: 2,
        explanation: "El Backlog de Sprint es el conjunto de elementos de Product Backlog seleccionados para el Sprint, además de un plan para entregar el Incremento del producto y alcanzar el objetivo del Sprint."
    },
    {
        question: "Revisa todas las oportunidades formales para inspeccionar y adaptarse.",
        type: "multiple_choice",
        options: ["El Sprint", "La Revisión de Sprint", "El Daily Scrum", "La retrospectiva del sprint", "La planificación del sprint"],
        correctAnswer: [0, 1, 2, 3, 4],
        explanation: "Aparte del propio Sprint, que es un contenedor para todos los demás eventos, cada evento en Scrum es una oportunidad formal para inspeccionar y adaptar algo."
    },
    {
        question: "¿Qué debe tenerse en cuenta para la definición de \"hecho\"? Selecciona los dos elementos más apropiados.",
        type: "multiple_choice",
        options: ["Experiencia del Product Owner", "Definición de \"Hecho\" de otros equipos Scrum trabajando en el mismo producto", "Definición de \"Hecho\" de otros equipos Scrum trabajando en otros productos", "Convenciones, normas y directrices de la Organización", "Consejo del Scrum Master"],
        correctAnswer: [1, 3],
        explanation: "Si la definición es parte de las convenciones organizacionales, todos los equipos deben seguirla. Si no, el equipo debe definirla. Si hay varios equipos en el mismo producto, deben definirla mutuamente."
    },
    {
        question: "¿Cómo sirve el Scrum Master a la organización? Selecciona las tres respuestas más adecuadas.",
        type: "multiple_choice",
        options: ["Planificación de implementaciones de Scrum dentro de la organización", "Combinar desarrolladores experimentados y especialistas junior en diferentes equipos de desarrollo de la organización para acelerar la adopción de Scrum", "Asegurarse de que los principales interesados estén invitados a todas las revisiones de Scrum dentro de la organización", "Liderar y entrenar a la organización en su adopción de Scrum", "Colaborando con otros Scrum Masters para aumentar la eficacia de la aplicación de Scrum en la organización"],
        correctAnswer: [0, 3, 4],
        explanation: "El Scrum Master sirve liderando y entrenando en la adopción, planificando implementaciones y colaborando con otros Scrum Masters para aumentar la eficacia del marco."
    },
    {
        question: "¿Qué es el Incremento?",
        type: "single_choice",
        options: ["La suma de todos los elementos del Product Backlog completados durante el Sprint y el valor de los incrementos de todos los Sprints anteriores", "La suma de todos los elementos del Product Backlog completados durante el Sprint", "Todos los elementos del Sprint Backlog que podrían ser publicados independientemente de si el Product Owner decide hacerlo o no", "Todos los elementos \"Hechos\" en el Backlog de Sprint"],
        correctAnswer: 0,
        explanation: "El incremento es la suma de todos los elementos del Product Backlog completados durante el Sprint y el valor de los incrementos de todos los Sprints anteriores."
    },
    {
        question: "¿Qué muestra Cone of Doubt?",
        type: "single_choice",
        options: ["Dependencias, horarios de inicio y de finalización de las tareas del proyecto", "Jerarquía de tareas que conforman un proyecto", "Cuánto trabajo queda hasta el final del Sprint", "Cuánto se sabe sobre el Producto a lo largo del tiempo"],
        correctAnswer: 3,
        explanation: "El Cono de Incertidumbre describe la evolución de la cantidad de incertidumbre durante un proyecto, demostrando que sabemos más a lo largo del tiempo."
    },
    {
        question: "La definición de Hecho puede revisarse y adaptarse en cada Sprint Retrospective. ¿Verdadero o falso?",
        type: "true_false",
        options: ["Cierto", "Falso"],
        correctAnswer: 0,
        explanation: "Durante cada retrospectiva de Sprint, el equipo Scrum planifica formas de aumentar la calidad del producto mejorando los procesos de trabajo o adaptando la definición de \"Hecho\" si es apropiado."
    },
    {
        question: "¿Dónde se puede usar Scrum? Revisa todos los elementos aplicables.",
        type: "multiple_choice",
        options: ["Gestión del funcionamiento de una organización", "Investigación e identificación de mercados, tecnologías y capacidades de producto viables", "Desarrollo y mantenimiento de entornos operativos en la nube y otros", "Desarrollo de productos y mejoras", "Desarrollo de software y hardware", "Desarrollo de casi todo lo que usamos en nuestra vida diaria como individuos y sociedades"],
        correctAnswer: [0, 1, 2, 3, 4, 5],
        explanation: "Scrum se utiliza extensamente en todo el mundo para desarrollo complejo en software, hardware, funcionamiento organizacional, investigación de mercados y prácticamente cualquier cosa en nuestra vida diaria."
    },
    {
        question: "¿Podría terminarse la planificación del Sprint si solo el trabajo planificado para los primeros días del Sprint se descompone en unidades de un día o menos?",
        type: "single_choice",
        options: ["Sí, si también se estima el trabajo restante, quizá en unidades más grandes", "No, todos los elementos del Sprint Backlog deberían descomponerse en unidades de un día o menos al final de la planificación del Sprint"],
        correctAnswer: 0,
        explanation: "La Guía Scrum requiere que solo el trabajo planificado para los primeros días del Sprint se descomponga al final de la Planificación, a menudo en unidades de un día o menos."
    },
    {
        question: "¿Cuáles son las preguntas que responde la Planificación de Sprints? Selecciona dos.",
        type: "multiple_choice",
        options: ["¿Qué se puede ofrecer en el Incremento resultante del próximo Sprint?", "¿Cómo se logrará el trabajo necesario para entregar el Incremento?", "¿Cuál es el tamaño de la Deuda Técnica y cómo podría eliminarse?", "¿Qué nuevas tecnologías podrían usarse para acelerar la velocidad del equipo de desarrollo?", "¿Quién será responsable de cada elemento en el Backlog de Sprint?"],
        correctAnswer: [0, 1],
        explanation: "La reunión de Sprint Planning responde de manera oficial a dos preguntas críticas: ¿Qué se puede entregar? y ¿Cómo se logrará hacer ese trabajo?"
    },
    {
        question: "¿Cuáles son los cuadros de tiempo para la Sprint Review y la Sprint Retrospective?",
        type: "single_choice",
        options: ["Caja de tiempo de 4 horas para cada una", "3 y 4 horas respectivamente", "Caja de tiempo de 3 horas para cada una", "4 y 3 horas respectivamente"],
        correctAnswer: 3,
        explanation: "La Revisión del Sprint es, como mucho, una reunión de cuatro horas para Sprints de un mes. La Retrospectiva del Sprint es, como mucho, una reunión de tres horas para los Sprints de un mes."
    },
    {
        question: "¿Cuánto debería durar la Planificación del Sprint?",
        type: "single_choice",
        options: ["No más de 8 horas", "Hasta que todos los elementos del Sprint Backlog se descomponen en unidades de un día o menos", "No más de 4 horas", "No más del 10% de la capacidad del equipo de desarrollo"],
        correctAnswer: 0,
        explanation: "La planificación de sprints está limitada a un máximo de ocho horas para un sprint de duración mensual (un mes estándar)."
    },
    {
        question: "¿Quién es responsable de todas las estimaciones en el Product Backlog?",
        type: "single_choice",
        options: ["El equipo de desarrollo", "El Product Owner", "El equipo de melé", "El Product Owner y el Scrum Master", "El Scrum Master y el Equipo de Desarrollo", "El Product owner y el equipo de desarrollo", "El Scrum Master"],
        correctAnswer: 0,
        explanation: "El equipo de desarrollo es responsable de todas las estimaciones. El Product Owner puede influir y guiar ayudando a entender los intercambios, pero quien hace el trabajo tiene la última palabra."
    },
    {
        question: "¿Se permite saltarse el Daily Scrum si no hay nada interesante de qué hablar?",
        type: "single_choice",
        options: ["Sí", "No"],
        correctAnswer: 1,
        explanation: "Cada evento es una oportunidad formal de inspección y adaptación. No incluir alguno de estos eventos resulta en una menor transparencia y es una oportunidad perdida para el marco empírico."
    },
    {
        question: "La caja de tiempo de Daily Scrum depende del tamaño del equipo de desarrollo.",
        type: "true_false",
        options: ["Cierto", "Falso"],
        correctAnswer: 1,
        explanation: "El Daily Scrum es un evento con un timebox estricto de 15 minutos diseñado para el equipo de desarrollo, sin importar si el tamaño de este es grande o pequeño."
    },
    {
        question: "¿Quién tiene autoridad para cancelar el Sprint?",
        type: "single_choice",
        options: ["El Scrum Master", "El equipo de desarrollo", "Los principales actores", "El Product Owner y el Scrum Master", "El Product Owner"],
        correctAnswer: 4,
        explanation: "Solo el Product Owner tiene la autoridad exclusiva para cancelar el Sprint, aunque pueda recibir influencias legítimas de stakeholders o de los desarrolladores."
    },
    {
        question: "¿Qué son los artefactos Scrum? Selecciona todos los elementos aplicables.",
        type: "multiple_choice",
        options: ["La lista de impedimentos eliminados", "Catálogo de productos", "Lista de Sprint", "El objetivo del sprint", "Incremento"],
        correctAnswer: [1, 2, 4],
        explanation: "Los únicos tres artefactos oficiales definidos dentro de Scrum son el Product Backlog (Catálogo), el Sprint Backlog (Lista de Sprint) y el Incremento."
    },
    {
        question: "¿Qué muestra el Burn-down Chart?",
        type: "single_choice",
        options: ["Dependencias, horarios de inicio y de finalización de las tareas del proyecto", "Cuánto trabajo queda hasta el final del Sprint", "Jerarquía de tareas que conforman un proyecto", "La evolución de la cantidad de incertidumbre durante un proyecto"],
        correctAnswer: 1,
        explanation: "El gráfico de burn-down muestra de manera visual la evolución del esfuerzo o trabajo restante acumulado contra el paso del tiempo dentro del Sprint."
    },
    {
        question: "¿En qué reuniones se permite la participación de los Actores Clave?",
        type: "single_choice",
        options: ["La retrospectiva del sprint", "La Revisión de Sprint", "La planificación del sprint", "El Daily Scrum"],
        correctAnswer: 1,
        explanation: "Los Principales Actores o Stakeholders sólo están invitados formalmente a participar en la reunión de Revisión del Sprint para dar feedback del incremento."
    },
    {
        question: "¿Quién crea el incremento?",
        type: "single_choice",
        options: ["El Product Owner", "El equipo de melé", "El equipo de desarrollo y el propietario del producto", "El Scrum Master", "El equipo de desarrollo"],
        correctAnswer: 4,
        explanation: "Única y exclusivamente las personas asignadas como desarrolladores dentro del equipo de Scrum poseen el rol operativo para fabricar y crear un Incremento 'Hecho'."
    },
    {
        question: "¿Qué es Scrum?",
        type: "single_choice",
        options: ["Un proceso de diseño secuencial, utilizado en procesos de desarrollo de software, en el que el progreso se percibe como un flujo constante hacia abajo.", "Un marco dentro del cual las personas pueden abordar problemas adaptativos complejos, mientras entregan productos valiosos.", "Una metodología de desarrollo de software destinada a mejorar la calidad del software."],
        correctAnswer: 1,
        explanation: "Scrum no es un proceso ni metodología pesada; está definido textualmente como un marco liviano que ayuda a personas, equipos y organizaciones a generar valor mediante soluciones adaptativas."
    },
    {
        question: "El Product Owner (Dueño del Producto) es una única persona, no un comité. El Product Owner podría representar los deseos de un comité en la Product Backlog, pero aquellos que quieran cambiar la prioridad de un elemento deben hacerlo a través del Product Owner.",
        type: "true_false",
        options: ["Verdadero", "Falso"],
        correctAnswer: 0,
        explanation: "El Product Owner es un rol individual responsable único del Product Backlog, garantizando una toma de decisiones ágil y centralizada."
    },
    {
        question: "La velocidad es el factor que sirve para ver cuánto trabajo se entrega en cada Sprint. Si por ejemplo la velocidad de un Developer es de 15 PH, se puede interpretar como que este entrega 15 Historias de Usuario promedio en cada iteración.",
        type: "true_false",
        options: ["Verdadero", "Falso"],
        correctAnswer: 1,
        explanation: "La velocidad es una métrica colectiva que pertenece a todo el conjunto de los Developers, nunca se mide de forma individual por desarrollador ni equivale estrictamente a un número fijo de historias."
    },
    {
        question: "Para que el Product Owner (Dueño del Producto) pueda hacer bien su trabajo, toda la organización debe respetar sus decisiones. Las decisiones del Product Owner se reflejan en el contenido y en la priorización de la Product Backlog.",
        type: "true_false",
        options: ["Verdadero", "Falso"],
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
        options: ["El Scrum Master", "El Product Owner", "Los Responsables de Pruebas", "Los Developers"],
        correctAnswer: 0,
        explanation: "El Scrum Master es el responsable de adoptar y defender Scrum, guiando y ayudando a la organización a comprender su teoría, reglas y valores."
    },
    {
        question: "El Product Owner es responsable de maximizar el valor del producto resultante del trabajo del Scrum Team. La forma en que esto se hace puede variar ampliamente entre organizaciones, Scrum Teams e individuos.",
        type: "true_false",
        options: ["Verdadero", "Falso"],
        correctAnswer: 0,
        explanation: "Maximizar el valor es la misión principal del Product Owner, y las dinámicas operativas para lograrlo se adaptan según el contexto de cada equipo."
    },
    {
        question: "¿Cuáles de los siguientes eventos son definidos por el Framework Scrum? (Marca 3)",
        type: "multiple_choice",
        options: ["Daily Sprint", "Sprint Retrospective", "Sprint Planning", "Sprint Review"],
        correctAnswer: [1, 2, 3],
        explanation: "Los eventos oficiales contemplados en el marco Scrum son la Sprint Planning, la Daily Scrum, la Sprint Review y la Sprint Retrospective."
    },
    {
        question: "El Daily Scrum es una reunión con tiempo prefijado de 5 a 15 minutos, dirigida por el Scrum Master y en ella cada miembro informa sobre lo realizado, lo que hará y los impedimentos.",
        type: "true_false",
        options: ["Verdadero", "Falso"],
        correctAnswer: 1,
        explanation: "El Daily Scrum es un evento de y para los Developers; el Scrum Master no lo dirige. Además, el formato estricto de las tres preguntas ya no es obligatorio según la guía actual."
    },
    {
        question: "Un Scrum Master dirige la Sprint Planning para que no dure más de 8 horas para un Sprint de 1 mes. Debe evitar que los Developers comiencen a profundizar en trabajos de análisis o arquitectura propios del Sprint.",
        type: "true_false",
        options: ["Verdadero", "Falso"],
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
        options: ["Product Owner", "Scrum Manager", "QA Analyst Scrum", "Project Manager", "Scrum Master"],
        correctAnswer: [1, 2, 3],
        explanation: "Scrum no reconoce jerarquías ni puestos tradicionales como Project Manager o analistas especializados; solo define tres responsabilidades fundamentales: PO, SM y Developers."
    },
    {
        question: "¿Cuáles son importantes en la implementación de Scrum? (Marca 4)",
        type: "multiple_choice",
        options: ["Colaboración", "Organización propia", "Comunicación", "Jerarquías claras en la empresa", "Mejora continua"],
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
        options: ["Verdadero", "Falso"],
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
        options: ["Product Backlog", "Sprint Backlog", "Documento de procesos", "Acta de Sprint Planning", "Documento de requisitos"],
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
        question: "Scrum es un marco de trabajo que, al implementarse, permite el solapamiento de las fases del desarrollo (no secuencial) y una estrategia de desarrollo incremental a través de iteraciones (Sprints).",
        type: "true_false",
        options: ["Verdadero", "Falso"],
        correctAnswer: 0,
        explanation: "Scrum rompe el modelo clásico en cascada al implementar un desarrollo cíclico y flexible en el que el diseño, las pruebas y la programación ocurren de forma simultánea dentro de cada Sprint."
    }
];