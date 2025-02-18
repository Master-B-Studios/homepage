@echo off
chcp 65001
setlocal EnableDelayedExpansion

echo.
echo. 1 = Win10 Kontextmenü
echo.
echo. 2 = Win11 Kontextmenü
echo.
echo.
set /p "answer="
if !answer! equ 1 do (reg.exe add "HKCU\Software\Classes\CLSID\{86ca1aa0-34aa-4e8b-a509-50c905bae2a2}\InprocServer32" /f /ve)
if !answer! equ 2 do (reg.exe delete "HKCU\Software\Classes\CLSID\{86ca1aa0-34aa-4e8b-a509-50c905bae2a2}\InprocServer32" /f /ve)
pause
exit