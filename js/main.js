let sequence = [];
let playerSequence = [];
const playBtn = document.getElementById("play");
let currentLevel = document.getElementById("level");
let x = 0;
function playGame() {
  playBtn.textContent = "Wait for computer sequence!";
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
  x++;
  currentLevel.textContent = x;
  const newSequence = [...sequence];
  newSequence.push(generateRandom());
  playLevel(newSequence);
}

playBtn.addEventListener("click", playGame);
