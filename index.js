// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [ 
    {
        type: 'input',
        message: 'What is the title of your proyect?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Write a description for your project',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Create your table of contents',
        name: 'table of contents'
    },
    {
        type: 'input',
        message: 'Describe the steps required to install your project',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Give instructions: ',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'What license do you have?',
        name: 'license'
    },
    {
        type: 'input',
        message: 'Who contributed to this project?',
        name: 'contributors'
    },
    {
        type: 'input',
        message: 'What commands are needed to test this app?',
        name: 'tests'
    },
    {
        type: 'input',
        message: 'Github username: ',
        name: 'username'
    },
    {
        type: 'input',
        message: 'email address:',
        name: 'email'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        console.log(fileName);
        console.log(data);
        if (err) {
            return console.log(err)
        } else {
            console.log('Your README.md has been generated!')
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function(data){
        writeToFile('README.md', generateMarkdown(data));
    })
};

// Function call to initialize app
init();
