// Отримуємо елементи
const burgerContainer = document.getElementById('burger-container');
const burgerMenu = document.getElementById('burger-menu');
const mobileNav = document.getElementById('mobile-nav');

// Додаємо обробник події на бургер-меню
burgerContainer.addEventListener('click', () => {
    // Додаємо клас 'active' до бургер-меню та мобільного меню
    burgerMenu.classList.toggle('active');
    mobileNav.classList.toggle('active');
});
