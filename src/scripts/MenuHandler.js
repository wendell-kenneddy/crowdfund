const menu = document.querySelector('#page-header nav .menu');
const openMenuBtn = document.getElementById('open-menu');
const closeMenuBtn = document.getElementById('close-menu');
const menuLinks = menu.querySelectorAll('ul li a');

export class MenuHandler {
  static open() {
    menu.classList.add('show');
    openMenuBtn.classList.add('hide');
    for (const link of menuLinks) {
      link.addEventListener('click', MenuHandler.close);
    }
  }

  static close() {
    menu.classList.remove('show');
    openMenuBtn.classList.remove('hide');
    for (const link of menuLinks) {
      link.removeEventListener('click', MenuHandler.close);
    }
  }
}
