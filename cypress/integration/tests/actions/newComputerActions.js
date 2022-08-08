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
        this.introduceDate = dateFunction.getIntroduceDate()
        this.discontinuedDate = dateFunction.getDiscontinuedDate()
        this.computerName = computerData.getComputerName()
        this.companyName = computerData.getCompany();
        this.confirmationMessage = commomElements.confirmationMessage()
        this.getConfirmationsMsg = computerData.getConfirmationsMsg()
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
        cy.get('@computerName').type(this.computerName).should('have.value', this.computerName)
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

        checkMessage = () => {
            cy.get(this.confirmationMessage).and('have.text', this.getConfirmationsMsg)
            .and('have.css', 'background-color')
            .and('eq', 'rgb(238, 220, 148)')
        }
        
    }

