const Engineer = require('../lib/Engineer');

describe('Instantiation', () => {
    test("Name of Engineer", () => {
        const testEngineer = new Engineer('Felix', '12', 'cagatingilbert@gmail.com', 'cagatin');
        const name = testEngineer.name;
        expect(name).toBe('Felix');
    })
    test("Engineer's ID", () => {
        const testEngineer = new Engineer('Felix', '12', 'cagatingilbert@gmail.com', 'cagatin');
        const id = testEngineer.id;
        expect(id).toBe('12');
    })
    test("Engineer email", () => {
        const testEngineer = new Engineer('Felix', '12', 'cagatingilbert@gmail.com', 'cagatin');
        const email = testEngineer.email;
        expect(email).toBe('cagatingilbert@gmail.com');
    })
    test("Engineer github", () => {
        const testEngineer = new Engineer('Felix', '12', 'cagatingilbert@gmail.com', 'cagatin');
        const github = testEngineer.github;
        expect(github).toBe('cagatin');
    })
})
describe('Methods', () => {
    test("getName method", () => {
        const testEngineer = new Engineer('Felix', '12', 'cagatingilbert@gmail.com', 'cagatin');
        const name = testEngineer.getName();
        expect(name).toBe('Felix');
    })
    test("getId method", () => {
        const testEngineer = new Engineer('Felix', '12', 'cagatingilbert@gmail.com', 'cagatin');
        const id = testEngineer.getId();
        expect(id).toBe('12');
    })
    test("getEmail method", () => {
        const testEngineer = new Engineer('Felix', '12', 'cagatingilbert@gmail.com', 'cagatin');
        const email = testEngineer.getEmail();
        expect(email).toBe('cagatingilbert@gmail.com');
    });
    test("getGithub method", () => {
        const testEngineer = new Engineer('Felix', '12', 'cagatingilbert@gmail.com', 'cagatin');
        const github = testEngineer.getGithub();
        expect(github).toBe('cagatin');
    })
    test("getRole", () => {
        const testEngineer = new Engineer('Felix', '12', 'cagatingilbert@gmail.com', 'cagatin');
        const role = testEngineer.getRole();
        expect(role).toBe('Engineer');
    });
})
describe('Engineer Card Method', () => {
    test("EngineerCard Method", () => {
        const testEngineer = new Engineer('Felix', '12', 'cagatingilbert@gmail.com', 'cagatin');
        let engineerCard = `
                <div class="card engineerCard" style="width: 20rem;">
                    <div class="card-header engineerHeader">
                        <h2 class="card-title">Engineer</h2>
                    </div>
                    <div class="card-body">
                        <ul class="list-group card-list">
                            <li class="list-group-item card-list-item"><span class="itemTitle">Name:</span> ${testEngineer.getName()}
                            </li>
                            <li class="list-group-item card-list-item"><span class="itemTitle">ID Number:</span> ${testEngineer.getId()}
                            </li>
                            <li class="list-group-item card-list-item"><span class="itemTitle">Email:</span> <a
                                    href="mailto:${testEngineer.getEmail()}">${testEngineer.getEmail()}</a>
                            </li>
                            <li class="list-group-item card-list-item"><span class="itemTitle">Github Account:</span> <a
                                    href="https://github.com/${testEngineer.getGithub()}">${testEngineer.getGithub()}</a>
                            </li>
                        </ul>
                    </div>
                </div>
        `;
        expect(testEngineer.generateCard()).toBe(engineerCard);
    });
})