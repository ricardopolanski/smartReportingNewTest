const { DeleteComputerElements } = require('../pageObjects/deleteComputerElements')
const deleteElements = new DeleteComputerElements()

exports.DeleteComputerActions = class DeleteComputerActions {
    constructor(){
        this.deleteBtn = deleteElements.delBtn();
    }

    clickBtnDelete = () => {
        cy.get(this.deleteBtn).should('be.visible').click()
    }
}


