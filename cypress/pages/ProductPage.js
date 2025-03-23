class ProductPage {
  elements = {
    quantitySelector: () => cy.get('[data-testid="quantity-selector"]'),
    addToCartButton: () => cy.get('[data-testid="add-to-cart"]')
  };

  verifyProductDetails(productId) {
    cy.fixture('products.json').then((products) => {
      const product = products[productId];
      cy.contains(product.name).should('be.visible');
      cy.contains(product.price).should('be.visible');
      cy.contains(product.description).should('be.visible');
    });
  }

  verifyDefaultQuantity() {
    this.elements.quantitySelector().should('have.value', '1');
  }

  changeQuantityTo(value) {
    this.elements.quantitySelector().select(value);
  }

  verifyQuantityIs(value) {
    this.elements.quantitySelector().should('have.value', value);
  }

  verifyAddToCartButton() {
    this.elements.addToCartButton().should('be.visible').and('be.enabled');
  }

  clickAddToCart() {
    this.elements.addToCartButton().click();
  }
}

export default new ProductPage();
