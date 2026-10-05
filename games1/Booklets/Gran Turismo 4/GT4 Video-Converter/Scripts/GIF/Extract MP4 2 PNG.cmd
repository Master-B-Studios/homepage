chcp 65001

for %%i in (*.mp4) do (
    mkdir "%%~ni"
    "C:\Users\m.bey\AppData\Local\MB_Installs\ffmpeg\bin\ffmpeg.exe" -i "%%i" "%%~ni\%%04d.png"
    move "%%~ni\0100.png" "%%~ni.png"
    rmdir /s /q "%%~ni"
)

exit