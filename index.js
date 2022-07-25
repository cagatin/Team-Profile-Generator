// Import necessary NPM modules
const inquirer = require('inquirer');
const fs = require('fs');

// Import classes
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');


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
            let manager = new Manager(answers.managerName, answers.managerID, answers.managerEmail, answers.managerOfficeNum);
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
            let engineer = new Engineer(answers.engineerName, answers.engineerID, answers.engineerEmail, answers.engineerGithub);
        })
        .catch(err => console.log(err));
}