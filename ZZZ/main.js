var stage = 1;
var bgm = document.getElementById('bgm');
var highlight = document.getElementById('highlight');

function stages() {
  var stage_image = document.getElementById('to_show');
  if (stage == 1) {stage_image.src = '02.webp';stage ++;}
  else if (stage == 2) {stage_image.src = '03.gif';stage ++;}
  else if (stage == 3) {stage_image.src = '04.webp';stage ++;}
  else if (stage == 4) {stage_image.src = '05.webp';stage ++;}
  else if (stage == 5) {stage_image.src = '06.webp';stage ++;}
  else if (stage == 6) {stage_image.src = '07.webp';stage ++;}
  else if (stage == 7) {stage_image.src = '08.webp';stage ++;}
  else if (stage == 8) {stage_image.src = '09.webp';stage ++;}
  else if (stage == 9) {stage_image.src = '10.webp';stage ++;}
  else if (stage == 10) {stage_image.src = '11.webp';stage ++;}
  else if (stage == 11) {stage_image.src = '12.webp';stage ++;}
  else if (stage == 12) {stage_image.src = 'bike.png';play_highlight();}
}

function play_bgm() {bgm.loop = true;bgm.play();}
function play_highlight() {highlight.volume = 0.6;highlight.play();}