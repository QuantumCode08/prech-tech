class ProfilePage {
  elements = {
    profilevisit: () => cy.get('[data-testid="nav-to-profile"]'),
    profileName: () => cy.get('[data-testid="profile-name"]'),
    profileEmail: () => cy.get('[data-testid="profile-email"]'),
    noOrdersMessage: () => cy.get('[data-testid="no-orders"] p'),
    startShoppingButton: () => cy.get('[data-testid="start-shopping"]'),
    backToHomeButton: () => cy.get('[data-testid="back-to-home"]'),
    orderHistory: () => cy.get('[data-testid="orders-list"]'),
  };

  visit() {
    this.elements.profilevisit().should('be.visible').click();
  }

  verifyProfileName(expectedName) {
    this.elements.profileName().should('contain', expectedName);
  }

  verifyProfileEmail(expectedEmail) {
    this.elements.profileEmail().should('contain', expectedEmail);
  }

  verifyNoOrdersMessage() {
    this.elements.noOrdersMessage().should('contain', "You haven't placed any orders yet.");
  }

  verifyStartShoppingButtonVisible() {
    this.elements.startShoppingButton().should('be.visible');
  }

  clickBackToHome() {
    this.elements.backToHomeButton().click();
  }
  verifyOrderHistory(productId) {
    this.elements.orderHistory().should('be.visible');
  }
}

export default new ProfilePage();
