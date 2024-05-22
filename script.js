//global variables
const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

let playerScore = 0;
let computerScore = 0;
let tieScore = 0;

//DOM ELEMENTS
const rockBtn = document.querySelector("#rockBtn");
const paperBtn = document.querySelector("#paperBtn");
const scissorsBtn = document.querySelector("#scissorsBtn");
const startBtn = document.querySelector("#startBtn");

const gameStatusDiv = document.querySelector("#game-status");
const scoreBoard = document.querySelector("#score-board");
const result = document.querySelector("#result");

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
    tieScore++;
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

//update score board func
const roundSpan = document.createElement("span");
const playerSpan = document.createElement("span");
const computerSpan = document.createElement("span");
const tieSpan = document.createElement("span");

function updateScoreBoard(round, playerScore, computerScore, tieScore) {
  roundSpan.textContent = `Round = ${round}`;
  playerSpan.textContent = `Player = ${playerScore}`;
  computerSpan.textContent = `Computer = ${computerScore}`;
  tieSpan.textContent = `Tie = ${tieScore}`;

  scoreBoard.appendChild(roundSpan);
  scoreBoard.appendChild(playerSpan);
  scoreBoard.appendChild(computerSpan);
  scoreBoard.appendChild(tieSpan);

  return scoreBoard;
}

//logic to play the entire game
async function playGame() {
  for (let round = 1; round <= 5; round++) {
    //show score board as game starts
    gameStatusDiv.classList.add("game-status");
    startBtn.textContent = "Restart Game";

    updateScoreBoard(round, playerScore, computerScore, tieScore);

    const playerChoice = await getPlayerChoice();
    const computerChoice = getComputerChoice();

    result.textContent = playRound(playerChoice, computerChoice);
  }

  updateScoreBoard(round, playerScore, computerScore, tieScore);
}

async function startGame() {
  return new Promise((resolve) =>
    startBtn.addEventListener("click", () => {
      rockBtn.classList.add("visible");
      paperBtn.classList.add("visible");
      scissorsBtn.classList.add("visible");
      gameStatusDiv.classList.add("visible");

      scoreBoard.textContent = "";
      result.textContent = "";
      round = 1;
      playerScore = 0;
      computerScore = 0;
      tieScore = 0;

      resolve(playGame());
    })
  );
}

startGame();
