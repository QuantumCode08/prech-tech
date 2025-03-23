import { Given, Then } from 'cypress-cucumber-preprocessor/steps';
import HomePage from '../../pages/HomePage';
import ProductPage from "../../pages/ProductPage"

Given('I am on the homepage', () => {
    HomePage.visit();
});

Then('I should see the main content', () => {
    HomePage.verifyMainContent();
});

Then('I should see the full list of products', () => {
    HomePage.verifyProductsGrid();
});

When('I click "View Details" for product {string}', (productId) => {
  HomePage.clickViewDetails(productId);
});

Then('the product detail page should show product {string} with correct info', (productId) => {
  ProductPage.verifyProductDetails(productId);
});

When('I sort products by price', () => {
  HomePage.clickSortByPrice();
});

Then('the products should be sorted by price in ascending order', () => {
  HomePage.verifyProductsSortedByPrice('desc');
});

Then('the products should be sorted by price in descending order', () => {
  HomePage.verifyProductsSortedByPrice('asc');
});