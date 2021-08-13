const Manager = require('./Manager');
const Employee = require('./Employee');
const inquirer = require('inquirer');
const fs = require('fs');
const generateManager = require('./../src/generateHTML');
const addEngineer = require('./../src/generateHTML');
const addIntern = require('./../src/generateHTML');
const closeRanks = require('./../src/generateHTML');


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
    // {
    //     type: 'list',
    //     message: 'Would you like to add a member to your team or finish up?',
    //     name: 'teamChoice',
    //     choices: ["Add an Engineeer", "Oh we hired an Intern", "Thanks, I'm good"],
    //     },
//   


function appendStaff(fileName, data) {
    fs.appendFile(fileName, data, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('Finished writing')
        }
    //     //   throw err;
    //     //   console.log("Information received")
      })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(managerQuestions)
    .then(function (newInput) {
      console.log(newInput)
      appendStaff("index.html", generateManager(newInput));
    //   appendStaff("index.html", addEngineer(newInput));
    //   appendStaff("index.html", addIntern(newInput));
    //   appendStaff("index.html", closeRanks(newInput));

    }); 
}

init();