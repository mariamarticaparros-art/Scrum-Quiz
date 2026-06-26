const defaultQuestionsFiltros = [
  {
    "section": "Definicion",
    "question": "¿Cómo se define Scrum en el texto?",
    "type": "multiple_choice",
    "options": ["Un proceso rígido de gestión de proyectos", "Un marco ligero para generar valor a través de soluciones adaptables", "Un software de seguimiento de tareas", "Una metodología de desarrollo de software exclusivamente"],
    "correctAnswer": [1],
    "explanation": "Scrum es un marco ligero que ayuda a generar valor a través de soluciones adaptables para problemas complejos."
  },
  {
    "section": "Definicion",
    "question": "¿Cuál es el rol del Scrum Master en el entorno de Scrum?",
    "type": "multiple_choice",
    "options": ["Gestionar el presupuesto del proyecto", "Fomentar un entorno donde se aplique Scrum", "Asignar tareas individuales a cada miembro", "Escribir el código del producto"],
    "correctAnswer": [1],
    "explanation": "El Scrum Master es necesario para fomentar un entorno donde el marco de Scrum pueda operar eficazmente."
  },
  {
    "section": "Definicion",
    "question": "¿Qué hace el Product Owner con un problema complejo?",
    "type": "multiple_choice",
    "options": ["Lo resuelve directamente", "Lo ignora", "Lo ordena en un Product Backlog", "Lo delega a las partes interesadas"],
    "correctAnswer": [2],
    "explanation": "El Product Owner es responsable de ordenar el trabajo de un problema complejo en el Product Backlog."
  },
  {
    "section": "Definicion",
    "question": "¿Qué crea el Equipo Scrum durante un Sprint?",
    "type": "multiple_choice",
    "options": ["Un plan de negocios", "Un Incremento de valor", "Un contrato de servicios", "Un manual de usuario"],
    "correctAnswer": [1],
    "explanation": "El equipo convierte una selección del trabajo en un Incremento de valor durante un Sprint."
  },
  {
    "section": "Definicion",
    "question": "¿Qué hacen el equipo y los stakeholders al finalizar un ciclo de trabajo?",
    "type": "multiple_choice",
    "options": ["Inspeccionan los resultados y realizan ajustes", "Aprueban el presupuesto final", "Redactan la documentación técnica", "Clausuran el proyecto"],
    "correctAnswer": [0],
    "explanation": "El equipo y las partes interesadas inspeccionan los resultados para realizar ajustes necesarios para el próximo Sprint."
  },
  {
    "section": "Definicion",
    "question": "¿Por qué se dice que el marco de Scrum es 'deliberadamente incompleto'?",
    "type": "multiple_choice",
    "options": ["Porque está mal diseñado", "Porque solo define las partes necesarias para implementar la teoría de Scrum", "Porque los autores no terminaron de escribirlo", "Porque cambia cada mes"],
    "correctAnswer": [1],
    "explanation": "Es deliberadamente incompleto porque solo define las partes necesarias para implementar su teoría."
  },
  {
    "section": "Definicion",
    "question": "¿En qué se basa principalmente el marco de Scrum?",
    "type": "multiple_choice",
    "options": ["En instrucciones detalladas", "En la inteligencia colectiva de las personas que lo utilizan", "En el control estricto de los gerentes", "En software de automatización"],
    "correctAnswer": [1],
    "explanation": "Scrum se basa en la inteligencia colectiva de las personas que lo utilizan."
  },
  {
    "section": "Definicion",
    "question": "¿Qué guían realmente las reglas de Scrum?",
    "type": "multiple_choice",
    "options": ["Los salarios del equipo", "La forma de escribir código", "Las relaciones e interacciones de las personas", "El uso de herramientas de oficina"],
    "correctAnswer": [2],
    "explanation": "En lugar de instrucciones detalladas, las reglas de Scrum guían las relaciones e interacciones de sus participantes."
  },
  {
    "section": "Definicion",
    "question": "¿Qué ocurre con las prácticas existentes cuando se implementa Scrum?",
    "type": "multiple_choice",
    "options": ["Scrum las envuelve o las hace innecesarias", "Scrum las reemplaza por manuales de procedimientos", "Scrum obliga a mantenerlas intactas", "Scrum las ignora completamente"],
    "correctAnswer": [0],
    "explanation": "Scrum envuelve las prácticas existentes o las hace innecesarias."
  },
  {
    "section": "Definicion",
    "question": "¿Qué hace visible Scrum en una organización?",
    "type": "multiple_choice",
    "options": ["Los errores de los empleados", "La eficacia relativa de la gestión actual y las técnicas de trabajo", "La cantidad de horas extras", "La jerarquía de la empresa"],
    "correctAnswer": [1],
    "explanation": "Scrum hace visible la eficacia relativa de la gestión actual y las técnicas de trabajo para permitir mejoras."
  },
  {
    "section": "Definicion",
    "question": "¿Es Scrum un marco complejo lleno de instrucciones?",
    "type": "multiple_choice",
    "options": ["Sí, muy complejo", "No, es simple", "Depende del software utilizado", "Solo para grandes corporaciones"],
    "correctAnswer": [1],
    "explanation": "El texto afirma explícitamente: 'Scrum es simple'."
  },
  {
    "section": "Definicion",
    "question": "¿Qué se debe hacer para determinar si Scrum ayuda a crear valor?",
    "type": "multiple_choice",
    "options": ["Analizarlo durante 5 años", "Pruébalo tal cual", "Cambiar todas sus reglas primero", "Consultar a un experto externo"],
    "correctAnswer": [1],
    "explanation": "La guía recomienda probarlo tal cual para determinar si su filosofía y estructura ayudan a alcanzar metas."
  },
  {
    "section": "Definicion",
    "question": "¿Qué tipo de soluciones fomenta Scrum?",
    "type": "multiple_choice",
    "options": ["Soluciones rígidas", "Soluciones adaptables", "Soluciones estándar", "Soluciones predecibles"],
    "correctAnswer": [1],
    "explanation": "Ayuda a generar valor a través de soluciones adaptables."
  },
  {
    "section": "Definicion",
    "question": "¿El marco de Scrum es apto para qué tipo de problemas?",
    "type": "multiple_choice",
    "options": ["Problemas simples", "Problemas complejos", "Solo problemas matemáticos", "Ningún problema"],
    "correctAnswer": [1],
    "explanation": "Está diseñado para ayudar a generar valor en problemas complejos."
  },
  {
    "section": "Definicion",
    "question": "¿Qué deben hacer las organizaciones con Scrum?",
    "type": "multiple_choice",
    "options": ["Seguir instrucciones paso a paso", "Generar valor", "Evitar cambios", "Limitar la creatividad"],
    "correctAnswer": [1],
    "explanation": "Ayuda a las personas, equipos y organizaciones a generar valor."
  },
  {
    "section": "Definicion",
    "question": "¿Cómo se aplica Scrum según el texto?",
    "type": "multiple_choice",
    "options": ["Repitiendo los eventos", "Solo una vez", "De forma aleatoria", "Sin reglas"],
    "correctAnswer": [0],
    "explanation": "El flujo de Scrum incluye la instrucción de 'Repetir' los ciclos."
  },
  {
    "section": "Definicion",
    "question": "¿Qué tipo de procesos pueden emplearse dentro del marco de Scrum?",
    "type": "multiple_choice",
    "options": ["Solo procesos aprobados por la guía", "Diversos procesos, técnicas y métodos", "Ningún proceso externo", "Procesos impuestos por la dirección"],
    "correctAnswer": [1],
    "explanation": "Dentro del marco se pueden emplear diversos procesos, técnicas y métodos."
  },
  {
    "section": "Definicion",
    "question": "¿Cuál es el objetivo final de hacer visibles las técnicas de trabajo?",
    "type": "multiple_choice",
    "options": ["Evaluar a los empleados", "Realizar mejoras", "Reportar a los superiores", "Completar tareas"],
    "correctAnswer": [1],
    "explanation": "Se hacen visibles las técnicas de modo que se pueden realizar mejoras."
  },
  {
    "section": "Definicion",
    "question": "¿Quiénes pueden utilizar Scrum?",
    "type": "multiple_choice",
    "options": ["Solo equipos de software", "Solo los programadores", "Personas, equipos y organizaciones", "Solo empresas pequeñas"],
    "correctAnswer": [2],
    "explanation": "Scrum ayuda a personas, equipos y organizaciones."
  },
  {
    "section": "Definicion",
    "question": "¿La Guía proporciona instrucciones detalladas a los individuos?",
    "type": "multiple_choice",
    "options": ["Sí, es un manual detallado", "No, en su lugar guían sus relaciones e interacciones", "Solo al Scrum Master", "Solo a los desarrolladores"],
    "correctAnswer": [1],
    "explanation": "La Guía evita instrucciones detalladas, enfocándose en guiar las relaciones e interacciones."
  },
  {
    "section": "Teoria",
    "question": "¿En qué dos conceptos fundamentales se basa Scrum?",
    "type": "multiple_choice",
    "options": ["El empirismo y el pensamiento Lean", "La gestión tradicional y el control de riesgos", "La automatización y la inteligencia artificial", "La jerarquía y la planificación detallada"],
    "correctAnswer": [0],
    "explanation": "Scrum se basa en el empirismo y el pensamiento Lean."
  },
  {
    "section": "Teoria",
    "question": "¿Qué afirma el empirismo según la Guía Scrum?",
    "type": "multiple_choice",
    "options": ["Que las decisiones deben basarse en planes a largo plazo", "Que el conocimiento proviene de la experiencia y la observación", "Que la teoría es más importante que la práctica", "Que los gerentes deben tomar todas las decisiones"],
    "correctAnswer": [1],
    "explanation": "El empirismo afirma que el conocimiento proviene de la experiencia y la toma de decisiones basadas en lo que se observa."
  },
  {
    "section": "Teoria",
    "question": "¿Cuál es el enfoque de Scrum para optimizar la previsibilidad y controlar el riesgo?",
    "type": "multiple_choice",
    "options": ["Un enfoque predictivo y estricto", "Un enfoque iterativo e incremental", "Un enfoque basado en la documentación exhaustiva", "Un enfoque basado en la especialización individual"],
    "correctAnswer": [1],
    "explanation": "Scrum emplea un enfoque iterativo e incremental para optimizar la previsibilidad y controlar el riesgo."
  },
  {
    "section": "Teoria",
    "question": "¿Qué son los tres pilares empíricos de Scrum?",
    "type": "multiple_choice",
    "options": ["Transparencia, inspección y adaptación", "Planificación, ejecución y control", "Lean, ágil y empírico", "Roles, eventos y artefactos"],
    "correctAnswer": [0],
    "explanation": "Los eventos de Scrum funcionan porque implementan los pilares empíricos: transparencia, inspección y adaptación."
  },
  {
    "section": "Teoria",
    "question": "¿Qué sucede cuando los artefactos tienen poca transparencia?",
    "type": "multiple_choice",
    "options": ["Se mejora la velocidad del equipo", "Se facilita la toma de decisiones", "Pueden conducir a decisiones que disminuyen el valor y aumentan el riesgo", "El equipo trabaja de forma más autónoma"],
    "correctAnswer": [2],
    "explanation": "Los artefactos que tienen poca transparencia pueden conducir a decisiones que disminuyen el valor y aumentan el riesgo."
  },
  {
    "section": "Teoria",
    "question": "¿Qué relación existe entre inspección y adaptación?",
    "type": "multiple_choice",
    "options": ["Son procesos independientes", "La inspección permite la adaptación; la inspección sin adaptación es inútil", "La adaptación es obligatoria antes de la inspección", "No tienen relación"],
    "correctAnswer": [1],
    "explanation": "La inspección permite la adaptación y la inspección sin adaptación se considera inútil."
  },
  {
    "section": "Teoria",
    "question": "¿Qué se espera de un equipo Scrum cuando aprende algo nuevo mediante la inspección?",
    "type": "multiple_choice",
    "options": ["Que documente el aprendizaje para el final del proyecto", "Que se adapte en el momento", "Que consulte al Scrum Master antes de cambiar nada", "Que lo ignore si no afecta al Sprint actual"],
    "correctAnswer": [1],
    "explanation": "Se espera que un equipo de Scrum se adapte en el momento en que aprenda algo nuevo por medio de la inspección."
  },
  {
    "section": "Teoria",
    "question": "¿Qué objetivo tiene el pensamiento Lean dentro de Scrum?",
    "type": "multiple_choice",
    "options": ["Aumentar la complejidad de los procesos", "Reducir los desperdicios y centrarse en lo esencial", "Fomentar la jerarquía de mando", "Maximizar la cantidad de documentación"],
    "correctAnswer": [1],
    "explanation": "El pensamiento Lean reduce los desperdicios y se centra en lo esencial."
  },
  {
    "section": "Teoria",
    "question": "¿Qué debe ocurrir si un aspecto de un proceso se desvía fuera de los límites aceptables?",
    "type": "multiple_choice",
    "options": ["Continuar igual hasta el final del Sprint", "Ignorar la desviación si es pequeña", "Ajustar el proceso o los materiales lo antes posible", "Cambiar al Product Owner"],
    "correctAnswer": [2],
    "explanation": "Si algún aspecto se desvía, el proceso o los materiales deben ajustarse lo antes posible para minimizar la desviación."
  },
  {
    "section": "Teoria",
    "question": "¿Cuál es la función del Sprint en relación con los eventos de Scrum?",
    "type": "multiple_choice",
    "options": ["Es un evento contenedor", "Es una reunión opcional", "Es un artefacto formal", "Es un rol administrativo"],
    "correctAnswer": [0],
    "explanation": "Scrum combina cuatro eventos formales para la inspección y adaptación dentro de un evento contenedor, el Sprint."
  },
  {
    "section": "Teoria",
    "question": "¿Para qué se inspeccionan los artefactos y el progreso hacia los objetivos?",
    "type": "multiple_choice",
    "options": ["Para controlar el desempeño individual", "Para detectar varianzas o problemas potencialmente indeseables", "Para justificar el tiempo invertido", "Para reemplazar los eventos"],
    "correctAnswer": [1],
    "explanation": "Los artefactos y el progreso deben ser inspeccionados con frecuencia para detectar varianzas o problemas indeseables."
  },
  {
    "section": "Teoria",
    "question": "¿Qué dificulta la adaptación en un equipo?",
    "type": "multiple_choice",
    "options": ["La falta de empoderamiento o capacidad para autogestionarse", "Demasiada comunicación interna", "El uso de herramientas digitales", "La alta capacidad técnica"],
    "correctAnswer": [0],
    "explanation": "La adaptación se vuelve más difícil cuando las personas involucradas no están empoderadas o no poseen capacidad para autogestionarse."
  },
  {
    "section": "Teoria",
    "question": "¿Qué sucede si hay inspección sin transparencia?",
    "type": "multiple_choice",
    "options": ["Se mejoran los resultados", "Se genera engaños y desperdicios", "Se acelera el desarrollo", "Es el estándar ideal"],
    "correctAnswer": [1],
    "explanation": "La inspección sin transparencia genera engaños y desperdicios."
  },
  {
    "section": "Teoria",
    "question": "¿Cómo deben ser las habilidades dentro de un grupo de personas en Scrum?",
    "type": "multiple_choice",
    "options": ["Cada persona debe ser especialista y no compartir habilidades", "Colectivamente deben tener todas las habilidades necesarias para hacer el trabajo", "Deben ser contratadas de fuera del equipo", "Solo el Scrum Master debe tener experiencia"],
    "correctAnswer": [1],
    "explanation": "Scrum involucra a grupos de personas que colectivamente tienen todas las habilidades y experiencia para hacer el trabajo."
  },
  {
    "section": "Teoria",
    "question": "¿Qué provocan los eventos de Scrum?",
    "type": "multiple_choice",
    "options": ["Cambios", "Pérdida de tiempo", "Más burocracia", "Planificación anual"],
    "correctAnswer": [0],
    "explanation": "Los eventos de Scrum están diseñados para provocar cambios."
  },
  {
    "section": "Teoria",
    "question": "¿En qué se basan las decisiones importantes en Scrum?",
    "type": "multiple_choice",
    "options": ["En el estado percibido de los tres artefactos formales", "En la intuición del Scrum Master", "En órdenes de la alta gerencia", "En proyecciones a largo plazo"],
    "correctAnswer": [0],
    "explanation": "En Scrum, las decisiones importantes se basan en el estado percibido de sus tres artefactos formales."
  },
  {
    "section": "Teoria",
    "question": "¿Es obligatorio poseer todas las habilidades necesarias al inicio?",
    "type": "multiple_choice",
    "options": ["Sí, es un requisito estricto", "No, pueden compartir o adquirir habilidades según sea necesario", "Sí, si no se tienen no se puede iniciar Scrum", "Solo el Product Owner debe tenerlas"],
    "correctAnswer": [1],
    "explanation": "El equipo puede compartir o adquirir habilidades según sea necesario."
  },
  {
    "section": "Teoria",
    "question": "¿La transparencia es un requisito para qué otro pilar?",
    "type": "multiple_choice",
    "options": ["Para la inspección", "Para el Sprint", "Para los artefactos", "Para el Lean"],
    "correctAnswer": [0],
    "explanation": "La transparencia permite la inspección."
  },
  {
    "section": "Teoria",
    "question": "¿Qué permite que Scrum proporcione cadencia para la inspección?",
    "type": "multiple_choice",
    "options": ["Sus cinco eventos", "La alta jerarquía", "La falta de reglas", "La documentación técnica"],
    "correctAnswer": [0],
    "explanation": "Para ayudar con la inspección, Scrum proporciona cadencia en forma de sus cinco eventos."
  },
  {
    "section": "Teoria",
    "question": "¿Para quién debe ser visible el proceso y el trabajo emergente?",
    "type": "multiple_choice",
    "options": ["Solo para el Scrum Master", "Solo para el Product Owner", "Para aquellos que realizan el trabajo y para los que reciben el trabajo", "Para todo el público en general"],
    "correctAnswer": [2],
    "explanation": "El proceso y el trabajo emergentes deben ser visibles para aquellos que realizan el trabajo, así como para los que reciben el trabajo."
  },
  {
    "section": "Valores",
    "question": "¿Cuáles son los cinco valores en los que se debe ser competente para un uso exitoso de Scrum?",
    "type": "multiple_choice",
    "options": ["Compromiso, Enfoque, Apertura, Respeto y Coraje", "Velocidad, Calidad, Orden, Respeto y Valor", "Compromiso, Comunicación, Apertura, Respeto y Honestidad", "Enfoque, Transparencia, Inspección, Adaptación y Coraje"],
    "correctAnswer": [0],
    "explanation": "El uso exitoso de Scrum depende de vivir cinco valores: Compromiso, Enfoque, Apertura, Respeto y Coraje."
  },
  {
    "section": "Valores",
    "question": "¿A qué se compromete principalmente el Equipo Scrum?",
    "type": "multiple_choice",
    "options": ["A seguir las reglas al pie de la letra", "A lograr sus objetivos y apoyarse mutuamente", "A trabajar más horas cada día", "A eliminar los problemas complejos"],
    "correctAnswer": [1],
    "explanation": "El equipo de Scrum se compromete a lograr sus objetivos y apoyarse mutuamente."
  },
  {
    "section": "Valores",
    "question": "¿Cuál es el enfoque principal del equipo según los valores de Scrum?",
    "type": "multiple_choice",
    "options": ["La satisfacción del jefe", "El trabajo del Sprint para hacer el mejor progreso posible", "La creación de documentación extensa", "La reducción de costes exclusivamente"],
    "correctAnswer": [1],
    "explanation": "Su enfoque principal es el trabajo del Sprint para hacer el mejor progreso posible hacia estos objetivos."
  },
  {
    "section": "Valores",
    "question": "¿Cómo deben ser el Equipo Scrum y sus partes interesadas respecto al trabajo y los desafíos?",
    "type": "multiple_choice",
    "options": ["Reservados", "Abiertos", "Indiferentes", "Críticos"],
    "correctAnswer": [1],
    "explanation": "El equipo de Scrum y sus partes interesadas están abiertos sobre el trabajo y los desafíos."
  },
  {
    "section": "Valores",
    "question": "¿En qué se basa el respeto dentro del Equipo Scrum?",
    "type": "multiple_choice",
    "options": ["En el cargo jerárquico de cada miembro", "En la antigüedad en la empresa", "En reconocerse como personas capaces e independientes", "En la obediencia al Scrum Master"],
    "correctAnswer": [2],
    "explanation": "Los miembros del equipo de Scrum se respetan mutuamente para ser personas capaces e independientes."
  },
  {
    "section": "Valores",
    "question": "¿Para qué necesitan tener valor (coraje) los miembros del Equipo Scrum?",
    "type": "multiple_choice",
    "options": ["Para trabajar en problemas complejos y hacer lo correcto", "Para enfrentarse a los clientes", "Para trabajar sin supervisión", "Para liderar el mercado"],
    "correctAnswer": [0],
    "explanation": "Los miembros del equipo de Scrum tienen el valor de hacer lo correcto y de trabajar en problemas complejos."
  },
  {
    "section": "Valores",
    "question": "¿Qué proporcionan los valores al Equipo Scrum?",
    "type": "multiple_choice",
    "options": ["Normas legales", "Dirección respecto a su trabajo, acciones y comportamiento", "Instrucciones técnicas de desarrollo", "Un calendario de reuniones"],
    "correctAnswer": [1],
    "explanation": "Estos valores dan dirección al equipo de Scrum con respecto a su trabajo, acciones y comportamiento."
  },
  {
    "section": "Valores",
    "question": "¿Cómo deben influir las decisiones tomadas en el marco de Scrum sobre los valores?",
    "type": "multiple_choice",
    "options": ["Deben ignorarlos", "Deben reforzarlos", "Deben modificarlos según el proyecto", "Deben ser independientes de ellos"],
    "correctAnswer": [1],
    "explanation": "Las decisiones que se toman, las medidas tomadas y la forma en que se utiliza Scrum deben reforzar estos valores."
  },
  {
    "section": "Valores",
    "question": "¿Cómo aprenden y exploran los valores los miembros del Equipo Scrum?",
    "type": "multiple_choice",
    "options": ["Leyendo manuales de ética", "Trabajando con los eventos y artefactos de Scrum", "Mediante exámenes teóricos", "Siguiendo instrucciones del Scrum Master"],
    "correctAnswer": [1],
    "explanation": "Los miembros del equipo de Scrum aprenden y exploran los valores mientras trabajan con los eventos y artefactos de Scrum."
  },
  {
    "section": "Valores",
    "question": "¿Qué sucede cuando los valores de Scrum son asimilados por el equipo?",
    "type": "multiple_choice",
    "options": ["Los pilares empíricos cobran vida construyendo confianza", "Se vuelve más fácil trabajar solo", "Se eliminan las reuniones", "El equipo ya no necesita metas"],
    "correctAnswer": [0],
    "explanation": "Cuando estos valores son asimilados por el equipo de Scrum y las personas con las que trabajan, los pilares empíricos de Scrum cobran vida construyendo confianza."
  },
  {
    "section": "Valores",
    "question": "¿El valor 'Respeto' es solo para los miembros del equipo entre sí?",
    "type": "multiple_choice",
    "options": ["Sí, no afecta a otros", "No, también son respetados por las personas con las que trabajan", "Solo el Scrum Master debe respetar", "Solo el Product Owner debe respetar"],
    "correctAnswer": [1],
    "explanation": "Los miembros del equipo de Scrum son respetados como tales por las personas con las que trabajan."
  },
  {
    "section": "Valores",
    "question": "¿Qué deben evitar las decisiones y acciones en Scrum con respecto a los valores?",
    "type": "multiple_choice",
    "options": ["Disminuirlos o socavarlos", "Reforzarlos", "Hacerlos públicos", "Priorizarlos"],
    "correctAnswer": [0],
    "explanation": "Las medidas tomadas deben reforzar estos valores, no disminuirlos o socavarlos."
  },
  {
    "section": "Valores",
    "question": "¿Es posible ser competente en Scrum sin vivir estos cinco valores?",
    "type": "multiple_choice",
    "options": ["Sí, son opcionales", "No, el uso exitoso depende de ser competente en vivirlos", "Sí, solo son necesarios para el Scrum Master", "Depende del software usado"],
    "correctAnswer": [1],
    "explanation": "El uso exitoso de Scrum depende de que las personas sean más competentes en vivir estos cinco valores."
  },
  {
    "section": "Valores",
    "question": "¿Qué pilares empíricos se ven reforzados al construir confianza a través de los valores?",
    "type": "multiple_choice",
    "options": ["Transparencia, inspección y adaptación", "Planificación y ejecución", "Roles, artefactos y eventos", "Eficiencia, velocidad y coste"],
    "correctAnswer": [0],
    "explanation": "Cuando estos valores cobran vida construyendo confianza, los pilares empíricos de transparencia, inspección y adaptación se fortalecen."
  },
  {
    "section": "Valores",
    "question": "¿Qué valor implica estar dispuesto a enfrentar la incertidumbre de problemas complejos?",
    "type": "multiple_choice",
    "options": ["Compromiso", "Enfoque", "Apertura", "Coraje"],
    "correctAnswer": [3],
    "explanation": "Los miembros del equipo de Scrum tienen el valor (coraje) de trabajar en problemas complejos."
  },
  {
    "section": "Valores",
    "question": "¿El valor de 'Enfoque' está relacionado con qué parte del proceso Scrum?",
    "type": "multiple_choice",
    "options": ["El trabajo del Sprint", "La planeación anual", "Las reuniones de gerencia", "La contratación de personal"],
    "correctAnswer": [0],
    "explanation": "Su enfoque principal es el trabajo del Sprint para hacer el mejor progreso posible."
  },
  {
    "section": "Valores",
    "question": "¿Qué significa vivir el valor de 'Apertura'?",
    "type": "multiple_choice",
    "options": ["Que no hay secretos en la empresa", "Estar abiertos sobre el trabajo y los desafíos", "Que cualquiera puede cambiar el Sprint", "No tener metas fijas"],
    "correctAnswer": [1],
    "explanation": "El equipo de Scrum y sus partes interesadas están abiertos sobre el trabajo y los desafíos."
  },
  {
    "section": "Valores",
    "question": "¿La asimilación de valores es solo tarea del equipo de desarrollo?",
    "type": "multiple_choice",
    "options": ["Sí, es un tema técnico", "No, también deben asimilarlos las personas con las que trabajan", "Solo del Scrum Master", "Solo del Product Owner"],
    "correctAnswer": [1],
    "explanation": "Cuando estos valores son asimilados por el equipo de Scrum y las personas con las que trabajan, los pilares empíricos cobran vida."
  },
  {
    "section": "Valores",
    "question": "¿Qué valor ayuda a que el equipo no abandone sus objetivos?",
    "type": "multiple_choice",
    "options": ["Compromiso", "Respeto", "Apertura", "Enfoque"],
    "correctAnswer": [0],
    "explanation": "El equipo de Scrum se compromete a lograr sus objetivos."
  },
  {
    "section": "Valores",
    "question": "¿Cómo se describe a los miembros del equipo en el valor del Respeto?",
    "type": "multiple_choice",
    "options": ["Como subordinados", "Como personas capaces e independientes", "Como recursos humanos", "Como ejecutores de tareas"],
    "correctAnswer": [1],
    "explanation": "Los miembros del equipo de Scrum se respetan mutuamente para ser personas capaces e independientes."
  },
  {
    "section": "Equipo",
    "question": "¿Cuáles son los tres roles que componen el equipo Scrum?",
    "type": "multiple_choice",
    "options": ["Scrum Master, Product Owner y Desarrolladores", "Manager, Líder técnico y Desarrolladores", "Product Owner, Stakeholders y Scrum Master", "Desarrolladores, Testers y Scrum Master"],
    "correctAnswer": [0],
    "explanation": "El equipo Scrum consta de un Scrum Master, un propietario de producto (Product Owner) y desarrolladores."
  },
  {
    "section": "Equipo",
    "question": "¿Qué significa que los equipos Scrum sean multifuncionales?",
    "type": "multiple_choice",
    "options": ["Que tienen varios jefes", "Que sus miembros tienen todas las habilidades necesarias para crear valor en cada Sprint", "Que trabajan en varios productos a la vez", "Que realizan tareas administrativas y técnicas"],
    "correctAnswer": [1],
    "explanation": "Los equipos son multifuncionales, lo que significa que sus miembros tienen todas las habilidades necesarias para crear valor en cada Sprint."
  },
  {
    "section": "Equipo",
    "question": "¿Cuál es el tamaño recomendado para un equipo Scrum?",
    "type": "multiple_choice",
    "options": ["Más de 20 personas", "Entre 15 y 20 personas", "Por lo general 10 o menos personas", "Un mínimo de 12 personas"],
    "correctAnswer": [2],
    "explanation": "El equipo es lo suficientemente pequeño para ser ágil y grande para completar trabajo significativo, usualmente 10 o menos personas."
  },
  {
    "section": "Equipo",
    "question": "¿Qué implica que el equipo sea 'autogestionado'?",
    "type": "multiple_choice",
    "options": ["Que deciden internamente quién hace qué, cuándo y cómo", "Que el Scrum Master asigna todas las tareas", "Que cada miembro trabaja de forma aislada", "Que la organización dicta cada movimiento"],
    "correctAnswer": [0],
    "explanation": "Son autogestionados, lo que significa que internamente deciden quién hace qué, cuándo y cómo."
  },
  {
    "section": "Equipo",
    "question": "¿Qué ocurre si un equipo Scrum se vuelve demasiado grande?",
    "type": "multiple_choice",
    "options": ["Se debe contratar más Scrum Masters", "Se debe considerar reorganizarse en varios equipos cohesionados", "Se debe dividir el producto en varios productos diferentes", "Se debe eliminar el rol de Product Owner"],
    "correctAnswer": [1],
    "explanation": "Si los equipos se vuelven demasiado grandes, se debe considerar la posibilidad de reorganizarse en varios equipos cohesionados centrados en el mismo producto."
  },
  {
    "section": "Equipo",
    "question": "¿De quién es la responsabilidad de crear un incremento valioso y útil en cada Sprint?",
    "type": "multiple_choice",
    "options": ["Solo del Product Owner", "Solo de los desarrolladores", "De todo el equipo Scrum", "Del Scrum Master"],
    "correctAnswer": [2],
    "explanation": "Todo el equipo de Scrum es responsable de crear un incremento valioso y útil en cada Sprint."
  },
  {
    "section": "Equipo",
    "question": "¿Cuál es la responsabilidad principal de los desarrolladores en cuanto al plan del Sprint?",
    "type": "multiple_choice",
    "options": ["Crear el Sprint Backlog", "Aprobar el presupuesto del Sprint", "Delegar el trabajo a externos", "Comunicarse con los stakeholders"],
    "correctAnswer": [0],
    "explanation": "Los desarrolladores son responsables de crear un plan para el Sprint, el Sprint Backlog."
  },
  {
    "section": "Equipo",
    "question": "¿A qué se comprometen los desarrolladores en cada Sprint?",
    "type": "multiple_choice",
    "options": ["A trabajar horas extras", "A crear cualquier aspecto de un Incremento útil", "A reportar cada hora al Scrum Master", "A no tener errores nunca"],
    "correctAnswer": [1],
    "explanation": "Los desarrolladores son las personas que se comprometen a crear cualquier aspecto de un Incremento útil en cada Sprint."
  },
  {
    "section": "Equipo",
    "question": "¿Qué debe hacer un desarrollador para inculcar la calidad?",
    "type": "multiple_choice",
    "options": ["Adherirse a una definición de Hecho", "Pedir permiso al Product Owner", "Trabajar sin interrupciones", "Escribir mucha documentación"],
    "correctAnswer": [0],
    "explanation": "Los desarrolladores son responsables de inculcar la calidad adhiriéndose a una definición de Hecho."
  },
  {
    "section": "Equipo",
    "question": "¿Qué responsabilidad tiene el Product Owner respecto al Product Backlog?",
    "type": "multiple_choice",
    "options": ["Gestionarlo eficazmente", "Escribir todo el código del producto", "Asignar tareas individuales", "Supervisar las horas de trabajo"],
    "correctAnswer": [0],
    "explanation": "El Propietario del Producto es responsable de la gestión eficaz de la pila del producto (Product Backlog)."
  },
  {
    "section": "Equipo",
    "question": "¿El Product Owner puede ser un comité?",
    "type": "multiple_choice",
    "options": ["Sí, es lo ideal para decisiones colegiadas", "No, es una sola persona", "Solo si el producto es muy grande", "Solo si la organización es pequeña"],
    "correctAnswer": [1],
    "explanation": "El Propietario del Producto es una persona, no un comité."
  },
  {
    "section": "Equipo",
    "question": "¿Qué debe hacer la organización para que los Product Owners tengan éxito?",
    "type": "multiple_choice",
    "options": ["Respetar sus decisiones", "Revisar su trabajo diariamente", "Limitar su presupuesto", "Cambiar sus decisiones constantemente"],
    "correctAnswer": [0],
    "explanation": "Para que los Propietarios de Productos tengan éxito, toda la organización debe respetar sus decisiones."
  },
  {
    "section": "Equipo",
    "question": "¿Quién es responsable de la efectividad del equipo Scrum?",
    "type": "multiple_choice",
    "options": ["El Product Owner", "El Scrum Master", "Los desarrolladores", "La gerencia de la empresa"],
    "correctAnswer": [1],
    "explanation": "El Scrum Master es responsable de la efectividad del Scrum Team."
  },
  {
    "section": "Equipo",
    "question": "¿Cómo se define la relación entre los miembros dentro de un equipo Scrum?",
    "type": "multiple_choice",
    "options": ["Como una unidad cohesionada de profesionales sin jerarquías", "Como un grupo con una estructura jerárquica clara", "Como sub-equipos especializados", "Como una estructura de mando y control"],
    "correctAnswer": [0],
    "explanation": "Dentro de un equipo de Scrum, no hay sub-equipos ni jerarquías; es una unidad cohesionada de profesionales."
  },
  {
    "section": "Equipo",
    "question": "¿Qué deben compartir varios equipos si trabajan en el mismo producto?",
    "type": "multiple_choice",
    "options": ["El mismo objetivo de producto, Product Backlog y Product Owner", "El mismo Scrum Master únicamente", "El mismo espacio físico", "El mismo código fuente solamente"],
    "correctAnswer": [0],
    "explanation": "Deben compartir el mismo objetivo de producto, trabajo pendiente del producto y propietario del producto."
  },
  {
    "section": "Equipo",
    "question": "¿Cuál es la función del Scrum Master en relación con la organización?",
    "type": "multiple_choice",
    "options": ["Ayudar a todos a comprender la teoría y práctica de Scrum", "Asignar presupuesto a los proyectos", "Contratar y despedir personal", "Redactar los contratos con clientes"],
    "correctAnswer": [0],
    "explanation": "El Scrum Master lo consigue ayudando a todos a comprender la teoría y la práctica de Scrum, tanto dentro del Equipo como en toda la organización."
  },
  {
    "section": "Equipo",
    "question": "¿Qué tipo de líder es un Scrum Master?",
    "type": "multiple_choice",
    "options": ["Un líder que sirve al equipo y a la organización", "Un líder autoritario", "Un líder administrativo", "Un líder enfocado solo en el Product Owner"],
    "correctAnswer": [0],
    "explanation": "Los Scrum Masters son verdaderos líderes que sirven al equipo Scrum y a toda la organización."
  },
  {
    "section": "Equipo",
    "question": "¿El Product Owner puede delegar su responsabilidad?",
    "type": "multiple_choice",
    "options": ["Sí, pero sigue siendo responsable", "No, nunca", "Solo si es un comité", "Solo si el Scrum Master lo aprueba"],
    "correctAnswer": [0],
    "explanation": "El Propietario del Producto puede hacer el trabajo anterior o puede delegar la responsabilidad a otros. En cualquier caso, el propietario del producto sigue siendo responsable."
  },
  {
    "section": "Equipo",
    "question": "¿Qué mejora el enfoque y la consistencia del equipo?",
    "type": "multiple_choice",
    "options": ["Trabajar en Sprints a un ritmo sostenible", "Trabajar sin pausas", "Cambiar de objetivos cada día", "Tener jerarquías claras"],
    "correctAnswer": [0],
    "explanation": "Trabajar en Sprints a un ritmo sostenible mejora el enfoque y la consistencia del equipo de Scrum."
  },
  {
    "section": "Equipo",
    "question": "¿Los desarrolladores son responsables de adaptarse?",
    "type": "multiple_choice",
    "options": ["Sí, deben adaptar su plan cada día", "No, solo el Scrum Master", "No, el plan es inamovible", "Solo si el cliente lo pide"],
    "correctAnswer": [0],
    "explanation": "Los desarrolladores son responsables de adaptar su plan cada día hacia el Objetivo Sprint."
  },
  { "section": "Eventos", "question": "¿Qué es el Sprint en relación con los eventos de Scrum?", "type": "multiple_choice", "options": ["Un evento opcional", "Un contenedor para todos los demás eventos", "Una reunión de gestión", "El evento final"], "correctAnswer": [1], "explanation": "El Sprint es un contenedor para todos los eventos." },
  { "section": "Eventos", "question": "¿Cuál es el propósito formal de cada evento en Scrum?", "type": "multiple_choice", "options": ["Cumplir con un horario", "Inspeccionar y adaptar los artefactos de Scrum", "Informar a la gerencia", "Socializar"], "correctAnswer": [1], "explanation": "Cada evento en Scrum es una oportunidad formal para inspeccionar y adaptar los artefactos de Scrum." },
  { "section": "Eventos", "question": "¿Qué ocurre si no se realizan los eventos según lo prescrito?", "type": "multiple_choice", "options": ["No pasa nada", "Se pierden oportunidades para inspeccionar y adaptarse", "El equipo trabaja más rápido", "El producto mejora"], "correctAnswer": [1], "explanation": "Si no se realizan los eventos según lo prescrito, se pierden oportunidades para inspeccionar y adaptarse." },
  { "section": "Eventos", "question": "¿Dónde se llevan a cabo los eventos de forma óptima?", "type": "multiple_choice", "options": ["En diferentes lugares cada vez", "Al mismo tiempo y lugar", "En oficinas externas", "Remotamente de forma aleatoria"], "correctAnswer": [1], "explanation": "De manera óptima, todos los eventos se llevan a cabo al mismo tiempo y lugar para reducir la complejidad." },
  { "section": "Eventos", "question": "¿Qué son los Sprints?", "type": "multiple_choice", "options": ["Reuniones diarias", "Eventos de longitud fija de un mes o menos", "Entregas anuales", "Proyectos de 6 meses"], "correctAnswer": [1], "explanation": "Son eventos de longitud fija de un mes o menos para crear consistencia." },
  { "section": "Eventos", "question": "¿Cuándo comienza un nuevo Sprint?", "type": "multiple_choice", "options": ["Una semana después", "Inmediatamente después de la conclusión del anterior", "Al inicio de cada mes", "Cuando el Product Owner decide"], "correctAnswer": [1], "explanation": "Un nuevo Sprint comienza inmediatamente después de la conclusión del Sprint anterior." },
  { "section": "Eventos", "question": "¿Qué sucede con el trabajo pendiente del producto durante el Sprint?", "type": "multiple_choice", "options": ["Se congela", "Se elimina", "Se refina según sea necesario", "Se entrega todo al final"], "correctAnswer": [2], "explanation": "El trabajo pendiente del producto se refina según sea necesario." },
  { "section": "Eventos", "question": "¿Qué sucede si el horizonte de un Sprint es demasiado largo?", "type": "multiple_choice", "options": ["Aumenta la calidad", "El objetivo puede volverse obsoleto y aumenta el riesgo", "El equipo descansa más", "El presupuesto disminuye"], "correctAnswer": [1], "explanation": "Cuando el horizonte de un Sprint es demasiado largo, el Objetivo de Sprint puede volverse obsoleto y el riesgo puede aumentar." },
  { "section": "Eventos", "question": "¿Quién tiene la autoridad para cancelar un Sprint?", "type": "multiple_choice", "options": ["El Scrum Master", "El equipo completo", "El Product Owner", "Los stakeholders"], "correctAnswer": [2], "explanation": "Solo el Propietario del Producto tiene la autoridad para cancelar el Sprint." },
  { "section": "Eventos", "question": "¿Qué es el Sprint Planning?", "type": "multiple_choice", "options": ["Un evento de 8 horas para comer", "El inicio del Sprint que establece el trabajo a realizar", "La reunión final del proyecto", "Una sesión de formación"], "correctAnswer": [1], "explanation": "El Sprint Planning inicia el Sprint estableciendo el trabajo que se realizará para el mismo." },
  { "section": "Eventos", "question": "¿Quién colabora para crear el plan del Sprint?", "type": "multiple_choice", "options": ["Solo el Product Owner", "Todo el equipo de Scrum", "Los desarrolladores solamente", "La dirección"], "correctAnswer": [1], "explanation": "Este plan resultante es creado por el trabajo colaborativo de todo el equipo de Scrum." },
  { "section": "Eventos", "question": "¿Qué debe finalizarse antes del final de la Planificación de Sprint?", "type": "multiple_choice", "options": ["El contrato de entrega", "El Objetivo de Sprint", "La contratación de nuevos miembros", "El diseño final del producto"], "correctAnswer": [1], "explanation": "El Objetivo Sprint debe finalizarse antes del final de la Planificación de Sprint." },
  { "section": "Eventos", "question": "¿Cómo se planifica el trabajo para cada elemento del Product Backlog?", "type": "multiple_choice", "options": ["El Scrum Master asigna tareas", "Los desarrolladores descomponen el trabajo en elementos más pequeños", "Se hace mediante una votación", "No se planifica"], "correctAnswer": [1], "explanation": "Esto se hace normalmente mediante la descomposición de elementos de trabajo pendiente del producto en elementos de trabajo más pequeños." },
  { "section": "Eventos", "question": "¿Qué es el Sprint Backlog?", "type": "multiple_choice", "options": ["El objetivo, elementos seleccionados y el plan para entregarlos", "Un documento legal", "La lista de tareas pendientes del mes", "La lista de errores"], "correctAnswer": [0], "explanation": "El objetivo de Sprint, los elementos seleccionados, más el plan para entregarlos se conocen conjuntamente como el Sprint Backlog." },
  { "section": "Eventos", "question": "¿Cuál es la duración máxima del Sprint Planning para un Sprint de un mes?", "type": "multiple_choice", "options": ["4 horas", "8 horas", "16 horas", "24 horas"], "correctAnswer": [1], "explanation": "El Sprint Planning tiene una duración máxima de ocho horas para un Sprint de un mes." },
  { "section": "Eventos", "question": "¿Cuál es el propósito del Daily Scrum?", "type": "multiple_choice", "options": ["Reportar al jefe", "Inspeccionar progreso hacia el Objetivo Sprint y adaptar el Sprint Backlog", "Hacer una lluvia de ideas de diseño", "Revisar el presupuesto"], "correctAnswer": [1], "explanation": "El propósito del Daily Scrum es inspeccionar el progreso hacia el Objetivo Sprint y adaptar el Sprint Backlog." },
  { "section": "Eventos", "question": "¿Cuál es la duración máxima del Daily Scrum?", "type": "multiple_choice", "options": ["15 minutos", "30 minutos", "1 hora", "45 minutos"], "correctAnswer": [0], "explanation": "El Daily Scrum es un evento de 15 minutos (máximo) para los desarrolladores." },
  { "section": "Eventos", "question": "¿Qué mejoran los Scrums diarios?", "type": "multiple_choice", "options": ["El control jerárquico", "La comunicación y toma de decisiones", "El tiempo de ocio", "La velocidad de escritura de código"], "correctAnswer": [1], "explanation": "Los Scrums diarios mejoran la comunicación, identifican impedimentos y promueven una rápida toma de decisiones." },
  { "section": "Eventos", "question": "¿Cuál es el propósito de la Revisión del Sprint?", "type": "multiple_choice", "options": ["Inspeccionar el resultado y determinar futuras adaptaciones", "Hacer una fiesta de fin de Sprint", "Evaluar el desempeño individual", "Redactar manuales"], "correctAnswer": [0], "explanation": "El propósito de la revisión del Sprint es inspeccionar el resultado del Sprint y determinar futuras adaptaciones." },
  { "section": "Eventos", "question": "¿Qué se debe evitar en la Revisión del Sprint?", "type": "multiple_choice", "options": ["Hacer una presentación", "Que se convierta en una simple presentación", "Hablar con los stakeholders", "Revisar lo logrado"], "correctAnswer": [1], "explanation": "El equipo de Scrum debe evitar limitarla a que se convierta en una simple presentación." },
  { "section": "Eventos", "question": "¿Cuál es la duración máxima de la Revisión de Sprint para un Sprint de un mes?", "type": "multiple_choice", "options": ["2 horas", "4 horas", "6 horas", "8 horas"], "correctAnswer": [1], "explanation": "Se utiliza en un plazo máximo de cuatro horas para un Sprint de un mes." },
  { "section": "Eventos", "question": "¿Cuál es el propósito de la Retrospectiva del Sprint?", "type": "multiple_choice", "options": ["Planificar formas de aumentar la calidad y eficacia", "Criticar al equipo", "Ajustar salarios", "Cambiar al Product Owner"], "correctAnswer": [0], "explanation": "El propósito de la retrospectiva Sprint es planificar formas de aumentar la calidad y la eficacia." },
  { "section": "Eventos", "question": "¿Qué inspecciona el equipo en la Retrospectiva?", "type": "multiple_choice", "options": ["El mercado", "Individuos, interacciones, procesos, herramientas y definición de hecho", "A los competidores", "La economía global"], "correctAnswer": [1], "explanation": "El equipo inspecciona cómo fue el último Sprint con respecto a individuos, interacciones, procesos, herramientas y su definición de Hecho." },
  { "section": "Eventos", "question": "¿Cuándo se deben abordar las mejoras más impactantes?", "type": "multiple_choice", "options": ["En el próximo año", "Lo antes posible", "Cuando se tenga tiempo", "Al finalizar el producto"], "correctAnswer": [1], "explanation": "Las mejoras más impactantes se abordan lo antes posible." },
  { "section": "Eventos", "question": "¿Cuál es la duración máxima de la Retrospectiva para un Sprint de un mes?", "type": "multiple_choice", "options": ["1 hora", "2 horas", "3 horas", "4 horas"], "correctAnswer": [2], "explanation": "Se utiliza un intervalo de tiempo de hasta un máximo de tres horas para un Sprint de un mes." },
  { "section": "Eventos", "question": "¿Qué sucede durante el Sprint con respecto a los cambios?", "type": "multiple_choice", "options": ["Se pueden cambiar los objetivos", "No se hacen cambios que pongan en peligro el Objetivo Sprint", "Se cancela el proyecto", "Se cambia al Product Owner"], "correctAnswer": [1], "explanation": "Durante el Sprint, no se hacen cambios que pongan en peligro el Objetivo Sprint." },
  { "section": "Eventos", "question": "¿Qué sucede con la calidad durante el Sprint?", "type": "multiple_choice", "options": ["Puede disminuir", "No disminuye", "Depende del equipo", "Se sacrifica por velocidad"], "correctAnswer": [1], "explanation": "Durante el Sprint, la calidad no disminuye." },
  { "section": "Eventos", "question": "¿Por qué se emplean Sprints más cortos?", "type": "multiple_choice", "options": ["Para trabajar menos", "Para generar más ciclos de aprendizaje y limitar riesgos", "Para cobrar más rápido", "Por moda"], "correctAnswer": [1], "explanation": "Los Sprints más cortos se pueden emplear para generar más ciclos de aprendizaje y limitar el riesgo de coste y esfuerzo." },
  { "section": "Eventos", "question": "¿Qué es un Sprint cada uno en sí mismo?", "type": "multiple_choice", "options": ["Una pérdida de tiempo", "Un proyecto corto", "Un reporte semanal", "Una tarea"], "correctAnswer": [1], "explanation": "Cada Sprint puede considerarse un proyecto corto." },
  { "section": "Eventos", "question": "¿Qué prácticas se mencionan para pronosticar el progreso?", "type": "multiple_choice", "options": ["Cartas astrales", "Burn-downs, burn-ups o flujos acumulativos", "Adivinación", "Encuestas"], "correctAnswer": [1], "explanation": "Existen varias prácticas para pronosticar el progreso, como gráficos de burn-downs, burn-ups, o flujos acumulativos." },
  { "section": "Eventos", "question": "¿Qué sustituyen los gráficos de progreso?", "type": "multiple_choice", "options": ["La toma de decisiones", "Nada, no sustituyen la importancia del empirismo", "El trabajo real", "La planificación"], "correctAnswer": [1], "explanation": "Si bien han demostrado ser útiles, estos no sustituyen la importancia del empirismo." },
  { "section": "Eventos", "question": "¿Qué se puede utilizar para la toma de decisiones con vistas a futuro?", "type": "multiple_choice", "options": ["Lo que ya ha sucedido", "Predicciones de expertos", "Opiniones de los directivos", "Software de inteligencia artificial"], "correctAnswer": [0], "explanation": "Solo lo que ya ha sucedido se puede utilizar para la toma de decisiones con vistas a futuro." },
  { "section": "Eventos", "question": "¿Cuándo se podría cancelar un Sprint?", "type": "multiple_choice", "options": ["Cuando el equipo esté cansado", "Si el Objetivo del Sprint se vuelve obsoleto", "Si el cliente no paga", "Cada viernes"], "correctAnswer": [1], "explanation": "Un Sprint podría ser cancelado si el Objetivo del Sprint se vuelve obsoleto." },
  { "section": "Eventos", "question": "¿Quiénes pueden asistir a la planificación del Sprint además del equipo?", "type": "multiple_choice", "options": ["Nadie", "Otras personas para proporcionar asesoramiento", "Periodistas", "Auditors externos"], "correctAnswer": [1], "explanation": "El equipo de Scrum también puede invitar a otras personas a asistir a la planificación del Sprint para proporcionar asesoramiento." },
  { "section": "Eventos", "question": "¿Quién propone cómo el producto podría aumentar su valor en el Sprint?", "type": "multiple_choice", "options": ["El Product Owner", "Los desarrolladores", "El Scrum Master", "El cliente"], "correctAnswer": [0], "explanation": "El Propietario del Producto propone cómo el producto podría aumentar su valor y utilidad en el Sprint actual." },
  { "section": "Eventos", "question": "¿Qué aumenta la comprensión y confianza durante el Sprint Planning?", "type": "multiple_choice", "options": ["Refinar los elementos del Product Backlog", "Hacer menos trabajo", "Cambiar el objetivo", "No planificar"], "correctAnswer": [0], "explanation": "El equipo de Scrum puede refinar estos elementos durante este proceso, lo que aumenta la comprensión y confianza." },
  { "section": "Eventos", "question": "¿Quién decide cómo convertir elementos en incrementos de valor?", "type": "multiple_choice", "options": ["El Scrum Master", "El Product Owner", "A discreción de los propios desarrolladores", "Los jefes de departamento"], "correctAnswer": [2], "explanation": "La forma de hacerlo es según la discreción de los propios desarrolladores." },
  { "section": "Eventos", "question": "¿Qué sucede si el Scrum Master o Product Owner trabajan activamente en elementos del Sprint Backlog?", "type": "multiple_choice", "options": ["No pueden participar", "Participan como desarrolladores", "Tienen que abandonar el equipo", "El Sprint se cancela"], "correctAnswer": [1], "explanation": "Si el propietario del producto o el Scrum Master están trabajando activamente en los elementos del Trabajo pendiente de Sprint, participan como desarrolladores." },
  { "section": "Eventos", "question": "¿Qué mejoran los Daily Scrums?", "type": "multiple_choice", "options": ["La autogestión", "La burocracia", "La cantidad de reuniones", "La interferencia externa"], "correctAnswer": [0], "explanation": "Esto crea enfoque y mejora la autogestión." },
  { "section": "Eventos", "question": "¿Pueden los desarrolladores ajustar su plan fuera del Daily Scrum?", "type": "multiple_choice", "options": ["No, nunca", "Sí, se reúnen durante todo el día para debatir sobre la adaptación", "Solo si el Scrum Master autoriza", "Solo al final del Sprint"], "correctAnswer": [1], "explanation": "Frecuentemente se reúnen durante todo el día para debatir de forma más detallada sobre la adaptación o replanificación del resto del trabajo del Sprint." },
  { "section": "Eventos", "question": "¿Qué presentan los equipos en la Revisión del Sprint?", "type": "multiple_choice", "options": ["Disculpas", "Los resultados de su trabajo a las partes interesadas", "Nuevos contratos", "Facturas"], "correctAnswer": [1], "explanation": "El equipo de Scrum presenta los resultados de su trabajo a las partes interesadas clave." },
  { "section": "Eventos", "question": "¿Qué revisan el equipo y las partes interesadas en la Revisión?", "type": "multiple_choice", "options": ["Lo logrado y lo que ha cambiado en su entorno", "Los salarios", "El clima laboral", "Las horas de llegada"], "correctAnswer": [0], "explanation": "El equipo de Scrum y las partes interesadas revisan lo que se logró en el Sprint y lo que ha cambiado en su entorno." },
  { "section": "Eventos", "question": "¿Qué puede suceder con el Product Backlog en la Revisión?", "type": "multiple_choice", "options": ["Se bloquea", "Se ajusta para satisfacer nuevas oportunidades", "Se borra", "Se ignora"], "correctAnswer": [1], "explanation": "El trabajo pendiente del producto también se puede ajustar para satisfacer nuevas oportunidades." },
  { "section": "Eventos", "question": "¿La Revisión del Sprint es solo una presentación?", "type": "multiple_choice", "options": ["Sí", "No, es una sesión de trabajo", "Depende del cliente", "Solo si el producto está terminado"], "correctAnswer": [1], "explanation": "Sprint Review es una sesión de trabajo y el equipo de Scrum debe evitar limitarla a que se convierta en una simple presentación." },
  { "section": "Eventos", "question": "¿En la retrospectiva, qué se identifica sobre las suposiciones?", "type": "multiple_choice", "options": ["Sus orígenes", "Su precio", "Quién las inventó", "Su validez legal"], "correctAnswer": [0], "explanation": "Las suposiciones que los desviaron se identifican y se exploran sus orígenes." },
  { "section": "Eventos", "question": "¿Qué analiza el equipo en la retrospectiva?", "type": "multiple_choice", "options": ["Qué fue bien, qué problemas encontró y cómo se resolvieron", "El mercado bursátil", "El clima", "Las vacaciones"], "correctAnswer": [0], "explanation": "El equipo analiza qué fue bien durante el Sprint, qué problemas encontró y cómo esos problemas fueron (o no fueron) resueltos." },
  { "section": "Eventos", "question": "¿Pueden las mejoras de la retrospectiva entrar en el próximo Sprint?", "type": "multiple_choice", "options": ["No", "Sí, se pueden agregar al Sprint Backlog", "Solo si el Scrum Master quiere", "Nunca"], "correctAnswer": [1], "explanation": "Incluso se pueden agregar al Sprint Backlog para el próximo Sprint." },
  { "section": "Eventos", "question": "¿Qué evento concluye el Sprint?", "type": "multiple_choice", "options": ["El Daily Scrum", "La Revisión", "La Retrospectiva", "La Planificación"], "correctAnswer": [2], "explanation": "La retrospectiva Sprint concluye el Sprint." },
  { "section": "Eventos", "question": "¿Cómo se reduce la complejidad al planificar reuniones?", "type": "multiple_choice", "options": ["Teniendo pocas", "Llevándolas a cabo al mismo tiempo y lugar", "Cancelándolas", "Haciéndolas virtuales"], "correctAnswer": [1], "explanation": "De manera óptima, todos los eventos se llevan a cabo al mismo tiempo y lugar para reducir la complejidad." },
  { "section": "Eventos", "question": "¿Qué son los Sprints para el progreso del producto?", "type": "multiple_choice", "options": ["El latido del corazón de Scrum", "Un trámite", "Un retraso", "Algo opcional"], "correctAnswer": [0], "explanation": "Los sprints son el latido del corazón de Scrum, donde las ideas se convierten en valor." },
  { "section": "Artefactos", "question": "¿Qué representan los artefactos de Scrum?", "type": "multiple_choice", "options": ["Trabajo o valor", "Reglas estrictas", "Solo documentación", "Roles del equipo"], "correctAnswer": [0], "explanation": "Los artefactos representan trabajo o valor." },
  { "section": "Artefactos", "question": "¿Cuál es el compromiso del Product Backlog?", "type": "multiple_choice", "options": ["Sprint Goal", "Definición de Hecho", "Objetivo del producto", "Ninguno"], "correctAnswer": [2], "explanation": "El compromiso para el trabajo pendiente del producto es el objetivo del producto." },
  { "section": "Artefactos", "question": "¿Qué es el Product Backlog?", "type": "multiple_choice", "options": ["Una lista emergente y ordenada", "Un plan fijo", "Un manual de usuario", "Un reporte de errores"], "correctAnswer": [0], "explanation": "Es una lista emergente y ordenada de lo que se necesita para mejorar el producto." },
  { "section": "Artefactos", "question": "¿Quién es responsable del tamaño de los elementos en el Backlog?", "type": "multiple_choice", "options": ["Product Owner", "Scrum Master", "Desarrolladores", "Stakeholders"], "correctAnswer": [2], "explanation": "Los desarrolladores que realizarán el trabajo son responsables del tamaño." },
  { "section": "Artefactos", "question": "¿Qué es el refinamiento del Backlog?", "type": "multiple_choice", "options": ["Descomponer y definir elementos", "Eliminar elementos", "Aprobar el presupuesto", "Reunirse con clientes"], "correctAnswer": [0], "explanation": "Es el acto de descomponer y definir aún más los elementos en artículos más pequeños." },
  { "section": "Artefactos", "question": "¿Qué describe el Objetivo del Producto?", "type": "multiple_choice", "options": ["Un estado futuro del producto", "Una tarea diaria", "Un error del sistema", "Un cambio de personal"], "correctAnswer": [0], "explanation": "Describe un estado futuro del producto que sirve como objetivo para planificar." },
  { "section": "Artefactos", "question": "¿Qué compone el Sprint Backlog?", "type": "multiple_choice", "options": ["Objetivo, elementos seleccionados y plan", "Solo errores", "Solo código", "La visión anual"], "correctAnswer": [0], "explanation": "Se compone del objetivo sprint, elementos seleccionados y un plan accionable." },
  { "section": "Artefactos", "question": "¿Para quién es el Sprint Backlog?", "type": "multiple_choice", "options": ["Para los desarrolladores", "Para el Product Owner", "Para el Scrum Master", "Para los stakeholders"], "correctAnswer": [0], "explanation": "El Sprint Backlog es un plan por y para los desarrolladores." },
  { "section": "Artefactos", "question": "¿Qué es el Sprint Goal?", "type": "multiple_choice", "options": ["El único objetivo para el Sprint", "Una tarea administrativa", "Un contrato", "Un reporte semanal"], "correctAnswer": [0], "explanation": "El Sprint Goal es el único objetivo para el Sprint." },
  { "section": "Artefactos", "question": "¿Qué debe suceder si el trabajo resulta diferente a lo esperado?", "type": "multiple_choice", "options": ["Colaborar con el PO para negociar el alcance", "Cancelar el Sprint", "Ignorar el objetivo", "Trabajar más horas"], "correctAnswer": [0], "explanation": "Colaboran con el propietario del producto para negociar el alcance dentro del Sprint." },
  { "section": "Artefactos", "question": "¿Qué es un Incremento?", "type": "multiple_choice", "options": ["Un paso concreto hacia el objetivo", "Una idea", "Un diseño", "Una reunión"], "correctAnswer": [0], "explanation": "Un Incremento es un paso concreto hacia el Objetivo del Producto." },
  { "section": "Artefactos", "question": "¿Qué compromiso tiene el Incremento?", "type": "multiple_choice", "options": ["Definición de Hecho", "Sprint Goal", "Objetivo del Producto", "Ninguno"], "correctAnswer": [0], "explanation": "Su compromiso es la Definición de Hecho." },
  { "section": "Artefactos", "question": "¿Qué debe cumplir el Incremento para ser entregado?", "type": "multiple_choice", "options": ["Debe ser utilizable", "Debe ser perfecto", "Debe ser largo", "Debe ser aprobado por gerencia"], "correctAnswer": [0], "explanation": "Para proporcionar valor, el incremento debe ser utilizable." },
  { "section": "Artefactos", "question": "¿Qué sucede si un elemento no cumple con la Definición de Hecho?", "type": "multiple_choice", "options": ["Vuelve al Backlog", "Se entrega igual", "Se elimina", "Se archiva"], "correctAnswer": [0], "explanation": "Si no cumple, no se puede liberar y vuelve al Backlog para consideración futura." },
  { "section": "Artefactos", "question": "¿Quién crea la Definición de Hecho si no existe un estándar organizacional?", "type": "multiple_choice", "options": ["El Equipo Scrum", "El cliente", "El CEO", "El Scrum Master"], "correctAnswer": [0], "explanation": "El equipo de Scrum debe crear una adecuada para el producto." },
  { "section": "Artefactos", "question": "¿Se pueden crear varios incrementos en un Sprint?", "type": "multiple_choice", "options": ["Sí", "No", "Solo si el PO acepta", "Solo al final"], "correctAnswer": [0], "explanation": "Se pueden crear varios incrementos dentro de un Sprint." },
  { "section": "Artefactos", "question": "¿Qué mejora el Sprint Backlog a medida que se aprende más?", "type": "multiple_choice", "options": ["Se actualiza", "Se mantiene igual", "Se borra", "Se bloquea"], "correctAnswer": [0], "explanation": "Se actualiza a lo largo del Sprint a medida que se aprende más." },
  { "section": "Artefactos", "question": "¿La revisión de Sprint es una puerta para liberar valor?", "type": "multiple_choice", "options": ["No", "Sí", "Depende", "Solo si es al final"], "correctAnswer": [0], "explanation": "La revisión de Sprint nunca debe considerarse una puerta para liberar valor." },
  { "section": "Artefactos", "question": "¿Qué refuerzan los compromisos de los artefactos?", "type": "multiple_choice", "options": ["El empirismo y valores de Scrum", "La jerarquía", "La burocracia", "El control de costos"], "correctAnswer": [0], "explanation": "Existen para reforzar el empirismo y los valores de Scrum." },
  { "section": "Artefactos", "question": "¿Es el Product Backlog la única fuente de trabajo?", "type": "multiple_choice", "options": ["Sí", "No", "Solo para desarrollo", "Solo para diseño"], "correctAnswer": [0], "explanation": "Es la única fuente de trabajo emprendida por el equipo Scrum." },
  { "section": "Artefactos", "question": "¿Cómo se planifica el trabajo pendiente?", "type": "multiple_choice", "options": ["Mediante refinamiento", "Por sorteo", "Por jerarquía", "Al azar"], "correctAnswer": [0], "explanation": "Es una actividad en curso para agregar detalles mediante refinamiento." },
  { "section": "Artefactos", "question": "¿Un producto puede ser un servicio?", "type": "multiple_choice", "options": ["Sí", "No", "Solo si es físico", "Solo si es abstracto"], "correctAnswer": [0], "explanation": "Un producto podría ser un servicio, un producto físico o algo abstracto." },
  { "section": "Artefactos", "question": "¿Qué debe pasar con el Objetivo del Producto antes del siguiente?", "type": "multiple_choice", "options": ["Cumplirlo o abandonarlo", "Ignorarlo", "Duplicarlo", "Redactarlo de nuevo"], "correctAnswer": [0], "explanation": "Deben cumplir (o abandonar) un objetivo antes de asumir el siguiente." },
  { "section": "Artefactos", "question": "¿Qué proporciona el Sprint Goal?", "type": "multiple_choice", "options": ["Coherencia y enfoque", "Más reuniones", "Menos trabajo", "Nuevas reglas"], "correctAnswer": [0], "explanation": "Crea coherencia y enfoque, animando al equipo a trabajar juntos." },
  { "section": "Artefactos", "question": "¿Quiénes deben cumplir la Definición de Hecho si hay varios equipos?", "type": "multiple_choice", "options": ["Todos deben cumplir la misma", "Cada uno la suya", "Solo el Scrum Master", "Solo los líderes"], "correctAnswer": [0], "explanation": "Deben definir y cumplir mutuamente con la misma definición de hecho." },
  { "section": "Artefactos", "question": "¿Qué busca maximizar la transparencia?", "type": "multiple_choice", "options": ["Los artefactos", "Las quejas", "Los salarios", "Las ausencias"], "correctAnswer": [0], "explanation": "Están diseñados para maximizar la transparencia de la información clave." },
  { "section": "Artefactos", "question": "¿Qué atributos pueden variar en el refinamiento?", "type": "multiple_choice", "options": ["Dependen del dominio del trabajo", "Son siempre los mismos", "Solo el costo", "Solo el tiempo"], "correctAnswer": [0], "explanation": "Los atributos a menudo varían con el dominio del trabajo." },
  { "section": "Artefactos", "question": "¿Qué es la Definición de Hecho?", "type": "multiple_choice", "options": ["Descripción formal del estado del incremento", "Un contrato", "Una lista de tareas", "Un horario"], "correctAnswer": [0], "explanation": "Es una descripción formal del estado del Incremento cuando cumple con las medidas de calidad." },
  { "section": "Artefactos", "question": "¿Cómo se asegura que todos inspeccionen lo mismo?", "type": "multiple_choice", "options": ["Tienen la misma base para la adaptación", "Con más reuniones", "Con menos informes", "Con más supervisión"], "correctAnswer": [0], "explanation": "Cada uno de los que los inspecciona tiene la misma base para la adaptación." },
  { "section": "Artefactos", "question": "¿Puede entregarse un incremento antes del final del Sprint?", "type": "multiple_choice", "options": ["Sí", "No", "Solo si el PO lo aprueba", "Nunca"], "correctAnswer": [0], "explanation": "Un Incremento puede ser entregado a las partes interesadas antes del final del Sprint." },
  { "section": "Artefactos", "question": "¿Para qué sirve el Objetivo del Producto?", "type": "multiple_choice", "options": ["Como objetivo contra el cual planificar", "Para hacer reportes", "Para castigar errores", "Para contratar gente"], "correctAnswer": [0], "explanation": "Sirve como objetivo para el equipo Scrum contra el cual planificar." },
  { "section": "Artefactos", "question": "¿Qué debe tener el Sprint Backlog para ser inspeccionado?", "type": "multiple_choice", "options": ["Suficientes detalles", "Pocos detalles", "Solo errores", "Solo código"], "correctAnswer": [0], "explanation": "Debe tener suficientes detalles para que puedan inspeccionar su progreso en el Scrum Diario." },
  { "section": "Artefactos", "question": "¿Los incrementos anteriores son útiles?", "type": "multiple_choice", "options": ["Sí, son aditivos y trabajan juntos", "No, se borran", "Solo el último importa", "Depende del cliente"], "correctAnswer": [0], "explanation": "Cada Incremento es aditivo a todos los anteriores y asegurando que trabajen juntos." },
  { "section": "Artefactos", "question": "¿La Definición de Hecho es una comprensión compartida?", "type": "multiple_choice", "options": ["Sí", "No", "Solo del PO", "Solo de los desarrolladores"], "correctAnswer": [0], "explanation": "Crea transparencia al proporcionar a todos una comprensión compartida." },
  { "section": "Artefactos", "question": "¿Puede el PO influir en el refinamiento?", "type": "multiple_choice", "options": ["Sí, ayudando a entender mejores alternativas", "No, los desarrolladores deciden todo", "Solo si el SM lo permite", "Nunca"], "correctAnswer": [0], "explanation": "El Product Owner puede influir ayudándoles a entender y seleccionar mejores alternativas." },
  { "section": "Artefactos", "question": "¿Qué refuerza la Definición de Hecho?", "type": "multiple_choice", "options": ["Transparencia", "La jerarquía", "Los costos", "El control"], "correctAnswer": [0], "explanation": "La definición de Hecho crea transparencia." },
  { "section": "Artefactos", "question": "¿Qué es el límite de un producto?", "type": "multiple_choice", "options": ["Es claro", "No existe", "Es variable", "Es confidencial"], "correctAnswer": [0], "explanation": "Tiene un límite claro, partes interesadas conocidas, usuarios o clientes bien definidos." },
  { "section": "Artefactos", "question": "¿Quién define qué cumplirá el Objetivo del Producto?", "type": "multiple_choice", "options": ["El resto del Product Backlog", "El CEO", "El Scrum Master", "El mercado"], "correctAnswer": [0], "explanation": "El resto del trabajo pendiente del producto surge para definir 'qué' cumplirá el objetivo." },
  { "section": "Artefactos", "question": "¿Debe el equipo seguir estándares de la organización?", "type": "multiple_choice", "options": ["Sí, como mínimo", "No", "Solo si quieren", "Depende del equipo"], "correctAnswer": [0], "explanation": "Si forma parte de los estándares, deben seguirla como mínimo." },
  { "section": "Artefactos", "question": "¿El Product Backlog es fijo?", "type": "multiple_choice", "options": ["No, es emergente", "Sí, es inamovible", "Solo en diseño", "Solo en desarrollo"], "correctAnswer": [0], "explanation": "El trabajo pendiente del producto es una lista emergente." },
  { "section": "Artefactos", "question": "¿El Sprint Backlog es una imagen en tiempo real?", "type": "multiple_choice", "options": ["Sí", "No", "Solo en la revisión", "Solo al final"], "correctAnswer": [0], "explanation": "Es una imagen muy visible y en tiempo real del trabajo." },
  { "section": "Artefactos", "question": "¿Qué representa el Sprint Goal?", "type": "multiple_choice", "options": ["Flexibilidad en el trabajo para lograrlo", "Una lista de tareas rígida", "Un reporte de gastos", "Un horario"], "correctAnswer": [0], "explanation": "Proporciona flexibilidad en términos del trabajo exacto necesario para lograrlo." },
  { "section": "Artefactos", "question": "¿Cómo se crea el Sprint Goal?", "type": "multiple_choice", "options": ["Durante el Sprint Planning", "Antes de empezar", "Por el cliente", "Por el SM"], "correctAnswer": [0], "explanation": "Se crea durante el evento Sprint Planning." },
  { "section": "Artefactos", "question": "¿Qué sucede con los incrementos presentados en la revisión?", "type": "multiple_choice", "options": ["Apoyan el empirismo", "Se borran", "Se cambian", "Se ocultan"], "correctAnswer": [0], "explanation": "La suma de los Incrementos se presenta apoyando así el empirismo." },
  { "section": "Artefactos", "question": "¿Qué se necesita para mejorar el producto?", "type": "multiple_choice", "options": ["Product Backlog", "Más personal", "Más presupuesto", "Menos reuniones"], "correctAnswer": [0], "explanation": "El Product Backlog es lo que se necesita para mejorar el producto." },
  { "section": "Artefactos", "question": "¿Cómo se define el trabajo en el Sprint?", "type": "multiple_choice", "options": ["El plan accionable para entregar el incremento", "Solo código", "Solo diseño", "Solo pruebas"], "correctAnswer": [0], "explanation": "Se incluye un plan accionable para entregar el incremento." },
  { "section": "Artefactos", "question": "¿Un elemento no hecho puede presentarse en la revisión?", "type": "multiple_choice", "options": ["No", "Sí", "Solo si el PO acepta", "Solo si el SM acepta"], "correctAnswer": [0], "explanation": "Si no cumple con la definición, no se puede presentar en la revisión." },
  { "section": "Artefactos", "question": "¿Quiénes colaboran en la negociación del alcance?", "type": "multiple_choice", "options": ["Colaboran con el Product Owner", "Lo decide el CEO", "Lo decide el SM", "Lo decide el cliente"], "correctAnswer": [0], "explanation": "Colaboran con el propietario del producto para negociar el alcance." },
  { "section": "Artefactos", "question": "¿La transparencia es fundamental en los artefactos?", "type": "multiple_choice", "options": ["Sí", "No", "Solo en el Backlog", "Solo en el Incremento"], "correctAnswer": [0], "explanation": "Están diseñados para maximizar la transparencia." },
  { "section": "Artefactos", "question": "¿Qué hace un producto?", "type": "multiple_choice", "options": ["Un vehículo para entregar valor", "Un gasto", "Un documento", "Un sistema"], "correctAnswer": [0], "explanation": "Un producto es un vehículo para entregar valor." }
]