let sequence=[]
let playerSequence=[]
const playBtn= document.getElementById("play");
let currentLevel= document.getElementById("level");
let x=0;
function playGame(){
    playBtn.textContent="Wait for computer sequence!";    
}

function nextLevel(){
    x++;
    currentLevel.textContent =x;
    const newSequence=[...sequence];
}
playBtn.addEventListener("click",playGame);
