const Engineer = require("./Engineer");
const Intern = require("./Intern");

// class Employee extends Intern extends Engineer {
    class Employee {

    constructor(employeeName, employeeType, employeeID, employeeEmail, additionalVariable){
        this.employeeName = employeeName;
        this.employeeID = employeeID;
        this.employeeEmail = employeeEmail;
        this.employeeType = employeeType;
        
        // super (githubUrl);
        // this.githubUrl = githubUrl;

        // super (internSchool);
        // this.internSchool = this.internSchool
        // this.additionalVariable = () => {
        //     if (employeeType === "Engineer"){
        //         console.log("We're adding an Engineer to the roster")
        //         return Engineer(employeeName,employeeType, employeeID, employeeEmail,githubUrl);
        //     } 
        //     if (employeeType === "Intern"){
        //         console.log("We're adding an Intern to the roster")
        //         return Intern;
        //     }
        // }
           
        }
    }


module.exports = Employee;