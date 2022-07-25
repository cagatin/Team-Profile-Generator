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
}


// Manager subclass
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
}