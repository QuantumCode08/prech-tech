import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import HomePage from '../../pages/HomePage';
import ProductPage from '../../pages/ProductPage';
import CartPage from '../../pages/CartPage';

Given('I am on the home page', () => {
  HomePage.visit();
});

When('I click on "View Details" for product {string}', (productId) => {
  HomePage.clickViewDetails(productId);
});

Then('the product detail page should show product {string} with correct info', (productId) => {
  ProductPage.verifyProductDetails(productId);
});

Then('the quantity selector should be visible', () => {
  ProductPage.elements.quantitySelector().should('be.visible');
});

Then('the quantity should be set to {string}', (value) => {
  ProductPage.verifyQuantityIs(value);
});

When('I change the quantity to {string}', (value) => {
  ProductPage.changeQuantityTo(value);
});

Then('the "Add to Cart" button should be visible', () => {
  ProductPage.elements.addToCartButton().should('be.visible');
});

Then('the "Add to Cart" button should be enabled', () => {
  ProductPage.elements.addToCartButton().should('be.enabled');
});

When('I click the "Add to Cart" button', () => {
  ProductPage.clickAddToCart();
});

Then('the cart should contain {int} products', (count) => {
  CartPage.verifyCartItemCount(count);
});

Then('the product {string} should have quantity {string}', (productId, quantity) => {
  CartPage.verifyProductQuantity(productId, quantity);
});

When('I click the "Continue Shopping" button', () => {
  CartPage.clickContinueShopping();
});
