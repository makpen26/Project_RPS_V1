function generateRandomIntUpto (maxInt, numToShiftBy=0) {
    return Math.floor(Math.random() * maxInt) + numToShiftBy;
}






function matchIntegerToHandChoice (intToMatch) {
    let singleHandValue = '';

    switch (intToMatch) {
        case 1: 
            singleHandValue = 'rock';
            break;
        case 2: 
            singleHandValue = 'paper';
            break;
        case 3:
            singleHandValue = 'scissors';
            break;
    }

    return singleHandValue;
}






function getComputerChoice() {
    let getHandValue = generateRandomIntUpto(3, 1);
    return matchIntegerToHandChoice(getHandValue);
}






function playRound(humanChoice, computerChoice) {
    let decisionMessage = 'Tie! Neither players win or lose';
    let humanIsWinning = false;
    if (humanChoice === computerChoice) {
        console.log(decisionMessage);
        return null;
    } else {
        if (humanChoice === matchIntegerToHandChoice(1) && computerChoice === matchIntegerToHandChoice(2)) {
            decisionMessage = "You lose! Paper beats Rock.";
            console.log(decisionMessage);
            return humanIsWinning;
        } else if (humanChoice === matchIntegerToHandChoice(2) && computerChoice === matchIntegerToHandChoice(3)) {
            decisionMessage = "You lose! Scissors beat Paper.";
            console.log(decisionMessage);
            return humanIsWinning;
        } else if (humanChoice === matchIntegerToHandChoice(3) && computerChoice === matchIntegerToHandChoice(1)) {
            decisionMessage = "You lose! Rock beats Scissors.";
            console.log(decisionMessage);
            return humanIsWinning;
        } else if (humanChoice === matchIntegerToHandChoice(1) && computerChoice === matchIntegerToHandChoice(3)) {
            decisionMessage = "You win! Rock beats Scissors.";
            console.log(decisionMessage);
            return !humanIsWinning;
        } else if (humanChoice === matchIntegerToHandChoice(3) && computerChoice === matchIntegerToHandChoice(2)) {
            decisionMessage = "You win! Scissors beat Paper.";
            console.log(decisionMessage);
            return !humanIsWinning;
        } else if (humanChoice === matchIntegerToHandChoice(2) && computerChoice === matchIntegerToHandChoice(1)) {
            decisionMessage = "You win! Paper beats Rock.";
            console.log(decisionMessage);
            return !humanIsWinning;
        }
    }
}






let allHandsButton = document.querySelector('#human-hands-choices');

let humanScore = 0;
let computerScore = 0;

allHandsButton.addEventListener('click', (event) => {
    let target = event.target;

    switch (target.id) {
        case 'rock':
            const humanSelectedRock = event.target.id;
            const computerSelectedRock = getComputerChoice();
            let round1WinnerResult = playRound(humanSelectedRock, computerSelectedRock);
            if (!(round1WinnerResult == null)) {
                round1WinnerResult ? humanScore += 1 : computerScore += 1;
            } else {
                humanScore = humanScore;
                computerScore = computerScore;
            }
            break;
        case 'paper':
            const humanSelectedPaper = event.target.id;
            const computerSelectedPaper = getComputerChoice();
            let round2WinnerResult = playRound(humanSelectedPaper, computerSelectedPaper);
            if (!(round2WinnerResult == null)) {
                round2WinnerResult ? humanScore += 1 : computerScore += 1;
            } else {
                humanScore = humanScore;
                computerScore = computerScore;
            }
            break;
        case 'scissors':
            const humanSelectedScissors = event.target.id;
            const computerSelectedScissors = getComputerChoice();
            let round3WinnerResult = playRound(humanSelectedScissors, computerSelectedScissors);
            if (!(round3WinnerResult == null)) {
                round3WinnerResult ? humanScore += 1 : computerScore += 1;
            } else {
                humanScore = humanScore;
                computerScore = computerScore;
            }
            break;
    }

    console.log("\n");
    console.log(`human score = ${humanScore}`);
    console.log(`computer score = ${computerScore}`);
    console.log("\n");
});