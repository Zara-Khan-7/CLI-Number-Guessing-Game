#! /usr/bin/env node
import inquirer from "inquirer";

console.log("\n\tWelcome to CLI Number Guessing Game\n");

const randomNumber = Math.floor(Math.random() * 5 + 1);

const answer = await inquirer.prompt([
    {
        name:"userGuessedNumber",
        type:"number",
        message:"Enter your Guessed Number (Number Limit from 1-5):",
    },
]);

if(answer.userGuessedNumber === randomNumber){
    console.log("Congratulations! You guessed the correct number");
}
else{
    console.log("Sorry! You guessed the incorrect number");
}

