function setIntroduceDate() {
    const date = require("dayjs")
    var introducedDate = date().format("YYYY-MM-DD")
    return introducedDate
}

function setDiscontinuedDate() {
    const date = require("dayjs")
    var discontinuedDate = date().add('10', 'years').format("YYYY-MM-DD")
    return discontinuedDate
}

exports.ComputerData = class ComputerData {
    constructor(){
        this.computerName = 'New computer Smart Reporting';
        this.companyName = 'Thinking Machines'
        this.introduceDate = setIntroduceDate()
        this.discontunedDate = setDiscontinuedDate()
        this.computerCreatedMsg = `Done !  Computer ${this.computerName} has been created`
    }

    getComputerName = () => {
        return this.computerName;
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
}