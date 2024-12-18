describe("Settings component", () => {
  it("renders the settings component correctly", () => {
    cy.visit("http://localhost:3000");
    cy.get("[data-testid=settings-button]").click();
    cy.contains("Settings").should("be.visible");
  });

  it("allows user to toggle setting", () => {
    cy.get("[data-testid=toggle-setting]").click();
    cy.get("[data-testid=setting-status]").should("have.text", "Enabled");
  });
});
