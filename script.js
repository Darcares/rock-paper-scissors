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
            computerChoice = "scissors"
            break;
    }
    return computerChoice;
}

function getHumanChoice() {
    let humanChoice;
    humanChoice = prompt("Please choose Rock, Paper or Scissors");
    humanChoice = humanChoice.trim();
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
        return humanChoice;
    }
    else {
        alert(`Invalid option.\nPlease choose again.`);
    }
}





