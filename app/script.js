const plays = ["rock", "paper", "scissors"];

function computerPlay() {
  return plays[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
  let result = "gg";
  if (playerSelection === computerSelection) {
    result = "tie";
  } else {
    switch (playerSelection) {
      case 0:
        if (computerSelection === 1) {
          result = "loss";
        } else {
          result = "win";
        }
        break;

      case 1:
        if (computerSelection === 2) {
          result = "loss";
        } else {
          result = "win";
        }
        break;

      case 2:
        if (computerSelection === 0) {
          result = "loss";
        } else {
          result = "win";
        }
        break;
    }
  }
  return result;
}

function game() {
  switch (result) {
    case "tie":
      return `GG, you both had ${plays[playerSelection]}. It's a tie.`;
      break;

    case "win":
      return `You win! ${plays[playerSelection]} beats ${plays[computerSelection]}`;
      break;

    case "loss":
      return `You lose... ${plays[playerSelection]} loses to ${plays[computerSelection]}`;
      break;
  }
}
