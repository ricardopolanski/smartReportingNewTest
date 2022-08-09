const { DeleteComputerActions } = require('../actions/deleteComputerActions')
const { CommonActions } = require('../actions/commonActions')
const { ComputerData } = require('../data/computerInfo')
const commonActions = new CommonActions()
const deleteComputerActions = new DeleteComputerActions()
const computerData = new ComputerData()

const computerName = computerData.getDelComputer()
const selectComputer = computerData.selectDelComputer()
const action = 'delete'

When(/^type into Search Field the Computer name to be deleted$/, () => {
	commonActions.searchBox(computerName)
});

Then(/^will be listed computers to be deleted$/, () => {
	commonActions.checkResults(action)
});

When(/^click on the computer name to be deleted$/, () => {    
	commonActions.selectComputer(selectComputer)
});

When(/^click on the Delete This Computer button$/, () => {
    deleteComputerActions.clickBtnDelete();
});

Then(/^a delete confirmation message will be displayed$/, () => {
    commonActions.checkMessage(null, selectComputer)
});