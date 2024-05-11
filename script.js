//global variables
let humanScore = 0;
let computerScore = 0;

// logic to get the computer choice
function getComputerChoice() {
  let randomChoice = Math.floor(Math.random() * 10); //gives number from 0 to 9

  switch (randomChoice) {
    case 1:
    case 3:
    case 5:
      return "rock";

    case 0:
    case 2:
    case 7:
    case 9:
      return "paper";

    case 4:
    case 6:
    case 8:
      return "scissors";
  }
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
  if (humanChoice == "rock") {
    if (computerChoice == "rock") {
      return "It's Draw.";
    } else if (computerChoice == "paper") {
      computerScore++;
      return "You lose! Paper beats Rock.";
    } else {
      humanScore++;
      return "You won! Rock beats Scissors.";
    }
  } else if (humanChoice == "paper") {
    if (computerChoice == "paper") {
      return "It's Draw.";
    } else if (computerChoice == "scissors") {
      computerScore++;
      return "You lose! Scissors beat Paper.";
    } else {
      humanScore++;
      return "You won! Paper beats Rock.";
    }
  } else if (humanChoice == "scissors") {
    if (computerChoice == "scissors") {
      return "It's Draw.";
    } else if (computerChoice == "rock") {
      computerScore++;
      return "You lose! Rock beats Scissors.";
    } else {
      humanScore++;
      return "You won! Scissors beat Paper.";
    }
  } else return "Invalid Input, Please check the spellings.";
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
