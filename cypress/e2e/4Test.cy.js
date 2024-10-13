describe("Custom test", () => {
  it("Admin login", () => {
    cy.visit("https://www.edu.goit.global/account/login");
    cy.signIn("user888@gmail.com", "1234567890");
  });
  it("User login", () => {
    cy.visit("https://www.edu.goit.global/account/login");
    cy.signIn("nadia.tsomko.98@gmail.com", "Nadia_Tsomko78");
  });
  it("Manager login", () => {
    cy.visit("https://www.edu.goit.global/account/login");
    cy.signIn("mrdusty@duniakeliling.com", "mrdusty@duniakeliling.com");
  });
});
