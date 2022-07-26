// Import necessary NPM modules
const inquirer = require('inquirer');
const fs = require('fs');

// Import classes
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');


// Import the helper function
const generateTemplate = require('./src/helper');


//Array of Manager questions
const managerQuestions = [
    // Name of manager
    {
        type: "input",
        message: "What is the name of the manager?",
        name: "name"
    },
    // Employee ID of the manager
    {
        type: "input",
        message: "What is the employee ID of the manager?",
        name: "id"
    },
    // Email address of the manager
    {
        type: "input",
        message: "What is manager's Email?",
        name: "email"
    },
    // Office number of the manager
    {
        type: "input",
        message: "What Office Number is the manager in charge of?",
        name: "officeNum"
    }
];

//array of Engineer Questions
const engineerQuestions = [
    // Name of Engineer
    {
        type: "input",
        message: "What is the name of the Engineer?",
        name: "name"
    },
    // Employee ID of the Engineer
    {
        type: "input",
        message: "What is the employee ID of the Engineer?",
        name: "id"
    },
    // Email address of the manager
    {
        type: "input",
        message: "What is Engineer's Email?",
        name: "email"
    },
    // Github profile of the engineer
    {
        type: "input",
        message: "What is the Engineer's GITHUB username?",
        name: "github"
    }
];

// Array of intern questions
const internQuestions = [
    // Name of Intern
    {
        type: "input",
        message: "What is the name of the Intern?",
        name: "name"
    },
    // Employee ID of the Intern
    {
        type: "input",
        message: "What is the employee ID of the Intern?",
        name: "id"
    },
    // Email address of the Intern
    {
        type: "input",
        message: "What is Intern's Email?",
        name: "email"
    },
    // School of the intern
    {
        type: "input",
        message: "What school is the Intern currently attending?",
        name: "school"
    }
];

// Array to add team members
const addQuestion = [
    {
        type: 'list',
        message: 'Enter what type of team memeber to add:',
        choices: ['Engineer', 'Intern', 'Done'],
        name: 'employeeType'
    }
]

// variables for generating card strings
let managerCard = '';
let engineerCard = '';
let internCard = '';

// Init function that begins the prompts
async function init() {
    console.log("Beginning Team Profile Generator.");

    //prompt user about manager information
    const managerData = await inquirer.prompt(managerQuestions);

    //generate the manager card
    const manager = new Manager(managerData.name, managerData.id, managerData.email, managerData.officeNum);
    managerCard = manager.generateCard();

    let continueAdding = true;
    while (continueAdding) {
        let addMemberData = await inquirer.prompt(addQuestion);
        let memberType = addMemberData.employeeType;

        switch (memberType) {
            case 'Engineer':
                let engineerData = await inquirer.prompt(engineerQuestions);
                let engineer = new Engineer(engineerData.name, engineerData.id, engineerData.email, engineerData.github);
                let engCardString = engineer.generateCard();
                engineerCard += engCardString;
                engineerCard += '\n';
                break;
            case 'Intern':
                let internData = await inquirer.prompt(internQuestions);
                let intern = new Intern(internData.name, internData.id, internData.email, internData.school);
                let intCardString = intern.generateCard();
                internCard += intCardString;
                internCard += '\n';
                break;
            case 'Done':
                continueAdding = false;
                break;
        }
    }

    let htmlTemplate = generateTemplate(managerCard, engineerCard, internCard);

    fs.writeFile('./dist/sampleHTML.html', htmlTemplate, (err) => {
        err ? console.log("err") : console.log("File created!");
    })

}

init();