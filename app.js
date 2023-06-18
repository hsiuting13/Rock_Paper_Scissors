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
    rounds.textContent = "You Lose! Paper beats Rock";
    computer_score++;
  } else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
   
    rounds.textContent = "You lose! Rock beats Scissors";
    computer_score++;
  } else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
   
    rounds.textContent = "You lose! Scissors beats Paper";
    computer_score++;
  } else if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
   
    rounds.textContent = "You win! Rock beats Scissors";
    player_score++;
  } else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
    
    rounds.textContent = "You win! Paper beats Rock";
    player_score++;
  } else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
    
    rounds.textContent = "You win! Scissors beats Paper";
    player_score++;
  }
}
function game(){
  if(player_score === 5) {
    result.textContent = `You win the game! `
  } else if(computer_score === 5){
    result.textContent = `You lose the game! `
  }
  if(player_score === 5 || computer_score === 5){
    player_score = 0;
    computer_score = 0;
  }
}



btns.forEach((btn) => btn.addEventListener('click', () => {
  const playerSelection = btn.textContent.toUpperCase();
  const computerSelection = getComputerChoice();
  
  playRound(playerSelection, computerSelection);
  scores.textContent = `Computer's score ${computer_score}  :  Playes's score ${player_score}`
  // console.log(playerSelection)
  // console.log(computerSelection)
  game();
}));
