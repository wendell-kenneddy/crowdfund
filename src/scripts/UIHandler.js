import { FundHandler } from './FundHandler.js';

const totalFundSpan = document.getElementById('total-fund');
const totalPledgersSpan = document.getElementById('total-pledgers');
const progressBar = document.querySelector('.progress-bar');

export class UIHandler {
  static updateFundInfo() {
    const fundInfo = FundHandler.getFundInfo();
    const progressBarWidth = Math.floor((fundInfo.totalFund * 100) / 100000);

    totalFundSpan.innerText = fundInfo.totalFund.toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL'
    });
    totalPledgersSpan.innerText = fundInfo.totalPledgers;

    progressBar.style.width =
      progressBarWidth >= 100 ? '100%' : `${progressBarWidth}%`;
  }

  static updateOptionsRemainingDonates() {
    const fundInfo = FundHandler.getFundInfo();
    const remainingDonatesSpans =
      document.querySelectorAll('.remaining-donates');

    for (const span of remainingDonatesSpans) {
      const optionIndex = span.dataset.option;

      span.innerText = fundInfo.fundOptions[optionIndex].remainingDonates;
    }
  }
}
