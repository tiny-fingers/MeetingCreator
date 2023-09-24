'use strict';

const { Given, When, Then } = require('@cucumber/cucumber');
const { browser, element, by } = require('protractor');

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;

Then('the user should see the title {string}', async function (title) {
    const pageTitle = await element(by.css('h1')).getText();
    expect(pageTitle).to.equal(title);
});

Then('the user should see the subtitle {string}', async function (subtitle) {
    const pageSubtitle = await element(by.css('h3')).getText();
    expect(pageSubtitle).to.equal(subtitle);
});

Then('the user should see a sign-in button', async function () {
    const signInButton = await element(by.cssContainingText('button', 'Sign in'));
    expect(await signInButton.isPresent()).to.be.true;
});

Then('the user clicks on the sign-in button', async function () {
  const signInButton = await element(by.cssContainingText('button', 'Sign in'));
  await signInButton.click();
});

Then('the user should see a Login button on the navigation', async function () {
  const loginButton = await element(by.cssContainingText('a', 'Login'));
  expect(await loginButton.isPresent()).to.be.true;
});

Then('the user clicks on the Login button', async function () {
  const loginButton = await element(by.cssContainingText('a', 'Login'));
  await loginButton.click();
});
