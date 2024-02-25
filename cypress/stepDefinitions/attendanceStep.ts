/// <reference types="cypress" />

import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";

Given("I am on the Home page", () => {
  cy.visit("http://localhost:3000"); // assuming that the Home page is the root URL
});

Then("I should see the Attendance component", () => {
  cy.get('[data-testid="attendance"]').should("be.visible");
});

Then("I should see the Current Schedule component", () => {
  cy.get('[data-testid="schedule"]').should("be.visible");
});

Then("I see the 'Teacher' and 'Attendance' columns", () => {
  cy.get('[data-testid="attendance"]').get("th").contains("Teacher");
  cy.get('[data-testid="attendance"]').get("th").contains("Attendance");
});

Then(
  "I see the current schedule with 'Student', 'Subject' and 'Teacher' columns",
  () => {
    cy.get('[data-testid="schedule"]').get("th").contains("Student");
    cy.get('[data-testid="schedule"]').get("th").contains("Subject");
    cy.get('[data-testid="schedule"]').get("th").contains("Teacher");
  }
);

Then("I see the current present teacher", () => {
  cy.get('[data-testid="attendance"]')
    .get("tbody")
    .children(":nth-child(1)")
    .get("td:nth-child(1)")
    .contains("Professor Dumbledore")
    .get("td:nth-child(2)")
    .contains("Present");

  cy.get('[data-testid="attendance"]')
    .get("tbody")
    .children(":nth-child(1)")
    .get("td:nth-child(1)")
    .contains("Minerva McGonagall")
    .get("td:nth-child(2)")
    .contains("Present");

  cy.get('[data-testid="attendance"]')
    .get("tbody")
    .children(":nth-child(2)")
    .get("td:nth-child(1)")
    .contains("Rubeus Hagrid")
    .get("td:nth-child(2)")
    .contains("Present");
});

Then("I see the current schedule student with alocated teacher", () => {
  cy.get('[data-testid="schedule"]')
    .get("tbody")
    .children(":nth-child(1)")
    .get("td:nth-child(1)")
    .contains("Harry Potter")
    .get("td:nth-child(2)")
    .contains("Potions Master")
    .get("td:nth-child(3)")
    .contains("Horace Slughorn");

  cy.get('[data-testid="schedule"]')
    .get("tbody")
    .children(":nth-child(2)")
    .get("td:nth-child(1)")
    .contains("Hermione Granger")
    .get("td:nth-child(2)")
    .contains("Potions Master")
    .get("td:nth-child(3)")
    .contains("Rubeus Hagrid");

  cy.get('[data-testid="schedule"]')
    .get("tbody")
    .children(":nth-child(3)")
    .get("td:nth-child(1)")
    .contains("Ron Weasley")
    .get("td:nth-child(2)")
    .contains("Potions Master")
    .get("td:nth-child(3)")
    .contains("Severus Snape");
});

When(
  "I Update teacher attendance {int} to {string} from the dropdown",
  (teacherIndex: number, attendance: string) => {
    // cy.pause(); // pause execution

    cy.get(
      `[data-testid="teacher-${teacherIndex}"] > :nth-child(2) > .MuiInputBase-root > [role="combobox"]`
    ).click();
    cy.get(`[data-value='${attendance}']`)
      .click()
      .then(($el) => {
        cy.log($el.text()); // log the text of the element
      });
  }
);
Then(
  "The teacher {int} attendance status should be updated to {string}",
  (teacherIndex, attendanceStatus) => {
    // cy.pause(); // pause execution
    cy.get(
      `[data-testid="teacher-${teacherIndex}"] > :nth-child(2) > .MuiInputBase-root > [role="combobox"]`
    )
      .should("contain", attendanceStatus)
      .then(($el) => {
        cy.log($el.text()); // log the text of the element
      });
  }
);
Then(
  "The student {int} teacher should be updated to {string}",
  (studentIndex, teacherName) => {
    cy.get(`[data-testid="student-${studentIndex}"] > :nth-child(3)`).should(
      "contain",
      teacherName
    );
  }
);
