const Employee = require("./Employee");


class Intern extends Employee {

    constructor(employeeName, employeeType, employeeID, employeeEmail, internSchool){
        

      super(employeeName, employeeType, employeeID, employeeEmail);
      this.internSchool = internSchool;
    }


}

module.exports = Intern;