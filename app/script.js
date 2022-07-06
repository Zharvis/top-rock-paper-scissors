const plays = ["rock", "paper", "scissors"];

const btns = document.querySelectorAll("[data-play]");
const score = document.querySelector("[data-score]");
const text = document.querySelector("[data-text]");

function computerPlay() {
  return Math.floor(Math.random() * 3);
}

function playerPlay() {
  let play = 10;
  while (play < 0 || play > 2) {
    play = prompt("Choose your next play. (1:rock, 2:paper, 3:scissors)");
    play--;
  }
  return play;
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
