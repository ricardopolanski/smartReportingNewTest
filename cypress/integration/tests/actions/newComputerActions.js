const { ComputerData } = require('../data/computerInfo')
const { NewComputerElements } = require('../pageObjects/newComputerElements')
const { CommomElements } = require('../pageObjects/commomElements')
const { DateFunction } = require('../data/dateFunctions')
const computerData = new ComputerData
const newComputerElements = new NewComputerElements
const commomElements = new CommomElements
const dateFunction = new DateFunction


exports.NewComputerActions = class NewComputerActions {
    constructor(){
        this.name = computerData.getComputerName();
        this.introduceDate = dateFunction.getIntroduceDate()
        this.discontinuedDate = dateFunction.getDiscontinuedDate()
        this.computerName = computerData.getComputerName()
        this.companyName = computerData.getCompany();
        //this.getConfirmationsMsg = computerData.getConfirmationsMsg()
    }

    clickAddComputer = () => {
        try{
            cy.intercept({
                url: '/computers/new'
            }).as('new');
            cy.get(newComputerElements.addBtn()).as('newComputer').should('be.visible');
            cy.get('@newComputer').click();
            cy.wait('@new', {
                timeout: 5000
            }).its('response.statusCode').should('equal', 200);
        } catch (error) {
            console.log("New Page not loaded");
        }
    }

    inputComputerName = () => {
        cy.get('@computerName').type(this.name).should('have.value', this.name)
    }

    clickCreateComputer = () => {
            cy.intercept({
                url: '/computers',
                method: 'POST'
            }).as('redirectConfirmation')
            cy.get(newComputerElements.createBtn()).click()
            
            cy.wait('@redirectConfirmation', {
                timeout: 5000
            }).its('response.statusCode').should('equal', 303);
        }
}

