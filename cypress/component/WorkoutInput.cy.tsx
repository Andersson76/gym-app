//import React from "react";
import React from "react";
import WorkoutInput from "../../frontend/src/components/WorkoutInput";

describe("WorkoutInput Component", () => {
  it("renders the form and handles user input", () => {
    cy.mount(<WorkoutInput />);

    // Kontrollera att komponenten renderas korrekt
    cy.contains("Add New Workout").should("exist");
    cy.get('input[type="text"]').should("exist");
    cy.get("textarea").should("exist");
    cy.get("input[type='date']").should("exist");

    // Simulera användarinmatning
    cy.get('input[type="text"]').type("Leg Day");
    cy.get("textarea").type("Squats and lunges");
    cy.get("input[type='date']").type("2024-12-25");

    // Kontrollera att värden uppdateras korrekt
    cy.get('input[type="text"]').should("have.value", "Leg Day");
    cy.get("textarea").should("have.value", "Squats and lunges");
    cy.get("input[type='date']").should("have.value", "2024-12-25");

    // Simulera formulärinlämning
    cy.intercept("POST", `http://localhost:5004/workouts`, {
      statusCode: 200,
      body: { message: "Workout added successfully!" },
    }).as("addWorkout");

    cy.get("button[type='submit']").click();

    // Kontrollera att rätt anrop görs
    cy.wait("@addWorkout").its("request.body").should("deep.equal", {
      title: "Leg Day",
      description: "Squats and lunges",
      date: "2024-12-25",
    });

    // Kontrollera att fält nollställs efter inlämning
    cy.get('input[type="text"]').should("have.value", "");
    cy.get("textarea").should("have.value", "");
    cy.get("input[type='date']").should("have.value", "");
  });

  it("shows an alert if fields are empty", () => {
    cy.mount(<WorkoutInput />);

    // Försök att skicka formulär utan att fylla i fält
    cy.get("button[type='submit']").click();

    // Kontrollera att rätt alert visas
  });
});
