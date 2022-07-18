// //to validate the questions
// const validateQuestions = async (input) => {
//     const 
// }


const managerQuestions = [
    {
        type: 'input',
        name: 'managerName',
        message: `What is the team manager's first and last name?`,
        validate: function (input) {
            if (input === '') {
                return 'Please enter a name';
            } 
            // else if (input.length < 3) {
            //     return 'Please enter a valid name';
            // }
            return true;
        }
    },
    {
        type: 'input',
        name: 'managerId',
        message: `What is the team manager's id?`,
        validate: async (input) => {
            const num = parseInt(input);
            if (isNaN(num)) {
                return 'Please enter a number';
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: `What is the team manager's email?`,
    },
    {
        type: 'input',
        name: 'officeNum',
        message: `What is the team manager's office number?`,
        validate: (value) => {
            if (isNaN(value) === false) {
                return true;
            }
            return false;
        }
    },
]
const engineerQuestions = [
    {
        type: 'input',
        name: 'engineerName',
        message: `What is the engineer's name?`,
    },
    {
        type: 'input',
        name: 'engineerId',
        message: `What is the engineer's id?`,
    },
    {
        type: 'input',
        name: 'engineerEmail',
        message: `What is the engineer's email?`,
    },
    {
        type: 'input',
        name: 'github',
        message: `What is the engineer's Github?`,
    },
]
const internQuestions = [
    {
        type: 'input',
        name: 'internName',
        message: `What is the intern's name?`,
    },
    {
        type: 'input',
        name: 'internId',
        message: `What is the team intern's id?`,
    },
    {
        type: 'input',
        name: 'internEmail',
        message: `What is the team intern's email?`,
    },
    {
        type: 'input',
        name: 'school',
        message: `Where does the intern attend school?`,
    },
]

const addMoreEmployees = {

    type: 'list',
    name: 'addMore',
    message: `Would you like to add a new employee?`,
    choices: ['add more Manager', 'Engineer', 'Intern', 'Exit']
}

module.exports = { 
    managerQuestions,
    engineerQuestions, 
    internQuestions, 
    addMoreEmployees 
}