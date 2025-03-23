class HomePage {
  elements = {
    mainContent: () => cy.get('[data-testid="home-page"]'),
    productsGrid: () => cy.get('.products-grid'),
    viewDetailsButton: (productId) => cy.get(`[data-testid="view-product-${productId}"]`),
    sortByPriceButton: () => cy.get('[data-testid="sort-price"]'),
    productNames: () => cy.get('.product-name')
  };

  visit() {
    cy.visit('/');
  }

  verifyMainContent() {
    this.elements.mainContent().should('be.visible');
  }

  verifyProductsGrid() {
    this.elements.productsGrid().should('be.visible');
  }

  clickViewDetails(productId) {
    this.elements.viewDetailsButton(productId).click();
  }

   clickSortByPrice() {
    this.elements.sortByPriceButton().click();
  }
}

export default new HomePage();
