import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import AddressPage from '../../pages/AddressPage';
import HomePage from '../../pages/HomePage';
import ProductPage from '../../pages/ProductPage';
import CartPage from '../../pages/CartPage';

Given('I am on the address page', () => {
  HomePage.visit();
  HomePage.clickViewDetails(1);
  ProductPage.elements.quantitySelector().should('be.visible');
  ProductPage.clickAddToCart();
  CartPage.verifyCartItemCount(1);
  CartPage.clickCheckout();
});

Then('all address input fields should be visible', () => {
  AddressPage.verifyAllFieldsVisible();
});

When('I enter valid address information', () => {
  cy.fixture('address').then((testAddress) => {
    AddressPage.fillAddressForm(testAddress);
  });
});

When('I click "Continue to Payment"', () => {
  AddressPage.clickContinue();
});

Then('I should be on the payment page', () => {
  cy.url().should('include', '/checkout/payment');
});