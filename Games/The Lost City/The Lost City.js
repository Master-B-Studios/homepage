//----------------------------------------------------
// Game
//----------------------------------------------------

let season = 3;

let quest_01_puzzle_clue_solved = false;
let quest_03_door = false;
let quest_04_stone = false;


//----------------------------------------------------
// Navigation
//----------------------------------------------------

const screenFrame = parent.document.getElementById("screen_frame");
function nav(room) {screenFrame.src = `screens/${room}.html`;}

function quest_01_puzzle_clue() {screenFrame.src = `screens_closeup/quest_01_puzzle_clue.html`;}