//import the Employee class
const Employee = require('./Employee');

// Engineer subclass
class Engineer extends Employee {
    //where github --> github username
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    //getter method for github
    getGithub() {
        return this.github;
    }

    //getter method for role
    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;