const Employee = require("../lib/Employee");

describe("Employee Class", () => {
    describe("getName", () => {
        it("Correct employeeName for new Employee", () => {
            const newEmployee = new Employee("Alice", "Engineer", "5748", "alice@email.com", "https://github.com/Dinimar-Fishboi", "UNSW")
            expect((newEmployee.getName()) === "Alice").toBe(true);
             })
        })
    describe("getID", () => {
        it("Correct employeeID for new Employee", () => {
            const newEmployee = new Employee("Alice", "Engineer", "5748", "alice@email.com", "https://github.com/Dinimar-Fishboi", "UNSW")
            expect((newEmployee.getId()) === "5748").toBe(true);
                })
        })
    describe("getEmail", () => {
        it("Correct employeeEmail for new Employee", () => {
            const newEmployee = new Employee("Alice", "Engineer", "5748", "alice@email.com", "https://github.com/Dinimar-Fishboi", "UNSW")
            expect((newEmployee.getEmail()) === "alice@email.com").toBe(true);
                })
        }) 

})