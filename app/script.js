const plays = ["rock", "paper", "scissors"];

function computerPlay() {
  return plays[Math.floor(Math.random() * 3)];
}
