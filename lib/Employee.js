// Main Employee class, to be extended to Engineer and Intern classes.
    class Employee {

    constructor(employeeName, employeeType, employeeID, employeeEmail,){
        this.employeeName = employeeName;
        this.employeeID = employeeID;
        this.employeeEmail = employeeEmail;
        this.employeeType = employeeType;
           
        }

        
    }


module.exports = Employee;