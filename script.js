//script file for the game logic and interaction//

//funtions declaration//

function getComputerChoice() {
    let play = "none"; 

    // use a random function to get a random number between the range 1 - 3
    const random_num = Math.floor(Math.random() * (3 - 1 + 1)) + 1;

    // base on the number return convert that number to one of the plays of the game "rock, paper or scissors"
    if (random_num == 1) {
        play = "Rock";
    }
    else if (random_num == 2) {
        play = "Paper";
    }
    else if (random_num == 3) {
        play = "Scissors"
    }

    // return the computer play
    return play.toUpperCase();
}

function getPlayerSelection() {
    const desition = prompt("Choose your play (Rock, Paper, Scissors): ").toUpperCase(); 
    return desition;
}

const playerSelection = getPlayerSelection();

const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
    // your code here!
    if (playerSelection == computerSelection) {
        console.log("Tie!");
    } 
    else if (playerSelection == "ROCK" && computerSelection == "PAPER") {
        console.log("Computer Win!");
    }
    else if (playerSelection == "PAPER" && computerSelection == "SCISSORS") {
        console.log("Computer Win!");
    }
    else if (playerSelection == "SCISSORS" && computerSelection == "ROCK") {
        console.log("Computer Win!");
    }
    else if (playerSelection == "PAPER" && computerSelection == "ROCK") {
        console.log("Player Win!");
    }
    else if (playerSelection == "ROCK" && computerSelection == "SCISSORS") {
        console.log("Player Win!");
    }
    else if (playerSelection == "SCISSORS" && computerSelection == "PAPER") {
        console.log("Player Win!");
    }
}

console.log(playerSelection);
console.log(computerSelection);
playRound(playerSelection, computerSelection);

