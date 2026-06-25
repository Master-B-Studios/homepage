let season = 3;

let quest_001 = false;

function nav(frame) {
    parent.document.getElementById("screen_frame").src =`screens/${frame}.html`;
}
  
function uwd() {
    if (numbr_level == 1 && numbr_scene == 1 | 3) {return;}
    else {numbr_level +=1;set_bg();}
}
function fwd() {
    if (numbr_level == 1 && numbr_scene == 3) {return;}
    else {numbr_scene +=1;set_bg();}
}
function dwd() {
    if (numbr_level == 1 && numbr_scene == 1 | 2 | 3) {return;}
    else {numbr_level -=1;set_bg();}
}
function rwd() {
    if (numbr_level == 1 && numbr_scene == 1) {return;}
    else {numbr_scene -=1;set_bg();}
}