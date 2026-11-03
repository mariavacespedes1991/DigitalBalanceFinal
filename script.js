

function guardarYTraducir(idioma) {
    localStorage.setItem('digitalBalanceIdioma', idioma);
    aplicarIdiomaGlobal(idioma);
}

// Aplica el idioma según la página en la que se encuentre el usuario
function aplicarIdiomaGlobal(idioma) {
    document.documentElement.lang = idioma;

    // Actualiza directamente las funciones de idioma según la página activa
    if (typeof cambiarIdiomaModulo1 === "function" && document.getElementById("titulo-modulo1")) {
        cambiarIdiomaModulo1(idioma);
    }
    if (typeof cambiarIdiomaModulo2 === "function" && document.getElementById("m2-titulo")) {
        cambiarIdiomaModulo2(idioma);
    }
    if (typeof cambiarIdiomaModulo2Rutina === "function" && document.getElementById("m2r-titulo")) {
        cambiarIdiomaModulo2Rutina(idioma);
    }
    if (typeof cambiarIdiomaModulo3 === "function" && document.getElementById("m3-titulo")) {
        cambiarIdiomaModulo3(idioma);
    }
    if (typeof cambiarIdiomaModulo3Pomodoro === "function" && document.getElementById("m3p-titulo")) {
        cambiarIdiomaModulo3Pomodoro(idioma);
    }
    if (typeof cambiarIdiomaModulo4 === "function" && document.getElementById("m4-titulo")) {
        cambiarIdiomaModulo4(idioma);
    }
    if (typeof cambiarIdiomaModulo4Datos === "function" && document.getElementById("m4d-titulo")) {
        cambiarIdiomaModulo4Datos(idioma);
    }
    if (typeof cambiarIdiomaModulo5 === "function" && document.getElementById("m5-titulo")) {
        cambiarIdiomaModulo5(idioma);
    }
    if (typeof cambiarIdiomaModulo5Evaluacion === "function" && document.getElementById("m5e-titulo")) {
        cambiarIdiomaModulo5Evaluacion(idioma);
    }
    if (typeof cambiarIdiomaCreditos === "function" && document.getElementById("creditos-titulo")) {
        cambiarIdiomaCreditos(idioma);
    }
    if (typeof cambiarIdiomaModulo1Beneficios === "function" && document.getElementById("m1b-titulo")) {
        cambiarIdiomaModulo1Beneficios(idioma);
    }
    
    // Si estamos en el index principal
    if (document.getElementById("subtitulo-principal")) {
        cambiarIdioma(idioma);
    }
}

// Al cargar cualquier página HTML, recuperar el idioma guardado automáticamente
document.addEventListener("DOMContentLoaded", () => {
    const idiomaGuardado = localStorage.getItem('digitalBalanceIdioma') || 'es';
    aplicarIdiomaGlobal(idiomaGuardado);
});


let idiomaModulo1 = "es";
let idiomaModulo2 = "es";
let idiomaModulo3 = "es";
let idiomaModulo4 = "es";
let idiomaModulo5 = "es";
let idiomaModulo3Pomodoro = "es";


function cambiarTexto(id, texto) {
    const elemento = document.getElementById(id);

    if (elemento) {
        elemento.textContent = texto;
    }
}


function cambiarHTML(id, contenido) {
    const elemento = document.getElementById(id);

    if (elemento) {
        elemento.innerHTML = contenido;
    }
}



function traducirSubmenu(prefijo, idioma) {

    const nombresEspanol = [
        "Módulo 1",
        "Módulo 2",
        "Módulo 3",
        "Módulo 4",
        "Módulo 5"
    ];

    const nombresIngles = [
        "Module 1",
        "Module 2",
        "Module 3",
        "Module 4",
        "Module 5"
    ];

    const nombres =
        idioma === "en" ? nombresIngles : nombresEspanol;

    for (let i = 1; i <= 5; i++) {

        cambiarTexto(
            prefijo + i,
            nombres[i - 1]
        );
    }


    const submenu = document.querySelector(".submenu");

    if (submenu) {

        const enlaces = submenu.querySelectorAll("a");

        enlaces.forEach(function(enlace, indice) {

            if (indice < 5) {
                enlace.textContent = nombres[indice];
            }

        });
    }
}



function mostrarInformacion(tipo) {

    const informacion = document.getElementById("informacion");

    if (!informacion) {
        return;
    }

    if (idiomaModulo1 === "en") {

        if (tipo === "equilibrio") {

            informacion.innerHTML =
                "<strong>⚖️ Balanced use:</strong><br>" +
                "Balanced use means organizing your screen time while also making time for rest, study and other activities.";

        }

        else if (tipo === "salud") {

            informacion.innerHTML =
                "<strong>💙 Health and wellbeing:</strong><br>" +
                "Taking care of digital wellbeing also means getting enough rest, maintaining good posture and avoiding excessive device use.";

        }

        else if (tipo === "vida") {

            informacion.innerHTML =
                "<strong>🌱 Personal life and study:</strong><br>" +
                "Technology should complement our lives and not replace personal, family, academic and social activities.";
        }

    }

    else {

        if (tipo === "equilibrio") {

            informacion.innerHTML =
                "<strong>⚖️ Uso equilibrado:</strong><br>" +
                "El uso equilibrado significa organizar el tiempo frente a las pantallas y también dedicar tiempo al descanso, el estudio y otras actividades.";

        }

        else if (tipo === "salud") {

            informacion.innerHTML =
                "<strong>💙 Salud y bienestar:</strong><br>" +
                "Cuidar el bienestar digital también implica descansar adecuadamente, mantener una buena postura y evitar el uso excesivo de dispositivos.";

        }

        else if (tipo === "vida") {

            informacion.innerHTML =
                "<strong>🌱 Vida personal y estudio:</strong><br>" +
                "La tecnología debe complementar nuestra vida y no reemplazar las actividades personales, familiares, académicas y sociales.";
        }
    }
}




let respuestas = {};

function seleccionarRespuesta(pregunta, respuesta, boton) {

    respuestas[pregunta] = respuesta;

    const botones =
        boton.parentElement.querySelectorAll("button");

    botones.forEach(function(botonActual) {
        botonActual.classList.remove("seleccionado");
    });

    boton.classList.add("seleccionado");

    if (
        respuestas[1] &&
        respuestas[2] &&
        respuestas[3]
    ) {

        let puntos = 0;

        if (respuestas[1] === "poco") {
            puntos++;
        }

        if (respuestas[2] === "poco") {
            puntos++;
        }

        if (respuestas[3] === "poco") {
            puntos++;
        }

        const resultado =
            document.getElementById("resultado-test");

        if (!resultado) {
            return;
        }

        if (idiomaModulo1 === "en") {

            if (puntos === 3) {

                resultado.innerHTML =
                    "<strong>Your result: 3/3</strong><br>" +
                    "Excellent! You have quite balanced digital habits.<br>" +
                    "Tip: keep maintaining moments of rest and disconnection.";

            }

            else if (puntos === 2) {

                resultado.innerHTML =
                    "<strong>Your result: 2/3</strong><br>" +
                    "You're doing well! You have good habits, but there are still some areas you can improve.<br>" +
                    "Tip: try to better organize your study and rest time.";

            }

            else {

                resultado.innerHTML =
                    "<strong>Your result: " + puntos + "/3</strong><br>" +
                    "You can improve your digital habits.<br>" +
                    "Tip: establish schedules for screen use and avoid distractions while studying.";
            }

        }

        else {

            if (puntos === 3) {

                resultado.innerHTML =
                    "<strong>Tu resultado: 3/3</strong><br>" +
                    "¡Excelente! Tienes hábitos digitales bastante equilibrados.<br>" +
                    "Consejo: continúa manteniendo espacios de descanso y desconexión.";

            }

            else if (puntos === 2) {

                resultado.innerHTML =
                    "<strong>Tu resultado: 2/3</strong><br>" +
                    "¡Vas bien! Tienes buenos hábitos, pero todavía puedes mejorar algunos.<br>" +
                    "Consejo: intenta organizar mejor tus momentos de estudio y descanso.";

            }

            else {

                resultado.innerHTML =
                    "<strong>Tu resultado: " + puntos + "/3</strong><br>" +
                    "Puedes mejorar tus hábitos digitales.<br>" +
                    "Consejo: establece horarios para el uso de pantallas y evita distracciones durante el estudio.";
            }
        }
    }
}




function mostrarBeneficio(habito) {

    const resultado =
        document.getElementById("resultado-beneficio");

    if (!resultado) {
        return;
    }

    if (idiomaModulo1 === "en") {

        if (habito === "descanso") {

            resultado.innerHTML =
                "<strong>😴 Sleep well:</strong><br>" +
                "Getting enough sleep helps recover energy, improve concentration and maintain better wellbeing during the day.";

        }

        else if (habito === "pausas") {

            resultado.innerHTML =
                "<strong>📵 Take breaks:</strong><br>" +
                "Taking breaks while using screens helps reduce eye strain and allows you to regain concentration.";

        }

        else if (habito === "familia") {

            resultado.innerHTML =
                "<strong>👨‍👩‍👧 Screen-free time:</strong><br>" +
                "Spending time without devices encourages communication, personal relationships and balance between digital and everyday life.";
        }

    }

    else {

        if (habito === "descanso") {

            resultado.innerHTML =
                "<strong>😴 Dormir bien:</strong><br>" +
                "Dormir adecuadamente ayuda a recuperar energía, mejorar la concentración y mantener un mejor bienestar durante el día.";

        }

        else if (habito === "pausas") {

            resultado.innerHTML =
                "<strong>📵 Hacer pausas:</strong><br>" +
                "Tomar descansos durante el uso de pantallas ayuda a reducir el cansancio visual y permite recuperar la concentración.";

        }

        else if (habito === "familia") {

            resultado.innerHTML =
                "<strong>👨‍👩‍👧 Tiempo sin pantallas:</strong><br>" +
                "Compartir momentos sin dispositivos favorece la comunicación, las relaciones personales y el equilibrio entre la vida digital y la vida cotidiana.";
        }
    }
}




function cambiarIdiomaModulo1(idioma) {

    idiomaModulo1 = idioma;

    if (idioma === "en") {

        cambiarTexto("menu-inicio", "Home");
        cambiarTexto("menu-modulos", "Modules ▾");
        cambiarTexto("menu-creditos", "Credits");

        cambiarTexto("m1-menu-inicio", "Home");
        cambiarTexto("m1-menu-modulos", "Modules ▾");
        cambiarTexto("m1-menu-creditos", "Credits");

        traducirSubmenu("submenu-modulo", "en");
        traducirSubmenu("m1-submenu-modulo", "en");

        cambiarTexto("etiqueta-modulo1", "MODULE 1");
        cambiarTexto("m1-etiqueta", "MODULE 1");

        cambiarTexto(
            "titulo-modulo1",
            "What is digital wellbeing?"
        );

        cambiarTexto(
            "m1-titulo",
            "What is digital wellbeing?"
        );

        cambiarTexto(
            "descripcion-modulo1",
            "Digital wellbeing means maintaining a healthy and balanced relationship with technology. It does not mean stopping the use of devices, but learning to use them in a way that benefits our lives, studies, rest and relationships."
        );

        cambiarTexto(
            "m1-elementos-titulo",
            "Discover the elements of digital wellbeing"
        );

        cambiarTexto(
            "m1-tarjetas-titulo",
            "Discover the elements of digital wellbeing"
        );

        cambiarTexto(
            "m1-tarjetas-instruccion",
            "Click on each card to learn more."
        );

        cambiarTexto(
            "m1-tarjeta1",
            "Balanced use"
        );

        cambiarTexto(
            "m1-tarjeta1-desc",
            "Learn to better organize the time you spend in front of screens."
        );

        cambiarTexto(
            "m1-tarjeta2",
            "Health and wellbeing"
        );

        cambiarTexto(
            "m1-tarjeta2-desc",
            "Take care of your rest, concentration and health while using technology."
        );

        cambiarTexto(
            "m1-tarjeta3",
            "Personal life and study"
        );

        cambiarTexto(
            "m1-tarjeta3-desc",
            "Find a balance between the digital world and your daily activities."
        );

        cambiarTexto(
            "informacion",
            "Click on a card to discover more information."
        );

        cambiarTexto(
            "m1-quiz-titulo",
            "How are your digital habits?"
        );

        cambiarTexto(
            "m1-quiz-descripcion",
            "Answer these questions to learn more about your technology habits."
        );

        cambiarTexto(
            "m1-pregunta1",
            "1. How much time do you normally spend in front of a screen?"
        );

        cambiarTexto("m1-r1-1", "Less than 2 hours");
        cambiarTexto("m1-r1-2", "Between 2 and 5 hours");
        cambiarTexto("m1-r1-3", "More than 5 hours");

        cambiarTexto(
            "m1-pregunta2",
            "2. Do you usually take breaks from screens during the day?"
        );

        cambiarTexto("m1-r2-1", "Yes, frequently");
        cambiarTexto("m1-r2-2", "Sometimes");
        cambiarTexto("m1-r2-3", "Almost never");

        cambiarTexto(
            "m1-pregunta3",
            "3. Do you use your phone while studying?"
        );

        cambiarTexto("m1-r3-1", "Almost never");
        cambiarTexto("m1-r3-2", "Sometimes");
        cambiarTexto("m1-r3-3", "Frequently");

        cambiarTexto(
            "resultado-test",
            "Select an answer for each question."
        );

        cambiarTexto(
            "m1-beneficios-titulo",
            "🌱 Discover the benefits of good digital habits"
        );

        cambiarTexto(
            "m1-beneficios-instruccion",
            "Select a habit to learn about one of its benefits."
        );

        cambiarTexto(
            "m1-beneficio-descanso",
            "😴 Sleep well"
        );

        cambiarTexto(
            "m1-beneficio-pausas",
            "📵 Take breaks"
        );

        cambiarTexto(
            "m1-beneficio-familia",
            "👨‍👩‍👧 Screen-free time"
        );

        cambiarTexto(
            "resultado-beneficio",
            "Select a habit to discover its benefit."
        );

        cambiarTexto(
            "m1-boton-inicio",
            "← Home"
        );

        cambiarTexto(
            "m1-boton-beneficios",
            "Benefits →"
        );

        cambiarTexto(
            "m1-boton-modulo2",
            "Module 2 →"
        );

    }

    else {

        cambiarTexto("menu-inicio", "Inicio");
        cambiarTexto("menu-modulos", "Módulos ▾");
        cambiarTexto("menu-creditos", "Créditos");

        cambiarTexto("m1-menu-inicio", "Inicio");
        cambiarTexto("m1-menu-modulos", "Módulos ▾");
        cambiarTexto("m1-menu-creditos", "Créditos");

        traducirSubmenu("submenu-modulo", "es");
        traducirSubmenu("m1-submenu-modulo", "es");

        cambiarTexto("etiqueta-modulo1", "MÓDULO 1");
        cambiarTexto("m1-etiqueta", "MÓDULO 1");

        cambiarTexto(
            "titulo-modulo1",
            "¿Qué es el bienestar digital?"
        );

        cambiarTexto(
            "m1-titulo",
            "¿Qué es el bienestar digital?"
        );

        cambiarTexto(
            "descripcion-modulo1",
            "El bienestar digital consiste en mantener una relación saludable y equilibrada con la tecnología. No significa dejar de utilizar los dispositivos, sino aprender a usarlos de una forma que beneficie nuestra vida, nuestro estudio, nuestro descanso y nuestras relaciones."
        );

        cambiarTexto(
            "m1-elementos-titulo",
            "Descubre los elementos del bienestar digital"
        );

        cambiarTexto(
            "m1-tarjetas-titulo",
            "Descubre los elementos del bienestar digital"
        );

        cambiarTexto(
            "m1-tarjetas-instruccion",
            "Haz clic sobre cada tarjeta para conocer más."
        );

        cambiarTexto(
            "m1-tarjeta1",
            "Uso equilibrado"
        );

        cambiarTexto(
            "m1-tarjeta1-desc",
            "Aprende a distribuir mejor el tiempo que utilizas frente a las pantallas."
        );

        cambiarTexto(
            "m1-tarjeta2",
            "Salud y bienestar"
        );

        cambiarTexto(
            "m1-tarjeta2-desc",
            "Cuida tu descanso, concentración y salud mientras utilizas la tecnología."
        );

        cambiarTexto(
            "m1-tarjeta3",
            "Vida personal y estudio"
        );

        cambiarTexto(
            "m1-tarjeta3-desc",
            "Encuentra un equilibrio entre el mundo digital y las actividades de tu vida diaria."
        );

        cambiarTexto(
            "informacion",
            "Haz clic en una tarjeta para descubrir más información."
        );

        cambiarTexto(
            "m1-quiz-titulo",
            "¿Cómo están tus hábitos digitales?"
        );

        cambiarTexto(
            "m1-quiz-descripcion",
            "Responde estas preguntas para conocer mejor tus hábitos relacionados con el uso de la tecnología."
        );

        cambiarTexto(
            "m1-pregunta1",
            "1. ¿Cuánto tiempo pasas normalmente frente a una pantalla?"
        );

        cambiarTexto("m1-r1-1", "Menos de 2 horas");
        cambiarTexto("m1-r1-2", "Entre 2 y 5 horas");
        cambiarTexto("m1-r1-3", "Más de 5 horas");

        cambiarTexto(
            "m1-pregunta2",
            "2. ¿Sueles descansar de las pantallas durante el día?"
        );

        cambiarTexto("m1-r2-1", "Sí, con frecuencia");
        cambiarTexto("m1-r2-2", "Algunas veces");
        cambiarTexto("m1-r2-3", "Casi nunca");

        cambiarTexto(
            "m1-pregunta3",
            "3. ¿Utilizas el celular mientras estudias?"
        );

        cambiarTexto("m1-r3-1", "Casi nunca");
        cambiarTexto("m1-r3-2", "Algunas veces");
        cambiarTexto("m1-r3-3", "Frecuentemente");

        cambiarTexto(
            "resultado-test",
            "Selecciona una respuesta en cada pregunta."
        );

        cambiarTexto(
            "m1-beneficios-titulo",
            "🌱 Descubre los beneficios de los buenos hábitos digitales"
        );

        cambiarTexto(
            "m1-beneficios-instruccion",
            "Selecciona un hábito para conocer uno de sus beneficios."
        );

        cambiarTexto(
            "m1-beneficio-descanso",
            "😴 Dormir bien"
        );

        cambiarTexto(
            "m1-beneficio-pausas",
            "📵 Hacer pausas"
        );

        cambiarTexto(
            "m1-beneficio-familia",
            "👨‍👩‍👧 Tiempo sin pantallas"
        );

        cambiarTexto(
            "resultado-beneficio",
            "Selecciona un hábito para descubrir su beneficio."
        );

        cambiarTexto(
            "m1-boton-inicio",
            "← Inicio"
        );

        cambiarTexto(
            "m1-boton-beneficios",
            "Beneficios →"
        );

        cambiarTexto(
            "m1-boton-modulo2",
            "Módulo 2 →"
        );
    }
}



function mostrarHabito(habito) {

    const informacion =
        document.getElementById("informacion-habito");

    if (!informacion) {
        return;
    }

    if (idiomaModulo2 === "en") {

        if (habito === "descanso") {

            informacion.innerHTML =
                "<strong>😴 Take breaks from screens:</strong><br>" +
                "Taking breaks while using devices allows your eyes to rest, regain concentration and avoid tiredness.";

        }

        else if (habito === "estudio") {

            informacion.innerHTML =
                "<strong>📚 Take care of your study time:</strong><br>" +
                "While studying, it is recommended to reduce digital distractions and use technology only when necessary.";

        }

        else if (habito === "equilibrio") {

            informacion.innerHTML =
                "<strong>⚖️ Maintain balance:</strong><br>" +
                "A healthy digital habit means combining device use with rest, study, physical activity and time with other people.";
        }

    }

    else {

        if (habito === "descanso") {

            informacion.innerHTML =
                "<strong>😴 Descansar de las pantallas:</strong><br>" +
                "Realizar pausas durante el uso de dispositivos permite descansar la vista, recuperar la concentración y evitar el cansancio.";

        }

        else if (habito === "estudio") {

            informacion.innerHTML =
                "<strong>📚 Cuidar el estudio:</strong><br>" +
                "Durante el estudio es recomendable reducir las distracciones digitales y utilizar la tecnología únicamente cuando sea necesaria.";

        }

        else if (habito === "equilibrio") {

            informacion.innerHTML =
                "<strong>⚖️ Mantener el equilibrio:</strong><br>" +
                "Un hábito digital saludable consiste en combinar el uso de dispositivos con el descanso, el estudio, la actividad física y el tiempo con otras personas.";
        }
    }
}




function mostrarTiempo(tipo) {

    const informacion =
        document.getElementById("informacion-tiempo");

    if (!informacion) {
        return;
    }

    if (idiomaModulo2 === "en") {

        if (tipo === "organizar") {

            informacion.innerHTML =
                "<strong>🗓️ Organize your time:</strong><br>" +
                "Organizing your time helps you complete your activities without feeling that you have to do everything at once. You can use an agenda or task list to plan study, rest and entertainment.";

        }

        else if (tipo === "distracciones") {

            informacion.innerHTML =
                "<strong>📵 Reduce distractions:</strong><br>" +
                "Notifications, social media and messages can interrupt concentration. A useful strategy is to silence notifications or move your phone away when you need to focus.";

        }

        else if (tipo === "descanso") {

            informacion.innerHTML =
                "<strong>🌙 Make time for rest:</strong><br>" +
                "Rest is also important for maintaining digital balance. Take breaks while using screens and reserve moments of the day to disconnect.";
        }

    }

    else {

        if (tipo === "organizar") {

            informacion.innerHTML =
                "<strong>🗓️ Organizar el tiempo:</strong><br>" +
                "Organizar tu tiempo te ayuda a cumplir tus actividades sin sentir que debes hacer todo al mismo tiempo. Puedes utilizar una agenda o una lista de tareas para planificar tus momentos de estudio, descanso y entretenimiento.";

        }

        else if (tipo === "distracciones") {

            informacion.innerHTML =
                "<strong>📵 Reducir las distracciones:</strong><br>" +
                "Las notificaciones, redes sociales y mensajes pueden interrumpir la concentración. Una buena estrategia es silenciar las notificaciones o alejar el celular cuando necesites concentrarte.";

        }

        else if (tipo === "descanso") {

            informacion.innerHTML =
                "<strong>🌙 Reservar tiempo para descansar:</strong><br>" +
                "El descanso también es importante para mantener un buen equilibrio digital. Es recomendable hacer pausas durante el uso de pantallas y reservar momentos del día para desconectarse.";
        }
    }
}




function recomendarTiempo(actividad) {

    const recomendacion =
        document.getElementById("recomendacion-tiempo");

    if (!recomendacion) {
        return;
    }

    if (idiomaModulo2 === "en") {

        if (actividad === "estudio") {

            recomendacion.innerHTML =
                "<strong>📚 Recommendation:</strong><br>" +
                "Find a quiet place, silence notifications and set a specific time to study without distractions.";

        }

        else if (actividad === "descanso") {

            recomendacion.innerHTML =
                "<strong>🌙 Recommendation:</strong><br>" +
                "Use your rest periods to step away from screens, relax and recover your energy.";

        }

        else if (actividad === "entretenimiento") {

            recomendacion.innerHTML =
                "<strong>🎮 Recommendation:</strong><br>" +
                "Enjoy digital entertainment, but set a time limit so it does not replace study or rest.";
        }

    }

    else {

        if (actividad === "estudio") {

            recomendacion.innerHTML =
                "<strong>📚 Recomendación:</strong><br>" +
                "Busca un lugar tranquilo, silencia las notificaciones y establece un tiempo específico para estudiar sin distracciones.";

        }

        else if (actividad === "descanso") {

            recomendacion.innerHTML =
                "<strong>🌙 Recomendación:</strong><br>" +
                "Aprovecha tus momentos de descanso para alejarte un poco de las pantallas, relajarte y recuperar energía.";

        }

        else if (actividad === "entretenimiento") {

            recomendacion.innerHTML =
                "<strong>🎮 Recomendación:</strong><br>" +
                "Disfruta del entretenimiento digital, pero establece un límite de tiempo para evitar que ocupe el espacio destinado al estudio o al descanso.";
        }
    }
}




let respuestasRutina = {};

function responderRutina(pregunta, respuesta, boton) {

    respuestasRutina[pregunta] = respuesta;

    const botones =
        boton.parentElement.querySelectorAll("button");

    botones.forEach(function(botonActual) {
        botonActual.classList.remove("seleccionado");
    });

    boton.classList.add("seleccionado");

    if (
        respuestasRutina[1] &&
        respuestasRutina[2] &&
        respuestasRutina[3]
    ) {

        let puntos = 0;

        if (respuestasRutina[1] === "correcta") puntos++;
        if (respuestasRutina[2] === "correcta") puntos++;
        if (respuestasRutina[3] === "correcta") puntos++;

        const resultado =
            document.getElementById("resultado-rutina") ||
            document.getElementById("m2r-resultado");

        if (!resultado) {
            return;
        }

        if (idiomaModulo2 === "en") {

            if (puntos === 3) {

                resultado.innerHTML =
                    "<strong>Excellent! 3/3</strong><br>" +
                    "Your answers show healthy digital habits. Keep maintaining a balance between technology, study and rest.";

            }

            else if (puntos === 2) {

                resultado.innerHTML =
                    "<strong>You're doing well! 2/3</strong><br>" +
                    "You have good digital habits, but you can still improve some aspects of your routine.";

            }

            else {

                resultado.innerHTML =
                    "<strong>Result: " + puntos + "/3</strong><br>" +
                    "You can improve some digital habits. Remember to take breaks, reduce distractions and balance your screen time.";
            }

        }

        else {

            if (puntos === 3) {

                resultado.innerHTML =
                    "<strong>¡Excelente! 3/3</strong><br>" +
                    "Tus respuestas muestran hábitos digitales saludables. Continúa manteniendo un equilibrio entre la tecnología, el estudio y el descanso.";

            }

            else if (puntos === 2) {

                resultado.innerHTML =
                    "<strong>¡Vas bien! 2/3</strong><br>" +
                    "Tienes buenos hábitos digitales, pero todavía puedes mejorar algunos aspectos de tu rutina.";

            }

            else {

                resultado.innerHTML =
                    "<strong>Resultado: " + puntos + "/3</strong><br>" +
                    "Puedes mejorar algunos hábitos digitales. Recuerda hacer pausas, reducir las distracciones y equilibrar el tiempo frente a las pantallas.";
            }
        }
    }
}




function cambiarIdiomaModulo2(idioma) {

    idiomaModulo2 = idioma;

    if (idioma === "en") {

        cambiarTexto("m2-menu-inicio", "Home");
        cambiarTexto("m2-menu-modulos", "Modules ▾");
        cambiarTexto("m2-menu-creditos", "Credits");

        traducirSubmenu("m2-submenu-modulo", "en");

        cambiarTexto("m2-etiqueta", "MODULE 2");

        cambiarTexto(
            "m2-titulo",
            "Healthy Digital Habits"
        );

        cambiarTexto(
            "m2-descripcion",
            "Healthy digital habits help us use technology in a more balanced way. Small actions such as taking breaks from screens, organizing our activities and taking care of our study time can improve our experience with technology."
        );

        cambiarTexto(
            "m2-tarjetas-titulo",
            "Keys to managing your time better"
        );

        cambiarTexto(
            "m2-tarjetas-instruccion",
            "Click on each card to learn more."
        );

        cambiarTexto(
            "m2-tarjeta1",
            "Take breaks from screens"
        );

        cambiarTexto(
            "m2-tarjeta1-desc",
            "Taking breaks while using devices helps take care of your wellbeing and concentration."
        );

        cambiarTexto(
            "m2-tarjeta2",
            "Take care of your study time"
        );

        cambiarTexto(
            "m2-tarjeta2-desc",
            "Avoiding digital distractions allows you to make better use of the time dedicated to academic activities."
        );

        cambiarTexto(
            "m2-tarjeta3",
            "Maintain balance"
        );

        cambiarTexto(
            "m2-tarjeta3-desc",
            "Combining technology use with other activities helps maintain healthier habits."
        );

        cambiarTexto(
            "m2-quiz-titulo",
            "🗓️ Quiz: Build a healthy digital routine"
        );

        cambiarTexto(
            "m2-quiz-descripcion",
            "Answer the following questions to find out how healthy your daily technology routine is."
        );

        cambiarTexto(
            "m2-pregunta1",
            "1. What do you do when you need to study?"
        );

        cambiarTexto(
            "m2-p1-correcta",
            "📚 I remove distractions and concentrate"
        );

        cambiarTexto(
            "m2-p1-incorrecta",
            "📱 I constantly check social media"
        );

        cambiarTexto(
            "m2-pregunta2",
            "2. What is recommended after spending a lot of time in front of a screen?"
        );

        cambiarTexto(
            "m2-p2-correcta",
            "👀 Take a break and rest"
        );

        cambiarTexto(
            "m2-p2-incorrecta",
            "💻 Continue without taking a break"
        );

        cambiarTexto(
            "m2-pregunta3",
            "3. How can you maintain a balanced digital routine?"
        );

        cambiarTexto(
            "m2-p3-correcta",
            "⚖️ Combine technology, study, rest and other activities"
        );

        cambiarTexto(
            "m2-p3-incorrecta",
            "📱 Use devices throughout the entire day"
        );

        cambiarTexto(
            "resultado-rutina",
            "Answer all three questions to see your result."
        );

        cambiarTexto(
            "m2-boton-anterior",
            "← Module 1"
        );

        cambiarTexto(
            "m2-boton-rutina",
            "Routine →"
        );

        cambiarTexto(
            "m2-boton-modulo1",
            "← Module 1"
        );

        cambiarTexto(
            "m2-boton-modulo3",
            "Module 3 →"
        );

    }

    else {

        cambiarTexto("m2-menu-inicio", "Inicio");
        cambiarTexto("m2-menu-modulos", "Módulos ▾");
        cambiarTexto("m2-menu-creditos", "Créditos");

        traducirSubmenu("m2-submenu-modulo", "es");

        cambiarTexto("m2-etiqueta", "MÓDULO 2");

        cambiarTexto(
            "m2-titulo",
            "Hábitos digitales saludables"
        );

        cambiarTexto(
            "m2-descripcion",
            "Los hábitos digitales saludables nos ayudan a utilizar la tecnología de una manera más equilibrada. Pequeñas acciones como descansar de las pantallas, organizar nuestras actividades y cuidar nuestros momentos de estudio pueden mejorar nuestra experiencia con la tecnología."
        );

        cambiarTexto(
            "m2-tarjetas-titulo",
            "Claves para administrar mejor tu tiempo"
        );

        cambiarTexto(
            "m2-tarjetas-instruccion",
            "Haz clic sobre cada tarjeta para conocer más."
        );

        cambiarTexto(
            "m2-tarjeta1",
            "Descansar de las pantallas"
        );

        cambiarTexto(
            "m2-tarjeta1-desc",
            "Realizar pausas durante el uso de dispositivos ayuda a cuidar el bienestar y la concentración."
        );

        cambiarTexto(
            "m2-tarjeta2",
            "Cuidar el estudio"
        );

        cambiarTexto(
            "m2-tarjeta2-desc",
            "Evitar distracciones digitales permite aprovechar mejor el tiempo dedicado a las actividades académicas."
        );

        cambiarTexto(
            "m2-tarjeta3",
            "Mantener el equilibrio"
        );

        cambiarTexto(
            "m2-tarjeta3-desc",
            "Combinar el uso de la tecnología con otras actividades ayuda a mantener hábitos más saludables."
        );

        cambiarTexto(
            "m2-quiz-titulo",
            "🗓️ Quiz: construye una rutina digital saludable"
        );

        cambiarTexto(
            "m2-quiz-descripcion",
            "Responde las siguientes preguntas para conocer qué tan saludable es tu rutina diaria con la tecnología."
        );

        cambiarTexto(
            "m2-pregunta1",
            "1. ¿Qué haces cuando necesitas estudiar?"
        );

        cambiarTexto(
            "m2-p1-correcta",
            "📚 Alejo las distracciones y me concentro"
        );

        cambiarTexto(
            "m2-p1-incorrecta",
            "📱 Reviso constantemente las redes sociales"
        );

        cambiarTexto(
            "m2-pregunta2",
            "2. ¿Qué es recomendable hacer después de pasar bastante tiempo frente a una pantalla?"
        );

        cambiarTexto(
            "m2-p2-correcta",
            "👀 Hacer una pausa y descansar"
        );

        cambiarTexto(
            "m2-p2-incorrecta",
            "💻 Continuar sin hacer ninguna pausa"
        );

        cambiarTexto(
            "m2-pregunta3",
            "3. ¿Cómo puedes mantener una rutina digital equilibrada?"
        );

        cambiarTexto(
            "m2-p3-correcta",
            "⚖️ Combinar tecnología, estudio, descanso y otras actividades"
        );

        cambiarTexto(
            "m2-p3-incorrecta",
            "📱 Utilizar dispositivos durante todo el día"
        );

        cambiarTexto(
            "resultado-rutina",
            "Responde las tres preguntas para conocer tu resultado."
        );

        cambiarTexto(
            "m2-boton-anterior",
            "← Módulo 1"
        );

        cambiarTexto(
            "m2-boton-rutina",
            "Rutina →"
        );

        cambiarTexto(
            "m2-boton-modulo1",
            "← Módulo 1"
        );

        cambiarTexto(
            "m2-boton-modulo3",
            "Módulo 3 →"
        );
    }

    cambiarTexto(
        "informacion-habito",
        idioma === "en"
            ? "Click on a habit to learn more."
            : "Haz clic en un hábito para conocer más."
    );
}




// Traducción de la página principal (index.html)
function cambiarIdioma(idioma) {

    if (idioma === "en") {

        cambiarTexto("menu-inicio", "Home");
        cambiarTexto("menu-modulos", "Modules ▾");
        cambiarTexto("menu-creditos", "Credits");

        traducirSubmenu("submenu-modulo", "en");

        cambiarTexto(
            "subtitulo-principal",
            "Build Healthier Digital Habits"
        );

        cambiarTexto(
            "descripcion-principal",
            "Learn to develop healthy digital habits through interactive content about digital wellbeing, time management and cybersecurity."
        );

        cambiarTexto("boton-comenzar", "Get started");

    }

    else {

        cambiarTexto("menu-inicio", "Inicio");
        cambiarTexto("menu-modulos", "Módulos ▾");
        cambiarTexto("menu-creditos", "Créditos");

        traducirSubmenu("submenu-modulo", "es");

        cambiarTexto(
            "subtitulo-principal",
            "Construye hábitos digitales más saludables"
        );

        cambiarTexto(
            "descripcion-principal",
            "Aprende a desarrollar hábitos digitales saludables mediante contenido interactivo sobre bienestar digital, gestión del tiempo y ciberseguridad."
        );

        cambiarTexto("boton-comenzar", "Comenzar");
    }
}




function cambiarIdiomaModulo1Beneficios(idioma) {

    // mostrarBeneficio() utiliza el idioma del módulo 1
    idiomaModulo1 = idioma;

    if (idioma === "en") {

        cambiarTexto("m1b-menu-inicio", "Home");
        cambiarTexto("m1b-menu-modulos", "Modules ▾");
        cambiarTexto("m1b-menu-creditos", "Credits");

        traducirSubmenu("m1b-submenu-modulo", "en");

        cambiarTexto("m1b-etiqueta", "MODULE 1");

        cambiarTexto(
            "m1b-titulo",
            "Benefits of good digital habits"
        );

        cambiarTexto(
            "m1b-descripcion",
            "Good digital habits can help us take care of our rest, organize our time better and keep moments to share with other people without constantly depending on screens."
        );

        cambiarTexto(
            "m1b-beneficios-titulo",
            "🌱 Discover the benefits of good digital habits"
        );

        cambiarTexto(
            "m1b-beneficios-instruccion",
            "Select a habit to learn about one of its benefits."
        );

        cambiarTexto("m1b-beneficio-descanso", "😴 Sleep well");
        cambiarTexto("m1b-beneficio-pausas", "📵 Take breaks");
        cambiarTexto("m1b-beneficio-familia", "👨‍👩‍👧 Screen-free time");

        cambiarTexto(
            "resultado-beneficio",
            "Select a habit to discover its benefit."
        );

        cambiarTexto("m1b-boton-anterior", "← Module 1");
        cambiarTexto("m1b-boton-siguiente", "Module 2 →");

    }

    else {

        cambiarTexto("m1b-menu-inicio", "Inicio");
        cambiarTexto("m1b-menu-modulos", "Módulos ▾");
        cambiarTexto("m1b-menu-creditos", "Créditos");

        traducirSubmenu("m1b-submenu-modulo", "es");

        cambiarTexto("m1b-etiqueta", "MÓDULO 1");

        cambiarTexto(
            "m1b-titulo",
            "Beneficios de los buenos hábitos digitales"
        );

        cambiarTexto(
            "m1b-descripcion",
            "Los buenos hábitos digitales pueden ayudarnos a cuidar nuestro descanso, organizar mejor nuestro tiempo y mantener espacios para compartir con otras personas sin depender constantemente de las pantallas."
        );

        cambiarTexto(
            "m1b-beneficios-titulo",
            "🌱 Descubre los beneficios de los buenos hábitos digitales"
        );

        cambiarTexto(
            "m1b-beneficios-instruccion",
            "Selecciona un hábito para conocer uno de sus beneficios."
        );

        cambiarTexto("m1b-beneficio-descanso", "😴 Dormir bien");
        cambiarTexto("m1b-beneficio-pausas", "📵 Hacer pausas");
        cambiarTexto("m1b-beneficio-familia", "👨‍👩‍👧 Tiempo sin pantallas");

        cambiarTexto(
            "resultado-beneficio",
            "Selecciona un hábito para descubrir su beneficio."
        );

        cambiarTexto("m1b-boton-anterior", "← Módulo 1");
        cambiarTexto("m1b-boton-siguiente", "Módulo 2 →");
    }
}




function cambiarIdiomaModulo2Rutina(idioma) {

    // responderRutina() utiliza el idioma del módulo 2
    idiomaModulo2 = idioma;

    // Se reinicia el quiz para que el resultado aparezca en el idioma elegido
    respuestasRutina = {};

    document.querySelectorAll(".quiz-pregunta button").forEach(function(boton) {
        boton.classList.remove("seleccionado");
    });

    if (idioma === "en") {

        cambiarTexto("m2r-menu-inicio", "Home");
        cambiarTexto("m2r-menu-modulos", "Modules ▾");
        cambiarTexto("m2r-menu-creditos", "Credits");

        traducirSubmenu("m2r-submenu-modulo", "en");

        cambiarTexto("m2r-etiqueta", "MODULE 2");

        cambiarTexto(
            "m2r-titulo",
            "Healthy digital routine"
        );

        cambiarTexto(
            "m2r-descripcion",
            "A healthy digital routine helps you better organize your study, rest and entertainment time, avoiding unnecessary distractions."
        );

        cambiarTexto(
            "m2r-quiz-titulo",
            "🗓️ Quiz: Build a healthy digital routine"
        );

        cambiarTexto(
            "m2r-quiz-descripcion",
            "Answer the following questions to find out how healthy your daily technology routine is."
        );

        cambiarTexto(
            "m2r-pregunta1",
            "1. What do you do when you need to study?"
        );

        cambiarTexto("m2r-p1-correcta", "📚 I remove distractions and concentrate");
        cambiarTexto("m2r-p1-incorrecta", "📱 I constantly check social media");

        cambiarTexto(
            "m2r-pregunta2",
            "2. What is recommended after spending a lot of time in front of a screen?"
        );

        cambiarTexto("m2r-p2-correcta", "👀 Take a break and rest");
        cambiarTexto("m2r-p2-incorrecta", "💻 Continue without taking a break");

        cambiarTexto(
            "m2r-pregunta3",
            "3. How can you maintain a balanced digital routine?"
        );

        cambiarTexto("m2r-p3-correcta", "⚖️ Combine technology, study, rest and other activities");
        cambiarTexto("m2r-p3-incorrecta", "📱 Use devices throughout the entire day");

        cambiarTexto(
            "resultado-rutina",
            "Answer all three questions to see your result."
        );

        cambiarTexto("m2r-boton-anterior", "← Module 2");
        cambiarTexto("m2r-boton-siguiente", "Module 3 →");

    }

    else {

        cambiarTexto("m2r-menu-inicio", "Inicio");
        cambiarTexto("m2r-menu-modulos", "Módulos ▾");
        cambiarTexto("m2r-menu-creditos", "Créditos");

        traducirSubmenu("m2r-submenu-modulo", "es");

        cambiarTexto("m2r-etiqueta", "MÓDULO 2");

        cambiarTexto(
            "m2r-titulo",
            "Rutina digital saludable"
        );

        cambiarTexto(
            "m2r-descripcion",
            "Una rutina digital saludable permite organizar mejor el tiempo de estudio, descanso y entretenimiento, evitando distracciones innecesarias."
        );

        cambiarTexto(
            "m2r-quiz-titulo",
            "🗓️ Quiz: construye una rutina digital saludable"
        );

        cambiarTexto(
            "m2r-quiz-descripcion",
            "Responde las siguientes preguntas para conocer qué tan saludable es tu rutina diaria con la tecnología."
        );

        cambiarTexto(
            "m2r-pregunta1",
            "1. ¿Qué haces cuando necesitas estudiar?"
        );

        cambiarTexto("m2r-p1-correcta", "📚 Alejo las distracciones y me concentro");
        cambiarTexto("m2r-p1-incorrecta", "📱 Reviso constantemente las redes sociales");

        cambiarTexto(
            "m2r-pregunta2",
            "2. ¿Qué es recomendable hacer después de pasar bastante tiempo frente a una pantalla?"
        );

        cambiarTexto("m2r-p2-correcta", "👀 Hacer una pausa y descansar");
        cambiarTexto("m2r-p2-incorrecta", "💻 Continuar sin hacer ninguna pausa");

        cambiarTexto(
            "m2r-pregunta3",
            "3. ¿Cómo puedes mantener una rutina digital equilibrada?"
        );

        cambiarTexto("m2r-p3-correcta", "⚖️ Combinar tecnología, estudio, descanso y otras actividades");
        cambiarTexto("m2r-p3-incorrecta", "📱 Utilizar dispositivos durante todo el día");

        cambiarTexto(
            "resultado-rutina",
            "Responde las tres preguntas para conocer tu resultado."
        );

        cambiarTexto("m2r-boton-anterior", "← Módulo 2");
        cambiarTexto("m2r-boton-siguiente", "Módulo 3 →");
    }
}




function mostrarCronograma(momento) {

    const informacion =
        document.getElementById("informacion-cronograma");

    if (!informacion) {
        return;
    }

    if (idiomaModulo3 === "en") {

        if (momento === "mañana") {

            informacion.innerHTML =
                "<strong>🌅 Morning:</strong><br>" +
                "Use the first hours of the day for activities that require more concentration, such as studying or doing homework. Avoid checking social media as soon as you wake up.";

        }

        else if (momento === "tarde") {

            informacion.innerHTML =
                "<strong>☀️ Afternoon:</strong><br>" +
                "Combine study time with short breaks. You can also make time for physical activity or other activities away from screens.";

        }

        else if (momento === "noche") {

            informacion.innerHTML =
                "<strong>🌙 Night:</strong><br>" +
                "Reduce screen use before going to sleep. Reading, talking with your family or preparing for the next day helps you rest better.";
        }

    }

    else {

        if (momento === "mañana") {

            informacion.innerHTML =
                "<strong>🌅 Mañana:</strong><br>" +
                "Aprovecha las primeras horas del día para las actividades que requieren más concentración, como estudiar o hacer tareas. Evita revisar las redes sociales apenas te despiertas.";

        }

        else if (momento === "tarde") {

            informacion.innerHTML =
                "<strong>☀️ Tarde:</strong><br>" +
                "Combina los momentos de estudio con pausas cortas. También puedes reservar tiempo para la actividad física u otras actividades lejos de las pantallas.";

        }

        else if (momento === "noche") {

            informacion.innerHTML =
                "<strong>🌙 Noche:</strong><br>" +
                "Disminuye el uso de pantallas antes de dormir. Leer, conversar con tu familia o preparar el día siguiente te ayuda a descansar mejor.";
        }
    }
}




// Ejemplos de la vida cotidiana para organizar el tiempo que pasamos en el celular
function mostrarEjemploTiempo(ejemplo) {

    const informacion =
        document.getElementById("informacion-ejemplo-tiempo");

    if (!informacion) {
        return;
    }

    if (idiomaModulo3 === "en") {

        if (ejemplo === "limite") {

            informacion.innerHTML =
                "<strong>⏳ Example: limits on your apps</strong><br>" +
                "Laura realized she spent more than 3 hours a day on social media. She set a daily limit of 1 hour in her phone settings (Digital Wellbeing on Android or Screen Time on iPhone). When the time runs out, her phone warns her and she can go back to her activities.<br>" +
                "<em>Try it:</em> choose the app you use the most and set a daily limit for it.";

        }

        else if (ejemplo === "dormir") {

            informacion.innerHTML =
                "<strong>🛏️ Example: the phone sleeps outside the bedroom</strong><br>" +
                "Andrés used to watch videos in bed until late and woke up tired. Now he leaves his phone charging in the living room 30 minutes before sleeping and uses an alarm clock to wake up.<br>" +
                "<em>Try it:</em> choose a time to put your phone away every night.";

        }

        else if (ejemplo === "estudio") {

            informacion.innerHTML =
                "<strong>🔕 Example: \"Do not disturb\" while studying</strong><br>" +
                "Before starting her homework, Camila turns on \"Do not disturb\" mode and puts her phone face down. She answers her messages only during her Pomodoro breaks.<br>" +
                "<em>Try it:</em> in your next study session, silence your notifications for 25 minutes.";

        }

        else if (ejemplo === "revisar") {

            informacion.innerHTML =
                "<strong>📊 Example: check your weekly screen time</strong><br>" +
                "Every Sunday, Mateo checks the weekly screen time report on his phone. He saw that he used games a lot at night, so he decided to play only after finishing his homework.<br>" +
                "<em>Try it:</em> check your report and pick one habit you want to improve this week.";
        }

    }

    else {

        if (ejemplo === "limite") {

            informacion.innerHTML =
                "<strong>⏳ Ejemplo: límites en tus aplicaciones</strong><br>" +
                "Laura se dio cuenta de que pasaba más de 3 horas al día en redes sociales. Configuró un límite diario de 1 hora desde los ajustes de su celular (Bienestar digital en Android o Tiempo en pantalla en iPhone). Cuando se cumple el tiempo, el celular le avisa y puede volver a sus actividades.<br>" +
                "<em>Ponlo en práctica:</em> elige la aplicación que más usas y ponle un límite diario.";

        }

        else if (ejemplo === "dormir") {

            informacion.innerHTML =
                "<strong>🛏️ Ejemplo: el celular duerme fuera del cuarto</strong><br>" +
                "Andrés veía videos en la cama hasta tarde y se levantaba cansado. Ahora deja el celular cargando en la sala 30 minutos antes de dormir y usa un despertador para levantarse.<br>" +
                "<em>Ponlo en práctica:</em> define una hora para guardar el celular todas las noches.";

        }

        else if (ejemplo === "estudio") {

            informacion.innerHTML =
                "<strong>🔕 Ejemplo: modo \"No molestar\" al estudiar</strong><br>" +
                "Antes de hacer sus tareas, Camila activa el modo \"No molestar\" y pone el celular boca abajo. Responde sus mensajes solo durante los descansos del Pomodoro.<br>" +
                "<em>Ponlo en práctica:</em> en tu próxima sesión de estudio, silencia las notificaciones durante 25 minutos.";

        }

        else if (ejemplo === "revisar") {

            informacion.innerHTML =
                "<strong>📊 Ejemplo: revisa tu tiempo de pantalla semanal</strong><br>" +
                "Cada domingo, Mateo revisa en su celular el reporte semanal de tiempo de pantalla. Vio que usaba mucho los juegos en la noche, así que decidió jugar solo después de terminar sus tareas.<br>" +
                "<em>Ponlo en práctica:</em> revisa tu reporte y elige un hábito que quieras mejorar esta semana.";
        }
    }
}




function cambiarIdiomaModulo3(idioma) {

    idiomaModulo3 = idioma;

    if (idioma === "en") {

        cambiarTexto("m3-menu-inicio", "Home");
        cambiarTexto("m3-menu-modulos", "Modules ▾");
        cambiarTexto("m3-menu-creditos", "Credits");

        traducirSubmenu("m3-submenu-modulo", "en");

        cambiarTexto("m3-etiqueta", "MODULE 3");

        cambiarTexto(
            "m3-titulo",
            "Time management"
        );

        cambiarTexto(
            "m3-descripcion",
            "Learning to organize our time allows us to make better use of our digital, academic and personal activities. In this module you will learn some strategies to organize your activities and keep moments of rest."
        );

        cambiarTexto(
            "m3-cronograma-titulo",
            "🕐 Activity schedule"
        );

        cambiarTexto(
            "m3-cronograma-descripcion",
            "Select a time of day to learn about an activity you can do at that time."
        );

        cambiarTexto("m3-manana", "🌅 Morning");
        cambiarTexto("m3-tarde", "☀️ Afternoon");
        cambiarTexto("m3-noche", "🌙 Night");

        cambiarTexto(
            "informacion-cronograma",
            "Select a time of day to begin."
        );

        cambiarTexto(
            "m3-ejemplos-titulo",
            "📱 Everyday examples: your time on the phone"
        );

        cambiarTexto(
            "m3-ejemplos-instruccion",
            "Click on each card to see a real-life example and how to put it into practice."
        );

        cambiarTexto("m3-ejemplo-limite", "App limits");
        cambiarTexto("m3-ejemplo-limite-desc", "Set a maximum time for the apps you use the most.");

        cambiarTexto("m3-ejemplo-dormir", "Rest without the phone");
        cambiarTexto("m3-ejemplo-dormir-desc", "Put your phone away before going to sleep.");

        cambiarTexto("m3-ejemplo-estudio", "Study without interruptions");
        cambiarTexto("m3-ejemplo-estudio-desc", "Silence notifications while you do your homework.");

        cambiarTexto("m3-ejemplo-revisar", "Check your screen time");
        cambiarTexto("m3-ejemplo-revisar-desc", "Find out how much time you spend on each app.");

        cambiarTexto(
            "informacion-ejemplo-tiempo",
            "Click on a card to see the example."
        );

        cambiarTexto("m3-boton-anterior", "← Module 2");
        cambiarTexto("m3-boton-pomodoro", "Pomodoro →");

    }

    else {

        cambiarTexto("m3-menu-inicio", "Inicio");
        cambiarTexto("m3-menu-modulos", "Módulos ▾");
        cambiarTexto("m3-menu-creditos", "Créditos");

        traducirSubmenu("m3-submenu-modulo", "es");

        cambiarTexto("m3-etiqueta", "MÓDULO 3");

        cambiarTexto(
            "m3-titulo",
            "Gestión del tiempo"
        );

        cambiarTexto(
            "m3-descripcion",
            "Aprender a organizar nuestro tiempo nos permite aprovechar mejor nuestras actividades digitales, académicas y personales. En este módulo conocerás algunas estrategias para organizar tus actividades y mantener momentos de descanso."
        );

        cambiarTexto(
            "m3-cronograma-titulo",
            "🕐 Cronograma de actividades"
        );

        cambiarTexto(
            "m3-cronograma-descripcion",
            "Selecciona un momento del día para conocer una actividad que puedes realizar en ese horario."
        );

        cambiarTexto("m3-manana", "🌅 Mañana");
        cambiarTexto("m3-tarde", "☀️ Tarde");
        cambiarTexto("m3-noche", "🌙 Noche");

        cambiarTexto(
            "informacion-cronograma",
            "Selecciona un momento del día para comenzar."
        );

        cambiarTexto(
            "m3-ejemplos-titulo",
            "📱 Ejemplos de la vida cotidiana: tu tiempo en el celular"
        );

        cambiarTexto(
            "m3-ejemplos-instruccion",
            "Haz clic en cada tarjeta para ver un ejemplo real y cómo ponerlo en práctica."
        );

        cambiarTexto("m3-ejemplo-limite", "Límites en las apps");
        cambiarTexto("m3-ejemplo-limite-desc", "Define un tiempo máximo para las aplicaciones que más usas.");

        cambiarTexto("m3-ejemplo-dormir", "Descansar sin el celular");
        cambiarTexto("m3-ejemplo-dormir-desc", "Guarda el celular antes de irte a dormir.");

        cambiarTexto("m3-ejemplo-estudio", "Estudiar sin interrupciones");
        cambiarTexto("m3-ejemplo-estudio-desc", "Silencia las notificaciones mientras haces tus tareas.");

        cambiarTexto("m3-ejemplo-revisar", "Revisar tu tiempo de pantalla");
        cambiarTexto("m3-ejemplo-revisar-desc", "Descubre cuánto tiempo pasas en cada aplicación.");

        cambiarTexto(
            "informacion-ejemplo-tiempo",
            "Haz clic en una tarjeta para ver el ejemplo."
        );

        cambiarTexto("m3-boton-anterior", "← Módulo 2");
        cambiarTexto("m3-boton-pomodoro", "Pomodoro →");
    }
}




function mostrarPomodoro(paso) {

    const informacion =
        document.getElementById("informacion-pomodoro");

    if (!informacion) {
        return;
    }

    if (idiomaModulo3Pomodoro === "en") {

        if (paso === "concentracion") {

            informacion.innerHTML =
                "<strong>📚 Focus time:</strong><br>" +
                "Work or study for 25 minutes on a single activity. During this time avoid checking your phone or social media.";

        }

        else if (paso === "descanso") {

            informacion.innerHTML =
                "<strong>☕ Break time:</strong><br>" +
                "Take a 5-minute break. Stand up, stretch, drink water or rest your eyes away from the screen.";

        }

        else if (paso === "repetir") {

            informacion.innerHTML =
                "<strong>🔄 Repeat the cycle:</strong><br>" +
                "Repeat the cycle. After completing four periods of concentration, take a longer break of 15 to 30 minutes.";
        }

    }

    else {

        if (paso === "concentracion") {

            informacion.innerHTML =
                "<strong>📚 Tiempo de concentración:</strong><br>" +
                "Trabaja o estudia durante 25 minutos en una sola actividad. Durante este tiempo evita revisar el celular o las redes sociales.";

        }

        else if (paso === "descanso") {

            informacion.innerHTML =
                "<strong>☕ Tiempo de descanso:</strong><br>" +
                "Toma una pausa de 5 minutos. Levántate, estírate, toma agua o descansa la vista lejos de la pantalla.";

        }

        else if (paso === "repetir") {

            informacion.innerHTML =
                "<strong>🔄 Repetir el ciclo:</strong><br>" +
                "Repite el ciclo. Después de completar cuatro periodos de concentración, toma un descanso más largo de 15 a 30 minutos.";
        }
    }
}




function cambiarIdiomaModulo3Pomodoro(idioma) {

    idiomaModulo3Pomodoro = idioma;

    if (idioma === "en") {

        cambiarTexto("m3p-menu-inicio", "Home");
        cambiarTexto("m3p-menu-modulos", "Modules ▾");
        cambiarTexto("m3p-menu-creditos", "Credits");

        traducirSubmenu("m3p-submenu-modulo", "en");

        cambiarTexto("m3p-etiqueta", "MODULE 3");

        cambiarTexto(
            "m3p-titulo",
            "Pomodoro Technique"
        );

        cambiarTexto(
            "m3p-descripcion",
            "The Pomodoro technique consists of organizing work or study time into periods of concentration and breaks."
        );

        cambiarTexto(
            "m3p-pomodoro-titulo",
            "🍅 Pomodoro Technique"
        );

        cambiarTexto(
            "m3p-pomodoro-descripcion",
            "Learn the basic steps of this technique to better organize your study or work periods."
        );

        cambiarTexto("m3p-concentracion", "Focus time");
        cambiarTexto("m3p-concentracion-desc", "Keep your attention on a single activity.");

        cambiarTexto("m3p-descanso", "Break time");
        cambiarTexto("m3p-descanso-desc", "Take a break to recover your energy.");

        cambiarTexto("m3p-repetir", "Repeat the cycle");
        cambiarTexto("m3p-repetir-desc", "After the break you can start again.");

        cambiarTexto(
            "informacion-pomodoro",
            "Click on a card to learn more."
        );

        cambiarTexto("m3p-boton-anterior", "← Module 3");
        cambiarTexto("m3p-boton-siguiente", "Module 4 →");

    }

    else {

        cambiarTexto("m3p-menu-inicio", "Inicio");
        cambiarTexto("m3p-menu-modulos", "Módulos ▾");
        cambiarTexto("m3p-menu-creditos", "Créditos");

        traducirSubmenu("m3p-submenu-modulo", "es");

        cambiarTexto("m3p-etiqueta", "MÓDULO 3");

        cambiarTexto(
            "m3p-titulo",
            "Técnica Pomodoro"
        );

        cambiarTexto(
            "m3p-descripcion",
            "La técnica Pomodoro consiste en organizar el tiempo de trabajo o estudio en periodos de concentración y descansos."
        );

        cambiarTexto(
            "m3p-pomodoro-titulo",
            "🍅 Técnica Pomodoro"
        );

        cambiarTexto(
            "m3p-pomodoro-descripcion",
            "Conoce los pasos básicos de esta técnica para organizar mejor tus periodos de estudio o trabajo."
        );

        cambiarTexto("m3p-concentracion", "Tiempo de concentración");
        cambiarTexto("m3p-concentracion-desc", "Mantén tu atención en una sola actividad.");

        cambiarTexto("m3p-descanso", "Tiempo de descanso");
        cambiarTexto("m3p-descanso-desc", "Haz una pausa para recuperar energía.");

        cambiarTexto("m3p-repetir", "Repetir el ciclo");
        cambiarTexto("m3p-repetir-desc", "Después del descanso puedes comenzar nuevamente.");

        cambiarTexto(
            "informacion-pomodoro",
            "Haz clic en una tarjeta para conocer más."
        );

        cambiarTexto("m3p-boton-anterior", "← Módulo 3");
        cambiarTexto("m3p-boton-siguiente", "Módulo 4 →");
    }
}




let respuestasSeguridad = {};

function responderSeguridad(pregunta, respuesta, boton) {

    respuestasSeguridad[pregunta] = respuesta;

    const botones =
        boton.parentElement.querySelectorAll("button");

    botones.forEach(function(botonActual) {
        botonActual.classList.remove("seleccionado");
    });

    boton.classList.add("seleccionado");

    if (
        respuestasSeguridad[1] &&
        respuestasSeguridad[2] &&
        respuestasSeguridad[3]
    ) {

        let puntos = 0;

        if (respuestasSeguridad[1] === "verdadero") puntos++;
        if (respuestasSeguridad[2] === "falso") puntos++;
        if (respuestasSeguridad[3] === "verdadero") puntos++;

        const resultado =
            document.getElementById("resultado-seguridad");

        if (!resultado) {
            return;
        }

        if (idiomaModulo4 === "en") {

            if (puntos === 3) {

                resultado.innerHTML =
                    "<strong>Excellent! 3/3</strong><br>" +
                    "You know how to protect your information on the internet. Keep applying these security measures.";

            }

            else if (puntos === 2) {

                resultado.innerHTML =
                    "<strong>You're doing well! 2/3</strong><br>" +
                    "You know several security measures. Remember: never share your passwords and always check links before opening them.";

            }

            else {

                resultado.innerHTML =
                    "<strong>Result: " + puntos + "/3</strong><br>" +
                    "Review the recommendations again: use different passwords, do not share them with anyone and check links before opening them.";
            }

        }

        else {

            if (puntos === 3) {

                resultado.innerHTML =
                    "<strong>¡Excelente! 3/3</strong><br>" +
                    "Sabes cómo proteger tu información en internet. Continúa aplicando estas medidas de seguridad.";

            }

            else if (puntos === 2) {

                resultado.innerHTML =
                    "<strong>¡Vas bien! 2/3</strong><br>" +
                    "Conoces varias medidas de seguridad. Recuerda: nunca compartas tus contraseñas y revisa siempre los enlaces antes de abrirlos.";

            }

            else {

                resultado.innerHTML =
                    "<strong>Resultado: " + puntos + "/3</strong><br>" +
                    "Repasa nuevamente las recomendaciones: utiliza contraseñas diferentes, no las compartas con nadie y revisa los enlaces antes de abrirlos.";
            }
        }
    }
}




function cambiarIdiomaModulo4(idioma) {

    idiomaModulo4 = idioma;

    // Se reinicia el quiz para que el resultado aparezca en el idioma elegido
    respuestasSeguridad = {};

    document.querySelectorAll(".quiz-pregunta button").forEach(function(boton) {
        boton.classList.remove("seleccionado");
    });

    if (idioma === "en") {

        cambiarTexto("m4-menu-inicio", "Home");
        cambiarTexto("m4-menu-modulos", "Modules ▾");
        cambiarTexto("m4-menu-creditos", "Credits");

        traducirSubmenu("m4-submenu-modulo", "en");

        cambiarTexto("m4-etiqueta", "MODULE 4");

        cambiarTexto(
            "m4-titulo",
            "Cybersecurity"
        );

        cambiarTexto(
            "m4-descripcion",
            "Cybersecurity helps us use technology more safely. In this module you will learn some ways to protect your information and recognize situations that may represent a risk when using the internet."
        );

        cambiarTexto(
            "m4-quiz-titulo",
            "🛡️ True or False"
        );

        cambiarTexto(
            "m4-quiz-descripcion",
            "Read each statement and select whether it is true or false."
        );

        cambiarTexto(
            "m4-pregunta1",
            "1. It is recommended to use different passwords for our important accounts."
        );

        cambiarTexto(
            "m4-pregunta2",
            "2. We can share our password with anyone who asks for it on the internet."
        );

        cambiarTexto(
            "m4-pregunta3",
            "3. It is important to check links before opening them."
        );

        for (let i = 1; i <= 3; i++) {
            cambiarTexto("m4-p" + i + "-verdadero", "✅ True");
            cambiarTexto("m4-p" + i + "-falso", "❌ False");
        }

        cambiarTexto(
            "resultado-seguridad",
            "Answer all three statements to see your result."
        );

        cambiarTexto("m4-boton-anterior", "← Module 3");
        cambiarTexto("m4-boton-datos", "Data protection →");

    }

    else {

        cambiarTexto("m4-menu-inicio", "Inicio");
        cambiarTexto("m4-menu-modulos", "Módulos ▾");
        cambiarTexto("m4-menu-creditos", "Créditos");

        traducirSubmenu("m4-submenu-modulo", "es");

        cambiarTexto("m4-etiqueta", "MÓDULO 4");

        cambiarTexto(
            "m4-titulo",
            "Ciberseguridad"
        );

        cambiarTexto(
            "m4-descripcion",
            "La ciberseguridad nos ayuda a utilizar la tecnología de manera más segura. En este módulo aprenderás algunas formas de proteger tu información y reconocer situaciones que pueden representar un riesgo al utilizar internet."
        );

        cambiarTexto(
            "m4-quiz-titulo",
            "🛡️ Verdadero o Falso"
        );

        cambiarTexto(
            "m4-quiz-descripcion",
            "Lee cada afirmación y selecciona si es verdadera o falsa."
        );

        cambiarTexto(
            "m4-pregunta1",
            "1. Es recomendable utilizar contraseñas diferentes para nuestras cuentas importantes."
        );

        cambiarTexto(
            "m4-pregunta2",
            "2. Podemos compartir nuestra contraseña con cualquier persona que nos la solicite por internet."
        );

        cambiarTexto(
            "m4-pregunta3",
            "3. Es importante revisar los enlaces antes de abrirlos."
        );

        for (let i = 1; i <= 3; i++) {
            cambiarTexto("m4-p" + i + "-verdadero", "✅ Verdadero");
            cambiarTexto("m4-p" + i + "-falso", "❌ Falso");
        }

        cambiarTexto(
            "resultado-seguridad",
            "Responde las tres afirmaciones para conocer tu resultado."
        );

        cambiarTexto("m4-boton-anterior", "← Módulo 3");
        cambiarTexto("m4-boton-datos", "Protección de datos →");
    }
}




let idiomaModulo4Datos = "es";

function mostrarProteccion(tipo) {

    const informacion =
        document.getElementById("informacion-proteccion");

    if (!informacion) {
        return;
    }

    if (idiomaModulo4Datos === "en") {

        if (tipo === "contrasena") {

            informacion.innerHTML =
                "<strong>🔑 Secure passwords:</strong><br>" +
                "Use long passwords that combine uppercase and lowercase letters, numbers and symbols. Do not use your name or date of birth, and use a different password for each important account.";

        }

        else if (tipo === "privacidad") {

            informacion.innerHTML =
                "<strong>👤 Privacy:</strong><br>" +
                "Check the privacy settings of your social networks and think before sharing personal information such as your address, phone number or location.";

        }

        else if (tipo === "enlaces") {

            informacion.innerHTML =
                "<strong>🔗 Safe links:</strong><br>" +
                "Before opening a link, check who sent it and where it leads. Be wary of messages that promise prizes or ask you to act urgently.";
        }

    }

    else {

        if (tipo === "contrasena") {

            informacion.innerHTML =
                "<strong>🔑 Contraseñas seguras:</strong><br>" +
                "Utiliza contraseñas largas que combinen letras mayúsculas, minúsculas, números y símbolos. No uses tu nombre ni tu fecha de nacimiento, y usa una contraseña diferente para cada cuenta importante.";

        }

        else if (tipo === "privacidad") {

            informacion.innerHTML =
                "<strong>👤 Privacidad:</strong><br>" +
                "Revisa la configuración de privacidad de tus redes sociales y piensa antes de compartir información personal como tu dirección, tu número de teléfono o tu ubicación.";

        }

        else if (tipo === "enlaces") {

            informacion.innerHTML =
                "<strong>🔗 Enlaces seguros:</strong><br>" +
                "Antes de abrir un enlace, revisa quién lo envió y a dónde dirige. Desconfía de los mensajes que prometen premios o que te piden actuar con urgencia.";
        }
    }
}




// Situaciones de la vida cotidiana para cuidar los datos personales
function mostrarSituacion(situacion) {

    const informacion =
        document.getElementById("informacion-situacion");

    if (!informacion) {
        return;
    }

    if (idiomaModulo4Datos === "en") {

        if (situacion === "codigo") {

            informacion.innerHTML =
                "<strong>💬 Someone asks you for a code on WhatsApp</strong><br>" +
                "A \"friend\" writes to you: \"I sent you a code by mistake, can you send it to me?\". That code is used to take control of your account.<br>" +
                "<em>What to do:</em> never share verification codes. Call your friend to confirm and turn on two-step verification in WhatsApp.";

        }

        else if (situacion === "premio") {

            informacion.innerHTML =
                "<strong>🎁 \"You won a prize!\"</strong><br>" +
                "You receive a message saying you won a phone and must enter your details in a link to claim it. This is a scam known as phishing.<br>" +
                "<em>What to do:</em> do not open the link or enter your details. Delete the message and warn your family.";

        }

        else if (situacion === "wifi") {

            informacion.innerHTML =
                "<strong>📶 Public Wi-Fi</strong><br>" +
                "You are at a shopping mall or library and connect to the free Wi-Fi. Other people on that network could see what you do.<br>" +
                "<em>What to do:</em> on open networks, avoid entering your bank or typing passwords. Use your mobile data for that.";

        }

        else if (situacion === "foto") {

            informacion.innerHTML =
                "<strong>📸 Before posting a photo</strong><br>" +
                "You want to post a photo in front of your house or wearing your school uniform. These details reveal where you live or study.<br>" +
                "<em>What to do:</em> check that your address, documents or real-time location are not visible, and share it only with people you know.";
        }

    }

    else {

        if (situacion === "codigo") {

            informacion.innerHTML =
                "<strong>💬 Te piden un código por WhatsApp</strong><br>" +
                "Un \"amigo\" te escribe: \"Te envié un código por error, ¿me lo pasas?\". Ese código sirve para quedarse con tu cuenta.<br>" +
                "<em>Qué hacer:</em> nunca compartas códigos de verificación. Llama a tu amigo para confirmar y activa la verificación en dos pasos de WhatsApp.";

        }

        else if (situacion === "premio") {

            informacion.innerHTML =
                "<strong>🎁 \"¡Ganaste un premio!\"</strong><br>" +
                "Te llega un mensaje que dice que ganaste un celular y que debes ingresar tus datos en un enlace para reclamarlo. Es un engaño conocido como phishing.<br>" +
                "<em>Qué hacer:</em> no abras el enlace ni escribas tus datos. Elimina el mensaje y avisa a tu familia.";

        }

        else if (situacion === "wifi") {

            informacion.innerHTML =
                "<strong>📶 Wi-Fi público</strong><br>" +
                "Estás en un centro comercial o en la biblioteca y te conectas al Wi-Fi gratuito. Otras personas en esa red podrían ver lo que haces.<br>" +
                "<em>Qué hacer:</em> en redes abiertas evita entrar a tu banco o escribir contraseñas. Para eso usa tus datos móviles.";

        }

        else if (situacion === "foto") {

            informacion.innerHTML =
                "<strong>📸 Antes de publicar una foto</strong><br>" +
                "Quieres publicar una foto frente a tu casa o con el uniforme del colegio. Esos detalles muestran dónde vives o estudias.<br>" +
                "<em>Qué hacer:</em> revisa que no se vean tu dirección, documentos ni tu ubicación en tiempo real, y compártela solo con personas que conoces.";
        }
    }
}




function cambiarIdiomaModulo4Datos(idioma) {

    idiomaModulo4Datos = idioma;

    if (idioma === "en") {

        cambiarTexto("m4d-menu-inicio", "Home");
        cambiarTexto("m4d-menu-modulos", "Modules ▾");
        cambiarTexto("m4d-menu-creditos", "Credits");

        traducirSubmenu("m4d-submenu-modulo", "en");

        cambiarTexto("m4d-etiqueta", "MODULE 4");

        cambiarTexto(
            "m4d-titulo",
            "Data protection"
        );

        cambiarTexto(
            "m4d-descripcion",
            "Protecting our personal data is important when we use the internet and different digital services. We can take some simple measures to take care of our information."
        );

        cambiarTexto(
            "m4d-proteccion-titulo",
            "🔐 Data protection"
        );

        cambiarTexto(
            "m4d-proteccion-instruccion",
            "Click on a card to learn a way to protect your personal data."
        );

        cambiarTexto("m4d-contrasena", "Secure passwords");
        cambiarTexto("m4d-contrasena-desc", "Protect your accounts by using secure passwords.");

        cambiarTexto("m4d-privacidad", "Privacy");
        cambiarTexto("m4d-privacidad-desc", "Take care of the personal information you share.");

        cambiarTexto("m4d-enlaces", "Safe links");
        cambiarTexto("m4d-enlaces-desc", "Check links before opening them.");

        cambiarTexto(
            "informacion-proteccion",
            "Click on a card to learn more."
        );

        cambiarTexto(
            "m4d-situaciones-titulo",
            "🏠 Everyday situations: what would you do?"
        );

        cambiarTexto(
            "m4d-situaciones-instruccion",
            "Click on each situation to find out how to protect your personal data in daily life."
        );

        cambiarTexto("m4d-situacion-codigo", "A code on WhatsApp");
        cambiarTexto("m4d-situacion-codigo-desc", "Someone asks you for the code that arrived by SMS.");

        cambiarTexto("m4d-situacion-premio", "\"You won a prize!\"");
        cambiarTexto("m4d-situacion-premio-desc", "A message asks for your details to claim a prize.");

        cambiarTexto("m4d-situacion-wifi", "Public Wi-Fi");
        cambiarTexto("m4d-situacion-wifi-desc", "You connect to a free network at the mall.");

        cambiarTexto("m4d-situacion-foto", "Posting a photo");
        cambiarTexto("m4d-situacion-foto-desc", "Your photo shows where you live or study.");

        cambiarTexto(
            "informacion-situacion",
            "Select a situation to see what you can do."
        );

        cambiarTexto("m4d-boton-anterior", "← Module 4");
        cambiarTexto("m4d-boton-siguiente", "Module 5 →");

    }

    else {

        cambiarTexto("m4d-menu-inicio", "Inicio");
        cambiarTexto("m4d-menu-modulos", "Módulos ▾");
        cambiarTexto("m4d-menu-creditos", "Créditos");

        traducirSubmenu("m4d-submenu-modulo", "es");

        cambiarTexto("m4d-etiqueta", "MÓDULO 4");

        cambiarTexto(
            "m4d-titulo",
            "Protección de datos"
        );

        cambiarTexto(
            "m4d-descripcion",
            "Proteger nuestros datos personales es importante cuando utilizamos internet y diferentes servicios digitales. Podemos tomar algunas medidas sencillas para cuidar nuestra información."
        );

        cambiarTexto(
            "m4d-proteccion-titulo",
            "🔐 Protección de datos"
        );

        cambiarTexto(
            "m4d-proteccion-instruccion",
            "Haz clic en una tarjeta para conocer una forma de proteger tus datos personales."
        );

        cambiarTexto("m4d-contrasena", "Contraseñas seguras");
        cambiarTexto("m4d-contrasena-desc", "Protege tus cuentas utilizando contraseñas seguras.");

        cambiarTexto("m4d-privacidad", "Privacidad");
        cambiarTexto("m4d-privacidad-desc", "Cuida la información personal que compartes.");

        cambiarTexto("m4d-enlaces", "Enlaces seguros");
        cambiarTexto("m4d-enlaces-desc", "Revisa los enlaces antes de ingresar a ellos.");

        cambiarTexto(
            "informacion-proteccion",
            "Haz clic en una tarjeta para conocer más."
        );

        cambiarTexto(
            "m4d-situaciones-titulo",
            "🏠 Situaciones de la vida cotidiana: ¿qué harías?"
        );

        cambiarTexto(
            "m4d-situaciones-instruccion",
            "Haz clic en cada situación para descubrir cómo cuidar tus datos personales en el día a día."
        );

        cambiarTexto("m4d-situacion-codigo", "Un código por WhatsApp");
        cambiarTexto("m4d-situacion-codigo-desc", "Alguien te pide el código que te llegó por SMS.");

        cambiarTexto("m4d-situacion-premio", "\"¡Ganaste un premio!\"");
        cambiarTexto("m4d-situacion-premio-desc", "Un mensaje te pide tus datos para reclamar un premio.");

        cambiarTexto("m4d-situacion-wifi", "Wi-Fi público");
        cambiarTexto("m4d-situacion-wifi-desc", "Te conectas a una red gratuita en el centro comercial.");

        cambiarTexto("m4d-situacion-foto", "Publicar una foto");
        cambiarTexto("m4d-situacion-foto-desc", "Tu foto muestra dónde vives o estudias.");

        cambiarTexto(
            "informacion-situacion",
            "Selecciona una situación para conocer qué puedes hacer."
        );

        cambiarTexto("m4d-boton-anterior", "← Módulo 4");
        cambiarTexto("m4d-boton-siguiente", "Módulo 5 →");
    }
}




function cambiarIdiomaModulo5(idioma) {

    idiomaModulo5 = idioma;

    if (idioma === "en") {

        cambiarTexto("m5-menu-inicio", "Home");
        cambiarTexto("m5-menu-modulos", "Modules ▾");
        cambiarTexto("m5-menu-creditos", "Credits");

        traducirSubmenu("m5-submenu-modulo", "en");

        cambiarTexto("m5-etiqueta", "MODULE 5");

        cambiarTexto(
            "m5-titulo",
            "Final evaluation"
        );

        cambiarTexto(
            "m5-descripcion",
            "Test what you learned during the Digital Balance modules. Answer the following questions and find out how many points you get."
        );

        cambiarTexto("m5-boton-anterior", "← Module 4");
        cambiarTexto("m5-boton-evaluacion", "Final evaluation →");

    }

    else {

        cambiarTexto("m5-menu-inicio", "Inicio");
        cambiarTexto("m5-menu-modulos", "Módulos ▾");
        cambiarTexto("m5-menu-creditos", "Créditos");

        traducirSubmenu("m5-submenu-modulo", "es");

        cambiarTexto("m5-etiqueta", "MÓDULO 5");

        cambiarTexto(
            "m5-titulo",
            "Evaluación final"
        );

        cambiarTexto(
            "m5-descripcion",
            "Pon a prueba lo que aprendiste durante los módulos de Digital Balance. Responde las siguientes preguntas y descubre cuántos puntos obtienes."
        );

        cambiarTexto("m5-boton-anterior", "← Módulo 4");
        cambiarTexto("m5-boton-evaluacion", "Evaluación final →");
    }
}




let respuestasFinal = {};

function responderFinal(pregunta, respuesta, boton) {

    respuestasFinal[pregunta] = respuesta;

    const botones =
        boton.parentElement.querySelectorAll("button");

    botones.forEach(function(botonActual) {
        botonActual.classList.remove("seleccionado");
    });

    boton.classList.add("seleccionado");

    for (let i = 1; i <= 5; i++) {
        if (!respuestasFinal[i]) {
            return;
        }
    }

    let puntos = 0;

    for (let i = 1; i <= 5; i++) {
        if (respuestasFinal[i] === "correcta") {
            puntos++;
        }
    }

    const resultado =
        document.getElementById("resultado-final");

    if (!resultado) {
        return;
    }

    if (idiomaModulo5 === "en") {

        if (puntos === 5) {

            resultado.innerHTML =
                "<strong>Excellent! 5/5</strong><br>" +
                "You have learned how to maintain healthy digital habits. Congratulations!";

        }

        else if (puntos >= 3) {

            resultado.innerHTML =
                "<strong>Very good! " + puntos + "/5</strong><br>" +
                "You know most of the topics. Review the modules again to reinforce what you learned.";

        }

        else {

            resultado.innerHTML =
                "<strong>Result: " + puntos + "/5</strong><br>" +
                "We recommend reviewing the modules again to strengthen your digital habits.";
        }

    }

    else {

        if (puntos === 5) {

            resultado.innerHTML =
                "<strong>¡Excelente! 5/5</strong><br>" +
                "Aprendiste a mantener hábitos digitales saludables. ¡Felicitaciones!";

        }

        else if (puntos >= 3) {

            resultado.innerHTML =
                "<strong>¡Muy bien! " + puntos + "/5</strong><br>" +
                "Conoces la mayoría de los temas. Repasa nuevamente los módulos para reforzar lo aprendido.";

        }

        else {

            resultado.innerHTML =
                "<strong>Resultado: " + puntos + "/5</strong><br>" +
                "Te recomendamos repasar nuevamente los módulos para fortalecer tus hábitos digitales.";
        }
    }
}




function cambiarIdiomaModulo5Evaluacion(idioma) {

    // responderFinal() utiliza el idioma del módulo 5
    idiomaModulo5 = idioma;

    // Se reinicia la evaluación para que el resultado aparezca en el idioma elegido
    respuestasFinal = {};

    document.querySelectorAll(".quiz-pregunta button").forEach(function(boton) {
        boton.classList.remove("seleccionado");
    });

    if (idioma === "en") {

        cambiarTexto("m5e-menu-inicio", "Home");
        cambiarTexto("m5e-menu-modulos", "Modules ▾");
        cambiarTexto("m5e-menu-creditos", "Credits");

        traducirSubmenu("m5e-submenu-modulo", "en");

        cambiarTexto("m5e-etiqueta", "MODULE 5");

        cambiarTexto(
            "m5e-titulo",
            "Final evaluation"
        );

        cambiarTexto(
            "m5e-descripcion",
            "Answer the five questions and check your score at the end."
        );

        cambiarTexto("m5e-pregunta1", "1. What does it mean to have good digital wellbeing?");
        cambiarTexto("m5e-p1-1", "⚖️ Maintaining a balance in the use of technology");
        cambiarTexto("m5e-p1-2", "📱 Using devices throughout the entire day");

        cambiarTexto("m5e-pregunta2", "2. What is recommended after spending a lot of time in front of a screen?");
        cambiarTexto("m5e-p2-1", "👀 Take a break and rest");
        cambiarTexto("m5e-p2-2", "💻 Continue without resting");

        cambiarTexto("m5e-pregunta3", "3. What helps you organize your time better?");
        cambiarTexto("m5e-p3-1", "📅 Planning activities");
        cambiarTexto("m5e-p3-2", "⏰ Leaving all activities until the last minute");

        cambiarTexto("m5e-pregunta4", "4. What should you do to protect your personal data?");
        cambiarTexto("m5e-p4-1", "🔐 Take care of your passwords and personal information");
        cambiarTexto("m5e-p4-2", "📢 Share your data with anyone");

        cambiarTexto("m5e-pregunta5", "5. What should you do before opening a suspicious link?");
        cambiarTexto("m5e-p5-1", "🔎 Check where it comes from");
        cambiarTexto("m5e-p5-2", "🔗 Open it immediately");

        cambiarTexto(
            "resultado-final",
            "Answer all five questions to see your score."
        );

        cambiarTexto("m5e-boton-anterior", "← Module 5");
        cambiarTexto("m5e-boton-inicio", "Home");

    }

    else {

        cambiarTexto("m5e-menu-inicio", "Inicio");
        cambiarTexto("m5e-menu-modulos", "Módulos ▾");
        cambiarTexto("m5e-menu-creditos", "Créditos");

        traducirSubmenu("m5e-submenu-modulo", "es");

        cambiarTexto("m5e-etiqueta", "MÓDULO 5");

        cambiarTexto(
            "m5e-titulo",
            "Evaluación final"
        );

        cambiarTexto(
            "m5e-descripcion",
            "Responde las cinco preguntas y revisa tu puntuación al finalizar."
        );

        cambiarTexto("m5e-pregunta1", "1. ¿Qué significa tener un buen bienestar digital?");
        cambiarTexto("m5e-p1-1", "⚖️ Mantener un equilibrio en el uso de la tecnología");
        cambiarTexto("m5e-p1-2", "📱 Utilizar dispositivos durante todo el día");

        cambiarTexto("m5e-pregunta2", "2. ¿Qué es recomendable hacer después de pasar bastante tiempo frente a una pantalla?");
        cambiarTexto("m5e-p2-1", "👀 Hacer una pausa y descansar");
        cambiarTexto("m5e-p2-2", "💻 Continuar sin descansar");

        cambiarTexto("m5e-pregunta3", "3. ¿Qué ayuda a organizar mejor el tiempo?");
        cambiarTexto("m5e-p3-1", "📅 Planificar las actividades");
        cambiarTexto("m5e-p3-2", "⏰ Dejar todas las actividades para el último momento");

        cambiarTexto("m5e-pregunta4", "4. ¿Qué debes hacer para proteger tus datos personales?");
        cambiarTexto("m5e-p4-1", "🔐 Cuidar tus contraseñas y la información personal");
        cambiarTexto("m5e-p4-2", "📢 Compartir tus datos con cualquier persona");

        cambiarTexto("m5e-pregunta5", "5. ¿Qué debes hacer antes de abrir un enlace sospechoso?");
        cambiarTexto("m5e-p5-1", "🔎 Revisar de dónde proviene");
        cambiarTexto("m5e-p5-2", "🔗 Abrirlo inmediatamente");

        cambiarTexto(
            "resultado-final",
            "Responde las cinco preguntas para conocer tu puntuación."
        );

        cambiarTexto("m5e-boton-anterior", "← Módulo 5");
        cambiarTexto("m5e-boton-inicio", "Inicio");
    }
}




function cambiarIdiomaCreditos(idioma) {

    if (idioma === "en") {

        cambiarTexto("creditos-menu-inicio", "Home");
        cambiarTexto("creditos-menu-modulos", "Modules ▾");
        cambiarTexto("creditos-menu-creditos", "Credits");

        traducirSubmenu("creditos-submenu-modulo", "en");

        cambiarTexto("creditos-etiqueta", "CREDITS");

        cambiarTexto(
            "creditos-titulo",
            "Sources and credits"
        );

        cambiarTexto(
            "creditos-descripcion",
            "This page presents the sources used to support the information in Digital Balance, as well as the credits for the resources used in the project."
        );

        cambiarTexto(
            "creditos-fuentes-titulo",
            "Institutional and academic sources"
        );

        cambiarHTML(
            "creditos-enlace-unesco",
            "<a href=\"https://www.unesco.org/en/articles/global-education-monitoring-report-2023-technology-education-tool-whose-terms\" target=\"_blank\">UNESCO - Technology in education</a>"
        );

        cambiarTexto(
            "creditos-recursos-titulo",
            "Resources used"
        );

        cambiarTexto(
            "creditos-imagenes",
            "The images and illustrations used in the application were generated with artificial intelligence tools and adapted to the visual design of the project. No third-party photographs were used without attribution."
        );

        cambiarTexto(
            "creditos-contenido",
            "The text content of the project was written, reviewed and adapted for educational purposes, using institutional and academic sources as a reference."
        );

        cambiarTexto(
            "creditos-proyecto",
            "Academic project developed by María Valentina Céspedes Cuenca for the Multimedia Applications course - UNAD."
        );

        cambiarTexto(
            "creditos-enlaces-titulo",
            "Reference links"
        );

        cambiarTexto("creditos-consulta-unesco", "UNESCO - Technology in education");
        cambiarTexto("creditos-enlace-cisa", "CISA - Digital security");
        cambiarTexto("creditos-enlace-sic", "Superintendence of Industry and Commerce - Personal data protection");

        cambiarTexto("creditos-boton-inicio", "Back to home");

    }

    else {

        cambiarTexto("creditos-menu-inicio", "Inicio");
        cambiarTexto("creditos-menu-modulos", "Módulos ▾");
        cambiarTexto("creditos-menu-creditos", "Créditos");

        traducirSubmenu("creditos-submenu-modulo", "es");

        cambiarTexto("creditos-etiqueta", "CRÉDITOS");

        cambiarTexto(
            "creditos-titulo",
            "Fuentes y créditos"
        );

        cambiarTexto(
            "creditos-descripcion",
            "En esta página se presentan las fuentes utilizadas para respaldar la información de Digital Balance, así como los créditos de los recursos utilizados en el proyecto."
        );

        cambiarTexto(
            "creditos-fuentes-titulo",
            "Fuentes institucionales y académicas"
        );

        cambiarHTML(
            "creditos-enlace-unesco",
            "<a href=\"https://www.unesco.org/en/articles/global-education-monitoring-report-2023-technology-education-tool-whose-terms\" target=\"_blank\">UNESCO - Tecnología en la educación</a>"
        );

        cambiarTexto(
            "creditos-recursos-titulo",
            "Recursos utilizados"
        );

        cambiarTexto(
            "creditos-imagenes",
            "Las imágenes e ilustraciones utilizadas en la aplicación fueron generadas mediante herramientas de inteligencia artificial y adaptadas al diseño visual del proyecto. No se utilizaron fotografías de terceros sin atribución."
        );

        cambiarTexto(
            "creditos-contenido",
            "El contenido textual del proyecto fue elaborado, revisado y adaptado para fines educativos, tomando como referencia fuentes institucionales y académicas."
        );

        cambiarTexto(
            "creditos-proyecto",
            "Proyecto académico desarrollado por María Valentina Céspedes Cuenca para el curso de Aplicaciones Multimedia - UNAD."
        );

        cambiarTexto(
            "creditos-enlaces-titulo",
            "Enlaces de consulta"
        );

        cambiarTexto("creditos-consulta-unesco", "UNESCO - Tecnología en la educación");
        cambiarTexto("creditos-enlace-cisa", "CISA - Seguridad digital");
        cambiarTexto("creditos-enlace-sic", "Superintendencia de Industria y Comercio - Protección de datos personales");

        cambiarTexto("creditos-boton-inicio", "Volver al inicio");
    }
}
