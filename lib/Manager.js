// Import the Employee parent class
const Employee = require('./Employee');

// Manager subclass
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    //getter method for role
    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;