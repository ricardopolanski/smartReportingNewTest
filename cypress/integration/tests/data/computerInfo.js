exports.ComputerData = class ComputerData {
    constructor(){
        this.filterComputerName = 'Ace';
        this.newComputerName = 'New Computer Smart Reporting';
        this.editComputerName = 'Acer Extensa 5220'
        this.selectComputerDelete = 'ASUS Eee PC 901';
        this.computerToDelete = 'ASUS'
        this.companyName = 'Thinking Machines'
    }

    getNameFilter = () => {
        return this.filterComputerName
    }

    getComputerName = () => {
        return this.newComputerName;
    }

    getDelComputer = () => {
        return this.computerToDelete
    }

    getIntroduceDate = () => {
        return this.introduceDate;
    }

    getDiscontinuedDate = () => {
        return this.discontunedDate;
    }

    getCompany = () => {
        return this.companyName;
    }    

    selectDelComputer = () => {
        return this.selectComputerDelete;
    }    

    editComputer = () => {
        return this.editComputerName
    }
}