/* =========================================
   ELEMENTOS DEL DOM Y SONIDOS
========================================= */
const titulo = document.querySelector('h1');
const track = document.querySelector('.carrusel-track');
const imagenes = document.querySelectorAll('.carrusel-track img');
const btnPrev = document.querySelector('.prev');
const btnNext = document.querySelector('.next');

const hamburguesa = document.querySelector('.hamburguesa');
const menu = document.querySelector('nav ul');
const linksNav = document.querySelectorAll('nav ul li a');

const btnMusica = document.getElementById('btn-musica');
const secciones = document.querySelectorAll('main > section');

// Audios
const mouseEffect = new Audio('sounds/GTASA-press.mp3');
const musica = new Audio('sounds/GTASA-song.mp3');
musica.loop = true;
musica.volume = 0.2;

// Función auxiliar para reproducir el efecto de sonido
function reproducirEfecto() {
    mouseEffect.currentTime = 0;
    mouseEffect.play();
}


/* =========================================
   1. SISTEMA DE NAVEGACIÓN (SPA)
========================================= */
function mostrarSeccion(idDeseado) {
    secciones.forEach(seccion => {
        if (seccion.id === idDeseado) {
            seccion.classList.remove('oculto');
        } else {
            seccion.classList.add('oculto');
        }
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Cargar la sección 'inicio' por defecto al abrir la página
mostrarSeccion('inicio');


/* =========================================
   2. TÍTULO INTERACTIVO
========================================= */
titulo.addEventListener('click', () => {
    titulo.textContent = (titulo.textContent === 'Ink Vinito') ? 'Black Work Tattoo' : 'Ink Vinito';
});


/* =========================================
   TITULO INTERACTIVO CUIDADOS
========================================= */
const tituloCuidados = document.querySelector('#cuidados h2');

if (tituloCuidados) {
    tituloCuidados.addEventListener('click', () => {
        if (tituloCuidados.textContent === 'Cuidados Post Tatuaje') {
            tituloCuidados.textContent = 'Ink Vinito';
        } else {
            tituloCuidados.textContent = 'Cuidados Post Tatuaje';
        }
    });
}

/* =========================================
   TITULO INTERACTIVO CUIDADOS
========================================= */
const tituloEstilos = document.querySelector('#estilos h2');

if (tituloEstilos) {
    tituloEstilos.addEventListener('click', () => {
        if (tituloEstilos.textContent === 'Estilos') {
            tituloEstilos.textContent = 'Ink Vinito';
        } else {
            tituloEstilos.textContent = 'Estilos';
        }
    });
}

/* =========================================
   3. CARRUSEL DE IMÁGENES
========================================= */
let indice = 0;
let intervalo;

function getPorcentaje() {
    return window.innerWidth <= 768 ? 100 : 50;
}

function irA(nuevoIndice) {
    indice = (nuevoIndice + imagenes.length) % imagenes.length;
    track.style.transform = `translateX(-${indice * getPorcentaje()}%)`;
}

function iniciarIntervalo() {
    clearInterval(intervalo);
    intervalo = setInterval(() => irA(indice + 1), 3000);
}

btnNext.addEventListener('click', () => {
    reproducirEfecto();
    irA(indice + 1);
    iniciarIntervalo();
});

btnPrev.addEventListener('click', () => {
    reproducirEfecto();
    irA(indice - 1);
    iniciarIntervalo();
});

iniciarIntervalo();


/* =========================================
   4. MENÚ HAMBURGUESA Y NAVEGACIÓN
========================================= */
hamburguesa.addEventListener('click', () => {
    menu.classList.toggle('abierto');
});

hamburguesa.addEventListener('touchstart', reproducirEfecto);

linksNav.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Evita el salto tradicional del ancla HTML (#)
        
        // Obtiene el ID del destino (ej: "#cuidados" -> "cuidados")
        const targetId = link.getAttribute('href').replace('#', '');
        
        mostrarSeccion(targetId);
        menu.classList.remove('abierto'); // Cierra el menú móvil al hacer clic
    });

    link.addEventListener('mouseover', reproducirEfecto);
    link.addEventListener('touchend', reproducirEfecto);
});


/* =========================================
   5. REPRODUCTOR DE MÚSICA
========================================= */
btnMusica.addEventListener('click', () => {
    if (musica.paused) {
        musica.play();
        btnMusica.textContent = '🔊';
    } else {
        musica.pause();
        btnMusica.textContent = '🔇';
    }
});