import "@cypress/code-coverage/support";

declare namespace Cypress {
  interface Chainable {
    customCommand(arg: string): Chainable<void>;
  }
}
