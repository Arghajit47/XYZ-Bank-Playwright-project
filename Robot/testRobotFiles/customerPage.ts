import { Page } from "@playwright/test";
import { BaseDependencies, BaseEyes, BaseHands } from "../BaseRobot";

export class CustomerRobotEyes extends BaseEyes {
  constructor(page: Page) {
    super(page);
  }
  async seesYourName() {
    await this.page.waitForLoadState("networkidle");
    await super.seesDomVisible("#userSelect");
  }
  async seesLoginButton() {
    await this.page.waitForLoadState("networkidle");
    await super.seesDomVisible("button[type='submit']");
  }
  async seesLogOutButton() {
    await this.page.waitForLoadState("networkidle");
    await super.seesDomVisible('button[ng-click="byebye()"]');
  }
  async seesAcountPage() {
    await this.page.waitForLoadState("networkidle");
    await super.seesDomVisible('//button[@ng-click="transactions()"]');
    await super.seesDomVisible('//button[@ng-click="deposit()"]');
    await super.seesDomVisible('//button[@ng-click="withdrawl()"]');
    await super.seesDomVisible("#accountSelect");
  }
  async seesDepositPage() {
    await this.page.waitForLoadState("networkidle");
    await super.seesDomVisible("button[type='submit']");
    await super.seesDomVisible('input[ng-model="amount"]');
  }
  async seesSuccessfullyDeposited() {
    await this.page.waitForLoadState("networkidle");
    await super.seesDomVisible("span[ng-show='message']");
  }
  async seesSuccessfullyWithdrawl() {
    await this.page.waitForLoadState("networkidle");
    await super.seesDomVisible("span[ng-show='message']");
  }
  async seesTransactionPage() {
    await this.page.waitForLoadState("networkidle");
    await super.seesDomVisible('button[ng-click="back()"]');
    await super.seesDomVisible("#start");
    await super.seesDomVisible("#end");
    await super.seesDomVisible('button[ng-click="reset()"]');
  }
}

export class CustomerRobotHands extends BaseHands {
  constructor(page: Page) {
    super(page);
  }

  async inputYourName() {
    await this.page.waitForLoadState("networkidle");
    await this.page.selectOption("#userSelect", { value: "6" });
  }
  async inputCurrency() {
    await this.page.waitForLoadState("networkidle");
    await this.page.selectOption("#currency", { value: "Rupee" });
  }
  async clickOnProcessButton() {
    await this.page.waitForLoadState("networkidle");
    await super.clickOnDomElement("button[type='submit']");
  }
  async clickOnLogOutButton() {
    await this.page.waitForLoadState("networkidle");
    await super.clickOnDomElement('button[ng-click="byebye()"]');
  }
  async clickOnTransactionsButton() {
    await this.page.waitForLoadState("networkidle");
    await super.clickOnDomElement('//button[@ng-click="transactions()"]');
  }
  async clickOnDepositButton() {
    await this.page.waitForLoadState("networkidle");
    await super.clickOnDomElement('//button[@ng-click="deposit()"]');
  }
  async clickOnWithdrawlButton() {
    await this.page.waitForLoadState("networkidle");
    await super.clickOnDomElement('//button[@ng-click="withdrawl()"]');
  }
  async inputAmount(amount: string) {
    await this.page.waitForLoadState("networkidle");
    await super.typeTextonDom('input[ng-model="amount"]', amount);
  }
  async clickOnTransactionConfirmButton() {
    await this.page.waitForLoadState("networkidle");
    await super.clickOnDomElement("button[type='submit']");
  }
  async clickOnResetButton() {
    await this.page.waitForLoadState("networkidle");
    await super.clickOnDomElement('button[ng-click="reset()"]');
  }
  async clickOnLoginButton() {
    await this.page.waitForLoadState("networkidle");
    await super.clickOnDomElement("button[type='submit']");
  }
}
