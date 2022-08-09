[![Smart Reporting Challenge](https://github.com/ricardopolanski/smartReportingNewTest/actions/workflows/main.yml/badge.svg)](https://github.com/ricardopolanski/smartReportingNewTest/actions/workflows/main.yml)

<H1>How to install and run automated Smart Reporting Challenge test</h1>

<h3>Requirements</h3>

- [NodeJS](https://nodejs.org/en/download/ "NodeJS")

<h3>Steps to execute</h3>

- Clone this repository to your local computer using the following URL: https://github.com/ricardopolanski/smartReportingNewTest.git
- Run the following comands:

	- Install dependencies
		- npm i

	- Run the test on openMode
		- npx cypress open

	- Run the test on runMode
		- npx cypress run


<h3>About the project</h3>

The project was developed using [Cypress](https://www.npmjs.com/package/cypress "Cypress") Framework and [Gherkin Syntax](https://cucumber.io/docs/gherkin/ "Gherkin Syntax").
Was writen four scenarios as following:
  1. Add Computers
  2. Delete Computers
  3. Edit Computers
  4. Filter Computer by name
  
<h3>Project Structure</h3>

<pre>
📂---.github
|   \📂---workflows
|         📜 main.yml			# Git Action Config file
|
📂---cypress
    |   .gitignore
    |
    📂---fixtures
    |       example.json
    |
    📂---integration
    |   \📂---tests
    |      \📂---actions				# Test Actions
    |       |   📜  commomActions.js
    |       |   📜  deleteComputerActions.js
    |       |   📜  editComputerActions.js
    |       |   📜  newComputerActions.js
    |       |
    |       📂---data					# Auxiliar Information
    |       |   📜  computerInfo.js
    |       |   📜  dateFunctions.js
    |       |
    |       📂---features				# Gherkin features
    |       |   📜   addNewComputer.feature
    |       |   📜   deleteComputer.feature
    |       |   📜   editComputer.feature
    |       |   📜   filterComputer.feature
    |       |
    |       📂---pageObjects			# Page Elements
    |       |   📜   commomElements.js
    |       |   📜   deleteComputerElements.js
    |       |   📜   editComputerElements.js
    |       |   📜   newComputerElements.js
    |       |
    |       📂---steps					# Steps Definitions
	|           📜   commonSteps.js
    |           📜   addNewComputer.js
    |           📜   deleteComputer.js
    |           📜   editComputer.js
    |           📜   filterComputer.js
    |                            
    |

</pre>

