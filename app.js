// Computer choices
function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  let random_number = Math.floor(Math.random() * choices.length);
  return choices[random_number].toUpperCase();
}
const btns = document.querySelectorAll('button');
const result = document.querySelector('.result');
const rounds = document.querySelector('.rounds');
const scores = document.querySelector('.scores');

let computer_score = 0;
let player_score = 0;
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    rounds.textContent = "Tie";
  } else if (playerSelection === "ROCK" && computerSelection === "PAPER") {
    computer_score++;
    return rounds.textContent = "You Lose! Paper beats Rock";
    
  } else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
    computer_score++;
    return "You lose! Rock beats Scissors";
  } else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
    computer_score++;
    return "You lose! Scissors beats Paper";
  } else if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
    player_score++;
    return "You win! Rock beats Scissors";
  } else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
    player_score++;
    return "You win! Paper beats Rock";
  } else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
    player_score++;
    return "You win! Scissors beats Paper";
  }
}
function game(){
  // if(player_score === 5 || computer_score === 5){
    
  // }
  if(player_score === 5) {
    player_score = 0;
    computer_score = 0;
    return `You win the game!`;
  } else if(computer_score === 5){
    player_score = 0;
    computer_score = 0;
    return`You lose the game!`;
  }
 
}

btns.forEach((btn) => btn.addEventListener('click', () => {
  const playerSelection = btn.textContent.toUpperCase();
  const computerSelection = getComputerChoice();
  rounds.textContent = playRound(playerSelection, computerSelection);
  scores.textContent = `Computer's score ${computer_score}  :  Playes's score ${player_score}`
  result.textContent = game();
  
}));
