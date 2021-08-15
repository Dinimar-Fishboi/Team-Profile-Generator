const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");

describe("Manager Class", () => {
    //Then this is where all the BS is.
    describe("employeeType and getRole", () => {
        it("Correct employeeType = Engineer returns True", () => {
            const Zoi = new Manager("Alice", "Manager", "5748", "Zoi@email.com",)
            expect((Zoi.getRole()) === "Manager").toBe(true);
             })
        it("Correct employeeType = Intern returns False", () => {
            const Alice = new Engineer("Alice", "Engineer", "5748", "alice@email.com", "https://github.com/Dinimar-Fishboi")
            expect((Alice.getRole()) === "Manager").toBe(false);
            })
          
        })
    
  
})