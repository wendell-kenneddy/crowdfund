const backToTopBtn = document.querySelector('.back-to-top');

const handleBackToTopBtn = () => {
  const scrollY = window.scrollY;

  if (scrollY >= 200) return backToTopBtn.classList.add('show');
  return backToTopBtn.classList.remove('show');
};

export class ScrollHandler {
  static handleScroll() {
    window.addEventListener('scroll', e => {
      handleBackToTopBtn(e);
    });
  }
}
