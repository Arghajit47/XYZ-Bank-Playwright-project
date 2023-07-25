import { expect, BrowserContext, Page } from "@playwright/test";
import {
  HomeRobotEyes,
  HomeRobotHands,
  HomeRobotDependencies,
} from "../Robot/testRobotFiles/homePage";
import {
  ManagerRobotEyes,
  ManagerRobotHands,
} from "../Robot/testRobotFiles/managerPage";
import { test } from "../fixturesD/myFixtures";
import {
  CustomerRobotEyes,
  CustomerRobotHands,
} from "../Robot/testRobotFiles/customerPage";
import Fakerator from "fakerator";

var randomize = require("randomatic");

var fakerator = Fakerator();
const firstName = fakerator.names.firstNameM();
const lastName = fakerator.names.lastNameM();

const pincode = randomize("0", 6);
console.log(pincode);

export default function createTests() {
  test.describe("Visit XYZ Bank Website", async () => {
    // test.slow();
    test("Testcases to check the webportal ", async ({
      baseUrl,
      page,
      managerUrl,
      openAccountUrl,
    }) => {
      const homeRobotEyes = new HomeRobotEyes(page);
      const homeRobotHands = new HomeRobotHands(page);
      const homeRobotDependencies = new HomeRobotDependencies(page);
      const managerRobotEyes = new ManagerRobotEyes(page);
      const managerRobotHands = new ManagerRobotHands(page);
      const customerRobotEyes = new CustomerRobotEyes(page);
      const customerRobotHands = new CustomerRobotHands(page);
      test.slow();

      await test.step("001-Visit the website and check for expected elements", async () => {
        await homeRobotDependencies.visitHomePage(baseUrl);
        await homeRobotEyes.seesHomePageUrl(baseUrl);
        await homeRobotEyes.seesHomeButton();
        await homeRobotEyes.seesHeader();
        await homeRobotEyes.seesCustomerLoginButton();
        await homeRobotEyes.seesManagerLoginButton();
      });

      await test.step("002- Testing the functionality of Add Customer", async () => {
        await homeRobotHands.clickOnHomeButton();
        await homeRobotHands.clickOnManagerLoginButton();
        await managerRobotEyes.seesAddCustomerButton();
        await managerRobotEyes.seesHeader();
        await managerRobotEyes.seesOpenAccountButton();
        await managerRobotEyes.seesCustomersButton();
        await managerRobotHands.clickOnAddCustomerButton();
        await managerRobotEyes.seesManagerPageUrl(managerUrl);
        await managerRobotEyes.seesAddcustomerPage();
        await managerRobotHands.inputFirstName(firstName);
        await managerRobotHands.inputLastName(lastName);
        await managerRobotHands.inputPostCode(pincode);
        await managerRobotHands.clickOnAddCustomerConfirmButton();
        await managerRobotEyes.seesAlertMessage();
        await managerRobotHands.acceptAlertMessage();
      });
      await test.step("003- Testing the functionality of Open Account", async () => {
        await homeRobotHands.clickOnHomeButton();
        await homeRobotHands.clickOnManagerLoginButton();
        await managerRobotEyes.seesAddCustomerButton();
        await managerRobotEyes.seesHeader();
        await managerRobotEyes.seesOpenAccountButton();
        await managerRobotEyes.seesCustomersButton();
        await managerRobotHands.clickOnOpenAccountButton();
        await managerRobotEyes.seesManagerPageUrl(managerUrl);
        await managerRobotEyes.seesOpenAccountPage();
        await managerRobotHands.inputCustomerName();
        await managerRobotHands.inputCurrency();
        await managerRobotHands.clickOnProcessButton();
        await managerRobotEyes.seesAlertMessage();
        await managerRobotHands.acceptAlertMessage();
      });
      await test.step("001- Testing Customer Login", async () => {
        await homeRobotHands.clickOnHomeButton();
        await homeRobotHands.clickOnCustomerLoginButton();
        await customerRobotEyes.seesYourName();
        await customerRobotHands.inputYourName();
        await customerRobotEyes.seesLoginButton();
        await customerRobotHands.clickOnLoginButton();
        await customerRobotEyes.seesAcountPage();
        await customerRobotHands.clickOnTransactionsButton();
        await customerRobotHands.clickOnDepositButton();
        await customerRobotEyes.seesDepositPage();
        await customerRobotHands.inputAmount("10000");
        await customerRobotHands.clickOnTransactionConfirmButton();
        await customerRobotEyes.seesSuccessfullyDeposited();
        await customerRobotHands.inputAmount("10000");
        await customerRobotHands.clickOnTransactionConfirmButton();
        await customerRobotEyes.seesSuccessfullyWithdrawl();
        await customerRobotHands.clickOnTransactionsButton();
        await customerRobotEyes.seesTransactionPage();
        await customerRobotHands.clickOnResetButton();
        await customerRobotHands.clickOnLogOutButton();
      });
    });
  });
}
