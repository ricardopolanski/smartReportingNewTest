const { CommomActions } = require('../actions/commomActions')
const commomActions = new CommomActions

Then(/^a list of computers will be displayed$/, () => {
    commomActions.checkResults();
});