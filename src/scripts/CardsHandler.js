import { FundHandler } from './FundHandler.js';

const cards = document.querySelectorAll('.card.non-static');

export class CardHandler {
  static checkOptionState() {
    const fundInfo = FundHandler.getFundInfo();

    for (const card of cards) {
      const cardRadio = card.querySelector('input[type="radio"');
      const cardBtn = card.querySelector('button');
      const optionIndex = Number(card.dataset.option);
      const isOutOfStock =
        fundInfo.fundOptions[optionIndex].remainingDonates == 0;

      if (isOutOfStock) {
        card.classList.add('out-of-stock');
        cardBtn.setAttribute('disabled', 'disabled');

        if (cardRadio) cardRadio.setAttribute('disabled', 'disabled');
        return;
      }

      card.classList.remove('out-of-stock');
      cardBtn.removeAttribute('disabled');

      if (cardRadio) cardRadio.removeAttribute('disabled');
    }
  }
}
