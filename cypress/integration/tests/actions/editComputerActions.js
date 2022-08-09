const { ComputerData } = require('../data/computerInfo')
const { CommomElements } = require('../pageObjects/commomElements')
const { EditComputerElements } = require('../pageObjects/editComputerElements')
const { DateFunction } = require('../data/dateFunctions')
const computerData = new ComputerData
const commomElements = new CommomElements
const editElements = new EditComputerElements
const dateFunction = new DateFunction

exports.EditComputerActions = class EditComputerActions {
    constructor(){
        this.computerName = computerData.editComputer();
    }
    
    // selectComputer = () => {
    //     cy.get(editElements.selectComputer()).as('computerName').find('td').contains(computerData.editComputer()).click()
    // }

    editComputer = () => {
        
        cy.get(commomElements.computerNameField()).type('{selectall}').type(this.computerName, {
            delay: 50
        }).should('have.value', this.computerName)
    }

    // setIntroduceDate = () => {
    //     cy.get(editElements.introcucedField()).type(dateFunction.getIntrocudeDate(), {
    //         delay: 50
    //     }).should('have.value', dateFunction.getIntrocudeDate())

    // }

    // setDiscontinedDate = () => {
    //     cy.get(editElements.dicontinuedField()).type(dateFunction.getDiscontinuedDate(), {
    //         delay: 50
    //     }).should('have.value', dateFunction.getDiscontinuedDate())
        
    // }

    // selectCompany = () => {
    //     cy.get(editElements.companySelect()).select('Thinking Machines')
    //     .find('option:selected')
    //     .should('have.text', 'Thinking Machines')
    //     .and('have.value', 2)
    // }

    saveThisComputer = () => {
        cy.intercept({
            url: '/computers/331',
            method: 'POST'
        }).as('redirectConfirmation')
        cy.get(editElements.save()).as('savebutton').should('be.visible').click()
        cy.wait('@redirectConfirmation', {
            timeout: 5000
        }).its('response.statusCode').should('equal', 303);
    }
}

