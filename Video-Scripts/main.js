var video = '';
var in_video = '';
var out_video = '';
var video_stream = '';
var video_resolution = '';
var video_frame = '';
var audio_stream = '';
var cover = '';
var info_1 = '';
var info_2 = '';
var command = '';

var give_mkv = document.getElementById('give_mkv');
var give_mp4 = document.getElementById('give_mp4');
var make_mkv = document.getElementById('make_mkv');
var make_mp4 = document.getElementById('make_mp4');

var video_copy = document.getElementById('video_copy');
var video_conv = document.getElementById('video_conv');

var video_resolution_org = document.getElementById('video_resolution_org');
var video_resolution_uhd = document.getElementById('video_resolution_uhd');
var video_resolution_fhd = document.getElementById('video_resolution_fhd');

var video_frame_orig = document.getElementById('video_frame_orig');
var video_frame_ntsc = document.getElementById('video_frame_ntsc');

var audio_copy = document.getElementById('audio_copy');
var audio_conv = document.getElementById('audio_conv');

var audio_aac = document.getElementById('audio_aac');
var audio_ac3 = document.getElementById('audio_ac3');
var audio_mp3 = document.getElementById('audio_mp3');

var cover_yes = document.getElementById('cover_yes');
var cover_no = document.getElementById('cover_no');
var info_yes = document.getElementById('info_yes');
var info_no = document.getElementById('info_no');

function select_format(obj) {
  obj.style = 'opacity: 1;';
  var activate_1 = document.getElementsByClassName('activate_1');
  var activate_2 = document.getElementsByClassName('activate_2');
  var activate_3 = document.getElementsByClassName('activate_3');
  var activate_4 = document.getElementsByClassName('activate_4');
  var activate_5 = document.getElementsByClassName('activate_5');
  var activate_6 = document.getElementsByClassName('activate_6');
  var activate_7 = document.getElementsByClassName('activate_7');
  var activate_8 = document.getElementsByClassName('activate_8');

  if (obj == give_mkv) {in_video = 'mkv';give_mp4.style = 'opacity: 0.5;';}
  if (obj == give_mp4) {in_video = 'mp4';give_mkv.style = 'opacity: 0.5;';}
  if (obj == make_mkv) {out_video = 'mkv';make_mp4.style = 'opacity: 0.5;';}
  if (obj == make_mp4) {out_video = 'mp4';make_mkv.style = 'opacity: 0.5;';}
  if (in_video != '' && out_video != '') {
    video = '';
    for (i = 0; i < activate_1.length; i++) {activate_1[i].style = 'visibility: visible;';}
    for (i = 0; i < activate_3.length; i++) {activate_3[i].style = 'visibility: visible;';}
    for (i = 0; i < activate_6.length; i++) {activate_6[i].style = 'visibility: visible;';}
  }
  else {
    video = 'rem ';
    for (i = 0; i < activate_1.length; i++) {activate_1[i].style = 'visibility: hidden;';}
    for (i = 0; i < activate_3.length; i++) {activate_3[i].style = 'visibility: hidden;';}
    for (i = 0; i < activate_6.length; i++) {activate_6[i].style = 'visibility: hidden;';}
  }

  if (obj == video_copy) {
    video_stream = 'copy';
    video_conv.style = 'opacity: 0.5;';
    for (i = 0; i < activate_2.length; i++) {
      activate_2[i].style = 'visibility: hidden;';
      video_resolution = '';
      video_frame = '';
      video_resolution_org.style = 'opacity: 0.5;';
      video_resolution_fhd.style = 'opacity: 0.5;';
      video_resolution_uhd.style = 'opacity: 0.5;';
      video_frame_orig.style = 'opacity: 0.5;';
      video_frame_ntsc.style = 'opacity: 0.5;';
    }
  }
  if (obj == video_conv) {video_stream = 'libx264 -preset veryslow -crf 22';video_copy.style = 'opacity: 0.5;';for (i = 0; i < activate_2.length; i++) {activate_2[i].style = 'visibility: visible;';}}

  if (obj == video_resolution_org) {video_resolution = '';video_resolution_uhd.style = 'opacity: 0.5;';video_resolution_fhd.style = 'opacity: 0.5;';}
  if (obj == video_resolution_uhd) {video_resolution = '-vf scale=-1:1080 -sws_flags lanczos ';video_resolution_org.style = 'opacity: 0.5;';video_resolution_fhd.style = 'opacity: 0.5;';}
  if (obj == video_resolution_fhd) {video_resolution = '-vf scale=-1:720 -sws_flags lanczos ';video_resolution_org.style = 'opacity: 0.5;';video_resolution_uhd.style = 'opacity: 0.5;';}

  if (obj == video_frame_orig) {video_frame = '';video_frame_ntsc.style = 'opacity: 0.5;';}
  if (obj == video_frame_ntsc) {video_frame = '-r 29.97 ';video_frame_orig.style = 'opacity: 0.5;';}

  if (obj == audio_copy) {
    audio_stream = 'copy';audio_conv.style = 'opacity: 0.5;';
    for (i = 0; i < activate_4.length; i++) {
      activate_4[i].style = 'visibility: hidden;';audio_aac.style = 'opacity: 0.5;';audio_ac3.style = 'opacity: 0.5;';audio_mp3.style = 'opacity: 0.5;';
    }
  }
  if (obj == audio_conv) {audio_copy.style = 'opacity: 0.5;';for (i = 0; i < activate_4.length; i++) {activate_4[i].style = 'visibility: visible;';}}

  if (obj == audio_aac) {audio_stream = 'aac';audio_ac3.style = 'opacity: 0.5;';audio_mp3.style = 'opacity: 0.5;';}
  if (obj == audio_ac3) {audio_stream = 'ac3';audio_aac.style = 'opacity: 0.5;';audio_mp3.style = 'opacity: 0.5;';}
  if (obj == audio_mp3) {audio_stream = 'mp3';audio_aac.style = 'opacity: 0.5;';audio_ac3.style = 'opacity: 0.5;';}

  if (obj == cover_yes) {cover = ' --attachment-name "%%~ni-poster.jpg" --add-attachment "%%~ni-poster.jpg"';cover_no.style = 'opacity: 0.5;';for (i = 0; i < activate_6.length; i++) {activate_6[i].style = 'visibility: visible;';}}
  if (obj == cover_no) {cover = '';cover_yes.style = 'opacity: 0.5;';for (i = 0; i < activate_6.length; i++) {activate_6[i].style = 'visibility: visible;';}}
  if (obj == info_yes) {info_1 = 'for %%a in (*.nfo) do (for /f "skip=9 tokens=3 usebackq delims=>^<" %%b in ("%%a") do (set "date_input=%%b"))';info_2 = ' --attachment-name "%%~ni.nfo" --add-attachment "%%~ni.nfo"';info_no.style = 'opacity: 0.5;';for (i = 0; i < activate_6.length; i++) {activate_6[i].style = 'visibility: visible;';}}
  if (obj == info_no) {info_1 = 'set /p date_input="Erscheinungsjahr des Films: "';info_2 = '';info_yes.style = 'opacity: 0.5;';for (i = 0; i < activate_6.length; i++) {activate_6[i].style = 'visibility: visible;';}}
}

function create_command() {
  command = '@echo off\n'+
  'chcp 65001\n'+
  'setlocal EnableDelayedExpansion\n'+
  'set tagger="%USERPROFILE%\\AppData\\Local\\MB Video-Editor\\sources\\programs\\tagger\\MKVToolNix\\mkvpropedit.exe"\n'+
  'set "date_input="\n'+
  'for %%i in (*.'+in_video+') do (\n'+
  'set name=%%~ni\n'+
  '!tagger! "%%~ni.mkv" --tags all: --edit info --delete-attachment mime-type:image/jpeg\n'+
  video+'wsl ffmpeg-bar -i "!name!.'+in_video+'" -map 0 '+video_resolution+video_frame+'-c:v '+video_stream+' -c:a '+audio_stream+' -c:s copy "!name!_new.'+out_video+'"\n'+
  video+'ren "!name!.'+in_video+'" "!name!_old.'+in_video+'"\n'+
  video+'ren "!name!_new.'+out_video+'" "!name!.'+out_video+'"\n'+
  info_1+'\n'+
  'set "date_output=!date_input!-01-01T00:00:00+01:00"\n'+
  '!tagger! "%%~ni.mkv" --tags all: --edit info --set title="%%~ni" --set date="!date_output!" --set muxing-application="Master B" --set writing-application="Master B" --edit track:v1 --set name="%%~ni" --set language="ger" --edit track:a1 --set name="German" --set language="ger" --delete-attachment mime-type:image/jpeg\n'+
  '!tagger! "%%~ni.mkv" --tags all: --edit info --set title="%%~ni" --set date="!date_output!" --set muxing-application="Master B" --set writing-application="Master B" --edit track:v1 --set name="%%~ni" --set language="ger" --edit track:a1 --set name="German" --set language="ger" --delete-attachment mime-type:application/xml\n'+
  '!tagger! "%%~ni.mkv" --tags all: --edit info --set title="%%~ni" --set date="!date_output!" --set muxing-application="Master B" --set writing-application="Master B" --edit track:v1 --set name="%%~ni" --set language="ger" --edit track:a1 --set name="German" --set language="ger" --delete-attachment mime-type:text/plain\n'+
  '!tagger! "%%~ni.mkv" --tags all: --edit info --set title="%%~ni" --set date="!date_output!" --set muxing-application="Master B" --set writing-application="Master B" --edit track:v1 --set name="%%~ni" --set language="ger" --edit track:a1 --set name="German" --set language="ger"'+cover+info_2+'\n'+
  ')\n'+
  'echo.\n'+
  'echo.\n'+
  'echo.\n'+
  'echo. Alles erledigt...\n'+
  'echo.\n'+
  'echo. Der Film wurde im Jahr !date_input! gedreht...\n'+
  'echo.\n'+
  'echo.\n'+
  'echo.\n'+
  'pause\n'+
  'exit';
  download_command();
}
function download_command() {
    var link = document.createElement("A");
    var filename = 'Script.cmd';

    link.setAttribute("href","data:text/xml,"+command);
    link.setAttribute("style","display:none");
    link.setAttribute("download",filename);
    document.body.appendChild(link);
    console.log(link.outerHTML);
    link.click();
    document.body.removeChild(link);
}