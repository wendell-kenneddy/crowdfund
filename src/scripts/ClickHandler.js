import { MenuHandler } from './MenuHandler.js';
import { Modal } from './Modal.js';

const openMenuBtn = document.getElementById('open-menu');
const closeMenuBtn = document.getElementById('close-menu');
const bookMarkBtn = document.getElementById('bookmark-project');

const handleBookmark = () => {
  bookMarkBtn.addEventListener('click', e => {
    e.preventDefault();

    const bookmarkImg = bookMarkBtn.querySelector('img');
    const bookmarkInfo = bookMarkBtn.querySelector('span');

    if (bookMarkBtn.classList.contains('bookmarked')) {
      bookMarkBtn.classList.remove('bookmarked');
      bookmarkImg.src = './assets/images/icon-bookmark.svg';
      bookmarkInfo.innerText = 'Marcar';
      return;
    }

    bookMarkBtn.classList.add('bookmarked');
    bookmarkImg.src = './assets/images/icon-bookmarked.svg';
    bookmarkInfo.innerText = 'Marcado';
  });
};

export class ClickHandler {
  static handleClicks() {
    window.addEventListener('click', e => {
      const target = e.target;

      if (target.classList.contains('open-modal')) return Modal.open();
      if (target.classList.contains('close-modal')) return Modal.close();
      if (target == openMenuBtn) return MenuHandler.open();
      if (target == closeMenuBtn) return MenuHandler.close();
    });
    handleBookmark();
  }
}
