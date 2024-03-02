let sequence = [];
let playerSequence = [];
const playBtn = document.getElementById("play");
const info = document.getElementById("info");
const board = document.querySelector(".board");
let currentLevel = document.getElementById("level");
let x = 0;

function handleClick(tile) {
  const index = playerSequence.push(tile) - 1;
  // const sound = document.querySelector(`[data-sound='${tile}']`);
  // sound.play();

  const remainingTaps = sequence.length - playerSequence.length;

  if (playerSequence.length === sequence.length) {
    playerSequence = [];
    info.textContent = "Success! Keep going!";
    setTimeout(() => {
      nextLevel();
    }, 1000);
    return;
  }

  info.textContent = `Your turn: ${remainingTaps} Tap${
    remainingTaps > 1 ? "s" : ""
  }`;
}
function playGame() {
  playBtn.classList.add("hidden");
  nextLevel();
}

function clickTile(color) {
  const tileColor = document.querySelector(`[data-tile='${color}']`);

  tileColor.classList.remove("inactive");
  setTimeout(() => {
    tileColor.classList.add("inactive");
  }, 300);
}

function playLevel(newSequence) {
  newSequence.forEach((color,index) => {
    setTimeout(() => {
      clickTile(color);
    }, (index+1)*600);
  });
}
function generateRandom() {
  const tiles = ["green", "red", "blue", "yellow"];
  const random = tiles[Math.floor(Math.random() * tiles.length)];
  return random;
}

function nextLevel() {
  x++;
  currentLevel.textContent = x;
  board.classList.add("unclickable");
  info.textContent = "Memorize the computer sequence";
  const newSequence = [...sequence];
  newSequence.push(generateRandom());
  playLevel(newSequence);
  sequence = [...newSequence];
  setTimeout(() => {
    playerTurn(level);
  }, level*600 + 1000);
}

function playerTurn(level) {
  board.classList.remove("unclickable");
  info.textContent = `Your turn: ${level} tap${level > 1 ? "s" : ""}`;
}

playBtn.addEventListener("click", playGame);
board.addEventListener("click", function (event) {
  const { tile } = event.target.dataset;
  if (tile) handleClick(tile);
});
