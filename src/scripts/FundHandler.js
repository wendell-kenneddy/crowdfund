const fundStatus = {
  totalPledgers: 0,
  totalFund: 0,
  fundOptions: [
    {
      name: 'Suporte de Bambu',
      remainingDonates: 150
    },
    {
      name: 'Suporte Black Edition',
      remainingDonates: 100
    }
  ]
};

export class FundHandler {
  static getFundInfo() {
    return {
      ...fundStatus
    };
  }

  static updateTotalPledgers() {
    fundStatus.totalPledgers += 1;
  }

  static updateTotalFund(value) {
    fundStatus.totalFund += value;
  }

  static updateFundOptions(optionIndex) {
    fundStatus.fundOptions[optionIndex].remainingDonates -= 1;
  }
}
