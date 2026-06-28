//----------------------------------------------------
// Game
//----------------------------------------------------

let season = 1;

let quest_001 = true;
let quest_002 = true;


//----------------------------------------------------
// Navigation
//----------------------------------------------------

const screenFrame = parent.document.getElementById("screen_frame");
function nav(room) {screenFrame.src = `screens/${room}.html`;}