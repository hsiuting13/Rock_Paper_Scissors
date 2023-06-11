const choices = ["Rock", "Paper", "Scissors"];
// Computer choices
function getComputerChoice() {
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
function game() {
  const playerSelection = prompt(
    "Pick a choice: Rock, Paper, Scissors!"
  ).toUpperCase();
  const computerSelection = getComputerChoice();
  return playRound(playerSelection, computerSelection);
}
// It will repeat 5 times, who ever has the highest scores wins the game?
function winner() {
  for (let i = 0; i < 5; i++) {
    console.log(game());
  }
  if (player_score === computer_score) {
    console.log(
      `It's a tie! Player's score ${player_score}, Computer's score ${computer_score}`
    );
  } else if (computer_score > player_score) {
    console.log(
      `You lose the game! Player's score ${player_score}, Computer's score ${computer_score}`
    );
  } else if (player_score > computer_score) {
    console.log(
      `You win the game! Player's score ${player_score}, Computer's score ${computer_score}`
    );
  }
}
winner();
