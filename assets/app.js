import './styles/app.css';

const btn = document.querySelector('.menu-toggle');
const menu = document.querySelector('.navdrop');

btn.addEventListener('click', () => {
    menu.classList.toggle('open');
});