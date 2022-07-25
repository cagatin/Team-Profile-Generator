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
    generateInternCard(intern) {
        let internCard = `
        <div class="card" style="width: 20rem;">
            <div class="card-header internHeader">
                <h2 class="card-title">Intern</h2>
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
                    <li class="list-group-item card-list-item"><span class="itemTitle">School:</span> ${this.school}
                    </li>
                </ul>
            </div>
        </div>
        `;
        return internCard;
    }
}

module.exports = Intern;