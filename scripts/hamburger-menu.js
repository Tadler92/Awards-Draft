const menu = document.querySelector('.menu');
const menuItmes = document.querySelectorAll('.menu-item');
const hamburger = document.querySelector('#hamburger');
// const closeIcon = document.querySelector('.close-icon');
// const menuIcon = document.querySelector('.menu-icon');
function toggleMenu() {
  if (menu.classList.contains('showMenu')) {
    menu.classList.remove('showMenu');
    hamburger.classList.remove('hide-hamburger');
    // closeIcon.style.display = 'none';
    // menuIcon.style.display = 'block';
  }
  else {
    menu.classList.add('showMenu');
    hamburger.classList.add('hide-hamburger');
    // closeIcon.style.display = 'block';
    // menuIcon.style.display = 'none';
  }
}

hamburger.addEventListener('click', toggleMenu);
menuItmes.forEach(
  function (menuItem) {
    menuItem.addEventListener('click', toggleMenu);
  }
);