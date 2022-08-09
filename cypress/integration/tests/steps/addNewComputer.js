const { NewComputerActions } = require('../actions/newComputerActions')
const { CommonActions } = require('../actions/commonActions')
const { ComputerData } = require('../data/computerInfo')
const addComputerAction = new NewComputerActions()
const commonActions = new CommonActions()
const computerData = new ComputerData()

const computerName = computerData.getComputerName();
const newComputer = true

When(/^the Add a new computer button is clicked$/, () => {
    addComputerAction.clickAddComputer();
});

When(/^input the computer specifications and click on the Create this Computer button$/, () => {
    const addComputerAction = new NewComputerActions(computerName)
    addComputerAction.inputComputerName();
    commonActions.inputIntroduceDate();
    commonActions.inputDicontinuedDate();
    commonActions.selectCompany();
    addComputerAction.clickCreateComputer()
});

Then(/^a confirmation message will be displayed$/, () => {
    commonActions.checkMessage(newComputer, computerName)
});