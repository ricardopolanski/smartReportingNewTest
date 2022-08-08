const { DeleteComputerActions } = require('../actions/deleteComputerActions')
const delComputerActions = new DeleteComputerActions()

And(/^click on the computer name to be deleted$/, () => {
    delComputerActions.deleteComputer();
});


When(/^click on the Delete This Computer button$/, () => {
    delComputerActions.clickBtnDelete();
});

Then(/^a delete confirmation message will be displayed$/, () => {
    delComputerActions.checkDeleteMessage();
});
