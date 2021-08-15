const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");


describe("Engineer Class", () => {
    describe("employeeType and getRole", () => {
    it("Correct employeeType = Engineer returns True", () => {
        const Alice = new Engineer("Alice", "Engineer", "5748", "alice@email.com", "https://github.com/Dinimar-Fishboi")
        expect((Alice.getRole()) === "Engineer").toBe(true);
         })
    it("Correct employeeType = Intern returns False", () => {
        const Blair = new Intern("Blair", "Intern", "9087", "blair@email.com", "UNSW")
        expect((Blair.getRole()) === "Engineer").toBe(false);
        })
      
    })

    describe("the Engineer should have a github account", ()=> {
        it("There should be a githubURL for the Engineer Class", () => {
            const Alice = new Engineer("Alice", "Engineer", "5748", "alice@email.com", "https://github.com/Dinimar-Fishboi")
            expect((Alice.getGithub())).toBe("https://github.com/Dinimar-Fishboi");
        })
    })

})