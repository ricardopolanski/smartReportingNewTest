const { ComputerData } = require('../data/computerInfo')
const { CommomElements } = require('../pageObjects/commomElements')
const { DateFunction } = require('../data/dateFunctions')
const { ResultMessages } = require('../data/messages')
const computerData = new ComputerData
const commomElements = new CommomElements
const dateFunction = new DateFunction


exports.CommomActions = class CommomActions{
    constructor(){
        this.introduceDate = dateFunction.getIntroduceDate()
        this.discontinuedDate = dateFunction.getDiscontinuedDate()
        this.introducedField = commomElements.introducedField();
        this.discontinuedField = commomElements.discontinuedField();
        this.companyName = computerData.getCompany();        
        this.confirmationMessage = commomElements.confirmationMessage()
        this.searchButton = commomElements.searchBtn();
        this.searchField = commomElements.searchElement();
        this.resultField = commomElements.result();
        this.computerNameField = commomElements.computerNameField()
        this.companyField = commomElements.companyField();
        this.selectComputerName = commomElements.selectComputer();
    }

    accessWebSite = () => {
        cy.visit('/computers', {timeout: 10000});
        cy.request('/computers').then((response) => {
            expect(response.status).equal(200)
        })
        cy.viewport('macbook-13')
    }

    searchBtn = () => {
        cy.get(this.searchButton).as('searchButton')
        cy.get('@searchButton').should('be.visible').and('be.empty').click()
    }

    searchBox = (computerName) => {
        cy.get(this.searchField).as('searchBox')
        cy.get('@searchBox').should('be.visible').and('be.empty').type(computerName)
    }

    checkResults = (action) => {
        const resultMessages = new ResultMessages(action)
        const resultMsg = resultMessages.resultNumber()
        cy.get(this.resultField).invoke('text').then((text) => {
            cy.expect(text).to.equal(resultMsg)
        })
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
        cy.get(this.computerNameField).as('computerName').should('be.visible');
        cy.get(this.introducedField).as('introduced').should('be.visible')
        cy.get(this.discontinuedField).as('discontinued').should('be.visible')
        cy.get(this.companyField).as('company').should('be.visible')
    }

    selectComputer = (computerName) => {
        cy.get(this.selectComputerName).find('td').contains(computerName).click()
    }

    checkMessage = (param, name) => {
        cy.log(param)
        const resultMessages = new ResultMessages(null, name, param)
        const msg = resultMessages.swithMessage()
        cy.get(this.confirmationMessage).and('have.text', msg)
        .and('have.css', 'background-color')
        .and('eq', 'rgb(238, 220, 148)')
    }
}