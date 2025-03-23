import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import HomePage from '../../pages/HomePage';
import ProductPage from '../../pages/ProductPage';
import CartPage from '../../pages/CartPage';

Given('I am on the home page', () => {
  HomePage.visit();
});

When('I click on "View Details" for product', () => {
  HomePage.clickViewDetails(productId);
});

When('I change the quantity to {string}', (value) => {
  ProductPage.changeQuantityTo(value);
});

When('I click the "Add to Cart" button', () => {
  ProductPage.clickAddToCart();
});

Then('I should be on the cart page', () => {
  CartPage.verifyOnCartPage();
});

Then('the cart should contain {int} product', (count) => {
  CartPage.verifyCartItemCount(count);
});

When('I remove product {string} from the cart', (productId) => {
  CartPage.removeProduct(productId);
});

When('I click the "Proceed to Checkout" button', () => {
  CartPage.clickCheckout();
});

Then('I should be on the address page', () => {
  cy.url().should('include', '/checkout/address');
});
