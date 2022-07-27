const Manager = require('../lib/Manager');

describe('Instantiation', () => {
    test("Name of Manager", () => {
        const testManager = new Manager('Felix', '12', 'cagatingilbert@gmail.com', '24');
        const name = testManager.name;
        expect(name).toBe('Felix');
    })
    test("Manager's ID", () => {
        const testManager = new Manager('Felix', '12', 'cagatingilbert@gmail.com', '24');
        const id = testManager.id;
        expect(id).toBe('12');
    })
    test("Manager email", () => {
        const testManager = new Manager('Felix', '12', 'cagatingilbert@gmail.com', '24');
        const email = testEngineer.email;
        expect(email).toBe('cagatingilbert@gmail.com');
    })
})
describe('Methods', () => {
    test("getName method", () => {
        const testManager = new Manager('Felix', '12', 'cagatingilbert@gmail.com', '24');
        const name = testManager.getName();
        expect(name).toBe('Felix');
    })
    test("getId method", () => {
        const testManager = new Manager('Felix', '12', 'cagatingilbert@gmail.com', '24');
        const id = testManager.getId();
        expect(id).toBe('12');
    })
    test("getEmail method", () => {
        const testManager = new Manager('Felix', '12', 'cagatingilbert@gmail.com', '24');
        const email = testManager.getEmail();
        expect(email).toBe('cagatingilbert@gmail.com');
    });
    test("getGithub method", () => {
        const testManager = new Manager('Felix', '12', 'cagatingilbert@gmail.com', '24');
        const github = testManager.getGithub();
        expect(github).toBe('cagatin');
    })
    test("getRole", () => {
        const testManager = new Manager('Felix', '12', 'cagatingilbert@gmail.com', '24');
        const role = testManager.getRole();
        expect(role).toBe('Engineer');
    });
})
describe('Engineer Card Method', () => {
    test("EngineerCard Method", () => {
        const testManager = new Manager('Felix', '12', 'cagatingilbert@gmail.com', '24');
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
                                    href="#">${testEngineer.getGithub()}</a>
                            </li>
                        </ul>
                    </div>
                </div>
        `;
        expect(testEngineer.generateCard()).toBe(engineerCard);
    });
})