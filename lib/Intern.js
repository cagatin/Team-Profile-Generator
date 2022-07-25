//import the Employee class
const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    //getter function for school
    getSchool() {
        return this.school;
    }

    //getter function for role
    getRole() {
        return 'Intern';
    }
}

module.exports = Intern;