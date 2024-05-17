//global variables
const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

let playerScore = 0;
let computerScore = 0;

//DOM ELEMENTS
const rockBtn = document.querySelector("#rockBtn");
const paperBtn = document.querySelector("#paperBtn");
const scissorsBtn = document.querySelector("#scissorsBtn");
const startBtn = document.querySelector("#startBtn");

// get computer choice
function getComputerChoice() {
  const choices = [ROCK, PAPER, SCISSORS];
  let randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

//get player choice
function getPlayerChoice() {
  return new Promise((resolve) => {
    //adding event listeners to the buttons
    rockBtn.addEventListener("click", () => resolve(ROCK));
    paperBtn.addEventListener("click", () => resolve(PAPER));
    scissorsBtn.addEventListener("click", () => resolve(SCISSORS));
  });
}

//logic to play a single round
function playRound(playerChoice, computerChoice) {
  if (![ROCK, PAPER, SCISSORS].includes(playerChoice)) {
    throw new Error("Invalid input. Please choose rock, paper or scissors.");
  }

  if (playerChoice == computerChoice) {
    return "It's a tie!";
  }

  if (
    (playerChoice == ROCK && computerChoice == SCISSORS) ||
    (playerChoice == PAPER && computerChoice == ROCK) ||
    (playerChoice == SCISSORS && computerChoice == PAPER)
  ) {
    playerScore++;
    return `You won! ${playerChoice} beats ${computerChoice}`;
  } else {
    computerScore++;
    return `You lose! ${computerChoice} beats ${playerChoice}`;
  }
}

//logic to play the entire game
async function playGame() {
  console.log("The Game of 5 Rounds begin...");

  for (let round = 1; round <= 5; round++) {
    console.log(
      `Round = ${round}, Player Score = ${playerScore}, Computer Score = ${computerScore}`
    );

    const playerChoice = await getPlayerChoice();
    const computerChoice = getComputerChoice();

    console.log(playRound(playerChoice, computerChoice));
  }

  console.log(
    `Best of 5 is Over. The final Score is Player Score = ${playerScore}, Computer Score = ${computerScore}, Draw = ${
      5 - playerScore - computerScore
    }`
  );
}

playGame();
