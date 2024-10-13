describe("Test scroll", () => {
  it("scrollIntoView test", () => {
    cy.visit("https://www.edu.goit.global/account/login");

    cy.get("#user_email").type("user888@gmail.com");

    cy.get("#user_password").type("1234567890");

    cy.get("[type='submit']").click();

    cy.get(".MuiGrid-grid-md-5 > .e1dapi390")
      .scrollIntoView()
      .should("be.visible");
  });
});
