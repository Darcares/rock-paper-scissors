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

function getHumanChoice(event) {
    let humanChoice = event.currentTarget.id;
    return humanChoice;
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
            isHumanWinner = null;
            break;

        default:
            console.log("Investigate error");
            break;
    }
    return isHumanWinner;   
}

function getWinnerOfTheGame(humanScore, computerScore) {
    if(humanScore === computerScore) {
        console.log(`NO WINNER, IT'S A TIE.`)
    }

    else if(humanScore >= computerScore) {
        console.log(`HUMAN WINS THE GAME.`)
    }

    else {
        console.log(`COMPUTER WINS THE GAME`)
    }

}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let round = 1;
    // alert(`You will play best of 5`)
    let choices = document.querySelectorAll(`.choice`);

    choices.forEach((choice) => {
        choice.addEventListener(`click`, (event) => {
            const humanChoice = getHumanChoice(event);
            const computerChoice = getComputerChoice();
        
            const isHumanWinner = playRound(humanChoice, computerChoice);
            if(isHumanWinner === true) humanScore++;
            if(isHumanWinner === false) computerScore++;

            console.log(`Human score: ${humanScore}\nComputer score: ${computerScore}`)
            round++;
            // if (round === 5) getWinnerOfTheGame(humanScore, computerScore);
        });
    });

 
}

