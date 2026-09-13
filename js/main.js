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

let indice = 0;
let intervalo;

function getPorcentaje() {
    return window.innerWidth <= 768 ? 100 : 50;
}

function getPaso() {
    return 1;
}

function irA(nuevoIndice) {
    indice = (nuevoIndice + imagenes.length) % imagenes.length;
    track.style.transform = `translateX(-${indice * getPorcentaje()}%)`;
}

function iniciarIntervalo() {
    clearInterval(intervalo);
    intervalo = setInterval(() => irA(indice + getPaso()), 3000);
}

btnNext.addEventListener('click', () => {
    irA(indice + getPaso());
    iniciarIntervalo();
});

btnPrev.addEventListener('click', () => {
    irA(indice - getPaso());
    iniciarIntervalo();
});

iniciarIntervalo();

const hamburguesa = document.querySelector('.hamburguesa');
const menu = document.querySelector('nav ul');

hamburguesa.addEventListener('click', () => {
    menu.classList.toggle('abierto');
});

const links = document.querySelectorAll('nav ul li a');

links.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('abierto');
    });
});


const linksNav = document.querySelectorAll('nav ul li a');
const mouseEffect = new Audio('sounds/GTASA-press.mp3');

linksNav.forEach(link => {
    link.addEventListener('mouseover', () => {
        mouseEffect.currentTime = 0;
        mouseEffect.play();
    });
});


btnNext.addEventListener('click', () => {
    mouseEffect.currentTime = 0;
    mouseEffect.play();
    irA(indice + getPaso());
    iniciarIntervalo();
});

btnPrev.addEventListener('click', () => {
    mouseEffect.currentTime = 0;
    mouseEffect.play();
    irA(indice - getPaso());
    iniciarIntervalo();
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