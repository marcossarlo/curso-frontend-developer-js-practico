/* Función toggleDesktopMenu() para hacer que aparezca/desaparezca class="desktop-menu" */
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
    /* quita/pone clase .inactive dependiendo de si la tiene o no */
    desktopMenu.classList.toggle('inactive');
} 
/* END función toggleDesktopMenu() */

