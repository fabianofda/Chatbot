// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("abrirChatBote", () => {
  cy.viewport("iphone-xr");
  cy.visit("/");
  cy.get('button[aria-label="Open Chat"]').should("be.visible").click();
  cy.get(".rcb-chat-header").should("be.visible").and("have.text", "Sensei");
});

Cypress.Commands.add("verificaMensagem", (mensagemEsoerada, timeout = 4000) => {
  cy.contains(".rcb-bot-message", mensagemEsoerada, {
    timeout: timeout,
  }).should("be.visible");
});

Cypress.Commands.add("selecionarOpcao", (opcao) => {
  cy.contains(".rcb-options", opcao).click();
});

Cypress.Commands.add("enviarMensagem", (mensagem) => {
  cy.get("textarea[placeholder^='Escreva sua mensagem']").type(mensagem);
  cy.get(".rcb-send-button").click();
});