@echo off
title=^>   MB Diskpart-Tool
if not "%1"=="am_admin" (
    powershell -Command "Start-Process -Verb RunAs -FilePath '%0' -ArgumentList 'am_admin' -WindowStyle Maximized"
    exit /b
)
cd /d %~dp0

mode con:cols=200 lines=70
chcp 65001
Set /a num=(%Random% %%9)+1
color %num%
setlocal EnableDelayedExpansion
set "program_name=Diskpart"
set "execute="
set nl=^


set div=║
set div_alt=│
set top=[0m╔══════════════════════════════════════════════════════════╦════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════╗
set top_alt=[0m┌──────────────────────────────────────────────────────────┬────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
set bottom=[0m╚══════════════════════════════════════════════════════════╩════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════╝
set bottom_alt=[0m└──────────────────────────────────────────────────────────┴────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
set blank_01=[0m%div%                                                          %div%
set blank_02=[0m                                                                                                                            %div%
set mb_01=[0m%div%     [92mmoooooooo               [96m+oooooooooooooooo+.[0m          %div%
set mb_02=[0m%div%     [92mMMMMMMMMM+            dMM[96mMMMMMMMMMMMMMMMMMmo.[0m        %div%
set mb_03=[0m%div%     [92mMMMMMMMMMMs         .mMMMM[96mMMMMMMMMMMMMMMMMMMMo[0m       %div%
set mb_04=[0m%div%     [92mMMMMMMMMMMMy       -mMMMMd/[96m````````````MMMMMMMN[0m      %div%
set mb_05=[0m%div%     [92mMMMMMMMMMMMMh     :NMMMMh`             [96msMMMMMMo[0m      %div%
set mb_06=[0m%div%     [92mMMMMMMhdMMMMMh   /NMMMMh`     [96m,,,,,,,.:mMMMMMd[0m       %div%
set mb_07=[0m%div%     [92mMMMMMMy`hMMMMMm-+MMMMMy`     [96mymmmmmmmNMMMMNd/[0m        %div%
set mb_08=[0m%div%     [92mMMMMMMy `hMMMMMNMMMMMs      [96mhMMMMMMMMMMMMMNh+.[0m       %div%
set mb_09=[0m%div%     [92mMMMMMMy  `yMMMMMMMMMo      [96m/yyyyyyyyyyhmMMMMMNy.[0m     %div%
set mb_10=[0m%div%     [92mMMMMMMy   `sMMMMMMM+                   [96m`oMMMMMMd[0m     %div%
set mb_11=[0m%div%     [92mMMMMMMy     sNNNNN/                     [96m.MMMMMMM`[0m    %div%
set mb_12=[0m%div%     [92mMMMMMMy      ``-´´     [96m.,,,,,,,,,,,,,,:omMMMMMMd[0m     %div%
set mb_13=[0m%div%     [92mMMMMMMy               [96m/NMMMMMMMMMMMMMMMMMMMMMMh.[0m     %div%
set mb_14=[0m%div%     [92mMMMMMMy              [96m+NMMMMMMMMMMMMMMMMMMMMmy/`[0m      %div%
set mb_15=[0m%div%     [92mMMMMMMy             [96m.ossssssssssssssssoo+:.`[0m         %div%
set mb_16=[0m%div%     [92mMMMMMMy[0m                                              %div%
set mb_17=[0m%div%     [92mMMMMMMy[0m                                              %div%
set mb_18=[0m%div%     [92mMMMMMMy             [37mAuto-Batch For:[0m                  %div%
set mb_19=[0m%div%     [92mMMMMMMy[0m                                              %div%
set mb_20=[0m%div%     [92mMMMMNy:             [31m%program_name%[0m                         %div%
set mb_21=[0m%div%     [92mMMh/`[0m                                                %div%
set mb_22=[0m%div%     [92m+`[0m                                                   %div%

set no_01=    [92m 1[0m = List Drives              [96mlist disk[0m                                                                                 %div%
set no_02=!blank_02!
set no_03=!blank_02!
set no_04=!blank_02!
set no_05=    [92m 2[0m = Format Drive to exFAT                                                                                              %div%
set no_06=!blank_02!
set no_07=    [92m 3[0m = Format Drive to NTFS                                                                                               %div%
set no_08=!blank_02!
set no_09=    [92m 4[0m = Format Drive to FAT32                                                                                              %div%
set no_10=!blank_02!
set no_11=    [92m 5[0m = Format Drive to FAT16                                                                                              %div%
set no_12=!blank_02!
set no_13=!blank_02!
set no_14=!blank_02!
set no_15=!blank_02!
set no_16=!blank_02!
set no_17=!blank_02!
set no_18=!blank_02!
set no_19=!blank_02!
set no_20=!blank_02!
set no_21=!blank_02!
set no_22=    [92m Q[0m = [31mQuit[0m                                                                                                               %div%

set mb=!top!!nl!!blank_01!!blank_02!!nl!!blank_01!!blank_02!!nl!!mb_01!!no_01!!nl!!mb_02!!no_02!!nl!!mb_03!!no_03!!nl!!mb_04!!no_04!!nl!!mb_05!!no_05!!nl!!mb_06!!no_06!!nl!!mb_07!!no_07!!nl!!mb_08!!no_08!!nl!!mb_09!!no_09!!nl!!mb_10!!no_10!!nl!!mb_11!!no_11!!nl!!mb_12!!no_12!!nl!!mb_13!!no_13!!nl!!mb_14!!no_14!!nl!!mb_15!!no_15!!nl!!mb_16!!no_16!!nl!!mb_17!!no_17!!nl!!mb_18!!no_18!!nl!!mb_19!!no_19!!nl!!mb_20!!no_20!!nl!!mb_21!!no_21!!nl!!mb_22!!no_22!!nl!!blank_01!!blank_02!!nl!!blank_01!!blank_02!!nl!!bottom!!nl!!nl!

:starter
cls
echo !mb!
echo.^>              Last Command:   [31m!execute![0m
echo.
echo.
echo.
!execute!
if exist !working_script! del !working_script!
echo.
echo.
echo.
set /p "execute=>    [92mType Number or Command:   [0m"
if !execute! equ 1 (
set working_path=%~dp0
set working_script="!working_path!Diskpart Scripts"
echo list disk > !working_script!
echo exit >> !working_script!
set "execute=diskpart /s !working_script!"
)
if !execute! equ 2 (
echo.
set /p "disk=>     [96mDisk-Number to format:   [0m"
set working_path=%~dp0
set working_script="!working_path!Diskpart Scripts"
echo select disk !disk! > !working_script!
echo clean >> !working_script!
echo create partition primary >> !working_script!
echo select partition 1 >> !working_script!
echo active >> !working_script!
echo format fs=exfat quick >> !working_script!
echo assign >> !working_script!
echo exit >> !working_script!
set "execute=diskpart /s !working_script!"
)
if !execute! equ 3 (
echo.
set /p "disk=>     [96mDisk-Number to format:   [0m"
set working_path=%~dp0
set working_script="!working_path!Diskpart Scripts"
echo select disk !disk! > !working_script!
echo clean >> !working_script!
echo create partition primary >> !working_script!
echo select partition 1 >> !working_script!
echo active >> !working_script!
echo format fs=ntfs quick >> !working_script!
echo assign >> !working_script!
echo exit >> !working_script!
set "execute=diskpart /s !working_script!"
)
if !execute! equ 4 (
echo.
set /p "disk=>     [96mDisk-Number to format:   [0m"
set working_path=%~dp0
set working_script="!working_path!Diskpart Scripts"
echo select disk !disk! > !working_script!
echo clean >> !working_script!
echo create partition primary >> !working_script!
echo select partition 1 >> !working_script!
echo active >> !working_script!
echo format fs=fat32 quick >> !working_script!
echo assign >> !working_script!
echo exit >> !working_script!
set "execute=diskpart /s !working_script!"
)
if !execute! equ 5 (
echo.
set /p "disk=>     [96mDisk-Number to format:   [0m"
set working_path=%~dp0
set working_script="!working_path!Diskpart Scripts"
echo select disk !disk! > !working_script!
echo clean >> !working_script!
echo create partition primary >> !working_script!
echo select partition 1 >> !working_script!
echo active >> !working_script!
echo format fs=fat16 quick >> !working_script!
echo assign >> !working_script!
echo exit >> !working_script!
set "execute=diskpart /s !working_script!"
)

if !execute! equ Q set "execute=exit"

goto starter