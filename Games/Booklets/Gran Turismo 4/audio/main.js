var bg_playing = 'false';

// Jumpers
function jump_page_home() {window.location.href = '#home';}
function jump_page_credits() {window.location.href = '#credits';}
function jump_page_tutorials() {window.location.href = '#tutorials';}
function jump_page_content() {window.location.href = '#content';clear_cache();}
function jump_page_map() {window.location.href = '#map';}
function jump_page_cheats() {chapter = 0;window.location.href = '#0';}

var chapter = 0;
function jump_page(obj) {chapter = parseInt(obj.getAttribute('chapter'));window.location.href = '#'+chapter;}
function jump_page_next() {chapter = chapter+=1;window.location.href = '#'+chapter;clear_cache();}
function jump_page_last() {chapter = chapter-=1;window.location.href = '#'+chapter;clear_cache();}

function bg_intro() {var intro = document.getElementById('intro');intro.play();setTimeout(bg_music, 17000);}

function bg_music() {
    var volume = document.getElementsByClassName('volume');
    var soundtrack = document.getElementById('soundtrack');
    if (bg_playing == 'true') {for (let i = 0; i < volume.length; i++) {volume[i].src = 'sources/pics/BG_Music_On.png';} soundtrack.pause();bg_playing = 'false';}
    else if (bg_playing == 'false') {for (let i = 0; i < volume.length; i++) {volume[i].src = 'sources/pics/BG_Music_Off.png';} soundtrack.play();bg_playing = 'true';}
}

//function video_control(obj) {if (obj.paused) {obj.play();}};
//function video_control(obj) {if (obj.paused) {obj.play();} else {obj.pause();obj.load();};};
function video_control(obj) {if (obj.paused) {obj.play();} else {obj.pause();obj.pause();};};

document.addEventListener('DOMContentLoaded', function() {const videos = document.querySelectorAll('video');const observer = new IntersectionObserver((entries) => {entries.forEach(entry => {if (entry.isIntersecting) {entry.target.play();} else {entry.target.pause();}});});videos.forEach(video => {observer.observe(video);});});
//document.addEventListener('DOMContentLoaded', function() {const videos = document.querySelectorAll('video');const observer = new IntersectionObserver((entries) => {entries.forEach(entry => {if (entry.isIntersecting) {;} else {entry.target.pause();}});});videos.forEach(video => {observer.observe(video);});});

function clear_cache() {
    var video = document.getElementsByTagName('video');

    for (var i = 0; i < video.length; i++) {
        //video[i].pause();
        var link = video[i].getAttribute('src');
        video[i].src = link;
    }
}

function sync_video() {
    var videos = document.getElementsByTagName('video');

    for (var i = 0; i < videos.length; i++) {
        var posterSrc = videos[i].getAttribute('src');
        posterSrc = posterSrc.replace('.mp4#t=3', '.png');
        videos[i].poster = posterSrc;
    }
}

function swap2video(obj) {
    var link = obj.getAttribute('src');
    link = link.substring(0, link.length-3);
    link = '<video class="car_container_logo" type="video/mp4" src="sources/Cars/'+link+'mp4#t=3" loop onclick="video_control(this);"></video>';
    obj.parentElement.innerHTML += link;
    obj.remove();
}