/* Constantes para el desktop menu */
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
menuEmail.addEventListener('click', toggleDesktopMenu);

/* Constantes para el mobile-menu */
const burguerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
burguerMenu.addEventListener('click', toggleMobileMenu);

/* Constantes para el product-detail */
const menuShoppingCart = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
menuShoppingCart.addEventListener('click', toggleCartAside);


/* Función toggleDesktopMenu() para hacer que aparezca/desaparezca el Desktop Menu -> class="desktop-menu" */
function toggleDesktopMenu() {
    /* para verificar si aside esta cerrado o no */
    const isAsideClose = aside.classList.contains('inactive');
    if (!isAsideClose) {
        aside.classList.add('inactive');
    }

    /* quita/pone clase .inactive dependiendo de si la tiene o no */
    desktopMenu.classList.toggle('inactive');
} 

/* Función toggleMobileMenu() para hacer que aparezca/desaparezca el Mobile Menu -> class="mobile-menu" */
function toggleMobileMenu() {
    /* verificar si aside esta cerrado o no */
    const isAsideClose = aside.classList.contains('inactive');
    if (!isAsideClose) {
        aside.classList.add('inactive');
    }

    /* quita/pone clase .inactive dependiendo de si la tiene o no */
    mobileMenu.classList.toggle('inactive');
}

/* Función para hacer que aparezca/desaparezca el aside -> class="product-detail" */
function toggleCartAside() {
    /* verificar si .mobile-menu esta cerrado o no */
    const isMobileMenuClose = mobileMenu.classList.contains('inactive');
    if (!isMobileMenuClose) {
        mobileMenu.classList.add('inactive');
    }

    /* quita/pone clase .inactive dependiendo de si la tiene o no */
    aside.classList.toggle('inactive');
}
