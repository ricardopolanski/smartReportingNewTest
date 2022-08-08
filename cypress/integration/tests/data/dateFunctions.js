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

exports.DateFunction = class DateFunction{
    constructor(){
        this.introducedDate = setIntroduceDate();
        this.discontinuedDate = setDiscontinuedDate();
    }

    getIntroduceDate = () => {
        return this.introducedDate
    }

    getDiscontinuedDate = () => {
        return this.discontinuedDate
    }
}