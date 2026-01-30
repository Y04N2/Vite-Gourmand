import 'bootstrap';
import './stimulus_bootstrap.js';

console.log('This log comes from assets/app.js - welcome to AssetMapper! 🎉');

/* ouverture / fermeture menu hamburger */
const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('#menu');

if (toggle && menu) {
    toggle.addEventListener('click', () => {
        const isOpen = toggle.classList.toggle('opened');
        menu.classList.toggle('open', isOpen);
        toggle.setAttribute('aria-expanded', isOpen);
    });

    /* fermeture du menu si on clique en dehors */
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.navbar')) {
            toggle.classList.remove('opened');
            menu.classList.remove('open');
            toggle.setAttribute('aria-expanded', 'false');
        }
    });
}
