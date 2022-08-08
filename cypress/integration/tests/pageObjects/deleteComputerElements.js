exports.DeleteComputerElements = class deleteComputerElements {
    constructor(){
        this.deleteBtn = '[class="btn danger"]';
        this.searchBox = '[id="searchbox"]';
        this.listResult = '[id="main"] h1';
        this.computer2Delete = '[class="computers zebra-striped"]'
    }

    delBtn = () => {
        return this.deleteBtn
    }

    searchField = () => {
        return this.searchBox
    }

    result = () => {
        return this.listResult
    }

    deleteComputer = () => {
        return this.computer2Delete
    }
}

