import { BasePage } from "./basePage";

export class HomePage extends BasePage {
  static get url() {
    return "https://demoqa.com/automation-practice-form";
  }
  static get Fname() {
    return cy.get("#firstName");
  }
  static get Lname() {
    return cy.get("#lastName");
  }
  static get email() {
    return cy.get("#userEmail");
  }
  static get male() {
    return cy.get("#gender-radio-1");
  }
  static get number() {
    return cy.get("#userNumber");
  }
  static get DOB() {
    return cy.get("#dateOfBirthInput");
  }
  static get subjects() {
    return cy.get("#subjectsContainer");
  }
  static get hobbies() {
    return cy.get("#hobbies-checkbox-3");
  }
  static get picture() {
    return cy.get("#uploadPicture");
  }
  static get state() {
    return cy.get("#state");
  }
  static get city() {
    return cy.get("#city");
  }
  static get submit() {
    return cy.get("#submit");
  }
}