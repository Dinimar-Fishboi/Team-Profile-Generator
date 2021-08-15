const Employee = require("./Employee");

class Manager extends Employee {
    constructor(employeeName, employeeType, employeeID, employeeEmail, managerOffice){
     
        super(employeeName, employeeID, employeeEmail);

        this.managerOffice = managerOffice;
        this.employeeType = "Manager";
    }
}

module.exports = Manager;