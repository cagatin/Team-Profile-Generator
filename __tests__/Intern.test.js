const Intern = require('../lib/Intern');

describe('Instantiation', () => {
    test("Name of Intern", () => {
        const testIntern = new Intern('Felix', '12', 'cagatingilbert@gmail.com', 'UCSD');
        const name = testIntern.name;
        expect(name).toBe('Felix');
    })
    test("Intern's ID", () => {
        const testIntern = new Intern('Felix', '12', 'cagatingilbert@gmail.com', 'UCSD');
        const id = testIntern.id;
        expect(id).toBe('12');
    })
    test("Intern email", () => {
        const testIntern = new Intern('Felix', '12', 'cagatingilbert@gmail.com', 'UCSD');
        const email = testIntern.email;
        expect(email).toBe('cagatingilbert@gmail.com');
    })
    test("Intern School", () => {
        const testIntern = new Intern('Felix', '12', 'cagatingilbert@gmail.com', 'UCSD');
        const school = testIntern.school;
        expect(school).toBe('UCSD');
    })
})
describe('Methods', () => {
    test("getName method", () => {
        const testIntern = new Intern('Felix', '12', 'cagatingilbert@gmail.com', 'UCSD');
        const name = testIntern.getName();
        expect(name).toBe('Felix');
    })
    test("getId method", () => {
        const testIntern = new Intern('Felix', '12', 'cagatingilbert@gmail.com', 'UCSD');
        const id = testIntern.getId();
        expect(id).toBe('12');
    })
    test("getEmail method", () => {
        const testIntern = new Intern('Felix', '12', 'cagatingilbert@gmail.com', 'UCSD');
        const email = testIntern.getEmail();
        expect(email).toBe('cagatingilbert@gmail.com');
    });
    test("getSchool method", () => {
        const testIntern = new Intern('Felix', '12', 'cagatingilbert@gmail.com', 'UCSD');
        const school = testIntern.getSchool();
        expect(school).toBe('UCSD');
    })
    test("getRole", () => {
        const testIntern = new Intern('Felix', '12', 'cagatingilbert@gmail.com', 'UCSD');
        const role = testIntern.getRole();
        expect(role).toBe('Intern');
    });
})
describe('Engineer Card Method', () => {
    test("EngineerCard Method", () => {
        const testIntern = new Intern('Felix', '12', 'cagatingilbert@gmail.com', 'UCSD');
        let testInternCard = `
                <div class="card" style="width: 20rem;">
                    <div class="card-header internHeader">
                        <h2 class="card-title">Intern</h2>
                    </div>
                    <div class="card-body">
                        <ul class="list-group card-list">
                            <li class="list-group-item card-list-item"><span class="itemTitle">Name:</span> ${testIntern.getName()}
                            </li>
                            <li class="list-group-item card-list-item"><span class="itemTitle">ID Number:</span> ${testIntern.getId()}
                            </li>
                            <li class="list-group-item card-list-item"><span class="itemTitle">Email:</span> <a
                                    href="mailto:${testIntern.getEmail()}">${testIntern.getEmail()}</a>
                            </li>
                            <li class="list-group-item card-list-item"><span class="itemTitle">School:</span> ${testIntern.getSchool()}
                            </li>
                        </ul>
                    </div>
                </div>
        `;
        expect(testIntern.generateCard()).toBe(testInternCard);
    });
})