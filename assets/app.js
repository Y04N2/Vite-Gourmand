import './stimulus_bootstrap.js';
import './styles/app.css';

console.log('This log comes from assets/app.js - welcome to AssetMapper! 🎉');

 document.addEventListener('DOMContentLoaded', () => {
  /*const toggle = document.querySelector('.menu-toggle');*/
    const menu = document.querrySelector('#navbarMenu');

  if (!toggle) return;

  /*toggle.addEventListener('click', () => {
    toggle.classList.toggle('opened');*/
    menu.addEventListener('show.bs.collapse', () => {
    });
    menu.addEvenListener('hidden.bs.collapse',() => {
  });
});

/*ouverture menu de navigation */

const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('#menu');

toggle.addEventListener('click', () => {
  const isOpen = toggle.classList.toggle('opened');

  menu.classList.toggle('open', isOpen);
  toggle.setAttribute('aria-expanded', isOpen);
});

/* fermeture du menu */

document.addEventListener('click', (e) => {
  if (!e.target.closest('.navbar')) {
    toggle.classList.remove('opened');
    menu.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }
});




