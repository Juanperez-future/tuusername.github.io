// ═══════════════════════════════════════════════════════════════
// ARCHIVO DE ARTÍCULOS - SOLO EDITA AQUÍ
// ═══════════════════════════════════════════════════════════════
// 
// CÓMO AGREGAR UN ARTÍCULO NUEVO:
// 1. Copia un bloque completo desde { hasta },
// 2. Pega al final antes del último ]
// 3. Modifica: categoria, titulo, descripcion, archivo
// 4. Guarda el archivo
// 5. ¡Listo! El artículo aparecerá automáticamente
//
// ═══════════════════════════════════════════════════════════════

const articles = [
    {
        categoria: "OLIGOPOLIOS TECNOLÓGICOS",
        horizonte: "2030",
        titulo: "AGI Oligopolio — 3 empresas controlan la inteligencia artificial general",
        descripcion: "OpenAI, DeepMind y Anthropic lideran la carrera hacia AGI. Para 2028 una alcanza capacidades que superan al humano en todas las tareas cognitivas. El que llegue primero no gana un mercado — redefine poder global.",
        archivo: "articulos/agi-oligopolio.html"
    },
    {
        categoria: "PENSAMIENTO SISTÉMICO",
        horizonte: "2040",
        titulo: "El colapso silencioso del fósforo",
        descripcion: "Marruecos controla el 70% de las reservas mundiales. Sin fósforo, no hay agricultura. El pico de extracción llega entre 2030-2040. Nadie habla de esto porque el fósforo no es sexy como el petróleo.",
        archivo: "articulos/colapso-fosforo.html"
    },
    {
        categoria: "GEOPOLÍTICA CORPORATIVA",
        horizonte: "2032",
        titulo: "La primera guerra corporativa",
        descripcion: "En 2022 Elon Musk apagó Starlink durante una operación militar ucraniana. Sin votar. Sin congreso. Cuando una corporación decida atacar en lugar de solo apoyar, ¿quién tiene autoridad para detenerla?",
        archivo: "articulos/guerra-corporativa.html"
    },
    {
        categoria: "PENSAMIENTO SISTÉMICO",
        horizonte: "2038",
        titulo: "La inversión demográfica — Más abuelos que nietos",
        descripcion: "Para 2040 habrá 3 personas mayores de 65 por cada menor de 5. Las democracias se convierten en gerontocracias de facto. El votante promedio tendrá 55 años y elegirá su pensión sobre tu futuro.",
        archivo: "articulos/inversion-demografica.html"
    },
    {
        categoria: "INTERFACES HUMANO-MÁQUINA",
        horizonte: "2035",
        titulo: "Dos especies humanas",
        descripcion: "Para 2032 la edición genética será legal en 50 países. Inmunidad al cáncer, IQ +30 puntos, 20 años más de vida por $50.000. Para 2040 editados y naturales podrían no reproducirse entre sí. Técnicamente: dos especies.",
        archivo: "articulos/dos-especies.html"
    },
    {
        categoria: "INFRAESTRUCTURA INVISIBLE",
        horizonte: "2037",
        titulo: "La gran desconexión infraestructural",
        descripcion: "La tubería que te trae agua tiene 50 años. El puente que cruzas tiene 60. La red eléctrica fue construida en los 70. Todo está fallando al mismo tiempo. Y nadie tiene dinero para arreglarlo.",
        archivo: "articulos/desconexion-infraestructural.html"
    }
];

// ═══════════════════════════════════════════════════════════════
// NO EDITES DEBAJO DE ESTA LÍNEA (código que genera las tarjetas)
// ═══════════════════════════════════════════════════════════════
