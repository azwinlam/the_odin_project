console.log('Welcome to the game of Rock, Paper, Scissor!')

let choices = ['Rock','Paper','Scissor']

function computerPlay(){
    const decision = choices[Math.floor(Math.random() * choices.length)].toLowerCase()
    return decision
}

let playerWins = 0
let computerWins = 0
let rounds = 1

function playRound(playerSelection, computerSelection){
    rounds += 1
    console.log(`You Picked ${playerSelection}`)
    console.log(`Computer Picked ${computerSelection}`)
    if (rounds === 6) {
        console.log(`FINAL SCORE ------ Computer: ${computerWins} Player:${playerWins}`)
        if (playerWins>computerWins){
            alert("You Win! End of Game")
        } else {
            alert ("You Lose! End of Game")
        }

        rounds = 1;
        return
    } else {
        console.log(`Computer: ${computerWins} Player:${playerWins}`)
    }
    if (playerSelection === 'rock'){
        if (computerSelection === 'paper'){
            computerWins += 1
            console.log("You Lose! Paper beats Rock")
        } else if (computerSelection === 'rock') {
            console.log("You Tie! Rock on Rock")
        } else if (computerSelection === 'scissor') {
            playerWins += 1
            console.log("You Win! Rock beats Scissors")
        }
    } else if (playerSelection === 'paper'){
        if (computerSelection === 'paper'){
            console.log("You Tie! Paper on Paper")
        } else if (computerSelection === 'rock') {
            playerWins += 1
            console.log("You Win! Paper beats Rock")
        } else if (computerSelection === 'scissor') {
            computerWins += 1
            console.log("You Lose! Scissor beats Paper")
        }
    } else if (playerSelection === 'scissor'){
        if (computerSelection === 'paper'){
            playerWins += 1
            console.log("You Win! Scissor beats Paper")
        } else if (computerSelection === 'rock') {
            computerWins += 1
            console.log("You Lose! Rock beats Scissor")
        } else if (computerSelection === 'scissor') {
            console.log("You Tie! Scissor on Scissor")
        } 
    }
}




const grabButton = document.querySelectorAll('button');
grabButton.forEach((button) => {
    button.addEventListener('click', () => {
        getPlayerSelection = button.id.toLowerCase()
        const computerSelection = computerPlay()
        console.log(`Rounds: ${rounds}`)
        playRound(getPlayerSelection,computerSelection)
    });
});