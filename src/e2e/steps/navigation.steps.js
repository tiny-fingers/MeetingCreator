'use strict';

const { Given, When, Then } = require('@cucumber/cucumber');
const { browser, element, by } = require('protractor');

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;


Given('the user is on the landing page', async function () {
  await browser.get('http://localhost:4200/');
});

Given('the user is on the login page', async function () {
  await browser.get('http://localhost:4200/login');
});

Then('the user is redirected to login page', async function () {
  const currentUrl = await browser.getCurrentUrl();
  expect(currentUrl).to.equal('http://localhost:4200/login');
});

Then('the user is redirected to dashboard page', async function () {
  const currentUrl = await browser.getCurrentUrl();
  expect(currentUrl).to.equal('http://localhost:4200/dashboard');
});


