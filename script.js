//global variables
const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

let humanScore = 0;
let computerScore = 0;

// logic to get the computer choice
function getComputerChoice() {
  const choices = [ROCK, PAPER, SCISSORS];

  //generate random index from 0 to 2
  let randomIndex = Math.floor(Math.random() * choices.length);

  //return the choices corresponding to the index
  return choices[randomIndex];
}

//logic to get the human choice
function getHumanChoice() {
  let humanChoice = prompt(
    "Write your choice(Rock, Paper or Scissors): "
  ).toLowerCase();
  return humanChoice;
}

//logic to play a single round
function playRound(humanChoice, computerChoice) {
  if (![ROCK, PAPER, SCISSORS].includes(humanChoice)) {
    throw new Error("Invalid input. Please choose rock, paper or scissors.");
  }

  if (humanChoice == computerChoice) {
    return "It's a tie!";
  }

  if (
    (humanChoice == ROCK && computerChoice == SCISSORS) ||
    (humanChoice == PAPER && computerChoice == ROCK) ||
    (humanChoice == SCISSORS && computerChoice == PAPER)
  ) {
    humanScore++;
    return `You won! ${humanChoice} beats ${computerChoice}`;
  } else {
    computerScore++;
    return `You lose! ${computerChoice} beats ${humanChoice}`;
  }
}

//logic to play the entire game
function playGame() {
  console.log("The Game of 5 Rounds begin...");

  for (let round = 1; round <= 5; round++) {
    console.log(
      `Round = ${round}, Player Score = ${humanScore}, Computer Score = ${computerScore}`
    );

    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();

    console.log(playRound(humanChoice, computerChoice));
  }

  console.log(
    `Best of 5 is Over. The final Score is Player Score = ${humanScore}, Computer Score = ${computerScore}, Draw = ${
      5 - humanScore - computerScore
    }`
  );
}

playGame();
