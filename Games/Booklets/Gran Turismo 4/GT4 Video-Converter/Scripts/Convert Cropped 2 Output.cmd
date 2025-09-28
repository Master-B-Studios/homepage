chcp 65001
setlocal EnableDelayedExpansion

cd ..

set "oldScale=1920:886"
set "newScale=1920:1080"

"C:\Users\m.bey\AppData\Local\MB_Installs\ffmpeg\bin\ffmpeg.exe" -i "cropped_edit.mp4" -vf "scale=%oldScale%:force_original_aspect_ratio=decrease,pad=%newScale%:(ow-iw)/2:(oh-ih)/2,setsar=1" "debugged.mp4"

"C:\Users\m.bey\AppData\Local\MB_Installs\ffmpeg\bin\ffmpeg.exe" -i "debugged.mp4" -vf scale=640:360 -r 29.97 -vcodec libx264 -preset veryslow -crf 20 "output.mp4"
del debugged.mp4
del cropped_edit.mp4
del cropped.mp4

exit