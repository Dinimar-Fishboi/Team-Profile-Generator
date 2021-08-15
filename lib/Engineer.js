const Employee = require("./Employee");

class Engineer extends Employee {

    constructor(employeeName, employeeType, employeeID, employeeEmail, githubUrl){

        super(employeeName, employeeType, employeeID, employeeEmail);
        this.githubUrl = githubUrl;

    }

    getGithub(){
        return this.githubUrl;
    }

}

module.exports = Engineer;