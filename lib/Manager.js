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

    //method for generating Manager card
    generateCard() {
        let managerCard = `
                <div class="card" style="width: 20rem;">
                    <div class="card-header managerHeader">
                        <h2 class="card-title">Manager</h2>
                    </div>
                    <div class="card-body">
                        <ul class="list-group card-list">
                            <li class="list-group-item card-list-item"><span class="itemTitle">Name:</span> ${this.name}
                            </li>
                            <li class="list-group-item card-list-item"><span class="itemTitle">ID Number:</span> ${this.id}
                            </li>
                            <li class="list-group-item card-list-item"><span class="itemTitle">Email:</span> <a
                                    href="mailto:${this.email}">${this.email}</a>
                            </li>
                            <li class="list-group-item card-list-item"><span class="itemTitle">Office Number:</span> ${this.officeNumber}
                            </li>
                        </ul>
                    </div>
                </div>
        `;
        return managerCard;
    }
}

module.exports = Manager;