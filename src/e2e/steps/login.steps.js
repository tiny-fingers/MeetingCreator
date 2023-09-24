'use strict';

const { Given, When, Then } = require('@cucumber/cucumber');
const { browser, element, by } = require('protractor');

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;


Then('the user should see input fields for username and password', async function () {
  const usernameInput = await element(by.css('input[name="username"]'));
  const passwordInput = await element(by.css('input[name="password"]'));
  expect(await usernameInput.isPresent()).to.be.true;
  expect(await passwordInput.isPresent()).to.be.true;
});

Then('the user should see a submit button with label {string}', async function (label) {
  const submitButton = await element(by.cssContainingText('button', label));
  expect(await submitButton.isPresent()).to.be.true;
});

Then('the user should enter {string} to the field {string}', async function (value, fieldName) {
  const inputField = await element(by.css(`input[name="${fieldName}"]`));
  await inputField.sendKeys(value);
});

Then('the user clicks on {string} button', async function (buttonLabel) {
  const button = await element(by.cssContainingText('button', buttonLabel));
  await button.click();
});

Then('the user should see an alert with text {string}', async function (alertText) {
  // const currentUrl = await browser.getCurrentUrl();
  // expect(currentUrl).to.equal('http://localhost:4200/login');

  const alertDialog = await browser.switchTo().alert();
  const alertMessage = await alertDialog.getText();
  expect(alertMessage).to.equal(alertText);
  await alertDialog.accept();
});
