let sequence = [];
let playerSequence = [];
const playBtn = document.getElementById("play");
const info = document.getElementById("info");
const board = document.querySelector(".board");
let currentLevel = document.getElementById("level");
let x = 0;

function playGame() {
  playBtn.classList.add("hidden");
  nextLevel();
}

function clickTile(color) {
  const tileColor = document.querySelector(`[data-tile='${color}']`);

  tileColor.classList.remove("inactive");
  setTimeout(() => {
    tileColor.classList.add("inactive");
  }, 400);
}

function playLevel(newSequence) {
  newSequence.forEach((color) => {
    setTimeout(() => {
      clickTile(color);
    }, 600);
  });
}
function generateRandom() {
  const tiles = ["green", "red", "blue", "yellow"];
  const random = tiles[Math.floor(Math.random() * tiles.length)];
  return random;
}

function nextLevel() {
  board.classList.add("unclickable");
  info.textContent = "Memorize the computer sequence";
  x++;
  currentLevel.textContent = x;
  const newSequence = [...sequence];
  newSequence.push(generateRandom());
  playLevel(newSequence);
  sequence = [...newSequence];
  setTimeout(() => {
    playerTurn(level);
  }, level * 600 + 1000);
}


function playerTurn(level) {
  board.classList.remove("unclickable");
  info.textContent = `Your turn: ${level} tap${level > 1 ? "s" : ""}`;
}


playBtn.addEventListener("click", playGame);