//import React from "react";
import React from "react";
import WorkoutInput from "../../frontend/src/components/WorkoutInput";

describe("WorkoutInput Component", () => {
  it("renders the form and handles user input", () => {
    cy.mount(<WorkoutInput />);

    cy.contains("Add New Workout").should("exist");
    cy.get('input[type="text"]').should("exist");
    cy.get("textarea").should("exist");
    cy.get("input[type='date']").should("exist");

    cy.get('input[type="text"]').type("Leg Day");
    cy.get("textarea").type("Squats and lunges");
    cy.get("input[type='date']").type("2024-12-25");

    cy.get('input[type="text"]').should("have.value", "Leg Day");
    cy.get("textarea").should("have.value", "Squats and lunges");
    cy.get("input[type='date']").should("have.value", "2024-12-25");
  });
});
