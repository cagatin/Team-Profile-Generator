const Employee = require('../lib/Employee');

describe('Instantiation', () => {
    test("Name of Employee", () => {
        const testEmployee = new Employee('Felix', '12', 'Cagatingilbert@mail.com');
        const name = testEmployee.name;
        expect(name).toBe('Felix');
    })
    test("Employee ID", () => {
        const testEmployee = new Employee('Felix', '12', 'Cagatingilbert@mail.com');
        const id = testEmployee.id;
        expect(id).toBe('12');
    })
    test("Employee email", () => {
        const testEmployee = new Employee('Felix', '12', 'Cagatingilbert@mail.com');
        const email = testEmployee.email;
        expect(email).toBe('Cagatingilbert@gmail.com');
    })
})
describe('Methods', () => {
    test("getName Function", () => {
        const testEmployee = new Employee('Felix', '12', 'Cagatingilbert@mail.com');
        const name = testEmployee.getName();
        expect(name).toBe('Felix');
    })
    test("getId Function", () => {
        const testEmployee = new Employee('Felix', '12', 'Cagatingilbert@mail.com');
        const id = testEmployee.getId();
        expect(id).toBe('12');
    })
    test("Employee email", () => {
        const testEmployee = new Employee('Felix', '12', 'Cagatingilbert@mail.com');
        const email = testEmployee.getEmail();
        expect(email).toBe('Cagatingilbert@gmail.com');
    })
})