const Manager = require('./lib/Manager');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const fs = require('fs');
const generateManager = require('./src/generateHTML');
const addEngineer = require('./src/addEngineer');
const addIntern = require('./src/addIntern');
const closeRanks = require('./src/closeRanks');


const confirmInput = (value) => {
    if (value){
        return true;
    } else {
        console.log("Please answer the question or enter ^C");
        return false;
    }
}


const managerQuestions = [
    {
        type: 'input',
        message: "Please enter Manager's name.",
        name: 'managerName',
        validate: confirmInput,
      },
    {
        type: 'input',
        message: "Please enter Manager's employeeId.",
        name: 'managerEmployeeID',
        validate: confirmInput,
        },
    {
        type: 'input',
        message: "Please enter Manager's email address.",
        name: 'managerEmail',
        validate: confirmInput,
        },
    {
        type: 'input',
        message: "Please enter Manager's office number.",
        name: 'managerOffice',
        validate: confirmInput,
        },  
]; 
   

const teamChoiceQuestions = [
     {
        type: 'list',
        message: 'Would you like to add a member to your team or finish up?',
        name: 'teamChoice',
        choices: ["Add another employee", "Finalise team"],
        },
    ];

const newEmployee = [
    {
        type: 'input',
        message: "Please enter Employee's name",
        name: 'employeeName',
        validate: confirmInput,
        }, 
    {
        type: 'list',
        message: "Are they an Engineer or Intern?",
        name: 'employeeType',
        choices: ["Engineer","Intern"],
        }, 
    {
        type: 'input',
        message: "Please enter Employee ID",
        name: 'employeeID',
        validate: confirmInput,
        }, 
    {
        type: 'input',
        message: "Please enter Employee's email",
        name: 'employeeEmail',
        validate: confirmInput,
        }, 
    {
        type: 'input',
        message: "Please enter Engineer's GitHub url",
        name: 'githubUrl',
        when(answers) {
            return answers.employeeType !== "Intern";
          },
        }, 
    {
        type: 'input',
        message: "Please enter Intern's School (current or most recent)",
        name: 'internSchool',
        when(answers) {
            return answers.employeeType !== "Engineer";
          },
        }, 
]
    

appendStaff = (fileName, data) => {
    fs.appendFile(fileName, data, (err) => {
        if (err)
          throw err;
          console.log("Information received")
      })
}

addEmployee = () => {
    console.log("team needs to be expanded")
    inquirer.prompt(newEmployee)
    .then(answer => {
        console.log(answer);
        console.log(answer.employeeType);
        if (answer.employeeType === "Engineer"){
            const  {employeeName, employeeType, employeeID, employeeEmail, githubUrl} = answer; // PROBLEMS HERE
            console.log(answer);
            console.log("we've passed the new constant");
            const newEngineer = new Engineer(employeeName, employeeType, employeeID, employeeEmail, githubUrl);
            console.log(newEngineer);
            appendStaff("index.html", addEngineer(newEngineer));
        }
    })
}

teamMember = () => {
    inquirer.prompt(teamChoiceQuestions)
    .then(answer => {
        if (answer.teamChoice === "Finalise team") {
            console.log("Manager has finished adding team members");
            appendStaff("index.html", closeRanks(answer));            
        } else {
            addEmployee();
        }
    })
}

init = () => {
    inquirer.prompt(managerQuestions)
    .then(newManager => {
        console.log(newManager);       
        const  {managerName, managerEmployeeID, managerEmail, managerOffice} = newManager; 
        console.log(newManager); 
        const thisIsTheManager = new Manager(managerName, managerEmployeeID, managerEmail, managerOffice);
        console.log(thisIsTheManager);
        appendStaff("index.html", generateManager(thisIsTheManager));
        teamMember();
    })
    .catch((err) => console.error(err));
}

init();