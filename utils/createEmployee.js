const inquirer = require("inquirer");
const questions = require("./questions");
const startHtml = require("./generateMarkdown");

const Manager = require("../lib/Manager");
const Engineer= require("../lib/Engineer");
const Intern = require("../lib/Intern");

const allEmployees = [];

function createManager () {
    inquirer
      .prompt(questions.managerQuestions)
      .then((answers) => {
        //insert function here
        const manager = new Manager (
            answers.managerName,
            answers.managerId,
            answers.managerEmail,
            answers.officeNum,
        );

        //add manager to array
        allEmployees.push(manager);
        addNew();

      })
       
      .catch((error) => {
        if (error.isTtyError) {
            console.error(`Prompt couldn't be rendered in the current environment!`)
        } else {
            console.error (`Something else went wrong!`, error)
        }
        });
    
}

function createEngineer () {
    inquirer
      .prompt(questions.engineerQuestions)
      .then((answers) => {
        //insert function here
        const engineer = new Engineer (
            answers.engineerName,
            answers.engineerId,
            answers.engineerEmail,
            answers.github,
        );
        //add engineer to array
        allEmployees.push(engineer);
        addNew();
      })
      .catch((error) => {
        if (error.isTtyError) {
            console.error(`Prompt couldn't be rendered in the current environment!`)
        } else {
            console.error (`Something else went wrong!`, error)
        }
        });
        
}

function createIntern () {
    inquirer
      .prompt(questions.internQuestions)
      .then((answers) => {
        //insert function here
        const intern = new Intern (
            answers.internName,
            answers.internId,
            answers.internEmail,
            answers.school,
        );
        //add intern to array
        allEmployees.push(intern);
        addNew();
      })
      .catch((error) => {
        if (error.isTtyError) {
            console.error(`Prompt couldn't be rendered in the current environment!`)
        } else {
            console.error (`Something else went wrong!`, error)
        }
        });
      
}

function addNew() {
    inquirer
      .prompt(questions.addMoreEmployees)
      .then((answers) => {
        //insert function here
        switch (answers.addMore) {
            case 'Manager':
                createManager();
                break;
            case 'Engineer':
                createEngineer();
                break;
            case 'Intern':
                createIntern();
                break;
            case 'Exit':
                startHtml.startHtml(allEmployees);
                break;
            default:
                console.log(`${allEmployees} are here!`);
        }
    })
        .catch((error) => {
            if (error.isTtyError) {
                console.error(`Prompt couldn't be rendered in the current environment!`)
            } else {
                console.error (`Something else went wrong!`, error)
            }
        });
}

module.exports = { 
    createManager, 
    createEngineer, 
    createIntern, 
    addNew,
};