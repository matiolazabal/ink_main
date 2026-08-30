const titulo = document.querySelector('h1');

titulo.addEventListener('click', () => {
    
    if (titulo.textContent === 'Ink Vinito') {
        titulo.textContent = 'Black Work Tattoo';
    }
        else {
            titulo.textContent = 'Ink Vinito';
        }
});


const track = document.querySelector('.carrusel-track');
const imagenes = document.querySelectorAll('.carrusel-track img');
const btnPrev = document.querySelector('.prev');
const btnNext = document.querySelector('.next');

let indice = 0;
let intervalo;

function irA(nuevoIndice) {
    indice = (nuevoIndice + imagenes.length) % imagenes.length;
    track.style.transform = `translateX(-${indice * 50}%)`;
}


function iniciarIntervalo() {
    clearInterval(intervalo);
    intervalo = setInterval(() => irA(indice + 1), 3000);
}

btnNext.addEventListener('click', () => {
    irA(indice + 1);
    iniciarIntervalo();
});

btnPrev.addEventListener('click', () => {
    irA(indice - 1);
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