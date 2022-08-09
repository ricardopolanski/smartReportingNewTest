const { CommonActions } = require('../../actions/commonActions')
const commonActions = new CommonActions

Given(/^the website is accessed$/, () => {
    commonActions.accessWebSite()
});

When(/^click on the button "Filter by name"$/, () => {
    commonActions.searchBtn()
});

Then(/^will be showed up four fields to edit$/, () => {
    commonActions.checkFields();
});

