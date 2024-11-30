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
        //humanChoice = prompt("Please type Rock, Paper or Scissors");
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
    choicesComparison = `${humanChoice}-${computerChoice}`;
    switch(choicesComparison) {
        case "paper-rock":
        case "rock-scissors":
        case "scissors-paper":
            console.log(`Human: ${humanChoice}.\nComputer: ${computerChoice}.\nHuman wins this round.`);
            isHumanWinner = true;
            break;

        case "rock-paper":
        case "paper-scissors":
        case "scissors-rock":
            console.log(`Human: ${humanChoice}.\nComputer: ${computerChoice}.\nComputer wins this round.`);
            isHumanWinner = false;
            break;

        case "rock-rock":
        case "paper-paper":
        case "scissors-scissors":
            console.log(`Human: ${humanChoice}.\nComputer: ${computerChoice}.\nIt's a tie this round.`);
            isHumanWinner = false;
            break;

        default:
            console.log("Investigate error");
            break;
    }
    return isHumanWinner;   
}

function checkTie(humanChoice, computerChoice) {
    let choicesComparison;
    let itsTie;
    choicesComparison = `${humanChoice}-${computerChoice}`;
    switch(choicesComparison) {
        case "paper-rock":
        case "rock-scissors":
        case "scissors-paper":
            itsTie = false;
            break;

        case "rock-paper":
        case "paper-scissors":
        case "scissors-rock":
            itsTie = false;
            break;

        case "rock-rock":
        case "paper-paper":
        case "scissors-scissors":
            itsTie = true;
            break;

        default:
            console.log("Investigate error");
            break;
    }
    return itsTie;   
}

function calculateScore(isHumanWinner, itsTie, humanScore, computerScore) {
    if(itsTie) {
        console.log(`Human score: ${humanScore}\nComputer score: ${computerScore}`)
    }

    else {
        if(isHumanWinner) {
            humanScore++;
            console.log(`Human score: ${humanScore}\nComputer score: ${computerScore}`)
            return humanScore;
        }
    
        else {
            computerScore++;
            console.log(`Human score: ${humanScore}\nComputer score: ${computerScore}`)
            return computerScore;
        } 
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let isHumanWinner;
    let itsTie;
    alert(`You will play best of 5`)
    for(let round = 1; round <=5; round++) {
        console.log(`Round #${round}`)
        const humanChoice = "rock";
        const computerChoice = "scissors";
        isHumanWinner = playRound(humanChoice, computerChoice);
        itsTie = checkTie(humanChoice, computerChoice);
    }
}

