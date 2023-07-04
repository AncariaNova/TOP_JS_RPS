//script file for the game logic and interaction//

// variables for score tracking

user_score = 0;
pc_score = 0;

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
    console.log(play.toUpperCase());
    return play.toUpperCase();
}

function playRound(btnValue) {
    // getting access to the text content from the score headers and the game log for manipulation
    let cpuPlay = document.querySelector("#play");
    let roundLog = document.querySelector("#round");
    let userScoreText = document.querySelector("#pc_score");
    let computerScoreText = document.querySelector("#cpu_score");

    // the code below could be executed if neither player reach 5 points
    if (user_score != 5 && pc_score != 5) {
        // base on the value of the btn press, assign a var the corresponding play text
        const value = btnValue;
        let playerSelection = "none";
        if (value == 1) {
            playerSelection = "ROCK";
        }
        else if (value == 2) {
            playerSelection = "PAPER";
        }
        else if (value == 3) {
            playerSelection = "SCISSORS";
        }

        // get random Computer play
        const computerSelection = getComputerChoice();
        cpuPlay.textContent = `Computer plays ${computerSelection}`;

        // compare both player and computer play and update the score
        if (playerSelection == computerSelection) {
            console.log("Tie!");
            roundLog.textContent = "It's a Tie!";
        } 
        else if (playerSelection == "ROCK" && computerSelection == "PAPER") {
            console.log("Computer win round!");
            roundLog.textContent = "The Computer win the round!";
            pc_score++;
        }
        else if (playerSelection == "PAPER" && computerSelection == "SCISSORS") {
            console.log("Computer win round!");
            roundLog.textContent = "The Computer win the round!";
            pc_score++;
        }
        else if (playerSelection == "SCISSORS" && computerSelection == "ROCK") {
            console.log("Computer win round!");
            roundLog.textContent = "The Computer win the round!";
            pc_score++;
        }
        else if (playerSelection == "PAPER" && computerSelection == "ROCK") {
            console.log("Player win round!");
            roundLog.textContent = "The Player win the round!";
            user_score++;
        }
        else if (playerSelection == "ROCK" && computerSelection == "SCISSORS") {
            console.log("Player win round!");
            roundLog.textContent = "The Player win the round!";
            user_score++;
        }
        else if (playerSelection == "SCISSORS" && computerSelection == "PAPER") {
            console.log("Player win round!");
            roundLog.textContent = "The Player win the round!";
            user_score++;
        }
        console.log(pc_score);
        console.log(user_score);


        // update the text inside the html elements of game log and scores
        userScoreText.textContent = user_score.toString();
        computerScoreText.textContent = pc_score.toString();

        // check if one of the players reach 5 points and end the game
        if (user_score == 5) {
            console.log("Player win the match!!");
            roundLog.textContent = "Player win the match!!";
        }
        else if (pc_score == 5) {
            console.log("Computer win the match!!");
            roundLog.textContent = "Computer win the match!!";
        }
    }
 
}

function game() {
    // getting the rps buttons data for future use
    const btns = document.querySelectorAll(".rps_btn");
    // adding event listener on click to each ui button
    btns.forEach((btn) => {
        btn.addEventListener('click', () => {
            playRound(btn.getAttribute('value'));
        });
    });
}

game();

