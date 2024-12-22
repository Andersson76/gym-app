import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("the user is on the homepage", () => {
  cy.visit("http://localhost:3000");
});

When("the user opens the Settings menu", () => {
  cy.get("[data-testid=settings-button]").click();
  cy.contains("Settings").should("be.visible");
});

When("toggles the setting", () => {
  cy.log("Toggling the setting");
  cy.get("[data-testid=toggle-setting]").click();
});

When("the user toggles the setting again", () => {
  cy.log("Toggling the setting again");
  cy.get("[data-testid=toggle-setting]").click();
});

When("reloads the page", () => {
  cy.reload();
});

Then("the setting should be {string}", (status: string) => {
  cy.get("[data-testid=setting-status]").should("have.text", status);
});

Then("the setting should still be {string}", (status: string) => {
  cy.get("[data-testid=setting-status]").should("have.text", status);
});
