import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import HomePage from '../../pages/HomePage';
import ProductPage from '../../pages/ProductPage';
import CartPage from '../../pages/CartPage';
import AddressPage from '../../pages/AddressPage';
import PaymentPage from '../../pages/PaymentPage';
import ProfilePage from '../../pages/ProfilePage';

let productId = "1";

Given('I am on the home page', () => {
  HomePage.visit();
});

When('I add product {string} to the cart with quantity {string}', (id, qty) => {
  productId = id;
  HomePage.clickViewDetails(id);
  ProductPage.changeQuantityTo(qty);
  ProductPage.clickAddToCart();
});

When('I proceed to checkout', () => {
  CartPage.clickCheckout();
});

When('I enter valid address information', () => {
  cy.fixture('address.json').then((data) => {
    AddressPage.fillAddressForm(data);
  });
});

When('I continue to payment', () => {
  AddressPage.clickContinue();
});

When('I enter valid payment information', () => {
  cy.fixture('payment.json').then((data) => {
    PaymentPage.fillPaymentForm(data);
  });
});

When('I place the order', () => {
  PaymentPage.clickPlaceOrder();
});

Then('I should see the order success message', () => {
  cy.url().should('include', '/success');
  cy.contains('Thank You for Your Purchase!').should('be.visible');
});

When('I visit the profile page', () => {
  cy.visit('/profile');
});

Then('I should see the order in my order history', () => {
  ProfilePage.verifyOrderHistory(productId);
});
