exports.CommomElements = class CommomElements{
    constructor(){
        this.computerField = '[id="name"]';
        this.introduced = '[id="introduced"]'
        this.discontinued = '[id="discontinued"]';
        this.company = '[id="company"]'
        this.searchField = '[id="searchbox"]'
        this.select = '[class="computers zebra-striped"]'
        this.message = '[class="alert-message warning"]';
        this.searchButton = '[id="searchsubmit"]'
        this.listResult = '[id="main"] h1';
    }

    computerNameField = () => {
        return this.computerField
    }

    confirmationMessage = () => {
        return this.message
    }

    searchElement = () => {
        return this.searchField
    }

    selectComputer = () => {
        return this.select
    }

    result = () => {
        return this.listResult
    }

    introducedField = () => {
        return this.introduced
    }

    discontinuedField = () => {
        return this.discontinued
    }

    companyField = () => {
        return this.company
    }

    searchBtn = () => {
        return this.searchButton
    }
    
}

