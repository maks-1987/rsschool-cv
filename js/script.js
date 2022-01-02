// ============= BURGER ================
/* $(function () {
    let menu = $('.burger-menu');
    let button = $('.burger-menu__button');
    let list = $('.burger-menu__list');

    button.on('click', () => {
        toggleMenu();
    });

    list.on('click', () => toggleMenu());

    function toggleMenu() {
        menu.toggleClass('burger-active');

        if(menu.hasClass('burger-active')){
            $('body').css('overflow', 'hidden');
        }else{
            $('body').css('overflow', 'visible');
        }
    }
}); */

// Adaptive menu
const toggleBtn = document.querySelector('.burger-menu');
const nav = document.querySelector('.burger-menu__button');
const navList = document.querySelector('.burger-menu__list');
const navItems = document.querySelectorAll('.nav-item');

function switchMenu() {
  toggleBtn.classList.toggle('collapsed');
  nav.classList.toggle('collapsed');
  navList.classList.toggle('collapsed');
}
toggleBtn.addEventListener('click', switchMenu);

function closeMenu() {
  setTimeout(() => {
    toggleBtn.classList.remove('collapsed');
    nav.classList.remove('collapsed');
    navList.classList.remove('collapsed');
  }, 1000);  
}
navItems.forEach(el => el.addEventListener('click', closeMenu));