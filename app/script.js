const plays = ["rock", "paper", "scissors"];

function computerPlay() {
  return Math.floor(Math.random() * 3);
}

function playerPlay() {
  return 0;
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
  let playerScore = 0;
  let computerScore = 0;

  while (playerScore < 3 && computerScore < 3) {
    let playerSelection = playerPlay();
    let computerSelection = computerPlay();
    let result = playRound(playerSelection, computerSelection);

    switch (result) {
      case "tie":
        console.log(`GG, you both had ${plays[playerSelection]}. It's a tie.`);
        break;

      case "win":
        console.log(
          `You win! ${plays[playerSelection]} beats ${plays[computerSelection]}`
        );
        playerScore++;
        break;

      case "loss":
        console.log(
          `You lose... ${plays[playerSelection]} loses to ${plays[computerSelection]}`
        );
        computerScore++;
        break;
    }
  }
  if (playerScore === 3) {
    console.log(
      `You beat the computer! Congratulations. (${playerScore}:${computerScore})`
    );
  } else {
    console.log(
      `You lost to the almighty Computer Baba...(${playerScore}:${computerScore})`
    );
  }
}
