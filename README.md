# Team Profile Generator

[![License: Apache-2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

## Description

This is a a Node.js command-line application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person.

An example of a generated HTML file has been published [here](https://dinimar-fishboi.github.io/Team-Profile-Generator/) for review. Please note the email addresses are fake and the GitHub portfolio links will return you to this account's main page (which naturally can be changed when running the application).

Please view an example of a generated HTML file in the DIST directory.

## Link to live use case and Screenshot

[Video Walkthrough](https://vimeo.com/587413531)

[Generated HTML file available to review](https://dinimar-fishboi.github.io/Team-Profile-Generator/)
![Screen Shot 2021-08-15 at 19 58 42](https://user-images.githubusercontent.com/83541287/129474773-d2eae4b1-d024-418f-b5b3-c6cb27d883e0.png)
<img width="1247" alt="Screen Shot 2021-08-15 at 20 32 17" src="https://user-images.githubusercontent.com/83541287/129475578-cb3b3cfc-7633-4cfe-95b5-899ccccd21cf.png">

## Table of Contents 
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Tests](#tests)
- [Questions](#questions)
- [License](#license-and-copyright)

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

To run the application; type the following from the ```teamProfileGenerator``` directory:
```md
node index.js
```
To run the tests; type the following from the ```_tests_``` directory:
```md
npm run test
```

Program will require you to add employees one by one; starting with the Manager and then following with the ability to add Engineers or Interns.

The program works primarily using the appendFile function - thus when you wish to create a new file; we recommend deleting or renaming the previously generated file.

The newly generated HTML file will appear in the ```dist``` directory.

## Tests

There are a series of Tests in this project to confirm the Employee class and subclasses are filled in correctly. You can run these after installing NPM Jest (you can refer to documentation for Jest [here](https://jestjs.io/docs/getting-started)).

## Questions

If you have any questions, please reach out.

- [https://github.com/Dinimar-Fishboi](https://github.com/Dinimar-Fishboi)
- [dev.fish.studio@protonmail.com](#dev.fish.studio@protonmail.com)

## License and Copyright

 © Dev.Fish Studios, 2021

Licensed under the [Apache License, Version 2.0](LICENSE).

