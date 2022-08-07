// Then(/^will be showed up four fields to edit$/, () => {
//     cy.get('[id="name"]').as('computerName').should('be.visible')
//     cy.get('[id="introduced"]').as('introduced').should('be.visible')
//     cy.get('[id="discontinued"]').as('discontinued').should('be.visible')
//     cy.get('[id="company"]').as('company').should('be.visible')
//     cy.get('[class="btn primary"]').as('createComputer').should('be.visible')
// });

// Given(/^the website is accessed$/, () => {
//     cy.visit('/computers', {timeout: 10000});
//     cy.request('/computers').then((response) => {
//         expect(response.status).equal(200)
//     })
//     cy.viewport('macbook-13')
// });

// And(/^type into Search Field the Computer name$/, () => {
//     cy.get('[id="searchbox"]').as('searchBox')
//     cy.get('@searchBox').should('be.visible').and('be.empty').type('ACE')
// });

// When(/^click on the computer name$/, () => {
//     cy.get('[class="computers zebra-striped"]').find('td').contains("Acer Extensa 5220").click()
// });

