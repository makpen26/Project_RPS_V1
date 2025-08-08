function getComputerChoice() {
    let getHandValue = Math.floor(Math.random() * 3) + 1;
    let getHandValueAsText = ' ';
    switch (getHandValue) {
        case 1: 
            getHandValueAsText = 'rock';
            break;
        case 2:
            getHandValueAsText = 'paper';
            break;
        case 3:
            getHandValueAsText = 'scissors';
            break;
    }

    return getHandValueAsText;
}






function getHumanChoice() {
    let getHumanHandValue = prompt('Which hand do you want to play? (1 for rock, 2 for paper, 3 for scissors)');
    //I have to parse the input from user to integer to be able to get an integer comparison. Otherwise, comparison is off.
    let userHandChoice = ' ';
    if (parseInt(getHumanHandValue) === 1) {
        userHandChoice = 'rock';
    } else if (parseInt(getHumanHandValue) === 2) {
        userHandChoice = 'paper';
    } else {
        userHandChoice = 'scissors';
    }

    return userHandChoice;
}


let humanScore = 0;
let computerScore = 0;



function playRound(humanChoice, computerChoice) {

    /*
    let humanScore = 0;
    let computerScore = 0;
    */
    let oneRoundWhoWin = 'none'; //'c', 'h', 'none'

    if (humanChoice.toUpperCase() === computerChoice.toUpperCase()) {
        console.log("Tie! Computer and Human play the same hand.");
    } else {
        if (humanChoice.charAt(0).toUpperCase() === 'R') {
            if (computerChoice.charAt(0).toUpperCase() === 'P') {
                computerScore += 1;
                oneRoundWhoWin = 'c';
                console.log("You play rock. Computer plays paper. You lose.");
            } else {
                humanScore += 1;
                console.log("You play rock. Computer plays scissors. You win!");
                oneRoundWhoWin = 'h';
            }
        } else if (humanChoice.charAt(0).toUpperCase() === 'P') {
            if (computerChoice.charAt(0).toUpperCase() === 'R') {
                humanScore += 1;
                console.log("You play paper. Computer plays rock. You win!");
                oneRoundWhoWin = 'h';
            } else {
                computerScore += 1;
                console.log("You play paper. Computer plays scissors. You lose.");
                oneRoundWhoWin = 'c';
            }
        } else {
            if (computerChoice.charAt(0).toUpperCase() === 'R') {
                computerScore += 1;
                console.log("You play scissors. Computer plays rock. You lose.");
                oneRoundWhoWin = 'c';
            } else {
                humanScore += 1;
                console.log("You play scissors. Computer plays paper. You win!");
                oneRoundWhoWin = 'h';
            }
        }
    }

    return oneRoundWhoWin;
}






function playGame() {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    //let x = checkWhoIsWinning(playRound(humanSelection, computerSelection).toLowerCase());
    /*playRound(humanSelection, computerSelection).toLowerCase() === 'none' ?   ignore : call function to check for 'human wins' and call function to check for 
                                                                               'computer wins'*/

    
    //playRound(humanSelection, computerSelection).toLowerCase() === 'none' ? x = 0 : x += x;
    //console.log(x);
    
    const humanSelection1 = getHumanChoice();
    const computerSelection1 = getComputerChoice();
    playRound(humanSelection1, computerSelection1);
    //let x1 = checkWhoIsWinning(playRound(humanSelection1, computerSelection1).toLowerCase());
    //playRound(humanSelection1, computerSelection1).toLowerCase() === 'none' ? x1 = 0 : x1 += x1;
    //console.log(x1);    
    //console.log(playRound(humanSelection1, computerSelection1));
    
    const humanSelection2 = getHumanChoice();
    const computerSelection2 = getComputerChoice();
    playRound(humanSelection2, computerSelection2);
    //let x2 = checkWhoIsWinning(playRound(humanSelection2, computerSelection2).toLowerCase());
    //playRound(humanSelection2, computerSelection2).toLowerCase() === 'none' ? x2 = 0 : x2 += x2;
    //console.log(x2);        
    //console.log(playRound(humanSelection2, computerSelection2));

    const humanSelection3 = getHumanChoice();
    const computerSelection3 = getComputerChoice();
    playRound(humanSelection3, computerSelection3);
    //let x3 = checkWhoIsWinning(playRound(humanSelection3, computerSelection3).toLowerCase());
    //playRound(humanSelection3, computerSelection3).toLowerCase() === 'none' ? x3 = 0 : x3 += x3;
    //console.log(x3);    
    //console.log(playRound(humanSelection3, computerSelection3));

    const humanSelection4 = getHumanChoice();
    const computerSelection4 = getComputerChoice();
    playRound(humanSelection4, computerSelection4);
    //let x4 = checkWhoIsWinning(playRound(humanSelection4, computerSelection4).toLowerCase());
    //playRound(humanSelection4, computerSelection4).toLowerCase() === 'none' ? x4 = 0 : x4 += x4;
    //console.log(x4);        
    //console.log(playRound(humanSelection4, computerSelection4));
    
    

    
    console.log(`human score: ${humanScore}`);
    console.log(`computer score: ${computerScore}`);
    console.log("\n");
    console.log(`Tie ${5 - (humanScore + computerScore)} many time(s).`);
    
}




function checkWhoIsWinning(inputString) {
    let computerWon = 0;
    let humanWon = 0;
    return (inputString.toLowerCase() === 'c') ? computerWon += 1 : humanWon += 1;
}





playGame();


