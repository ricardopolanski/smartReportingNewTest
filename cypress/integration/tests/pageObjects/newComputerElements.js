exports.NewComputerElements = class NewComputerElements {
    constructor(){
        this.addComputerBtn = '#add';
        this.createComputerBtn = '[class="btn primary"]';
    }

    addBtn = () => {
        return this.addComputerBtn
    }
    
    createBtn = () => {
        return this.createComputerBtn
    }
}

