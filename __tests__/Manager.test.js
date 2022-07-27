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
        const email = testManager.email;
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
        const id = testManagr.getId();
        expect(id).toBe('12');
    })
    test("getEmail method", () => {
        const testManager = new Manager('Felix', '12', 'cagatingilbert@gmail.com', '24');
        const email = testManager.getEmail();
        expect(email).toBe('cagatingilbert@gmail.com');
    });
    test("getOfficeNumber method", () => {
        const testManager = new Manager('Felix', '12', 'cagatingilbert@gmail.com', '24');
        const officeNumber = testManager.getOfficeNumber();
        expect(officeNumber).toBe('24');
    })
    test("getRole", () => {
        const testManager = new Manager('Felix', '12', 'cagatingilbert@gmail.com', '24');
        const role = testManager.getRole();
        expect(role).toBe('Manager');
    });
})
describe('Engineer Card Method', () => {
    test("EngineerCard Method", () => {
        const testManager = new Manager('Felix', '12', 'cagatingilbert@gmail.com', '24');
        let testManagerCard = `
                <div class="card" style="width: 20rem;">
                    <div class="card-header managerHeader">
                        <h2 class="card-title">Manager</h2>
                    </div>
                    <div class="card-body">
                        <ul class="list-group card-list">
                            <li class="list-group-item card-list-item"><span class="itemTitle">Name:</span> ${testManager.getName()}
                            </li>
                            <li class="list-group-item card-list-item"><span class="itemTitle">ID Number:</span> ${testManager.getId()}
                            </li>
                            <li class="list-group-item card-list-item"><span class="itemTitle">Email:</span> <a
                                    href="mailto:${testManager.getEmail()}">${testManager.getEmail()}</a>
                            </li>
                            <li class="list-group-item card-list-item"><span class="itemTitle">Office Number:</span> ${testManager.getOfficeNumber()}
                            </li>
                        </ul>
                    </div>
                </div>
        `;
        expect(testManager.generateCard()).toBe(testManagerCard);
    });
})