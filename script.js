"use strict";

playGame();

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
    let choicesComparison;
    let isHumanWinner;
    let itsTie;
    choicesComparison = `${humanChoice}-${computerChoice}`;
    switch(choicesComparison) {
        case "paper-rock":
        case "rock-scissors":
        case "scissors-paper":
            console.log(`Human: ${humanChoice}.\nComputer: ${computerChoice}.\nHuman wins this round.`);
            isHumanWinner = true;
            itsTie = false;
            break;

        case "rock-paper":
        case "paper-scissors":
        case "scissors-rock":
            console.log(`Human: ${humanChoice}.\nComputer: ${computerChoice}.\nComputer wins this round.`);
            isHumanWinner = false;
            itsTie = false;
            break;

        case "rock-rock":
        case "paper-paper":
        case "scissors-scissors":
            console.log(`Human: ${humanChoice}.\nComputer: ${computerChoice}.\nIt's a tie this round.`);
            isHumanWinner = false;
            itsTie = true;
            break;

        default:
            console.log("Investigate error");
            break;
    }
    return isHumanWinner, itsTie;
}

function calculateScore(isHumanWinner, itsTie, humanScore, computerScore) {
    if(itsTie) {
 
    }
    else {
        if(isHumanWinner){
            humanScore++;
        }
    
        else {
            computerScore++;
        } 
    }
    console.log(`Human score: ${humanScore}\nComputer score: ${computerScore}`)
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let isHumanWinner = null;
    let itsTie = null;
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    isHumanWinner, itsTie = playRound(humanChoice, computerChoice);
    calculateScore(isHumanWinner, itsTie, humanScore, computerScore);
}

