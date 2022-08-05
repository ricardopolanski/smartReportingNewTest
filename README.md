<<<<<<< HEAD
<H1>How to install and run automated Smart Reporting Challenge test</h1>

<h3>Requirements</h3>

- [NodeJS](https://nodejs.org/en/download/ "NodeJS")

<h3>Steps to execute</h3>

- Clone this repository to your local computer using the following URL: https://github.com/ricardopolanski/smart_reporting_challenge.git
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
├───📂integration
│   └───📂tests
│       ├───📂features                              # Gherkin features
│       │       ┗📜addNewComputer.feature  
│       │       ┣📜deleteComputer.feature
│       │       ┣📜editComputer.feature
│       │       ┗📜filterComputer.feature
│       │
│       └───📂steps                                 # Steps Definitions
│           │   ┗📜addNewComputer.js
│           │   ┣📜deleteComputer.js
│           │   ┣📜editComputer.js
│           │   ┗ 📜filterComputer.js
│           │
│           └───📂common                            # Common Steps Definitions
│                   ┗ 📜commonFunctions.js            # Common Functions
│                   ┗ 📜commonSteps.js                # Common Steps
</pre>
=======
# smart_reporting_challenge
>>>>>>> ec1fdf07bcf54199e12ba574c96b5580e6ae63a4
