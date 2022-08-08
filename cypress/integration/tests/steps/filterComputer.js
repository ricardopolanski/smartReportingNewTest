const { CommomActions } = require('../actions/commomActions')
const commomActions = new CommomActions
const { ComputerData } = require('../data/computerInfo')
const computerData = new ComputerData

const computerName = computerData.getNameFilter()
const action = 'filter'

And(/^type into Search Field the Computer name$/, () => {
    commomActions.searchBox(computerName);
});



Then(/^a list of computers will be displayed$/, () => {
    cy.log(action)
    commomActions.checkResults(action);
});