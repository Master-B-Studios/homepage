var bg_playing = 'false';

// Jumpers
function jump_page_home() {window.location.href = '#home';}
function jump_page_credits() {window.location.href = '#credits';}
function jump_page_tutorials() {window.location.href = '#tutorials';}
function jump_page_content() {window.location.href = '#content';}
function jump_page_map() {window.location.href = '#map';}
function jump_page_cheats() {chapter = 0;window.location.href = '#0';}

var chapter = 0;
function jump_page(obj) {chapter = parseInt(obj.getAttribute('chapter'));window.location.href = '#'+chapter;}
function jump_page_next() {chapter = chapter+=1;window.location.href = '#'+chapter;}
function jump_page_last() {chapter = chapter-=1;window.location.href = '#'+chapter;}

function bg_intro() {var intro = document.getElementById('intro');intro.play();setTimeout(bg_music, 17000);}

function bg_music() {
    var volume = document.getElementsByClassName('volume');
    var soundtrack = document.getElementById('soundtrack');
    if (bg_playing == 'true') {for (let i = 0; i < volume.length; i++) {volume[i].src = 'sources/pics/BG_Music_On.png';} soundtrack.pause();bg_playing = 'false';}
    else if (bg_playing == 'false') {for (let i = 0; i < volume.length; i++) {volume[i].src = 'sources/pics/BG_Music_Off.png';} soundtrack.play();bg_playing = 'true';}
}