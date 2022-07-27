const Engineer = require('../lib/Engineer');

describe('Instantiation', () => {
    const testEmployee = new Engineer('Felix', '12', 'cagatin');
    test("Name of Engineer", () => {
        const name = testEmployee.name;
        expect(name).toBe('Felix');
    })
    test("Engineer ID", () => {
        const id = testEmployee.id;
        expect(id).toBe('12');
    })
    test("Engineer email", () => {
        const email = testEmployee.email;
        expect(email).toBe('Cagatingilbert@gmail.com');
    })
});

describe('Methods', () => {
    const testEmployee = new Engineer('Felix', '12', 'cagatin');
    test("getName Function", () => {
        const name = testEmployee.getName();
        expect(name).toBe('Felix');
    })
    test("getId Function", () => {
        const id = testEmployee.getId();
        expect(id).toBe('12');
    })
    test("getEmail", () => {
        const email = testEmployee.getEmail();
        expect(email).toBe('Cagatingilbert@gmail.com');
    });
    test("getRole", () => {
        const role = testEmployee.getRole();
        expect(role).toBe('Employee');
    })
})