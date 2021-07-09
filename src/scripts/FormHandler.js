import { Modal } from './Modal.js';
import { FundHandler } from './FundHandler.js';
import { App } from './App.js';

const donateForm = document.getElementById('donate-form');
const modalRadioInputs = document.querySelectorAll(`input[type='radio']`);
const modalNumberInputs = document.querySelectorAll(`input[type='number']`);
const modalCards = document.querySelectorAll('.modal .card');
const clearModalInputs = () => {
  for (const input of modalNumberInputs) {
    input.value = '';
  }
};

const validateValue = value => {
  if (!value) throw new Error('Valor inválido. Por favor, tente novamente.');
};

const validateOption = optionIndex => {
  const fundInfo = FundHandler.getFundInfo();
  const fundOption = fundInfo.fundOptions[optionIndex];

  if (fundOption.remainingDonates == 0)
    throw new Error('Número limite de doações para esta opção atingido.');
};

export class FormHandler {
  static handleSubmit() {
    donateForm.addEventListener('submit', e => {
      e.preventDefault();

      try {
        const pledgeInput = document.querySelector(
          `.modal .card.selected input[type='number']`
        );
        const rewardOptionSpan = document.querySelector(
          `.modal .card.selected .total-remaining span`
        );
        const pledgeValue = Number(pledgeInput.value);

        validateValue(pledgeValue);

        if (rewardOptionSpan) {
          const rewardOption = rewardOptionSpan.dataset.option;
          validateOption(rewardOption);
          FundHandler.updateFundOptions(rewardOption);
        }

        FundHandler.updateTotalPledgers();
        FundHandler.updateTotalFund(pledgeValue);
        Modal.close();
        Modal.openCompletedPledgeModal();
        App.reload();
      } catch (error) {
        alert(error.message);
      }
    });
  }

  static handleCardSelection() {
    for (const input of modalRadioInputs) {
      const cardIndex = Number(input.dataset.card);

      input.addEventListener('change', e => {
        clearModalInputs();

        for (const card of modalCards) {
          card.dataset.card == cardIndex
            ? card.classList.add('selected')
            : card.classList.remove('selected');
        }
      });
    }
  }
}
