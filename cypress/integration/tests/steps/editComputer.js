const { EditComputerActions } = require('../actions/editComputerActions')
const { CommonActions } = require('../actions/commonActions')
const { ComputerData } = require('../data/computerInfo')
const editComputerActions = new EditComputerActions()
const commonActions = new CommonActions()
const computerData = new ComputerData()

const computerName = computerData.editComputer()
const newComputer = false
const action = 'edit'


When(/^click on the computer name to be edited$/, () => {
	commonActions.selectComputer(computerName);
});

Then(/^will be listed computers that match$/, () => {
    commonActions.checkResults(action);
});

When(/^edit the computer and click on the Save this computer button$/, () => {
    editComputerActions.editComputer();
    commonActions.inputIntroduceDate();
    commonActions.inputDicontinuedDate()
    commonActions.selectCompany();
    editComputerActions.saveThisComputer();
});

Then(/^a edit confirmation message will be displayed$/, () => {
    cy.log(newComputer)
    commonActions.checkMessage(newComputer, computerName);
});