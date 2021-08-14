const Employee = require("./Employee");


// class Intern extends Employee {
    class Intern {

    constructor(employeeName, employeeType, employeeID, employeeEmail, school){
        

      super(employeeName, employeeType, employeeID, employeeEmail);
      this.school = school;
    }


}

module.exports = Intern;