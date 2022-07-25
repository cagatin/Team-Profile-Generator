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
        return this.Id;
    }

    //getter method for email
    getEmail() {
        return this.email;
    }

    //getter method for role
    getRole() {
        return 'Manager';
    }
}

//exporrt the Employee class
module.exports = Employee;

// Manager subclass
class Engineer extends Employee {
    //where github --> github username
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    //getter method for role
    getRole() {
        return 'Engineer';
    }
}