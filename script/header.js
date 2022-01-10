const createHeader = () => {
    let header = document.querySelector('header');
    header.innerHTML = `
    <div id="overlay" class="overlay"></div>
    <nav id="nav" class="nav">
        <div class="nav__menu-container" data-dropdown="menu">
            <i id="menu-icon" class="fa fa-bars fa-lg" data-dropdown-button></i>
            <div class="menu">
                <i class="fa fa-times fa-lg" data-close-btn='menu'></i>
                <ul class="menu__list">
                    <li class="menu__item"><a href="index.html">Home</a></li>
                    <li class="menu__item"><a href="product.html">New Arrival</a></li>
                    <li class="menu__item"><a href="#">Engagement & Wedding -coming soon</a></li>
                    <li class="menu__item"><a href="#">Jewellery -coming soon</a></li>
                    <li class="menu__item"><a href="#">Sale -coming soon</a></li>
                    <li class="menu__item"><a href="contact.html">Contact Us</a></li>
                </ul>
            </div>
        </div>
        <div>
            <h1 class="nav__title"><a href="index.html" target="_self">Belle Jewellery</a></h1>
        </div>
        <div class="nav__tool-container">
            <i class="fas fa-user fa-lg"></i>
            <i class="fas fa-search fa-lg"></i>
            <i class="fas fa-shopping-bag fa-lg"></i>
        </div>
    </nav>
       `;
}
createHeader();