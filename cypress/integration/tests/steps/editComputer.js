const { EditComputerActions } = require('../actions/editComputerActions')
const { CommomActions } = require('../actions/commomActions')
const { ComputerData } = require('../data/computerInfo')
const editComputerActions = new EditComputerActions()
const commomActions = new CommomActions()
const computerData = new ComputerData()

const computerName = computerData.editComputer()
const newComputer = false
const action = 'edit'


When(/^click on the computer name to be edited$/, () => {
	commomActions.selectComputer(computerName);
});

Then(/^will be listed computers that match$/, () => {
    commomActions.checkResults(action);
});

When(/^edit the computer and click on the Save this computer button$/, () => {
    editComputerActions.editComputer();
    commomActions.inputIntroduceDate();
    commomActions.inputDicontinuedDate()
    commomActions.selectCompany();
    editComputerActions.saveThisComputer();
});

Then(/^a edit confirmation message will be displayed$/, () => {
    cy.log(newComputer)
    commomActions.checkMessage(newComputer, computerName);
});