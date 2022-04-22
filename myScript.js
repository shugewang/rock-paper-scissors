// function to hide start-container and show game-container

document.getElementById("game-container").style.display = "none";
document.getElementById("end-container").style.display = "none";
document.getElementById("startButton").addEventListener("click", function() {
    document.getElementById("start-container").style.display = "none";
});
document.getElementById("startButton").addEventListener("click", function() {
    document.getElementById("game-container").style.display = "block";
});

// function to hide game-container and show end-container
/* once last round
    document.getElementById("game-container").style.display = "none";

    document.getElementById("end-container").style.display = "block";
*/

// function for computer to randomly choose an option
function computerPlay(){
    plays = ["rock", "paper", "scissors"];
    return randomPlay = plays[Math.floor(Math.random()*plays.length)];
}

// function to capitalize a word
function capitalize(word){
    return word[0].toUpperCase() + word.slice(1);
}

// function to play a single round
function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection){
        return "draw";
    }
    if (playerSelection === "rock" && computerSelection === "paper"){
        return "computer";
    }
    if (playerSelection === "rock" && computerSelection === "scissors"){
        return "player";
    }
    if (playerSelection === "paper" && computerSelection === "rock"){
        return "player";
    }
    if (playerSelection === "paper" && computerSelection === "scissors"){
        return "computer";
    }
    if (playerSelection === "scissors" && computerSelection === "rock"){
        return "computer";
    }
    if (playerSelection === "scissors" && computerSelection === "paper"){
        return "player";
    }
    console.log("Invalid input. Try again!");
}

// main function: play 5 rounds with user input
function game(){
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++){
        let playerSelection = prompt("Rock, paper, or scissors?");
        let computerSelection = computerPlay();

        winner = playRound(playerSelection, computerSelection);
        if (winner == "player"){
            playerScore += 1;
            console.log( "You win! " + capitalize(playerSelection) + " beats " + capitalize(computerSelection) + "!");
        } else if (winner == "computer"){
            computerScore += 1;
            console.log("You lose! " + capitalize(computerSelection) + " beats " + capitalize(playerSelection) + "!");
        } else {
            console.log("It's a draw!");
        }
        console.log("Your score: " + playerScore);
        console.log("Computer score:" + computerScore);
    }
    if (playerScore > computerScore) { 
        console.log("Player is the winner!");
    } else if (computerScore > playerScore) {
        console.log("Computer is the winner!");
    } else {
        console.log("It's a draw!");
    }
}
