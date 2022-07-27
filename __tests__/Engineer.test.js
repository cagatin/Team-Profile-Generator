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