// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from "fs";

// TODO: Create a function to initialize app
function init() {
    // TODO: Create an array of questions for user input
    inquirer
        .prompt([
        {
            // title
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',

        },
        {
            // Description
            type: 'input',
            name: 'description',
            message: ' Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide: - What was your motivation? - Why did you build this project? - What problem does it solve? - What did you learn?',
        },
        {
            // Installation
            type: 'input',
            name: 'installation',
            message: 'What are the installation instructions for this project?'
        },
        {
            // Usage
            type: 'input',
            name: 'usage',
            message: 'What is the usage information for this project?'
        },
        {
            // License: This is a list of options
            type: 'list',
            name: 'license',
            message: 'What license are you using for this project?',
            choices: [
                'Apache License 2.0',
                'GNU GPLv3',
                'ISC License',
                'MIT License',
            ]
        },
        {
            // Contributing
            type: 'input',
            name: 'contributing',
            message: 'What are the contributuion guidelines for this project?'
        },
        {
            // Tests
            type: 'input',
            name: 'tests',
            message: 'What are the test instructions for this project?'
        },
        {
            // Questions: This is where your github profile is put
            //          : This is where your email will go
            type: 'input',
            name: 'email',
            message: 'What is the email you want to use for questions?'
        },
        {
            // questions: This is where your github profile is linked to questions
            type: 'input',
            name: 'gitHub',
            message: 'What is your GitHub profile URL?'
        }

        ]).then(questions => {

            let badge;
            switch (questions.license) {
                case 'Apache License 2.0':
                    badge = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
                    break;
                case 'GNU GPLv3':
                    badge = '[![License](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
                    break;
                case 'ISC License':
                    badge = '[![License](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
                    break;
                case 'MIT License':
                    badge = '[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)';
                    break;
                default:
                    badge = '';
            };

            const README = `
                # ${questions.title}
                ${badge}

                ## Description
                
                ${questions.description}


                ## Table of Contents

                - [Description](#description)
                - [Installation](#installation)
                - [Usage](#usage)
                - [License](#license)
                - [Tests](#tests)
                - [Contributins](#contributing)
                - [Questions](#questions)
                
                
                ## Installation

                ${questions.installation}

                
                ## Usage

                ${questions.usage}
                
                
                ## Contributing

                ${questions.contributing}

                
                ## License

                This project is covered under the ${questions.license}.


                ## Tests

                ${questions.tests}

                
                ## Questions

                If you have a questions please reach out to me at ${questions.gitHub} or at ${questions.email}.
                `;
            writeToFile('README.md', README);
        });
    // TODO: Create a function to write README file
    function writeToFile(fileName, data) {
        fs.writeFile(fileName, data, (err) => {
            if (err) {
                console.log('Error writing to file:', err);
            } else {
                console.log('File written successfully:', fileName);
            }
        });
    }
}

// Function call to initialize app
init();
