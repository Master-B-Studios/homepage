chcp 65001

"C:\Users\m.bey\AppData\Local\MB_Installs\ffmpeg\bin\ffmpeg.exe" -i crop\%%04d.png -r 30 -c:v h264 -preset veryslow -crf 18 -vf format=yuv420p video_png.mp4

set "oldScale=1900:880"
set "newScale=1920:1080"

"C:\Users\m.bey\AppData\Local\MB_Installs\ffmpeg\bin\ffmpeg.exe" -i video_png.mp4 -vf "scale=%oldScale%:force_original_aspect_ratio=decrease,pad=%newScale%:(ow-iw)/2:(oh-ih)/2,setsar=1" "video_upscale.mp4"

"C:\Users\m.bey\AppData\Local\MB_Installs\ffmpeg\bin\ffmpeg.exe" -i video_upscale.mp4 -vf scale=640:360 -r 29.97 -vcodec libx264 -preset veryslow -crf 20 output.mp4

exit


  1900 x 880

x: 220 + 40 Ausgleich = 260
y: 100

Original-Größe: 2340 x 1080

2000/2 = 1000
 300/2 =  150
  40/2 =   20
         1170 - (1900/2)
                  500 + 450 = 950
1170 - 950 = 220 < X-Offset

1080/2-880/2=540-440 = 100 y Offset

1564
"C:\Users\m.bey\AppData\Local\MB_Installs\ffmpeg\bin\ffmpeg.exe" -i crop\%%04d.png -r 30 -c:v h264 -preset veryslow -crf 18 -vf format=yuv420p output.mp4
ffmpeg -i "%%i" -vf scale='+resolution+' -r 29.97 -vcodec libx264 -acodec mp3 -ar 44100 -ab 128k "'+output_folder+'%%~ni.'+format+'" -progress "'+temp_folder+'!new_name!_log.txt" > nul');