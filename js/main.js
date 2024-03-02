let sequence=[]
let playerSequence=[]
const playBtn= document.getElementById("play");
let currentLevel= document.getElementById("level");
let x=0;
function playGame(){
    playBtn.textContent="Wait for computer sequence!";    
}
function generateRandom(){
    const tiles=["green","red","blue","yellow"];
    const random=tiles[Math.floor(Math.random()*tiles.length)];
    return random;
}
function nextLevel(){
    x++;
    currentLevel.textContent =x;
    const newSequence=[...sequence];
    newSequence.push(generateRandom());
}
playBtn.addEventListener("click",playGame);
