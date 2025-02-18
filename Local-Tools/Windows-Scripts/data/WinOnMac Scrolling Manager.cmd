@echo off
title=^>   WinOnMac Scroll Direction
if not "%1"=="am_admin" (
    powershell -Command "Start-Process -Verb RunAs -FilePath '%0' -ArgumentList 'am_admin' -WindowStyle Maximized"
    exit /b
)
cd /d %~dp0

chcp 65001
setlocal EnableDelayedExpansion
del devices.txt
del log.txt

echo.
echo. 1 = Windows Scrolling
echo.
echo. 2 = Mac Scrolling
echo.
echo.
set /p "answer="

if !answer! equ 1 (set data=1)
if !answer! equ 2 (set data=0)

wmic path CIM_LogicalDevice where "Description like 'HID-konforme Maus%'" get /value >> devices.txt
findstr /ic:"DeviceID" devices.txt >> log.txt
type devices.txt | findstr /ic:"deviceid" >> log.txt
set firstLine=1
for /f "delims=" %%i in (log.txt) do (if !firstLine!==1 set dump=%%i && set firstLine=0)
set dump=!dump:amp;=!
set program=C:\Windows\System32\reg.exe
set path=HKLM\SYSTEM\CurrentControlSet\Enum\
set path_sub=\Device Parameters
set device_id=!dump:~9,-17!
set device_enum=!dump:~43,-1!

!program! add "!path!!device_id!!device_enum!!path_sub!" /v "FlipFlopWheel" /t REG_DWORD /d !data!

del devices.txt
del log.txt
pause
exit