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

    //generate the engineer card
    generateCard() {
        let engineerCard = `
                <div class="card engineerCard" style="width: 20rem;">
                    <div class="card-header engineerHeader">
                        <h2 class="card-title">Engineer</h2>
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
                            <li class="list-group-item card-list-item"><span class="itemTitle">Github Account:</span> <a
                                    href="#">${this.github}</a>
                            </li>
                        </ul>
                    </div>
                </div>
        `
        return engineerCard;
    }
}

module.exports = Engineer;