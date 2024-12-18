describe("Settings component -BDD", () => {
  beforeEach(() => {
    // Given: Användaren är på startsidan och vill öppna Settings
    cy.visit("http://localhost:3000");
  });

  it("Toggles the setting when the button is clicked", () => {
    // Given: Användaren öppnar Settings
    cy.get("[data-testid=settings-button]").click();
    cy.contains("Settings").should("be.visible");

    // When: Användaren klickar på knappen för att toggla inställningen
    cy.get("[data-testid=toggle-setting]").click();

    // Then: Inställningen ska ändras till "Enabled"
    cy.get("[data-testid=setting-status]").should("have.text", "Enabled");

    // When: Användaren klickar igen
    cy.get("[data-testid=toggle-setting]").click();

    // Then: Inställningen ska ändras till "Disabled"
    cy.get("[data-testid=setting-status]").should("have.text", "Disabled");
  });

  it("Persists the setting state correctly", () => {
    // Given: Användaren öppnar Settings
    cy.get("[data-testid=settings-button]").click();

    // When: Användaren aktiverar inställningen
    cy.get("[data-testid=toggle-setting]").click();

    // Then: Inställningen ska vara "Enabled"
    cy.get("[data-testid=setting-status]").should("have.text", "Enabled");

    // When: Sidan laddas om
    cy.reload();

    // Then: Inställningen ska fortfarande vara "Enabled"
    cy.get("[data-testid=settings-button]").click();
    cy.get("[data-testid=setting-status]").should("have.text", "Enabled");
  });
});
