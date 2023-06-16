// Computer choices
function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  let random_number = Math.floor(Math.random() * choices.length);
  return choices[random_number].toUpperCase();
}
let player_score = 0;
let computer_score = 0;

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "Tie";
  } else if (playerSelection === "ROCK" && computerSelection === "PAPER") {
    computer_score++;
    return "You Lose! Paper beats Rock";
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
  } else {
    return "Plz! Provide the correct information";
  }
}
function game(){
  if(player_score === 5) {
    console.log(
      `You win the game! Player's score ${player_score}, Computer's score ${computer_score}`
    );
  } else if(computer_score === 5){
    console.log(
      `You lose the game! Player's score ${player_score}, Computer's score ${computer_score}`
    );
  } 
}


const btns = document.querySelectorAll('button')
btns.forEach((btn) => btn.addEventListener('click', () => {
  const playerSelection = btn.textContent.toUpperCase();
  const computerSelection = getComputerChoice();
  console.log(playerSelection)
  console.log(computerSelection)
  console.log(playRound(playerSelection, computerSelection));
  console.log(game());
}))
