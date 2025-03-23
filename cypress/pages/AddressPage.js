class AddressPage {
  elements = {
    firstName: () => cy.get('[data-testid="firstname-input"]'),
    email: () => cy.get('[data-testid="email-input"]'),
    phone: () => cy.get('[data-testid="phone-input"]'),
    street: () => cy.get('[data-testid="street-input"]'),
    city: () => cy.get('[data-testid="city-input"]'),
    state: () => cy.get('[data-testid="state-input"]'),
    zipCode: () => cy.get('[data-testid="zipcode-input"]'),
    country: () => cy.get('[data-testid="country-input"]'),
    continueToPayment: () => cy.get('[data-testid="continue-to-payment"]')
  };

  verifyAllFieldsVisible() {
    Object.values(this.elements).forEach(getFn => getFn().should('be.visible'));
  }

  fillAddressForm(address) {
    this.elements.firstName().type(address.firstName);
    this.elements.email().type(address.email);
    this.elements.phone().type(address.phone);
    this.elements.street().type(address.street);
    this.elements.city().type(address.city);
    this.elements.state().type(address.state);
    this.elements.zipCode().type(address.zipCode);
    this.elements.country().type(address.country);
  }

  clickContinue() {
    this.elements.continueToPayment().click();
  }
}

export default new AddressPage();
 