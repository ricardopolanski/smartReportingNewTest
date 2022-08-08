const { ComputerData } = require('../data/computerInfo')
const { CommomElements } = require('../pageObjects/commomElements')
const { DateFunction } = require('../data/dateFunctions')
const computerData = new ComputerData
const commomElements = new CommomElements
const dateFunction = new DateFunction

exports.CommomActions = class CommomActions{
    constructor(){
        this.deleleConfirmation = commomElements.confirmationMessage()
        this.introduceDate = dateFunction.getIntroduceDate()
        this.discontinuedDate = dateFunction.getDiscontinuedDate()
        this.companyName = computerData.getCompany();        
        this.confirmationMessage = commomElements.confirmationMessage()
    }

    accessWebSite = () => {
        cy.visit('/computers', {timeout: 10000});
        cy.request('/computers').then((response) => {
            expect(response.status).equal(200)
        })
        cy.viewport('macbook-13')
    }

    searchBtn = () => {
        cy.get(commomElements.searchBtn()).as('searchButton')
        cy.get('@searchButton').should('be.visible').and('be.empty').click()
    }

    searchBox = (computerName) => {
        cy.get(commomElements.searchElement()).as('searchBox')
        cy.get('@searchBox').should('be.visible').and('be.empty').type(computerName)
    }

    // checkMessage = () => {
    //     cy.get(this.deleleConfirmation).and('have.text', `Done !  Computer Acer Extensa 5220 has been deleted`)
    //         .and('have.css', 'background-color')
    //         .and('eq', 'rgb(238, 220, 148)')
    // }
    

    checkResults = (action) => {
        cy.get(commomElements.result()).invoke('text').then((text) => {
            cy.expect(text).to.equal(`${resultNumber(action)} computers found`)
        })
        function resultNumber(){
            if(action == 'delete'){
            return 4
        }else if(action == 'filter'){
            return 6
        }else if(action == 'edit'){
            cy.log('action')
            return 6
        }
    }
    }

    inputIntroduceDate = () => {
        cy.get('@introduced').type(this.introduceDate, {
            delay: 50
        }).should('have.value', this.introduceDate)
    }

    inputDicontinuedDate = () => {
        cy.get('@discontinued').type(this.discontinuedDate, {
            delay: 50
        }).should('have.value', this.discontinuedDate)
    }

    selectCompany = () => {
        cy.get('@company').select(this.companyName)
            .find('option:selected')
            .should('have.text', this.companyName)
            .and('have.value', 2)
    }

    checkFields = () => {
        cy.get(commomElements.computerNameField()).as('computerName').should('be.visible');
        cy.get(commomElements.introducedField()).as('introduced').should('be.visible')
        cy.get(commomElements.discontinuedField()).as('discontinued').should('be.visible')
        cy.get(commomElements.companyField()).as('company').should('be.visible')
        //cy.get('[class="btn primary"]').as('createComputer').should('be.visible')
    }

    selectComputer = (computerName) => {
        cy.get(commomElements.selectComputer()).find('td').contains(computerName).click()
    }

    checkMessage = (param, name) => {
        cy.get(this.confirmationMessage).and('have.text', swithMessage(param, name))
        .and('have.css', 'background-color')
        .and('eq', 'rgb(238, 220, 148)')

        function swithMessage(){
            if(param == true){
                return `Done !  Computer ${name} has been created`
            }else if(param == false){
                return `Done !  Computer ${name} has been updated`
            }else{
                
                cy.log('delete', name)
                return `Done !  Computer ${name} has been deleted`
            }
            
        }
    }

    // When(/^click on the computer name$/, () => {
//     cy.get('[class="computers zebra-striped"]').find('td').contains("Acer Extensa 5220").click()
// });
}