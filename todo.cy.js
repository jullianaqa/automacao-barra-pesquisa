/// <reference types="cypress" />

describe('Teste', () => {

  it('teste sucesso', () => {
    cy.viewport(1536, 960)
    cy.visit('https://blogdoagi.com.br/'); 
    cy.get('#search-open.search-open.search-btn').click();
    { multiple: true }
    cy.wait(2000); 

    cy.get('.desktop-search .search-form .search-field').click();
    { multiple: true }
    cy.wait(2000);
    cy.get('.desktop-search .search-form .search-field').type('agibank');
    cy.get('.desktop-search .search-form .search-submit').click(); 
  });

  it('teste falha', () => {
    cy.viewport(1536, 960)
    cy.visit('https://blogdoagi.com.br/'); 
    cy.get('#search-open.search-open.search-btn').click();
    { multiple: true }
    cy.wait(2000); 

    cy.get('.desktop-search .search-form .search-field').click();
    { multiple: true }
    cy.wait(2000);
    cy.get('.desktop-search .search-form .search-field').type('agibenqui');
    cy.get('.desktop-search .search-form .search-submit').click();
  });


  it('teste vazio', () => {
    cy.viewport(1536, 960)
    cy.visit('https://blogdoagi.com.br/'); 
    cy.get('#search-open.search-open.search-btn').click();
    { multiple: true }
    cy.wait(2000); 

    cy.get('.desktop-search .search-form .search-field').click();
    { multiple: true }
    cy.wait(2000);
    cy.get('.desktop-search .search-form .search-submit').click();
  });   
});