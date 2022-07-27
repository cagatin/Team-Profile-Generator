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

    //getter method for office number
    getOfficeNumber() {
        return this.officeNumber;
    }

    //method for generating Manager card
    generateCard() {
        let managerCard = `
                <div class="card" style="width: 20rem;">
                    <div class="card-header managerHeader">
                        <h2 class="card-title">${this.getRole()}</h2>
                    </div>
                    <div class="card-body">
                        <ul class="list-group card-list">
                            <li class="list-group-item card-list-item"><span class="itemTitle">Name:</span> ${this.getName()}
                            </li>
                            <li class="list-group-item card-list-item"><span class="itemTitle">ID Number:</span> ${this.getId()}
                            </li>
                            <li class="list-group-item card-list-item"><span class="itemTitle">Email:</span> <a
                                    href="mailto:${this.getEmail()}">${this.getEmail()}</a>
                            </li>
                            <li class="list-group-item card-list-item"><span class="itemTitle">Office Number:</span> ${this.getOfficeNumber()}
                            </li>
                        </ul>
                    </div>
                </div>
        `;
        return managerCard;
    }
}

module.exports = Manager;