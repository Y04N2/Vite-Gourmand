import './styles/app.css';

document.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.navdrop');

    if (btn && menu) {
        btn.addEventListener('click', () => {
            menu.classList.toggle('open');
        });
    }
});