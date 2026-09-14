const titulo = document.querySelector('h2');
titulo.addEventListener('click', () => {
    if (titulo.textContent === 'Cuidados Post Tatuaje') {
        titulo.textContent = 'Ink Vinito';
    } else {
        titulo.textContent = 'Cuidados Post Tatuaje';
    }
});


const mouseEffect = new Audio('sounds/GTASA-press.mp3');

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