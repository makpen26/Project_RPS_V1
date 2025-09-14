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






function getHumanChoice() {
    let getHumanHandValue = prompt('Pick hands value (Rock, Paper, Scissors)');
    let userHandChoice = '';
    if (getHumanHandValue.toLowerCase() === 'rock') {
        userHandChoice = matchIntegerToHandChoice(1);
    } else if ((getHumanHandValue).toLowerCase() === 'paper') {
        userHandChoice = matchIntegerToHandChoice(2);
    } else {
        userHandChoice = matchIntegerToHandChoice(3);
    }

    return userHandChoice;
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






function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    const round1HumanSelection = getHumanChoice();
    const round1ComputerSelection = getComputerChoice();
    let round1WinnerResult = playRound(round1HumanSelection, round1ComputerSelection);
    if (!(round1WinnerResult == null)) {
        round1WinnerResult ? humanScore += 1 : computerScore += 1;
    } else {
        humanScore = humanScore;
        computerScore = computerScore;
    }


    const round2HumanSelection = getHumanChoice();
    const round2ComputerSelection = getComputerChoice();
    let round2WinnerResult = playRound(round2HumanSelection, round2ComputerSelection);
    if (!(round2WinnerResult == null)) {
        round2WinnerResult ? humanScore += 1 : computerScore += 1;
    } else {
        humanScore = humanScore;
        computerScore = computerScore;
    }


    const round3HumanSelection = getHumanChoice();
    const round3ComputerSelection = getComputerChoice();
    let round3WinnerResult = playRound(round3HumanSelection, round3ComputerSelection);
    if (!(round3WinnerResult == null)) {
        round3WinnerResult ? humanScore += 1 : computerScore += 1;
    } else {
        humanScore = humanScore;
        computerScore = computerScore;
    }

    const round4HumanSelection = getHumanChoice();
    const round4ComputerSelection = getComputerChoice();
    let round4WinnerResult = playRound(round4HumanSelection, round4ComputerSelection);
    if (!(round4WinnerResult == null)) {
        round4WinnerResult ? humanScore += 1 : computerScore += 1;
    } else {
        humanScore = humanScore;
        computerScore = computerScore;
    }

    const round5HumanSelection = getHumanChoice();
    const round5ComputerSelection = getComputerChoice();
    let round5WinnerResult = playRound(round5HumanSelection, round5ComputerSelection);
    if (!(round5WinnerResult == null)) {
        round5WinnerResult ? humanScore += 1 : computerScore += 1;
    } else {
        humanScore = humanScore;
        computerScore = computerScore;
    }

    console.log(`total human score = ${humanScore}`);
    console.log(`total computer score = ${computerScore}`);
    console.log(`total ties ${5 - (humanScore + computerScore)}`);
}








playGame();


