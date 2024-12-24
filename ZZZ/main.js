var stage = 1;

function stages() {
  var stage_image = document.getElementById('to_show');
  if (stage == 1) {stage_image.src = '02.webp';play_sound();stage ++;}
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
  else if (stage == 12) {stage_image.src = 'bike.png';play_sound();}
}

function play_sound() {
  var audio = document.getElementById('sound');
  if (stage == 1) {audio.loop = true;audio.play();}
  else if (stage == 12) {audio.loop = false;audio.src = 'end.mp3';audio.play();}
}