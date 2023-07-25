import { Page } from "@playwright/test";
import { BaseDependencies, BaseEyes, BaseHands } from "../BaseRobot";

export class HomeRobotEyes extends BaseEyes {
  constructor(page: Page) {
    super(page);
  }

  async seesHomePageUrl(url: string) {
    await this.page.waitForLoadState("networkidle");
    await super.seesUrl(url);
  }
  async seesHomeButton() {
    await this.page.waitForLoadState("networkidle");
    await super.seesDomVisible('//button[@ng-click="home()"]');
  }
  async seesHeader() {
    await this.page.waitForLoadState("networkidle");
    await super.seesDomVisible(".mainHeading");
  }
  async seesCustomerLoginButton() {
    await this.page.waitForLoadState("networkidle");
    await super.seesDomVisible('//button[@ng-click="customer()"]');
  }
  async seesManagerLoginButton() {
    await this.page.waitForLoadState("networkidle");
    await super.seesDomVisible('//button[@ng-click="manager()"]');
  }
}

export class HomeRobotHands extends BaseHands {
  constructor(page: Page) {
    super(page);
  }

  async clickOnHomeButton() {
    await this.page.waitForLoadState("networkidle");
    await super.clickOnDomElement('//button[@ng-click="home()"]');
  }

  async clickOnCustomerLoginButton() {
    await this.page.waitForLoadState("networkidle");
    await super.clickOnDomElement('//button[@ng-click="customer()"]');
  }
  async clickOnManagerLoginButton() {
    await this.page.waitForLoadState("networkidle");
    await super.clickOnDomElement('//button[@ng-click="manager()"]');
  }
}

export class HomeRobotDependencies extends BaseDependencies {
  constructor(page: Page) {
    super(page);
  }
  async visitHomePage(url: string) {
    await this.page.waitForLoadState("networkidle");
    await super.visitUrl(url);
  }
}
