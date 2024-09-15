const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuBtn = document.querySelector('.mobile-btn');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('mobile-menu--open');
    mobileMenuBtn.classList.toggle('mobile-btn--open');
});