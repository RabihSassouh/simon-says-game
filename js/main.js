let sequence = [];
let playerSequence = [];
const playBtn = document.getElementById("play");
const info = document.getElementById("info");
const board = document.querySelector(".board");
let currentLevel = document.getElementById("level");
let highScore = document.getElementById("high-score");
let x = 0;
let highScoreNum = 0;

function handleClick(tile) {
  const index = playerSequence.push(tile) - 1;
  const remainingTaps = sequence.length - playerSequence.length;
  if (playerSequence[index] != sequence[index]) {
    resetGame("Ooops! Game over");
    return;
  }
  if (playerSequence.length == sequence.length) {
    if (playerSequence.length == 12) {
      info.textContent = "Congrats! you have finished all 12 rounds...";
      return;
    }
    playerSequence = [];
    info.textContent = "Success! Keep going!";
    setTimeout(() => {
      nextLevel();
    }, 1500);
    return;
  }
  info.textContent = `Your turn: ${remainingTaps} Tap"s" left:`;
}

function playGame() {
  playBtn.classList.add("hidden");
  nextLevel();
}

function nextLevel() {
  x++;
  currentLevel.textContent = x;
  if (x > highScoreNum) {
    highScoreNum = x;
    highScore.textContent = highScoreNum;
  }
  board.classList.add("unclickable");
  info.textContent = "Memorize the computer sequence";
  const newSequence = [...sequence];
  newSequence.push(generateRandom());
  playLevel(newSequence);
  sequence = [...newSequence];
  setTimeout(() => {
    playerTurn(level);
  }, level * 600 + 1000);
}

function generateRandom() {
  const tiles = ["green", "red", "blue", "yellow"];
  const random = tiles[Math.floor(Math.random() * tiles.length)];
  return random;
}

function playerTurn(level) {
  board.classList.remove("unclickable");
  info.textContent = `Your turn: ${x} tap"s" left:`;
}

function clickTile(color) {
  const tileColor = document.querySelector(`[data-tile='${color}']`);
  const sound = new Audio(`../sounds/${color}.mp3`);
  sound.play();
  tileColor.classList.remove("inactive");
  setTimeout(() => {
    tileColor.classList.add("inactive");
  }, 300);
}

function playLevel(newSequence) {
  newSequence.forEach((color, index) => {
    setTimeout(() => {
      clickTile(color);
    }, (index + 1) * 600);
  });
}

function resetGame(text) {
  alert(text);
  sequence = [];
  playerSequence = [];
  level = 0;
  info.textContent = "Click play to start! Make it to 12 to win!";
  board.classList.add("unclickable");
  playBtn.classList.remove("hidden");
  x = 0;
}

playBtn.addEventListener("click", playGame);
board.addEventListener("click", function (event) {
  const { tile } = event.target.dataset;
  if (tile) handleClick(tile);
});
