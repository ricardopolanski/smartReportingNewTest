const { DateFunction } = require('../data/dateFunctions')
const dateFunction = new DateFunction

exports.ComputerData = class ComputerData {
    constructor(){
        this.newComputerName = 'New computer Smart Reporting';
        this.selectComputerDelete = 'Acer Extensa 5220';
        this.editComputerName = 'Acer Extensa 5220'
        this.companyName = 'Thinking Machines'
        this.computerCreatedMsg = `Done !  Computer ${this.newComputerName} has been created`
    }

    getComputerName = () => {
        return this.newComputerName;
    }

    getDelComputer = () => {
        return this.deleteComputerName
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

    getConfirmationsMsg = () => {
        return this.computerCreatedMsg;
    }    

    selectDelComputer = () => {
        return this.selectComputerDelete;
    }    

    editComputer = () => {
        return this.editComputerName
    }
}