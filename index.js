const Manager = require('./lib/Manager');
const Employee = require('./lib/Employee');
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
        choices: ["Add an Engineeer", "Oh we hired an Intern", "That's our team, we have finished!"],
        },
    ];
    

appendStaff = (fileName, data) => {
    fs.appendFile(fileName, data, (err) => {
        if (err)
          throw err;
          console.log("Information received")
      })
}

teamMember = () => {
    inquirer.prompt(teamChoiceQuestions)
    .then(answer => {
        console.log(answer)
        if (answer.teamChoice === answer.teamChoice[2]) {
            console.log("Manager has finished adding team members");
            appendStaff("index.html", closeRanks(answer));
            console.log(appendStaff("index.html", closeRanks(answer)));
            
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
     //   appendStaff("index.html", closeRanks());
       teamMember();
    })
    .catch((err) => console.error(err));
}
//         inquirer.prompt(teamChoiceQuestions)
//         .then(answer => {
//             console.log(answer.teamChoice)
//             switch (teamChoiceAnswer) {
//                 case (teamChoiceAnswer[0] || teamChoiceAnswer[1]):
//                    // addEmployee();
//                    console.log("Adding another team member")
//                     break;
            
//                 default: 
//                     break;
//             }
//         })
//     //   console.log(newInput)
//     //   appendStaff("index.html", generateManager(newInput));
//     // //   appendStaff("index.html", addEngineer(newInput));
//     //   appendStaff("index.html", addIntern(newInput));
//     //   appendStaff("index.html", closeRanks(newInput));

//     }); 
// }

init();