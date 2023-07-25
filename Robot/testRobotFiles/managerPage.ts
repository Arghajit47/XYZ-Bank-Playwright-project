import { Page } from "@playwright/test";
import { BaseDependencies, BaseEyes, BaseHands } from "../BaseRobot";

export class ManagerRobotEyes extends BaseEyes {
  constructor(page: Page) {
    super(page);
  }

  async seesManagerPageUrl(url: string) {
    await this.page.waitForLoadState("networkidle");
    await super.seesUrl(url);
  }
  async seesAddCustomerButton() {
    await this.page.waitForLoadState("networkidle");
    await super.seesDomVisible('//button[@ng-click="addCust()"]');
  }
  async seesHeader() {
    await this.page.waitForLoadState("networkidle");
    await super.seesDomVisible(".mainHeading");
  }
  async seesOpenAccountButton() {
    await this.page.waitForLoadState("networkidle");
    await super.seesDomVisible('//button[@ng-click="openAccount()"]');
  }
  async seesCustomersButton() {
    await this.page.waitForLoadState("networkidle");
    await super.seesDomVisible('//button[@ng-click="showCust()"]');
  }
  async seesAddcustomerPage() {
    await this.page.waitForLoadState("networkidle");
    await super.seesDomVisible("input[ng-model='fName']");
    await super.seesDomVisible("input[ng-model='lName']");
    await super.seesDomVisible("input[ng-model='postCd']");
    await super.seesDomVisible("button[type='submit']");
  }
  async seesSuccessfullyAddedCustomerMessage() {
    await this.page.waitForLoadState("networkidle");
    await super.seesAlertMessage();
  }
  async seesOpenAccountPage() {
    await this.page.waitForLoadState("networkidle");
    await super.seesDomVisible("#userSelect");
    await super.seesDomVisible("#currency");
    await super.seesDomVisible("button[type='submit']");
  }
}

export class ManagerRobotHands extends BaseHands {
  constructor(page: Page) {
    super(page);
  }

  async clickOnAddCustomerButton() {
    await this.page.waitForLoadState("networkidle");
    await super.clickOnDomElement('//button[@ng-click="addCust()"]');
  }

  async clickOnOpenAccountButton() {
    await this.page.waitForLoadState("networkidle");
    await super.clickOnDomElement('//button[@ng-click="openAccount()"]');
  }
  async clickOnCustomersButton() {
    await this.page.waitForLoadState("networkidle");
    await super.clickOnDomElement('//button[@ng-click="showCust()"]');
  }
  async inputFirstName(firstName: string) {
    await this.page.waitForLoadState("networkidle");
    await super.typeTextonDom("input[ng-model='fName']", firstName);
  }
  async inputLastName(lastName: string) {
    await this.page.waitForLoadState("networkidle");
    await super.typeTextonDom("input[ng-model='lName']", lastName);
  }
  async inputPostCode(postCode: string) {
    await this.page.waitForLoadState("networkidle");
    await super.typeTextonDom("input[ng-model='postCd']", postCode);
  }
  async clickOnAddCustomerConfirmButton() {
    await this.page.waitForLoadState("networkidle");
    await super.clickOnDomElement("button[type='submit']");
  }
  async acceptAlertMessage() {
    await this.page.waitForLoadState("networkidle");
    await super.acceptAlert();
  }
  async inputCustomerName() {
    await this.page.waitForLoadState("networkidle");
    // await super.clickOnDomElement("#userSelect");
    // await super.clickOnDomElement('option[value="6"]');
    await this.page.selectOption("#userSelect", { value: "6" });
  }
  async inputCurrency() {
    await this.page.waitForLoadState("networkidle");
    // await super.clickOnDomElement("#currency");
    // await super.clickOnDomElement('option[value="Rupee"]');
    await this.page.selectOption("#currency", { value: "Rupee" });
  }
  async clickOnProcessButton() {
    await this.page.waitForLoadState("networkidle");
    await super.clickOnDomElement("button[type='submit']");
  }
}
