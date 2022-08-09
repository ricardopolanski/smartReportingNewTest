const { ComputerData } = require('../data/computerInfo')
const { CommomElements } = require('../pageObjects/commomElements')
const { EditComputerElements } = require('../pageObjects/editComputerElements')
const computerData = new ComputerData
const commomElements = new CommomElements
const editElements = new EditComputerElements

exports.EditComputerActions = class EditComputerActions {
    constructor(){
        this.computerName = computerData.editComputer();
        this.computerNameField = commomElements.computerNameField();
        this.btnSave = editElements.save();
    }

    editComputer = () => {
        
        cy.get(this.computerNameField).type('{selectall}').type(this.computerName, {
            delay: 50
        }).should('have.value', this.computerName)
    }
    
    saveThisComputer = () => {
        cy.intercept({
            url: '/computers/331',
            method: 'POST'
        }).as('redirectConfirmation')
        cy.get(this.btnSave).as('savebutton').should('be.visible').click()
        cy.wait('@redirectConfirmation', {
            timeout: 5000
        }).its('response.statusCode').should('equal', 303);
    }
}

