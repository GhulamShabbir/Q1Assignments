
// var prompt = require('prompt-sync')();
// //
// // get input from the user.
// //
// var n = prompt('How many more times? ');
// console.log(n);
// export {};


// var prompt = require('prompt-sync')();
// //
// // get input from the user.
// //
// let name = prompt('What is your Name? ');
// console.log(name);
// export {};


// Calculator

// var prompt = require('prompt-sync')();
// //
// // get input from the user.
// //
// let n1 = prompt('please enter your first number? ');
// let n2 = prompt('please enter your second number? ');
// let result = n1 + n2
// console.log(result);
// export {};


// var prompt = require('prompt-sync')();
// //
// // get input from the user.
// //
// let n1 = prompt('please enter your first number? ');
// // first method
// let number1 = parseInt(n1);
// // second method
// let n2 = parseInt(prompt('please enter your second number? '));
// let result = number1 + n2
// console.log(result);
// export {};



// Inquirer Assignment
import inquirer from "inquirer"
import chalk from "chalk"

let tittle = `............Average & Percentage Calculator............`
console.log(chalk.bold.red(tittle));

const AP = await inquirer.prompt([
    {
        name : `operation`,
        type: `list`,
        message: `Which operation you want to operate? `,
        choices: [`Average`, `Percentage`],
    },
    {
        name: `totalEngMarks`,
        type: `number`,
        message: `Enter total English marks: `,

    },
    {
        name : 'obtEngMarks',
        type : 'number',
        message : 'Enter obtained English marks: '
    },
    {
        name: `totalUrduMarks`,
        type: `number`,
        message: `Enter total Urdu marks: `,
    },
    {
        name : 'obtUrduMarks',
        type : 'number',
        message : 'Enter obtained Urdu marks: '
    },
    {
        name: `totalMathMarks`,
        type: `number`,
        message: `Enter total Math marks: `,
    },
    {
        name : 'obtMathMarks',
        type : 'number',
        message : 'Enter obtained Maths marks: '
    },

])
let totalobtMarks = AP.obtEngMarks + AP.obtUrduMarks + AP.obtMathMarks
let totalMarks = AP.totalEngMarks + AP.totalUrduMarks + AP.totalMathMarks
if(AP.operation === `Average`){
    console.log(` Average = ${totalobtMarks/3}`);
}else if(AP.operation === `Percentage`){
    console.log(` Percentage = ${(totalobtMarks/totalMarks)* 100}`);

}

