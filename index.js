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
        name: "managerName"
    },
    // Employee ID of the manager
    {
        type: "input",
        message: "What is the employee ID of the manager?",
        name: "managerID"
    },
    // Email address of the manager
    {
        type: "input",
        message: "What is manager's Email?",
        name: "managerEmail"
    },
    // Office number of the manager
    {
        type: "input",
        message: "What Office Number is the manager in charge of?",
        name: "managerOfficeNum"
    }
];

//array of Engineer Questions
const engineerQuestions = [
    // Name of Engineer
    {
        type: "input",
        message: "What is the name of the Engineer?",
        name: "engineerName"
    },
    // Employee ID of the Engineer
    {
        type: "input",
        message: "What is the employee ID of the Engineer?",
        name: "engineerID"
    },
    // Email address of the manager
    {
        type: "input",
        message: "What is Engineer's Email?",
        name: "engineerEmail"
    },
    // Github profile of the engineer
    {
        type: "input",
        message: "What is the Engineer's GITHUB username?",
        name: "engineerGithub"
    }
];

// Array of intern questions
const internQuestions = [
    // Name of Intern
    {
        type: "input",
        message: "What is the name of the Intern?",
        name: "internName"
    },
    // Employee ID of the Intern
    {
        type: "input",
        message: "What is the employee ID of the Intern?",
        name: "internID"
    },
    // Email address of the Intern
    {
        type: "input",
        message: "What is Intern's Email?",
        name: "internEmail"
    },
    // School of the intern
    {
        type: "input",
        message: "What school is the Intern currently attending?",
        name: "internSchool"
    }
];

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
    const manager = new Manager(managerData.managerName, managerData.managerID, managerData.managerEmail, managerData.managerOfficeNum);
    managerCard = manager.generateCard();

    console.log(managerCard);
}

init();