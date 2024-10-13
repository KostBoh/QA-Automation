describe("Second test", () => {
  it("Visit mainpage LMS", () => {
    cy.visit("https://www.edu.goit.global/account/login");
    cy.get('[type="submit"]').should("have.text", "Log in");
    cy.get('[type="submit"]').should(
      "have.css",
      "background-color",
      "rgb(255, 107, 10)"
    );
  });
});
