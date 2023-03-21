import PromptSync from "prompt-sync";
import chalk from 'chalk'

let tittle1 = '.........Average Calculator.........'
console.log(chalk.red(tittle1));

const prompt =PromptSync()

const engMarks = prompt('Enter obtained english marks: ')
const urduMarks = prompt('Enter obtained urdu marks: ')
const mathsMarks = prompt('Enter obtained mathematic marks: ')

let num1 = parseInt(engMarks)
let num2 = parseInt(urduMarks)
let num3 = parseInt(mathsMarks)

const average = ((num1 + num2 + num3)/ 3)

console.log(`Average = ${average}`);

