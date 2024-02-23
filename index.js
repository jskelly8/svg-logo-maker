// Imports
const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require('./lib/shapes');

// Inquirer Questions
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter text for the logo (up to three characters):',
            validate: input => input.length <= 3 ? true : 'Text must be up to three characters.'
          },
          {
            type: 'input',
            name: 'textColor',
            message: 'Enter text color (color keyword or hexadecimal):',
          },
          {
            type: 'list',
            name: 'shape',
            message: 'Choose a shape:',
            choices: ['circle', 'triangle', 'square'],
          },
          {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter shape color (color keyword or hexadecimal):',
          }
    ]);
};

// Function to generate SVG content and save to file
const generateAndSave = (answers) => {
    let shapeInstance;

    const { shape, shapeColor, textColor, text } = answers;

    switch (shape) {
        case 'circle':
            shapeInstance = new Circle(shapeColor, textColor, text);
            break;
        case 'triangle':
            shapeInstance = new Triangle(shapeColor, textColor, text);
            break;
        case 'square':
            shapeInstance = new Square(shapeColor, textColor, text);
            break;
    }

    const svgContent = shapeInstance.render();
    fs.writeFile('./examples/logo.svg', svgContent, err => {
        if (err) {
        console.error('Error writing file:', err);
        } else {
        console.log('Generated logo.svg in the examples folder.');
        }
    });
};

// Main function to fully run the application
const run = async () => {
    try {
        const answers = await questions();
        generateAndSave(answers);
    } catch (error) {
        console.log(error);
    };
};

run();