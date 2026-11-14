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

console.log(getComputerChoice());