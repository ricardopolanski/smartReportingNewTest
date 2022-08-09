const { DeleteComputerElements } = require('../pageObjects/deleteComputerElements')
const { CommomElements } = require('../pageObjects/commomElements')
const deleteElements = new DeleteComputerElements
const commomElements = new CommomElements

exports.DeleteComputerActions = class DeleteComputerActions {
    constructor(){
        this.deleteBtn = deleteElements.delBtn();
    }

    clickBtnDelete = () => {
        cy.get(this.deleteBtn).should('be.visible').click()
    }
}


