/* eslint-disable no-unused-vars */
// 1. import the test and alias it as baseTest
// 2. Declare the type for the type myfixtureType. Can have multiple values
// 3. Create another var called fixture, using baseTest extend to the generic type
// myfixtureType
//
import { test as baseTest } from "@playwright/test";
import Fakerator from "fakerator";
var randomize = require("randomatic");

var fakerator = Fakerator();
const FirstName = fakerator.names.firstNameM();
const LastName = fakerator.names.lastNameM();
const pinCode = randomize("0", 6);

type myfixtureType = {
  baseUrl: string;
  managerUrl: string;
  openAccountUrl: string;
  customerUrl: string;
  firstName: string;
  lastName: string;
  pincode: any;
};

const fixture = baseTest.extend<myfixtureType>({
  baseUrl:
    "https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login",
  managerUrl:
    "https://www.globalsqa.com/angularJs-protractor/BankingProject/#/manager",
  openAccountUrl:
    "https://www.globalsqa.com/angularJs-protractor/BankingProject/#/manager/openAccount",
  customerUrl:
    "https://www.globalsqa.com/angularJs-protractor/BankingProject/#/customer",
  firstName: FirstName,
  lastName: LastName,
  pincode: pinCode,
});
// This fixture is the actual "test" from playwright test (line number 2)
export const test = fixture;
export const assert = fixture.expect;
