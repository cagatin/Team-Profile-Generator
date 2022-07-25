// Import necessary NPM modules
const Inquirer = require('inquirer');
const fs = require('fs');

// Import classes
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');


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
        );
}