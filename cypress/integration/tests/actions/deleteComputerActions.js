const { DeleteComputerElements } = require('../pageObjects/deleteComputerElements')
const { CommomElements } = require('../pageObjects/commomElements')
const { ComputerData } = require('../data/computerInfo')
const deleteElements = new DeleteComputerElements
const commomElements = new CommomElements
const computerData = new ComputerData

exports.DeleteComputerActions = class DeleteComputerActions {
    constructor(){
        this.deleleConfirmation = commomElements.confirmationMessage()
    }

    clickBtnDelete = () => {
        cy.get(deleteElements.delBtn()).should('be.visible').click()
    }
    
    inputComputerName = () => {
        cy.get(commomElements.searchElement()).type('ace')
    }
    
    checkResults = () => {
        cy.get(commomElements.result()).invoke('text').then((text) => {
        cy.expect(text).to.equal('6 computers found')
    })
    }

    deleteComputer = () => {
        cy.get(deleteElements.deleteComputer()).find('td').contains(computerData.selectDelComputer()).click()
    }

    checkDeleteMessage = () => {
        cy.get(this.deleleConfirmation).and('have.text', `Done !  Computer Acer Extensa 5220 has been deleted`)
            .and('have.css', 'background-color')
            .and('eq', 'rgb(238, 220, 148)')
    }
}


