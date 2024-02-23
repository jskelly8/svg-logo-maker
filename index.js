// Imports
const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require('./lib/shapes');

// Inquirer Questions
const questions = () => {
    return inquirer.prompt([
        {},
    ]);
};

// Function to generate SVG content and save to file
const generateAndSave = () => {

};

// Main function to full run the application
const run = async () => {
    try {
        const answers = await questions();
        generateAndSave(answers);
    } catch (error) {
        console.log(error);
    };
};

run();