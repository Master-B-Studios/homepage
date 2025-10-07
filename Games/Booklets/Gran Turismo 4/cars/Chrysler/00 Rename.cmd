setlocal enabledelayedexpansion
for %%i in (*.mp4) do (
set "name=%%i"
ren !name! !name:~10!
)
pause