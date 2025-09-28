chcp 65001

mkdir dump

for %%i in (*.mp4) do (
"C:\Users\m.bey\AppData\Local\MB_Installs\ffmpeg\bin\ffmpeg.exe" -i "%%i" -vf fps=30 dump\%%04d.png
)

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