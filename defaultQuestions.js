const defaultQuestions = [
  {
    "question": "¿Quién crea la definición de 'hecho'?",
    "type": "multiple_choice",
    "options": [
      "La organización de desarrollo.",
      "El Equipo Scrum, en un esfuerzo colaborativo.",
      "El Product Owner.",
      "El Scrum Master."
    ],
    "correctAnswer": [1],
    "explanation": "Si la definición de 'Hecho' forma parte de los estándares de la organización, el equipo la sigue como mínimo, pero el equipo Scrum debe definirla o complementarla para su producto."
  },
  {
    "question": "¿Debe estar presente el Product Owner en la retrospectiva de Sprint?",
    "type": "multiple_choice",
    "options": [
      "Solo cuando es invitado por el Scrum Master.",
      "Es obligatorio, es una oportunidad para que todo el equipo Scrum evalúe su rendimiento.",
      "No está permitido."
    ],
    "correctAnswer": [1],
    "explanation": "La Retrospectiva del Sprint es una oportunidad para que todo el equipo Scrum se inspeccione a sí mismo y cree un plan para las mejoras."
  },
  {
    "question": "Los diagramas de Burn-down se usan para el seguimiento de:",
    "type": "multiple_choice",
    "options": [
      "Una estimación del trabajo total restante para el Sprint.",
      "Cuánto esfuerzo se ha puesto en un Sprint.",
      "Cuántas horas ha trabajado cada miembro.",
      "Cuántos artículos de Product Backlog quedan."
    ],
    "correctAnswer": [0],
    "explanation": "Un gráfico de burn-down representa el trabajo restante (esfuerzo) durante un periodo determinado, usualmente el Sprint."
  },
  {
    "question": "¿Qué dos frases describen mejor la relación entre el Product Owner y el equipo de desarrollo?",
    "type": "multiple_choice",
    "options": [
      "Deben trabajar separados para mantener separadas las preocupaciones.",
      "Colaboran con frecuencia para equilibrar esfuerzo y valor del Product Backlog.",
      "Colaboran con frecuencia para construir incrementos teniendo en cuenta a los usuarios.",
      "No deberían compartir más que la reunión de Planificación y Revisión."
    ],
    "correctAnswer": [1, 2],
    "explanation": "La colaboración constante es vital para que el equipo entienda los elementos y cree valor, equilibrando esfuerzo y necesidades del usuario."
  },
  {
    "question": "¿Qué importancia tiene para un Product Owner pedir artículos de Product Backlog por puntos de valor?",
    "type": "multiple_choice",
    "options": [
      "Es la forma definitiva para predecir el valor.",
      "Es una buena práctica, teniendo en cuenta que la recepción del mercado es la mejor medida de valor."
    ],
    "correctAnswer": [1],
    "explanation": "Las indicaciones de valor son predicciones útiles, pero solo se validan realmente frente a usuarios y mercado."
  },
  {
    "question": "¿Cuáles de las siguientes tres son responsabilidades de un equipo autoorganizado?",
    "type": "multiple_choice",
    "options": [
      "Crea tareas para los elementos de Sprint Backlog.",
      "Saca los artículos de Product Backlog para el próximo Sprint.",
      "Estima la cantidad de trabajo de los nuevos elementos de Product Backlog.",
      "Crea nuevos artículos de Product Backlog.",
      "Informa del progreso a los interesados.",
      "Reordenar el catálogo de productos."
    ],
    "correctAnswer": [0, 1, 2],
    "explanation": "El equipo de desarrollo estima, selecciona los elementos para el Sprint y desglosa el trabajo en tareas."
  },
  {
    "question": "Los elementos del Backlog de Producto en la parte inferior no son tan claros como los de la parte superior.",
    "type": "multiple_choice",
    "options": [
      "Cierto",
      "Falso"
    ],
    "correctAnswer": [0],
    "explanation": "Al no ser prioritarios ni desarrollarse pronto, no hay necesidad de dedicarles mucho tiempo de detalle o planificación temprana."
  },
  {
    "question": "La Revisión Sprint es el único momento en que se tiene en cuenta la retroalimentación de los interesados.",
    "type": "multiple_choice",
    "options": [
      "Cierto",
      "Falso"
    ],
    "correctAnswer": [1],
    "explanation": "El Product Owner interactúa activa y regularmente con los interesados, aunque la Revisión Sprint es el evento formal para ello."
  },
  {
    "question": "Si varios equipos trabajan en el mismo producto, ¿quién debe asegurarse de que sus salidas puedan integrarse?",
    "type": "multiple_choice",
    "options": [
      "El Scrum Master.",
      "El Product Owner.",
      "El Scrum Teams.",
      "Los desarrolladores."
    ],
    "correctAnswer": [3],
    "explanation": "Depende de los desarrolladores asegurarse de que sus resultados creen un Incremento integrado."
  },
  {
    "question": "¿Qué dos afirmaciones explican por qué la definición de 'hecho' es importante para el Product Owner?",
    "type": "multiple_choice",
    "options": [
      "Asegura que el Incremento sea utilizable para decidir publicarlo.",
      "Ayuda al Product Owner a seguir el trabajo abierto durante un Sprint.",
      "Crea transparencia respecto al progreso dentro del equipo Scrum.",
      "Identifica el trabajo no realizado que puede abordarse en un Sprint separado."
    ],
    "correctAnswer": [0, 2],
    "explanation": "La definición de 'Hecho' garantiza transparencia y asegura que el incremento revisado sea utilizable para un posible lanzamiento."
  },
  {
    "question": "¿Qué es un Product Backlog?",
    "type": "multiple_choice",
    "options": [
      "Un artefacto vivo de requisitos que evoluciona mientras exista un producto.",
      "Una lista formalmente aprobada de requisitos para un periodo determinado.",
      "Una lista detallada que se complementa con un backlog tecnológico separado.",
      "Una lista de referencias a documentos de casos de uso."
    ],
    "correctAnswer": [0],
    "explanation": "El Product Backlog es una lista ordenada de todo lo necesario para el producto y es la única fuente de requisitos."
  },
  {
    "question": "¿Qué nos dice el 'Cono de la Incertidumbre' sobre los proyectos Scrum?",
    "type": "multiple_choice",
    "options": [
      "La incertidumbre suele ser mayor en los primeros Sprints.",
      "La incertidumbre suele ser mayor en los últimos Sprints.",
      "La incertidumbre suele disminuir después de especificar los requisitos al inicio."
    ],
    "correctAnswer": [0],
    "explanation": "La incertidumbre es mayor al inicio y se reduce a medida que se avanza en el proyecto."
  },
  {
    "question": "¿Cómo puede un Product Owner utilizar los Sprints para obtener feedback?",
    "type": "multiple_choice",
    "options": [
      "Con la garantía de que se termine todo el trabajo.",
      "Mediante la entrega frecuente de incrementos al mercado.",
      "Asegurando que el Sprint no pare hasta que todo sea verificado.",
      "Al final de cada Sprint con un informe de pruebas."
    ],
    "correctAnswer": [1],
    "explanation": "Los sprints limitan el riesgo y permiten comparar el incremento con el mercado y usuarios de forma frecuente."
  },
  {
    "question": "El Product Owner es responsable de preparar el objetivo del Sprint antes de la Planificación.",
    "type": "multiple_choice",
    "options": [
      "Cierto",
      "Falso"
    ],
    "correctAnswer": [1],
    "explanation": "El objetivo de Sprint se prepara durante la Planificación del Sprint por todo el equipo Scrum."
  },
  {
    "question": "¿Qué condiciones previas deben cumplirse para comenzar la Planificación de Sprints?",
    "type": "multiple_choice",
    "options": [
      "Un catálogo de productos totalmente refinado.",
      "Aprobación formal del presupuesto.",
      "Un objetivo claro e innegociable.",
      "No existen condiciones previas."
    ],
    "correctAnswer": [3],
    "explanation": "El plan se crea mediante el trabajo colaborativo de todo el equipo durante la misma reunión de planificación."
  },
  {
    "question": "En cada Sprint se debe liberar un incremento de producto.",
    "type": "multiple_choice",
    "options": [
      "Cierto",
      "Falso"
    ],
    "correctAnswer": [1],
    "explanation": "El incremento debe ser utilizable, pero solo se libera si tiene sentido hacerlo."
  },
  {
    "question": "¿Cuál es una forma clave para que un Product Owner aplique el 'aprendizaje validado'?",
    "type": "multiple_choice",
    "options": [
      "Lanza un incremento al mercado para conocer las suposiciones empresariales.",
      "Acepta un incremento en la revisión para conocer la funcionalidad desarrollada.",
      "Establece el objetivo de Sprint para informarse sobre la productividad."
    ],
    "correctAnswer": [0],
    "explanation": "El aprendizaje se valida cuando las suposiciones se comparan con los usuarios y el mercado real."
  },
  {
    "question": "¿Qué debería hacer el Product Owner si tiene dudas sobre la calidad de la definición de 'hecho'?",
    "type": "multiple_choice",
    "options": [
      "Ajustarla inmediatamente.",
      "Ajustarla al final del Sprint.",
      "Señaladlo en la próxima Retrospectiva de Sprint.",
      "Pedir al departamento de calidad que investigue."
    ],
    "correctAnswer": [2],
    "explanation": "El responsable de la definición de 'Hecho' es el equipo de desarrollo, no el Product Owner."
  },
  {
    "question": "¿Hasta qué punto la deuda técnica limita el valor que un Product Owner puede obtener? Marque 2",
    "type": "multiple_choice",
    "options": [
      "Provoca que un mayor presupuesto se destine al mantenimiento.",
      "No es una preocupación del Product Owner.",
      "No influye en la entrega del valor.",
      "Reduce la velocidad para crear nueva funcionalidad."
    ],
    "correctAnswer": [0, 3],
    "explanation": "La deuda técnica ralentiza el progreso y dificulta las nuevas funcionalidades, además de incrementar los costes de mantenimiento."
  },
  {
    "question": "¿Un Product Owner es esencialmente lo mismo que un Project Manager tradicional?",
    "type": "multiple_choice",
    "options": [
      "Cierto",
      "Falso"
    ],
    "correctAnswer": [1],
    "explanation": "Son roles distintos; el Product Owner se centra en maximizar el valor del producto, mientras que el PM tradicional gestiona recursos, costes y ejecución."
  },
  {
    "question": "El Product Owner puede pedir a los desarrolladores que ordenen los artículos del Product Backlog en lugar de él/ella.",
    "type": "multiple_choice",
    "options": [
      "Cierto",
      "Falso"
    ],
    "correctAnswer": [1],
    "explanation": "El Product Owner puede delegar tareas, pero sigue siendo el responsable final."
  },
  {
    "question": "El Product Owner es responsable de la definición de 'hecho'.",
    "type": "multiple_choice",
    "options": [
      "Cierto",
      "Falso"
    ],
    "correctAnswer": [1],
    "explanation": "La responsabilidad de la definición de 'Hecho' recae en el equipo de desarrollo."
  },
  {
    "question": "¿Quién puede cambiar el Sprint Backlog durante el Sprint?",
    "type": "multiple_choice",
    "options": [
      "El equipo de desarrollo.",
      "El Product Owner.",
      "El equipo de desarrollo y el Product Owner juntos.",
      "Nadie."
    ],
    "correctAnswer": [0],
    "explanation": "El equipo de desarrollo realiza cambios en las tareas del Sprint Backlog, aunque pueden consultar al Product Owner."
  },
  {
    "question": "El Product Owner y el Scrum Master no deberían formar parte del equipo de desarrollo.",
    "type": "multiple_choice",
    "options": [
      "Cierto",
      "Falso"
    ],
    "correctAnswer": [1],
    "explanation": "La misma persona puede desempeñar más de un rol, aunque no es lo recomendado."
  },
  {
    "question": "Más funciones siempre supondrán más valor.",
    "type": "multiple_choice",
    "options": [
      "Cierto",
      "Falso"
    ],
    "correctAnswer": [1],
    "explanation": "Más funciones pueden aumentar el coste de mantenimiento y reducir el valor si no son las adecuadas o llegan en el momento equivocado."
  },
  {
    "question": "¿Cuáles son dos actividades típicas para un Product Owner en un Sprint?",
    "type": "multiple_choice",
    "options": [
      "Asistir a cada Daily Scrum para responder preguntas.",
      "Actualizar el plan de trabajo a diario.",
      "Trabajar en el refinamiento del Product Backlog.",
      "Elaborar informes financieros.",
      "Colaborar con los grupos de interés."
    ],
    "correctAnswer": [2, 4],
    "explanation": "El Product Owner colabora con los interesados y con el equipo en el refinamiento del backlog."
  },
  {
    "question": "Un Product Owner puede posponer el inicio de un nuevo Sprint tras la conclusión del anterior.",
    "type": "multiple_choice",
    "options": [
      "Cierto",
      "Falso"
    ],
    "correctAnswer": [1],
    "explanation": "Un nuevo Sprint comienza inmediatamente después de la conclusión del anterior."
  },
  {
    "question": "¿Qué debería hacer el Product Owner si el equipo no puede terminar todos los elementos del Sprint?",
    "type": "multiple_choice",
    "options": [
      "Eliminar elementos del Sprint Backlog.",
      "Cancelar el Sprint.",
      "Ayudar a ajustar el trabajo para cumplir el objetivo del Sprint.",
      "Pedir más recursos."
    ],
    "correctAnswer": [2],
    "explanation": "El equipo recibe ayuda del Product Owner para ajustar las tareas y asegurar que se aporte el máximo valor posible al final del Sprint."
  },
  {
    "question": "El conflicto debe evitarse a toda costa en los equipos Ágiles.",
    "type": "multiple_choice",
    "options": [
      "Cierto",
      "Falso"
    ],
    "correctAnswer": [1],
    "explanation": "Los conflictos bien gestionados pueden ser útiles para mejorar ideas y entender mejor los objetivos del proyecto."
  },
  {
    "question": "¿Quién es responsable de estimar el esfuerzo de los elementos del Product Backlog?",
    "type": "multiple_choice",
    "options": [
      "El equipo de desarrollo.",
      "El PMO.",
      "El Product Owner."
    ],
    "correctAnswer": [0],
    "explanation": "El equipo de desarrollo tiene la visión completa del trabajo necesario para transformar los elementos en incrementos."
  },
  {
    "question": "¿Qué describe mejor la relación entre el Product Owner y los grupos de interés?",
    "type": "multiple_choice",
    "options": [
      "El Product Owner redacta las historias tal cual las piden.",
      "El Product Owner tiene la decisión final y debe implicarlos lo menos posible.",
      "El Product Owner solicita activamente opinión para el Product Backlog.",
      "El Product Owner entrega formularios de aceptación."
    ],
    "correctAnswer": [2],
    "explanation": "El Product Owner representa a los interesados y solicita activamente su opinión para incorporarla al Product Backlog."
  },
  {
    "question": "¿Qué ocurre con un elemento que no cumple la definición de 'Hecho' al final del Sprint?",
    "type": "multiple_choice",
    "options": [
      "Se pone en el Product Backlog para que el Product Owner decida.",
      "Si los interesados están de acuerdo, se acepta.",
      "No se incluye en el incremento.",
      "Se crea una historia con el trabajo restante."
    ],
    "correctAnswer": [0, 2],
    "explanation": "Cualquier trabajo incompleto vuelve al Product Backlog para ser repriorizado por el Product Owner."
  },
  {
    "question": "El Product Owner puede delegar algunas de sus responsabilidades en el equipo de desarrollo.",
    "type": "multiple_choice",
    "options": [
      "Cierto",
      "Falso"
    ],
    "correctAnswer": [0],
    "explanation": "Es posible delegar, pero el Product Owner sigue siendo el responsable final."
  },
  {
    "question": "¿Qué afirmación es correcta cuando los desarrolladores trabajan en medio del Sprint?",
    "type": "multiple_choice",
    "options": [
      "El alcance puede aclararse a medida que se aprenda más.",
      "El Sprint Backlog se congela.",
      "No se realizarán pruebas hasta el final."
    ],
    "correctAnswer": [0],
    "explanation": "A medida que se aprende más, el alcance puede renegociarse entre el Product Owner y el equipo de desarrollo."
  },
  {
    "question": "¿Quién debería saber más sobre el progreso hacia un objetivo empresarial?",
    "type": "multiple_choice",
    "options": [
      "El Product Owner.",
      "El equipo de desarrollo.",
      "El Scrum Master.",
      "El Jefe de Proyecto."
    ],
    "correctAnswer": [0],
    "explanation": "El Product Owner es responsable de maximizar el valor del trabajo y entender las necesidades del negocio."
  },
  {
    "question": "Es obligatorio que el Product Owner comparta el progreso a través de:",
    "type": "multiple_choice",
    "options": [
      "Gráfico de burn-down.",
      "Gráfico de consumo de valor.",
      "Diagrama de Gantt.",
      "Cualquier práctica proyectiva.",
      "No es obligatorio."
    ],
    "correctAnswer": [4],
    "explanation": "Aunque existen herramientas útiles, ninguna práctica proyectiva es obligatoria en Scrum."
  },
  {
    "question": "¿Cómo sabe una organización que un producto es exitoso?",
    "type": "multiple_choice",
    "options": [
      "Al medir si la velocidad ha aumentado.",
      "Publicando con frecuencia y actualizando indicadores de valor.",
      "Midiendo el tiempo real vs estimado.",
      "Cuando el Product Owner acepta el incremento."
    ],
    "correctAnswer": [1],
    "explanation": "Publicar frecuentemente y medir indicadores de valor permite obtener retroalimentación real del mercado."
  },
  {
    "question": "La responsabilidad del Product Owner se describe mejor como:",
    "type": "multiple_choice",
    "options": [
      "Optimizando el valor del trabajo realizado.",
      "Hacer planes a largo plazo.",
      "Coordinando al equipo de desarrollo."
    ],
    "correctAnswer": [0],
    "explanation": "El objetivo principal es maximizar el valor del producto resultante del trabajo del equipo Scrum."
  },
  {
    "question": "La autoridad del Product Owner para modificar el Product Backlog es ilimitada, salvo por:",
    "type": "multiple_choice",
    "options": [
      "Decisiones del CFO o CEO.",
      "Nada. Toda la organización debe respetar sus decisiones.",
      "Trabajo técnico indicado por el arquitecto.",
      "Cambios no aprobados."
    ],
    "correctAnswer": [1],
    "explanation": "Para que el Product Owner tenga éxito, la organización debe respetar sus decisiones."
  },
  {
    "question": "Un 'Baselining' se llama:",
    "type": "multiple_choice",
    "options": [
      "Acumulación de sprints.",
      "Visión del producto.",
      "No está establecido en Scrum.",
      "Plan de liberación."
    ],
    "correctAnswer": [2],
    "explanation": "El 'Baselining' es un término tradicional; no hay líneas de base ni planificación inicial rígida en Scrum."
  },
  {
    "question": "El valor que aporta un producto solo puede determinarse por los ingresos.",
    "type": "multiple_choice",
    "options": [
      "Cierto",
      "Falso"
    ],
    "correctAnswer": [1],
    "explanation": "El valor varía dependiendo de la organización y el producto, no se limita solo a los ingresos."
  },
  {
    "question": "El Product Owner quiere diseñar pruebas de aceptación para todos los artículos desde el principio. Respuesta del SM:",
    "type": "multiple_choice",
    "options": [
      "Es una buena idea.",
      "Es una buena idea si no son detalladas.",
      "No es necesario, debe discutirse con más detalle antes del desarrollo."
    ],
    "correctAnswer": [2],
    "explanation": "Scrum no utiliza diseño previo; la preparación se realiza de forma continua."
  },
  {
    "question": "Un primer Sprint puede comenzar sin un Product Backlog completo y exhaustivo.",
    "type": "multiple_choice",
    "options": [
      "Cierto",
      "Falso"
    ],
    "correctAnswer": [0],
    "explanation": "Solo se necesitan suficientes ideas para completar potencialmente un Sprint."
  },
  {
    "question": "Si el equipo descubre que no van a construir todo lo previsto, el Product Owner debería:",
    "type": "multiple_choice",
    "options": [
      "Cancelar el Sprint.",
      "Cambiar el objetivo.",
      "Retrabajar los elementos con el equipo para cumplir el objetivo.",
      "Saltar el refinamiento."
    ],
    "correctAnswer": [2],
    "explanation": "El alcance puede aclararse y renegociarse entre el Product Owner y el equipo a medida que se aprende más."
  },
  {
    "question": "¿Pueden los requisitos de seguridad, rendimiento, funcionalidad y documentación formar parte del Product Backlog?",
    "type": "multiple_choice",
    "options": [
      "Sí, es la lista única y completa de trabajo.",
      "No, deben ser gestionados por separado."
    ],
    "correctAnswer": [0],
    "explanation": "Todo el trabajo necesario para el producto, sea funcional o técnico, debe estar en el Product Backlog."
  },
  {
    "question": "¿Qué porcentaje del tiempo del Product Owner debería dedicarse al equipo?",
    "type": "multiple_choice",
    "options": [
      "Tanto como sea necesario para maximizar el valor.",
      "100%.",
      "Lo justo para el refinamiento.",
      "Al menos el 50%."
    ],
    "correctAnswer": [0],
    "explanation": "No es un trabajo a tiempo completo fijo; se dedica el tiempo necesario para cumplir sus responsabilidades."
  },
  {
    "question": "¿Cuánto tiempo tarda la Planificación de Sprints en un proyecto con Sprints de tres semanas?",
    "type": "multiple_choice",
    "options": [
      "8 horas.",
      "6 horas.",
      "3 horas.",
      "4 horas."
    ],
    "correctAnswer": [1],
    "explanation": "Está limitada a un máximo de 8 horas para un sprint de un mes; para sprints más cortos, suele ser menos, pero 8 es el máximo permitido."
  },
  {
    "question": "Para tomar decisiones de inversión, el Product Owner tendrá en cuenta:",
    "type": "multiple_choice",
    "options": [
      "El coste fijo por Sprint.",
      "Todas las inversiones necesarias para concebir, desarrollar, operar y mantener el producto.",
      "El coste acumulado sobre el valor ganado."
    ],
    "correctAnswer": [1],
    "explanation": "El Product Owner es responsable de todo el ciclo de vida, incluyendo mantenimiento y operación."
  },
  {
    "question": "¿Qué es lo mejor que puede hacer el Product Owner cuando los desarrolladores tienen dificultades para entender las expectativas?",
    "type": "multiple_choice",
    "options": [
      "Pedir al Scrum Master que facilite la interacción.",
      "Asistir a sus Daily Scrums y eliminar impedimentos.",
      "Pasar suficiente tiempo con el equipo para explicar todo.",
      "Asistir a sus Daily Scrums y responder preguntas."
    ],
    "correctAnswer": [2],
    "explanation": "El Product Owner es responsable de pasar tiempo con los desarrolladores para asegurar claridad."
  },
  {
    "question": "Consideraciones al formar varios equipos Scrum cohesionados (Marque 2):",
    "type": "multiple_choice",
    "options": [
      "Mezcla eficaz de habilidades para evitar dependencias.",
      "Tamaño adecuado en cada equipo.",
      "Suficientes habilidades para la capa técnica.",
      "Mezcla de niveles senior y junior."
    ],
    "correctAnswer": [0, 1],
    "explanation": "Los equipos deben ser multifuncionales y tener un tamaño gestionable (10 o menos)."
  },
  {
    "question": "¿Qué variables considera un Product Owner al pedir el Product Backlog?",
    "type": "multiple_choice",
    "options": [
      "Primero esfuerzo, luego valor.",
      "Cohesión del desarrollo.",
      "Menor coste de desarrollo.",
      "Disponibilidad de recursos.",
      "Lo apropiado para lograr los objetivos del producto y optimizar el valor."
    ],
    "correctAnswer": [4],
    "explanation": "El Product Owner ordena el Backlog para optimizar el valor recibido."
  },
  {
    "question": "¿Qué descripción encaja mejor con el rol del Product Owner?",
    "type": "multiple_choice",
    "options": [
      "Gestor de Proyecto 2.0.",
      "Maximizador de valor.",
      "Recopilador de Requisitos.",
      "Protector de mira.",
      "Analista Jefe."
    ],
    "correctAnswer": [1],
    "explanation": "La responsabilidad central es maximizar el valor del producto."
  },
  {
    "question": "Depende del equipo decidir qué eventos de Scrum son necesarios durante el Sprint.",
    "type": "multiple_choice",
    "options": [
      "Cierto",
      "Falso"
    ],
    "correctAnswer": [1],
    "explanation": "Todos los eventos de Scrum son necesarios y no deben ser retirados."
  },
  {
    "question": "¿Qué se debe hacer si el Product Owner no está disponible?",
    "type": "multiple_choice",
    "options": [
      "El equipo toma las mejores decisiones y se realinea después.",
      "Debería haber un equipo de Product Owners.",
      "Es necesario nombrar a uno nuevo, el desarrollo sin Product Owner no es Scrum.",
      "El desarrollo se detiene."
    ],
    "correctAnswer": [0],
    "explanation": "El rol de Product Owner es esencial en Scrum; sin él, no se puede realizar la rendición de cuentas ni maximizar el valor."
  },
  {
    "question": "¿De qué es responsable el Product Owner?",
    "type": "multiple_choice",
    "options": [
      "Describir el incremento en la planificación.",
      "Crear y mantener un Backlog que maximice el valor.",
      "Refinar elementos hasta que estén listos.",
      "Escribir historias para los interesados."
    ],
    "correctAnswer": [1],
    "explanation": "La herramienta principal es el Product Backlog para maximizar el valor del producto y del trabajo del equipo."
  },
  {
    "question": "Varios equipos trabajando en el mismo producto. ¿Cada uno debe tener su propia definición de 'Hecho'?",
    "type": "multiple_choice",
    "options": [
      "Cierto",
      "Falso"
    ],
    "correctAnswer": [1],
    "explanation": "Pueden usar la misma o tener distintas, siempre que sean compatibles y permitan crear incrementos integrados."
  },
  {
    "question": "¿Cuándo se puede actualizar el Product Backlog?",
    "type": "multiple_choice",
    "options": [
      "Solo después de la revisión.",
      "Solo durante sesiones de refinamiento.",
      "Nunca.",
      "En cualquier momento por el Product Owner."
    ],
    "correctAnswer": [3],
    "explanation": "El Backlog es dinámico y puede ser actualizado en cualquier momento por el Product Owner."
  },
  {
    "question": "Ante una velocidad menor a la estimada y dificultades en las pruebas: ¿Cómo recuperarse?",
    "type": "multiple_choice",
    "options": [
      "Esforzarse por completar el 90% y posponer el resto.",
      "El equipo informa que el incremento no es liberable, se reestima el esfuerzo para hacerlo real y el Product Owner decide continuar o cancelar.",
      "El Scrum Master gestiona el backlog y asigna tareas para máxima utilización."
    ],
    "correctAnswer": [1],
    "explanation": "Scrum requiere un incremento 'Hecho' y utilizable; es responsabilidad del Product Owner tomar decisiones basadas en la realidad técnica."
  },
  {
    "question": "¿Cuáles son dos formas en que el Product Owner toma la iniciativa en la inspección?",
    "type": "multiple_choice",
    "options": [
      "Compartir el estado del Backlog en la Revisión Sprint.",
      "Inspeccionar el burn-down en el Daily Scrum.",
      "Verificar el backlog de Sprint al final de la planificación.",
      "Invitar a interesados a la Sprint Review."
    ],
    "correctAnswer": [0, 3],
    "explanation": "El Product Owner utiliza la Sprint Review y la actualización del Backlog para mantener la transparencia y optimizar el valor."
  },
  {
    "question": "¿Qué ocurre con el Product Backlog cuando las necesidades cambian?",
    "type": "multiple_choice",
    "options": [
      "Evoluciona para reflejar los cambios.",
      "No tiene efecto.",
      "Se archiva y reemplaza."
    ],
    "correctAnswer": [0],
    "explanation": "El Product Backlog es dinámico y cambia constantemente para reflejar comentarios y entorno."
  },
  {
    "question": "¿Qué dos cosas ayudan al Product Owner a gestionar el valor?",
    "type": "multiple_choice",
    "options": [
      "Value Poker.",
      "Cálculo neutral.",
      "El orden del catálogo.",
      "Validando suposiciones mediante publicaciones frecuentes."
    ],
    "correctAnswer": [2, 3],
    "explanation": "El orden del catálogo y la validación frente al mercado son fundamentales para la gestión del valor."
  },
  {
    "question": "Los interesados deberían reordenar el Backlog de Producto en la reunión de Revisión Sprint.",
    "type": "multiple_choice",
    "options": [
      "Cierto",
      "Falso"
    ],
    "correctAnswer": [1],
    "explanation": "El Product Owner es el único con la última palabra sobre el orden del Product Backlog."
  },
  {
    "question": "¿Quién forma parte del Scrum Team?",
    "type": "multiple_choice",
    "options": [
      "Equipo de desarrollo.",
      "Scrum Master.",
      "Líder de equipo.",
      "Gestor de proyecto.",
      "Product Owner."
    ],
    "correctAnswer": [0, 1, 4],
    "explanation": "El equipo Scrum está formado por el Product Owner, el Scrum Master y los desarrolladores."
  },
  {
    "question": "Los Hardening Sprints son útiles.",
    "type": "multiple_choice",
    "options": [
      "Cierto",
      "Falso"
    ],
    "correctAnswer": [1],
    "explanation": "No existen 'Hardening Sprints' en Scrum; todos los sprints deben crear incrementos 'hechos'."
  },
  {
    "question": "Sprint cancelado: ¿qué ocurre con los elementos 'Hechos'?",
    "type": "multiple_choice",
    "options": [
      "Vuelven a la lista de productos.",
      "Revisados y aceptados por el Product Owner si pueden lanzarse.",
      "Se mueven al siguiente Sprint."
    ],
    "correctAnswer": [1],
    "explanation": "El Product Owner revisa y acepta lo que esté 'hecho' tras una cancelación."
  },
  {
    "question": "Equipo listo para primer Sprint pero Backlog incompleto. ¿Qué hacer?",
    "type": "multiple_choice",
    "options": [
      "Hacer un Sprint 0.",
      "Ayudar a perfeccionar el Backlog en lugar de empezar.",
      "Aclarar solo los elementos del primer Sprint y empezar."
    ],
    "correctAnswer": [2],
    "explanation": "No es necesario tener todo definido; solo lo suficiente para el objetivo actual de Sprint."
  },
  {
    "question": " (Marque 3):",
    "type": "multiple_choice",
    "options": [
      "Lista de tareas para desarrolladores.",
      "Guía para pronosticar el Sprint Backlog.",
      "Orientación sobre el trabajo restante.",
      "Crea transparencia y comprensión común del estado del incremento.",
      "Ayuda a decidir cuánto tiempo falta."
    ],
    "correctAnswer": [1, 3, 4],
    "explanation": "Proporciona orientación y una comprensión compartida para garantizar transparencia."
  },
  {
    "question": "Usar gráficos de burn-up en lugar de burn-down:",
    "type": "multiple_choice",
    "options": [
      "No hay nada malo en ello.",
      "Deberían ser reemplazados."
    ],
    "correctAnswer": [0],
    "explanation": "Ninguna herramienta es obligatoria; el Product Owner puede usar otras técnicas."
  },
  {
    "question": "El Product Owner considera que es mejor delegar la estimación al equipo.",
    "type": "multiple_choice",
    "options": [
      "Cierto",
      "Falso"
    ],
    "correctAnswer": [1],
    "explanation": "La estimación es responsabilidad del equipo de desarrollo por defecto; no es algo que el Product Owner decida delegar."
  },
  {
    "question": "¿Quién actualiza el trabajo restante durante el Sprint?",
    "type": "multiple_choice",
    "options": [
      "El Product Owner.",
      "El equipo de desarrollo.",
      "El Scrum Master.",
      "El Jefe de Proyecto."
    ],
    "correctAnswer": [1],
    "explanation": "El equipo de desarrollo rastrea el trabajo restante del Sprint."
  },
  {
    "question": "3 actividades responsabilidad del Product Owner:",
    "type": "multiple_choice",
    "options": [
      "Tomar decisiones técnicas.",
      "Priorizar el backlog.",
      "Diseñar software.",
      "Crear historias de usuario.",
      "Dividir historias épicas.",
      "Proporcionar presupuestos."
    ],
    "correctAnswer": [1, 3, 4],
    "explanation": "Priorizar, crear y desglosar historias son labores del Product Owner; diseño técnico y estimación son del equipo."
  },
  {
    "question": "Para iniciar el primer Sprint, Scrum solo requiere un Product Owner...",
    "type": "multiple_choice",
    "options": [
      "Cierto",
      "Falso"
    ],
    "correctAnswer": [1],
    "explanation": "Se requiere un Scrum Team completo."
  },
  {
    "question": "Marque 2 elementos sobre la reunión retrospectiva de Sprint:",
    "type": "multiple_choice",
    "options": [
      "Es una oportunidad para inspección y adaptación.",
      "Son tres horas en un sprint de un mes.",
      "Es la única vez que se planifican mejoras.",
      "Sucede antes de la revisión.",
      "El Product Owner no tiene por qué estar."
    ],
    "correctAnswer": [0, 1],
    "explanation": "Es el último evento, incluye a todo el Equipo y busca mejoras."
  },
  {
    "question": "Para el Product Owner,es importante estar al tanto de la deuda técnica:",
    "type": "multiple_choice",
    "options": [
      "No es su preocupación.",
      "Porque aumenta el coste total de propiedad.",
      "Porque aumenta el valor."
    ],
    "correctAnswer": [1],
    "explanation": "La deuda técnica aumenta el coste de mantenimiento y los riesgos futuros."
  },
  {
    "question": "El Product Owner puede delegar algunas de sus responsabilidades en el equipo de desarrollo.",
    "type": "multiple_choice",
    "options": [
      "Cierto",
      "Falso"
    ],
    "correctAnswer": [0],
    "explanation": "Delegar es posible, pero la responsabilidad permanece en el Product Owner."
  },
  {
    "question": "El refinamiento del Product Backlog no debe ocupar más del 10% del tiempo del Product Owner.",
    "type": "multiple_choice",
    "options": [
      "Cierto",
      "Falso"
    ],
    "correctAnswer": [1],
    "explanation": "Esta regla del 10% suele aplicarse al tiempo de los desarrolladores; el Product Owner dedica el tiempo necesario."
  },
  {
    "question": "Dos escenarios que representan un desarrollo autoorganizado:",
    "type": "multiple_choice",
    "options": [
      "Centrarse en su función y transferir trabajo.",
      "La dirección trabaja con el SM.",
      "Seleccionar y replanificar trabajo colaborativamente.",
      "Invitar a externos a la planificación.",
      "Crear su propio Sprint Backlog."
    ],
    "correctAnswer": [2, 4],
    "explanation": "Un equipo autoorganizado gestiona su trabajo y planifica cómo realizarlo."
  },
  {
    "question": "Mayor velocidad = mayor valor generado.",
    "type": "multiple_choice",
    "options": [
      "Cierto",
      "Falso"
    ],
    "correctAnswer": [1],
    "explanation": "Velocidad y valor no están directamente relacionados; los elementos de alto valor suelen entregarse primero."
  },
  {
    "question": "Cuando un producto se vuelve demasiado grande para un solo equipo Scrum y se forma un equipo nuevo adicional, ¿quién es responsable de crear un Backlog de Producto para el nuevo equipo Scrum?",
    "type": "multiple_choice",
    "options": [
      "El Scrum Master.",
      "El Product Owner del nuevo equipo Scrum.",
      "No es necesario un nuevo retraso de producto."
    ],
    "correctAnswer": [2],
    "explanation": "Un producto tiene un único Product Backlog y, por lo tanto, un único Product Owner. Varios equipos deben trabajar sobre el mismo backlog para mantener la coherencia."
  },
  {
    "question": "¿Una dirección curiosa debería seguir el progreso de Sprint a través de qué solución?",
    "type": "multiple_choice",
    "options": [
      "El Scrum Master tiene que enviar un informe cada día.",
      "El Product Owner tiene que enviar un informe cada día.",
      "La dirección puede asistir a la Revisión Sprint y puede visitar el Sprint Backlog y el gráfico de burndown en cualquier momento.",
      "La dirección debería asistir al Daily Scrum todos los días."
    ],
    "correctAnswer": [2],
    "explanation": "Scrum fomenta la transparencia mediante artefactos visibles. La dirección debe consultar el Sprint Backlog o asistir a la Sprint Review, no mediante informes burocráticos ni interrumpiendo el Daily Scrum."
  },
  {
    "question": "¿Quién es responsable de eliminar los impedimentos?",
    "type": "multiple_choice",
    "options": [
      "El Product Owner",
      "El Gestor de Proyecto",
      "El Scrum Master",
      "El Líder del Equipo"
    ],
    "correctAnswer": [2],
    "explanation": "El Scrum Master es el servidor líder encargado de eliminar los impedimentos que bloquean el progreso del equipo."
  },
  {
    "question": "¿En qué puede confiar el Product Owner para maximizar el valor del producto?",
    "type": "multiple_choice",
    "options": [
      "Análisis coste/beneficio, directivas de gestión, eliminación de residuos",
      "Capacidad, velocidad, retorno de la inversión",
      "Visión del producto, investigación, feedback de los clientes"
    ],
    "correctAnswer": [2],
    "explanation": "La maximización del valor se basa en la visión del producto y en el aprendizaje empírico obtenido mediante la investigación y el feedback directo de los usuarios."
  },
  {
    "question": "Si 'Hecho' para un incremento no es una convención de la organización de desarrollo, ¿quién debe definir una definición de Hecho para el producto?",
    "type": "multiple_choice",
    "options": [
      "El Scrum Master",
      "El Scrum Team (Equipo Scrum)",
      "El Product Owner",
      "El Scrum Master y los Desarrolladores"
    ],
    "correctAnswer": [1],
    "explanation": "Todo el Equipo Scrum es responsable de establecer la 'Definición de Hecho' si no existe una estándar organizacional, asegurando la calidad del incremento."
  },
  {
    "question": "¿Qué debería hacer el Product Owner durante el Sprint? Elige las dos mejores respuestas.",
    "type": "multiple_choice",
    "options": [
      "Colaborar con los grupos de interés y recopilar comentarios de los usuarios.",
      "Redactar historias de usuario y criterios de aceptación.",
      "Participar en el refinamiento del backlog e interactúa con los desarrolladores según sea necesario.",
      "Asistir a Daily Scrums y responder a cualquier pregunta.",
      "Actualizar el plan del proyecto.",
      "El Product Owner no tuvo nada que ver durante el Sprint."
    ],
    "correctAnswer": [0, 2],
    "explanation": "El Product Owner debe gestionar el backlog (refinamiento) y colaborar con interesados/usuarios para asegurar que el equipo entregue valor."
  },
  {
    "question": "Tras una reunión con el equipo de ciberseguridad, el Product Owner identificó un par de nuevos requisitos no funcionales. ¿Qué debería hacer con ellos?",
    "type": "multiple_choice",
    "options": [
      "Déjalo en manos de los desarrolladores.",
      "Añádelos a la lista de productos pendientes. El Backlog de Producto es una lista de todo... y deberían implementarse como cualquier otro contenido.",
      "Añádelos a la lista de productos pendientes. El refinamiento eliminará si debe formar parte de la 'Definición de Hecho' o implementarse como otros objetos.",
      "Pide a los desarrolladores que los añadan a la definición de 'Hecho'."
    ],
    "correctAnswer": [2],
    "explanation": "Todo el trabajo va al Product Backlog. Durante el refinamiento, se decide si es un criterio de calidad permanente (Definition of Done) o un elemento de trabajo puntual."
  },
  {
    "question": "¿Quién es responsable de gestionar el Backlog de Producto?",
    "type": "multiple_choice",
    "options": [
      "Los desarrolladores",
      "El Product Owner",
      "El Gestor de Proyecto",
      "El Scrum Master"
    ],
    "correctAnswer": [1],
    "explanation": "El Product Owner es el único responsable de la gestión, orden y transparencia del Product Backlog."
  },
  {
    "question": "¿Cuál es el principal beneficio de tener un objetivo de sprint?",
    "type": "multiple_choice",
    "options": [
      "Nada en particular, pero sin ello los interesados no tendrían una agenda para la Revisión Sprint.",
      "Ayuda a los desarrolladores a mantenerse concentrados durante la construcción del Incremento.",
      "La dirección entiende en qué está trabajando el equipo."
    ],
    "correctAnswer": [1],
    "explanation": "El Sprint Goal da enfoque y propósito, ayudando a los desarrolladores a tomar decisiones alineadas durante el Sprint."
  },
  {
    "question": "Cuando se usan las palabras 'desarrollar' y 'desarrollo' en la Guía Scrum, ¿a qué se refieren?",
    "type": "multiple_choice",
    "options": [
      "Se refiere a cualquier tipo de trabajo complejo que contribuya a la construcción de un Incremento.",
      "Significa programar con tareas adicionales como la gestión de repositorios.",
      "Desarrollo se refiere a la programación, prueba y mantenimiento de todo el marco de integración continua."
    ],
    "correctAnswer": [0],
    "explanation": "Scrum utiliza una definición amplia e inclusiva para cualquier disciplina necesaria para crear un incremento, no solo programación."
  },
  {
    "question": "¿Verdadero o falso? Es posible implementar Scrum usando solo algunos de los roles, eventos y artefactos.",
    "type": "multiple_choice",
    "options": [
      "Falso",
      "Cierto"
    ],
    "correctAnswer": [0],
    "explanation": "Scrum es un marco integral. Si se omiten componentes, no se está practicando Scrum y se pierden sus beneficios."
  },
  {
    "question": "Los eventos de Scrum son:",
    "type": "multiple_choice",
    "options": [
      "Planificación de iteraciones, stand-up, arreglo personal, demos, retro",
      "Planificación de proyectos, informe diario, revisión de sprint, retrospectiva de sprint",
      "Planificación de sprints, Scrum diario, Sprint Review, Sprint Retrospective",
      "Planificación de sprints, monólogos diarios, demo de sprint, retrospectiva de sprint"
    ],
    "correctAnswer": [2],
    "explanation": "La Guía Scrum define formalmente estos 5 eventos (Sprint, Planning, Daily, Review y Retrospective)."
  },
  {
    "question": "¿Cuál es la duración máxima de un Sprint?",
    "type": "multiple_choice",
    "options": [
      "Un mes.",
      "Dos semanas.",
      "Seis semanas.",
      "No tiene duración máxima."
    ],
    "correctAnswer": [0],
    "explanation": "Según la Guía de Scrum, un Sprint es un evento de duración fija de un mes o menos para crear consistencia."
  },
  {
    "question": "¿Qué sucede al finalizar el Sprint?",
    "type": "multiple_choice",
    "options": [
      "El equipo se toma una semana de vacaciones.",
      "El incremento se entrega a producción obligatoriamente.",
      "El incremento debe estar 'terminado' según la Definición de 'Hecho'.",
      "Se hace una auditoría externa."
    ],
    "correctAnswer": [2],
    "explanation": "Un incremento terminado debe cumplir con la Definición de 'Hecho' al final de cada Sprint."
  },
  {
    "question": "¿Qué debe hacer el equipo si el Sprint Goal se vuelve obsoleto?",
    "type": "multiple_choice",
    "options": [
      "Continuar con el trabajo original.",
      "Cancelar el Sprint.",
      "El Product Owner puede cancelar el Sprint.",
      "Esperar a la retrospectiva."
    ],
    "correctAnswer": [2],
    "explanation": "Solo el Product Owner tiene la autoridad para cancelar el Sprint si el objetivo pierde su sentido."
  },
  {
    "question": "¿Quién decide qué elementos del Product Backlog entran en el Sprint?",
    "type": "multiple_choice",
    "options": [
      "El Product Owner.",
      "El Scrum Master.",
      "Los Desarrolladores.",
      "El equipo completo en consenso."
    ],
    "correctAnswer": [3],
    "explanation": "El Sprint Planning es un evento colaborativo; el Product Owner propone y los Desarrolladores determinan cuánto pueden realizar."
  },
  {
    "question": "¿Cuál es la responsabilidad principal del Scrum Master hacia la organización?",
    "type": "multiple_choice",
    "options": [
      "Liderar, entrenar y capacitar a la organización en Scrum.",
      "Escribir los requisitos de negocio.",
      "Supervisar el rendimiento individual de los desarrolladores.",
      "Contratar personal."
    ],
    "correctAnswer": [0],
    "explanation": "El Scrum Master es un líder servicial que ayuda a la organización a adoptar Scrum y entender su valor."
  },
  {
    "question": "¿Qué es el 'Backlog de Producto'?",
    "type": "multiple_choice",
    "options": [
      "Una lista de tareas de los desarrolladores.",
      "Un plan de proyecto detallado con fechas.",
      "Una lista emergente y ordenada de lo que se necesita para mejorar el producto.",
      "Una lista de errores pendientes."
    ],
    "correctAnswer": [2],
    "explanation": "Es la única fuente de trabajo para el equipo, es dinámico y se ordena para maximizar el valor."
  },
  {
    "question": "¿Cómo se mide el progreso hacia el Objetivo del Producto?",
    "type": "multiple_choice",
    "options": [
      "Mediante el seguimiento del Product Backlog.",
      "Mediante el presupuesto gastado.",
      "Mediante la velocidad de los desarrolladores.",
      "Mediante la opinión de los jefes."
    ],
    "correctAnswer": [0],
    "explanation": "El progreso se mide viendo el estado de los elementos del Product Backlog hacia el cumplimiento del Objetivo."
  },
  {
    "question": "¿Puede un equipo Scrum tener más de un Product Owner?",
    "type": "multiple_choice",
    "options": [
      "Sí, dependiendo de la complejidad.",
      "No, solo uno.",
      "Sí, uno por cada funcionalidad."
    ],
    "correctAnswer": [1],
    "explanation": "El Product Owner es una persona, no un comité."
  },
  {
    "question": "¿Quién debe participar en la Sprint Retrospective?",
    "type": "multiple_choice",
    "options": [
      "Solo los desarrolladores.",
      "El equipo Scrum completo.",
      "El Product Owner y los interesados.",
      "El Scrum Master y los desarrolladores."
    ],
    "correctAnswer": [1],
    "explanation": "La Retrospectiva es para que todo el Equipo Scrum inspeccione su proceso y mejore."
  },
  {
    "question": "¿Qué sucede si el trabajo del Sprint no se completa?",
    "type": "multiple_choice",
    "options": [
      "Se despide a los desarrolladores responsables.",
      "El Sprint se extiende automáticamente.",
      "El trabajo inacabado vuelve al Product Backlog.",
      "El Product Owner cancela el producto."
    ],
    "correctAnswer": [2],
    "explanation": "El trabajo que no cumple con la Definición de 'Hecho' vuelve al Product Backlog para ser reevaluado."
  },
  {
    "question": "¿Cuál es la función del 'Sprint Backlog'?",
    "type": "multiple_choice",
    "options": [
      "Una lista inmutable de tareas.",
      "Un plan creado por y para los desarrolladores para el Sprint.",
      "Un documento legal de compromiso.",
      "Una lista de todas las tareas futuras del año."
    ],
    "correctAnswer": [1],
    "explanation": "Es un plan altamente visible, en tiempo real, del trabajo que los desarrolladores planean realizar para cumplir el Sprint Goal."
  },
  {
    "question": "¿Qué es el 'Incremento'?",
    "type": "multiple_choice",
    "options": [
      "Una demo de lo que se hará.",
      "Un paso concreto hacia el Objetivo del Producto.",
      "La documentación final del proyecto.",
      "La lista de errores resueltos."
    ],
    "correctAnswer": [1],
    "explanation": "Cada incremento es un paso que debe estar 'terminado' y añadir valor real al producto."
  },
  {
    "question": "¿Cuánto debe durar el Daily Scrum?",
    "type": "multiple_choice",
    "options": [
      "30 minutos máximo.",
      "60 minutos.",
      "15 minutos máximo.",
      "Depende del tamaño del equipo."
    ],
    "correctAnswer": [2],
    "explanation": "Es un evento de 15 minutos para sincronizar el trabajo y planificar las próximas 24 horas."
  },
  {
    "question": "¿Quién facilita los eventos de Scrum si es necesario?",
    "type": "multiple_choice",
    "options": [
      "El Product Owner.",
      "El Scrum Master.",
      "El Líder Técnico.",
      "El cliente."
    ],
    "correctAnswer": [1],
    "explanation": "El Scrum Master se asegura de que los eventos se lleven a cabo y sean productivos."
  },
  {
    "question": "¿Puede el Product Backlog estar vacío?",
    "type": "multiple_choice",
    "options": [
      "No, debe tener al menos un elemento.",
      "Sí, al inicio.",
      "Sí, si el producto está terminado."
    ],
    "correctAnswer": [1],
    "explanation": "El Product Backlog es una lista viva que evoluciona, pero nunca está 'terminada' mientras el producto exista."
  },
  {
    "question": "¿Qué es la 'auto-gestión' en el equipo Scrum?",
    "type": "multiple_choice",
    "options": [
      "El equipo decide quién hace qué y cómo.",
      "El jefe decide qué hace el equipo.",
      "El Scrum Master asigna las tareas.",
      "Cada uno trabaja en lo que quiere."
    ],
    "correctAnswer": [0],
    "explanation": "Los equipos Scrum son responsables de gestionar su propio trabajo interno."
  },
  {
    "question": "¿Cuál de estos es un pilar del empirismo?",
    "type": "multiple_choice",
    "options": [
      "Planificación detallada.",
      "Transparencia.",
      "Jerarquía.",
      "Velocidad."
    ],
    "correctAnswer": [1],
    "explanation": "Los tres pilares son Transparencia, Inspección y Adaptación."
  },
  {
    "question": "¿Qué es el 'Objetivo del Producto'?",
    "type": "multiple_choice",
    "options": [
      "El presupuesto anual.",
      "La descripción de un estado futuro del producto.",
      "La suma de todas las horas trabajadas.",
      "Un hito de gestión."
    ],
    "correctAnswer": [1],
    "explanation": "Es el compromiso del Product Backlog; ayuda al equipo a saber por qué están construyendo el producto."
  },
  {
    "question": "¿El Sprint Planning es obligatorio?",
    "type": "multiple_choice",
    "options": [
      "Sí.",
      "No, es opcional.",
      "Solo si el cliente lo pide."
    ],
    "correctAnswer": [0],
    "explanation": "Todos los eventos definidos en la Guía Scrum son obligatorios."
  },
  {
    "question": "¿Qué es la 'transparencia' en Scrum?",
    "type": "multiple_choice",
    "options": [
      "Decirle al cliente solo lo bueno.",
      "Hacer que el proceso y el progreso sean visibles para los responsables del resultado.",
      "Publicar el sueldo de los desarrolladores."
    ],
    "correctAnswer": [1],
    "explanation": "La transparencia permite que se detecten desviaciones significativas a tiempo."
  },
  {
    "question": "¿Quién puede cancelar un Sprint?",
    "type": "multiple_choice",
    "options": [
      "Solo el Product Owner.",
      "Los desarrolladores por mayoría.",
      "El CEO de la empresa.",
      "El cliente."
    ],
    "correctAnswer": [0],
    "explanation": "Es una prerrogativa exclusiva del Product Owner."
  },
  {
    "question": "¿El Sprint Review es una presentación de diapositivas?",
    "type": "multiple_choice",
    "options": [
      "Sí, obligatoriamente.",
      "No, es un evento de colaboración.",
      "Solo si el equipo quiere."
    ],
    "correctAnswer": [1],
    "explanation": "Es una sesión de trabajo, no una presentación de ventas o una reunión de estatus."
  },
  {
    "question": "¿Qué es el 'refinamiento' del backlog?",
    "type": "multiple_choice",
    "options": [
      "La aprobación final del cliente.",
      "Acto de añadir detalle, estimaciones y orden a los elementos.",
      "Borrar elementos antiguos."
    ],
    "correctAnswer": [1],
    "explanation": "Es el proceso de desglosar y definir el trabajo para que esté 'listo' para futuros Sprints."
  },
  {
    "question": "¿Quién crea el plan del Sprint?",
    "type": "multiple_choice",
    "options": [
      "El Product Owner.",
      "El Scrum Master.",
      "Los Desarrolladores."
    ],
    "correctAnswer": [2],
    "explanation": "Los desarrolladores son responsables de crear el plan durante el Sprint Planning."
  },
  {
    "question": "¿Los equipos Scrum tienen roles jerárquicos internos?",
    "type": "multiple_choice",
    "options": [
      "Sí, el líder manda.",
      "No, es una unidad cohesiva de profesionales.",
      "Sí, hay un jefe de equipo."
    ],
    "correctAnswer": [1],
    "explanation": "Scrum se basa en la responsabilidad compartida y la falta de jerarquías internas."
  },
  {
    "question": "¿Qué es el 'Incremento' terminado?",
    "type": "multiple_choice",
    "options": [
      "Algo que el desarrollador cree que está listo.",
      "Algo que cumple la Definición de 'Hecho'.",
      "Algo que pasó las pruebas pero no el despliegue."
    ],
    "correctAnswer": [1],
    "explanation": "La Definición de 'Hecho' es el estándar de calidad compartido."
  },
  {
    "question": "¿El Scrum Master puede hacer tareas de desarrollo?",
    "type": "multiple_choice",
    "options": [
      "No, está prohibido.",
      "Sí, si el equipo lo necesita y no impide sus funciones.",
      "Solo si el Product Owner lo ordena."
    ],
    "correctAnswer": [1],
    "explanation": "Si bien es posible, su enfoque principal debe ser la efectividad del equipo Scrum."
  },
  {
    "question": "¿Qué ocurre en la 'Inspección' de Scrum?",
    "type": "multiple_choice",
    "options": [
      "Se juzga a los individuos.",
      "Se examinan los artefactos y el progreso hacia el objetivo.",
      "Se redactan contratos nuevos."
    ],
    "correctAnswer": [1],
    "explanation": "Se deben inspeccionar los artefactos de Scrum y el progreso hacia los objetivos acordados."
  },
  {
    "question": "¿Es necesario que el Product Backlog sea transparente?",
    "type": "multiple_choice",
    "options": [
      "Solo para el Product Owner.",
      "Sí, debe ser visible para todos los que participan en el proceso.",
      "No, debe mantenerse confidencial para la competencia."
    ],
    "correctAnswer": [1],
    "explanation": "La transparencia es un pilar de Scrum; los artefactos deben estar visibles para quienes los crean y quienes los utilizan."
  },
  {
    "question": "¿Qué sucede con el Product Backlog cuando un elemento se completa?",
    "type": "multiple_choice",
    "options": [
      "Se elimina permanentemente del sistema.",
      "Se mueve al historial del equipo.",
      "Se considera terminado y ya no forma parte del Product Backlog activo como trabajo pendiente."
    ],
    "correctAnswer": [2],
    "explanation": "Una vez completado, el elemento ya no es 'pendiente' y se convierte en parte del Incremento."
  },
  {
    "question": "¿Qué debe hacer el equipo si el cliente no asiste a la Sprint Review?",
    "type": "multiple_choice",
    "options": [
      "Cancelar la Review.",
      "Hacer la Review de todos modos, ya que es un evento para el Equipo y los interesados.",
      "Reprogramarla indefinidamente."
    ],
    "correctAnswer": [1],
    "explanation": "La Review es un evento de colaboración para inspeccionar el incremento; aunque la presencia de los interesados es vital, el equipo Scrum debe proceder para mantener el ritmo y la inspección."
  },
  {
    "question": "¿Qué es el 'Empirismo' en Scrum?",
    "type": "multiple_choice",
    "options": [
      "Basarse en planes a largo plazo.",
      "Basarse en la experiencia, la observación y la evidencia.",
      "Basarse en la jerarquía corporativa."
    ],
    "correctAnswer": [1],
    "explanation": "Scrum se fundamenta en el empirismo: el conocimiento proviene de la experiencia y de tomar decisiones basadas en lo que se conoce."
  },
  {
    "question": "¿Puede un equipo Scrum trabajar en varios productos a la vez?",
    "type": "multiple_choice",
    "options": [
      "Sí, es lo ideal para la productividad.",
      "No, el equipo Scrum se enfoca en un único Producto.",
      "Solo si el Scrum Master lo permite."
    ],
    "correctAnswer": [1],
    "explanation": "Un equipo Scrum tiene un solo Product Backlog y un solo Objetivo del Producto, lo que implica foco en un solo producto."
  },
  {
    "question": "¿Qué es la 'Adaptación' en Scrum?",
    "type": "multiple_choice",
    "options": [
      "Cambiar el alcance del proyecto arbitrariamente.",
      "Ajustar el proceso o el producto si se detecta una desviación significativa.",
      "Seguir el plan original a toda costa."
    ],
    "correctAnswer": [1],
    "explanation": "Si un aspecto del producto o proceso se desvía de los límites aceptables, el proceso o el material deben ajustarse inmediatamente."
  },
  {
    "question": "¿El equipo Scrum debe ser multifuncional?",
    "type": "multiple_choice",
    "options": [
      "Sí, deben tener todas las habilidades necesarias para crear un incremento.",
      "No, es mejor tener especialistas aislados.",
      "Solo en grandes empresas."
    ],
    "correctAnswer": [0],
    "explanation": "Los desarrolladores deben ser multifuncionales para poder entregar un incremento terminado sin depender de terceros externos al equipo."
  },
  {
    "question": "¿Quién es responsable de la calidad del producto?",
    "type": "multiple_choice",
    "options": [
      "Solo los testers.",
      "Solo el equipo de calidad.",
      "Todo el Equipo Scrum."
    ],
    "correctAnswer": [2],
    "explanation": "La calidad es responsabilidad colectiva; se formaliza mediante la 'Definición de Hecho'."
  },
  {
    "question": "¿Qué es un Sprint?",
    "type": "multiple_choice",
    "options": [
      "Un periodo de trabajo de 2 semanas exactas.",
      "El corazón de Scrum, un evento de duración fija.",
      "Una reunión de planificación."
    ],
    "correctAnswer": [1],
    "explanation": "Es un contenedor de todos los demás eventos, de duración fija, donde se genera valor."
  },
  {
    "question": "¿Qué es el 'Backlog de Sprint'?",
    "type": "multiple_choice",
    "options": [
      "Una lista de tareas de todo el año.",
      "El plan para el Sprint actual, que incluye el Objetivo, los elementos elegidos y el plan de trabajo.",
      "Un documento de requisitos."
    ],
    "correctAnswer": [1],
    "explanation": "Es la representación visible del trabajo que los desarrolladores planean completar en el Sprint."
  },
  {
    "question": "¿El Scrum Master debe asignar tareas a los desarrolladores?",
    "type": "multiple_choice",
    "options": [
      "Sí, para ser eficiente.",
      "No, el equipo es autogestionado.",
      "Solo a los nuevos miembros."
    ],
    "correctAnswer": [1],
    "explanation": "La asignación de tareas contradice el principio de autogestión de los desarrolladores."
  },
  {
    "question": "¿Qué es un 'Incremento'?",
    "type": "multiple_choice",
    "options": [
      "Una suma de valor que es un paso hacia el Objetivo del Producto.",
      "Una subida de sueldo.",
      "Un informe de progreso."
    ],
    "correctAnswer": [0],
    "explanation": "Es un paso concreto y utilizable hacia el objetivo final."
  },
  {
    "question": "¿Pueden los desarrolladores cambiar el plan durante el Sprint?",
    "type": "multiple_choice",
    "options": [
      "No, está prohibido.",
      "Sí, siempre que sea necesario para alcanzar el objetivo.",
      "Solo con permiso del cliente."
    ],
    "correctAnswer": [1],
    "explanation": "El alcance puede aclararse y renegociarse con el Product Owner a medida que se aprende más, siempre que no afecte el Sprint Goal."
  },
  {
    "question": "¿Qué sucede con el Product Backlog si el mercado cambia drásticamente?",
    "type": "multiple_choice",
    "options": [
      "Se mantiene igual para no perder el enfoque.",
      "Se reordena y ajusta para reflejar la nueva realidad.",
      "Se cierra el producto."
    ],
    "correctAnswer": [1],
    "explanation": "Es un artefacto dinámico que debe adaptarse a los cambios del mercado."
  },
  {
    "question": "¿El Scrum Master es un jefe de equipo?",
    "type": "multiple_choice",
    "options": [
      "Sí, tiene autoridad sobre los desarrolladores.",
      "No, es un líder servicial.",
      "Sí, pero solo sobre el Product Owner."
    ],
    "correctAnswer": [1],
    "explanation": "El Scrum Master no tiene autoridad jerárquica sobre los miembros del equipo."
  },
  {
    "question": "¿Es necesario el consenso para la Definición de Hecho?",
    "type": "multiple_choice",
    "options": [
      "Sí, todo el equipo debe estar de acuerdo.",
      "No, lo decide el Product Owner.",
      "No, lo decide el jefe técnico."
    ],
    "correctAnswer": [0],
    "explanation": "Debe haber una comprensión común de lo que significa 'terminado' para garantizar la calidad."
  },
  {
    "question": "¿Qué debe hacer el equipo durante la Sprint Review?",
    "type": "multiple_choice",
    "options": [
      "Presentar el trabajo hecho a los interesados.",
      "Discutir conflictos interpersonales.",
      "Planificar el próximo Sprint."
    ],
    "correctAnswer": [0],
    "explanation": "El propósito es mostrar lo que se ha logrado y colaborar en los próximos pasos del producto."
  },
  {
    "question": "¿Quién es el dueño del Objetivo del Sprint?",
    "type": "multiple_choice",
    "options": [
      "El Product Owner.",
      "El equipo Scrum en conjunto.",
      "El cliente."
    ],
    "correctAnswer": [1],
    "explanation": "Aunque el Product Owner define el valor, el equipo se compromete con el objetivo durante el Sprint Planning."
  },
  {
    "question": "¿Qué es la 'deuda técnica' en Scrum?",
    "type": "multiple_choice",
    "options": [
      "Una deuda bancaria.",
      "Trabajo no terminado o de baja calidad que afecta al incremento.",
      "Una característica nueva."
    ],
    "correctAnswer": [1],
    "explanation": "Es trabajo acumulado que debe gestionarse para no comprometer la calidad del incremento futuro."
  },
  {
    "question": "¿El Daily Scrum sirve para informar al Scrum Master?",
    "type": "multiple_choice",
    "options": [
      "Sí, es un informe de estatus.",
      "No, es para que los desarrolladores sincronicen su trabajo.",
      "Sí, sirve para que él actualice el plan."
    ],
    "correctAnswer": [1],
    "explanation": "El Daily es para los desarrolladores, no para el Scrum Master o el Product Owner."
  },
  {
    "question": "¿Qué es lo más importante en la Sprint Retrospective?",
    "type": "multiple_choice",
    "options": [
      "Asignar culpas por los errores cometidos.",
      "Identificar mejoras en la forma de trabajar del equipo.",
      "Calcular la productividad exacta de cada individuo."
    ],
    "correctAnswer": [1],
    "explanation": "El propósito es inspeccionar el proceso y acordar mejoras accionables para el siguiente Sprint."
  },
  {
    "question": "¿Qué sucede si un miembro del equipo Scrum es poco eficiente?",
    "type": "multiple_choice",
    "options": [
      "El Scrum Master lo sustituye de inmediato.",
      "El equipo debe autogestionarse para apoyarlo o resolver el problema.",
      "El Product Owner le asigna menos tareas."
    ],
    "correctAnswer": [1],
    "explanation": "Scrum se basa en la autogestión y el apoyo mutuo dentro de un equipo cohesionado."
  },
  {
    "question": "¿Quién puede decidir la cancelación del Product Backlog?",
    "type": "multiple_choice",
    "options": [
      "Nadie, el producto solo se termina si el valor cae a cero o el cliente lo decide.",
      "El Scrum Master.",
      "Los desarrolladores."
    ],
    "correctAnswer": [0],
    "explanation": "Un Product Backlog existe mientras exista el producto. No se 'cancela' a menos que el producto sea retirado."
  },
  {
    "question": "¿El Sprint Backlog puede cambiar durante el Sprint?",
    "type": "multiple_choice",
    "options": [
      "Nunca.",
      "Sí, a medida que los desarrolladores aprenden más sobre el trabajo necesario.",
      "Solo si el Product Owner lo autoriza por escrito."
    ],
    "correctAnswer": [1],
    "explanation": "El plan es dinámico y los desarrolladores pueden ajustarlo durante el Sprint para alcanzar el objetivo."
  },
  {
    "question": "¿Qué es la 'Velocidad'?",
    "type": "multiple_choice",
    "options": [
      "Un indicador oficial exigido por la Guía Scrum.",
      "Una métrica empírica que el equipo puede usar, pero no obligatoria en Scrum.",
      "La medida de la calidad del código."
    ],
    "correctAnswer": [1],
    "explanation": "La velocidad no es un concepto definido en la Guía Scrum oficial, aunque muchos equipos la utilizan voluntariamente."
  },
  {
    "question": "¿Qué rol es el responsable de asegurar que los eventos sean positivos y productivos?",
    "type": "multiple_choice",
    "options": [
      "El Product Owner.",
      "El Scrum Master.",
      "Los desarrolladores."
    ],
    "correctAnswer": [1],
    "explanation": "El Scrum Master es responsable de la efectividad del Equipo y de que los eventos se desarrollen correctamente."
  },
  {
    "question": "¿Cuándo se debe realizar la Retrospectiva?",
    "type": "multiple_choice",
    "options": [
      "Antes de la Sprint Review.",
      "Al finalizar el Sprint, después de la Review y antes del siguiente Planning.",
      "Cada vez que el equipo sienta que hay un conflicto."
    ],
    "correctAnswer": [1],
    "explanation": "Es el último evento del Sprint (antes del siguiente Planning)."
  },
  {
    "question": "¿Puede un equipo Scrum ser de más de 10 personas?",
    "type": "multiple_choice",
    "options": [
      "Sí, el tamaño no importa.",
      "Generalmente no; se recomienda un equipo pequeño (10 o menos) para mantener la agilidad.",
      "Solo si el proyecto es muy grande."
    ],
    "correctAnswer": [1],
    "explanation": "Equipos grandes generan demasiada complejidad de comunicación; la Guía recomienda 10 o menos."
  },
  {
    "question": "¿Es el 'Sprint Goal' un artefacto?",
    "type": "multiple_choice",
    "options": [
      "Sí.",
      "No, es el compromiso del Sprint Backlog.",
      "Es un evento."
    ],
    "correctAnswer": [1],
    "explanation": "El Sprint Goal es el compromiso del Sprint Backlog, tal como el Incremento es el compromiso de la Definición de Hecho."
  },
  {
    "question": "¿Quién debe asistir al Sprint Planning?",
    "type": "multiple_choice",
    "options": [
      "Solo el equipo Scrum.",
      "Todo el equipo Scrum y, opcionalmente, personas externas para asesorar.",
      "El jefe de la empresa."
    ],
    "correctAnswer": [1],
    "explanation": "El evento es para el equipo Scrum, pero pueden invitar a expertos para facilitar la planificación."
  },
  {
    "question": "¿El incremento debe ser entregable al final de cada Sprint?",
    "type": "multiple_choice",
    "options": [
      "Sí, obligatoriamente.",
      "Solo si el cliente está disponible.",
      "No, solo al final del proyecto."
    ],
    "correctAnswer": [0],
    "explanation": "El objetivo del Sprint es producir un incremento utilizable ('terminado')."
  },
  {
    "question": "¿Quién es responsable de la visión del producto?",
    "type": "multiple_choice",
    "options": [
      "El Product Owner.",
      "El Scrum Master.",
      "El equipo de ventas."
    ],
    "correctAnswer": [0],
    "explanation": "La visión y el valor son responsabilidad central del Product Owner."
  },
  {
    "question": "¿Qué significa que un equipo sea 'multifuncional'?",
    "type": "multiple_choice",
    "options": [
      "Que tienen los recursos necesarios para crear un incremento sin ayuda externa.",
      "Que todos saben hacer todo a la perfección.",
      "Que tienen muchas herramientas instaladas."
    ],
    "correctAnswer": [0],
    "explanation": "Significa no depender de especialistas de fuera del equipo Scrum."
  },
  {
    "question": "¿Se deben incluir los requisitos de rendimiento en el Product Backlog?",
    "type": "multiple_choice",
    "options": [
      "No, solo características funcionales.",
      "Sí, todos los requisitos que afecten al producto.",
      "Se deben poner en un documento aparte."
    ],
    "correctAnswer": [1],
    "explanation": "Todo el trabajo va al Product Backlog para su visibilidad y priorización."
  },
  {
    "question": "¿Qué pasa si el Scrum Master se ausenta durante el Sprint?",
    "type": "multiple_choice",
    "options": [
      "El Sprint se cancela.",
      "El equipo debe buscar la forma de seguir siendo autogestionado.",
      "El equipo debe dejar de trabajar hasta que vuelva."
    ],
    "correctAnswer": [1],
    "explanation": "El equipo Scrum es autogestionado y debe mantener el flujo."
  },
  {
    "question": "¿Es la 'reunión de estado' un evento Scrum?",
    "type": "multiple_choice",
    "options": [
      "Sí, el Daily Scrum es una reunión de estado.",
      "No, el Daily Scrum es para sincronización y planificación.",
      "Sí, es la Sprint Review."
    ],
    "correctAnswer": [1],
    "explanation": "El Daily no es para dar reportes al jefe, sino para sincronizar el trabajo de los desarrolladores."
  },
  {
    "question": "¿El Product Owner tiene que estar en el Daily Scrum?",
    "type": "multiple_choice",
    "options": [
      "Sí, es obligatorio.",
      "Solo si es desarrollador.",
      "No, no es necesario."
    ],
    "correctAnswer": [1],
    "explanation": "Solo los desarrolladores son obligatorios; otros pueden asistir si no interrumpen."
  },
  {
    "question": "¿Quién decide qué técnica de desarrollo usar?",
    "type": "multiple_choice",
    "options": [
      "El Scrum Master.",
      "Los desarrolladores.",
      "El Product Owner."
    ],
    "correctAnswer": [1],
    "explanation": "Los desarrolladores deciden el 'cómo' construir el incremento."
  },
  {
    "question": "¿Puede el Product Owner cambiar la prioridad del Backlog en medio del Sprint?",
    "type": "multiple_choice",
    "options": [
      "Sí, pero no debe afectar al Sprint Goal actual.",
      "No, nunca.",
      "Sí, puede cambiar todo el Sprint."
    ],
    "correctAnswer": [0],
    "explanation": "Los cambios no deben comprometer el objetivo del Sprint actual, pero el Backlog sí puede reordenarse."
  },
  {
    "question": "¿Es Scrum un método de desarrollo de software?",
    "type": "multiple_choice",
    "options": [
      "Sí, es una metodología rígida.",
      "No, es un marco de trabajo (framework) para resolver problemas complejos.",
      "Es un software de gestión."
    ],
    "correctAnswer": [1],
    "explanation": "Scrum es un marco de trabajo ligero para generar valor a través de soluciones adaptativas para problemas complejos."
  },
  {
    "question": "¿Quién crea la definición de \"hecho\"?",
    "type": "multiple_choice",
    "options": ["La organización de desarrollo.", "El Equipo Scrum, en un esfuerzo colaborativo.", "El Product Owner.", "El Scrum Master."],
    "correctAnswer": [1],
    "explanation": "Si la definición no es un estándar de la organización, el equipo Scrum debe definirla colaborativamente para asegurar la calidad del incremento."
  },
  {
    "question": "¿Debe estar presente el Product Owner en la retrospectiva de Sprint?",
    "type": "multiple_choice",
    "options": ["Solo si es invitado.", "Es obligatorio, es una oportunidad para todo el equipo.", "No está permitido."],
    "correctAnswer": [1],
    "explanation": "La Retrospectiva es una oportunidad para que todo el equipo Scrum, incluido el Product Owner, inspeccione el proceso y mejore."
  },
  {
    "question": "¿Cuál es la función principal de los gráficos de tipo 'Burn-down' dentro de un proyecto que utiliza Scrum?",
    "type": "multiple_choice",
    "options": ["Determinar el sueldo de los miembros del equipo según su rendimiento.", "Visualizar la cantidad de trabajo pendiente frente al tiempo disponible en el Sprint actual.", "Hacer un inventario de los materiales y equipos técnicos utilizados en el desarrollo.", "Calcular el número total de errores detectados en la fase de control de calidad."],
    "correctAnswer": [1],
    "explanation": "El gráfico de burn-down muestra la tendencia del trabajo restante a lo largo del tiempo durante el Sprint."
  },
  {
    "question": "¿Qué dinámicas definen mejor la colaboración entre el Product Owner y el equipo de desarrollo?",
    "type": "multiple_choice",
    "options": ["Una relación de supervisión donde el Product Owner da órdenes directas.", "Una colaboración constante para equilibrar el esfuerzo técnico y la entrega de valor al usuario.", "Una comunicación limitada para no interrumpir el trabajo de programación.", "Trabajar de forma totalmente aislada para evitar conflictos de intereses."],
    "correctAnswer": [1],
    "explanation": "La colaboración constante es esencial para que los desarrolladores entiendan las necesidades de valor y los usuarios reales."
  },
  {
    "question": "¿Por qué se considera una buena práctica que el Product Owner ordene el Product Backlog basándose en el valor?",
    "type": "multiple_choice",
    "options": ["Porque los puntos de valor son una métrica absoluta que nunca cambia.", "Porque es una forma de alinear el desarrollo con lo que el mercado realmente necesita.", "Porque los puntos de valor definen la complejidad técnica del sistema.", "Porque el reglamento de Scrum lo exige como requisito obligatorio para cualquier proyecto."],
    "correctAnswer": [1],
    "explanation": "Las estimaciones de valor son predicciones; el valor real se confirma únicamente mediante el uso y feedback real del mercado."
  },
  {
    "question": "¿Qué responsabilidades recaen específicamente sobre un equipo de desarrollo que se autogestiona?",
    "type": "multiple_choice",
    "options": ["Decidir el orden de prioridad del Product Backlog.", "Contratar o despedir a miembros del equipo según sea necesario.", "Estimar el esfuerzo técnico y desglosar el trabajo en tareas ejecutables.", "Definir los objetivos de negocio y financieros del producto."],
    "correctAnswer": [2],
    "explanation": "El equipo de desarrollo se autogestiona para decidir cómo realizar el trabajo, estimarlo y desglosarlo en tareas."
  },
  {
    "question": "¿Cómo es el nivel de detalle de los elementos del Product Backlog según su posición en la lista?",
    "type": "multiple_choice",
    "options": ["Todos los elementos deben tener siempre el mismo nivel de detalle, sin importar su prioridad.", "Los elementos inferiores tienen menos detalle porque están más alejados en el tiempo.", "Los elementos de abajo deben estar más detallados para no olvidarlos después.", "El nivel de detalle no importa, solo importa la fecha de creación del elemento."],
    "correctAnswer": [1],
    "explanation": "Los elementos menos prioritarios se detallan menos hasta que se acercan a la parte superior del backlog."
  },
  {
    "question": "¿Es correcto afirmar que la Revisión del Sprint es el único momento para recibir feedback de los interesados?",
    "type": "multiple_choice",
    "options": ["Sí, es la única forma de evitar que los interesados interrumpan el flujo de trabajo.", "No, el feedback es continuo y la Revisión es solo un evento formal de inspección.", "Sí, Scrum prohíbe el contacto con interesados fuera de este evento.", "No, el feedback se debe recoger únicamente mediante encuestas digitales automatizadas."],
    "correctAnswer": [1],
    "explanation": "El Product Owner interactúa con los interesados continuamente; la Revisión es solo un evento formal de inspección."
  },
  {
    "question": "Cuando existen varios equipos trabajando sobre el mismo producto, ¿quién es responsable de que sus entregas sean compatibles?",
    "type": "multiple_choice",
    "options": ["El equipo de control de calidad o QA de forma externa.", "Los equipos de desarrollo mediante la coordinación de su trabajo técnico.", "El Product Owner actuando como el único integrador técnico.", "El Scrum Master, quien debe realizar la integración de código."],
    "correctAnswer": [1],
    "explanation": "Es responsabilidad de los equipos de desarrollo integrar su trabajo en un único incremento utilizable."
  },
  {
    "question": "¿Por qué es fundamental para un Product Owner que exista una 'Definición de Hecho' clara?",
    "type": "multiple_choice",
    "options": ["Para saber exactamente qué tareas están pendientes de ser asignadas.", "Para asegurar que el incremento cumple con los estándares de calidad necesarios para ser publicado.", "Para controlar las horas exactas de trabajo de cada desarrollador.", "Para que el equipo tenga una lista de excusas si no terminan el trabajo a tiempo."],
    "correctAnswer": [1],
    "explanation": "La definición asegura que el incremento cumpla con el estándar de calidad necesario para su lanzamiento y visibilidad."
  },
  {
    "question": "¿Cómo se describiría de forma más precisa qué es un Product Backlog?",
    "type": "multiple_choice",
    "options": ["Es un conjunto de documentos legales que definen el contrato del proyecto.", "Es una lista estática de tareas que no puede ser alterada una vez iniciada.", "Es un artefacto vivo y dinámico con todo lo necesario para la evolución del producto.", "Es un informe de errores y fallos reportados por los usuarios finales."],
    "correctAnswer": [2],
    "explanation": "El Product Backlog es la lista única y dinámica de todo lo necesario para evolucionar el producto."
  },
  {
    "question": "¿Qué explica el fenómeno conocido como el 'Cono de la Incertidumbre' en el desarrollo de software?",
    "type": "multiple_choice",
    "options": ["Que al inicio de un proyecto se tiene menos información y, por tanto, mayor incertidumbre.", "Que la incertidumbre aumenta a medida que el equipo adquiere más conocimiento del producto.", "Que el éxito del proyecto depende totalmente de la capacidad de adivinación del Product Owner.", "Que la incertidumbre se mantiene igual desde el primer día hasta la entrega final."],
    "correctAnswer": [0],
    "explanation": "Al inicio del proyecto hay menos información, por lo que la incertidumbre es más alta."
  },
  {
    "question": "¿Cuál es la ventaja de que el Product Owner utilice Sprints cortos?",
    "type": "multiple_choice",
    "options": ["Permite tener un control jerárquico más estricto sobre el personal.", "Facilita la entrega frecuente de incrementos para probar hipótesis en el mercado real.", "Obliga al equipo a trabajar más rápido sin descanso.", "Es la mejor forma de evitar que el cliente cambie de opinión."],
    "correctAnswer": [1],
    "explanation": "La entrega frecuente de incrementos permite probar hipótesis frente al mercado real en cada ciclo."
  },
  {
    "question": "¿Quién es el responsable de definir el objetivo del Sprint antes de comenzar la reunión de Planificación?",
    "type": "multiple_choice",
    "options": ["El Scrum Master como facilitador del evento.", "El Product Owner como único dueño de la visión.", "Nadie, el objetivo se define de forma colaborativa durante la reunión de Planificación.", "El equipo de desarrollo basándose exclusivamente en sus preferencias técnicas."],
    "correctAnswer": [2],
    "explanation": "El objetivo del Sprint se define de manera colaborativa durante la Sprint Planning."
  },
  {
    "question": "¿Qué requisitos previos deben cumplirse obligatoriamente para iniciar la reunión de Planificación del Sprint?",
    "type": "multiple_choice",
    "options": ["Tener un documento de especificaciones técnicas completo.", "No existen condiciones previas obligatorias más allá de tener el equipo preparado.", "Tener el Backlog perfectamente refinado al 100%.", "Haber realizado una presentación ante todos los directivos de la empresa."],
    "correctAnswer": [1],
    "explanation": "Scrum es flexible; el equipo se reúne y define el trabajo para el Sprint durante el evento mismo."
  },
  {
    "question": "¿Es obligatorio publicar un incremento de producto al finalizar cada Sprint?",
    "type": "multiple_choice",
    "options": ["Sí, es la única forma de demostrar progreso a la empresa.", "No, la decisión de liberar depende de factores comerciales y estratégicos.", "Sí, si no se publica, el Sprint se considera un fracaso.", "No, porque los incrementos solo se publican una vez al año."],
    "correctAnswer": [1],
    "explanation": "El incremento debe ser 'terminado' (utilizable), pero la decisión de liberarlo al mercado depende de factores comerciales."
  },
  {
    "question": "¿Qué significa aplicar el concepto de 'aprendizaje validado' en el trabajo diario?",
    "type": "multiple_choice",
    "options": ["Que los desarrolladores deben estudiar nuevas tecnologías constantemente.", "Que la validación solo ocurre mediante exámenes de certificación profesional.", "Que se debe lanzar funcionalidad para medir la reacción real del mercado y ajustar el producto.", "Que el Product Owner debe aprobar todo basándose únicamente en su intuición."],
    "correctAnswer": [2],
    "explanation": "Validamos el aprendizaje al exponer el incremento al mercado y medir su reacción."
  },
  {
    "question": "¿Cómo debe actuar el Product Owner si considera que la definición de 'Hecho' necesita una mejora?",
    "type": "multiple_choice",
    "options": ["Debe cambiarla él mismo sin consultar a nadie.", "Debe plantearlo en la Retrospectiva para que el equipo lo discuta.", "Debe exigir al equipo que trabaje de forma diferente a partir de mañana.", "Debe ignorar el tema para no causar malestar en el equipo."],
    "correctAnswer": [1],
    "explanation": "La definición de hecho pertenece al equipo de desarrollo; cualquier cambio debe discutirse en la retrospectiva."
  },
  {
    "question": "¿Cómo impacta la deuda técnica en el trabajo de un Product Owner?",
    "type": "multiple_choice",
    "options": ["Aumenta los costos de mantenimiento y reduce la velocidad para nuevas funciones.", "No tiene impacto alguno, ya que es un tema puramente técnico del equipo.", "Hace que el producto sea imposible de vender en el mercado.", "Simplifica el proceso de trabajo al no tener que preocuparse por la calidad."],
    "correctAnswer": [0],
    "explanation": "La deuda técnica ralentiza la capacidad de entrega futura y aumenta el costo de operar el sistema."
  },
  {
    "question": "¿Es el Product Owner lo mismo que un Project Manager en la gestión tradicional?",
    "type": "multiple_choice",
    "options": ["Sí, ambos gestionan plazos, presupuestos y personas.", "No, el Product Owner se enfoca en el valor del producto, mientras que el PM tradicional gestiona recursos.", "Sí, es simplemente un cambio de nombre en las metodologías ágiles.", "No, porque el Product Owner no tiene ninguna responsabilidad en el proyecto."],
    "correctAnswer": [1],
    "explanation": "El Product Owner se enfoca en el valor del producto, mientras que el PM tradicional suele gestionar recursos, plazos y jerarquías."
  },
  {
    "question": "¿Puede el Product Owner delegar en otras personas la tarea de ordenar el Product Backlog?",
    "type": "multiple_choice",
    "options": ["No, es una tarea que debe realizar él solo sin ayuda.", "Sí, puede delegar el trabajo de gestión siempre que mantenga la visión final.", "Sí, pero solo si el equipo de desarrollo es muy pequeño.", "No, porque el Scrum Master es el único autorizado para tocar el Backlog."],
    "correctAnswer": [1],
    "explanation": "Aunque es responsable, puede delegar tareas de gestión mientras mantenga la propiedad final."
  },
  {
    "question": "¿Quién tiene la autoridad final para decidir qué constituye la definición de 'Hecho'?",
    "type": "multiple_choice",
    "options": ["El Product Owner.", "El equipo de desarrollo.", "El Scrum Master.", "La gerencia de la empresa."],
    "correctAnswer": [1],
    "explanation": "Es responsabilidad exclusiva del equipo de desarrollo, ya que ellos realizan el trabajo técnico."
  },
  {
    "question": "¿Quién tiene la autoridad para modificar el Sprint Backlog una vez iniciado el Sprint?",
    "type": "multiple_choice",
    "options": ["El equipo de desarrollo.", "El Product Owner.", "El Scrum Master.", "Los interesados del negocio."],
    "correctAnswer": [0],
    "explanation": "Solo los desarrolladores pueden modificar el plan de trabajo interno durante el Sprint."
  },
  {
    "question": "¿Es recomendable que el Product Owner y el Scrum Master pertenezcan al equipo de desarrollo?",
    "type": "multiple_choice",
    "options": ["Sí, es la configuración obligatoria en Scrum.", "No, sus roles siempre deben estar fuera del equipo técnico.", "No es lo ideal, pero pueden desempeñar múltiples roles si el contexto lo requiere.", "Sí, para que puedan controlar mejor todo el trabajo."],
    "correctAnswer": [2],
    "explanation": "Aunque no es lo ideal, pueden desempeñar múltiples roles simultáneamente si el contexto lo requiere."
  },
  {
    "question": "¿Es cierto que incluir más funciones en un producto siempre añade más valor?",
    "type": "multiple_choice",
    "options": ["Sí, a mayor cantidad de funciones, más valor para el usuario.", "No, el valor proviene de resolver problemas, no de añadir complejidad innecesaria.", "Sí, porque los usuarios siempre piden más botones y opciones.", "No, solo añade valor si las funciones tienen un color atractivo."],
    "correctAnswer": [1],
    "explanation": "El valor proviene de resolver problemas, no de la cantidad de funciones, que pueden añadir complejidad innecesaria."
  },
  {
    "question": "¿Cuáles son algunas actividades típicas de un Product Owner durante el transcurso de un Sprint?",
    "type": "multiple_choice",
    "options": ["Realizar el refinamiento del Backlog y colaborar con los interesados.", "Supervisar las horas exactas de trabajo de cada desarrollador.", "Escribir personalmente el código de todo el producto.", "Gestionar las vacaciones y salarios del personal."],
    "correctAnswer": [0],
    "explanation": "El Product Owner dedica tiempo a mantener el backlog claro y a entender las necesidades del negocio/interesados."
  },
  {
    "question": "¿Puede el Product Owner posponer el inicio de un nuevo Sprint?",
    "type": "multiple_choice",
    "options": ["Sí, si el Backlog no está completamente listo.", "No, los Sprints son consecutivos y deben comenzar uno tras otro.", "Sí, para que el equipo pueda tomarse un descanso.", "No, solo si el cliente final lo autoriza."],
    "correctAnswer": [1],
    "explanation": "Los Sprints son consecutivos; uno comienza inmediatamente después del otro."
  },
  {
    "question": "¿Qué debe hacer el Product Owner si observa que el equipo no terminará los elementos del Sprint?",
    "type": "multiple_choice",
    "options": ["Ajustar el alcance de forma colaborativa para mantener la calidad.", "Cancelar el Sprint inmediatamente.", "Forzar al equipo a trabajar horas extra.", "Eliminar los elementos de la lista sin consultar."],
    "correctAnswer": [0],
    "explanation": "El Product Owner colabora para ajustar el alcance de forma que se pueda cumplir con el objetivo del Sprint de forma realista."
  },
  {
    "question": "¿Se debe evitar el conflicto dentro de un equipo Scrum a toda costa?",
    "type": "multiple_choice",
    "options": ["Sí, es una señal de falta de profesionalismo.", "No, el conflicto constructivo ayuda a explorar ideas y alinear objetivos.", "Sí, un equipo debe estar siempre de acuerdo en todo.", "No, el conflicto sirve para demostrar quién tiene más autoridad."],
    "correctAnswer": [1],
    "explanation": "El conflicto constructivo ayuda a explorar ideas y alinear los objetivos del producto."
  },
  {
    "question": "¿Quién tiene la responsabilidad principal de estimar el esfuerzo del Product Backlog?",
    "type": "multiple_choice",
    "options": ["El equipo de desarrollo.", "El Product Owner.", "El Scrum Master.", "Los interesados."],
    "correctAnswer": [0],
    "explanation": "Los desarrolladores son los únicos que conocen la complejidad técnica necesaria para realizar el trabajo."
  },
  {
    "question": "¿Cuál es la actitud correcta del Product Owner ante los grupos de interés?",
    "type": "multiple_choice",
    "options": ["Solicitar feedback activo para entender qué necesitan.", "Aceptar sin cuestionar todas las peticiones que hagan.", "Limitar la comunicación a una vez al mes.", "Delegar la relación con ellos al Scrum Master."],
    "correctAnswer": [0],
    "explanation": "El Product Owner debe ser proactivo en recolectar información y feedback de los interesados para maximizar el valor."
  },
  {
    "question": "¿Qué ocurre con los elementos que no cumplen la definición de 'Hecho' al final de un Sprint?",
    "type": "multiple_choice",
    "options": ["Deben volver al Product Backlog para ser reevaluados y priorizados.", "Se consideran automáticamente completados al siguiente Sprint.", "Se descartan permanentemente del producto.", "Se lanzan al mercado como una versión beta."],
    "correctAnswer": [0],
    "explanation": "Cualquier trabajo inacabado debe reevaluarse y priorizarse de nuevo en el backlog."
  },
  {
    "question": "¿Puede el Product Owner delegar algunas de sus responsabilidades?",
    "type": "multiple_choice",
    "options": ["Sí, aunque la rendición de cuentas final sigue siendo del Product Owner.", "No, bajo ninguna circunstancia.", "Sí, pero pierde su autoridad frente al equipo.", "No, porque es un rol técnico puro."],
    "correctAnswer": [0],
    "explanation": "Delegar tareas es posible, pero la rendición de cuentas sigue siendo del Product Owner."
  },
  {
    "question": "¿Qué sucede con el alcance del trabajo mientras el equipo desarrolla el Sprint?",
    "type": "multiple_choice",
    "options": ["El alcance se aclara a medida que hay más información.", "El alcance se bloquea y es inamovible.", "El alcance debe crecer obligatoriamente cada día.", "El alcance desaparece porque el equipo trabaja a ciegas."],
    "correctAnswer": [0],
    "explanation": "A medida que el equipo aprende, el alcance se refina para mejorar el producto."
  },
  {
    "question": "¿Quién está mejor posicionado para conocer el progreso empresarial del producto?",
    "type": "multiple_choice",
    "options": ["El Product Owner, por su enlace directo con el negocio.", "El equipo de desarrollo por la cantidad de código escrito.", "El Scrum Master, al ser el observador del proceso.", "El cliente, mediante el pago de facturas."],
    "correctAnswer": [0],
    "explanation": "El Product Owner es el enlace directo con el negocio y debe entender las metas financieras y estratégicas."
  },
  {
    "question": "¿Cuáles son las prácticas obligatorias de seguimiento de progreso en Scrum?",
    "type": "multiple_choice",
    "options": ["Uso obligatorio de gráficas Burn-down.", "Uso obligatorio de reportes de Velocity.", "No existen prácticas obligatorias de progreso; el equipo elige lo que les da transparencia.", "Uso obligatorio de seguimiento por horas por persona."],
    "correctAnswer": [2],
    "explanation": "Scrum no obliga al uso de gráficos específicos; el equipo elige lo que les dé transparencia."
  },
  {
    "question": "¿Cómo determina una organización si está teniendo éxito con su producto?",
    "type": "multiple_choice",
    "options": ["Por el número de funciones entregadas al mes.", "Por la entrega constante de valor real probada por el feedback del mercado.", "Por la velocidad técnica registrada en los reportes.", "Por la cantidad de horas extras que realiza el equipo."],
    "correctAnswer": [1],
    "explanation": "El éxito se mide mediante la entrega de valor real probada por métricas y feedback tras el lanzamiento."
  },
  {
    "question": "¿Cuál es la responsabilidad principal del Product Owner?",
    "type": "multiple_choice",
    "options": ["Maximizar el valor del producto y el retorno de la inversión.", "Coordinar todas las tareas técnicas del equipo.", "Escribir toda la documentación técnica detallada.", "Asegurarse de que el equipo no tenga días de descanso."],
    "correctAnswer": [0],
    "explanation": "El foco principal del Product Owner es el retorno de la inversión y la maximización del valor del producto."
  },
  {
    "question": "¿Cómo debe ser vista la autoridad del Product Owner sobre el Backlog?",
    "type": "multiple_choice",
    "options": ["Debe ser respetada por toda la organización.", "Debe ser siempre validada por un comité.", "Es solo una sugerencia para el equipo técnico.", "Es inexistente, ya que el equipo manda."],
    "correctAnswer": [0],
    "explanation": "La autoridad del Product Owner debe ser respetada por toda la organización para que sus decisiones tengan efecto real."
  },
  {
    "question": "¿Cuál es el enfoque de Scrum sobre las 'líneas base' (baselining) estáticas?",
    "type": "multiple_choice",
    "options": ["Scrum las evita, prefiriendo la adaptación constante.", "Son obligatorias al inicio del proyecto.", "Se deben actualizar cada mes por la gerencia.", "Son la única forma de medir el éxito."],
    "correctAnswer": [0],
    "explanation": "Scrum evita las líneas base estáticas, prefiriendo la adaptación constante."
  },
  {
    "question": "¿Es el valor del producto algo que se mide exclusivamente a través de los ingresos económicos?",
    "type": "multiple_choice",
    "options": ["Sí, es la única métrica válida.", "No, el valor incluye satisfacción, cuota de mercado, ahorro de costos, aprendizaje, etc.", "Sí, el resto son métricas subjetivas.", "No, el valor no se puede medir bajo ninguna circunstancia."],
    "correctAnswer": [1],
    "explanation": "El valor puede ser cuota de mercado, satisfacción, ahorro de costos, aprendizaje, etc."
  },
  {
    "question": "¿Es necesario diseñar todas las pruebas de aceptación antes de comenzar el desarrollo?",
    "type": "multiple_choice",
    "options": ["Sí, si no se hace así, hay riesgo de errores.", "No, Scrum fomenta el refinamiento Just-in-Time.", "Sí, forma parte de los requisitos de calidad.", "No, el desarrollo no requiere pruebas de aceptación."],
    "correctAnswer": [1],
    "explanation": "Scrum fomenta el refinamiento Just-in-Time; no es necesario diseñar todo al principio."
  },
  {
    "question": "¿Se puede empezar el primer Sprint sin tener el Product Backlog completo?",
    "type": "multiple_choice",
    "options": ["Sí, solo se requiere suficiente detalle para empezar.", "No, es imposible empezar sin todo definido.", "Sí, siempre y cuando el equipo acepte trabajar gratis.", "No, el Backlog debe ser perfecto desde el día uno."],
    "correctAnswer": [0],
    "explanation": "Solo se requiere suficiente detalle para empezar el primer Sprint; el backlog crece y evoluciona."
  },
  {
    "question": "¿Qué debe hacer el Product Owner si el equipo no puede terminar el trabajo del Sprint?",
    "type": "multiple_choice",
    "options": ["Cancelar el Sprint de inmediato.", "Ajustar el alcance de manera honesta y realista.", "Pedir al equipo que trabaje en sus casas.", "Ignorar el tema y presionar por más velocidad."],
    "correctAnswer": [1],
    "explanation": "Se debe colaborar para salvar el objetivo del Sprint o renegociar el alcance de forma honesta."
  },
  {
    "question": "¿Se permiten requisitos técnicos dentro del Product Backlog?",
    "type": "multiple_choice",
    "options": ["Sí, cualquier trabajo necesario para el producto pertenece al Backlog.", "No, los requisitos técnicos deben ir en un documento aparte.", "Sí, pero solo si no son importantes.", "No, el Backlog es exclusivo para funcionalidades de usuario."],
    "correctAnswer": [0],
    "explanation": "Cualquier trabajo necesario para el producto, técnico o funcional, pertenece al Product Backlog."
  },
  {
    "question": "¿Cuánto tiempo debe pasar el Product Owner con el equipo de desarrollo?",
    "type": "multiple_choice",
    "options": ["Todo el tiempo que sea necesario para asegurar el éxito.", "Un porcentaje fijo del 100% sin excepciones.", "Lo menos posible para no distraerlos.", "Solo el tiempo estipulado en las ceremonias."],
    "correctAnswer": [0],
    "explanation": "El Product Owner debe estar disponible tanto como requiera el equipo para asegurar el éxito, no un porcentaje fijo."
  },
  {
    "question": "¿Cuál es el tiempo máximo de duración de la reunión de Planificación para un Sprint de 3 semanas?",
    "type": "multiple_choice",
    "options": ["8 horas.", "4 horas.", "6 horas.", "12 horas."],
    "correctAnswer": [2],
    "explanation": "El límite máximo es de 8 horas para un Sprint de un mes; para Sprints menores, es proporcional."
  },
  {
    "question": "¿Qué inversiones debe considerar un Product Owner al evaluar su producto?",
    "type": "multiple_choice",
    "options": ["Solo el costo de desarrollo.", "El costo total de propiedad (desarrollo y mantenimiento).", "Solo los costos de comercialización.", "Solo el costo de los salarios mensuales."],
    "correctAnswer": [1],
    "explanation": "El Product Owner considera el coste total de propiedad y el valor de operar y mantener el producto."
  },
  {
    "question": "¿Qué debe hacer el Product Owner si el equipo no entiende las expectativas de un elemento?",
    "type": "multiple_choice",
    "options": ["Dedicar tiempo a explicar y aclarar los elementos.", "Pedir al Scrum Master que se encargue del equipo.", "Dejar que el equipo interprete a su manera.", "Sancionar al equipo por no entender."],
    "correctAnswer": [0],
    "explanation": "Es responsabilidad directa del Product Owner asegurar que los desarrolladores comprendan los elementos del backlog."
  },
  {
    "question": "¿Qué tipo de estructura fomenta la formación de equipos de trabajo cohesionados?",
    "type": "multiple_choice",
    "options": ["Equipos con habilidades mixtas y multifuncionales.", "Equipos formados exclusivamente por especialistas técnicos.", "Equipos jerárquicos donde cada uno tiene un jefe.", "Equipos que cambian cada Sprint."],
    "correctAnswer": [0],
    "explanation": "Los equipos deben ser multifuncionales y capaces de completar trabajo sin dependencias."
  },
  {
    "question": "¿Qué variables son fundamentales para el Product Owner al ordenar el Backlog?",
    "type": "multiple_choice",
    "options": ["Valor y objetivos de negocio.", "La disponibilidad de los mejores empleados.", "La facilidad técnica.", "Las preferencias personales de los clientes."],
    "correctAnswer": [0],
    "explanation": "El orden se basa en lo que aporte más valor para lograr el objetivo del producto."
  },
  {
    "question": "¿Cuál es el rol fundamental que define a un Product Owner?",
    "type": "multiple_choice",
    "options": ["Ser el maximizador de valor del producto.", "Ser el analista jefe de sistemas.", "Ser el gestor de recursos del equipo.", "Ser el coordinador de pruebas."],
    "correctAnswer": [0],
    "explanation": "La función principal es ser el dueño de la visión y maximizador de valor del producto."
  },
  {
    "question": "¿Son obligatorios todos los eventos definidos en Scrum?",
    "type": "multiple_choice",
    "options": ["Sí, son obligatorios.", "No, el equipo puede elegir cuáles ignorar.", "Solo los que el jefe de proyecto indique.", "Son opcionales."],
    "correctAnswer": [0],
    "explanation": "Todos los eventos son obligatorios para garantizar la transparencia y el empirismo."
  },
  {
    "question": "¿Qué sucede si el Product Owner no está disponible para el equipo?",
    "type": "multiple_choice",
    "options": ["El equipo pierde dirección y capacidad de tomar decisiones sobre el producto.", "Es necesario nombrar a alguien más de inmediato.", "El trabajo se detiene por completo.", "El Scrum Master debe hacer todo el trabajo del Product Owner."],
    "correctAnswer": [0],
    "explanation": "El rol es crítico; si no hay Product Owner,el equipo pierde dirección y capacidad de tomar decisiones sobre el producto."
  },
  {
    "question": "¿Cuál es la responsabilidad central del Product Owner hacia el equipo?",
    "type": "multiple_choice",
    "options": ["Maximizar el valor del trabajo del equipo Scrum.", "Escribir historias de usuario de forma tediosa.", "Coordinar las reuniones sociales del equipo.", "Controlar el rendimiento individual de cada desarrollador."],
    "correctAnswer": [0],
    "explanation": "Su foco es maximizar el valor del trabajo del equipo Scrum mediante un Product Backlog eficiente."
  },
  {
    "question": "¿Cómo se gestiona la 'Definición de Hecho' cuando trabajan varios equipos a la vez?",
    "type": "multiple_choice",
    "options": ["Deben ser compatibles entre ellos para un incremento integrado.", "Cada equipo decide la suya sin mirar a los demás.", "Solo importa la definición del equipo más antiguo.", "Todos los equipos deben tener exactamente la misma definición sin cambios."],
    "correctAnswer": [0],
    "explanation": "Diferentes equipos pueden tener diferentes definiciones, pero deben ser compatibles para crear un incremento integrado."
  },
  {
    "question": "¿Cada cuánto tiempo se debe actualizar el Product Backlog?",
    "type": "multiple_choice",
    "options": ["En cualquier momento que aparezca nueva información.", "Solo durante las sesiones formales de refinamiento.", "Solo cuando un jefe da la orden.", "Una vez al año."],
    "correctAnswer": [0],
    "explanation": "El Backlog es dinámico y se ajusta continuamente cuando hay nueva información."
  },
  {
    "question": "¿Cómo se debe actuar ante una baja velocidad o errores en el desarrollo?",
    "type": "multiple_choice",
    "options": ["Gestionar la realidad siendo transparente y no liberando trabajo incompleto.", "Cancelar el Sprint sin dar explicaciones.", "Ocultar la información a los interesados.", "Aumentar la presión sobre el equipo."],
    "correctAnswer": [0],
    "explanation": "Se debe ser transparente: si el incremento no es 'Hecho', no se puede liberar y se debe gestionar esa realidad."
  },
  {
    "question": "¿Cómo utiliza el Product Owner la inspección durante el Sprint?",
    "type": "multiple_choice",
    "options": ["Revisión del Sprint y reuniones con interesados.", "Revisando el código línea por línea.", "Invitando a interesados a ver el progreso.", "Todas las anteriores."],
    "correctAnswer": [0, 2],
    "explanation": "El Product Owner usa estos foros para inspeccionar el avance y recolectar feedback de los grupos de interés."
  },
  {
    "question": "¿Qué ocurre con el Product Backlog cuando las necesidades del mercado cambian?",
    "type": "multiple_choice",
    "options": ["El Backlog evoluciona constantemente.", "El Backlog se mantiene sin cambios.", "El producto debe cerrarse.", "El equipo ignora los cambios."],
    "correctAnswer": [0],
    "explanation": "El Backlog refleja el estado actual de las necesidades del mercado."
  },
  {
    "question": "¿Cuáles son las formas principales en las que un Product Owner asegura la creación de valor?",
    "type": "multiple_choice",
    "options": ["Orden del Backlog y publicaciones frecuentes.", "Solo aceptando funcionalidad.", "Escribiendo documentación.", "Controlando a los desarrolladores."],
    "correctAnswer": [0],
    "explanation": "Priorizar el backlog y probar en el mercado son las formas principales de asegurar la creación de valor."
  },
  {
    "question": "¿Pueden los interesados decidir el orden del Product Backlog?",
    "type": "multiple_choice",
    "options": ["No, el Product Owner tiene la decisión final.", "Sí, si son los que pagan el proyecto.", "Sí, siempre.", "No, el equipo técnico es quien decide."],
    "correctAnswer": [0],
    "explanation": "Los interesados pueden opinar, pero el Product Owner es el único con la decisión final sobre el orden del backlog."
  },
  {
    "question": "¿Quiénes forman parte del Equipo Scrum?",
    "type": "multiple_choice",
    "options": [
      "Product Owner",
      "Scrum Master",
      "Desarrolladores",
      "Project Manager"
    ],
    "correctAnswer": [0, 1, 2],
    "explanation": "El equipo Scrum está compuesto únicamente por Product Owner, Scrum Master y Desarrolladores."
  },
  {
    "question": "¿Son útiles los Hardening Sprints (Sprints de estabilización)?",
    "type": "multiple_choice",
    "options": [
      "Falso.",
      "Cierto.",
      "Depende del proyecto.",
      "Solo al final del producto."
    ],
    "correctAnswer": [0],
    "explanation": "En Scrum cada Sprint debe entregar un incremento terminado, por lo que no se necesitan Sprints de estabilización."
  },
  {
    "question": "Si se cancela un Sprint, ¿qué ocurre con los elementos que están terminados?",
    "type": "multiple_choice",
    "options": [
      "Son evaluados y aceptados por el Product Owner.",
      "Se descartan automáticamente.",
      "Se dejan para el siguiente Sprint sin revisión.",
      "Se eliminan del backlog."
    ],
    "correctAnswer": [0],
    "explanation": "Los elementos terminados pueden ser aceptados si cumplen la definición de Hecho."
  },
  {
    "question": "Si el backlog no está completo al inicio del primer Sprint, ¿qué se debe hacer?",
    "type": "multiple_choice",
    "options": [
      "Aclarar los elementos necesarios para el primer Sprint.",
      "Realizar un Sprint 0 obligatorio.",
      "Esperar a completar todo el backlog.",
      "Cancelar el inicio del proyecto."
    ],
    "correctAnswer": [0],
    "explanation": "Solo se necesita suficiente claridad para comenzar el trabajo del primer Sprint."
  },
  {
    "question": "¿Cuál es el propósito de la definición de 'Hecho' (Definition of Done)?",
    "type": "multiple_choice",
    "options": [
      "Aportar transparencia.",
      "Servir como guía para el equipo.",
      "Reducir documentación.",
      "Evitar revisiones."
    ],
    "correctAnswer": [0, 1],
    "explanation": "Define qué significa que un incremento esté completo y garantiza entendimiento común."
  },
  {
    "question": "¿Se puede usar un gráfico Burn-up en lugar de Burn-down?",
    "type": "multiple_choice",
    "options": [
      "Sí, no hay problema.",
      "No, es obligatorio usar Burn-down.",
      "Solo el Scrum Master puede decidirlo.",
      "Depende del cliente."
    ],
    "correctAnswer": [0],
    "explanation": "Scrum no prescribe herramientas específicas, solo transparencia."
  },
  {
    "question": "¿El Product Owner puede delegar la estimación del trabajo?",
    "type": "multiple_choice",
    "options": [
      "No, es responsabilidad del equipo de desarrollo.",
      "Sí, siempre.",
      "Solo al Scrum Master.",
      "Solo a los stakeholders."
    ],
    "correctAnswer": [0],
    "explanation": "La estimación es una actividad técnica que corresponde al equipo de desarrollo."
  },
  {
    "question": "¿Quién actualiza el trabajo restante durante el Sprint?",
    "type": "multiple_choice",
    "options": [
      "Equipo de desarrollo.",
      "Product Owner.",
      "Scrum Master.",
      "Stakeholders."
    ],
    "correctAnswer": [0],
    "explanation": "Los desarrolladores gestionan y actualizan su plan de trabajo."
  },
  {
    "question": "¿Qué actividades son responsabilidad del Product Owner?",
    "type": "multiple_choice",
    "options": [
      "Priorizar el Product Backlog.",
      "Desglosar historias o elementos.",
      "Asignar tareas al equipo.",
      "Controlar horarios del equipo."
    ],
    "correctAnswer": [0, 1],
    "explanation": "El Product Owner gestiona el valor mediante el orden y claridad del backlog."
  },
  {
    "question": "¿Cuáles son los requisitos mínimos para iniciar el primer Sprint?",
    "type": "multiple_choice",
    "options": [
      "Proyecto completamente planificado.",
      "Equipo Scrum completo (PO, Scrum Master y desarrolladores).",
      "Solo el Product Owner.",
      "Solo el equipo de desarrollo."
    ],
    "correctAnswer": [1],
    "explanation": "Sin el equipo Scrum completo no se puede aplicar Scrum."
  },
  {
    "question": "¿Cuál es el objetivo principal de la Sprint Retrospective?",
    "type": "multiple_choice",
    "options": [
      "Inspeccionar y mejorar el proceso.",
      "Definir requisitos.",
      "Planificar el siguiente Sprint.",
      "Evaluar rendimiento individual."
    ],
    "correctAnswer": [0],
    "explanation": "La retrospectiva busca mejorar continuamente la forma de trabajar."
  },
  {
    "question": "Respecto al tiempo de la Sprint Retrospective:",
    "type": "multiple_choice",
    "options": [
      "Máximo 3 horas para un Sprint de un mes.",
      "Siempre 1 hora.",
      "No tiene límite.",
      "Depende del Product Owner."
    ],
    "correctAnswer": [0],
    "explanation": "Está time-boxed a 3 horas en un Sprint de un mes."
  },
  {
    "question": "¿Cómo afecta la deuda técnica al Product Owner?",
    "type": "multiple_choice",
    "options": [
      "Aumenta el coste total del producto.",
      "No tiene impacto.",
      "Reduce el alcance.",
      "Mejora la calidad."
    ],
    "correctAnswer": [0],
    "explanation": "Incrementa el coste de mantenimiento y reduce la capacidad futura."
  },
  {
    "question": "¿Puede el Product Owner delegar responsabilidades?",
    "type": "multiple_choice",
    "options": [
      "Sí, pero mantiene la responsabilidad final.",
      "No, nunca.",
      "Solo al Scrum Master.",
      "Solo al equipo técnico."
    ],
    "correctAnswer": [0],
    "explanation": "Puede delegar tareas, pero no la responsabilidad final."
  },
  {
    "question": "¿El Product Owner dedica un porcentaje fijo (ej. 10%) al refinamiento?",
    "type": "multiple_choice",
    "options": [
      "No, dedica el tiempo necesario.",
      "Sí, siempre el 10%.",
      "Sí, solo al inicio.",
      "Depende del Scrum Master."
    ],
    "correctAnswer": [0],
    "explanation": "El refinamiento no tiene un porcentaje fijo para el Product Owner."
  },
  {
    "question": "Un equipo autoorganizado durante el Sprint:",
    "type": "multiple_choice",
    "options": [
      "Replanifica colaborativamente.",
      "Crea el Sprint Backlog.",
      "Depende completamente del Product Owner.",
      "No puede cambiar el plan."
    ],
    "correctAnswer": [0, 1],
    "explanation": "El equipo gestiona su propio trabajo y planificación."
  },
  {
    "question": "¿Existe una relación directa entre velocidad y valor?",
    "type": "multiple_choice",
    "options": [
      "No necesariamente.",
      "Sí, más velocidad siempre es más valor.",
      "Solo en proyectos grandes.",
      "Depende del Scrum Master."
    ],
    "correctAnswer": [0],
    "explanation": "El valor depende de hacer lo correcto, no solo rápido."
  },
  {
    "question": "¿Cuál es el tamaño recomendado de un equipo Scrum?",
    "type": "multiple_choice",
    "options": [
      "10 o menos personas.",
      "Sin límite.",
      "Más de 15 personas.",
      "Exactamente 5 personas."
    ],
    "correctAnswer": [0],
    "explanation": "Equipos pequeños favorecen la comunicación y eficiencia."
  },
  {
    "question": "¿Quién es responsable del Product Backlog?",
    "type": "multiple_choice",
    "options": [
      "Product Owner.",
      "Scrum Master.",
      "Equipo de desarrollo.",
      "Stakeholders."
    ],
    "correctAnswer": [0],
    "explanation": "El Product Owner es el único responsable del backlog."
  },
  {
    "question": "Si un elemento del Sprint Backlog no puede terminarse antes de que termine el Sprint, el Sprint se cancela.",
    "type": "multiple_choice",
    "options": ["Cierto", "Falso"],
    "correctAnswer": [1],
    "explanation": "El Sprint solo se cancela en caso de que el Sprint Goal quede obsoleto. Si no se podía realizar algún trabajo, el Sprint Backlog debería renegociarse entre el Product Owner y el equipo de desarrollo."
  },
  {
    "question": "El equipo de Scrum está formado por:",
    "type": "multiple_choice",
    "options": ["El Product Owner", "Los principales actores", "El Scrum Master", "El equipo de desarrollo"],
    "correctAnswer": [0, 2, 3],
    "explanation": "El equipo Scrum está formado por un Product Owner, el equipo de desarrollo y un Scrum Master."
  },
  {
    "question": "¿Qué compone Scrum? (seleccionar cuatro)",
    "type": "multiple_choice",
    "options": ["Roles", "Informes", "Listas de quemado", "Eventos", "Artefactos", "Reglas"],
    "correctAnswer": [0, 3, 4, 5],
    "explanation": "El marco Scrum consta de los equipos Scrum y sus roles, eventos, artefactos y reglas asociados."
  },
  {
    "question": "¿Quién puede hacer cambios en el Product Backlog?",
    "type": "multiple_choice",
    "options": ["Cualquiera", "El Product Owner", "El Scrum Master", "Los principales actores", "El equipo de desarrollo, pero con permiso del Product Owner"],
    "correctAnswer": [1, 4],
    "explanation": "El Product Owner es la única persona responsable del Product Backlog, aunque puede delegar parte del trabajo al equipo de desarrollo."
  },
  {
    "question": "¿Quién es responsable de supervisar el progreso hacia objetivos de alto nivel?",
    "type": "multiple_choice",
    "options": ["El Scrum Master y el Equipo de Desarrollo", "El Scrum Master", "El Product Owner y el equipo de desarrollo", "El Scrum Team", "El equipo de desarrollo", "El Product Owner"],
    "correctAnswer": [5],
    "explanation": "El Product Owner registra el trabajo total restante al menos en cada revisión de Sprint para evaluar el progreso hacia la finalización."
  },
  {
    "question": "Al final de la Planificación del Sprint, el equipo de desarrollo debería ser capaz de explicar al Product Owner y al Scrum Master cómo pretende trabajar como un equipo autoorganizado.",
    "type": "multiple_choice",
    "options": ["Falso", "Cierto"],
    "correctAnswer": [1],
    "explanation": "Al final de la Planificación, el equipo debe poder explicar cómo logrará el Sprint Goal y crear el Incremento previsto."
  },
  {
    "question": "¿Qué es el Sprint Backlog?",
    "type": "multiple_choice",
    "options": ["Los elementos de Product Backlog seleccionados para este Sprint", "El plan para entregar los artículos de Product Backlog", "Los artículos de Product Backlog seleccionados para este Sprint más el plan para su entrega", "Los elementos de Product Backlog seleccionados para este Sprint más los elementos de Team Backlog"],
    "correctAnswer": [2],
    "explanation": "El Backlog de Sprint es el conjunto de elementos de Product Backlog seleccionados, además de un plan para entregar el Incremento y alcanzar el objetivo."
  },
  {
    "question": "Revisa todas las oportunidades formales para inspeccionar y adaptarse.",
    "type": "multiple_choice",
    "options": ["El Sprint", "La Revisión de Sprint", "El Daily Scrum", "La retrospectiva del sprint", "La planificación del sprint"],
    "correctAnswer": [1, 2, 3, 4],
    "explanation": "Aparte del Sprint (contenedor), cada evento en Scrum es una oportunidad formal para inspeccionar y adaptar algo."
  },
  {
    "question": "¿Qué debe tenerse en cuenta para la definición de \"hecho\"?",
    "type": "multiple_choice",
    "options": ["Experiencia del Product Owner", "Definición de \"Hecho\" de otros equipos Scrum trabajando en el mismo producto", "Definición de \"Hecho\" de otros equipos Scrum trabajando en otros productos", "Convenciones, normas y directrices de la Organización", "Consejo del Scrum Master"],
    "correctAnswer": [1, 3],
    "explanation": "Los equipos deben seguir las convenciones de la organización; si varios equipos trabajan en el mismo producto, deben definir mutuamente la definición de 'Hecho'."
  },
  {
    "question": "¿Cómo sirve el Scrum Master a la organización?",
    "type": "multiple_choice",
    "options": ["Planificación de implementaciones de Scrum dentro de la organización", "Combinar desarrolladores experimentados y especialistas junior", "Asegurarse de que los principales interesados estén invitados a todas las revisiones", "Liderar y entrenar a la organización en su adopción de Scrum", "Colaborando con otros Scrum Masters para aumentar la eficacia de la aplicación de Scrum"],
    "correctAnswer": [0, 3, 4],
    "explanation": "El Scrum Master lidera la adopción, planifica implementaciones y colabora con otros Scrum Masters."
  },
  {
    "question": "¿Qué es el Incremento?",
    "type": "multiple_choice",
    "options": ["La suma de todos los elementos del Product Backlog completados durante el Sprint y el valor de los incrementos de todos los Sprints anteriores", "La suma de todos los elementos del Product Backlog completados durante el Sprint", "Todos los elementos del Sprint Backlog que podrían ser publicados", "Todos los elementos \"Hechos\" en el Backlog de Sprint"],
    "correctAnswer": [0],
    "explanation": "El incremento es la suma de los elementos completados en el Sprint y el valor de los incrementos de Sprints anteriores."
  },
  {
    "question": "¿Qué muestra el Cono de Incertidumbre?",
    "type": "multiple_choice",
    "options": ["Dependencias", "Jerarquía de tareas", "Cuánto trabajo queda", "Cuánto se sabe sobre el Producto a lo largo del tiempo"],
    "correctAnswer": [3],
    "explanation": "El Cono de Incertidumbre describe la evolución de la cantidad de incertidumbre durante un proyecto."
  },
  {
    "question": "¿Qué incluye la gestión del Product Backlog?",
    "type": "multiple_choice",
    "options": ["Asegurarse de que sea visible, transparente y claro", "Trasladar los elementos al backlog de Sprint", "Presentar los elementos a los Principales Interesados", "Optimizar el valor del trabajo del Equipo de Desarrollo", "Encargar los artículos para lograr mejor los objetivos"],
    "correctAnswer": [0, 3, 4],
    "explanation": "La gestión incluye optimizar el valor, asegurar la visibilidad y transparencia, y ordenar artículos para lograr objetivos."
  },
  {
    "question": "La definición de Hecho puede revisarse y adaptarse en cada Sprint Retrospective.",
    "type": "multiple_choice",
    "options": ["Cierto", "Falso"],
    "correctAnswer": [0],
    "explanation": "Durante cada retrospectiva, el equipo planifica formas de mejorar procesos o adaptar la definición de 'Hecho' si es apropiado."
  },
  {
    "question": "¿Dónde se puede usar Scrum?",
    "type": "multiple_choice",
    "options": ["Gestión del funcionamiento de una organización", "Investigación e identificación de mercados", "Entornos operativos en la nube", "Desarrollo de productos y mejoras", "Desarrollo de software y hardware", "Casi todo lo que usamos en la vida diaria"],
    "correctAnswer": [0, 1, 2, 3, 4, 5],
    "explanation": "Scrum se ha utilizado en casi todo lo que usamos en nuestra vida diaria, desde hardware hasta gobierno y marketing."
  },
  {
    "question": "¿Podría terminarse la planificación del Sprint si solo el trabajo planificado para los primeros días está descompuesto en unidades de un día o menos?",
    "type": "multiple_choice",
    "options": ["Sí, si también se estima el trabajo restante", "No, todos los elementos deben descomponerse"],
    "correctAnswer": [0],
    "explanation": "La Guía Scrum requiere que solo el trabajo para los primeros días se descomponga al final de la Planificación."
  },
  {
    "question": "¿Cuáles son las preguntas que responde la Planificación de Sprints?",
    "type": "multiple_choice",
    "options": ["¿Qué se puede ofrecer en el Incremento?", "¿Cómo se logrará el trabajo?", "¿Cuál es el tamaño de la Deuda Técnica?", "¿Qué nuevas tecnologías usar?", "¿Quién será responsable?"],
    "correctAnswer": [0, 1],
    "explanation": "Sprint Planning responde: ¿Qué se puede ofrecer en el próximo Incremento? y ¿Cómo se logrará el trabajo?."
  },
  {
    "question": "¿Cuáles son los cuadros de tiempo para la Sprint Review y la Sprint Retrospective?",
    "type": "multiple_choice",
    "options": ["4 horas para cada una", "3 y 4 horas respectivamente", "3 horas para cada una", "4 y 3 horas respectivamente"],
    "correctAnswer": [3],
    "explanation": "La Revisión del Sprint es, como mucho, una reunión de cuatro horas; la Retrospectiva es de tres horas, para Sprints de un mes."
  },
  {
    "question": "¿Cuánto debería durar la Planificación del Sprint?",
    "type": "multiple_choice",
    "options": ["No más de 8 horas", "Hasta que todos los elementos se descomponen", "No más de 4 horas", "No más del 10% de la capacidad"],
    "correctAnswer": [0],
    "explanation": "La planificación está limitada a un máximo de ocho horas para un Sprint de un mes."
  },
  {
    "question": "¿Quién es responsable de todas las estimaciones en el Product Backlog?",
    "type": "multiple_choice",
    "options": ["El equipo de desarrollo", "El Product Owner", "El Scrum Team", "El Product Owner y el Scrum Master", "El equipo de desarrollo y el Product Owner", "El Scrum Master"],
    "correctAnswer": [0],
    "explanation": "El equipo de desarrollo es responsable de todas las estimaciones, aunque el Product Owner puede ayudar a entender los intercambios."
  },
  {
    "question": "¿Se permite saltarse el Daily Scrum si no hay nada interesante de qué hablar?",
    "type": "multiple_choice",
    "options": ["Sí", "No"],
    "correctAnswer": [1],
    "explanation": "No incluir eventos resulta en una menor transparencia y es una oportunidad perdida para inspeccionar y adaptarse."
  },
  {
    "question": "El propósito de la Retrospectiva Sprint es:",
    "type": "multiple_choice",
    "options": ["Identificar mejoras", "Crear un plan de mejoras", "Observar el Sprint pasado", "Obtener asesoramiento técnico", "Recibir comentarios de interesados"],
    "correctAnswer": [0, 1, 2],
    "explanation": "El propósito es inspeccionar el Sprint (personas, relaciones, procesos), identificar mejoras y crear un plan para implementarlas."
  },
  {
    "question": "La caja de tiempo de Daily Scrum depende del tamaño del equipo de desarrollo.",
    "type": "multiple_choice",
    "options": ["Cierto", "Falso"],
    "correctAnswer": [1],
    "explanation": "El Daily Scrum es un evento de 15 minutos con tiempo limitado para el equipo de desarrollo de cualquier tamaño."
  },
  {
    "question": "¿Podrían el Product Owner y el Scrum Master formar parte del equipo de desarrollo?",
    "type": "multiple_choice",
    "options": ["No", "Sí"],
    "correctAnswer": [1],
    "explanation": "Scrum no lo prohíbe, aunque no es la mejor práctica por posible conflicto de intereses."
  },
  {
    "question": "¿Quién tiene autoridad para cancelar el Sprint?",
    "type": "multiple_choice",
    "options": ["El Scrum Master", "El equipo de desarrollo", "Los principales actores", "El Product Owner y el Scrum Master", "El Product Owner"],
    "correctAnswer": [4],
    "explanation": "Solo el Product Owner tiene la autoridad para cancelar el Sprint."
  },
  {
    "question": "Solo el Product Owner y el equipo de desarrollo participan en la planificación del sprint. No hay nada que hacer para el Scrum Master.",
    "type": "multiple_choice",
    "options": ["Cierto", "Falso"],
    "correctAnswer": [1],
    "explanation": "El plan se crea gracias al trabajo colaborativo de todo el equipo Scrum."
  },
  {
    "question": "¿Qué son los artefactos Scrum?",
    "type": "multiple_choice",
    "options": ["La lista de impedimentos", "Catálogo de productos", "Lista de Sprint", "El objetivo del sprint", "Incremento"],
    "correctAnswer": [1, 2, 4],
    "explanation": "Los artefactos son Product Backlog, Sprint Backlog e Increment."
  },
  {
    "question": "El equipo de desarrollo prohíbe añadir nuevo trabajo al Sprint Backlog después de la Planificación.",
    "type": "multiple_choice",
    "options": ["Falso", "Cierto"],
    "correctAnswer": [0],
    "explanation": "El equipo de desarrollo modifica el Backlog de Sprint a lo largo del Sprint a medida que aprende más."
  },
  {
    "question": "¿Cuáles son las dos características esenciales que debe poseer un equipo de scrum?",
    "type": "multiple_choice",
    "options": ["Competencias necesarias sin depender de otros", "Flexible para completar trabajo incluso si hay vacaciones", "Elegir cómo realizar el trabajo", "Utilizar herramientas aprobadas"],
    "correctAnswer": [0, 2],
    "explanation": "Los equipos Scrum son autoorganizados (eligen cómo realizar su trabajo) y multifuncionales (tienen las competencias necesarias)."
  },
  {
    "question": "Imagina que eres un Scrum Master con 10 desarrolladores. ¿Cómo pueden dividirse en equipos?",
    "type": "multiple_choice",
    "options": ["2 equipos de 6 y 4 (con equipo de QA)", "3 equipos de 4, 3 y 3 (multifuncionales)", "1 equipo de 10", "2 equipos de 6 y 4 (decisión del equipo)"],
    "correctAnswer": [1, 3],
    "explanation": "El tamaño óptimo es pequeño (menos de 3 disminuye productividad, más de 9 requiere demasiada coordinación) y los equipos deben ser multifuncionales."
  },
  {
    "question": "¿Qué muestra el Burn-down Chart?",
    "type": "multiple_choice",
    "options": ["Dependencias", "Cuánto trabajo queda hasta el final del Sprint", "Jerarquía de tareas", "La evolución de la incertidumbre"],
    "correctAnswer": [1],
    "explanation": "El gráfico muestra la evolución del esfuerzo restante contra el tiempo."
  },
  {
    "question": "¿Quién participa en la Sprint Review?",
    "type": "multiple_choice",
    "options": ["CEO", "Principales actores", "Product Owner", "Equipo de desarrollo", "Scrum Master"],
    "correctAnswer": [1, 2, 3, 4],
    "explanation": "El equipo Scrum y las partes interesadas colaboran durante la Revisión del Sprint."
  },
  {
    "question": "¿Cuál es el horario del Daily Scrum?",
    "type": "multiple_choice",
    "options": ["25 minutos", "20 minutos", "No limitado", "15 minutos"],
    "correctAnswer": [3],
    "explanation": "El Daily Scrum es un evento de 15 minutos con caja de tiempo."
  },
  {
    "question": "¿Cuál podría ser la fuente de los requisitos para cambios en el producto?",
    "type": "multiple_choice",
    "options": ["El Product Backlog", "El CEO", "Los principales actores"],
    "correctAnswer": [0],
    "explanation": "El Product Backlog es la única fuente de requisitos para cualquier cambio que se deba realizar en el producto."
  },
  {
    "question": "¿En qué reuniones se permite la participación de los Actores Clave?",
    "type": "multiple_choice",
    "options": ["Retrospectiva", "Revisión de Sprint", "Planificación", "Daily Scrum"],
    "correctAnswer": [1],
    "explanation": "Los Principales Actores solo pueden participar en la reunión de Revisión Sprint."
  },
  {
    "question": "La definición de \"Hecho\" se crea durante el primer Sprint y permanece sin cambios hasta el lanzamiento.",
    "type": "multiple_choice",
    "options": ["Cierto", "Falso"],
    "correctAnswer": [1],
    "explanation": "Durante cada retrospectiva, el equipo planifica formas de aumentar la calidad adaptando la definición de 'Hecho' según corresponda."
  },
  {
    "question": "¿Cuáles son las características de un equipo de desarrollo?",
    "type": "multiple_choice",
    "options": ["No reconoce subequipos", "Responsabilidad del equipo en su conjunto", "Ingeniero de pruebas obligatorio", "No reconoce títulos", "Scrum Master como desarrollador a tiempo parcial"],
    "correctAnswer": [0, 1, 3],
    "explanation": "Los equipos son multifuncionales, no tienen subequipos, no tienen títulos y la responsabilidad es del equipo en su conjunto."
  },
  {
    "question": "El Scrum Master se centra principalmente en el Scrum Team y normalmente no le importan los que están fuera.",
    "type": "multiple_choice",
    "options": ["Cierto", "Falso"],
    "correctAnswer": [1],
    "explanation": "El Scrum Master ayuda a quienes están fuera del equipo a entender sus interacciones para maximizar el valor."
  },
  {
    "question": "¿Qué significa la palabra \"desarrollo\" en Scrum?",
    "type": "multiple_choice",
    "options": ["Desarrollo de software y hardware", "Desarrollo, lanzamiento y mantenimiento", "Trabajo complejo que incluye todas las opciones y más", "Investigación de mercados", "Desarrollo de entorno operativo"],
    "correctAnswer": [2],
    "explanation": "Se refiere a trabajos complejos que incluyen todo lo sugerido y más."
  },
  {
    "question": "¿Cuál es la entrada a la planificación de los sprints? Marque todas las que consideres.",
    "type": "multiple_choice",
    "options": ["El último Increment", "Capacidad proyectada", "El Product Backlog", "Comentarios de actores", "Comentarios del CEO", "Rendimiento previo"],
    "correctAnswer": [0, 1, 2, 5],
    "explanation": "La entrada es el Backlog de Producto, el último incremento, la capacidad proyectada y el rendimiento pasado."
  },
  {
    "question": "Es buena práctica tener de vez en cuando un Sprint técnico para eliminar deuda sin implementar funcionalidades.",
    "type": "multiple_choice",
    "options": ["Cierto", "Falso"],
    "correctAnswer": [1],
    "explanation": "Está prohibido; cada Sprint debe ofrecer incrementos de funcionalidades potencialmente liberables."
  },
  {
    "question": "¿Qué pertenece exclusivamente al equipo de desarrollo?",
    "type": "multiple_choice",
    "options": ["El Incremento", "El Product Backlog", "El Sprint Backlog", "La definición de hecho"],
    "correctAnswer": [2],
    "explanation": "El Sprint Backlog es una imagen del trabajo planeado y pertenece exclusivamente al equipo de desarrollo."
  },
  {
    "question": "¿Quién es responsable de hacer un seguimiento del trabajo total restante en el Sprint Backlog?",
    "type": "multiple_choice",
    "options": ["Product Owner y equipo", "Equipo de desarrollo", "Product Owner", "Scrum Team", "Scrum Master"],
    "correctAnswer": [1],
    "explanation": "El equipo de desarrollo registra este trabajo al menos para cada Daily Scrum para proyectar su probabilidad de éxito."
  },
  {
    "question": "Todos los equipos de desarrollo que trabajan en el mismo producto deben usar el mismo backlog de productos.",
    "type": "multiple_choice",
    "options": ["Cierto", "Falso"],
    "correctAnswer": [0],
    "explanation": "Varios equipos Scrum trabajan en el mismo producto usando un único Backlog de Producto."
  },
  {
    "question": "¿Quién es responsable del Product Backlog?",
    "type": "multiple_choice",
    "options": ["Product Owner y equipo", "Product Owner y Scrum Master", "Equipo de desarrollo", "Product Owner", "Scrum Master y Equipo", "Scrum Master"],
    "correctAnswer": [3],
    "explanation": "El Product Owner es responsable del Backlog de Producto, incluyendo contenido, disponibilidad y pedidos."
  },
  {
    "question": "¿Quién puede participar en el Daily Scrum?",
    "type": "multiple_choice",
    "options": ["Actores clave", "Scrum Master", "Equipo de desarrollo", "Product Owner"],
    "correctAnswer": [2],
    "explanation": "El Daily Scrum es una reunión interna del equipo de desarrollo."
  },
  {
    "question": "¿Quién es responsable de gestionar el Backlog de Producto?",
    "type": "multiple_choice",
    "options": ["Scrum Master", "Product Owner", "Equipo de desarrollo", "Actores clave"],
    "correctAnswer": [1],
    "explanation": "El Product Owner es la única persona responsable de gestionar el Product Backlog."
  },
  {
    "question": "¿Quién puede cambiar el backlog del Sprint durante el Sprint?",
    "type": "multiple_choice",
    "options": ["Equipo de desarrollo", "Scrum Master", "Equipo de desarrollo y Product Owner", "Product Owner", "Scrum Team"],
    "correctAnswer": [0],
    "explanation": "Solo el equipo de desarrollo puede modificar su Backlog de Sprint durante un Sprint."
  },
  {
    "question": "El Daily Scrum siempre debe durar 15 minutos. Si termina en 5, debes usar los 10 restantes para algo útil.",
    "type": "multiple_choice",
    "options": ["Falso", "Cierto"],
    "correctAnswer": [0],
    "explanation": "Cada evento tiene una duración máxima; la Guía no requiere una duración mínima."
  },
  {
    "question": "¿Cuál es el orden de los artículos en el catálogo de productos?",
    "type": "multiple_choice",
    "options": ["Menos valiosos al final", "Elementos menos claros en la parte superior", "Recientes en la parte superior", "Alfabético"],
    "correctAnswer": [0],
    "explanation": "El Product Owner es responsable de colocar los elementos más valiosos y claros en la parte superior."
  },
  {
    "question": "¿Quién es responsable de la creación de la definición de \"hecho\"?",
    "type": "multiple_choice",
    "options": ["Scrum Team", "Scrum Master", "Equipo de desarrollo", "Product Owner"],
    "correctAnswer": [2],
    "explanation": "Si no es una convención de la organización, el equipo de desarrollo debe definirla."
  },
  {
    "question": "Todos los equipos Scrum que trabajan en el mismo producto deberían tener la misma duración de Sprint.",
    "type": "multiple_choice",
    "options": ["Falso", "Cierto"],
    "correctAnswer": [0],
    "explanation": "Scrum no requiere tener Sprints alineados para varios equipos."
  },
  {
    "question": "Selecciona los cinco Valores Scrum.",
    "type": "multiple_choice",
    "options": ["Respeto", "Apertura", "Efectividad", "Enfoque", "Autoorganización", "Compromiso", "Agilidad", "Valor"],
    "correctAnswer": [0, 1, 3, 5, 7],
    "explanation": "Los Valores Scrum son: compromiso, coraje, enfoque, apertura y respeto."
  },
  {
    "question": "Selecciona las dos reuniones en las que se permite la participación de personas fuera del Equipo Scrum.",
    "type": "multiple_choice",
    "options": ["Retrospectiva", "Daily Scrum", "Revisión de Sprint", "Planificación"],
    "correctAnswer": [2, 3],
    "explanation": "El equipo de desarrollo puede invitar a otros a la Planificación para asesoramiento; el Product Owner invita a actores clave a la Revisión."
  },
  {
    "question": "¿Cómo sirve el Scrum Master al equipo de desarrollo?",
    "type": "multiple_choice",
    "options": ["Ayudar a crear productos de alto valor", "Añadir o eliminar desarrolladores", "Coaching en autoorganización", "Eliminación de obstáculos", "Ayudar como líder del equipo"],
    "correctAnswer": [0, 2, 3],
    "explanation": "El Scrum Master ayuda formando en autoorganización, ayudando a crear productos de alto valor y eliminando obstáculos."
  },
  {
    "question": "¿Qué son las características del Product Backlog?",
    "type": "multiple_choice",
    "options": ["Nunca está completo", "Podría cerrarse", "Es dinámico", "Se descarta al finalizar el producto", "Existe mientras exista el producto"],
    "correctAnswer": [0, 2, 4],
    "explanation": "Nunca se completa, es dinámico y existe mientras el producto exista."
  },
  {
    "question": "¿Cuáles son los tres pilares que sostienen el Scrum?",
    "type": "multiple_choice",
    "options": ["Inspección", "Transparencia", "Funcionalidad cruzada", "Autoorganización", "Agilidad", "Adaptación"],
    "correctAnswer": [0, 1, 5],
    "explanation": "Los tres pilares son transparencia, inspección y adaptación."
  },
  {
    "question": "Cómo ayuda la definición de \"Hecho\" al equipo de scrum?",
    "type": "multiple_choice",
    "options": ["Ayuda en la inspección y adaptación", "Guía para saber cuántos elementos seleccionar", "Evaluar cuándo se completó el trabajo", "Garantiza transparencia", "Ayuda a calcular velocidad"],
    "correctAnswer": [1, 2, 3],
    "explanation": "Se usa para evaluar cuándo se terminó el trabajo, guía la selección de elementos en la planificación y garantiza la transparencia."
  },
  {
    "question": "¿Quién crea el incremento?",
    "type": "multiple_choice",
    "options": ["Product Owner", "Scrum Team", "Equipo de desarrollo y Product Owner", "Scrum Master", "Equipo de desarrollo"],
    "correctAnswer": [4],
    "explanation": "Solo los miembros del equipo de desarrollo crean el Incremento."
  },
  {
    "question": "¿Qué es Scrum?",
    "type": "multiple_choice",
    "options": ["Proceso de diseño secuencial", "Marco para abordar problemas adaptativos complejos", "Metodología para mejorar calidad"],
    "correctAnswer": [1],
    "explanation": "Es un marco dentro del cual las personas pueden abordar problemas adaptativos complejos, mientras entregan productos valiosos."
  },
  {
    "question": "¿Quién es responsable de promover y apoyar Scrum?",
    "type": "multiple_choice",
    "options": ["Scrum Master", "Equipo de desarrollo", "Scrum Team", "Product Owner", "Scrum Master y Product Owner"],
    "correctAnswer": [0],
    "explanation": "El Scrum Master es responsable de promover y apoyar Scrum según la Guía Scrum."
  },
  {
    "question": "¿Qué ocurre durante el Sprint?",
    "type": "multiple_choice",
    "options": ["No se hacen cambios que pongan en peligro el Sprint Goal", "Objetivos de calidad no disminuyen", "El Objetivo de Sprint cambia frecuentemente", "El alcance puede aclararse y renegociarse", "El alcance no puede cambiarse"],
    "correctAnswer": [0, 1, 3],
    "explanation": "No se realizan cambios que pongan en peligro el objetivo, la calidad no disminuye y el alcance puede renegociarse."
  },
  {
    "question": "¿Quién es responsable de elaborar el Objetivo de Sprint en la Planificación de Sprint?",
    "type": "multiple_choice",
    "options": ["Scrum Master", "Equipo de desarrollo", "Principales actores", "Scrum Team", "Product Owner"],
    "correctAnswer": [3],
    "explanation": "Después de la estimación del equipo, todo el equipo Scrum elabora el objetivo para el Sprint."
  },
  {
    "question": "¿Cuáles son las tres características más aplicables del Product Owner?",
    "type": "multiple_choice",
    "options": ["Maximizador de valor", "Evangelista de Scrum", "Facilitador de actores clave", "Facilitador de eventos", "Experto en el mercado"],
    "correctAnswer": [0, 2, 4],
    "explanation": "Las características son maximizador de valor, facilitador principal de actores clave y experto en el mercado."
  },
  {
    "question": "¿Qué parte de la capacidad del equipo de desarrollo suele consumir el refinamiento del Product Backlog?",
    "type": "multiple_choice",
    "options": ["No está autorizado", "10%", "20%", "5%"],
    "correctAnswer": [1],
    "explanation": "El refinamiento normalmente no consume más del 10% de la capacidad del equipo."
  },
  {
    "question": "¿Quién es responsable de afrontar la transparencia incompleta de los artefactos?",
    "type": "multiple_choice",
    "options": ["Scrum Master", "Equipo de desarrollo", "Scrum Team", "Product Owner"],
    "correctAnswer": [0],
    "explanation": "El trabajo del Scrum Master es colaborar con el Equipo y la organización para aumentar la transparencia."
  },
  {
    "question": "Es normal tener un Sprint de \"endurecimiento\" para eliminar deuda y preparar el producto para su lanzamiento.",
    "type": "multiple_choice",
    "options": ["Cierto", "Falso"],
    "correctAnswer": [1],
    "explanation": "No es normal; los equipos entregan un incremento utilizable en cada sprint."
  },
  {
    "question": "Es buena práctica tener al menos dos Product Owners en proyectos grandes.",
    "type": "multiple_choice",
    "options": ["Falso", "Cierto"],
    "correctAnswer": [0],
    "explanation": "El Product Owner es una sola persona, no un comité."
  },
  {
    "question": "En la retrospectiva, el equipo identificó mejoras. ¿Qué debería hacer el Scrum Team?",
    "type": "multiple_choice",
    "options": ["Asignar responsables para cada mejora", "Asignar responsable para al menos una", "Incluir todas en el próximo Sprint Backlog", "Incluir al menos una mejora de proceso de alta prioridad", "No es obligatorio incluir mejoras de proceso en el Sprint Backlog, pero es una práctica recomendada y altamente efectiva para cumplir con el compromiso de mejora continua del equipo."],
    "correctAnswer": [4],
    "explanation": "Para garantizar la mejora continua, el equipo incluye al menos una mejora de procesos de alta prioridad en el próximo Sprint Backlog."
  },
  {
    "question": "¿Cuál es la esencia de Scrum?",
    "type": "multiple_choice",
    "options": ["El equipo de desarrollo", "La Guía de la melé", "El Scrum Master y el Product Owner", "Un equipo pequeño de personas, muy flexible y adaptable"],
    "correctAnswer": [3],
    "explanation": "La esencia es un equipo pequeño de personas, muy flexible y adaptable."
  },
  {
    "question": "¿Con qué frecuencia deberían los usuarios de Scrum inspeccionar artefactos y avanzar hacia un objetivo de Sprint?",
    "type": "multiple_choice",
    "options": ["Después del Daily", "En la Revisión", "Con frecuencia, pero sin interferir", "Tan a menudo como sea posible"],
    "correctAnswer": [2],
    "explanation": "Deben inspeccionar con frecuencia, pero no tanto como para interferir con el trabajo."
  },
  {
    "question": "Scrum recomienda usar solo aquellos componentes y reglas de Scrum que más se adapten a un proyecto en particular.",
    "type": "multiple_choice",
    "options": ["Cierto", "Falso"],
    "correctAnswer": [1],
    "explanation": "Cada componente dentro del marco cumple un propósito específico y es esencial para el éxito."
  },
  {
    "question": "¿Cuáles son las tres preguntas que da la Guía de Scrum como ejemplo que pueden usarse en el Daily Scrum?",
    "type": "multiple_choice",
    "options": ["¿Le expliqué problemas al PO?", "¿Qué haré hoy para alcanzar el objetivo?", "¿Veo algún impedimento?", "¿Qué hice ayer que ayudó al objetivo?", "¿Tengo comprensión completa?"],
    "correctAnswer": [1, 2, 3],
    "explanation": "El ejemplo de preguntas es: ¿Qué hice ayer?, ¿Qué haré hoy?, ¿Veo impedimentos?."
  },
  {
    "question": "El Scrum Master realiza lo siguiente respecto al Scrum Diario:",
    "type": "multiple_choice",
    "options": ["Es responsable de llevarlo a cabo", "Asegura que no interrumpan si hay otros presentes", "Garantiza que el equipo tenga la reunión", "Enseña al equipo a mantenerlo en 15 minutos"],
    "correctAnswer": [1, 2, 3],
    "explanation": "El Scrum Master garantiza que se tenga la reunión, enseña a mantener los 15 minutos y asegura que otros no interrumpan."
  },
  {
    "question": "¿Qué guía al equipo de desarrollo sobre por qué está construyendo el Incremento?",
    "type": "multiple_choice",
    "options": ["Scrum Master", "Objetivo del sprint", "Product Owner", "Retraso en Sprint"],
    "correctAnswer": [1],
    "explanation": "El objetivo del Sprint proporciona orientación al equipo sobre por qué está construyendo el Incremento."
  },
  {
    "question": "¿Qué ocurre cuando se cancela un Sprint?",
    "type": "multiple_choice",
    "options": ["Se revisan elementos completados", "Si es liberable el Product Owner lo acepta", "SM determina responsables", "Artículos incompletos se reestiman", "Artículos de Product Backlog reemplazan obsoletos"],
    "correctAnswer": [0, 1, 3],
    "explanation": "Se revisan los elementos 'Hechos', el Product Owner acepta trabajo liberable y los artículos incompletos se reestiman."
  },
  {
    "question": "La estructura del Scrum Diario es fija (tres preguntas: ¿qué hice ayer?, ¿qué haré hoy?, ¿impedimentos?).",
    "type": "multiple_choice",
    "options": ["Cierto", "Falso"],
    "correctAnswer": [1],
    "explanation": "No hay estructura prescrita; otros formatos centrados en el progreso hacia el objetivo son válidos."
  },
  {
    "question": "Si un inspector determina que un aspecto de un proceso se desvía de límites aceptables, ¿cuándo debe realizarse un ajuste?",
    "type": "multiple_choice",
    "options": ["Discutir en Daily Scrum", "Lo antes posible", "Tras aclarar con PO", "Tras aprobación del SM"],
    "correctAnswer": [1],
    "explanation": "Debe ajustarse lo antes posible para minimizar desviaciones adicionales."
  },
  {
    "question": "Scrum no permite reuniones adicionales que no estén definidas en Scrum.",
    "type": "multiple_choice",
    "options": ["Cierto", "Falso"],
    "correctAnswer": [1],
    "explanation": "Scrum permite reuniones adicionales si facilitan la consecución del objetivo Sprint."
  },
  {
    "question": "¿Cuáles son las tres cualidades principales que el modelo de equipo en Scrum está diseñado para optimizar?",
    "type": "multiple_choice",
    "options": ["Agilidad", "Productividad", "Flexibilidad", "Creatividad", "Competencia", "Responsabilidad"],
    "correctAnswer": [2, 3, 1],
    "explanation": "El modelo está diseñado para optimizar la flexibilidad, la creatividad y la productividad."
  },
  {
    "question": "El scrum se basa en:",
    "type": "multiple_choice",
    "options": ["Empirismo", "Crítica empírica", "Sentido común", "Sistema Kanban"],
    "correctAnswer": [0],
    "explanation": "Scrum se basa en la teoría empírica del control de procesos, o empirismo."
  },
  {
    "question": "Otras personas además del equipo Scrum pueden asistir a la Planificación de Sprint para ofrecer asesoramiento.",
    "type": "multiple_choice",
    "options": ["Cierto", "Falso"],
    "correctAnswer": [0],
    "explanation": "El equipo de desarrollo puede invitar a otras personas para proporcionar asesoramiento técnico o de dominio."
  },
  {
    "question": "¿Cómo ayuda el Scrum Master al Product Owner?",
    "type": "multiple_choice",
    "options": ["Facilitar eventos", "Liderar y entrenar organización", "Introducir prácticas de vanguardia", "Encontrar técnicas para gestión del backlog", "Comprender planificación en entorno empírico"],
    "correctAnswer": [0, 3, 4],
    "explanation": "El Scrum Master sirve facilitando eventos, encontrando técnicas de gestión del backlog y ayudando a comprender la planificación empírica."
  },
  {
    "question": "¿Qué es la Sprint Retrospective?",
    "type": "multiple_choice",
    "options": ["Reunión para inspeccionar el Incremento", "Sincronización de actividades", "Reunión clave para inspeccionar y adaptar", "Oportunidad para que el equipo se autoexamine y cree un plan de mejoras"],
    "correctAnswer": [3],
    "explanation": "Es una oportunidad para que el equipo Scrum se inspeccione a sí mismo y cree un plan para las mejoras del próximo Sprint."
  },
  {
    "question": "El scrum no es un proceso ni una técnica.",
    "type": "multiple_choice",
    "options": ["Falso", "Cierto"],
    "correctAnswer": [1],
    "explanation": "No es un proceso, técnica ni método definitivo, sino un marco dentro del cual emplear diversos procesos."
  },
  {
    "question": "¿Quién participa en la Planificación del Sprint?",
    "type": "multiple_choice",
    "options": ["Actores clave", "Product Owner", "Scrum Master", "Jefe del Equipo", "Equipo de desarrollo"],
    "correctAnswer": [1, 2, 4],
    "explanation": "El trabajo se planifica gracias al trabajo colaborativo de todo el equipo Scrum."
  },
  {
    "question": "¿Cuál es el resultado de la Sprint Review?",
    "type": "multiple_choice",
    "options": ["Comprensión común del Incremento", "Comprensión común del progreso", "Un Product Backlog revisado", "Lista de mejoras"],
    "correctAnswer": [2],
    "explanation": "El resultado es un Backlog de Producto revisado que define los probables elementos para el siguiente Sprint."
  },
  {
    "question": "¿Quién puede hacer cambios en el Product Backlog? Selecciona dos opciones.",
    "type": "multiple_choice",
    "options": ["El Scrum Master", "Cualquiera", "El Product Owner", "Los principales actores", "El equipo de desarrollo, pero con permiso del Product Owner"],
    "correctAnswer": [2, 4],
    "explanation": "El Product Owner es el único responsable, pero puede delegar parte del trabajo de gestión al equipo de desarrollo."
  },
  {
    "question": "¿Quién es responsable de gestionar el Backlog de Producto?",
    "type": "multiple_choice",
    "options": ["Los principales actores", "El Product Owner", "El Scrum Master", "El equipo de desarrollo"],
    "correctAnswer": [1],
    "explanation": "El Product Owner es la única persona responsable de gestionar el Product Backlog."
  },
  {
    "question": "El Sprint Backlog se crea en la Planificación de Sprints. El equipo de desarrollo prohíbe añadir nuevo trabajo al Sprint Backlog posteriormente.",
    "type": "multiple_choice",
    "options": ["Cierto", "Falso"],
    "correctAnswer": [1],
    "explanation": "El equipo de desarrollo modifica el Backlog de Sprint a lo largo del Sprint a medida que aprende más sobre el trabajo necesario."
  },
  {
    "question": "¿Podrían el Product Owner y el Scrum Master formar parte del equipo de desarrollo?",
    "type": "multiple_choice",
    "options": ["Sí", "No"],
    "correctAnswer": [0],
    "explanation": "Scrum no lo prohíbe, aunque no es la mejor práctica por posibles conflictos de intereses."
  },
  {
    "question": "Selecciona las dos reuniones en las que se permite la participación de personas fuera del Equipo Scrum.",
    "type": "multiple_choice",
    "options": ["La retrospectiva del sprint", "La planificación del sprint", "El Daily Scrum", "La Revisión de Sprint"],
    "correctAnswer": [1, 3],
    "explanation": "Se puede invitar a terceros a la Planificación del Sprint para asesoramiento y a la Revisión de Sprint para colaborar."
  },
  {
    "question": "¿Quién debería encargarse de recopilar los datos del mercado para el Product Owner?",
    "type": "multiple_choice",
    "options": ["No importa quién haga el trabajo", "El Product Owner", "El equipo Scrum y los principales actores", "El Scrum Team"],
    "correctAnswer": [2],
    "explanation": "El Product Owner debe estar al tanto de los datos, aunque no necesariamente sea quien los recopile personalmente."
  },
  {
    "question": "¿Quién es el principal visionario del producto?",
    "type": "multiple_choice",
    "options": ["El Product Owner", "El Scrum Master", "El Director de Marketing (CMO)", "El Director Ejecutivo (CEO)"],
    "correctAnswer": [0],
    "explanation": "El Product Owner es el principal visionario y debe articular la visión claramente."
  },
  {
    "question": "¿Quién es el líder en cuanto a recibir feedback de los Actores Clave en la Revisión Sprint?",
    "type": "multiple_choice",
    "options": ["El equipo de desarrollo", "El Scrum Team", "El Product Owner", "El Scrum Master"],
    "correctAnswer": [2],
    "explanation": "El Product Owner es un líder vital para obtener retroalimentación de los actores clave."
  },
  {
    "question": "¿Cómo comunica el Product Owner su conocimiento del mercado al equipo Scrum (seleccionando tres)?",
    "type": "multiple_choice",
    "options": ["Retrospectivas de Sprint", "Scrums diarios", "Refinamiento del Product Backlog", "Interacciones diarias ad hoc", "Análisis de Sprint"],
    "correctAnswer": [2, 3, 4],
    "explanation": "El conocimiento se comunica mediante interacciones diarias ad hoc, refinamiento del backlog y revisiones de Sprint."
  },
  {
    "question": "Todos los equipos de desarrollo que trabajan en el mismo producto deben usar el mismo backlog de productos.",
    "type": "multiple_choice",
    "options": ["Cierto", "Falso"],
    "correctAnswer": [0],
    "explanation": "Se utiliza un único Product Backlog para describir el trabajo próximo cuando varios equipos trabajan en el mismo producto."
  },
  {
    "question": "¿Cuáles son las características de un artículo de la lista de productos que está \"listo\" para ser seleccionado? (Selecciona tres)",
    "type": "multiple_choice",
    "options": ["Se puede \"hacer\" en un solomultiple_choice sprint", "Puede implementarse en un Sprint y probarse en el siguiente", "En algún lugar de la cima del catálogo", "Tiene menos detalle", "En algún lugar al final", "Bien refinado"],
    "correctAnswer": [0, 2, 5],
    "explanation": "Los elementos en la cima, bien refinados y que se pueden completar en un sprint, están \"listos\"."
  },
  {
    "question": "¿Qué parte de la capacidad del equipo de desarrollo suele consumir el refinamiento del Product Backlog?",
    "type": "multiple_choice",
    "options": ["No más del 5%", "No está autorizado", "No más del 20%", "No más del 10%"],
    "correctAnswer": [3],
    "explanation": "Normalmente no consume más del 10% de la capacidad del equipo."
  },
  {
    "question": "¿Qué muestra el Burn-down Chart?",
    "type": "multiple_choice",
    "options": ["Jerarquía de tareas", "Cuánto trabajo queda hasta el final del Sprint", "Evolución de la incertidumbre", "Dependencias y horarios"],
    "correctAnswer": [1],
    "explanation": "Muestra la evolución del esfuerzo restante contra el tiempo."
  },
  {
    "question": "¿Cuál es la esencia de Scrum?",
    "type": "multiple_choice",
    "options": ["Un equipo pequeño de personas, muy flexible y adaptable", "El equipo de desarrollo", "La Guía de la melé", "El Scrum Master y el Product Owner"],
    "correctAnswer": [0],
    "explanation": "La esencia es un equipo pequeño de personas, flexible y adaptable."
  },
  {
    "question": "En la retrospectiva, el equipo identificó mejoras. ¿Qué debe hacer el equipo Scrum?",
    "type": "multiple_choice",
    "options": ["Asignar un responsable", "Incluir al menos una mejora de proceso en el próximo Sprint Backlog", "Incluir todas las mejoras", "Asignar responsables para cada mejora"],
    "correctAnswer": [1],
    "explanation": "Se debe incluir al menos una mejora de procesos de alta prioridad en el siguiente Sprint Backlog."
  },
  {
    "question": "¿Quién es responsable de promover y apoyar Scrum?",
    "type": "multiple_choice",
    "options": ["El Scrum Master", "El Scrum Team", "El Product Owner", "El equipo de desarrollo", "El Scrum Master y el Product Owner"],
    "correctAnswer": [0],
    "explanation": "El Scrum Master es el responsable según la Guía Scrum."
  },
  {
    "question": "¿Cuáles son los cuadros de tiempo para la Sprint Review y la Sprint Retrospective?",
    "type": "multiple_choice",
    "options": ["3 y 4 horas respectivamente", "4 y 3 horas respectivamente", "Caja de tiempo de 4 horas para cada una", "Caja de tiempo de 3 horas para cada una"],
    "correctAnswer": [1],
    "explanation": "Máximo 4 horas para la Revisión y 3 horas para la Retrospectiva (en Sprints de un mes)."
  },
  {
    "question": "La práctica de refinamiento del backlog de producto se centra en los ítems de los próximos Sprints, no en el actual. ¿Verdadero o falso?",
    "type": "multiple_choice",
    "options": ["Falso", "Cierto"],
    "correctAnswer": [1],
    "explanation": "Cierto, aunque el Product Owner puede aportar aclaraciones sobre el Sprint actual."
  },
  {
    "question": "Cada artículo de Pendiente de Producto debe ser creado personalmente por el Product Owner.",
    "type": "multiple_choice",
    "options": ["Cierto", "Falso"],
    "correctAnswer": [1],
    "explanation": "Falso, la gestión puede delegarse completamente al equipo de desarrollo."
  },
  {
    "question": "Es una mala idea cambiar la Visión de Producto o tácticas antes del próximo lanzamiento.",
    "type": "multiple_choice",
    "options": ["Cierto", "Falso"],
    "correctAnswer": [1],
    "explanation": "Falso, el Product Owner nunca debe temer cambiar la visión según el mercado."
  },
  {
    "question": "¿Dónde se puede usar Scrum? (Revisa todos los aplicables)",
    "type": "multiple_choice",
    "options": ["Desarrollo de productos", "Investigación", "Desarrollo en la nube", "Gestión de organizaciones", "Software y hardware", "Casi todo"],
    "correctAnswer": [0, 1, 2, 3, 4, 5],
    "explanation": "Scrum se ha utilizado en una enorme variedad de entornos, desde software hasta gobierno y marketing."
  },
  {
    "question": "¿Quién es responsable de todas las estimaciones en el Product Backlog?",
    "type": "multiple_choice",
    "options": ["Equipo de desarrollo", "Product Owner", "Scrum Master", "Scrum Team", "Product owner y equipo de desarrollo", "Scrum Master y Equipo de Desarrollo", "Product Owner y Scrum Master"],
    "correctAnswer": [0],
    "explanation": "El equipo de desarrollo realiza la estimación final."
  },
  {
    "question": "¿Cuál es la mejor manera de aplicar requisitos no funcionales?",
    "type": "multiple_choice",
    "options": ["Nuevo artículo para cada uno", "Añadirlos al DoD", "Convertirlos en características", "No se pueden gestionar"],
    "correctAnswer": [1],
    "explanation": "La única forma de cumplirlos es incluirlos en la Definición de 'Hecho' (DoD)."
  },
  {
    "question": "El Product Owner debe conocer de forma experta el mercado del producto.",
    "type": "multiple_choice",
    "options": ["Depende", "Falso", "Cierto"],
    "correctAnswer": [2],
    "explanation": "Es obligatorio para maximizar el valor; desconectarse del mercado es peligroso."
  },
  {
    "question": "¿Quién es responsable de hacer un seguimiento del trabajo total restante en el Sprint Backlog?",
    "type": "multiple_choice",
    "options": ["Product Owner", "Equipo de desarrollo", "Product Owner y equipo de desarrollo", "Scrum Team", "Scrum Master"],
    "correctAnswer": [1],
    "explanation": "El equipo de desarrollo registra este trabajo al menos en cada Daily Scrum."
  },
  {
    "question": "¿Cuánto tiempo dura el Product Backlog?",
    "type": "multiple_choice",
    "options": ["Mientras el Producto exista", "No más de 5 años", "Hasta el lanzamiento final", "Mientras un equipo trabaje en ello"],
    "correctAnswer": [0],
    "explanation": "Si existe un producto, existe su lista de productos pendientes."
  },
  {
    "question": "¿Quién decide si se lanza la última versión del producto?",
    "type": "multiple_choice",
    "options": ["Equipo de desarrollo", "Scrum Master", "Product Owner", "Product Owner y Scrum Master", "Scrum Team"],
    "correctAnswer": [2],
    "explanation": "El Product Owner es la única persona que puede decidir el lanzamiento."
  },
  {
    "question": "Es buena práctica tener al menos dos Product Owners en proyectos grandes.",
    "type": "multiple_choice",
    "options": ["Cierto", "Falso"],
    "correctAnswer": [1],
    "explanation": "El Product Owner es una sola persona, no un comité."
  },
  {
    "question": "¿Qué técnica debería emplearse para representar los artículos de la lista de productos pendientes?",
    "type": "multiple_choice",
    "options": ["Historias de usuario", "Pruebas de aceptación", "Cualquier técnica", "Casos de uso", "Escenarios"],
    "correctAnswer": [2],
    "explanation": "Se puede utilizar cualquier técnica, incluso una mezcla de varias."
  },
  {
    "question": "¿Qué guía al equipo de desarrollo sobre por qué está construyendo el Incremento?",
    "type": "multiple_choice",
    "options": ["Objetivo del sprint", "Retraso en Sprint", "Scrum Master", "Product Owner"],
    "correctAnswer": [0],
    "explanation": "El objetivo del Sprint proporciona orientación al equipo sobre el Product Ownerrqué."
  },
  {
    "question": "¿Quién identifica a los principales interesados?",
    "type": "multiple_choice",
    "options": ["Scrum Team", "Alta dirección", "Scrum Master", "Equipo de desarrollo", "Product Owner"],
    "correctAnswer": [4],
    "explanation": "El Product Owner debe identificarlos para maximizar el valor."
  },
  {
    "question": "¿Quién tiene autoridad para cancelar el Sprint?",
    "type": "multiple_choice",
    "options": ["Principales actores", "Equipo de desarrollo", "Scrum Master", "Product Owner", "Product Owner y Scrum Master"],
    "correctAnswer": [3],
    "explanation": "Solo el Product Owner tiene la autoridad."
  },
  {
    "question": "Refinamiento del catálogo de productos... (Selecciona tres)",
    "type": "multiple_choice",
    "options": ["Añadir detalles/pedidos", "Es proceso continuo", "No más del 10%", "Máximo 4 horas", "Responde cómo se logrará", "Ocurre 2-4 veces"],
    "correctAnswer": [0, 1, 2],
    "explanation": "Es un proceso continuo, añade detalles/estimaciones y consume máximo 10%."
  },
  {
    "question": "¿Quién participa en la Planificación del Sprint? (Selecciona tres)",
    "type": "multiple_choice",
    "options": ["Equipo de desarrollo", "Product Owner", "Jefe de Equipo", "Principales actores", "Scrum Master"],
    "correctAnswer": [0, 1, 4],
    "explanation": "La planificación se crea gracias al trabajo colaborativo de todo el equipo Scrum."
  },
  {
    "question": "¿Qué significa la palabra 'desarrollo' en Scrum?",
    "type": "multiple_choice",
    "options": ["Desarrollo de producto", "Software y hardware", "Entorno operativo", "Investigación", "Trabajo complejo"],
    "correctAnswer": [4],
    "explanation": "Se refiere a trabajos complejos que incluyen todas las opciones anteriores y más."
  },
  {
    "question": "¿Cómo puede el Product Owner dar vida a su visión? (Selecciona 3)",
    "type": "multiple_choice",
    "options": ["Planificación empírica", "Aprobación dirección", "Product Backlog e iteración", "Scrum Master", "Articulación constante"],
    "correctAnswer": [0, 2, 4],
    "explanation": "Mediante planificación empírica, iteración con el backlog y articulación frecuente."
  },
  {
    "question": "¿Qué dos atributos son opcionales para un artículo de Product Backlog?",
    "type": "multiple_choice",
    "options": ["Descripciones de pruebas", "Valor", "Descripción", "Orden", "Estimación", "Dependencias"],
    "correctAnswer": [0, 5],
    "explanation": "Descripción, orden, estimación y valor son atributos principales; pruebas y dependencias son a menudo tratados como opcionales."
  },
  {
    "question": "El equipo de desarrollo debe explicar al Product Owner y Scrum Master cómo pretende trabajar.",
    "type": "multiple_choice",
    "options": ["Cierto", "Falso"],
    "correctAnswer": [0],
    "explanation": "Al final de la Planificación, el equipo debe ser capaz de explicar cómo trabajarán."
  },
  {
    "question": "¿Qué muestra el Cone of Doubt?",
    "type": "multiple_choice",
    "options": ["Jerarquía de tareas", "Dependencias", "Cuánto trabajo queda", "Cuánto se sabe sobre el Producto"],
    "correctAnswer": [3],
    "explanation": "Describe la evolución de la cantidad de incertidumbre durante un proyecto."
  },
  {
    "question": "¿Qué ocurre durante el Sprint? (Selecciona tres)",
    "type": "multiple_choice",
    "options": ["Objetivo cambia", "No se pone en peligro el Goal", "Alcance puede renegociarse", "Calidad no disminuye", "Alcance no puede cambiarse"],
    "correctAnswer": [1, 2, 3],
    "explanation": "El alcance se puede renegociar, la calidad no baja y el Sprint Goal no se pone en peligro."
  },
  {
    "question": "Todos los equipos Scrum deberían tener la misma duración de Sprint.",
    "type": "multiple_choice",
    "options": ["Cierto", "Falso"],
    "correctAnswer": [1],
    "explanation": "Scrum no requiere tener Sprints alineados para varios equipos."
  },
  {
    "question": "¿Qué son las características del Product Backlog? (Selecciona tres)",
    "type": "multiple_choice",
    "options": ["Se descarta al final", "Es dinámico", "Podría cerrarse", "Nunca está completo", "Existe mientras exista el producto"],
    "correctAnswer": [1, 3, 4],
    "explanation": "Es dinámico, nunca está completo y persiste mientras exista el producto."
  },
  {
    "question": "¿Cuándo se permite al equipo Scrum interactuar con los Stakeholders?",
    "type": "multiple_choice",
    "options": ["Revisión de Sprint", "Daily Scrum", "Siempre que sea valioso", "Retrospectiva"],
    "correctAnswer": [2],
    "explanation": "Pueden interactuar en cualquier momento que sea valioso para el equipo."
  },
  {
    "question": "¿Cómo ayuda la definición de 'Hecho' al equipo? (Selecciona tres)",
    "type": "multiple_choice",
    "options": ["Calcular velocidad", "Garantiza transparencia", "Evaluar cuándo se completó trabajo", "Ayuda en inspección/adaptación", "Guía cuántos elementos seleccionar"],
    "correctAnswer": [1, 2, 4],
    "explanation": "Ayuda a evaluar el trabajo, guía la selección y garantiza transparencia."
  },
  {
    "question": "Selecciona los cinco Valores Scrum.",
    "type": "multiple_choice",
    "options": ["Valor", "Respeto", "Enfoque", "Apertura", "Agilidad", "Autoorganización", "Efectividad", "Compromiso"],
    "correctAnswer": [0, 1, 2, 3, 7],
    "explanation": "Los valores son compromiso, coraje, enfoque, apertura y respeto."
  },
  {
    "question": "Si un elemento no puede terminarse, ¿se cancela el Sprint?",
    "type": "multiple_choice",
    "options": ["Cierto", "Falso"],
    "correctAnswer": [1],
    "explanation": "Falso, solo se cancela si el objetivo queda obsoleto; si no, se renegocia."
  },
  {
    "question": "¿Cuál es el orden de los artículos en el catálogo?",
    "type": "multiple_choice",
    "options": ["Menos valiosos al final", "Menos claros al inicio", "Alfabético", "Recientes al inicio"],
    "correctAnswer": [0],
    "explanation": "Los elementos más valiosos y claros van en la parte superior."
  },
  {
    "question": "¿Quién puede participar en el Daily Scrum?",
    "type": "multiple_choice",
    "options": ["Scrum Master", "Equipo de desarrollo", "Principales actores", "Product Owner"],
    "correctAnswer": [1],
    "explanation": "Es una reunión interna exclusiva del equipo de desarrollo."
  },
  {
    "question": "¿Cómo ayuda el Scrum Master al Product Owner? (Selecciona tres)",
    "type": "multiple_choice",
    "options": ["Prácticas de vanguardia", "Facilitar eventos", "Comprender la planificación", "Técnicas de gestión de backlog", "Entrenar a la organización"],
    "correctAnswer": [1, 2, 3],
    "explanation": "Ayuda facilitando eventos, comprendiendo la planificación y gestionando el backlog."
  },
  {
    "question": "¿Qué categorías de KVA debería considerar el Product Owner? (Selecciona tres)",
    "type": "multiple_choice",
    "options": ["Reducción de riesgos", "Tiempo de salida al mercado", "Capacidad para innovar", "Valor actual", "Satisfacción empleados", "Desarrollo de capacidades"],
    "correctAnswer": [1, 2, 3],
    "explanation": "Las categorías son valor actual, tiempo de salida al mercado y capacidad para innovar."
  },
  {
    "question": "¿Quiénes son los típicos Actores Clave? (Selecciona tres)",
    "type": "multiple_choice",
    "options": ["Usuarios", "Pagadores", "Desarrolladores", "Decisores de financiación", "Marketing"],
    "correctAnswer": [0, 1, 3],
    "explanation": "Son usuarios, clientes que pagan y clientes internos/decisores de financiación."
  },
  {
    "question": "El Scrum Master no debe permitir que el Product Owner asista a la Planificación si no tiene el Objetivo. ¿Cierto o falso?",
    "type": "multiple_choice",
    "options": ["Falso", "Cierto"],
    "correctAnswer": [0],
    "explanation": "Falso, el objetivo se elabora durante la reunión."
  },
  {
    "question": "Si varios actores tienen intereses diferentes, ¿qué es mejor para el Product Owner?",
    "type": "multiple_choice",
    "options": ["ROI máximo", "Escuchar a quienes financian", "Tiempo de salida al mercado", "Equilibrio inteligente"],
    "correctAnswer": [3],
    "explanation": "El Product Owner debe realizar un equilibrio inteligente de intereses."
  },
  {
    "question": "¿Quién puede decirle al equipo de desarrollo que trabaje según requisitos?",
    "type": "multiple_choice",
    "options": ["Product Owner y Scrum Master", "Principales actores", "Product Owner", "Scrum Master", "Alta dirección"],
    "correctAnswer": [2],
    "explanation": "Solo el Product Owner decide; nadie más puede intervenir."
  },
  {
    "question": "¿Quién participa en la Sprint Review?",
    "type": "multiple_choice",
    "options": ["Principales actores", "CEO", "Product Owner", "Scrum Master", "Equipo de desarrollo"],
    "correctAnswer": [0, 2, 3, 4],
    "explanation": "Equipo Scrum y los interesados."
  },
  {
    "question": "¿Cuál es la fuente de los requisitos para cambios en el producto?",
    "type": "multiple_choice",
    "options": ["Product Backlog", "CEO", "Principales actores"],
    "correctAnswer": [0],
    "explanation": "El Product Backlog es la única fuente de requisitos."
  },
  {
    "question": "¿Quién es responsable del Product Backlog?",
    "type": "multiple_choice",
    "options": ["SM y Equipo", "Product Owner", "Product Owner y Equipo", "Scrum Master", "Product Owner y Scrum Master", "Equipo de desarrollo"],
    "correctAnswer": [1],
    "explanation": "El Product Owner es responsable del Backlog."
  },
  {
    "question": "Deuda técnica... (Selecciona tres)",
    "type": "multiple_choice",
    "options": ["Falta de suministros", "Riesgo real", "Pertenece solo al equipo", "Trabajo adicional", "Calidad a largo plazo"],
    "correctAnswer": [1, 3, 4],
    "explanation": "Es un riesgo real, trabajo adicional y compromete la calidad."
  },
  {
    "question": "¿Es buena idea que el Product Owner haga un proxy o externalice tareas?",
    "type": "multiple_choice",
    "options": ["Sí", "No"],
    "correctAnswer": [1],
    "explanation": "No es aceptable que el Product Owner externalice sus funciones."
  },
  {
    "question": "¿Con qué frecuencia debe el Product Owner comunicar su visión?",
    "type": "multiple_choice",
    "options": ["Cada Daily", "Cada retrospectiva", "Temprano y con frecuencia", "Una vez en la primera Planificación"],
    "correctAnswer": [2],
    "explanation": "Desde el principio y con frecuencia."
  },
  {
    "question": "¿Quién puede cambiar el backlog del Sprint durante el Sprint?",
    "type": "multiple_choice",
    "options": ["Equipo y Product Owner", "Scrum Master", "Product Owner", "Equipo de desarrollo", "Scrum Team"],
    "correctAnswer": [3],
    "explanation": "Solo el equipo de desarrollo."
  },
  {
    "question": "La Sprint Review es simplemente una demostración. ¿Estás de acuerdo?",
    "type": "multiple_choice",
    "options": ["No, hay más actividades", "No, debe incluir ítems anteriores", "Sí, no hay diferencia"],
    "correctAnswer": [0],
    "explanation": "No, hay muchas más actividades como la adaptación del backlog."
  },
  {
    "question": "¿Cuánto debería durar la Planificación del Sprint?",
    "type": "multiple_choice",
    "options": ["10% capacidad", "4 horas", "8 horas", "Hasta descomponer todo"],
    "correctAnswer": [2],
    "explanation": "Limitada a un máximo de ocho horas para un sprint de un mes."
  },
  {
    "question": "¿Quién es responsable de elaborar el Objetivo de Sprint?",
    "type": "multiple_choice",
    "options": ["Product Owner", "Scrum Master", "Scrum Team", "Equipo de desarrollo", "Principales actores"],
    "correctAnswer": [3],
    "explanation": "El equipo Scrum lo elabora tras el pronóstico del equipo de desarrollo."
  },
  {
    "question": "¿Qué incluye la gestión del Product Backlog? (Selecciona tres)",
    "type": "multiple_choice",
    "options": ["Trasladar elementos", "Optimizar valor", "Hacerlo visible/transparente", "Presentar a interesados", "Ordenar artículos"],
    "correctAnswer": [1, 2, 4],
    "explanation": "Optimizar valor, visibilidad y encargar elementos."
  },
  {
    "question": "¿Qué es el Incremento?",
    "type": "multiple_choice",
    "options": ["Elementos liberables", "Elementos \"Hechos\"", "Suma de completados en el Sprint", "Suma de completados en el Sprint + incrementos anteriores"],
    "correctAnswer": [3],
    "explanation": "Es la suma de los completados en el Sprint y el valor de los anteriores."
  },
  {
    "question": "Selecciona las dos áreas de enfoque que NO se consideran en el Desarrollo Orientado al Valor del Product Owner.",
    "type": "multiple_choice",
    "options": ["Toma de decisiones lanzamientos", "Visionario", "Experto en mercado", "Eliminación de obstáculos", "Facilitador interesados", "Maximizador de valor", "Entrenador en autoorganización"],
    "correctAnswer": [3, 6],
    "explanation": "No son funciones del Product Owner."
  },
  {
    "question": "¿Con qué frecuencia deberían producirse los lanzamientos?",
    "type": "multiple_choice",
    "options": ["Con frecuencia para eliminar riesgos", "Cada sprint", "3 meses", "Al final", "6 meses"],
    "correctAnswer": [0],
    "explanation": "Con suficiente frecuencia para eliminar riesgos de desalineación con el mercado."
  },
  {
    "question": "Cuando algo en Scrum frustra al Product Owner, el Product Owner puede delegar al Scrum Master.",
    "type": "multiple_choice",
    "options": ["Falso", "Cierto"],
    "correctAnswer": [0],
    "explanation": "No es aceptable; debería consultar al Scrum Master para implementar Scrum efectivamente."
  },
  {
    "question": "¿Quién es responsable de supervisar el progreso hacia objetivos de alto nivel?",
    "type": "multiple_choice",
    "options": ["Scrum Team", "Product Owner", "Scrum Master", "SM y Equipo", "Product Owner y Equipo", "Equipo de desarrollo"],
    "correctAnswer": [1],
    "explanation": "El Product Owner registra el trabajo y evalúa el progreso."
  },
  {
    "question": "Un equipo depende de un componente externo. ¿Qué debe hacer el Product Owner?",
    "type": "multiple_choice",
    "options": ["Eliminar dependientes", "Nada", "Hacer visible la dependencia", "Transferir al equipo de integración"],
    "correctAnswer": [2],
    "explanation": "Hacer la dependencia visible."
  },
  {
    "question": "¿Quién es responsable de la creación de la definición de 'hecho'?",
    "type": "multiple_choice",
    "options": ["Scrum Master", "Product Owner", "Equipo de desarrollo", "Scrum Team"],
    "correctAnswer": [2],
    "explanation": "El equipo de desarrollo debe definirla si no hay una convención organizacional."
  },
  {
    "question": "¿Cuáles son las tres características más aplicables del Product Owner?",
    "type": "multiple_choice",
    "options": ["Facilitador de interesados", "Maximizador de valor", "Facilitador eventos", "Evangelista", "Experto mercado"],
    "correctAnswer": [0, 1, 4],
    "explanation": "Son Maximizador de valor, Facilitador de interesados y Experto en mercado."
  },
  {
    "question": "¿Qué son los artefactos Scrum?",
    "type": "multiple_choice",
    "options": ["Product Backlog del Sprint", "Catálogo de productos", "Lista de impedimentos", "Incremento", "Objetivo del sprint"],
    "correctAnswer": [0, 1, 3],
    "explanation": "Product Backlog, Sprint Backlog e Incremento."
  },
  {
    "question": "¿Qué ocurre cuando se cancela un Sprint? Marque 3",
    "type": "multiple_choice",
    "options": ["Product Owner acepta liberable", "Reestimar incompletos", "Reemplazar artículos", "Revisar completados", "SM determina responsable"],
    "correctAnswer": [0, 1, 3],
    "explanation": "Se revisan los 'Hechos', se reestiman los incompletos y el Product Owner acepta lo liberable."
  },
  {
    "question": "El Scrum Team está formado por:",
    "type": "multiple_choice",
    "options": ["Principales actores", "Scrum Master", "Product Owner", "Equipo de desarrollo"],
    "correctAnswer": [1, 2, 3],
    "explanation": "Product Owner, equipo de desarrollo y Scrum Master."
  },
  {
    "question": "¿En qué reuniones se permite la participación de los Actores Clave?",
    "type": "multiple_choice",
    "options": ["Retrospectiva", "Daily", "Revisión", "Planificación"],
    "correctAnswer": [2],
    "explanation": "Solo participan en la Revisión (aunque pueden interactuar en otros momentos)."
  },
  {
    "question": "¿Qué es el Sprint Backlog?",
    "type": "multiple_choice",
    "options": ["Elementos seleccionados + plan", "Plan entrega", "Elementos seleccionados", "Elementos seleccionados + Team Backlog"],
    "correctAnswer": [0],
    "explanation": "Elementos seleccionados más el plan para entregar el incremento."
  },
  {
    "question": "¿Quién tiene la 'última palabra' sobre el orden de los artículos?",
    "type": "multiple_choice",
    "options": ["Product Owner", "Scrum Master", "Equipo de desarrollo", "Product Owner y Scrum Master"],
    "correctAnswer": [0],
    "explanation": "El Product Owner tiene la última palabra."
  },
  {
  "question": "¿Qué factores debe tener en cuenta el Product Owner en la decisión de lanzamiento de un incremento? (Seleccionar cuatro)",
    "type": "multiple_choice",
    "options": [
      "Estado del trabajo restante del Sprint actual",
      "Análisis de costes frente a beneficios esperados",
      "Cumplimiento estricto de la Definición de 'Hecho' (DoD)",
      "Limitaciones técnicas o operativas de los clientes",
      "Capacidad de absorción de cambios por parte de los clientes",
      "Aprobación formal de los interesados (Stakeholders)",
      "Riesgo de que el valor aportado no esté alineado con el mercado"
    ],
    "correctAnswer": [1, 4, 6, 7],
    "explanation": "La decisión de lanzamiento no es solo técnica, sino estratégica. Los factores clave son: 1) Análisis de Costes/Beneficios (si el valor justifica el lanzamiento), 2) Capacidad de absorción de los clientes (si pueden adoptar el cambio), 3) Limitaciones de los clientes (problemas de compatibilidad o acceso) y 4) Riesgo de valor desalineado (si lo que lanzamos realmente resuelve una necesidad o aporta el valor esperado)."
  },
  {"question": "¿Por qué debería haber un solo Product Owner para un producto? (Selecciona tres)", "type": "multiple_choice", "options": ["Facilita las cosas para el Scrum Master", "Existe una clara responsabilidad por el éxito o fracaso del producto", "Las decisiones sobre el producto pueden tomarse más rápido", "Es claro para los desarrolladores quién decide el orden de los elementos del Product Backlog", "Garantiza que todos los requisitos estén redactados en detalle por la misma persona"], "correctAnswer": [1, 2, 3], "explanation": "El Product Owner único asegura responsabilidad, agilidad y claridad en la priorización."},
  {"question": "Las dependencias pueden afectar la forma en que el Product Owner decide ordenar artículos del Product Backlog.", "type": "multiple_choice", "options": ["Sí", "No"], "correctAnswer": [0], "explanation": "Las dependencias son un factor crítico para el orden del backlog."},
  {"question": "¿Cuáles son métricas que hablan del valor que el equipo Scrum está aportando? (Selecciona dos)", "type": "multiple_choice", "options": ["Velocidad de sprint", "Momento de salida al mercado", "Puntuaciones de satisfacción del cliente", "Alcance completado", "Alta productividad"], "correctAnswer": [1, 2], "explanation": "El tiempo de salida al mercado y la satisfacción del cliente son indicadores directos de valor generado."},
  {"question": "¿Cuáles son los criterios válidos para ordenar el Product Backlog? (Selecciona tres)", "type": "multiple_choice", "options": ["Valor", "Dependencias entre elementos", "Perspectivas de la anterior Retrospectiva Sprint", "Dependencias relacionadas con otros productos", "Productividad del Scrum Master"], "correctAnswer": [0, 1, 3], "explanation": "El orden se basa principalmente en valor y dependencias (internas o externas)."},
  {"question": "El Product Owner debe tener varios Product Backlogs cuando varios equipos trabajan en el mismo producto.", "type": "multiple_choice", "options": ["Sí", "No"], "correctAnswer": [1], "explanation": "Un producto tiene un solo Product Backlog independientemente del número de equipos."},
  {"question": "¿Qué aspectos podría considerar un Product Owner para asegurarse de que el producto genere valor? (Selecciona tres)", "type": "multiple_choice", "options": ["Cómo está mejorando la velocidad", "Comentarios y datos de los clientes", "Facilidad de uso para los clientes finales", "Porcentaje de funcionalidad utilizada", "Evitar cambios en el alcance del proyecto"], "correctAnswer": [1, 2, 3], "explanation": "El valor se asegura mediante feedback, usabilidad y uso real de la funcionalidad."},
  {"question": "¿Es la Sprint Review un foro adecuado para recopilar opiniones de clientes?", "type": "multiple_choice", "options": ["Sí", "No"], "correctAnswer": [0], "explanation": "La Sprint Review es el evento dedicado a la inspección y colaboración con los interesados."},
  {"question": "El Product Owner es el equivalente a un Project Manager tradicional en un contexto ágil.", "type": "multiple_choice", "options": ["Sí", "No"], "correctAnswer": [1], "explanation": "Son roles con responsabilidades y enfoques fundamentalmente distintos."},
  {"question": "Todo el trabajo que los desarrolladores extraigan debe provenir del Product Backlog.", "type": "multiple_choice", "options": ["Sí", "No"], "correctAnswer": [0], "explanation": "El Product Backlog es la única fuente oficial de requisitos para cualquier cambio en el producto."},
  {"question": "¿Cuál es una señal de que el Product Owner necesita trabajar más estrechamente con el equipo Scrum?", "type": "multiple_choice", "options": ["El Product Owner no trabaja a tiempo completo", "El incremento mostrado en la revisión no es lo que el Product Owner esperaba", "No hay pruebas automatizadas", "Los desarrolladores duplicaron su velocidad"], "correctAnswer": [1], "explanation": "La falta de alineación en lo que se entrega indica una comunicación deficiente."},
  {"question": "Si el Daily Scrum se celebrara cada dos días, ¿qué aspectos podrían verse afectados? (Selecciona tres)", "type": "multiple_choice", "options": ["Los impedimentos se eliminan con retraso", "El Product Owner no podrá actualizar el backlog", "El plan para el Sprint puede no ser preciso", "El Scrum Master no podrá seguir el progreso", "Se reduce la inspección y adaptación del Sprint Backlog"], "correctAnswer": [0, 2, 4], "explanation": "El Daily Scrum es diario para mantener la sincronización, el plan preciso y la resolución rápida de impedimentos."},
  {"question": "¿Quién es responsable de maximizar el valor del producto?", "type": "multiple_choice", "options": ["Los desarrolladores", "Los actores", "El CTO", "El CEO", "El Product Owner", "El Scrum Master"], "correctAnswer": [4], "explanation": "La responsabilidad de maximizar el valor es exclusiva del Product Owner."},
  {"question": "El Product Owner:", "type": "multiple_choice", "options": ["Dirige a los desarrolladores", "Es el guardián de la organización", "Es responsable de optimizar el valor del trabajo de los desarrolladores", "Gestiona el proyecto diariamente", "Establece la definición de Hecho"], "correctAnswer": [2], "explanation": "Su objetivo principal es la optimización del valor del trabajo realizado."},
  {"question": "¿Con qué frecuencia debe cambiarse la composición del equipo de desarrollo?", "type": "multiple_choice", "options": ["Nunca", "Cada Sprint", "Cuando sea necesario, aunque afecte la productividad a corto plazo", "Cada tres Sprints"], "correctAnswer": [2], "explanation": "Aunque la estabilidad es preferible, a veces son necesarios cambios reconociendo el impacto temporal."},
  {"question": "¿Quién decide la estructura y preguntas para el Daily Scrum?", "type": "multiple_choice", "options": ["El Scrum Master", "El Product Owner", "Los desarrolladores", "La dirección"], "correctAnswer": [2], "explanation": "Los desarrolladores deciden cómo estructurar su Daily Scrum para ser más efectivos."},
  {"question": "¿Cuándo se considera implementado un artículo de Product Backlog?", "type": "multiple_choice", "options": ["Cuando los evaluadores dan el visto bueno", "En la Sprint Review", "Cuando no tiene trabajo pendiente y es potencialmente liberable", "Cuando se finalizan tareas de desarrollo", "Cuando el Scrum Master lo declara Hecho"], "correctAnswer": [2], "explanation": "Un elemento está 'Hecho' cuando cumple la definición de 'Hecho' y es potencialmente liberable."},
  {"question": "¿Qué prácticas ayudan a reducir el desperdicio en la gestión del Product Backlog? (Selecciona dos)", "type": "multiple_choice", "options": ["Escribir elementos con años de antelación", "Nombrar a otro Product Owner", "Añadir detalles solo cuando es probable que se implementen pronto", "Eliminar elementos antiguos del Product Backlog"], "correctAnswer": [2, 3], "explanation": "El refinamiento justo a tiemProduct Owner y la limpieza del backlog evitan el desperdicio de esfuerzo."},
  {"question": "¿Quién crea la definición de 'Hecho'?", "type": "multiple_choice", "options": ["La organización", "El Scrum Master", "El Equipo Scrum (si la organización no tiene una convención)", "El Product Owner"], "correctAnswer": [2], "explanation": "El Equipo Scrum debe definirla si la organización no provee una base mínima."},
  {"question": "Los desarrolladores son responsables de lanzar el producto más valioso posible.", "type": "multiple_choice", "options": ["Sí", "No"], "correctAnswer": [1], "explanation": "El Product Owner es responsable del valor; los desarrolladores del incremento de calidad."},
  {"question": "¿Cuándo actualiza el Product Owner el plan del proyecto?", "type": "multiple_choice", "options": ["En los reportes semanales", "Es trabajo del PM", "El Product Backlog es el plan y se actualiza continuamente", "Solo durante la retrospectiva"], "correctAnswer": [2], "explanation": "El Product Backlog actúa como el plan vivo que evoluciona con el aprendizaje."},
  {"question": "El Product Backlog es: (Selecciona tres)", "type": "multiple_choice", "options": ["Gestionado por el Scrum Master", "Gestionado por el Product Owner", "Ordenado por valor, riesgo y dependencias", "Un inventario de elementos que el producto puede incluir", "Una lista finalizada de requisitos futuros"], "correctAnswer": [1, 2, 3], "explanation": "Es un inventario dinámico gestionado por el Product Owner y ordenado por factores clave."},
  {"question": "¿Cuáles son eventos obligatorios en Scrum? (Selecciona dos)", "type": "multiple_choice", "options": ["Scrum diario", "Planificación de lanzamiento", "Revisión de Sprint", "Gráfico de Burndown de Lanzamiento"], "correctAnswer": [0, 2], "explanation": "El Daily Scrum y la Sprint Review son eventos del framework Scrum."},
  {"question": "¿Quién forma parte del Equipo Scrum?", "type": "multiple_choice", "options": ["Product Owner, Desarrolladores, Scrum Master", "Product Owner, PM, Desarrolladores", "Scrum Master, Clientes, Product Owner", "Stakeholders, Desarrolladores, Scrum Master"], "correctAnswer": [0], "explanation": "El Equipo Scrum está compuesto exclusivamente por el Product Owner,los desarrolladores y el Scrum Master."},
  {"question": "Si hay varios equipos trabajando en un producto, ¿quién debe asegurar la integración?", "type": "multiple_choice", "options": ["El Product Owner", "El Scrum Master", "Los desarrolladores de los equipos", "La oficina de gestión de proyectos"], "correctAnswer": [2], "explanation": "Es responsabilidad de los desarrolladores colaborar para producir un incremento integrado."},
  {"question": "¿Qué resultado de la Planificación del Sprint proporciona dirección durante todo el Sprint?", "type": "multiple_choice", "options": ["Plan de Lanzamiento", "Objetivo del sprint (Sprint Goal)", "Actas de planificación", "Product Backlog"], "correctAnswer": [1], "explanation": "El Sprint Goal guía el enfoque y la flexibilidad del equipo durante el Sprint."},
  {"question": "¿Qué aumenta la transparencia del Product Backlog? (Selecciona dos)", "type": "multiple_choice", "options": ["Mantenerlo actualizado con el feedback real", "Dimensionar todos los artículos a años vista", "Refinar los elementos superiores para que quepan en un Sprint", "Actualizarlo solo en la revisión"], "correctAnswer": [0, 2], "explanation": "La información actualizada y el refinamiento de elementos cercanos mejoran la visibilidad."},
  {"question": "¿Quién estima los artículos del Product Backlog?", "type": "multiple_choice", "options": ["El Scrum Master", "El Product Owner", "Los desarrolladores", "El equipo de gestión"], "correctAnswer": [2], "explanation": "Los desarrolladores estiman porque son ellos quienes realizarán el trabajo."},
  {"question": "¿Qué trabajo de Product Owner se puede delegar?", "type": "multiple_choice", "options": ["Escribir todas las historias de usuario", "El orden/priorización del Product Backlog", "La participación en la Sprint Review", "Representar a los interesados"], "correctAnswer": [1], "explanation": "La responsabilidad final es del Product Owner,pero puede delegar las tareas tácticas de gestión del backlog."},
  {"question": "¿Qué es el cono de incertidumbre?", "type": "multiple_choice", "options": ["Muestra que la incertidumbre disminuye conforme se avanza", "Es una herramienta de gestión de riesgos", "Muestra el esfuerzo acumulado", "Es una representación de la deuda técnica"], "correctAnswer": [0], "explanation": "Refleja la reducción de la incertidumbre a medida que el proyecto progresa."},
  {"question": "¿Qué acciones debe realizar el Scrum Master durante el Sprint? (Selecciona dos)", "type": "multiple_choice", "options": ["Seguir el progreso detallado", "Asignar tareas", "Eliminar impedimentos", "Facilitar mejoras en el proceso"], "correctAnswer": [2, 3], "explanation": "Sus labores principales son la eliminación de impedimentos y la facilitación del proceso."},
  {"question": "¿Quién puede actualizar el Sprint Backlog durante el Sprint?", "type": "multiple_choice", "options": ["El Product Owner", "El Scrum Master", "Los desarrolladores", "El Scrum Team"], "correctAnswer": [2], "explanation": "Solo los desarrolladores modifican el Sprint Backlog durante el Sprint."},
  {"question": "Los equipos Scrum deberían tener un Sprint de Liberación específico.", "type": "multiple_choice", "options": ["Sí", "No"], "correctAnswer": [1], "explanation": "No existen 'Sprints de liberación'; cada Sprint produce un incremento liberable."},
  {"question": "Durante el Sprint 0, el Product Owner debe...", "type": "multiple_choice", "options": ["Sprint 0 no existe formalmente en Scrum", "Hacer todo el trabajo de descubrimiento", "Formar el equipo", "Elaborar un Gantt"], "correctAnswer": [0], "explanation": "No existe concepto de 'Sprint 0' dentro del marco oficial de Scrum."},
  {"question": "Si los desarrolladores ven que han seleccionado demasiado trabajo, ¿qué deben hacer?", "type": "multiple_choice", "options": ["Hacer horas extra", "Pedir al Scrum Master que defina tareas", "Colaborar con el Product Owner para eliminar artículos", "Acortar la definición de Hecho"], "correctAnswer": [2], "explanation": "El alcance se puede renegociar con el Product Owner durante el Sprint."},
  {"question": "¿Quién es responsable del trabajo necesario para cumplir la definición de 'Hecho'?", "type": "multiple_choice", "options": ["Aseguramiento de Calidad (QA)", "Product Owner", "Los desarrolladores", "Scrum Master"], "correctAnswer": [2], "explanation": "Los desarrolladores son responsables de todo el trabajo técnico necesario."},
  {"question": "¿Es obligatorio que el Product Owner escriba cada elemento del Backlog?", "type": "multiple_choice", "options": ["Sí", "No"], "correctAnswer": [1], "explanation": "Es responsable de la gestión, pero no tiene que redactar todo personalmente."},
  {"question": "Los desarrolladores tienen problemas configurando el Daily Scrum remoto, ¿qué debe hacer el SM?", "type": "multiple_choice", "options": ["Resolverlo él mismo", "Instruirles cómo hacerlo", "Fomentar que los desarrolladores resuelvan el problema", "Pedir al Product Owner que intervenga"], "correctAnswer": [2], "explanation": "El Scrum Master fomenta la autogestión del equipo."},
  {"question": "¿Cuál es la caja de tiempo para la Sprint Review (en un Sprint de un mes)?", "type": "multiple_choice", "options": ["4 horas", "3 horas", "1 día", "2 horas"], "correctAnswer": [0], "explanation": "El máximo para un Sprint de un mes es de 4 horas."},
  {"question": "Si los desarrolladores no completarán la funcionalidad, el Product Owner debería:", "type": "multiple_choice", "options": ["Exigir horas extra", "Eliminar o modificar elementos con los desarrolladores", "Despedir a los desarrolladores", "Cancelar el producto"], "correctAnswer": [1], "explanation": "La colaboración para ajustar el backlog mantiene el enfoque en el Sprint Goal."},
  {"question": "¿Qué tamaño tiene un artículo 'listo'?", "type": "multiple_choice", "options": ["8 puntos de historia", "Un día de trabajo", "Se puede completar dentro de un Sprint", "Lo que decida el Scrum Master"], "correctAnswer": [2], "explanation": "Un elemento 'listo' debe poderse terminar en un Sprint."},
  {"question": "El Product Owner debe elaborar criterios de aceptación exhaustivos antes de la planificación.", "type": "multiple_choice", "options": ["Sí", "No"], "correctAnswer": [1], "explanation": "El refinamiento es continuo y no requiere una definición total antes de empezar."},
  {"question": "¿Por qué es necesario un Sprint Goal?", "type": "multiple_choice", "options": ["Para proporcionar enfoque y flexibilidad durante el Sprint", "No es necesario", "Para expresar toda la visión del producto", "Para que la dirección evalúe al equipo"], "correctAnswer": [0], "explanation": "El Sprint Goal ofrece un objetivo común y guía las decisiones técnicas."},
  {"question": "¿Qué eligen los desarrolladores?", "type": "multiple_choice", "options": ["La duración del Sprint", "Cómo realizar el trabajo", "El orden del Product Backlog", "Cuándo lanzar el producto"], "correctAnswer": [1], "explanation": "Los desarrolladores deciden autónomamente cómo convertir el backlog en un incremento."},
  {"question": "¿Con qué frecuencia se debe medir la satisfacción del cliente?", "type": "multiple_choice", "options": ["Nunca", "Anualmente", "Cada día", "Frecuentemente"], "correctAnswer": [3], "explanation": "La medición constante ayuda a validar si el producto aporta valor real."},
  {"question": "¿Quién es responsable de crear el objetivo del producto?", "type": "multiple_choice", "options": ["Scrum Master", "Desarrolladores", "Product Owner", "Organización"], "correctAnswer": [2], "explanation": "El Product Owner es el responsable principal del Producto y sus objetivos."},
  {"question": "¿Cuál aspecto no debería afectar el orden del Product Backlog?", "type": "multiple_choice", "options": ["Dependencias", "Valor", "Riesgo", "Herramientas de desarrollo"], "correctAnswer": [3], "explanation": "El orden debe basarse en valor, riesgo y estrategia, no en herramientas técnicas."},
  {"question": "¿Qué actividades son habituales para el Product Owner durante un Sprint? (Selecciona dos)", "type": "multiple_choice", "options": ["Trabajar con interesados", "Participar en cada Daily Scrum", "Analizar reportes de horas", "Refinar el Product Backlog"], "correctAnswer": [0, 3], "explanation": "El Product Owner se enfoca en gestionar interesados y en la preparación del trabajo futuro."},
  {"question": "¿Qué pueden ofrecer los desarrolladores en un Sprint?", "type": "multiple_choice", "options": ["Un prototipo sin probar", "Un reporte funcional", "Un incremento terminado de software funcional", "Un documento de diseño"], "correctAnswer": [2], "explanation": "El objetivo de Scrum es entregar incrementos utilizables y terminados."},
  {"question": "¿Por qué el Daily Scrum debe ser a la misma hora y lugar?", "type": "multiple_choice", "options": ["Para comodidad del Scrum Master", "Para reducir la complejidad", "Por política de la oficina", "Para coincidir con el horario del Product Owner"], "correctAnswer": [1], "explanation": "La consistencia reduce la carga cognitiva y organizativa del equipo."},
  {"question": "¿Cuándo deben los desarrolladores cancelar un Sprint?", "type": "multiple_choice", "options": ["Nunca, solo el Product Owner puede", "Cuando el Scrum Master lo diga", "Cuando no tengan nivel de autoorganización", "Cuando haya impedimentos"], "correctAnswer": [0], "explanation": "La autoridad para cancelar el Sprint reside exclusivamente en el Product Owner."},
  {
    "question": "Para tomar decisiones de inversión, el Product Owner analiza el Coste Total de Propiedad (TCO). ¿Qué costes debe tener en cuenta?",
    "type": "multiple_choice",
    "options": [
      "El coste acumulado sobre el valor ganado del producto.",
      "El dinero invertido en el desarrollo y la entrega del producto.",
      "Todas las inversiones necesarias para concebir, desarrollar, operar y mantener el producto."
    ],
    "correctAnswer": [2],
    "explanation": "El Product Owner es responsable no solo del desarrollo, sino del coste de mantenimiento y operación durante toda la vida útil del producto."
  },
  {
    "question": "¿Qué descripción encaja mejor con el rol del Product Owner?",
    "type": "multiple_choice",
    "options": [
      "Protector de mira.",
      "Analista Jefe de Negocios.",
      "Maximizador de valor.",
      "Recaudador de requisitos.",
      "Gestor de Proyecto 2.0."
    ],
    "correctAnswer": [2],
    "explanation": "La responsabilidad fundamental del Product Owner es maximizar el valor del producto."
  },
  {
    "question": "Verdadero o falso: El valor que aporta un producto solo puede determinarse por los ingresos.",
    "type": "multiple_choice",
    "options": ["Cierto", "Falso"],
    "correctAnswer": [1],
    "explanation": "El valor es subjetivo y varía según el producto y la organización, no se limita únicamente a ingresos monetarios."
  },
  {
    "question": "¿Cuál es el valor principal de liberar el Incremento para los clientes?",
    "type": "multiple_choice",
    "options": [
      "Para conocer la previsión de funcionalidad que se desarrolló.",
      "Para validar las suposiciones hechas al crear el producto.",
      "Para cumplir con el contrato de entrega."
    ],
    "correctAnswer": [1],
    "explanation": "La liberación frecuente permite obtener feedback real y validar si las hipótesis de negocio son correctas."
  },
  {
    "question": "¿Cuál de las siguientes es una métrica clave para un Product Owner al medir el valor?",
    "type": "multiple_choice",
    "options": [
      "Velocidad del equipo.",
      "Coste por historia de usuario.",
      "Satisfacción del cliente y cuota de mercado."
    ],
    "correctAnswer": [2],
    "explanation": "La satisfacción y la cuota de mercado son indicadores directos de valor de negocio, a diferencia de las métricas de eficiencia como la velocidad."
  },
  {
    "question": "¿Quién tiene la autoridad para cancelar un Sprint?",
    "type": "multiple_choice",
    "options": ["El Scrum Master", "El Product Owner", "El equipo de desarrollo", "Los interesados"],
    "correctAnswer": [1],
    "explanation": "Solo el Product Owner tiene la autoridad de cancelar el Sprint si el objetivo del Sprint se vuelve obsoleto."
  },
  {
    "question": "¿Qué debe hacer un Product Owner cuando los desarrolladores tienen dificultades para entender un requisito?",
    "type": "multiple_choice",
    "options": [
      "Escribir una documentación más larga.",
      "Colaborar con los desarrolladores para aclarar y refinar el elemento del backlog.",
      "Pedir al Scrum Master que gestione la comunicación."
    ],
    "correctAnswer": [1],
    "explanation": "El refinamiento es una actividad colaborativa fundamental para asegurar que el equipo entienda el 'qué' y el 'por qué'."
  },
  {
    "question": "¿Es obligatorio que el Product Backlog sea exhaustivo antes de iniciar el primer Sprint?",
    "type": "multiple_choice",
    "options": ["Cierto", "Falso"],
    "correctAnswer": [1],
    "explanation": "No se requiere más que un equipo Scrum y suficientes ideas para iniciar el primer Sprint."
  },
  {
    "question": "¿Qué debería hacer el equipo si el Product Owner no está disponible durante el Sprint?",
    "type": "multiple_choice",
    "options": [
      "Esperar a que vuelva.",
      "Pedir a la dirección que asigne un sustituto.",
      "Tomar las mejores decisiones posibles para seguir progresando hacia el Sprint Goal."
    ],
    "correctAnswer": [2],
    "explanation": "Los desarrolladores deben mantener el flujo y autogestionarse, realineándose con el Product Owner en cuanto este regrese."
  },
  {
    "question": "¿Quién es responsable de la gestión del Product Backlog?",
    "type": "multiple_choice",
    "options": ["El Scrum Master", "El Product Owner", "El equipo de desarrollo", "El Project Manager"],
    "correctAnswer": [1],
    "explanation": "El Product Owner es la única persona responsable de la gestión del Product Backlog."
  },
  {
    "question": "¿Qué significa que el Product Backlog sea 'emergente'?",
    "type": "multiple_choice",
    "options": [
      "Que cambia constantemente sin control.",
      "Que evoluciona a medida que se aprende más sobre el producto y el mercado.",
      "Que debe ser terminado al inicio del proyecto."
    ],
    "correctAnswer": [1],
    "explanation": "El Backlog cambia a medida que obtenemos feedback y descubrimos nuevas necesidades o riesgos."
  },
  {
    "question": "¿Cómo ayuda el Product Owner a los desarrolladores durante el Sprint?",
    "type": "multiple_choice",
    "options": [
      "Asignando tareas específicas a cada miembro.",
      "Estando disponible para aclarar dudas sobre los elementos del backlog.",
      "Supervisando la asistencia al Daily Scrum."
    ],
    "correctAnswer": [1],
    "explanation": "El apoyo principal del Product Owner es aportar claridad y contexto sobre los objetivos y elementos de trabajo."
  },
  {
    "question": "¿Es el Product Owner responsable del trabajo técnico realizado por los desarrolladores?",
    "type": "multiple_choice",
    "options": ["Cierto", "Falso"],
    "correctAnswer": [1],
    "explanation": "La responsabilidad técnica y la calidad del incremento recaen exclusivamente en los desarrolladores."
  },
  {
    "question": "¿Qué impacto tiene la deuda técnica en la capacidad de entrega a largo plazo?",
    "type": "multiple_choice",
    "options": [
      "Aumenta la velocidad.",
      "No tiene impacto si se entrega funcionalidad.",
      "Reduce la agilidad y aumenta el esfuerzo necesario para futuros cambios."
    ],
    "correctAnswer": [2],
    "explanation": "La deuda técnica actúa como un interés que reduce la capacidad de entrega futura del equipo."
  },
  {
    "question": "¿Qué ocurre si un elemento del Backlog no cumple con la Definición de Hecho?",
    "type": "multiple_choice",
    "options": [
      "Se puede liberar de todos modos.",
      "No se puede considerar terminado ni incluirse en el Incremento.",
      "Se marca como terminado con una nota."
    ],
    "correctAnswer": [1],
    "explanation": "La transparencia requiere que solo el trabajo terminado según la definición acordada pueda considerarse parte del Incremento."
  },
  {
    "question": "¿Cuáles son tres afirmaciones incorrectas, falsas o engañosas sobre Scrum?",
    "type": "multiple_choice",
    "options": [
      "Scrum es un marco para desarrollar y mantener productos complejos.",
      "Scrum se basa en el empirismo y el pensamiento lean.",
      "Scrum es un marco que elimina la complejidad.",
      "Cada componente de Scrum cumple un propósito específico y es esencial.",
      "Scrum es como los procesos tradicionales pero con autoorganización para sustituir a los Jefes de Proyecto.",
      "Scrum es una metodología en la que puedes elegir qué partes de Scrum crees que funcionarán para tu entorno."
    ],
    "correctAnswer": [2, 4, 5],
    "explanation": "Scrum no elimina la complejidad, sino que ofrece un marco para tratarla. No es una metodología para elegir partes (los eventos son obligatorios) y no sustituye simplemente a los Jefes de Proyecto."
  },
  {
    "question": "Verdadero o falso: Es obligatorio que el Incremento del producto sea liberado al menos una vez al mes.",
    "type": "multiple_choice",
    "options": ["Cierto", "Falso"],
    "correctAnswer": [1],
    "explanation": "El incremento debe estar listo para ser liberado al final de cada Sprint, pero la decisión de liberarlo comercialmente depende del Product Owner."
  },
  {
    "question": "¿Qué describe mejor el Sprint Backlog?",
    "type": "multiple_choice",
    "options": [
      "Es el plan de trabajo del Product Owner.",
      "Es un plan de los desarrolladores para los desarrolladores, diseñado para alcanzar el Sprint Goal.",
      "Es una lista de tareas que el Scrum Master debe asignar."
    ],
    "correctAnswer": [1],
    "explanation": "El Sprint Backlog pertenece exclusivamente a los desarrolladores y es su plan de ejecución."
  },
  {
    "question": "¿Cuál es el propósito principal de la Sprint Review?",
    "type": "multiple_choice",
    "options": [
      "Que el Scrum Master evalúe al equipo.",
      "Inspeccionar el resultado del Sprint y adaptar el Product Backlog.",
      "Decidir quién es el mejor trabajador del Sprint."
    ],
    "correctAnswer": [1],
    "explanation": "Es un evento de colaboración entre el Equipo Scrum y los interesados para inspeccionar el incremento y ajustar el backlog."
  },
  {
    "question": "¿Quién tiene la autoridad para cancelar un Sprint?",
    "type": "multiple_choice",
    "options": ["El Scrum Master", "El Product Owner", "El equipo de desarrollo", "El CEO"],
    "correctAnswer": [1],
    "explanation": "Solo el Product Owner puede cancelar un Sprint si el objetivo se vuelve obsoleto."
  },
  {
    "question": "¿Qué ocurre si el equipo de desarrollo no logra completar todo el trabajo en el Sprint?",
    "type": "multiple_choice",
    "options": [
      "El equipo es sancionado.",
      "El trabajo se reinicia desde cero.",
      "Se debe renegociar el alcance con el Product Owner y el trabajo no terminado vuelve al Product Backlog."
    ],
    "correctAnswer": [2],
    "explanation": "El alcance es flexible; el trabajo incompleto se reevalúa en el Product Backlog."
  },
  {
    "question": "¿Cuándo debe llevarse a cabo la Retrospectiva del Sprint?",
    "type": "multiple_choice",
    "options": ["Después de la Sprint Review y antes de la siguiente Sprint Planning.", "En cualquier momento del Sprint.", "Al inicio del Sprint."],
    "correctAnswer": [0],
    "explanation": "La retrospectiva cierra el Sprint actual antes de planificar el siguiente."
  },
  {
    "question": "¿Qué es un Incremento?",
    "type": "multiple_choice",
    "options": [
      "Un prototipo que no necesita cumplir la definición de 'Hecho'.",
      "Un paso concreto hacia el Objetivo del Producto que cumple con la Definición de 'Hecho'.",
      "Una lista de nuevas ideas de negocio."
    ],
    "correctAnswer": [1],
    "explanation": "El incremento debe estar terminado y cumplir con la Definición de Hecho (DoD) para ser parte del producto."
  },
  {
    "question": "¿Qué significa 'empirismo' en Scrum?",
    "type": "multiple_choice",
    "options": [
      "Tomar decisiones basadas en la experiencia, la observación y la experimentación.",
      "Seguir un plan detallado al pie de la letra.",
      "Trabajar bajo presión constante."
    ],
    "correctAnswer": [0],
    "explanation": "El empirismo se basa en la transparencia, la inspección y la adaptación."
  },
  {
    "question": "¿Quién es responsable de la Definición de 'Hecho'?",
    "type": "multiple_choice",
    "options": ["El Product Owner", "El Scrum Master", "El Equipo Scrum", "Los interesados"],
    "correctAnswer": [2],
    "explanation": "El Equipo Scrum es responsable de crearla si la organización no tiene una estándar."
  },
  {
    "question": "¿Pueden los desarrolladores trabajar en varios productos al mismo tiempo?",
    "type": "multiple_choice",
    "options": ["Sí", "No"],
    "correctAnswer": [0],
    "explanation": "Scrum no lo prohíbe, aunque es menos eficiente que el enfoque en un solo producto."
  },
  {
    "question": "¿Qué significa que el Scrum Master sea un 'servidor líder'?",
    "type": "multiple_choice",
    "options": [
      "Que debe dar órdenes a todo el equipo.",
      "Que ayuda a eliminar impedimentos y sirve a la organización y al equipo Scrum.",
      "Que es el jefe de los desarrolladores."
    ],
    "correctAnswer": [1],
    "explanation": "Su rol es facilitar, entrenar y eliminar bloqueos, no gestionar personas."
  },
  {
    "question": "¿Qué pasa si un equipo Scrum es demasiado grande?",
    "type": "multiple_choice",
    "options": [
      "Se divide en varios equipos Scrum que comparten un mismo Product Backlog.",
      "Se añaden más Scrum Masters.",
      "Se aumentan las horas del Sprint."
    ],
    "correctAnswer": [0],
    "explanation": "Scrum recomienda equipos pequeños (típicamente 10 o menos) para mantener la agilidad."
  },
  {
    "question": "¿Es el Daily Scrum una reunión de estado para el Scrum Master?",
    "type": "multiple_choice",
    "options": ["Sí", "No"],
    "correctAnswer": [1],
    "explanation": "El Daily Scrum es una reunión de sincronización y planificación para los desarrolladores."
  },
  {
    "question": "¿Qué es la 'caja temporal' (time-box) en Scrum?",
    "type": "multiple_choice",
    "options": [
      "La duración máxima permitida para un evento.",
      "El tiempo que el equipo debe dedicar a descansar.",
      "El tiempo que el Product Owner dedica al Backlog."
    ],
    "correctAnswer": [0],
    "explanation": "Las cajas de tiempo aseguran que los eventos no se extiendan más de lo necesario."
  },
  {
    "question": "¿Cómo se elige el Sprint Goal?",
    "type": "multiple_choice",
    "options": [
      "Lo dicta el Product Owner.",
      "Es el resultado de la colaboración de todo el Equipo Scrum durante la Sprint Planning.",
      "Lo decide la dirección."
    ],
    "correctAnswer": [1],
    "explanation": "El equipo Scrum debe colaborar para definir un objetivo común."
  },
  {
    "question": "¿Quién participa en la Sprint Planning?",
    "type": "multiple_choice",
    "options": ["Solo los desarrolladores.", "Todo el equipo Scrum (PO, Desarrolladores, SM).", "El cliente y el equipo."],
    "correctAnswer": [1],
    "explanation": "La planificación requiere la colaboración de todo el equipo Scrum."
  },
  {
    "question": "¿El Scrum Master debe estar presente en todos los eventos?",
    "type": "multiple_choice",
    "options": ["Sí", "No"],
    "correctAnswer": [1],
    "explanation": "Debe asegurarse de que ocurran, pero no necesariamente asistir a todos si el equipo es autosuficiente."
  },
  {
    "question": "¿Cuál es la responsabilidad principal de los desarrolladores?",
    "type": "multiple_choice",
    "options": ["Maximizar el valor del producto.", "Crear un incremento de calidad cada Sprint.", "Gestionar a los interesados."],
    "correctAnswer": [1],
    "explanation": "Los desarrolladores son responsables de la calidad y de producir el incremento."
  },
  {
    "question": "¿Qué es el Product Backlog?",
    "type": "multiple_choice",
    "options": ["Una lista ordenada de todo lo que se necesita en el producto.", "Un reporte de errores.", "Un plan fijo de fechas."],
    "correctAnswer": [0],
    "explanation": "Es la única fuente de requisitos para el producto."
  },
  {
    "question": "¿Es obligatorio usar Historias de Usuario en Scrum?",
    "type": "multiple_choice",
    "options": ["Sí", "No"],
    "correctAnswer": [1],
    "explanation": "Las historias de usuario son una técnica común, pero no forman parte del marco oficial de Scrum."
  },
  {
    "question": "¿Quién debe asistir a la Sprint Review?",
    "type": "multiple_choice",
    "options": ["El Equipo Scrum y los interesados.", "Solo los directivos.", "Solo el Product Owner."],
    "correctAnswer": [0],
    "explanation": "Es un evento de inspección abierto para colaborar con los interesados clave."
  },
  {
    "question": "¿Qué sucede durante la Retrospectiva?",
    "type": "multiple_choice",
    "options": [
      "Se inspeccionan personas y procesos para crear un plan de mejora.",
      "Se presenta el producto al cliente.",
      "Se definen los requisitos del próximo producto."
    ],
    "correctAnswer": [0],
    "explanation": "El enfoque es la mejora continua del Equipo y el proceso."
  },
  {
    "question": "¿La gestión (management) tiene un rol oficial en Scrum?",
    "type": "multiple_choice",
    "options": ["Sí", "No"],
    "correctAnswer": [1],
    "explanation": "Scrum solo define tres roles: Product Owner, Desarrolladores y Scrum Master."
  },
  {
    "question": "¿Qué pasa si un miembro del equipo no realiza sus tareas?",
    "type": "multiple_choice",
    "options": [
      "El Scrum Master debe despedirlo.",
      "El equipo Scrum debe autogestionarse para resolver el problema.",
      "Se cancela el Sprint."
    ],
    "correctAnswer": [1],
    "explanation": "La autogestión implica que el equipo resuelve internamente sus problemas de desempeño."
  },
  {
    "question": "¿Quién es responsable de la visión del producto?",
    "type": "multiple_choice",
    "options": ["El Product Owner", "El Scrum Master", "Los desarrolladores"],
    "correctAnswer": [0],
    "explanation": "La visión es parte del liderazgo del Product Owner."
  },
  {
    "question": "¿Qué significa 'transparencia'?",
    "type": "multiple_choice",
    "options": [
      "Que el proceso y el trabajo sean visibles para quienes son responsables del resultado.",
      "Que todo el mundo sepa cuánto gana cada uno.",
      "Que los documentos estén en la nube."
    ],
    "correctAnswer": [0],
    "explanation": "La transparencia es uno de los pilares del empirismo."
  },
  {
    "question": "¿Debe el equipo Scrum ser multifuncional?",
    "type": "multiple_choice",
    "options": ["Sí", "No"],
    "correctAnswer": [0],
    "explanation": "Deben tener todas las competencias necesarias para crear el incremento."
  },
  {
    "question": "¿Qué significa que el trabajo de desarrollo sea 'complejo'?",
    "type": "multiple_choice",
    "options": [
      "Que hay mucha incertidumbre y cambio.",
      "Que siempre es difícil programar.",
      "Que requiere muchas horas."
    ],
    "correctAnswer": [0],
    "explanation": "Scrum es una respuesta a entornos complejos donde no se puede predecir todo al inicio."
  },
  {
    "question": "¿Qué significa que un evento tenga una caja temporal?",
    "type": "multiple_choice",
    "options": [
      "El evento no puede durar más de un tiempo máximo.",
      "El evento debe ocurrir a una hora exacta.",
      "El evento es opcional."
    ],
    "correctAnswer": [0],
    "explanation": "Significa que tienen una duración máxima establecida para evitar el desperdicio."
  },
  {
    "question": "¿Cuándo pueden los desarrolladores estimar los elementos del Product Backlog? (Selecciona dos)",
    "type": "multiple_choice",
    "options": [
      "Scrum diario",
      "Actividad de refinamiento del backlog",
      "Revisión de Sprint",
      "Planificación de sprints"
    ],
    "correctAnswer": [1, 3],
    "explanation": "La estimación ocurre principalmente durante el refinamiento, pero también puede realizarse durante la planificación si es necesario."
  },
  {
    "question": "Al medir el Coste Total de Propiedad (TCO), el Product Owner puede saber si el producto está entregando valor o no.",
    "type": "multiple_choice",
    "options": ["Verdadero", "Falso"],
    "correctAnswer": [1],
    "explanation": "El TCO mide costes, pero no es suficiente por sí solo para medir si el producto es exitoso o genera valor."
  },
  {
    "question": "El Product Owner puede delegar la responsabilidad de gestionar el Product Backlog a personas ajenas al equipo Scrum. ¿Verdadero o falso?",
    "type": "multiple_choice",
    "options": ["Verdadero", "Falso"],
    "correctAnswer": [0],
    "explanation": "El Product Owner puede delegar trabajo, pero sigue siendo el único responsable del resultado final."
  },
  {
    "question": "El Product Owner ha recibido tres nuevas ideas para el producto. ¿Qué debería hacer a continuación?",
    "type": "multiple_choice",
    "options": [
      "Informa al equipo Scrum",
      "Añade las ideas a la lista de características del producto",
      "Añade las ideas al Product Backlog"
    ],
    "correctAnswer": [2],
    "explanation": "El Product Backlog es la única fuente de requisitos y todo cambio debe reflejarse ahí."
  },
  {
    "question": "Carla, una desarrolladora, comparte preocupaciones sobre el valor de un ítem con el equipo. ¿Qué valores de Scrum demuestra? (Selecciona dos)",
    "type": "multiple_choice",
    "options": [
      "Valor (Courage)",
      "Compromiso",
      "Apertura",
      "Integridad",
      "Honestidad"
    ],
    "correctAnswer": [0, 2],
    "explanation": "Se requiere Valor para alzar la voz y Apertura para compartir preocupaciones con el equipo."
  },
  {
    "question": "Durante el Sprint, ¿con qué artefactos de Scrum trabajan los desarrolladores? (Selecciona todos los que apliquen)",
    "type": "multiple_choice",
    "options": [
      "Incremento",
      "Gráfico de quema (Burndown)",
      "Product Backlog",
      "Sprint Backlog",
      "Scrum board"
    ],
    "correctAnswer": [0, 2, 3],
    "explanation": "Los artefactos oficiales de Scrum son el Incremento, el Product Backlog y el Sprint Backlog."
  },
  {
    "question": "Los desarrolladores utilizan los siguientes artefactos de Scrum durante el Sprint. (Selecciona dos)",
    "type": "multiple_choice",
    "options": [
      "Incremento",
      "Plan de liberación",
      "Scrum board",
      "Plan de sprint",
      "Sprint Backlog",
      "Plan de proyecto"
    ],
    "correctAnswer": [0, 4],
    "explanation": "Los artefactos oficiales son el Incremento y el Sprint Backlog."
  },
  {
    "question": "¿Quién es responsable de hacer el seguimiento del trabajo restante hacia el Sprint Goal?",
    "type": "multiple_choice",
    "options": ["Los desarrolladores", "El Jefe de Proyecto", "El Product Owner", "El Scrum Master"],
    "correctAnswer": [0],
    "explanation": "Los desarrolladores son autogestionados y responsables de realizar el seguimiento del trabajo restante."
  },
  {
    "question": "¿Cuál es el intervalo de tiempo para el evento de Planificación de Sprints en un Sprint de un mes?",
    "type": "multiple_choice",
    "options": ["Mensualmente", "Cuando se termine", "8 horas", "4 horas"],
    "correctAnswer": [2],
    "explanation": "Para un Sprint de un mes, el tiempo límite (timebox) es de 8 horas."
  },
  {
    "question": "¿Qué prácticas ayudan al Product Owner a minimizar el desperdicio en el mantenimiento del Product Backlog?",
    "type": "multiple_choice",
    "options": ["Mantener elementos en un backlog separado", "Delegar la propiedad del backlog", "Eliminar elementos antiguos", "Describir completamente elementos solo cuando sea probable su implementación"],
    "correctAnswer": [3],
    "explanation": "Eliminar elementos no abordados y solo detallar los que probablemente se implementen ayuda a mantener el foco y reducir desperdicio."
  },
  {
    "question": "¿Por qué los desarrolladores necesitan un Sprint Goal?",
    "type": "multiple_choice",
    "options": ["Para el Sprint 0", "No tiene valor", "Para tener un objetivo común específico", "Para asegurar que todos los elementos se implementen"],
    "correctAnswer": [2],
    "explanation": "El Sprint Goal proporciona un propósito compartido y ayuda a alinear los esfuerzos durante el Sprint."
  },
  {
    "question": "¿Un Scrum Master cumple el mismo rol que un Project Manager tradicional?",
    "type": "multiple_choice",
    "options": ["Cierto", "Falso"],
    "correctAnswer": [1],
    "explanation": "Son roles distintos; el Scrum Master es un líder servidor que facilita el marco Scrum."
  },
  {
    "question": "¿Debe el Product Owner escribir todos los elementos del Product Backlog antes de entregarlos al equipo Scrum?",
    "type": "multiple_choice",
    "options": ["Cierto", "Falso"],
    "correctAnswer": [1],
    "explanation": "El Product Backlog es una lista emergente que se perfecciona de forma colaborativa."
  },
  {
    "question": "¿Qué debe hacer un equipo Scrum con las mejoras de procesos identificadas en la Retrospectiva?",
    "type": "multiple_choice",
    "options": ["Añadirlas al Sprint Backlog del siguiente Sprint", "Rechazarlas si todo funciona bien", "Incluirlas en el Product Backlog", "Que el Scrum Master las elija"],
    "correctAnswer": [0],
    "explanation": "Implementar las mejoras en el próximo Sprint es la adaptación a la inspección."
  },
  {
    "question": "¿De qué es responsable un Product Owner durante un Sprint?",
    "type": "multiple_choice",
    "options": ["Responder preguntas diarias en el Daily", "Informes financieros", "Nada", "Actualizar planes diarios", "Colaborar con stakeholders", "Refinar el Product Backlog"],
    "correctAnswer": [4, 5],
    "explanation": "El Product Owner debe colaborar con los interesados y trabajar en el refinamiento del backlog."
  },
  {
    "question": "¿Debe el Product Owner invitar a los interesados a la Retrospectiva de Sprint?",
    "type": "multiple_choice",
    "options": ["Cierto", "Falso"],
    "correctAnswer": [1],
    "explanation": "La Retrospectiva es un evento interno exclusivo para el equipo Scrum."
  },
  {
    "question": "¿Qué debe hacer el Scrum Master si un stakeholder está descontento con la calidad?",
    "type": "multiple_choice",
    "options": ["Entrenar al Product Owner en comunicación", "Esperar a la retrospectiva", "Decir que los desarrolladores deciden", "Animar al Product Owner a incluir especificaciones de calidad en el Backlog", "Llevar la queja a los testers"],
    "correctAnswer": [3],
    "explanation": "El Product Owner debe gestionar las expectativas de calidad a través del Product Backlog."
  },
  {
    "question": "¿Quién es responsable de crear un incremento valioso en cada Sprint?",
    "type": "multiple_choice",
    "options": ["El equipo Scrum", "Scrum Master", "Produto Owner", "Desarrolladores"],
    "correctAnswer": [0],
    "explanation": "Todo el equipo Scrum tiene la responsabilidad de crear un incremento valioso en cada Sprint."
  },
  {
    "question": "¿Cuántos Product Owners puede tener un mismo producto?",
    "type": "multiple_choice",
    "options": ["Una sola persona", "Varios", "Un comité", "Es responsable de pedir el backlog"],
    "correctAnswer": [0],
    "explanation": "El Product Owner es una sola persona para evitar conflictos y falta de visión."
  },
  {
    "question": "¿Quién es responsable de crear un incremento valioso?",
    "type": "multiple_choice",
    "options": ["Los desarrolladores", "El equipo Scrum completo", "El Scrum Master", "El Product Owner"],
    "correctAnswer": [1],
    "explanation": "Todo el equipo Scrum es responsable del incremento."
  },
  {
    "question": "¿Qué debe tener en cuenta el Product Owner para maximizar el valor?",
    "type": "multiple_choice",
    "options": ["Investigación competitiva", "Comentarios de clientes", "Visión del producto", "Previsión y viabilidad", "Todo lo anterior"],
    "correctAnswer": [4],
    "explanation": "Todos estos factores son esenciales para gestionar el valor del producto."
  },
  {
    "question": "¿Todo equipo Scrum debe tener un Product Owner y un Scrum Master?",
    "type": "multiple_choice",
    "options": ["Falso", "Solo si se solicita", "Verdadero"],
    "correctAnswer": [2],
    "explanation": "Ambos roles son esenciales y deben estar disponibles durante todo el Sprint."
  },
  {
    "question": "¿Quién es el dueño del Sprint Backlog?",
    "type": "multiple_choice",
    "options": ["El Scrum Master", "El equipo Scrum", "El Product Owner", "Los desarrolladores"],
    "correctAnswer": [3],
    "explanation": "El Sprint Backlog es un plan propiedad de los desarrolladores."
  },
  {
    "question": "¿Qué tema es el principal en una Sprint Review?",
    "type": "multiple_choice",
    "options": ["El proceso Scrum", "Prácticas de ingeniería", "El Incremento del producto", "Todo lo anterior"],
    "correctAnswer": [2],
    "explanation": "El foco es inspeccionar el incremento del producto."
  },
  {
    "question": "¿Quién decide cuándo actualizar el Sprint Backlog?",
    "type": "multiple_choice",
    "options": ["El Jefe de Proyecto", "El equipo Scrum", "Los desarrolladores", "El Product Owner"],
    "correctAnswer": [2],
    "explanation": "Solo los desarrolladores pueden cambiar el contenido de su plan durante el Sprint."
  },
  {
    "question": "¿Es posible cancelar un Sprint?",
    "type": "multiple_choice",
    "options": ["Sí, solo por el Product Owner", "No", "Sí, por el equipo"],
    "correctAnswer": [0],
    "explanation": "Solo el Product Owner tiene la autoridad de cancelar un Sprint si el objetivo queda obsoleto."
  },
  {
    "question": "¿Pueden los desarrolladores cancelar un Sprint por cuenta propia?",
    "type": "multiple_choice",
    "options": ["Sí", "No"],
    "correctAnswer": [1],
    "explanation": "Deben colaborar para adaptarse, no cancelar por cuenta propia."
  },
  {
    "question": "¿Qué ocurre si los desarrolladores tienen más trabajo del que pueden completar?",
    "type": "multiple_choice",
    "options": ["Eliminan o cambian elementos del Backlog", "Inician y supervisan", "Reclutan más", "Cancela el Sprint", "Horas extra"],
    "correctAnswer": [0],
    "explanation": "Deben colaborar con el Product Owner para ajustar el alcance de forma transparente."
  },
  {
    "question": "¿Es el Product Owner un Project Manager?",
    "type": "multiple_choice",
    "options": ["Cierto", "Falso"],
    "correctAnswer": [1],
    "explanation": "Son roles diferentes; el Product Owner gestiona el producto, no el proyecto."
  },
  {
    "question": "¿Deben los criterios de aceptación estar completos antes de la Planificación?",
    "type": "multiple_choice",
    "options": ["Cierto", "Falso"],
    "correctAnswer": [1],
    "explanation": "No son obligatorios antes de la planificación, aunque ayudan a aclarar expectativas."
  },
  {
    "question": "¿Qué ventajas tiene compartir un Objetivo de Producto?",
    "type": "multiple_choice",
    "options": ["Estimar fechas", "No es obligatorio", "Ninguna ventaja", "Dirección general clara", "Mejor enfoque en decisiones"],
    "correctAnswer": [4, 5],
    "explanation": "Ayuda a la dirección y al enfoque del equipo en sus decisiones."
  },
  {
    "question": "¿Quién es responsable del valor de un elemento de Product Backlog?",
    "type": "multiple_choice",
    "options": ["Los desarrolladores", "El equipo Scrum", "El Product Owner", "El Scrum Master"],
    "correctAnswer": [2],
    "explanation": "El valor lo determina el Product Owner."
  },
  {
    "question": "¿Cuándo debe realizarse el refinamiento del Backlog?",
    "type": "multiple_choice",
    "options": ["Continuamente durante el Sprint", "Solo en Sprint 0", "Lo hace el analista", "Tras cada Sprint"],
    "correctAnswer": [0],
    "explanation": "Es un proceso continuo que involucra a todo el equipo Scrum."
  },
  {
    "question": "¿Cuál es la duración del Daily Scrum?",
    "type": "multiple_choice",
    "options": ["4 horas", "La misma hora cada día", "2 minutos por persona", "15 minutos"],
    "correctAnswer": [3],
    "explanation": "Es un evento de 15 minutos para sincronización."
  },
  {
  "question": "¿Qué asegura la transparencia en el Product Backlog?",
  "type": "multiple_choice",
  "options": [
    "Que esté ordenado y visible para todos los interesados",
    "Que contenga solo tareas técnicas",
    "Que utilice la técnica de priorización MoSCoW",
    "Que incluya únicamente el trabajo de los próximos dos Sprints"
  ],
  "correctAnswer": [0],
  "explanation": "La transparencia en Scrum requiere que los artefactos sean visibles y comprensibles. Un Product Backlog es transparente cuando está ordenado (para que todos sepan qué es lo prioritario) y está disponible para todos los interesados, permitiendo una inspección y adaptación real del producto."
  },
  {
    "question": "¿Cómo se compone el Sprint Backlog?",
    "type": "multiple_choice",
    "options": ["Solo por el Product Backlog", "Solo el Objetivo de Sprint", "Objetivo, elementos seleccionados y plan", "Por lo que ordene el jefe"],
    "correctAnswer": [2],
    "explanation": "Incluye el Product Ownerrqué, el qué y el cómo."
  },
  {
  "question": "¿Qué temas son adecuados para debatir durante una Sprint Retrospective?",
  "type": "multiple_choice",
  "options": [
    "Dinámicas y relaciones dentro del equipo",
    "Valor comercial del Product Backlog",
    "Eficacia de los procesos y herramientas de trabajo",
    "Revisión y ajuste de la Definición de 'Hecho'",
    "Priorización de elementos en el Product Backlog"
  ],
  "correctAnswer": [0, 2, 3],
  "explanation": "La Sprint Retrospective se centra en la inspección y adaptación del equipo Scrum. Los temas clave incluyen mejorar la colaboración (relaciones), optimizar cómo se realiza el trabajo (procesos y herramientas) y asegurar que los estándares de calidad (Definición de 'Hecho') sigan siendo adecuados."
  },
  {
    "question": "¿Qué debe hacer un Product Owner ante una oportunidad de negocio repentina?",
    "type": "multiple_choice",
    "options": ["Ignorarla", "Consultar al Scrum Master", "Evaluarla en el Product Backlog", "Añadirla inmediatamente"],
    "correctAnswer": [2],
    "explanation": "El Product Owner debe gestionar el backlog priorizando el valor."
  },
  {
    "question": "¿Pueden los desarrolladores trabajar en elementos no seleccionados?",
    "type": "multiple_choice",
    "options": ["Sí", "No"],
    "correctAnswer": [1],
    "explanation": "Deben enfocarse en el Sprint Backlog para alcanzar el objetivo."
  },
  {
    "question": "¿Debe el Scrum Master resolver todos los conflictos?",
    "type": "multiple_choice",
    "options": ["Cierto", "Falso"],
    "correctAnswer": [1],
    "explanation": "El Scrum Master facilita, no gestiona directamente al equipo."
  },
  {
    "question": "¿Qué significa que el incremento esté Hecho?",
    "type": "multiple_choice",
    "options": ["Cumple la Definición de Hecho", "Lo probó el Product Owner", "El cliente lo aceptó", "Está liberado"],
    "correctAnswer": [0],
    "explanation": "Debe cumplir estrictamente la Definición de Hecho."
  },
  {
    "question": "¿Puede el Sprint Backlog cambiar durante el Sprint?",
    "type": "multiple_choice",
    "options": ["Cierto", "Falso"],
    "correctAnswer": [0],
    "explanation": "Es un plan que evoluciona conforme se aprende más."
  },
  {
    "question": "¿Quién facilita la Sprint Review?",
    "type": "multiple_choice",
    "options": ["El Producto Owner", "El Scrum Master", "Los desarrolladores", "El stakeholder"],
    "correctAnswer": [1],
    "explanation": "El Product Owner asegura que los stakeholders conozcan la evolución del incremento."
  },
  {
    "question": "¿Es obligatorio el Sprint Goal?",
    "type": "multiple_choice",
    "options": ["Cierto", "Falso"],
    "correctAnswer": [0],
    "explanation": "Es fundamental para dar foco y propósito."
  },
  {
    "question": "¿Qué sucede si la tecnología cambia durante un Sprint?",
    "type": "multiple_choice",
    "options": ["Se cancela", "Se adapta el plan", "Se ignora", "Se pide permiso al jefe"],
    "correctAnswer": [1],
    "explanation": "Los desarrolladores adaptan su plan de trabajo diariamente."
  },
  {
    "question": "¿Quién es responsable de la calidad?",
    "type": "multiple_choice",
    "options": ["El tester", "El Scrum Master", "El equipo Scrum", "Nadie"],
    "correctAnswer": [2],
    "explanation": "La calidad es responsabilidad de todo el equipo."
  },
  {
    "question": "¿Qué es un incremento?",
    "type": "multiple_choice",
    "options": ["Un prototipo", "La suma de elementos realizados", "La documentación", "Una reunión"],
    "correctAnswer": [1],
    "explanation": "Es la suma de los elementos de Product Backlog realizados."
  },
  {
    "question": "¿El Product Owner asiste al Daily Scrum?",
    "type": "multiple_choice",
    "options": ["Obligatorio", "No puede", "Opcional", "Solo si es PO"],
    "correctAnswer": [2],
    "explanation": "Solo es obligatorio para los desarrolladores."
  },
  {
    "question": "¿Qué define la duración de un Sprint?",
    "type": "multiple_choice",
    "options": ["El Scrum Master", "El Product Owner", "Es fija por contrato", "El equipo Scrum"],
    "correctAnswer": [3],
    "explanation": "La duración se establece para asegurar consistencia."
  },
  {
    "question": "¿Quién refina el backlog?",
    "type": "multiple_choice",
    "options": ["El equipo Scrum", "Solo el Product Owner", "El Scrum Master", "Un comité"],
    "correctAnswer": [0],
    "explanation": "Es un proceso colaborativo de todo el equipo."
  },
  {
    "question": "¿Es obligatorio tener incrementos cada Sprint?",
    "type": "multiple_choice",
    "options": ["Cierto", "Falso"],
    "correctAnswer": [0],
    "explanation": "Es el objetivo de cada Sprint."
  },
  {
    "question": "¿Puede el equipo Scrum tener varios Scrum Masters?",
    "type": "multiple_choice",
    "options": ["Sí", "No"],
    "correctAnswer": [0],
    "explanation": "La guía no prohíbe tener más de un SM, aunque el rol es único en responsabilidades."
  },
  {
    "question": "¿Cómo se mide el progreso del Sprint?",
    "type": "multiple_choice",
    "options": ["Burn-down chart", "Horas trabajadas", "Inspección diaria", "KPIs"],
    "correctAnswer": [2],
    "explanation": "Mediante el Daily Scrum, los desarrolladores inspeccionan su progreso."
  },
  {
    "question": "¿Qué significa autogestión?",
    "type": "multiple_choice",
    "options": ["Hacer lo que se quiere", "Organizar el propio trabajo", "No tener jefe", "Seguir órdenes"],
    "correctAnswer": [1],
    "explanation": "Significa que el equipo organiza y gestiona su propio trabajo."
  },
  {
    "question": "Un Development Team ha estado trabajando en varios Sprint, el Product Owner comparte su plan para las próximas interacciones, este plan es de alto nivel que describe cómo es probable que crezca el producto. ¿Cuál es el artefacto al que el Product Owner se refiere?",
    "type": "multiple_choice",
    "options": ["Sprint Backlog", "Product Backlog", "Roadmap del Producto", "Project Charter"],
    "correctAnswer": [1],
    "explanation": "El Product Backlog es el artefacto que contiene el plan de alto nivel y la evolución esperada del producto."
  },
  {
    "question": "¿Qué es importante en todos los proyectos de Scrum? 1. La Auto-organización. 2. Jerarquías claras de la empresa. 3. Comunicación. 4. Mejora continua.",
    "type": "multiple_choice",
    "options": ["1, 2, 3 y 4", "1, 3 y 4", "1, 4", "1, 2 y 3"],
    "correctAnswer": [1],
    "explanation": "La auto-organización, la comunicación y la mejora continua son pilares fundamentales en Scrum."
  },
  {
    "question": "¿Cuál de las siguientes no es una responsabilidad del Product Owner?",
    "type": "multiple_choice",
    "options": ["Garantizar el ROI", "Ejecución de la Daily Scrum", "Reunir los PBI del Product Backlog", "La inspección del trabajo en el Sprint Review Meeting"],
    "correctAnswer": [1],
    "explanation": "La Daily Scrum es responsabilidad exclusiva de los desarrolladores; el Product Owner no la ejecuta."
  },
  {
    "question": "¿Cuáles son responsabilidades o actividades del Product Owner? 1. Expresar claramente los elementos del Product Backlog. 2. Ordenar los elementos en el Product Backlog. 3. Entender y practicar la agilidad.",
    "type": "multiple_choice",
    "options": ["Solo 1 y 2", "Solo 2 y 3", "Solo 1 y 3", "Todas"],
    "correctAnswer": [3],
    "explanation": "Todas las mencionadas son funciones críticas para la gestión efectiva del Product Owner."
  },
  {
    "question": "¿Cuál de los siguientes enunciados es CIERTO con respecto a los Project Charter en Scrum?",
    "type": "multiple_choice",
    "options": ["Es contractual fijando la triple restricción", "Establece una línea base", "No se encuentra definido en la Guía de Scrum", "Es obligatorio para iniciar el Sprint"],
    "correctAnswer": [2],
    "explanation": "El concepto de Project Charter no forma parte del marco de trabajo Scrum definido en su guía oficial."
  },
  {
    "question": "La liberación de un producto terminado (DoD) es responsabilidad del:",
    "type": "multiple_choice",
    "options": ["Scrum Master", "Development Team", "Product Owner", "Stakeholders"],
    "correctAnswer": [2],
    "explanation": "El Product Owner es quien toma la decisión final sobre cuándo liberar un incremento al mercado."
  },
  {
    "question": "¿En equipos pequeños, el Scrum Master puede asumir también el rol del Product Owner?",
    "type": "multiple_choice",
    "options": ["Verdadero", "Falso"],
    "correctAnswer": [1],
    "explanation": "Los roles en Scrum son distintos y no deben ser asumidos por la misma persona para mantener la separación de responsabilidades."
  },
  {
    "question": "¿Quiénes son los involucrados en la definición del Sprint Goal?",
    "type": "multiple_choice",
    "options": ["Solo el Product Owner", "El Product Owner y el Development Team", "Solo el Development Team", "El equipo Scrum completo"],
    "correctAnswer": [1],
    "explanation": "El Sprint Goal se define colaborativamente durante la Sprint Planning entre el Product Owner y los desarrolladores."
  },
  {
    "question": "¿Cómo deben ordenarse los elementos (PBI) en un Product Backlog?",
    "type": "multiple_choice",
    "options": ["Por fecha de creación", "Por prioridad e importancia para el negocio", "Alfabéticamente", "Por esfuerzo técnico"],
    "correctAnswer": [1],
    "explanation": "El orden debe basarse en el valor de negocio y la maximización del retorno de inversión."
  },
  {
    "question": "La definición de terminado (DoD) y los criterios de aceptación, son:",
    "type": "multiple_choice",
    "options": ["Lo mismo", "Conceptos diferentes", "Obligatorios solo para el Product Owner", "Parte del Sprint Goal"],
    "correctAnswer": [1],
    "explanation": "La DoD es una medida de calidad del incremento, mientras que los criterios de aceptación son específicos de cada PBI."
  },
  {
    "question": "El Product Owner debe participar en el Daily Meeting:",
    "type": "multiple_choice",
    "options": ["Verdadero", "Falso"],
    "correctAnswer": [1],
    "explanation": "La Daily es para los desarrolladores; el Product Owner puede asistir pero no tiene un rol activo en ella."
  },
  {
    "question": "¿Quién es responsable de mantener a los stakeholders informados sobre el progreso del desarrollo?",
    "type": "multiple_choice",
    "options": ["El Scrum Master", "El equipo de desarrollo", "El Product Owner", "El cliente"],
    "correctAnswer": [2],
    "explanation": "La gestión de los stakeholders y la comunicación de expectativas es una labor clave del Product Owner."
  },
  {
    "question": "En un Sprint de un mes, el Daily Standup Meeting tiene una duración máxima de:",
    "type": "multiple_choice",
    "options": ["30 minutos", "15 minutos", "1 hora", "Depende del equipo"],
    "correctAnswer": [1],
    "explanation": "Independientemente de la duración del Sprint, el Daily Scrum siempre está limitado a 15 minutos."
  },
  {
    "question": "En un Sprint corto tiene más riesgo que un Sprint largo.",
    "type": "multiple_choice",
    "options": ["Verdadero", "Falso"],
    "correctAnswer": [1],
    "explanation": "Los Sprints cortos reducen el riesgo al permitir obtener feedback y adaptarse más rápido."
  },
  {
    "question": "El Sprint Planning tiene un máximo de duración de ocho horas para un Sprint de un mes.",
    "type": "multiple_choice",
    "options": ["Verdadero", "Falso"],
    "correctAnswer": [0],
    "explanation": "Es la regla establecida en la Guía de Scrum para el evento de planificación."
  },
  {
    "question": "¿Cuál es la secuencia más común en un ciclo de vida de Scrum?",
    "type": "multiple_choice",
    "options": ["Sprint Planning, Daily Scrum, Sprint Review, Sprint Retrospective", "Sprint Planning, Sprint Review, Daily Scrum, Sprint Retrospective", "Daily Scrum, Sprint Planning, Sprint Retrospective, Sprint Review", "Ninguna de las anteriores"],
    "correctAnswer": [0],
    "explanation": "Sigue el orden lógico de planificación, ejecución diaria, revisión y reflexión."
  },
  {
    "question": "El Product Owner preside el Sprint Planning Meeting.",
    "type": "multiple_choice",
    "options": ["Verdadero", "Falso"],
    "correctAnswer": [0],
    "explanation": "El Product Owner asegura que los temas más relevantes se discutan en la planificación."
  },
  {
    "question": "¿Scrum recomienda la creación de sub-equipos en el Development Team?",
    "type": "multiple_choice",
    "options": ["Sí", "No", "Solo para testing", "Solo para análisis de negocio"],
    "correctAnswer": [1],
    "explanation": "Scrum promueve equipos multifuncionales sin sub-equipos especializados dentro de los desarrolladores."
  },
  {
    "question": "El Backlog Refinement Meeting en Sprints de un mes, suele durar:",
    "type": "multiple_choice",
    "options": ["Hasta 8 horas", "15 minutos diarios", "Entre el 8% y 10% de la capacidad del Sprint", "No tiene duración fija"],
    "correctAnswer": [2],
    "explanation": "Es la recomendación estándar para asegurar que el trabajo esté preparado."
  },
  {
    "question": "Para un proyecto importante, ¿cuántos Product Owners se recomiendan?",
    "type": "multiple_choice",
    "options": ["Varios", "Solo uno", "Un comité", "Uno por cada stakeholder"],
    "correctAnswer": [1],
    "explanation": "Solo debe haber un Product Owner para tener una visión única y evitar conflictos."
  },
  {
    "question": "¿Qué técnica se utiliza para estimar en Scrum?",
    "type": "multiple_choice",
    "options": ["Planning Poker", "Puntos de historia", "Ninguna técnica es obligatoria en la Guía", "T-shirt sizing"],
    "correctAnswer": [2],
    "explanation": "Aunque se usan técnicas como Planning Poker, Scrum no prescribe ninguna en particular."
  },
  {
    "question": "Si dos Development Teams trabajan en el mismo producto, ¿tienen diferentes Product Backlogs?",
    "type": "multiple_choice",
    "options": ["Sí", "No"],
    "correctAnswer": [1],
    "explanation": "Un producto siempre tiene un solo Product Backlog, independientemente de cuántos equipos trabajen en él."
  },
  {
    "question": "La suma de todos los Sprints Backlogs es el Product Backlog:",
    "type": "multiple_choice",
    "options": ["Verdadero", "Falso"],
    "correctAnswer": [1],
    "explanation": "Son artefactos diferentes con propósitos distintos; el Sprint Backlog es solo un plan para el Sprint actual."
  },
  {
    "question": "El Development Team participa en la Daily Scrum:",
    "type": "multiple_choice",
    "options": ["Verdadero", "Falso"],
    "correctAnswer": [0],
    "explanation": "Es el evento principal de inspección y adaptación de los desarrolladores."
  },
  {
  "question": "En Scrum, ¿es obligatorio entregar el Product Increment al cliente al finalizar cada Sprint?",
  "type": "multiple_choice",
  "options": [
    "Verdadero, siempre se debe entregar al finalizar el Sprint.",
    "Falso, el incremento debe estar en estado 'potencialmente entregable', pero la decisión de lanzamiento depende del Product Owner."
  ],
  "correctAnswer": [1],
  "explanation": "El incremento debe cumplir con la Definición de 'Hecho' para ser 'potencialmente entregable', pero el Product Owner decide si el incremento aporta suficiente valor para ser lanzado al cliente en ese momento o si es mejor esperar a futuras iteraciones."
  },
  {
    "question": "Las User Stories ayudan a definirlas el Product Owner.",
    "type": "multiple_choice",
    "options": ["Verdadero", "Falso"],
    "correctAnswer": [0],
    "explanation": "El Product Owner lidera la definición, aunque el equipo Scrum colabora en los detalles."
  },
  {
    "question": "El Product Owner estima las User Stories.",
    "type": "multiple_choice",
    "options": ["Verdadero", "Falso"],
    "correctAnswer": [1],
    "explanation": "Los desarrolladores son quienes estiman el esfuerzo necesario para realizar el trabajo."
  },
  {
    "question": "¿Es verdad que solo el Product Owner tiene la autoridad para cancelar el Sprint?",
    "type": "multiple_choice",
    "options": ["Verdadero", "Falso"],
    "correctAnswer": [0],
    "explanation": "Aunque es la única persona con la autoridad, puede hacerlo influenciado por otros interesados."
  },
  {
    "question": "El Product Backlog se suele dividir en:",
    "type": "multiple_choice",
    "options": ["Nunca está completo", "Cambia constantemente", "Evoluciona", "Todas las anteriores"],
    "correctAnswer": [3],
    "explanation": "Es un artefacto vivo que crece y cambia con el producto."
  },
  {
    "question": "Un __________ se crea durante la primera mitad de la Sprint Planning y un __________ durante la segunda.",
    "type": "multiple_choice",
    "options": ["Sprint Goal, Sprint Backlog", "Product Backlog, Sprint Goal", "Sprint Backlog, Sprint Goal", "Release Plan, Sprint Goal"],
    "correctAnswer": [0],
    "explanation": "Primero se define el objetivo y luego el plan detallado para lograrlo."
  },
  {
    "question": "¿Cuál es la principal diferencia entre el Product Backlog y el Sprint Backlog?",
    "type": "multiple_choice",
    "options": ["No hay diferencia", "El Sprint Backlog es un subconjunto del Product Backlog", "El Product Backlog es temporal", "El Sprint Backlog es a largo plazo"],
    "correctAnswer": [1],
    "explanation": "El Sprint Backlog es una extracción de trabajo del Product Backlog para el corto plazo."
  },
  {
    "question": "¿Qué ocurre cuando el Sprint se cancela?",
    "type": "multiple_choice",
    "options": ["Se borra todo", "Los elementos se evalúan y regresan al Product Backlog", "Se inicia otro Sprint inmediatamente", "El equipo es despedido"],
    "correctAnswer": [1],
    "explanation": "Se recupera el trabajo terminado y se devuelve al backlog lo incompleto."
  },
  {
    "question": "¿Quién determina cuándo es apropiado actualizar el Sprint Backlog durante un Sprint?",
    "type": "multiple_choice",
    "options": ["El Product Owner", "El Scrum Master", "El Development Team", "Los stakeholders"],
    "correctAnswer": [2],
    "explanation": "Los desarrolladores son los dueños de su plan y lo adaptan diariamente."
  },
  {
    "question": "El Sprint Goal se selecciona antes de crear el Sprint Backlog.",
    "type": "multiple_choice",
    "options": ["Verdadero", "Falso"],
    "correctAnswer": [0],
    "explanation": "El objetivo guía la selección del trabajo."
  },
  {
    "question": "¿En cuál de los siguientes casos se podría cancelar un Sprint?",
    "type": "multiple_choice",
    "options": ["Cuando el equipo está cansado", "Si el Sprint Goal queda obsoleto", "Si el Product Owner se va de vacaciones", "Nunca se puede"],
    "correctAnswer": [1],
    "explanation": "La cancelación es una medida extrema cuando el objetivo pierde sentido."
  },
  {
    "question": "¿Cuáles son los eventos en Scrum?",
    "type": "multiple_choice",
    "options": ["Daily Meeting", "Sprint Retrospective", "Sprint Review y Sprint Planning", "Todas las anteriores"],
    "correctAnswer": [3],
    "explanation": "Todos estos constituyen los eventos definidos en el marco Scrum."
  },
  {
    "question": "¿El Product Owner es la única persona responsable de gestionar el Product Backlog?",
    "type": "multiple_choice",
    "options": ["Verdadero", "Falso"],
    "correctAnswer": [0],
    "explanation": "Es la única persona responsable, aunque la actividad sea colaborativa."
  },
  {
    "question": "El refinamiento consume usualmente:",
    "type": "multiple_choice",
    "options": ["No más del 10% de la capacidad del Development Team", "20%", "30%", "40%"],
    "correctAnswer": [0],
    "explanation": "Es una regla de oro para mantener el equilibrio entre refinamiento y entrega."
  },
  {
    "question": "El propósito de cada Sprint es entregar Incrementos de funcionalidad que se ajusten a la Definición de Done.",
    "type": "multiple_choice",
    "options": ["Verdadero", "Falso"],
    "correctAnswer": [0],
    "explanation": "Ese es el objetivo fundamental de la iteración en Scrum."
  },
  {
    "question": "¿Cuáles son los artefactos en Scrum?",
    "type": "multiple_choice",
    "options": ["Product Backlog, Sprint Backlog y Product Increment", "Sprint Planning y Review", "Product Owner y Scrum Master", "No existen artefactos"],
    "correctAnswer": [0],
    "explanation": "Estos tres son los únicos artefactos definidos en la Guía de Scrum."
  },
  {
    "question": "El Product Owner es una única persona, no un comité. Si un comité quiere cambiar la prioridad, debe hacerlo a través del Product Owner.",
    "type": "multiple_choice",
    "options": ["Verdadero", "Falso"],
    "correctAnswer": [0],
    "explanation": "El Product Owner es el único responsable de la gestión del backlog y canalizador de las decisiones de prioridad."
  },
  {
    "question": "La velocidad se interpreta como la cantidad de Historias de Usuario promedio que entrega un desarrollador por iteración.",
    "type": "multiple_choice",
    "options": ["Verdadero", "Falso"],
    "correctAnswer": [1],
    "explanation": "La velocidad es una medida del trabajo total completado por el equipo, no una métrica individual de Historias de Usuario."
  },
  {
    "question": "Toda la organización debe respetar las decisiones del Product Owner reflejadas en el contenido y priorización del Product Backlog.",
    "type": "multiple_choice",
    "options": ["Verdadero", "Falso"],
    "correctAnswer": [0],
    "explanation": "La autoridad del Product Owner debe ser respetada para que pueda maximizar efectivamente el valor del producto."
  },
  {
    "question": "La gestión del Product Backlog incluye (marque 2):",
    "type": "multiple_choice",
    "options": ["Asegurar que los objetivos sean entendidos por todos", "Expresar claramente los elementos y el Objetivo del Producto", "Administrar los salarios del equipo", "Redactar el código fuente"],
    "correctAnswer": [0, 1],
    "explanation": "El Product Owner es responsable de la claridad y comunicación de los objetivos y elementos del producto."
  },
  {
  "question": "¿Cuáles de las siguientes opciones corresponden a los 4 valores fundamentales del Manifiesto Ágil?",
  "type": "multiple_choice",
  "options": [
    "Individuos e interacciones sobre procesos y herramientas",
    "Seguir un plan establecido sobre la respuesta ante el cambio",
    "Software funcionando sobre documentación extensiva",
    "Colaboración con el cliente sobre negociación contractual",
    "Respuesta ante el cambio sobre seguir un plan",
    "Documentación completa sobre software funcionando"
  ],
  "correctAnswer": [0, 2, 3, 4],
  "explanation": "Los 4 valores del Manifiesto Ágil son: 1) Individuos e interacciones, 2) Software funcionando, 3) Colaboración con el cliente, y 4) Respuesta ante el cambio. Las opciones que incluyen 'Seguir un plan' o 'Documentación completa' son incorrectas porque representan las prácticas tradicionales que el Manifiesto Ágil decide valorar menos."
  },
  {
    "question": "Seleccione los artefactos del Framework Scrum (Marque 3):",
    "type": "multiple_choice",
    "options": ["Sprint Backlog", "Sprint", "Incremento", "Product Backlog"],
    "correctAnswer": [0, 2, 3],
    "explanation": "Los artefactos definidos en la Guía de Scrum son el Product Backlog, el Sprint Backlog y el Incremento."
  },
  {
    "question": "En la reunión Sprint Planning, se debe (Marque 2):",
    "type": "multiple_choice",
    "options": ["Los Developers seleccionan elementos del Product Backlog", "El Product Owner propone cómo incrementar el valor", "Determinar duración y fecha de la Review", "El Scrum Master propone soluciones técnicas"],
    "correctAnswer": [0, 1],
    "explanation": "La planificación es una colaboración entre Product Owner (valor) y Developers (selección del trabajo)."
  },
  {
    "question": "Los tres pilares del empirismo en Scrum son (Marque 3):",
    "type": "multiple_choice",
    "options": ["Inspección", "Transparencia", "Adaptación", "Experimentación"],
    "correctAnswer": [0, 1, 2],
    "explanation": "Transparencia, inspección y adaptación son la base del control de procesos empíricos."
  },
  {
    "question": "La Sprint Review consiste en inspeccionar el incremento generado y adaptar el Product Backlog si es necesario.",
    "type": "multiple_choice",
    "options": ["Verdadero", "Falso"],
    "correctAnswer": [0],
    "explanation": "Es el propósito central de la revisión con los stakeholders."
  },
  {
    "question": "Scrum permite el solapamiento de las fases del desarrollo en lugar de un enfoque secuencial.",
    "type": "multiple_choice",
    "options": ["Verdadero", "Falso"],
    "correctAnswer": [0],
    "explanation": "Scrum favorece el desarrollo incremental y el trabajo simultáneo para evitar silos."
  },
  {
    "question": "El Sprint Goal es un objetivo único para el Sprint que los Developers se comprometen a lograr.",
    "type": "multiple_choice",
    "options": ["Verdadero", "Falso"],
    "correctAnswer": [0],
    "explanation": "El Sprint Goal guía el enfoque del equipo durante el Sprint."
  },
  {
    "question": "La Sprint Retrospective es el momento para que el equipo Scrum se inspeccione a sí mismo y cree un plan de mejoras.",
    "type": "multiple_choice",
    "options": ["Verdadero", "Falso"],
    "correctAnswer": [0],
    "explanation": "Su objetivo es mejorar la calidad y la eficacia del equipo."
  },
  {
    "question": "¿Quién es el responsable de asegurar que el Scrum Team entienda los artefactos?",
    "type": "multiple_choice",
    "options": ["Product Owner", "Scrum Master", "Stakeholders", "Development Team"],
    "correctAnswer": [1],
    "explanation": "El Scrum Master sirve al equipo asegurando que comprendan la teoría y práctica de Scrum."
  },
  {
    "question": "El Product Increment debe estar en condición de ser liberado al final del Sprint.",
    "type": "multiple_choice",
    "options": ["Verdadero", "Falso"],
    "correctAnswer": [0],
    "explanation": "Un incremento debe cumplir la Definición de Hecho (DoD) y ser utilizable."
  },
  {
    "question": "El tamaño del equipo Scrum suele ser de 10 personas o menos.",
    "type": "multiple_choice",
    "options": ["Verdadero", "Falso"],
    "correctAnswer": [0],
    "explanation": "Es el tamaño recomendado para mantener la agilidad y comunicación."
  },
  {
    "question": "El Scrum Master es un líder servidor.",
    "type": "multiple_choice",
    "options": ["Verdadero", "Falso"],
    "correctAnswer": [0],
    "explanation": "El rol implica facilitar, eliminar impedimentos y servir al Equipo y a la organización."
  },
  {
    "question": "La Daily Scrum es un evento de 15 minutos para los Developers.",
    "type": "multiple_choice",
    "options": ["Verdadero", "Falso"],
    "correctAnswer": [0],
    "explanation": "Es una reunión diaria para sincronizar el trabajo y planificar las siguientes 24 horas."
  },
  {
    "question": "Si el Sprint Goal pierde validez, el Product Owner puede cancelar el Sprint.",
    "type": "multiple_choice",
    "options": ["Verdadero", "Falso"],
    "correctAnswer": [0],
    "explanation": "El Product Owner tiene la autoridad para cancelar el Sprint ante un cambio drástico de rumbo."
  },
  {
    "question": "Scrum es un marco de trabajo liviano.",
    "type": "multiple_choice",
    "options": ["Verdadero", "Falso"],
    "correctAnswer": [0],
    "explanation": "Es un framework ligero, fácil de entender, pero difícil de dominar."
  },
  {
    "question": "El Product Backlog es una lista ordenada de todo lo que se necesita en el producto.",
    "type": "multiple_choice",
    "options": ["Verdadero", "Falso"],
    "correctAnswer": [0],
    "explanation": "Es la fuente única de requisitos para cualquier cambio en el producto."
  },
  {
    "question": "Los Developers deciden cuánto trabajo pueden realizar en un Sprint.",
    "type": "multiple_choice",
    "options": ["Verdadero", "Falso"],
    "correctAnswer": [0],
    "explanation": "Los equipos son autogestionados y determinan su capacidad."
  },
  {
    "question": "La Definición de Hecho (DoD) crea transparencia sobre el trabajo completado.",
    "type": "multiple_choice",
    "options": ["Verdadero", "Falso"],
    "correctAnswer": [0],
    "explanation": "La DoD establece un estándar de calidad compartido por todo el equipo."
  },
  {
    "question": "El Scrum Master ayuda a eliminar impedimentos para el equipo.",
    "type": "multiple_choice",
    "options": ["Verdadero", "Falso"],
    "correctAnswer": [0],
    "explanation": "Es una de las funciones principales del Scrum Master para proteger al equipo."
  },
  {
    "question": "La Sprint Review es una demostración donde se busca feedback.",
    "type": "multiple_choice",
    "options": ["Verdadero", "Falso"],
    "correctAnswer": [0],
    "explanation": "Es una sesión colaborativa para inspeccionar el incremento y ajustar el futuro del producto."
  },
  {
    "question": "El empoderamiento del equipo es esencial para la agilidad.",
    "type": "multiple_choice",
    "options": ["Verdadero", "Falso"],
    "correctAnswer": [0],
    "explanation": "La autogestión es vital para que un equipo Scrum sea efectivo."
  }
]