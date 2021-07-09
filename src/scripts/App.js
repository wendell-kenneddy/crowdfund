import { FormHandler } from './FormHandler.js';
import { UIHandler } from './UIHandler.js';
import { CardHandler } from './CardsHandler.js';
import { ClickHandler } from './ClickHandler.js';
import { ScrollHandler } from './ScrollHandler.js';

export class App {
  static init() {
    UIHandler.updateFundInfo();
    UIHandler.updateOptionsRemainingDonates();
    CardHandler.checkOptionState();
    FormHandler.handleCardSelection();
    FormHandler.handleSubmit();
    ClickHandler.handleClicks();
    ScrollHandler.handleScroll();
  }

  static reload() {
    UIHandler.updateFundInfo();
    UIHandler.updateOptionsRemainingDonates();
    CardHandler.checkOptionState();
  }
}
