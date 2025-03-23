class PaymentPage {
  elements = {
    cardHolderInput: () => cy.get('[data-testid="cardholder-input"]'),
    cardNumberInput: () => cy.get('[data-testid="card-number-input"]'),
    expiryDateInput: () => cy.get('[data-testid="expiry-input"]'),
    cvvInput: () => cy.get('[data-testid="cvv-input"]'),
    placeOrderButton: () => cy.get('[data-testid="complete-payment"]')
  };

  visit() {
    cy.visit('/checkout/payment');
  }

  verifyAllFieldsVisible() {
    this.elements.cardHolderInput().should('be.visible');
    this.elements.cardNumberInput().should('be.visible');
    this.elements.expiryDateInput().should('be.visible');
    this.elements.cvvInput().should('be.visible');
    this.elements.placeOrderButton().should('be.visible').and('be.enabled');
  }

  fillPaymentForm({ cardHolder, cardNumber, expiryDate, cvv }) {
    this.elements.cardHolderInput().type(cardHolder);
    this.elements.cardNumberInput().type(cardNumber);
    this.elements.expiryDateInput().type(expiryDate);
    this.elements.cvvInput().type(cvv);
  }

  clickPlaceOrder() {
    this.elements.placeOrderButton().click();
  }
}

export default new PaymentPage();
