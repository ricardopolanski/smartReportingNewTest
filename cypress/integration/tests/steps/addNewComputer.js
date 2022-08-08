const { NewComputerActions } = require('../actions/newComputerActions')
const { CommomActions } = require('../actions/commomActions')
const { ComputerData } = require('../data/computerInfo')
const addComputerAction = new NewComputerActions()
const commomActions = new CommomActions()
const computerData = new ComputerData()

const computerName = computerData.getComputerName();
const newComputer = true

When(/^the Add a new computer button is clicked$/, () => {
    addComputerAction.clickAddComputer();
});

When(/^input the computer specifications and click on the Create this Computer button$/, () => {
    const addComputerAction = new NewComputerActions(computerName)
    addComputerAction.inputComputerName();
    commomActions.inputIntroduceDate();
    commomActions.inputDicontinuedDate();
    commomActions.selectCompany();
    addComputerAction.clickCreateComputer()
});

Then(/^a confirmation message will be displayed$/, () => {
    commomActions.checkMessage(newComputer, computerName)
});