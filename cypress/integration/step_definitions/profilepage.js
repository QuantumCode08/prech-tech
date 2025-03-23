import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import ProfilePage from '../../pages/ProfilePage';
import HomePage from '../../pages/HomePage';

Given('I am on the profile page', () => {
  HomePage.visit();
  ProfilePage.visit();
});

Then('the profile name should be {string}', (name) => {
  ProfilePage.verifyProfileName(name);
});

Then('the profile email should be {string}', (email) => {
  ProfilePage.verifyProfileEmail(email);
});

Then('I should see a message that no orders have been placed', () => {
  ProfilePage.verifyNoOrdersMessage();
});

Then('the "Start Shopping" button should be visible', () => {
  ProfilePage.verifyStartShoppingButtonVisible();
});

When('I click "Back to Home"', () => {
  ProfilePage.clickBackToHome();
});

Then('I should be on the home page', () => {
  cy.url().should('include', '/'); // Adjust if home URL is different
});
