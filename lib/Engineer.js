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
                            <li class="list-group-item card-list-item"><span class="itemTitle">Github Account:</span> <a
                                    href="https://github.com/${this.getGithub()}">${this.getGithub()}</a>
                            </li>
                        </ul>
                    </div>
                </div>
        `;
        return engineerCard;
    }
}

module.exports = Engineer;