"use strict";

function getComputerChoice() {
    let randomNumber;
    let computerChoice;
    randomNumber = Math.round(Math.random() * (3 - 1) + 1);
    switch(randomNumber) {
        case 1:
            computerChoice = "rock";
            break;
        case 2:
            computerChoice = "paper";
            break;
        case 3:
            computerChoice = "scissors";
            break;
    }
    return computerChoice;
}

function getHumanChoice() {
    let humanChoice;
    let keepGoing = true;
    while(keepGoing) {
        humanChoice = prompt("Please type Rock, Paper or Scissors");
        humanChoice = humanChoice.trim();
        humanChoice = humanChoice.toLowerCase();
        if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
            keepGoing = false;
            return humanChoice;
        }
        else {
            keepGoing = true;
            alert(`Invalid option.\nPlease choose again.`);
        }
    }
}

function playRound(humanChoice, computerChoice) {
    let comparison;
    comparison = `${humanChoice}-${computerChoice}`;
    switch(comparison) {
        case "paper-rock":
        case "rock-scissors":
        case "scissors-paper":
            console.log(`Human: ${humanChoice}.\nComputer: ${computerChoice}.\nHuman wins.`);
            break;

        case "rock-paper":
        case "paper-scissors":
        case "scissors-rock":
            console.log(`Human: ${humanChoice}.\nComputer: ${computerChoice}.\nComputer wins.`);
            break;

        case "rock-rock":
        case "paper-paper":
        case "scissors-scissors":
            console.log(`Human: ${humanChoice}.\nComputer: ${computerChoice}.\nIt's a tie.`);
            break;

        default:
            console.log("Investigate error");
            break;
    }
}

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();
playRound(humanChoice, computerChoice);
