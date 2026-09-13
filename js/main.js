const titulo = document.querySelector('h1');
titulo.addEventListener('click', () => {
    if (titulo.textContent === 'Ink Vinito') {
        titulo.textContent = 'Black Work Tattoo';
    } else {
        titulo.textContent = 'Ink Vinito';
    }
});

const track = document.querySelector('.carrusel-track');
const imagenes = document.querySelectorAll('.carrusel-track img');
const btnPrev = document.querySelector('.prev');
const btnNext = document.querySelector('.next');
const mouseEffect = new Audio('sounds/GTASA-press.mp3');

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
    mouseEffect.currentTime = 0;
    mouseEffect.play();
    irA(indice + 1);
    iniciarIntervalo();
});

btnPrev.addEventListener('click', () => {
    mouseEffect.currentTime = 0;
    mouseEffect.play();
    irA(indice - 1);
    iniciarIntervalo();
});

iniciarIntervalo();

const hamburguesa = document.querySelector('.hamburguesa');
const menu = document.querySelector('nav ul');

hamburguesa.addEventListener('click', () => {
    menu.classList.toggle('abierto');
});
hamburguesa.addEventListener('touchstart', () => {
    mouseEffect.currentTime = 0;
    mouseEffect.play();
});

const linksNav = document.querySelectorAll('nav ul li a');
linksNav.forEach(link => {
    link.addEventListener('click', () => menu.classList.remove('abierto'));
    link.addEventListener('mouseover', () => {
        mouseEffect.currentTime = 0;
        mouseEffect.play();
    });
    link.addEventListener('touchend', () => {
    mouseEffect.currentTime = 0;
    mouseEffect.play();
});
});

const musica = new Audio('sounds/GTASA-song.mp3');
musica.loop = true;
musica.volume = 0.2;
const btnMusica = document.getElementById('btn-musica');
btnMusica.addEventListener('click', () => {
    if (musica.paused) {
        musica.play();
        btnMusica.textContent = '🔊';
    } else {
        musica.pause();
        btnMusica.textContent = '🔇';
    }
});