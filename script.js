"use strict";

playGame();

function getComputerChoice() {
    let computerChoice = ``;
    const randomNumber = Math.round(Math.random() * (3 - 1) + 1);
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
    const humanChoice = event.currentTarget.id;
    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    let isHumanWinner = false;
    const choicesComparison = `${humanChoice}-${computerChoice}`;
    switch(choicesComparison) {
        case "paper-rock":
        case "rock-scissors":
        case "scissors-paper":
            isHumanWinner = true;
            break;

        case "rock-paper":
        case "paper-scissors":
        case "scissors-rock":
            isHumanWinner = false;
            break;

        case "rock-rock":
        case "paper-paper":
        case "scissors-scissors":
            isHumanWinner = null;
            break;

        default:
            console.log("Investigate error");
            break;
    }
    return isHumanWinner;   
}

function getWinnerOfTheGame(humanScore, computerScore) {
    const container = document.querySelector(`.container`);
    const winMessage = document.createElement(`h2`);
    winMessage.classList.toggle(`message`);
    const restartMessage = document.createElement(`h3`);
    restartMessage.classList.toggle(`message`);
    restartMessage.textContent = `Game will restart in 5 seconds...`;
    
    if(humanScore === computerScore) {
        winMessage.textContent = `NO WINNER, IT'S A TIE.`;
    }

    else if(humanScore > computerScore) {
        winMessage.textContent = `HUMAN WINS THE GAME.`;
    }

    else {
        winMessage.textContent = `COMPUTER WINS THE GAME`;
    }

    container.appendChild(winMessage);
    container.appendChild(restartMessage);
}

function resetGame(roundNo, humanScore, computerScore) {
    const rounds = document.querySelectorAll(`li`);
    const roundsList = document.querySelector(`.rounds`);
    const container = document.querySelector(`.container`);
    const messages = document.querySelectorAll(`.message`);
    
    rounds.forEach((round) => {
        roundsList.removeChild(round);
    });

    messages.forEach((message) => {
        container.removeChild(message);
    });

    roundNo = 0;
    humanScore = 0;
    computerScore = 0;

    const scores = document.querySelector(`.scores`);
    scores.textContent = `Human: ${humanScore}  Computer: ${computerScore}`

    return [roundNo, humanScore, computerScore];
}

function calculateScore (isHumanWinner, humanScore, computerScore) {
    if(isHumanWinner === true) humanScore++;
    if(isHumanWinner === false) computerScore++;
    return [humanScore, computerScore];
}

function printScore(humanScore, computerScore) {
    const scores = document.querySelector(`.scores`);
    scores.textContent = `Human: ${humanScore}  Computer: ${computerScore}`
}

function printRoundChoices(roundNo, humanChoice, computerChoice) {
    const rounds = document.querySelector(`.rounds`);
    const round = document.createElement(`li`);
    round.textContent = `Round ${roundNo} Human: ${humanChoice} | Computer: ${computerChoice}`;
    rounds.appendChild(round);
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let roundNo = 0;
    const FIVE_SECONDS = 5 * 1000;
    let choices = document.querySelectorAll(`.choice`);

    choices.forEach((choice) => {
        choice.addEventListener(`click`, (event) => {
        roundNo++;
        const humanChoice = getHumanChoice(event);
        const computerChoice = getComputerChoice();
        const isHumanWinner = playRound(humanChoice, computerChoice);
        [humanScore, computerScore] = calculateScore(isHumanWinner, humanScore, computerScore);
        printRoundChoices(roundNo, humanChoice, computerChoice);
        printScore(humanScore, computerScore);
        if (roundNo === 5) {
            getWinnerOfTheGame(humanScore, computerScore);
            setTimeout(() => {
                [roundNo, humanScore, computerScore] = resetGame(roundNo, humanScore, computerScore)
            }, FIVE_SECONDS);
        }      
        });
    });
}

