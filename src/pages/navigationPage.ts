import { Page, Locator } from '@playwright/test';
import { JsonLocatorReader } from 'utils/jsonLocatorReader';
import path from 'path';

const jsonPath = path.resolve(__dirname, '../locators/footer.json');
const reader = new JsonLocatorReader(jsonPath);
const locators = reader.getHeaders();

export class NavigationPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  gotoHome = async () => {
    await this.page.goto('https://rtctek.com/');
  };

  clickApplyNow = async () => {
    await this.page.locator(locators.apply.applyBtnClick).click();
  };

  get applyForm(): Locator {
    return this.page.locator(locators.apply.formVisible);
  }

  clickContactUs = async () => {
    await this.page.locator(locators.contact.clickOnContactUs).click();
  };

  get contactForm(): Locator {
    return this.page.locator(locators.contact.form);
  }

  get indiaOfficeTab(): Locator {
    return this.page.locator(locators.contact["India Office"]);
  }

  get indiaOfficeText(): Locator {
    return this.page.locator(locators.contact.indianOfficeText);
  }

  get mapSection(): Locator {
    return this.page.locator(locators.contact.findUsOnMap);
  }

  clickAboutUs = async () => {
    await this.page.locator(locators.about.clickonAboutUs).click();
  };

  clickContactInsideAbout = async () => {
    await this.page.locator(locators.about["Contact Us"]).click();
  };

  get rightBtn(): Locator {
    return this.page.locator(locators.about.rightButton);
  }

  get leftBtn(): Locator {
    return this.page.locator(locators.about.leftButton);
  }

  get article(): Locator {
    return this.page.locator('article');
  }

  get hoverDevOps(): Locator {
    return this.page.locator(locators.about.hovering);
  }

  get hoverText(): Locator {
    return this.page.locator(locators.about.hoveringText);
  }

  clickGetAQuote = async () => {
    await this.page.locator(locators.getAQuote.clickOnGetAQuote).click();
  };

  get quoteForm(): Locator {
    return this.page.locator(locators.getAQuote.quoteFormVisible);
  };
}
