import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import PaymentPage from '../../pages/PaymentPage';
import AddressPage from '../../pages/AddressPage';
import HomePage from '../../pages/HomePage';
import ProductPage from '../../pages/ProductPage';
import CartPage from '../../pages/CartPage';

Given('I am on the payment page', () => {
  HomePage.visit();
    HomePage.clickViewDetails(2);
    ProductPage.elements.quantitySelector().should('be.visible');
    ProductPage.clickAddToCart();
    CartPage.verifyCartItemCount(1);
    CartPage.clickCheckout();
    cy.fixture('address').then((testAddress) => {
        AddressPage.fillAddressForm(testAddress);
    });
    AddressPage.clickContinue();
});

Then('all payment input fields should be visible', () => {
  PaymentPage.verifyAllFieldsVisible();
});

When('I enter valid payment details', () => {
  cy.fixture('payment').then((paymentDetails) => {
    PaymentPage.fillPaymentForm(paymentDetails);
  });
});

When('I click "Place Order"', () => {
  PaymentPage.clickPlaceOrder();
});

Then('the order should be completed successfully', () => {
  cy.url().should('include', '/success');
  cy.contains('Thank You for Your Purchase!').should('be.visible');
});