const Intern = require("../lib/Intern");
const Engineer = require("../lib/Engineer");

describe("Intern Class", () => {
    describe("employeeType and getRole", () => {
        it("Correct employeeType = Intern returns True", () => {
            const Jared = new Intern("Jared", "Intern", "5748", "jared@email.com", "USC")
            expect((Jared.getRole()) === "Intern").toBe(true);
             })
        it("Correct employeeType = Intern returns False", () => {
            const Charlie = new Engineer("Charlie", "Engineer", "9087", "charlie@email.com", "https://github.com/Dinimar-Fishboi")
            expect((Charlie.getRole()) === "Intern").toBe(false);
            })
          
        })
    
        describe("the Intern should their School", ()=> {
            it("There should be a school for the Intern Class", () => {
                const Damian = new Intern("Damian", "Intern", "5748", "damian@email.com", "UWS")
                expect((Damian.getSchool())).toBe("UWS");
            })
        })
    
    })