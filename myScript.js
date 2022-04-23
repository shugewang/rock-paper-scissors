
// function for computer to randomly choose an option
function getRandomChoice(){
    plays = ["rock", "paper", "scissors"];
    randomChoice = plays[Math.floor(Math.random()*plays.length)];
    document.getElementById("computer-choice").innerHTML = randomChoice;
    return randomChoice;
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

// function to hide start-container and show game-container
document.getElementById("game-container").style.display = "none";
document.getElementById("end-container").style.display = "none";
document.getElementById("startButton").addEventListener("click", function() {
    document.getElementById("start-container").style.display = "none";
});
document.getElementById("startButton").addEventListener("click", function() {
    document.getElementById("game-container").style.display = "block";
});

function finishGame (){
    let champion = "";
        //hide 
        document.getElementById("game-container").style.display = "none";
        document.getElementById("end-container").style.display = "block";
        if (computerScore > playerScore) {
            champion = "The Machine!";
        } else {
            champion = "You!";
        }
        document.getElementById("winner").innerHTML = champion;
}

// set global variables
let playerScore = 0;
let computerScore = 0;
let anyScore = 0;
// main game function
function game() {
    document.getElementById("rockBtn").addEventListener("click", function () {
        updateScore("rock");
    })
    document.getElementById("paperBtn").addEventListener("click", function () {
        updateScore("paper");
    })
    document.getElementById("scissorsBtn").addEventListener("click", function () {
        updateScore("scissors");
    })
    
}

// play a round and update score
function updateScore(playerSelection){
    let computerSelection = getRandomChoice();
    let winner = playRound(playerSelection, computerSelection);
    let result = "";
    if (winner == "player"){
        playerScore += 1;
        result = "You win! " + capitalize(playerSelection) + " beats " + capitalize(computerSelection) + "!";
    } else if (winner == "computer"){
        computerScore += 1;
        result = "You lose! " + capitalize(computerSelection) + " beats " + capitalize(playerSelection) + "!";
    } else {
        result = "It's a draw!";
    }
    console.log("Your score: " + playerScore);
    console.log("Computer score:" + computerScore);
    console.log(result);

    let update = document.createElement("p");
    let node = document.createTextNode(result);
    update.appendChild(node);
    document.getElementById("updates").appendChild(update);

    document.getElementById("player-score").innerHTML = playerScore;
    document.getElementById("computer-score").innerHTML = computerScore;
    
    if (computerScore == 5 || playerScore == 5){
        finishGame();
    }
}
game();