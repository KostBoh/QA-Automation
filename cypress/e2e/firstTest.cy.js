describe("Our first test block", () => {
  it("Test visiting site LMS", () => {
    cy.visit("https://www.edu.goit.global/account/login");

    cy.get("#user_email").type("user888@gmail.com");

    cy.get("#user_password").type("1234567890");

    cy.get(".next-1jphuq5").click();
  });
});
