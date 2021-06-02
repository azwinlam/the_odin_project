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

    if (playerSelection === 'rock'){
        if (computerSelection === 'paper'){
            computerWins += 1
            return "You Lose! Paper beats Rock"
        } else if (computerSelection === 'rock') {
            return "You Tie! Rock on Rock"
        } else if (computerSelection === 'scissor') {
            playerWins += 1
            return "You Win! Rock beats Scissors"
        }
    } else if (playerSelection === 'paper'){
        if (computerSelection === 'paper'){
            return "You Tie! Paper on Paper"
        } else if (computerSelection === 'rock') {
            playerWins += 1
            return "You Win! Paper beats Rock"
        } else if (computerSelection === 'scissor') {
            computerWins += 1
            return "You Lose! Scissor beats Paper"
        }
    } else if (playerSelection === 'scissor'){
        if (computerSelection === 'paper'){
            playerWins += 1
            return "You Win! Scissor beats Paper"
        } else if (computerSelection === 'rock') {
            computerWins += 1
            return "You Lose! Rock beats Scissor"
        } else if (computerSelection === 'scissor') {
            return "You Tie! Scissor on Scissor"
        } 
    }
}



for (i=1;i<=5;i++) {
    let getPlayerSelection = prompt('Please select your choice :').toLowerCase()
    const computerSelection = computerPlay()
    console.log(`Rounds: ${rounds}`)
    console.log(playRound(getPlayerSelection,computerSelection))
    console.log(`Computer: ${computerWins} Player:${playerWins}`)
}



