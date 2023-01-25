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

/* Constante para el Produc List */
const cardsContainer = document.querySelector('.cards-container');
const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Monitor',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'PC',
    price: 720,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

/* maquetando los products */
function renderProducts(arrProducts) {
    for (product of arrProducts) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        // product = {name, price, image} -> product.image
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.setAttribute('alt', product.name);
        productImg.setAttribute('title', product.name);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
        
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
        productImgCart.setAttribute('alt', 'shoping cart');
        
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}
renderProducts(productList);
/* 
<div class="product-card">
    <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
    <div class="product-info">
        <div>
            <p>$120,00</p>
            <p>Bike</p>
        </div>
        <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
        </figure>
    </div>
</div>
 */