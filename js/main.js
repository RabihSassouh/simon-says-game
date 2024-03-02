const playBtn= document.getElementById("play");
let currentLevel= document.getElementById("level");

function playGame(){
    playBtn.textContent="Wait for computer sequence!";
    console.log("test");
}

playBtn.addEventListener("click",playGame);