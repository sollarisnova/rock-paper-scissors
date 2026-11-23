let humanScore = 0;
let computerScore = 0;


const rockButton = document.querySelector('#rockButton');
const paperButton = document.querySelector('#paperButton');
const scissorButton = document.querySelector('#scissorButton');

const showResults = document.querySelector('#show-who-won');
const score = document.querySelector('#score');

rockButton.addEventListener('click', () => playRound('rock', getComputerChoice()));

paperButton.addEventListener('click', () => playRound('paper', getComputerChoice()));

scissorButton.addEventListener('click', () => playRound('scissor', getComputerChoice()));



// this start the game playGame(); 

//this function plays 5 rounds of the game and display the scores on the console
function playGame () {


        playRound(getHumanChoice(), getComputerChoice());
        
        showResults.textContent = `Your score: ${humanScore} - Computer score: ${computerScore}`;
        
        //console.log(`Your score: ${humanScore} - Computer score: ${computerScore}`);
    
}

/* this function choose a winner using if and switch statementes and add a point to a score using human and 
computerScoreAdder and if entere and invalid selection prompt a enter valid selection mesaage */

function playRound (humanchoice, computerchoice) {
        let humanSelection = humanchoice.toLowerCase();
        let computerSelection = computerchoice;



        if (humanSelection === "rock") {
            switch (computerSelection) {
                case ("rock"):
                    showResults.textContent = "It's a tie";   
                //console.log("It's a tie");
                    break;

                case  ("paper"):
                    showResults.textContent = "Sorry the computer won";
                    //console.log("Sorry the computer won");
                    computerScoreAdder()
                    break;
                case ("scissor"):
                    showResults.textContent = "You won";
                    //console.log("You won");
                    humanScoreAdder()
                    break;
            }

        }

        else if (humanSelection === "paper") {
            switch (computerSelection) {
                case ("rock"):
                    showResults.textContent = "You won";
                    //console.log("You won");
                    humanScoreAdder()
                    break;
                case ("paper"):
                    showResults.textContent = "It's a tie";   
                    //console.log("It's a tie");
                    break;
                case ("scissor"):
                    showResults.textContent = "Sorry the computer won";
                    //console.log("Sorry the computer won");
                    computerScoreAdder()
                    break;
            }
        }

        else if (humanSelection === "scissor") {
            switch (computerSelection) {
                case ("rock"):
                    showResults.textContent = "Sorry the computer won";
                    //console.log("Sorry the computer won");
                    computerScoreAdder()
                    break;
                case ("paper"):
                    showResults.textContent = "You won";
                    //console.log("You won");
                    humanScoreAdder()
                    break;
                case ("scissor"):
                    showResults.textContent = "It's a tie";   
                    //console.log("It's a tie");
                    break;
            }
        }

        else {
            showResults.textContent = "Please enter a valid selection";
            //console.log("Please enter a valid selection");
        }

        score.textContent = `this is the human score ${humanScore} and this is the computer score ${computerScore}`;

        const results = function() {if(humanScore >= 5) {score.textContent = 'the winner is the human'}
            else if (computerScore >= 5) {score.textContent = 'the winner is the';}}

            results()

        

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