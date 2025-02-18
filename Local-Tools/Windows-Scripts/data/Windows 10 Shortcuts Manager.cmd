@echo off
title=^>   Shortcut Remove
if not "%1"=="am_admin" (
    powershell -Command "Start-Process -Verb RunAs -FilePath '%0' -ArgumentList 'am_admin' -WindowStyle Maximized"
    exit /b
)
cd /d %~dp0
chcp 65001
setlocal EnableDelayedExpansion

echo.
echo. 1 = Remove Shortcut-Arrow
echo.
echo. 2 = Restore Shortcut-Arrow
echo.
echo.
set /p "answer="
if !answer! equ 1 (reg.exe add "HKLM\Software\Microsoft\Windows\CurrentVersion\Explorer\Shell Icons" /v "29" /t REG_SZ)
if !answer! equ 2 (reg.exe delete "HKLM\Software\Microsoft\Windows\CurrentVersion\Explorer\Shell Icons")
pause
exit