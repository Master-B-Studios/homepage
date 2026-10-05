//----------------------------------------------------
// Game
//----------------------------------------------------

let season = 3;

let quest_01_puzzle_clue_solved = false;
let quest_03_door = false;
let quest_04_stone = false;


//----------------------------------------------------
// Toolbar
//----------------------------------------------------
const toolbarElements = [
    {id: "button_back", visible: () => false},
    {id: "button_journal", visible: () => true},
    {id: "button_belt", visible: () => false},
    {id: "button_broom", visible: () => false},
    {id: "button_charcoal", visible: () => false},
    {id: "button_crowbar", visible: () => false},
    {id: "button_crystal", visible: () => false},
    {id: "button_fishkey", visible: () => false},
    {id: "button_flower_blue", visible: () => false},
    {id: "button_flower_orange", visible: () => false},
    {id: "button_flower_pink", visible: () => false},
    {id: "button_flower_red", visible: () => false},
    {id: "button_hammer", visible: () => false},
    {id: "button_hook", visible: () => false},
    {id: "button_key_bronze", visible: () => false},
    {id: "button_key_gold", visible: () => false},
    {id: "button_key_purple", visible: () => false},
    {id: "button_key_rust", visible: () => false},
    {id: "button_key_silver", visible: () => false},
    {id: "button_knob_1", visible: () => false},
    {id: "button_knob_2", visible: () => false},
    {id: "button_lever", visible: () => false},
    {id: "button_machete", visible: () => false},
    {id: "button_moon", visible: () => false},
    {id: "button_plate", visible: () => false},
    {id: "button_plug", visible: () => false},
    {id: "button_ratchet", visible: () => false},
    {id: "button_rope", visible: () => false},
    {id: "button_shovel", visible: () => false},
    {id: "button_slingshot", visible: () => false},
    {id: "button_snake", visible: () => false},
    {id: "button_spyglass", visible: () => false},
    {id: "button_stick", visible: () => false},
    {id: "button_stone_1", visible: () => false},
    {id: "button_stone_2", visible: () => false},
    {id: "button_stone_3", visible: () => false},
    {id: "button_stone_4", visible: () => false},
    {id: "button_stone_autumn", visible: () => false},
    {id: "button_stone_fire", visible: () => false},
    {id: "button_stone_spring", visible: () => true},
    {id: "button_stone_summer", visible: () => false},
    {id: "button_stone_winter", visible: () => false},
    {id: "button_stone_yellow", visible: () => false},
    {id: "button_tile", visible: () => false},
];

function check_toolbar_elements() {
    const startX = 5;
    const spacing = 84;
    const y = 5;
    let pos = 0;
    toolbarElements.forEach(button => {
        const element = document.getElementById(button.id);
        if (!button.visible()) {element.style.display = "none";return;}
        element.style.display = "block";
        element.setAttribute("x", startX + pos * spacing);
        element.setAttribute("y", y);
        pos++;
    });
}

//----------------------------------------------------
// Navigation
//----------------------------------------------------

const screenFrame = parent.document.getElementById("screen_frame");
const toolbarFrame = parent.document.getElementById("toolbar_frame");
const frames = [screenFrame, toolbarFrame];

function nav(room) {screenFrame.src = `screens/${room}.html`;}

function quest_01_puzzle_clue() {screenFrame.src = `screens_closeup/quest_01_puzzle_clue.html`;}