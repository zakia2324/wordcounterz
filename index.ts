#! /usr/bin/env node
import inquirer from "inquirer"
import chalk from"chalk"

console.log(chalk.bgMagenta("\n \t\t welcome to word counter"));

console.log(chalk.bgRed`#`.repeat(60));

let answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter a sentence:"
    }
])
let words = answers.sentence.trim().split(" ");

console.log(chalk.bgRed`#`.repeat(70));

console.log(" Sentence Words:")

console.log(words);

console.log(chalk.bold.bgBlueBright(`\n Word Count: ${words.length}`));










