// Employee Parent Class
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    //getter method for name
    getName() {
        return this.name;
    }

    //getter method for id
    getId() {
        return this.id;
    }

    //getter method for email
    getEmail() {
        return this.email;
    }

    //getter method for role
    getRole() {
        return 'Employee';
    }
}

//exporrt the Employee class
module.exports = Employee;
