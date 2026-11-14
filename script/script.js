let humanscore = 0;
let computerscore = 0;


function playRound (humanchoice, computerchoice) {
    let humanSelection = humanchoice.toLowerCase();
    let computerSelection = computerchoice;


    if (humanSelection === "rock") {
        switch (computerSelection) {
            case ("rock") :
                console.log("It's a tie");
                break;

            case  ("paper") :
                console.log("Sorry the computer won");
                break;
            case ("scissor") :
                console.log("You won");
                break;


        }
    }

}

playRound(getHumanChoice(), getComputerChoice());

//console.log(playRound(getHumanChoice(), getComputerChoice()));



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