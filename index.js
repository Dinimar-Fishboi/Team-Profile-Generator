const Manager = require('./lib/Manager');
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
        console.log("Please answer the question: If you wish to leave the program enter ^C (please know you will lose all progress and will have to start over");
        return false;
    }
}


const managerQuestions = [
    {
        type: 'input',
        message: "Please enter Manager's name.",
        name: 'employeeName',
        validate: confirmInput,
      },
    {
        type: 'input',
        message: "Please enter Manager's employeeId.",
        name: 'employeeID',
        validate: confirmInput,
        },
    {
        type: 'input',
        message: "Please enter Manager's email address.",
        name: 'employeeEmail',
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
        type: 'list',
        message: "Is this employee an Engineer or Intern?",
        name: 'employeeType',
        choices: ["Engineer","Intern"],
        }, 
    {
        type: 'input',
        message: "Please enter Employee's name",
        name: 'employeeName',
        validate: confirmInput,
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
        // Code to determine if Engineer or Intern will be added
        if (answer.employeeType === "Engineer"){
            const  {employeeName, employeeType, employeeID, employeeEmail, githubUrl} = answer; 
            console.log(answer);
            console.log("we've passed the new constant");
            const newEngineer = new Engineer(employeeName, employeeType, employeeID, employeeEmail, githubUrl);
            console.log(newEngineer);
            appendStaff("dist/index.html", addEngineer(newEngineer));
            teamMember();
        } 
        if (answer.employeeType === "Intern"){
            const  {employeeName, employeeType, employeeID, employeeEmail, internSchool} = answer; 
            console.log(answer);
            console.log("we've passed the new constant");
            const newIntern = new Intern(employeeName, employeeType, employeeID, employeeEmail, internSchool);
            console.log(newIntern);
            appendStaff("dist/index.html", addIntern(newIntern));
            teamMember();
        }
        
    })
}

teamMember = () => {
    inquirer.prompt(teamChoiceQuestions)
    .then(answer => {
        if (answer.teamChoice === "Finalise team") {
            console.log("Manager has finished adding team members");
            appendStaff("dist/index.html", closeRanks(answer));            
        } else {
            addEmployee();
        }
    })
}

init = () => {
    inquirer.prompt(managerQuestions)
    .then(newManager => {
        console.log(newManager);       
        const  {employeeName, employeeType, employeeID, employeeEmail, managerOffice} = newManager; 
        console.log(newManager); 
        const thisIsTheManager = new Manager(employeeName, employeeType, employeeID, employeeEmail, managerOffice);
        console.log(thisIsTheManager);
        appendStaff("dist/index.html", generateManager(thisIsTheManager));
        teamMember();
    })
    .catch((err) => console.error(err));
}

init();