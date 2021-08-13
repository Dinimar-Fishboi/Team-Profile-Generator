const Engineer = require("./Engineer");
const Intern = require("./Intern");

class Employee {
    constructor(name, id, email,){
        this.name = name;
        this.id = id;
        this.email = email;
        this.roleOf = () => {
            if (input === teamChoice[0]){
                return Engineer;
            } 
            if (input === teamChoice[1]){
                return Intern;
            }
        }
    }
}

module.exports = Employee;