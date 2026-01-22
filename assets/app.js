import './stimulus_bootstrap.js';
import './styles/app.css';

console.log('This log comes from assets/app.js - welcome to AssetMapper! 🎉');

document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');

  if (!toggle) return;

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('opened');
  });
});