const { DeleteComputerElements } = require('../pageObjects/deleteComputerElements')
const { CommomElements } = require('../pageObjects/commomElements')
const deleteElements = new DeleteComputerElements
const commomElements = new CommomElements

exports.DeleteComputerActions = class DeleteComputerActions {
    constructor(){
        //this.deleleConfirmation = commomElements.confirmationMessage()
    }

    clickBtnDelete = () => {
        cy.get(deleteElements.delBtn()).should('be.visible').click()
    }
    
    // checkDeleteMessage = () => {
    //     cy.get(this.deleleConfirmation).and('have.text', `Done !  Computer Acer Extensa 5220 has been deleted`)
    //         .and('have.css', 'background-color')
    //         .and('eq', 'rgb(238, 220, 148)')
    // }
}


