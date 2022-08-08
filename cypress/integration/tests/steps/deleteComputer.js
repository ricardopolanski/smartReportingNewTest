const { DeleteComputerActions } = require('../actions/deleteComputerActions')
const { CommomActions } = require('../actions/commomActions')
const commomActions = new CommomActions()
const deleteComputerActions = new DeleteComputerActions()

const { ComputerData } = require('../data/computerInfo')
const computerData = new ComputerData()

const computerName = computerData.getDelComputer()
const selectComputer = computerData.selectDelComputer()
const action = 'delete'


When(/^type into Search Field the Computer name to be deleted$/, () => {
	commomActions.searchBox(computerName)
});


Then(/^will be listed computers to be deleted$/, () => {
	commomActions.checkResults(action)
});


When(/^click on the computer name to be deleted$/, () => {
    
	commomActions.selectComputer(selectComputer)
});


When(/^click on the Delete This Computer button$/, () => {
    deleteComputerActions.clickBtnDelete();
});

Then(/^a delete confirmation message will be displayed$/, () => {
    commomActions.checkMessage(null, selectComputer)
});