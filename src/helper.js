// helper function to generate the Manager card
function generateManagerCard(manager) {
    const name = manager.managerName;
    const id = manager.managerID;
    const email = manager.managerEmail;
    const officeNumber = manager.managerOfficeNum;

    let managerCard = `
    <div class="card" style="width: 20rem;">
        <div class="card-header managerHeader">
            <h2 class="card-title">Manager</h2>
        </div>
        <div class="card-body">
            <ul class="list-group card-list">
                <li class="list-group-item card-list-item"><span class="itemTitle">Name:</span> ${name}
                </li>
                <li class="list-group-item card-list-item"><span class="itemTitle">ID Number:</span> ${id}
                </li>
                <li class="list-group-item card-list-item"><span class="itemTitle">Email:</span> <a
                        href="mailto:${email}">${email}</a>
                </li>
                <li class="list-group-item card-list-item"><span class="itemTitle">Office Number:</span> ${officeNumber}
                </li>
            </ul>
        </div>
    </div>
    `;
    return managerCard;
}

// helper function to generate Engineer Card
function generateEngineerCard(engineer) {
    const name = engineer.engineerName;
    const id = engineer.engineerID;
    const email = engineer.engineerEmail;
    const github = engineer.engineerGithub;

    let engineerCard = `
    <div class="card engineerCard" style="width: 20rem;">
        <div class="card-header engineerHeader">
            <h2 class="card-title">Engineer</h2>
        </div>
        <div class="card-body">
            <ul class="list-group card-list">
                <li class="list-group-item card-list-item"><span class="itemTitle">Name:</span> Felix Cagatin
                </li>
                <li class="list-group-item card-list-item"><span class="itemTitle">ID Number:</span> 02123
                </li>
                <li class="list-group-item card-list-item"><span class="itemTitle">Email:</span> <a
                        href="mailto:EMAIL GOES HERE">Email@email.com</a>
                </li>
                <li class="list-group-item card-list-item"><span class="itemTitle">Github Account:</span> <a
                        href="#">Github User</a>
                </li>
            </ul>
        </div>
    </div>
    `
    return engineerCard;
}

// helper function to generate Intern card 
function generateInternCard(intern) {
    const name = intern.internName;
    const id = intern.internId;
    const email = intern.internEmail;
    const school = intern.internSchool;

    let internCard = `
    <div class="card" style="width: 20rem;">
        <div class="card-header internHeader">
            <h2 class="card-title">Intern</h2>
        </div>
        <div class="card-body">
            <ul class="list-group card-list">
                <li class="list-group-item card-list-item"><span class="itemTitle">Name:</span> Felix Cagatin
                </li>
                <li class="list-group-item card-list-item"><span class="itemTitle">ID Number:</span> 02123
                </li>
                <li class="list-group-item card-list-item"><span class="itemTitle">Email:</span> <a
                        href="mailto:EMAIL GOES HERE">Email@email.com</a>
                </li>
                <li class="list-group-item card-list-item"><span class="itemTitle">School:</span> UCSD
                </li>
            </ul>
        </div>
    </div>
    `;
    return internCard;
}