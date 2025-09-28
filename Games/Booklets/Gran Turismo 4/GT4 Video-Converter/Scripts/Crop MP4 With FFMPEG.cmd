chcp 65001
setlocal EnableDelayedExpansion

cd ..
for %%i in (*.mp4) do (
"C:\Users\m.bey\AppData\Local\MB_Installs\ffmpeg\bin\ffmpeg.exe" -i "%%i" -vf "crop=1920:886:250:102" "cropped.mp4"
)

start "" "C:\Users\m.bey\AppData\Local\MB Video-Editor\sources\programs\editor\Avidemux\App\Avidemux64\avidemux_portable.exe" --load "cropped.mp4"
exit