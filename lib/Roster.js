
const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./../src/generateHTML');


const confirmInput = (value) => {
    if (value){
        return true;
    } else {
        console.log("Please answer the question or enter [control + C]");
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
    {
        type: 'list',
        message: 'Would you like to add a member to your team or finish up?',
        name: 'teamChoice',
        choices: ["Add an Engineeer", "Oh we hired an Intern", "Thanks, I'm good"],
        },
//     {
//         type: 'input',
//         message: 'How do you contribute to this project?',
//         name: 'contributing',
//         validate: confirmInput,
//         },
//     {
//         type: 'input',
//         message: 'What is your full GitHub URL (this is so people can contact you about your project)?',
//         name: 'github',
//         validate: confirmInput,
//         },
//     {
//         type: 'input',
//         message: 'What is your email (aka another way for people to contact you about your project)?',
//         name: 'email',
//         validate: confirmInput,
//         },
//     {
//         type: 'input',
//         message: 'What is your full name/name of your organisation (for Copyright purposes)?',
//         name: 'name',
//         validate: confirmInput,
//         },
//     {
//         type: 'input',
//         message: "Can you please provide the year/s this project was created (also for Copyright purposes)?. If it stretches over multiple years please use the following format: 'FirstYear-FinalYear",
//         name: 'year',
//         validate: confirmInput,
//         },
//     {
//         type: 'expand',
//         message: "Please select a license option. Hit 'H' and then 'enter' to see all the license options (If you're unsure which one to use, google it)",
//         name: 'license',
//         choices: [
//             {
//                 key: 'a',
//                 name: 'Apache License, Version 2.0',
//                 value: [
//                     "Apache-2.0",
//                     "Apache%202.0-blue.svg",
//                     "Apache-2.0",
//                     "Apache License, Version 2.0",
//                 ]
//         },
//             {
//                 key: 'b',
//                 name: 'The MIT License',
//                 value: [
//                     "MIT",
//                     "MIT-yellow.svg",
//                     "MIT",
//                     "MIT License",
//                 ]
//         },
//             {
//                 key: 'c',
//                 name: 'Mozilla Public License 2.0',
//                 value: [
//                     "MPL 2.0",
//                     "MPL%202.0-brightgreen.svg",
//                     "MPL-2.0",
//                     "Mozilla Public License 2.0"
//                 ]
//         },
//             {
//                 key: 'd',
//                 name: 'GNU General Public License version 3',
//                 value: [
//                     "GPL v3",
//                     "GPL%20v2-blue.svg",
//                     "gpl-3.0",
//                     "GNU General Public License version 3"
//                 ]
//             },
//         ],
//         },

];

function appendStaff(fileName, data) {
    fs.appendFile(fileName, data, (err) => {
        if (err)
          throw err;
          console.log("Information received")
      })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(managerQuestions)
    .then(function (newInput) {
      console.log(newInput)
      appendStaff("index.html", generateHTML(newInput));
 
    }); 
}

init();