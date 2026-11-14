let humanScore = 0;
let computerScore = 0;






playGame(); 

//this function plays 5 rounds of the game and display the scores on the console
function playGame () {
    for (i=1; i<=5; i++) {

        playRound(getHumanChoice(), getComputerChoice());
        console.log(`Your score: ${humanScore} - Computer score: ${computerScore}`);
    }
    
}

/* this function choose a winner using if and switch statementes and add a point to a score using human and 
computerScoreAdder and if entere and invalid selection prompt a enter valid selection mesaage */

function playRound (humanchoice, computerchoice) {
        let humanSelection = humanchoice.toLowerCase();
        let computerSelection = computerchoice;


        if (humanSelection === "rock") {
            switch (computerSelection) {
                case ("rock"):
                    console.log("It's a tie");
                    break;

                case  ("paper"):
                    console.log("Sorry the computer won");
                    computerScoreAdder()
                    break;
                case ("scissor"):
                    console.log("You won");
                    humanScoreAdder()
                    break;
            }

        }

        else if (humanSelection === "paper") {
            switch (computerSelection) {
                case ("rock"):
                    console.log("You won");
                    humanScoreAdder()
                    break;
                case ("paper"):
                    console.log("It's a tie");
                    break;
                case ("scissor"):
                    console.log("Sorry the computer won");
                    computerScoreAdder()
                    break;
            }
        }

        else if (humanSelection === "scissor") {
            switch (computerSelection) {
                case ("rock"):
                    console.log("Sorry the computer won");
                    computerScoreAdder()
                    break;
                case ("paper"):
                    console.log("You won");
                    humanScoreAdder()
                    break;
                case ("scissor"):
                    console.log("It's a tie");
                    break;
            }
        }

        else {
            console.log("Please enter a valid selection");
        }

        }
        
// this function let the computer choose between rock, paper and scissor
function getComputerChoice () {
    let choice = Math.random() * 100;
    if (choice <= 33) {
        choice = "rock";
        }

        else if (choice > 33 && choice < 66) {
            choice = "paper";
        }
        else {
            choice  = "scissor";
        }
        return choice;
    }

// this function get a choice from the human
function getHumanChoice (humanchoice) {
    humanchoice = prompt("Enter your choice", "Rock, Paper or Scissor");
    return humanchoice;
}

// this function add a point to the human score
function humanScoreAdder () {
    humanScore++
}

// this function add a point to the computer score
function computerScoreAdder () {
    computerScore++
}