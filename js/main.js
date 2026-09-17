/* =========================================
   ELEMENTOS DEL DOM Y AUDIOS
========================================= */
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

function reproducirEfecto() {
    mouseEffect.currentTime = 0;
    mouseEffect.play().catch(() => {});
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

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

mostrarSeccion('inicio');

/* =========================================
   2. TÍTULOS INTERACTIVOS
========================================= */
function hacerTituloInteractivo(selector, textoAlternativo) {
    const titulo = document.querySelector(selector);
    if (!titulo) return;
    const textoOriginal = titulo.textContent;
    
    titulo.addEventListener('click', () => {
        reproducirEfecto();
        titulo.textContent = (titulo.textContent === textoOriginal) ? textoAlternativo : textoOriginal;     
    });
}

hacerTituloInteractivo('#inicio h1', 'Black Work Tattoo');
hacerTituloInteractivo('#estilos h2', 'Ink Vinito');
hacerTituloInteractivo('#cuidados h2', 'Ink Vinito');
hacerTituloInteractivo('#certificaciones h2', 'Ink Vinito');

/* =========================================
   3. CARRUSEL DE IMÁGENES
========================================= */
let indice = 0;
let intervalo;

function getPorcentaje() {
    return window.innerWidth <= 768 ? 100 : 50;
}

function irA(nuevoIndice) {
    if (!track || imagenes.length === 0) return;
    indice = (nuevoIndice + imagenes.length) % imagenes.length;
    track.style.transform = `translateX(-${indice * getPorcentaje()}%)`;
}

function iniciarIntervalo() {
    clearInterval(intervalo);
    intervalo = setInterval(() => irA(indice + 1), 3000);
}

if (btnNext && btnPrev) {
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
}

/* =========================================
   4. MENÚ HAMBURGUESA Y NAVEGACIÓN
========================================= */
if (hamburguesa && menu) {
    hamburguesa.addEventListener('click', () => {
        menu.classList.toggle('abierto');
        reproducirEfecto();
    });
}

linksNav.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        const targetId = link.getAttribute('href').replace('#', '');
        mostrarSeccion(targetId);
        
        if (menu) {
            menu.classList.remove('abierto');
        }
    });

    link.addEventListener('mouseover', reproducirEfecto);
    link.addEventListener('touchend', reproducirEfecto);
});

/* =========================================
   5. REPRODUCTOR DE MÚSICA
========================================= */
if (btnMusica) {
    btnMusica.addEventListener('click', () => {
        if (musica.paused) {
            musica.play();
            btnMusica.textContent = '🔊';
        } else {
            musica.pause();
            btnMusica.textContent = '🔇';
        }
    });
}