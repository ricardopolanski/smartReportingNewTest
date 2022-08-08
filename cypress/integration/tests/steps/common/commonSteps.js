const { CommomActions } = require('../../actions/commomActions')
const commomActions = new CommomActions

Given(/^the website is accessed$/, () => {
    commomActions.accessWebSite()
});

And(/^type into Search Field the Computer name$/, () => {
    commomActions.searchBox();
});

// When(/^click on the computer name$/, () => {
//     cy.get('[class="computers zebra-striped"]').find('td').contains("Acer Extensa 5220").click()
// });

When(/^click on the button "Filter by name"$/, () => {
    commomActions.searchBtn()
});

Then(/^will be listed computers that match$/, () => {
    commomActions.checkResults();
});

Then(/^will be showed up four fields to edit$/, () => {
    commomActions.checkFields();
});

