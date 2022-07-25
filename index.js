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

// Function to prompt manager questions
function getManagerInfo() {
    inquirer
        .prompt(
            [
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
            ]
        )
        // After the user finishes the prompts, create a new Manager Object
        .then(answers => {
            console.log(answers);
            let manager = new Manager(answers.managerName, answers.managerID, answers.managerEmail, answers.managerOfficeNum);
            return manager;
        })
        .catch(err => console.log(err));
}

// Function to prompt Engineer Questions
function getEngineerInfo() {
    inquirer
        .prompt(
            [
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
            ]
        )
        // After the user finishes the prompts, create a new Engineer Object
        .then(answers => {
            console.log(answers);
            let engineer = new Engineer(answers.engineerName, answers.engineerID, answers.engineerEmail, answers.engineerGithub);
            return engineer;
        })
        .catch(err => console.log(err));
}

// Function to prompt Intern Questions
function getInternInfo() {
    inquirer
        .prompt(
            [
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
            ]
        )
        // After the user finishes the prompts, create a new Engineer Object
        .then(answers => {
            console.log(answers);
            let intern = new Intern(answers.internName, answers.internID, answers.internEmail, answers.internSchool);
        })
        .catch(err => console.log(err));
}


// Init function that begins the prompts
async function init() {
    console.log("Beginning Team Profile Generator.");
}

init();