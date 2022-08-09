exports.ResultMessages = class ResultMessages{
    constructor(action, name, param){
        this.action = action
        this.name = name
        this.param = param
    }
    resultNumber(){
        if(this.action == 'delete'){
            return '4 computers found'
        }else if(this.action == 'filter'){
            return '6 computers found'
        }else if(this.action == 'edit'){
            cy.log('action')
            return '6 computers found'
        }
    }

    swithMessage(){
        if(this.param == true){
            return `Done !  Computer ${this.name} has been created`
        }else if(this.param == false){
            return `Done !  Computer ${this.name} has been updated`
        }else{
            return `Done !  Computer ${this.name} has been deleted`
        }
}

}
