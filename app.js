const choices = ["Rock", "Paper", "Scissors"];
// Computer choices
function getComputerChoice() {
  let random_number = Math.floor(Math.random() * choices.length);
  return choices[random_number].toUpperCase();
}

function playRound(playerSelection, computerSelection) {
  //   let player = playerSelection.toUpperCase();
  if (playerSelection === computerSelection) {
    return "Tie";
  } else if (playerSelection === "ROCK" && computerSelection === "PAPER") {
    return "You Lose! Paper beats Rock";
  } else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
    return "You lose! Rock beats Scissors";
  } else if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
    return "You win! Rock beats Scissors";
  } else {
    return "You win! Rock beats Scissors";
  }
}
const playerSelection = prompt(
  "Pick a choice: Rock, Paper, Scissors!"
).toUpperCase();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
