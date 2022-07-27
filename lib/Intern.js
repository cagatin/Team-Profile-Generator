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

    // Method to generate an intern card
    generateCard(intern) {
        let testInternCard = `
                <div class="card" style="width: 20rem;">
                    <div class="card-header internHeader">
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
                            <li class="list-group-item card-list-item"><span class="itemTitle">School:</span> ${this.getSchool()}
                            </li>
                        </ul>
                    </div>
                </div>
        `;
        return internCard;
    }
}

module.exports = Intern;