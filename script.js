
function getComputerChoice () {
    const choices = ["rock", "paper", "scissors"]
    const index = Math.floor((Math.random())) % choices.length;
    return choices[index];
}

function getHumanChoice () {
    const choice = prompt("Enter your Choice (Rock, Paper, Scissors) or 'exit' to quit : ").toLowerCase();
    if(["rock", "paper", "scissors", "exit"].includes(choice))
        return choice;

    console.log("Invalid Input. Please Enter Rock, Paper or Scissors");
}

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

let humanScore = 0;
let computerScore = 0;


function playRound ( ) {
    const rules = {
        rock : {rock : "tie", paper: "lose", scissors: "win" },
        paper : {rock : "win", paper: "tie", scissors: "lose"},
        scissors : {rock: "lose", paper: "win", scissors: "tie"}
    }
    const humanChoice = getHumanChoice();
    if (humanChoice == "exit") return "exit";

    let computerChoice = getComputerChoice();
    
    const result = rules[computerChoice][humanChoice];
    switch(result){
        case "win": 
        console.log(`You lose! ${capitalize(computerChoice)} beats ${humanChoice}.`);
        computerScore++;
        break;
        case "lose":
        console.log(`You Win! ${capitalize(humanChoice)} beats ${computerChoice}.`)
        humanScore++;
        break;
        case "tie":
        console.log(`It's a tie! you both picked ${capitalize(humanChoice)}`);
        break;
        default:
        console.log( "Invalid Choice !!");
    }

}

function playGame(){
    console.log("Welcome to Rock-Paper-Scissors!")
    
    humanScore = 0;
    computerScore = 0;

    for(let i = 0; i<5 ; i++){
        console.log(`\nRound ${i+1}`);
        const roundResult = playRound();
        if(roundResult == 'exit'){
            console.log("You exited the game.");
            break;
        }
    }
    console.log("\nGame Over !!");
    console.log(`Final Scores: \nHuman: ${humanScore} \nComputer : ${computerScore}`);

    if(humanScore > computerScore){
        console.log("Congratulations! You won the game!");
    }else if (humanScore < computerScore){
        console.log("Better Luck next time! The computer won the game");
    }else {
        console.log("It's a Tie! Well Played")
    }
}

playGame();




