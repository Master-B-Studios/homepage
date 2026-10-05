chcp 65001
setlocal EnableDelayedExpansion

mkdir crop
cd dump
for %%i in (*.png) do (
"C:\Users\m.bey\AppData\Local\MB_Installs\IrfanView\i_view32.exe" "%%i" /crop=^(260,100,1900,880^) /convert=..\crop\%%~ni.png
)

cd ..
set /a counter = 1
cd crop
for %%i in (*.png) do (
echo !counter!
if !counter! leq 9 (set "name=000!counter!") else if !counter! leq 99 (set "name=00!counter!") else if !counter! leq 999 (set "name=0!counter!")
ren "%%i" !name!.png
set /a counter+=1
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



1564/2 = 500+250+32=1170-782=388+40=428