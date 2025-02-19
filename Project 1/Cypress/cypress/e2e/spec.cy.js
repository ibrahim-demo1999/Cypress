describe("tests", () => {
  it("Cannot log in with username only", () => {
    cy.visit("http://localhost:3000/");
    cy.get('[data-cy="username-input"]').type("bash");
    cy.get('[data-cy="password-input"]').contains(/[a-zA-z]/);
    cy.get('[data-cy="submit-button"]').click();
  });
  it("Cannot log in with password only", () => {
    cy.visit("http://localhost:3000/");
    cy.get('[data-cy="password-input"]').type("password123");
    cy.get('[data-cy="username-input"]').contains(/[a-zA-z]/);
    cy.get('[data-cy="submit-button"]').click();
  });
  it(" Username must start and end with", () => {
    cy.visit("http://localhost:3000/");
    cy.get('[data-cy="username-input"]').type("bash");
    cy.get('[data-cy="username-input"]').contains("#bash#");
    cy.get('[data-cy="password-input"]').type("password123");
    cy.get('[data-cy="submit-button"]').click();
  });
  it("option 2 test", () => {
    cy.visit("http://localhost:3000/");
    cy.get("#dropdown").select("option2");
  });
  it("option 1 test", () => {
    cy.visit("http://localhost:3000/");
    cy.get("#dropdown").select("option2").select("option1");
  });
  it("checked ", () => {
    cy.visit("http://localhost:3000/");
    cy.get('[data-cy="agree-checkbox"]').check();
    cy.get("#checkbox-message").contains("You agreed to the terms!");
    cy.get('[data-cy="agree-checkbox"]').uncheck();
    cy.get("#checkbox-message").contains("You disagreed with the terms.");
  });
  it("2 click ", () => {
    cy.visit("http://localhost:3000/");
    cy.get('[data-cy="double-click-area"]').dblclick();
  });
  it("r click", () => {
    cy.visit("http://localhost:3000/");
    cy.get('[data-cy="right-click-area"]').rightclick();
  });
  it("drog drop", () => {
    cy.visit("http://localhost:3000/");
    cy.get('[data-cy="drag-item"]').drag("#drop-zone");
  });
  it("scrol", () => {
    cy.visit("http://localhost:3000/");
    cy.get("#scroll-container").scrollTo("bottom");
  });
});
