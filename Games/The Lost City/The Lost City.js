var game_container = document.getElementById('game_container');
var background____ = document.getElementById('background____');
var background_img = document.getElementById('background_img');
var nav_up________ = document.getElementById('nav_up________');
var nav_right_____ = document.getElementById('nav_right_____');
var nav_down______ = document.getElementById('nav_down______');
var nav_left______ = document.getElementById('nav_left______');

var bg_x = 1440;
var bg_y = 726;
var ratio = bg_x / bg_y;

var numbr_level = 1;
var numbr_scene = 2;
var numbr_seasn = 3;
var numbr_state = 1;

var print_level = '';
var print_scene = '';
var print_seasn = '';
var print_state = '';

var scene = 1;

function set_bg() {
    if (numbr_level <= 9) {print_level = '0'+numbr_level.toString();}
    if (numbr_scene <= 9) {print_scene = '0'+numbr_scene.toString();}
    if (numbr_seasn <= 9) {print_seasn = '0'+numbr_seasn.toString();}
    if (numbr_state <= 9) {print_state = '0'+numbr_state.toString();}
    background_img.src = 'screens/'+print_level+'_'+print_scene+'_'+print_seasn+'_'+print_state+'.jpg';
    background____.style.transition = 'all 1.5s';
}
function show() {alert(print_level)}
  
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