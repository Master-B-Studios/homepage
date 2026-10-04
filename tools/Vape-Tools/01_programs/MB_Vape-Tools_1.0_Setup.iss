#define MyAppName "MB Vape-Tools"
#define MyAppVersion "1.0"
#define MyAppPublisher "Master Studios"
#define MyAppExeName "Starter.hta"
#define MyAppIcoName "icon0.ico"

[Setup]
AppId={{MB050784-797F-48E4-B806-MBVAPE000010}
AppName={#MyAppName}
AppVersion={#MyAppVersion}
;AppVerName={#MyAppName} {#MyAppVersion}
AppPublisher={#MyAppPublisher}
DefaultDirName={localappdata}\{#MyAppName}
DisableDirPage=yes
DisableProgramGroupPage=yes
UninstallDisplayIcon={app}\sources\image\{#MyAppIcoName}
;PrivilegesRequired=lowest
OutputDir=C:\Users\Mario\AppData\Local\MB Setup-Compiler\sources\data\..\02_Output\
OutputBaseFilename=MB_Vape-Tools_1.0_Setup
SetupIconFile=C:\Users\Mario\AppData\Local\MB Setup-Compiler\sources\data\..\01_Input\MB Vape-Tools\sources\image\icon0.ico
Compression=lzma
SolidCompression=yes
WizardStyle=modern

[Languages]
Name: "german"; MessagesFile: "compiler:Languages\German.isl"

[Tasks]
Name: "desktopicon"; Description: "{cm:CreateDesktopIcon}"; GroupDescription: "{cm:AdditionalIcons}"; Flags: unchecked

[Files]
Source: "C:\Users\Mario\AppData\Local\MB Setup-Compiler\sources\data\..\01_Input\MB Vape-Tools\*"; DestDir: "{app}"; Flags: ignoreversion recursesubdirs createallsubdirs

[Icons]
Name: "{userprograms}\{#MyAppName}"; Filename: "{app}\sources\data\{#MyAppExeName}"; IconFilename: "{app}\sources\image\{#MyAppIcoName}"
Name: "{userdesktop}\{#MyAppName}"; Filename: "{app}\sources\data\{#MyAppExeName}"; IconFilename: "{app}\sources\image\{#MyAppIcoName}"; Tasks: desktopicon

[Run]
Filename: "{app}\sources\data\{#MyAppExeName}"; Description: "{cm:LaunchProgram,{#StringChange(MyAppName, '&', '&&')}}"; Flags: shellexec postinstall skipifsilent
