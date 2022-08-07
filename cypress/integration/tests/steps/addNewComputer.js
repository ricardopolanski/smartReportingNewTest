import * as common from "./common/commonFunctions"
const { NewComputerActions } = require('../actions/newComputerActions');
const addComputerAction = new NewComputerActions();


var computerName

When(/^the Add a new computer button is clicked$/, () => {
    addComputerAction.clickAddComputer();
});

When(/^input the computer specifications and click on the Create this Computer button$/, () => {
    addComputerAction.inputComputerName();
    addComputerAction.inputIntroduceDate();
    addComputerAction.inputDicontinuedDate();
    addComputerAction.selectCompany();
    addComputerAction.clickCreateComputer()
});

Then(/^a confirmation message will be displayed$/, () => {
    addComputerAction.checkMessage()
});