exports.CommomElements = class CommomElements{
    constructor(){
        this.searchField = '[id="searchbox"]'
        this.select = '[class="computers zebra-striped"]'
        this.message = '[class="alert-message warning"]';
        this.searchBtn = '[id="searchsubmit"]'
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
    
}

