"use strict";

function getComputerChoice () {
    let random;
    let choice;
    random = Math.round(Math.random() * (3 -1) + 1);
    switch(random) {
        case 1:
            choice = "Rock";
            break;
        case 2:
            choice = "Paper";
            break;
        case 3:
            choice = "Scissors"
            break;
    }
    return choice;
}




