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






const linkResultDiv = document.createElement("div");
linkResultDiv.setAttribute("id", "result-Div");
document.body.appendChild(linkResultDiv);


const decisionContent = document.createElement("p");
decisionContent.classList.add("resultDisplay");






function playRound(humanChoice, computerChoice) {
    let decisionMessage = 'Tie! Neither players win or lose';
    let humanIsWinning = false;

    if (humanChoice === computerChoice) {
        decisionContent.textContent = decisionMessage;
        linkResultDiv.appendChild(decisionContent);
        return null;
    } else {
        if (humanChoice === matchIntegerToHandChoice(1) && computerChoice === matchIntegerToHandChoice(2)) {
            decisionMessage = "You lose! Paper beats Rock.";
            decisionContent.textContent = decisionMessage;
            linkResultDiv.appendChild(decisionContent);
            return humanIsWinning;
        } else if (humanChoice === matchIntegerToHandChoice(2) && computerChoice === matchIntegerToHandChoice(3)) {
            decisionMessage = "You lose! Scissors beat Paper.";
            decisionContent.textContent = decisionMessage;
            linkResultDiv.appendChild(decisionContent);
            return humanIsWinning;
        } else if (humanChoice === matchIntegerToHandChoice(3) && computerChoice === matchIntegerToHandChoice(1)) {
            decisionMessage = "You lose! Rock beats Scissors.";
            decisionContent.textContent = decisionMessage;
            linkResultDiv.appendChild(decisionContent);
            return humanIsWinning;
        } else if (humanChoice === matchIntegerToHandChoice(1) && computerChoice === matchIntegerToHandChoice(3)) {
            decisionMessage = "You win! Rock beats Scissors.";
            decisionContent.textContent = decisionMessage;
            linkResultDiv.appendChild(decisionContent); 
            return !humanIsWinning;
        } else if (humanChoice === matchIntegerToHandChoice(3) && computerChoice === matchIntegerToHandChoice(2)) {
            decisionMessage = "You win! Scissors beat Paper.";
            decisionContent.textContent = decisionMessage;
            linkResultDiv.appendChild(decisionContent);
            return !humanIsWinning;
        } else if (humanChoice === matchIntegerToHandChoice(2) && computerChoice === matchIntegerToHandChoice(1)) {
            decisionMessage = "You win! Paper beats Rock.";
            decisionContent.textContent = decisionMessage;
            linkResultDiv.appendChild(decisionContent); 
            return !humanIsWinning;
        }
    }
}






const roundNumberUpdate = document.querySelector(".round-tracking");


let allHandsButton = document.querySelector('#human-hands-choices');





let humanScore = 0;
let computerScore = 0;


let roundCounter = 0;


const scoreBoardHuman = document.createElement("h3");
scoreBoardHuman.classList.add("scoreBoard");


const scoreBoardComputer = document.createElement("h3");
scoreBoardComputer.classList.add("scoreBoard");


const winnerAfter5RoundsPlayed = document.createElement("div");
winnerAfter5RoundsPlayed.classList.add("winnerAnnounced");





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
            roundCounter += 1;
            roundNumberUpdate.textContent = `Round ${roundCounter}`;
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
            roundCounter += 1;
            roundNumberUpdate.textContent = `Round ${roundCounter}`;
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
            roundCounter += 1;
            roundNumberUpdate.textContent = `Round ${roundCounter}`;
            break;
    }

    scoreBoardHuman.textContent = `human score ${humanScore}`;
    scoreBoardComputer.textContent = `computer score ${computerScore}`;

    if (humanScore === 5) {
        winnerAfter5RoundsPlayed.textContent = 'You are the first to score 5. You win!';
        humanScore = 0;
        computerScore = 0;
        roundCounter = 0;
    } 

    if (computerScore === 5) {
        winnerAfter5RoundsPlayed.textContent = "Computer is the first to score 5. You lose!";
        humanScore = 0;
        computerScore = 0;
        roundCounter = 0;
    }
    
    linkResultDiv.appendChild(scoreBoardHuman);
    linkResultDiv.appendChild(scoreBoardComputer);
    linkResultDiv.appendChild(winnerAfter5RoundsPlayed);
});


let resetButton = document.querySelector('#resetBtn');
resetButton.addEventListener('click', () => {
    winnerAfter5RoundsPlayed.textContent = '';
    humanScore = 0;
    computerScore = 0;
    roundCounter = 0;
    roundNumberUpdate.textContent = `Round ${roundCounter}`;
    scoreBoardHuman.textContent = `human score ${humanScore}`;
    scoreBoardComputer.textContent = `computer score ${computerScore}`;
    //linkResultDiv.removeChild(decisionContent); //works but will need at least a button click. Otherwise, not found error
    
});







