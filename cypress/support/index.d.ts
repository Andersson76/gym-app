declare namespace Cypress {
  interface Chainable {
    customCommand(arg: string): Chainable<void>;
  }
}
