const { NewComputerActions } = require('../actions/newComputerActions')
const { CommomActions } = require('../actions/commomActions')
const addComputerAction = new NewComputerActions()
const commomActions = new CommomActions()

When(/^the Add a new computer button is clicked$/, () => {
    addComputerAction.clickAddComputer();
});

When(/^input the computer specifications and click on the Create this Computer button$/, () => {
    addComputerAction.inputComputerName();
    commomActions.inputIntroduceDate();
    commomActions.inputDicontinuedDate();
    commomActions.selectCompany();
    addComputerAction.clickCreateComputer()
});

Then(/^a confirmation message will be displayed$/, () => {
    addComputerAction.checkMessage()
});