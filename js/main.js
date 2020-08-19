const headerBurger = document.querySelector('.header__burger');
const menu = document.querySelector('.mobile__menu-wrapper');
const headerBurgerActive = headerBurger.querySelectorAll('.header__burger-line');

headerBurger.addEventListener('click', () => {
    menu.classList.toggle('active');
    headerBurgerActive.forEach(el => {
        el.classList.toggle('header__burger-line-active');
    })
});

const menuLink = menu.querySelectorAll('a');
menuLink.forEach(item => {
    item.addEventListener('click', () => {
        menu.classList.remove('active');

        headerBurgerActive.forEach(el => {
            el.classList.remove('header__burger-line-active');
        })
    })
});