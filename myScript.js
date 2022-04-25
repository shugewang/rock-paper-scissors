
// function for computer to randomly choose an option
function getRandomChoice(){
    plays = ["rock", "paper", "scissors"];
    randomChoice = plays[Math.floor(Math.random()*plays.length)];
    document.getElementById("computer-choice").innerHTML = randomChoice;
    return randomChoice;
}

// function to play a single round
function playRound(playerSelection, computerSelection){
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
}

// function to hide start-container and show game-container
function startGame(){
    document.getElementById("start-container").style.display = "block";
    document.getElementById("game-container").style.display = "none";
    document.getElementById("end-container").style.display = "none";
    //document.getElementById("computer-choice").style.display = "none";
    document.getElementById("start-button").addEventListener("click", function() {
        document.getElementById("start-container").style.display = "none";
    });
    document.getElementById("start-button").addEventListener("click", function() {
        document.getElementById("game-container").style.display = "flex";
    });
    document.getElementById("year").innerHTML = startYear;
}

// function to hide game-container and show end-container; report winner
function finishGame (){
    let champion = "";
    document.getElementById("game-container").style.display = "none";
    document.getElementById("end-container").style.display = "block";
    if (computerScore > playerScore) {
        champion = "The Machine!";
    } else {
        champion = "You!";
    }
    document.getElementById("winner").innerHTML = champion;
}

// update score
function updateScore(playerSelection){
    let computerSelection = getRandomChoice();
    let winner = playRound(playerSelection, computerSelection);
    let result = "";
    if (winner == "player"){
        playerScore += 1;
        result = "You win! " + playerSelection + " beats " + computerSelection + "!";
    } else if (winner == "computer"){
        computerScore += 1;
        result = "You lose! " + computerSelection + " beats " + playerSelection + "!";
    } else {
        result = "It's a draw! You both played " + playerSelection + "!";
    }

    let update = document.createElement("p");
    let node = document.createTextNode(result);
    update.appendChild(node);
    document.getElementById("updates").appendChild(update);
    document.getElementById("player-score").innerHTML = playerScore;
    document.getElementById("computer-score").innerHTML = computerScore;
    document.getElementById("computer-choice").style.display = "flex";
    if (computerScore > 4 || playerScore > 4){
        finishGame();
    }
}

// reset everything
function resetGame() {
    playerScore = 0;
    computerScore = 0;
    document.getElementById("updates").innerHTML = "";
    document.getElementById("player-score").innerHTML = "";
    document.getElementById("computer-score").innerHTML = "";
}

// main game function
function game() {
    startGame();
    document.getElementById("rockBtn").addEventListener("click", function () {
        updateScore("rock");
    })
    document.getElementById("paperBtn").addEventListener("click", function () {
        updateScore("paper");
    })
    document.getElementById("scissorsBtn").addEventListener("click", function () {
        updateScore("scissors");
    })
    
    document.getElementById("restart").addEventListener("click", function (){
        startYear += 1;
        resetGame();
        startGame();
    })
}

// set global variables
let playerScore = 0;
let computerScore = 0;
let startYear = 2022;

game();