const { CommonActions } = require('../actions/commonActions')
const { ComputerData } = require('../data/computerInfo')
const commonActions = new CommonActions
const computerData = new ComputerData

const computerName = computerData.getNameFilter()
const action = 'filter'

And(/^type into Search Field the Computer name$/, () => {
    commonActions.searchBox(computerName);
});

Then(/^a list of computers will be displayed$/, () => {
    commonActions.checkResults(action);
});