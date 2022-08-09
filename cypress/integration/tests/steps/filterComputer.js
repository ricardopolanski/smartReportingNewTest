const { CommomActions } = require('../actions/commomActions')
const { ComputerData } = require('../data/computerInfo')
const commomActions = new CommomActions
const computerData = new ComputerData

const computerName = computerData.getNameFilter()
const action = 'filter'

And(/^type into Search Field the Computer name$/, () => {
    commomActions.searchBox(computerName);
});

Then(/^a list of computers will be displayed$/, () => {
    commomActions.checkResults(action);
});