exports.NewComputerElements = class NewComputerElements {
    constructor(){
        this.addComputerBtn = '#add';
        //this.newComputerField = '[id="name"]';
        //this.introcuced = '[id="introduced"]';
        //this.dicontinued = '[id="discontinued"]';
        //this.companyDropDown = '[id="company"]';
        this.createComputerBtn = '[class="btn primary"]';
    }

    addBtn = () => {
        return this.addComputerBtn
    }
    
    // computerfield = () => {
    //     return this.newComputerField
    // }
    
    // introcucedField = () => {
    //     return this.introcuced
    // }
    
    // dicontinuedField = () => {
    //     return this.dicontinued
    // }
    
    // companySelect = () => {
    //     return this.companyDropDown
    // }
    
    createBtn = () => {
        return this.createComputerBtn
    }
}

