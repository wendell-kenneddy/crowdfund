const modalWrapper = document.querySelector('.modal-wrapper.pledge-options');
const completedPledgeModalWrapper = document.querySelector(
  '.modal-wrapper.completed-pledge'
);
const closeCompletedPledgeModalBtn = document.getElementById(
  'close-completed-pledge'
);
const modalRadioInputs = document.querySelectorAll(`input[type='radio']`);
const modalNumberInputs = document.querySelectorAll(`input[type='number']`);
const modalCards = document.querySelectorAll('.modal .card');
const clearModalInputs = () => {
  for (const input of modalNumberInputs) {
    input.value = '';
  }
};
const resetModalCards = () => {
  for (const card of modalCards) {
    const radio = card.querySelector(`input[type='radio']`);
    radio.checked = false;
    card.classList.remove('selected');
  }
};

const closeOnEscape = e => {
  const isEscape = e.key == 'Escape';

  if (isEscape) return Modal.close();
};

export class Modal {
  static open() {
    modalWrapper.classList.add('on');
    window.addEventListener('keydown', closeOnEscape);
  }

  static close() {
    modalWrapper.classList.remove('on');
    window.removeEventListener('keydown', closeOnEscape);
    clearModalInputs();
    resetModalCards();
  }

  static openCompletedPledgeModal() {
    completedPledgeModalWrapper.classList.add('on');
    closeCompletedPledgeModalBtn.addEventListener(
      'click',
      Modal.closeCompletedPledgeModal
    );
  }

  static closeCompletedPledgeModal() {
    completedPledgeModalWrapper.classList.remove('on');
    closeCompletedPledgeModalBtn.removeEventListener(
      'click',
      Modal.closeCompletedPledgeModal
    );
  }
}
