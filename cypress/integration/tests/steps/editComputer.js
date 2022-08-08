const { EditComputerActions } = require('../actions/editComputerActions')
const { CommomActions } = require('../actions/commomActions')
const editComputerActions = new EditComputerActions()
const commomActions = new CommomActions()


When(/^click on the computer name to be edited$/, () => {
	editComputerActions.selectComputer();
});

When(/^edit the computer and click on the Save this computer button$/, () => {
    editComputerActions.editComputer();
    commomActions.inputIntroduceDate();
    commomActions.inputDicontinuedDate()
    commomActions.selectCompany();
    editComputerActions.saveThisComputer();
});

Then(/^the message Done ! Computer ACE has been updated should be displayed$/, () => {
    editComputerActions.checkMessage();
});