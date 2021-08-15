# Team Profile Generator

[![License: Apache-2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

## Description

This is a a Node.js command-line application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person.

Please view an example of a generated HTML file in the DIST directory.

## Screenshot and link to use case


## Table of Contents 
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Tests](#tests)
- [Questions](#questions)
- [License](#license)

## Technologies
- Node.js
- npm Inquire
- npm Jest
- HTML
- CSS
- JavaScript

## Installation

After cloning this repository to your local machine and setting up [Node.js](https://nodejs.org/en/) for your machine, do the following:

Initialise npm:
```md
 npm init -y
```
Install npm:
```md
 npm install
```

Intstall Inquire package:
```md
 npm install inquire
```

Install Jest:
```md
npm install --save-dev jest
```

## Usage

Program will require you to add employees one by one; starting with the Manager and then following with the ability to add Engineers or Interns.

The program works primarily using the appendFile function - when you wish to create a new file; we recommend deleting or renaming the previously generated file.

The newly generated HTML file will appear in the DIST folder.

## Tests

There are a series of Tests in this project to confirm the Employee class and subclasses are filled in correctly. You can run these after installing the NPM Jest (you can refer to documentation for Jest [here](https://jestjs.io/docs/getting-started)).

## Questions

If you have any questions, please reach out.

- [https://github.com/Dinimar-Fishboi](https://github.com/Dinimar-Fishboi)
- [dev.fish.studio@protonmail.com](#dev.fish.studio@protonmail.com)

## License and Copyright

 © Dev.Fish Studios, 2021

Licensed under the [Apache License, Version 2.0](LICENSE).

