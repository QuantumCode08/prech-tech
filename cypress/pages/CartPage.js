class CartPage {
  elements = {
    itemQuantity: (productId) => cy.get(`[data-testid="quantity-${productId}"]`),
    continueShoppingBtn: () => cy.get('[data-testid="continue-shopping"]'),
    cartItems: () => cy.get('.cart-item'),
    removeButton: (productId) => cy.get(`[data-testid="remove-${productId}"]`),
    checkoutButton: () => cy.get('[data-testid="proceed-to-checkout"]')
  };

   verifyProductQuantity(productId, expectedQuantity) {
    this.elements.itemQuantity(productId).should('contain', expectedQuantity);
  }

  clickContinueShopping() {
    this.elements.continueShoppingBtn().should('be.visible').click();
  }

  verifyCartItemCount(count) {
    this.elements.cartItems().should('have.length', count);
  }
  removeProduct(productId) {
    this.elements.removeButton(productId).click();
  }

  clickCheckout() {
    this.elements.checkoutButton().click();
  }
  verifyOnCartPage() {
  cy.url().should('include', '/cart');
}
}

export default new CartPage();
