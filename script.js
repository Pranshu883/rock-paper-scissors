let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const index = Math.floor(Math.random() * choices.length);
    return choices[index];
}

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

function playRound(humanChoice) {
    const rules = {
        rock: { rock: "tie", paper: "lose", scissors: "win" },
        paper: { rock: "win", paper: "tie", scissors: "lose" },
        scissors: { rock: "lose", paper: "win", scissors: "tie" }
    };

    const computerChoice = getComputerChoice();
    const result = rules[humanChoice][computerChoice];
    const messageElement = document.getElementById("resultMessage");

    switch (result) {
        case "win":
            humanScore++;
            messageElement.textContent = `You Win! ${capitalize(humanChoice)} beats ${computerChoice}.`;
            break;
        case "lose":
            computerScore++;
            messageElement.textContent = `You Lose! ${capitalize(computerChoice)} beats ${humanChoice}.`;
            break;
        case "tie":
            messageElement.textContent = `It's a tie! You both chose ${humanChoice}.`;
            break;
    }

    updateScores();
    checkGameOver();
}

function updateScores() {
    document.getElementById("humanScore").textContent = humanScore;
    document.getElementById("computerScore").textContent = computerScore;
}

function checkGameOver() {
    if (humanScore >= 5) {
        alert("You won the game!");
        resetGame();
    } else if (computerScore >= 5) {
        alert("The computer won the game!");
        resetGame();
    }
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    updateScores();
    document.getElementById("resultMessage").textContent = "New game started!";
}

// Attach event listeners to buttons
document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {
        const choice = button.id;
        playRound(choice);
    });
});
