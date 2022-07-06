const plays = ["rock", "paper", "scissors"];

const btns = document.querySelectorAll("[data-play]");
const score = document.querySelector("[data-score]");
const text = document.querySelector("[data-text]");

function computerPlay() {
  return Math.floor(Math.random() * 3);
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

let playerScore = 0;
let computerScore = 0;
let isNewGame = true;

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log(plays[btn.dataset.play]);

    let playerSelection = +btn.dataset.play;
    let computerSelection = computerPlay();
    let result = playRound(playerSelection, computerSelection);

    switch (result) {
      case "tie":
        text.textContent = `GG, you both had ${plays[playerSelection]}. It's a tie.`;
        break;

      case "win":
        text.textContent = `You win! ${plays[playerSelection]} beats ${plays[computerSelection]}`;
        playerScore++;
        break;

      case "loss":
        text.textContent = `You lose... ${plays[playerSelection]} loses to ${plays[computerSelection]}`;
        computerScore++;
        break;
    }
    score.textContent = `${playerScore}:${computerScore}`;

    if (playerScore === 3) {
      text.textContent = "You won the game!";
      playerScore = 0;
      computerScore = 0;
    } else if (computerScore === 3) {
      text.textContent = "You lost...";
      playerScore = 0;
      computerScore = 0;
    }
  });
});
