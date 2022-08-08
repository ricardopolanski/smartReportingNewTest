const { CommomActions } = require('../../actions/commomActions')
const commomActions = new CommomActions

Given(/^the website is accessed$/, () => {
    commomActions.accessWebSite()
});

When(/^click on the button "Filter by name"$/, () => {
    commomActions.searchBtn()
});

Then(/^will be showed up four fields to edit$/, () => {
    commomActions.checkFields();
});

