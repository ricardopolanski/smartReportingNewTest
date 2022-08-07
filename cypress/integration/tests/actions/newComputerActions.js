const { ComputerData } = require('../data/computerInfo')
const { NewComputerElements } = require('../pageObjects/newComputerElements')
const { CommomElements } = require('../pageObjects/commomElements')
const computerData = new ComputerData
const newComputerElements = new NewComputerElements
const commomElements = new CommomElements


exports.NewComputerActions = class NewComputerActions {
    constructor(){
        this.introduceDate = computerData.getIntroduceDate()
        this.discontinuedDate = computerData.getDiscontinuedDate()
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
        cy.get(newComputerElements.computerfield()).type(this.computerName).should('have.value', this.computerName)
    }

    inputIntroduceDate = () => {
        cy.get('@introduced').type(this.introduceDate, {
            delay: 50
        }).should('have.value', this.introduceDate)
    }

    inputDicontinuedDate = () => {
        cy.get('@discontinued').type(this.discontinuedDate, {
            delay: 50
        }).should('have.value', this.discontinuedDate)
    }

    selectCompany = () => {
        cy.get('@company').select(this.companyName)
            .find('option:selected')
            .should('have.text', this.companyName)
            .and('have.value', 2)
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

