bs = '\\';
directory_content = "'dir /a/b'";
root_folder = '..'+bs+'..'+bs;
roms_folder = '"'+'..'+bs+'roms'+bs;
cover_folder = 'pokemon/game_cover/';
pokedex_folder = '..'+bs+'pokemon'+bs+'pokedex'+bs;

rdna = document.getElementsByClassName('rdna_sample');
ra_sample = document.getElementsByClassName('ra_sample');
rb_sample = document.getElementsByClassName('rb_sample');
rc_sample = document.getElementsByClassName('rc_sample');
rd_sample = document.getElementsByClassName('rd_sample');
RCode = document.getElementsByClassName('code_format');

emulator = '..'+bs+'programs'+bs+'VBA'+bs+'VBA_1'+bs+'VisualBoyAdvance.exe';
emulator_2 = '..'+bs+'programs'+bs+'VBA'+bs+'VBA_2'+bs+'VisualBoyAdvance.exe';

// Resolutions

// Jumpers
function jump_page_home_site() {NewPoke();window.location.href='#home_site';}
function jump_page_code_site() {window.location.href='#code_site';}
function jump_page_fight_site() {window.location.href='#fight_site';}
function jump_page_trainer_site() {window.location.href='#trainer_site';}
function jump_page_fight_table_site() {window.location.href='#fight_table_site';}


// Actions
function add_folder(html) {var input = html.value;var folder = input.substr(0, input.lastIndexOf(bs));access.CopyFolder(folder,input_folder,1);jump_page_home_site();}
function open_folder(foldername) {execute.Run('explorer.exe /e,'+foldername);}
function open_list_folder(obj) {var foldername = obj.getAttribute('value');execute.Run('explorer.exe /e,'+foldername);}
function start_app(appname) {execute.Run(appname);}
function play_game() {
    rom = '';
    var game = game_select.value;
    if (game == 24) {rom = roms_folder+'Pokemon - Feuerrote Edition.gba'+'"'}
    if (game == 23) {rom = roms_folder+'Pokemon - Blattgrüne Edition.gba'+'"'}
    if (game == 4) {rom = roms_folder+'Pokemon - Rubin-Edition.gba'+'"'}
    if (game == 5) {rom = roms_folder+'Pokemon - Saphir-Edition.gba'+'"'}
    if (game == 30) {rom = roms_folder+'Pokemon - Smaragd-Edition.gba'+'"'}
    execute.Run(emulator+' '+rom);
}
function trade_game() {
    trade_rom = '';
    var trade_game = game_select.value;
    if (trade_game == 24) {trade_rom = roms_folder+'Pokemon - Feuerrote Edition.gba'+'"'}
    if (trade_game == 23) {trade_rom = roms_folder+'Pokemon - Blattgrüne Edition.gba'+'"'}
    if (trade_game == 4) {trade_rom = roms_folder+'Pokemon - Rubin-Edition.gba'+'"'}
    if (trade_game == 5) {trade_rom = roms_folder+'Pokemon - Saphir-Edition.gba'+'"'}
    if (trade_game == 30) {trade_rom = roms_folder+'Pokemon - Smaragd-Edition.gba'+'"'}
    execute.Run(emulator_2+' '+trade_rom);
}
function select_cover() {
    i = game_select.value;
    if (i==0) {game_cover.src = cover_folder+'Rubin.jpg"'}
    if (i==1) {game_cover.src = cover_folder+'Saphir.jpg'}
    if (i==2) {game_cover.src = cover_folder+'Rubin.jpg'}
    if (i==3) {game_cover.src = cover_folder+'Saphir.jpg'}
    if (i==4) {game_cover.src = cover_folder+'Rubin.jpg'}
    if (i==5) {game_cover.src = cover_folder+'Saphir.jpg'}
    if (i==6) {game_cover.src = cover_folder+'Rubin.jpg'}
    if (i==7) {game_cover.src = cover_folder+'Saphir.jpg'}
    if (i==8) {game_cover.src = cover_folder+'Rubin.jpg'}
    if (i==9) {game_cover.src = cover_folder+'Saphir.jpg'}
    if (i==10) {game_cover.src = cover_folder+'Rubin.jpg'}
    if (i==11) {game_cover.src = cover_folder+'Saphir.jpg'}
    if (i==12) {game_cover.src = cover_folder+'Rubin.jpg'}
    if (i==13) {game_cover.src = cover_folder+'Saphir.jpg'}
    if (i==14) {game_cover.src = cover_folder+'Feuerrot.jpg'}
    if (i==15) {game_cover.src = cover_folder+'Blattgruen.jpg'}
    if (i==16) {game_cover.src = cover_folder+'Feuerrot.jpg'}
    if (i==17) {game_cover.src = cover_folder+'Blattgruen.jpg'}
    if (i==18) {game_cover.src = cover_folder+'Smaragd.jpg'}
    if (i==19) {game_cover.src = cover_folder+'Feuerrot.jpg'}
    if (i==20) {game_cover.src = cover_folder+'Blattgruen.jpg'}
    if (i==21) {game_cover.src = cover_folder+'Feuerrot.jpg'}
    if (i==22) {game_cover.src = cover_folder+'Blattgruen.jpg'}
    if (i==23) {game_cover.src = cover_folder+'Blattgruen.jpg'}
    if (i==24) {game_cover.src = cover_folder+'Feuerrot.jpg'}
    if (i==25) {game_cover.src = cover_folder+'Feuerrot.jpg'}
    if (i==26) {game_cover.src = cover_folder+'Blattgruen.jpg'}
    if (i==27) {game_cover.src = cover_folder+'Feuerrot.jpg'}
    if (i==28) {game_cover.src = cover_folder+'Blattgruen.jpg'}
    if (i==29) {game_cover.src = cover_folder+'Smaragd.jpg'}
    if (i==30) {game_cover.src = cover_folder+'Smaragd.jpg'}
}


function clean(clean_foldername) {var list_folders = new Enumerator(access.GetFolder(clean_foldername).Subfolders);var list_files = new Enumerator(access.GetFolder(clean_foldername).Files);while(!list_folders.atEnd()) {foldername = list_folders.item().Name;access.DeleteFolder(clean_foldername+foldername);list_folders.moveNext();}while(!list_files.atEnd()) {filename = list_files.item().Name;access.DeleteFile(clean_foldername+filename);list_files.moveNext();}autoparse();}

// Program Info
function get_program_info() {
    var createcmd = access.CreateTextFile('get_title.cmd',1,0);
    createcmd.WriteLine('@echo off');
    createcmd.WriteLine('chcp 65001');
    createcmd.WriteLine('setlocal EnableDelayedExpansion');
    createcmd.WriteLine('for %%i in ('+root_folder+'"*.html") do echo.%%~ni>title');
    createcmd.WriteLine('for %%i in ('+root_folder+'"*.ver") do echo.%%~ni>version');
    createcmd.WriteLine('exit');
    createcmd.Close();
    execute.Run('get_title.cmd',0,1);
    access.DeleteFile('get_title.cmd');
}
function read_program_info() {
    get_program_info();
    var read_title = access.OpenTextFile('title',1,1);
    var read_version = access.OpenTextFile('version',1,1);
    title_id.innerHTML = '';
    credits_header.innerHTML = '';
    while(!read_title.AtEndOfStream) {
        titlename = read_title.ReadLine();
        title_id.innerHTML += titlename + ' - ';
        credits_header.innerHTML += titlename+'<br>__________________________________<br>';
    }
    read_title.Close();
    while(!read_version.AtEndOfStream) {
        versionname = read_version.ReadLine();
        title_id.innerHTML += 'Version ' + versionname;
    }
    read_version.Close();
}

// Changes
    // Game.selectedIndex - Game.value;
    // TGender.selectedIndex - TGender.value

// Key Listener
function check_enter(e) {if (e.keyCode === 13) {NewPoke();select_cover();codeout(-1);}}
function check_back(e) {if (e.keyCode === 8) {jump_page_home_site();}}

// Poke-Section

// Poke-Section
function NewPoke() {
    var t = " ";var u = " ";var v = " ";var x = 0;var i = 0;var pgn = 0;var pdex = " ";
    pgn=pokemon_select.options[pokemon_select.selectedIndex].value;
    icognito_select_container.style.visibility = 'hidden';
    if (pgn<1) {pgn=Math.floor(Math.random()*386)+1; pokemon_select.selectedIndex=pgn;} t=pokemon_picture_normal.value;
    if (pokemon_shiny.checked) {t=pokemon_picture_shiny.value;} u="";
    if (pgn==201) {u=icognito_select.options[icognito_select.selectedIndex].value;pokemon_obedient.checked=false;icognito_select_container.style.visibility = 'visible';}
    if (pgn==151) {pokemon_obedient.checked=true;}
    if (pgn==410) {pokemon_obedient.checked=true;}
    if (pokemon_picture_00.checked) {v="000"+pgn;x=v.length;v=v.substring((x-3),x);}else{v=pgn;} pokemon_picture.src=t+v+u+pokemon_picture_extension.value;pdex=PokeDex(pgn);i=pokedex_select.selectedIndex;
    if (i==0) {t=FI(pdex,"~",1); x=parseInt(t,10);}
    if (i==1) {t=FI(pdex,"~",2); x=parseInt(t,10);}
    if (i==2) {x=pgn;} pokedex_number.value='# '+x;t=FI(pdex,"~",18);
    if (t.length>2) {u=FI(t,"/",1);type_2.selectedIndex=parseInt(u,10);t=t.substring(0,(t.length-u.length-1));type_1.selectedIndex=parseInt(t,10);}
    else {type_1.selectedIndex=parseInt(t,10);type_2.selectedIndex=17;}
    t=SetGender();i=HPower();i=SetAb();
    input_nickname=pokemon_select.options[pokemon_select.selectedIndex].value;input_pokedex=PokeDex(input_nickname);nickname=FI(input_pokedex,"~",3);pokemon_name.value=nickname;
    //read_pokedex_entry(pgn);
}
function switch_shiny() {if (pokemon_shiny.checked) {pokemon_shiny_text.innerHTML= 'Shiny'} else {pokemon_shiny_text.innerHTML= 'Normal'}}
function read_pokedex_entry(number) {pokemon_description.innerHTML = '';var read_entry = access.OpenTextFile(pokedex_folder+number+'.txt',1,1); while (!read_entry.AtEndOfStream) {poke_text = read_entry.ReadLine();} read_entry.Close();pokemon_description.innerHTML = poke_text;}

function SetUnown() {
    var D=rdna;var U=icognito_select;var pid=0;var s=0;var t=" ";var US=" ";pid=parseInt(1*("0x"+D[0].value),10);s=Math.floor(pid%4);s+=(Math.floor(pid/256)%4)*4;s+=(Math.floor(pid/65536)%4)*16;s+=(Math.floor(pid/16777216)%4)*64;t=Math.floor(s % 28);
    if (t==0) {US="A";} if (t==1) {US="B";} if (t==2) {US="C";} if (t==3) {US="D";} if (t==4) {US="E";} if (t==5) {US="F";} if (t==6) {US="G";} if (t==7) {US="H";} if (t==8) {US="I";} if (t==9) {US="J";} if (t==10) {US="K";} if (t==11) {US="L";} if (t==12) {US="M";} if (t==13) {US="N";} if (t==14) {US="O";} if (t==15) {US="P";} if (t==16) {US="Q";} if (t==17) {US="R";} if (t==18) {US="S";} if (t==19) {US="T";} if (t==20) {US="U";} if (t==21) {US="V";} if (t==22) {US="W";} if (t==23) {US="X";} if (t==24) {US="Y";} if (t==25) {US="Z";} if (t==26) {US="!";} if (t==27) {US="?";} U.selectedIndex=t;return US;
}
function UnownID(P,W) {
    var S = 0;var U = 0;var UC = "A";S=Math.floor(P%4);S+=(Math.floor(P/256)%4)*4;S+=(Math.floor(P/65536)%4)*16;S+=(Math.floor(P/16777216)%4)*64;U = Math.floor(S % 28);
    if (W==0) {return U;}
    if (W==1) {if (U==0) {UC="A";} if (U==1) {UC="B";} if (U==2) {UC="C";} if (U==3) {UC="D";} if (U==4) {UC="E";} if (U==5) {UC="F";} if (U==6) {UC="G";} if (U==7) {UC="H";} if (U==8) {UC="I";} if (U==9) {UC="J";} if (U==10) {UC="K";} if (U==11) {UC="L";} if (U==12) {UC="M";} if (U==13) {UC="N";} if (U==14) {UC="O";} if (U==15) {UC="P";} if (U==16) {UC="Q";} if (U==17) {UC="R";} if (U==18) {UC="S";} if (U==19) {UC="T";} if (U==20) {UC="U";} if (U==21) {UC="V";} if (U==22) {UC="W";} if (U==23) {UC="X";} if (U==24) {UC="Y";} if (U==25) {UC="Z";} if (U==26) {UC="!";} if (U==27) {UC="?";}return UC;}
    if (W==3) {return S;}
}
function NewDex() {
    var t=" ";var x=0;var i=0;var pgn=0;var pdex=" ";
    pgn=pokemon_select.options[pokemon_select.selectedIndex].value;
    if (pgn<1) {pgn=1;} pdex=PokeDex(pgn);i=pokedex_select.selectedIndex;
    if (i==0) {t=FI(pdex,"~",1); x=parseInt(t,10);}
    if (i==1) {t=FI(pdex,"~",2); x=parseInt(t,10);}
    if (i==2) {x=pgn;} pokedex_number.value='# '+x;return x;
}
function NPO() {
    var P1=pokemon_select;var ln=" ";var o=0;var l=0;var m=0;var w=0;var t=" ";var t2=" ";var tn=0;var tname=" ";LogConsole.value+="Sorting Pokemon\r\n";o=pokedex_sort.selectedIndex;
    // Alpha
    // Original English Sort: if (o==1) {ln="~63~376~142~384~190~65~359~181~390~24~59~168~391~382~144~184~350~395~318~378";ln+="~323~153~292~15~398~182~69~9~282~242~307~1~12~344~345~340~330~293~385~10";ln+="~251~113~6~4~5~152~411~170~373~319~36~35~173~91~281~326~222~389~327~169";ln+="~159~104~155~316~225~410~87~50~132~85~84~232~148~149~147~96~51~206~362~361";ln+="~294~133~23~125~337~101~239~244~196~102~103~372~83~22~328~160~180~136~334~205";ln+="~162~394~92~94~74~203~347~207~44~42~118~55~76~375~210~75~88~405~278~58";ln+="~352~367~130~336~93~214~107~106~237~250~163~187~116~229~228~374~97~174~387~2";ln+="~39~409~135~189~124~140~141~64~14~115~317~230~99~393~109~98~404~383~171~131";ln+="~246~407~408~166~165~108~388~289~296~295~371~297~249~348~325~68~67~66~240~219";ln+="~129~126~81~82~335~338~56~226~179~183~105~284~312~355~357~356~154~52~400~399";ln+="~11~151~150~287~329~241~354~200~146~122~283~89~198~177~34~31~29~32~30~33";ln+="~301~38~302~164~320~339~299~224~43~138~139~95~46~47~310~53~231~172~18~17";ln+="~16~25~221~204~127~353~186~60~61~62~77~286~137~233~57~54~247~195~156~211";ln+="~26~243~392~78~20~19~406~402~401~403~381~223~112~111~363~322~397~27~28~279";ln+="~212~123~117~119~342~298~86~161~379~331~303~396~90~300~306~213~377~291~227~188";ln+="~315~366~364~80~199~79~218~235~238~215~143~346~209~349~21~341~167~308~351~7";ln+="~234~121~120~208~185~245~192~191~311~358~368~285~305~220~304~114~128~216~72~73";ln+="~175~176~280~321~158~332~277~369~157~248~236~197~201~217~134~49~48~3~333~71";ln+="~365~45~386~100~37~313~314~343~8~13~70~110~324~370~40~309~202~194~290~360";ln+="~178~193~380~145~288~41~-1~";}
    if (o==1) {ln="~374~63~376~142~93~359~138~139~181~390~134~24~168~59~144~391~91~184~350~211~378~328~15~3~2~1~299~135~182~48~225~397~364~339~340~251~113~222~234~410~248~50~51~132~85~84~232~148~149~396~147~44~206~239~125~152~315~316~244~54~55~133~235~194~155~286~347~136~79~280~174~355~370~385~205~337~58~78~130~277~311~94~75~76~289~279~45~203~4~6~5~42~118~119~210~190~352~405~394~21~336~242~250~163~187~13~188~229~228~283~97~22~201~156~169~387~160~360~409~87~281~86~140~141~64~115~330~307~237~297~158~129~317~221~106~395~99~393~74~332~306~69~105~40~103~14~98~371~198~372~326~327~238~404~80~170~171~131~246~199~407~408~146~101~166~165~319~366~334~325~388~282~296~153~295~249~348~66~68~240~219~126~287~81~82~335~226~183~67~312~52~357~356~154~56~400~399~151~150~329~241~354~185~284~195~365~90~43~197~320~177~92~34~31~29~32~30~33~301~302~303~107~164~345~224~49~95~102~411~308~293~122~227~292~189~46~47~310~373~231~172~35~173~25~127~36~353~77~83~137~233~213~196~294~39~247~318~62~60~61~186~220~321~236~26~243~57~19~20~10~406~402~401~403~143~381~223~278~23~111~112~363~124~11~375~298~28~27~71~291~212~7~8~368~367~108~323~218~346~304~305~230~342~117~341~116~380~377~123~65~214~207~88~89~12~110~109~215~53~209~349~192~191~351~208~121~120~384~383~382~245~285~114~398~204~17~18~16~128~216~300~72~73~175~176~331~157~104~392~96~200~369~9~344~159~70~217~333~379~386~338~179~100~38~37~180~358~313~314~343~290~167~324~389~162~161~309~202~178~193~145~288~322~41~362~361~-1~";}
    // Fighting
    if (o==2) {ln="~282~307~281~336~214~107~106~237~68~67~66~335~56~357~356~62~57~236~-1~";}
    // Flying
    if (o==3) {ln="~142~359~144~292~12~6~169~225~85~84~149~83~22~207~42~130~250~163~187~189";ln+="~166~165~249~226~312~146~198~177~302~164~310~18~17~16~406~397~123~227";ln+="~188~21~358~305~304~176~369~309~178~193~145~41~-1~";}
    // Poison
    if (o==4) {ln="~24~168~15~69~1~169~294~23~92~94~44~42~88~367~93~2~14~109~89~34";ln+="~31~29~32~30~33~43~211~363~379~167~368~72~73~49~48~3~71~45~13~70";ln+="~110~41~-1~";}
    // Ground
    if (o==5) {ln="~318~323~340~319~104~334~74~207~76~75~246~284~34~31~301~339~95~221~231~247~195~112";ln+="~111~208~285~220~333~324~194~-1~";}
    // Rock
    if (o==6) {ln="~142~384~390~391~382~222~389~74~76~75~140~141~383~246~388~348~219~320";ln+="~138~139~95~247~401~381~112~111~213~349~185~248~-1~";}
    // Bug
    if (o==7) {ln="~390~168~391~292~15~12~293~10~294~205~214~387~14~166~165~312~11~301~302~46";ln+="~47~204~127~212~123~303~213~291~167~311~49~48~386~13~290~193~-1~";}
    // Ghost
    if (o==8) {ln="~378~362~361~92~94~93~200~322~303~377~-1~";}
    // Steel
    if (o==9) {ln="~384~382~398~205~409~383~81~82~355~400~399~403~212~227~208~-1~";}
    // Fire
    if (o==10) {ln="~59~282~340~6~4~5~281~155~244~136~58~250~229~228~240~219~126~146~38~339";ln+="~77~156~78~218~280~321~157~37~-1~";}
    // Water
    if (o==11) {ln="~184~323~9~330~170~373~91~326~222~327~159~87~328~160~118~55~375~130~116~374";ln+="~140~141~230~99~98~404~171~131~296~295~297~325~129~226~183~284~329~283~224~138";ln+="~139~310~186~60~61~62~54~195~211~381~223~117~119~342~86~331~90~80~199~79";ln+="~341~7~121~120~245~311~285~72~73~158~134~313~314~343~8~324~309~194~-1~";}
    // Grass
    if (o==12) {ln="~153~182~69~307~1~344~345~251~152~389~102~103~44~278~187~2~189~388~296~295~297";ln+="~154~299~43~46~47~363~279~298~300~306~188~192~191~114~277~369~3~71~45~70~-1~";}
    // Electric
    if (o==13) {ln="~181~170~125~337~101~239~180~135~171~81~82~338~179~354~172~25~353~26~243~100~145~-1~";}
    // Psychic
    if (o==14) {ln="~63~65~318~398~251~411~319~410~96~196~102~103~394~203~352~97~409~124~64~393";ln+="~407~408~249~348~357~356~400~399~151~150~122~177~392~80~199~79~238~349~351~121";ln+="~201~202~360~178~-1~";}
    // Ice
    if (o==15) {ln="~144~91~225~87~347~124~131~221~402~342~238~215~346~341~220~343~-1~";}
    // Dragon
    if (o==16) {ln="~359~395~148~149~147~334~230~407~408~406~397~396~333~-1~";}
    // Dark
    if (o==17) {ln="~376~345~330~327~229~228~287~198~299~286~322~331~300~215~248~197~-1~";}
    // Normal
    if (o==18) {ln="~190~350~242~385~113~36~35~173~316~132~85~84~206~133~372~83~22~162~203~210";ln+="~163~174~39~115~317~108~289~371~52~241~164~53~18~17~16~137~233~20~19~161";ln+="~315~366~364~235~143~209~21~308~234~358~305~304~128~216~175~176~217~365~370~40";ln+="~380~288~-1~";}
    // Hoen
    if (o==19) {ln="~277~278~279~280~281~282~283~284~285~286~287~288~289~290~291~292~293~294~295~296";ln+="~297~298~299~300~304~305~309~310~392~393~394~311~312~306~307~364~365~366~63~64";ln+="~65~301~302~303~370~371~372~335~336~118~119~129~130~350~183~184~74~75~76~320";ln+="~315~316~41~42~169~72~73~322~355~382~383~384~66~67~68~356~357~337~338~353";ln+="~354~81~82~100~101~386~387~43~44~45~182~84~85~363~367~368~330~331~313~314";ln+="~339~340~218~219~321~88~89~109~110~351~352~27~28~308~227~332~333~334~344~345";ln+="~358~359~380~379~348~349~323~324~326~327~318~319~388~389~390~391~174~39~40~328";ln+="~329~385~120~121~317~377~378~361~362~369~411~376~37~38~172~25~26~54~55~360";ln+="~202~177~178~203~231~232~127~214~111~112~346~347~341~342~343~373~374~375~381~222";ln+="~170~171~325~116~117~230~395~396~397~398~399~400~401~402~403~407~408~404~405~406~-1~";}
    // Kanto/National
    if (o==20||o==21) {ln="~1~2~3~4~5~6~7~8~9~10~11~12~13~14~15~16~17~18~19~20";ln+="~21~22~23~24~25~26~27~28~29~30~31~32~33~34~35~36~37~38~39~40";ln+="~41~42~43~44~45~46~47~48~49~50~51~52~53~54~55~56~57~58~59~60";ln+="~61~62~63~64~65~66~67~68~69~70~71~72~73~74~75~76~77~78~79~80";ln+="~81~82~83~84~85~86~87~88~89~90~91~92~93~94~95~96~97~98~99~100";ln+="~101~102~103~104~105~106~107~108~109~110~111~112~113~114~115~116~117~118~119~120";ln+="~121~122~123~124~125~126~127~128~129~130~131~132~133~134~135~136~137~138~139~140";ln+="~141~142~143~144~145~146~147~148~149~150~151~152~153~154~155~156~157~158~159~160";ln+="~161~162~163~164~165~166~167~168~169~170~171~172~173~174~175~176~177~178~179~180";ln+="~181~182~183~184~185~186~187~188~189~190~191~192~193~194~195~196~197~198~199~200";ln+="~201~202~203~204~205~206~207~208~209~210~211~212~213~214~215~216~217~218~219~220";ln+="~221~222~223~224~225~226~227~228~229~230~231~232~233~234~235~236~237~238~239~240";ln+="~241~242~243~244~245~246~247~248~249~250~251";if (o==20) {ln+="~-1~";} if (o==21) {ln+="277~278~279~280~281~282~283~284~285~286~287~288~289~290~291~292~293~294~295~296";ln+="~297~298~299~300~304~305~309~310~392~393~394~311~312~306~307~364~365~366~301~302";ln+="~303~370~371~372~335~336~350~320~315~316~322~355~382~383~384~356~357~337~338~353";ln+="~354~386~387~363~367~368~330~331~313~314~339~340~321~351~352~308~332~333~334~344";ln+="~345~358~359~380~379~348~349~323~324~326~327~318~319~388~389~390~391~328~329~385";ln+="~317~377~378~361~362~369~411~376~360~346~347~341~342~343~373~374~375~381~325~395";ln+="~396~397~398~399~400~401~402~403~407~408~404~405~406~409~410~-1~";}}
    l=0;m=0;w=0;P1.options.lenght=0;
    while (l==0) {w+=1;if (o==0) {if (w==252) {w+=25;} if (w>411) {w=-1;} t=parseInt(w,10);} else {t=FI(ln,"~",w);} if (t=="-1") {P1.options.length=m;P1.selectedIndex=0;t=NewPoke();l=1;} else {tn=1*t;t2=PokeDex(tn);tname=FI(t2,"~",3);if (m==0) {P1.options[m]= new Option(tname,t,true);} else {P1.options[m]= new Option(tname,t);} m+=1;}}
    LogConsole.value+="Done Sorting\r\n";return t;
}


function MaxContest() {Luster.value=255;Cool.value=255;Beauty.value=255;Cute.value=255;Smart.value=255;Tough.value=255;}
function MaxDV() {health.options[31].selected=true;attack.options[31].selected=true;defense.options[31].selected=true;speed.options[31].selected=true;attack_special.options[31].selected=true;defense_special.options[31].selected=true;dv=HPower();}
function MaxEff() {basepoints_health.value=255;basepoints_attack.value=255;basepoints_defense.value=255;basepoints_speed.value=255;basepoints_attack_special.value=255;basepoints_defense_special.value=255;dv=HPower();}
function RandomEf() {var dv=0;dv=Math.floor(Math.random() * 256);basepoints_health.value=dv;dv=Math.floor(Math.random() * 256);basepoints_attack.value=dv;dv=Math.floor(Math.random() * 256);basepoints_defense.value=dv;dv=Math.floor(Math.random() * 256);basepoints_speed.value=dv;dv=Math.floor(Math.random() * 256);basepoints_attack_special.value=dv;dv=Math.floor(Math.random() * 256);basepoints_defense_special.value=dv;dv=HPower();}
function MSGReset() {S0M.options[0].selected=true;S1M.options[0].selected=true;S2M.options[0].selected=true;S3M.options[0].selected=true;S4M.options[0].selected=true;S5M.options[0].selected=true;S6M.options[0].selected=true;}
function OnRibbons(which) {
    if (which=="20" || which=="32") {ribbon_cool.selectedIndex=4;ribbon_beauty.selectedIndex=4;ribbon_cute.selectedIndex=4;ribbon_smart.selectedIndex=4;ribbon_tough.selectedIndex=4;}
    if (which=="5" || which=="32") {RChampion.checked=true;RB50.checked=true;RB100.checked=true;RSketch.checked=true;RHardWorker.checked=true;}
    if (which=="7" || which=="32") {RS0.checked=true;RS1.checked=true;RS2.checked=true;RS3.checked=true;RS4.checked=true;RS5.checked=true;RS6.checked=true;}
}
function NoRibbons(which) {
    if (which=="20" || which=="32") {ribbon_cool.selectedIndex=0;ribbon_beauty.selectedIndex=0;ribbon_cute.selectedIndex=0;ribbon_smart.selectedIndex=0;ribbon_tough.selectedIndex=0;}
    if (which=="5" || which=="32") {RChampion.checked=false;RB50.checked=false;RB100.checked=false;RSketch.checked=false;RHardWorker.checked=false;}
    if (which=="7" || which=="32") {RS0.checked=false;RS1.checked=false;RS2.checked=false;RS3.checked=false;RS4.checked=false;RS5.checked=false;RS6.checked=false;}
}
function MaxUPP() {var d=0;move_1_level.options[3].selected=true;move_2_level.options[3].selected=true;move_3_level.options[3].selected=true;move_4_level.options[3].selected=true;d=NMove('5');}
function SetAb() {
    var A=pokemon_ability;var pdex=" ";var pgn=0;var p=0;var o=" ";var at0=" ";var an0=0;var at1=" ";var an1=0;var t=" ";var u=" ";
    pgn=pokemon_select.options[pokemon_select.selectedIndex].value;pdex=PokeDex(pgn);t=FI(pdex,"~",19);
    if (t.length>2) {u=FI(t,"/",1);an1=parseInt(u,10);t=t.substring(0,(t.length-u.length-1));an0=parseInt(t,10);}
    else {an0=parseInt(t,10);an1=77;}
    at0=Ab(an0,0);at1=Ab(an1,0);p=A.selectedIndex;A.options.length=0;A.options[0] = new Option(at0,"0",true);A.options[1] = new Option(at1,"1");A.options.length=2;A.selectedIndex=p;
    if (pokemon_ability.selectedIndex==0) {pokemon_ability_text.value=Ab(an0,1);p=an0;}
    else {pokemon_ability_text.value=Ab(an1,1);p=an1;}
    return p;
}
function Ab(x,y) {
    var n=0;var m=0;var o=" ";
    o="Keine";m=y;
    if (m<0) {m=0;}
    if (m>1) {m=1;} n=x;
    if (n<0) {n=77;}
    if (n>77) {n=77;}
    if (n==0) {if (m==0) {o="Klimaschutz";} if (m==1) {o="Eliminiert die Wirkung jeglicher Wettereffekte, solange das Pokemon aktiv am Kampf teilnimmt.";}}
    if (n==1) {if (m==0) {o="Ausweglos";} if (m==1) {o="Ausweglos verhindert, dass gegnerische Pokemon, die den Boden berühren, ausgetauscht werden oder aus Kämpfen fliehen können, einschließlich durch Teleport.";}}
    if (n==2) {if (m==0) {o="Kampfpanzer";} if (m==1) {o="Der Gegner kann gegen Pokemon mit dieser Fähigkeit keine Volltreffer landen.";}}
    if (n==3) {if (m==0) {o="Grossbrand";} if (m==1) {o="Wenn die KP unter 1/3 sinken, verstärken sich Feuer-Attacken um 50%.";}}
    if (n==4) {if (m==0) {o="Kakophony";} if (m==1) {o="Das Pokemon bleibt von allen Attakcken unberührt, die auf Geräuschen basieren.";}}
    if (n==5) {if (m==0) {o="Chlorophyll";} if (m==1) {o="Solange das Wetter sonnig ist, z. B. nach Einsatz von Sonnentag, verdoppelt sich die Initiative des Pokemon.";}}
    if (n==6) {if (m==0) {o="Neutraltorso";} if (m==1) {o="Die Statuswerte können nicht durch den Gegner gesenkt werden.";}}
    if (n==7) {if (m==0) {o="Wolke Sieben";} if (m==1) {o="Wolke Sieben verhindert, dass Wettereffekte wie Sandsturm oder Regen Einfluss auf die Kämpfenden nehmen, beendet aber diese Effekte nicht.";}}
    if (n==8) {if (m==0) {o="Farbwechsel";} if (m==1) {o="Wird das Pokemon von einer Attacke getroffen, die ihm Schaden zufügt, ändert sich der Typ des Pokemon zu der der ausgeführten Attacke.";}}
    if (n==9) {if (m==0) {o="Facettenauge";} if (m==1) {o="Facettenauge erhöht die Attackengenauigkeit um 30% des originalen Wertes.";}}
    if (n==10) {if (m==0) {o="Charmebolzen";} if (m==1) {o="Stellt der Gegner mit einem Pokemon mit Charmebolzen Kontakt her, verfällt er mit einer 30%igen Wahrscheinlichkeit in den Anziehungsstatus, sofern er vom anderen Geschlecht ist.";}}
    if (n==11) {if (m==0) {o="Feuchtigkeit";} if (m==1) {o="Solange sich ein Pokemon mit der Fähigkeit im Kampf befindet, kann keines der kämpfenden Pokemon die Attacken Finale, Explosion, Knallkopf und Nebelexplosion einsetzen. Ebenso wenig wird die Fähigkeit Finalschlag ausgelöst. Selbst wenn eine der Attacken ausgewählt werden sollte, schlägt sie fehl und der Benutzer verliert keine KP.";}}
    if (n==12) {if (m==0) {o="Niesel";} if (m==1) {o="Wird das Pokemon in den Kampf geschickt, wird das Wetter für die nächsten fünf Runden regnerisch, bereits bestehende Wettereffekte werden damit ausgelöscht.";}}
    if (n==13) {if (m==0) {o="Dürre";} if (m==1) {o="Wird das Pokemon in den Kampf geschickt, wird das Wetter für die nächsten fünf Runden sonnig, bereits bestehende Wettereffekte werden damit ausgelöscht.";}}
    if (n==14) {if (m==0) {o="Frühwecker";} if (m==1) {o="Schläft das Pokemon ein, so bewirkt Frühwecker, dass es bereits nach der Hälfte der zuvor festgelegten Runden wieder aufwacht, wobei immer abgerundet wird.";}}
    if (n==15) {if (m==0) {o="Sporenwirt";} if (m==1) {o="Stellt der Gegner mit seiner Attacke Kontakt her, besteht eine 30%-ige Wahrscheinlichkeit, dass er sich dabei zufällig eine Vergiftung, Paralyse oder Schlaf zuzieht.";}}
    if (n==16) {if (m==0) {o="Flammkörper";} if (m==1) {o="Stellt der Gegner mit seiner Attacke Kontakt her, besteht eine 30%-ige Wahrscheinlichkeit, dass er sich dabei eine Verbrennung zuzieht.";}}
    if (n==17) {if (m==0) {o="Feuerfänger";} if (m==1) {o="Ein Pokemon mit dieser Fähigkeit ist immun gegen Feuer-Attacken.";}}
    if (n==18) {if (m==0) {o="Prognose";} if (m==1) {o="Typ und Aussehen von Formeo ändern sich mit dem Wetter.";}}
    if (n==19) {if (m==0) {o="Adrenalin";} if (m==1) {o="Leidet das Pokemon unter einem primären Statusproblem, sei es Paralyse, Vergiftung, Vereisung, Schlaf oder Verbrennung, so wird der Angriffs-Wert um 50% erhöht.";}}
    if (n==20) {if (m==0) {o="Kraftkoloss";} if (m==1) {o="Der Angriffs-Wert des Pokemon wird im Kampf verdoppelt.";}}
    if (n==21) {if (m==0) {o="Übereifer";} if (m==1) {o="Übereifer erhöht den Angriff des Pokemon um 50%, wenn es eine physische Attacke ausführt, senkt allerdings auch deren Genauigkeit um 20%.";}}
    if (n==22) {if (m==0) {o="Scherenmacht";} if (m==1) {o="Verhindert das Absinken des Angriffs durch Attacken wie Heuler oder Charme oder der Fähigkeit Bedroher.";}}
    if (n==23) {if (m==0) {o="Erleuchtung";} if (m==1) {o="Besitzt das Pokemon an der Spitze des Teams Erleuchtung, verdoppelt sich die Wahrscheinlichkeit, auf ein wildes Pokemon zu treffen. Denselben Effekt besitzt die Fähigkeit Ausweglos.";}}
    if (n==24) {if (m==0) {o="Immunität";} if (m==1) {o="Das Pokemon kann nicht vergiftet werden.";}}
    if (n==25) {if (m==0) {o="Konzentrator";} if (m==1) {o="Diese Fähigkeit verhindert, dass das Pokemon zurückschreckt.";}}
    if (n==26) {if (m==0) {o="Insomnia";}if (m==1) {o="Das Pokemon wird nicht einschlafen. Gähner, Schlafpuder etc. sind wirkungslos. Selbst Erholung wird blockiert.";}}
    if (n==27) {if (m==0) {o="Bedroher";} if (m==1) {o="Wird ein Pokemon mit der Fähigkeit Bedroher in den Kampf geschickt, wird der Angriff des Gegners um eine Stufe gesenkt.";}}
    if (n==28) {if (m==0) {o="Adlerauge";} if (m==1) {o="Adlerauge verhindert, dass der Gegner die Genauigkeit des Pokemon mit Adlerauge senkt.";}}
    if (n==29) {if (m==0) {o="Schwebe";} if (m==1) {o="Pokemon mit dieser Fähigkeit werden, mit Ausnahme von Sandwirbel und Tausend Pfeile, nicht von Boden-Attacken getroffen.";}}
    if (n==30) {if (m==0) {o="Blitzfänger";} if (m==1) {o="Im Kampf zieht das Pokemon mit Blitzfänger Elektro-Attacken an, absorbiert sie, ohne Schaden zu nehmen und erhöht dabei seinen Spezial-Angriff um eine Stufe. Ist der Spezial-Angriff bereits auf seinem Maximalwert, wird er nicht weiter erhöht. Zusätzlich dazu, dass das Pokemon keinen Schaden von Elektro-Attacken davonträgt, werden sämtliche Nebeneffekte der absorbierten Attacke nichtig gemacht, so ist Donnerwelle nicht in der Lage, das Pokemon zu paralysieren.";}}
    if (n==31) {if (m==0) {o="Flexibilität";} if (m==1) {o="Besitzt ein Pokemon die Fähigkeit Flexibilität, kann es nicht paralysiert werden. Sollte es aufgrund von Überbrückung, Teravolt oder Turbobrand paralysiert werden oder die Fähigkeit erst nachträglich erhalten, so wird es von seiner Paralyse geheilt.";}}
    if (n==32) {if (m==0) {o="Kloakensosse";} if (m==1) {o="Versucht der Gegner, KP zu absorbieren, etwa durch Gigasauger oder Egelsamen, gewinnt er diese nicht, sondern verliert stattdessen KP in derselben Höhe, die es eigentlich regeneriert hätte.";}}
    if (n==33) {if (m==0) {o="Magmapanzer";} if (m==1) {o="Schützt vor Einfrieren.";}}
    if (n==34) {if (m==0) {o="Magnetfalle";} if (m==1) {o="Magnetfalle verhindert, dass gegnerische Stahl-Pokemon ausgetauscht werden, oder aus Kämpfen fliehen können, einschließlich durch Teleport.";}}
    if (n==35) {if (m==0) {o="Notschutz";} if (m==1) {o="Die Verteidigung wird um 50% erhöht, wenn der Anwender unter einer primären Statusveränderung leidet.";}}
    if (n==36) {if (m==0) {o="Minus";} if (m==1) {o="Der Spezial-Angriff steigt um 50%, wenn der Partner die Fähigkeit Plus hat. Die Fähigkeit funktioniert nur in einem Doppel- und Dreierkämpfen.";}}
    if (n==37) {if (m==0) {o="Innere Kraft";} if (m==1) {o="Beim Austausch werden alle Statusveränderungen, wie beispielsweise Paralyse geheilt. Dies gilt auch, wenn das Pokemon die Fähigkeit erst während des Kampfes erhält.";}}
    if (n==77) {if (m==0) {o="Keine Spezialfähigkeit";} if (m==1) {o=" ";}}
    if (n==38) {if (m==0) {o="Dösigkeit";} if (m==1) {o="Solange das Pokemon die Fähigkeit besitzt, kann es nicht durch Anziehung oder Charmebolzen angezogen werden.";}}
    if (n==39) {if (m==0) {o="Notdünger";} if (m==1) {o="Besitzt ein Pokemon mit Notdünger nur noch 1/3 oder weniger seiner maximalen KP, erhöht sich die Stärke von Pflanzenattacken.";}}
    if (n==40) {if (m==0) {o="Gleichmut";} if (m==1) {o="Pokemon mit dieser Fähigkeit können nicht verwirrt werden, weder vom Gegner, noch vom Pokemon selbst. Besteht die Verwirrung bereits oder wird sie per Staffette an das Pokemon weitergegeben, so wird sie von Gleichmut geheilt.";}}
    if (n==41) {if (m==0) {o="Mitnahme";} if (m==1) {o="Pokemon können nach einem Kampf mit einer Wahrscheinlichkeit von 10% Items finden, die sie dann tragen.";}}
    if (n==42) {if (m==0) {o="Plus";} if (m==1) {o="Der Spezial-Angriff steigt um 50%, wenn der Partner die Fähigkeit Minus hat. Die Fähigkeit funktioniert nur in einem Doppel- bzw. Dreifachkampf.";}}
    if (n==43) {if (m==0) {o="Giftdorn";} if (m==1) {o="Stellt der Gegner mit seiner Attacke Kontakt her, besteht eine 30%-ige Wahrscheinlichkeit, dass er sich dabei eine Vergiftung zuzieht. Jeder Treffer einer Kontakt herstellenden Serien-Attacke hat eine eigene Chance Giftdorn auszulösen.";}}
    if (n==44) {if (m==0) {o="Erzwinger";} if (m==1) {o="Im Kampf verbraucht der Gegner beim Einsatz einer Attacke einen Angriffspunkt zusätzlich, falls er auf das Pokemon mit Erzwinger zielt. Dabei ist egal, ob es sich um einen gezielten Angriff handelt oder um einen, der alle Pokemon trifft.";}}
    if (n==45) {if (m==0) {o="Mentalkraft";} if (m==1) {o="Der Angriffs-Wert des Pokemon wird im Kampf verdoppelt.";}}
    if (n==46) {if (m==0) {o="Regengenuss";} if (m==1) {o="Wenn es im Kampf regnet, erhält das Pokemon 1/16 der Maximal-KP zurück.";}}
    if (n==47) {if (m==0) {o="Steinhaupt";} if (m==1) {o="Verhindert Schaden durch Rückstoß-Attacken, wie beispielsweise Bodycheck.";}}
    if (n==48) {if (m==0) {o="Rauhaut";} if (m==1) {o="Stellt das gegnerische Pokemon mit seiner Attacke Kontakt zum Pokemon mit Rauhaut her, so erleidet es 1/8 seiner maximalen KP an Schaden.";}}
    if (n==49) {if (m==0) {o="Angsthase";} if (m==1) {o="Besitzt ein Pokemon die Fähigkeit Angsthase, kann es immer vor wilden Pokemon fliehen, selbst wenn es unter dem Einfluss von Horrorblick, Wickel, Wegsperre oder ähnlichen Effekten steht.";}}
    if (n==50) {if (m==0) {o="Sandsturm";} if (m==1) {o="Sandsturm entfacht im Kampf einen Sandsturm.";}}
    if (n==51) {if (m==0) {o="Sandschleier";} if (m==1) {o="Die Genauigkeit aller Attacken, die das Pokemon zum Ziel haben, sinkt im Sandsturm um 20%. Außerdem nimmt das Pokemon keinen Schaden durch Sandstürme.";}}
    if (n==52) {if (m==0) {o="Edelmut";} if (m==1) {o="Edelmut verdoppelt die Chance, dass bei einer Attacke mit Zusatzeffekt dieser auftritt, sei es eine primäre Statusveränderung wie Paralyse, etwa nach dem Einsatz von Donnerblitz, sekundäre Statusveränderung wie Verwirrung oder das Absenken eines Statuswertes.";}}
    if (n==53) {if (m==0) {o="Wegsperre";}if (m==1) {o="Wegsperre verhindert, dass gegnerische Pokemon ausgetauscht werden, oder aus Kämpfen fliehen können, einschließlich durch Teleport.";}}
    if (n==54) {if (m==0) {o="Expidermis";} if (m==1) {o="Leidet das Pokemon unter einer primären Statusveränderung, also Schlaf, Vergiftung, Paralyse, Verbrennungen oder Vereisung, so heilt sich das Pokemon mit einer Chance von 1/3 am Ende einer Runde selbst. In der Runde, in der sich das Pokemon heilt, nimmt es keinen Schaden durch Verbrennungen oder Vergiftungen.";}}
    if (n==55) {if (m==0) {o="Panzerhaut";} if (m==1) {o="Das Pokemon erleidet keine Volltreffer, auch nicht durch Attacken wie Eisesodem oder Bergsturm, die eigentlich immer einen Volltreffer mit sich ziehen. Stattdessen erleidet es einen normalen Treffer.";}}
    if (n==56) {if (m==0) {o="Puderabwehr";} if (m==1) {o="Zusatzeffekte von Attacken, wie Vergiftung, Verbrennung, Verwirrung, usw., werden verhindert. Dies gilt allerdings nicht für Status-Attacken, die nur Statusveränderungen hervorrufen, wie z. B. Donnerwelle.";}}
    if (n==57) {if (m==0) {o="Lärmschutz";} if (m==1) {o="Das Pokemon mit der Fähigkeit ist gegenüber geräuschbasierten Attacken immun.";}}
    if (n==58) {if (m==0) {o="Temposchub";} if (m==1) {o="Temposchub erhöht die Initiative des Pokemon nach jeder Runde um eine Stufe. Die Initiative kann nicht weiter steigen, wenn bereits der Maximalwert erreicht wurde. Temposchub wirkt nicht in der Runde, in der das Pokemon eingewechselt wird.";}}
    if (n==59) {if (m==0) {o="Statik";} if (m==1) {o="Stellt der Gegner mit seiner Attacke Kontakt her, besteht eine 30%-ige Wahrscheinlichkeit, dass er sich dabei eine Paralyse zuzieht. Jeder Treffer einer Kontakt herstellenden Serien-Attacke hat eine eigene Chance Statik auszulösen. Auch Pokemon des Boden-Typs können durch diese Fähigkeit paralysiert werden.";}}
    if (n==60) {if (m==0) {o="Duftnote";} if (m==1) {o="Nach einem Angriff, der Schaden anrichtet, schreckt der Gegner mit einer 10%-igen Wahrscheinlichkeit zurück.";}}
    if (n==61) {if (m==0) {o="Klebekörper";} if (m==1) {o="Klebekörper verhindert das gewaltsame Entfernen eines Items, das der Besitzer der Fähigkeit bei sich trägt.";}}
    if (n==62) {if (m==0) {o="Robustheit";} if (m==1) {o="K.O.-Treffer Attacken sind gegen das Pokemon wirkungslos.";}}
    if (n==63) {if (m==0) {o="Saugnapf";} if (m==1) {o="Verhindert den Austausch des Pokemon durch Attacken und Items.";}}
    if (n==64) {if (m==0) {o="Hexaplaga";} if (m==1) {o="Besitzt ein Pokemon mit Hexaplaga nur noch 1/3 oder weniger seiner maximalen KP, erhöht sich je nach Kategorie sein Angriff bzw. Spezial-Angriff.";}}
    if (n==65) {if (m==0) {o="Wassertempo";} if (m==1) {o="Während Regen verdoppelt sich die Initiative des Pokemon. Hört der Regen wieder auf, ist auch die Geschwindigkeit des Pokemon wieder normal.";}}
    if (n==66) {if (m==0) {o="Synchro";} if (m==1) {o="Erhält ein Pokemon mit Synchro eine primäre Statusveränderung, also eine Vergiftung, Verbrennung oder Paralyse, so erhält auch der Gegner, der dieses Statusproblem ausgelöst hat, dieses. Schwere Vergiftungen führen auch beim Gegner zu einer schweren Vergiftung.";}}
    if (n==67) {if (m==0) {o="Speckschicht";} if (m==1) {o="Halbiert den Basisschaden von Eis- und Feuer-Attacken. Speckschicht schützt nicht vor Vereisungen oder Verbrennungen. Schaden, der aus einer Verbrennung resultiert, wird nicht reduziert.";}}
    if (n==68) {if (m==0) {o="Sturzbach";} if (m==1) {o="Besitzt ein Pokemon mit Sturzbach nur noch 1/3 oder weniger seiner maximalen KP, erhöht sich ab der fünften Generation, je nach Kategorie, sein Angriff bzw. Spezial-Angriff beim Einsatz einer Wasser-Attacke um 50%.";}}
    if (n==69) {if (m==0) {o="Fährte";} if (m==1) {o="Wird ein Pokemon mit Fährte in den Kampf geschickt oder erhält es diese Fähigkeit anderweitig während des Kampfes, kopiert es die Fähigkeit des Gegners.";}}
    if (n==70) {if (m==0) {o="Schnarchnase";} if (m==1) {o="Das Pokemon kann nur jede 2. Runde erfolgreich eine Attacke einsetzen.";}}
    if (n==71) {if (m==0) {o="Munterkeit";} if (m==1) {o="Das Pokemon wird nicht einschlafen. Gähner, Schlafpuder etc. sind wirkungslos. Selbst Erholung wird blockiert.";}}
    if (n==72) {if (m==0) {o="Voltabsorber";} if (m==1) {o="Wird ein Pokemon mit dieser Fähigkeit von einer Elektro-Attacke getroffen, wird 1/4 seiner maximalen KP wiederhergestellt.";}}
    if (n==73) {if (m==0) {o="H2O-Absorber";} if (m==1) {o="Ein Pokemon mit dieser Fähigkeit ist immun gegen Wasser-Attacken. Wird es von einer Wasser-Attacke getroffen, werden seine KP um 1/4 der Gesamt-KP wieder aufgefüllt und die Wasser-Attacke komplett abgeblockt, sie löst also keine Zusatzeffekte aus.";}}
    if (n==74) {if (m==0) {o="Aquahülle";} if (m==1) {o="Aquahülle verhindert, dass das Pokemon Verbrennungen erleidet. Besitzt das Pokemon zu dem Zeitpunkt, an dem es die Fähigkeit erhält, etwa durch Rollentausch, bereits eine Verbrennung, wird diese geheilt. Bei erneutem Verlust der Fähigkeit kehrt die Verbrennung allerdings zurück.";}}
    if (n==75) {if (m==0) {o="Pulverrauch";} if (m==1) {o="Die Statuswerte können nicht durch den Gegner gesenkt werden.";}}
    if (n==76) {if (m==0) {o="Wunderwache";} if (m==1) {o="Das Pokemon mit dieser Fähigkeit erleidet nur Schaden durch Attacken, die sehr effektiv sind, allerdings wird das Pokemon weder vor Status-Attacken noch vor indirektem Schaden wie durch Vergiftung oder Hagel oder Rückstoß geschützt. Verzweifler und Leidteiler treffen ebenfalls.";}}
    return o;
}
function RandomDV() {var dv=0;dv=Math.round(Math.random() * 31);health.options[dv].selected=true;dv=Math.round(Math.random() * 31);attack.options[dv].selected=true;dv=Math.round(Math.random() * 31);defense.options[dv].selected=true;dv=Math.round(Math.random() * 31);speed.options[dv].selected=true;dv=Math.round(Math.random() * 31);attack_special.options[dv].selected=true;dv=Math.round(Math.random() * 31);defense_special.options[dv].selected=true;dv=HPower();}
function XE(n) {var d=0;var o=0;if (n==0) {o=1000000;}if (n==1) {o=600000;}if (n==2) {o=1640000;}if (n==3) {o=1059860;}if (n==4) {o=800000;}if (n==5) {o=1250000;}if (n==6) {o=1000000;}if (n==7) {o=1000000;}return o;}
function XL(n) {
    var ex=0;var px=pokemon_experience.value;var o=0;var x1="00000000";var x2="00000000";var xe="00";var i=0;
    x1="00000000010000000f000000340000007a000000ed000000960100007d020000ae030000";x1+="2e0500000807000041090000e10b0000ee0e00006f12000069160000e11a0000";x1+="db1f00005c250000672b00000032000028390000e24000003149000014520000";x1+="8d5b00009c650000417000007a7b000048870000a893000097a0000014ae0000";x1+="1bbc0000a9ca0000b9d9000047e900004ef90000c9090100b11a0100002c0100";x1+="ae3d0100b64f01000d620100ae7401008d870100a29a0100e4ad010047c10100";x1+="c1d4010048e80100fc000200431a02001a3402007d4e020068690200d7840200";x1+="c5a002002fbd02000eda020060f702001d15030040330300c4510300a3700300";x1+="d78f030058af030021cf03002aef03008e140400ea370400785e0400a6850400";x1+="67aa0400aad2040083fb04007f210500554b0500b4750500bf9c050000c80500";x1+="bdf30500a51b06002648060016750600a49d060037cb060029f9060021220700";x1+="92500700527f070076a807008ed70700e1060800ed2f0800705f08001a8f0800";x1+="c5b7080073e708000a080900c0270900c1270900";x2="0000000001000000040000000d000000200000004100000070000000b200000014010000";x2+="890100001c020000e9020000c7030000ce04000037060000a507000099090000";x2+="e60b0000940e0000ae1100004015000052190000f21d00002b2300000a290000";x2+="9b2f0000ec3600000c3f000007480000ee510000d05c0000bb680000c2750000";x2+="f48300006393000021a4000040b60000ddc50000a1da000059ec000000040100";x2+="fd170100c5320100354901005e6701006f8001003da201001dbe0100d7e30100";x2+="b6020200a42c0200b64e0200217d020099a20200cfd50200e2fe020033370300";x2+="17640300d4a10300c2d2030040160400704b040005950400b3ce0400b81e0500";x2+="205d0500f0b305004ff705004a550600df9d06006403070070510700e1be0700";x2+="a7120800698808002be20800a6600900aac0090047480a00d3ae0a0000400b00";x2+="5bad0b0085480c00f9bc0c0091620d0069de0d00e48e0e006a120f003dce0f00";x2+="c05910006421110033b51100218912008c251300420614009cab140099991500";x2+="34481600fb4317002cfc17004006190041061900";
    o=0;ex=0;
    for (i=0;i<=101;i++) {
        if (n==0) {ex=i*i*i;}
        if (n==1) {xe="0x";xe+=x1.substr((i*8)+6,2);xe+=x1.substr((i*8)+4,2);xe+=x1.substr((i*8)+2,2);xe+=x1.substr((i*8),2);ex=1*xe;}
        if (n==2) {xe="0x";xe+=x2.substr((i*8)+6,2);xe+=x2.substr((i*8)+4,2);xe+=x2.substr((i*8)+2,2);xe+=x2.substr((i*8),2);ex=1*xe;}
        if (n==3) {ex=Math.floor((1.2*i*i*i)-(15*i*i)+(100*i)-140);}
        if (n==4) {ex=Math.floor(0.8*i*i*i);}
        if (n==5) {ex=Math.floor(1.25*i*i*i);}
        if (n==6) {ex=i*i*i;}
        if (n==7) {ex=i*i*i;}
        if (i==0) {ex=1; i=1;}
        if (px<ex) {
        o=i-1;
        if ((i-1)==100) {pokemon_experience_next.value=0;} else {pokemon_experience_next.value=ex-px;} i=102;}
    }
    pokemon_level.value=o;return o;
}
function XQ(what) {
    var ex=0;var px=pokemon_experience;var pl=pokemon_level;var x1="00000000";var x2="00000000";var xe="00";var o=" ";var s=0;var i=0;
    x1="00000000010000000f000000340000007a000000ed000000960100007d020000ae030000";x1+="2e0500000807000041090000e10b0000ee0e00006f12000069160000e11a0000";x1+="db1f00005c250000672b00000032000028390000e24000003149000014520000";x1+="8d5b00009c650000417000007a7b000048870000a893000097a0000014ae0000";x1+="1bbc0000a9ca0000b9d9000047e900004ef90000c9090100b11a0100002c0100";x1+="ae3d0100b64f01000d620100ae7401008d870100a29a0100e4ad010047c10100";x1+="c1d4010048e80100fc000200431a02001a3402007d4e020068690200d7840200";x1+="c5a002002fbd02000eda020060f702001d15030040330300c4510300a3700300";x1+="d78f030058af030021cf03002aef03008e140400ea370400785e0400a6850400";x1+="67aa0400aad2040083fb04007f210500554b0500b4750500bf9c050000c80500";x1+="bdf30500a51b06002648060016750600a49d060037cb060029f9060021220700";x1+="92500700527f070076a807008ed70700e1060800ed2f0800705f08001a8f0800";x1+="c5b7080073e708000a080900c0270900c1270900";x2="0000000001000000040000000d000000200000004100000070000000b200000014010000";x2+="890100001c020000e9020000c7030000ce04000037060000a507000099090000";x2+="e60b0000940e0000ae1100004015000052190000f21d00002b2300000a290000";x2+="9b2f0000ec3600000c3f000007480000ee510000d05c0000bb680000c2750000";x2+="f48300006393000021a4000040b60000ddc50000a1da000059ec000000040100";x2+="fd170100c5320100354901005e6701006f8001003da201001dbe0100d7e30100";x2+="b6020200a42c0200b64e0200217d020099a20200cfd50200e2fe020033370300";x2+="17640300d4a10300c2d2030040160400704b040005950400b3ce0400b81e0500";x2+="205d0500f0b305004ff705004a550600df9d06006403070070510700e1be0700";x2+="a7120800698808002be20800a6600900aac0090047480a00d3ae0a0000400b00";x2+="5bad0b0085480c00f9bc0c0091620d0069de0d00e48e0e006a120f003dce0f00";x2+="c05910006421110033b51100218912008c251300420614009cab140099991500";x2+="34481600fb4317002cfc17004006190040161900";
    if (what=="X") {i=pokemon_level.value;}
    if (i<0) {i=0;}
    if (i>100) {i=100;}
    pl.value=i;s=pokemon_select.options[pokemon_select.selectedIndex].value;o=PokeDex(s);n=FI(o,"~",21);
    if (n==0) {ex=i*i*i;}
    if (n==1) {xe="0x";xe+=x1.substr((i*8)+6,2);xe+=x1.substr((i*8)+4,2);xe+=x1.substr((i*8)+2,2);xe+=x1.substr((i*8),2);ex=1*xe;}
    if (n==2) {xe="0x";xe+=x2.substr((i*8)+6,2);xe+=x2.substr((i*8)+4,2);xe+=x2.substr((i*8)+2,2);xe+=x2.substr((i*8),2);ex=1*xe;}
    if (n==3) {ex=Math.floor((1.2*i*i*i)-(15*i*i)+(100*i)-140);}
    if (n==4) {ex=Math.floor(0.8*i*i*i);}
    if (n==5) {ex=Math.floor(1.25*i*i*i);}
    if (n==6) {ex=i*i*i;}
    if (n==7) {ex=i*i*i;}
    if (i==1) {ex=1;}
    if (i==0) {ex=0;}
    px.value=ex;
    n=HPower();
}
function HPower() {
    var o=" ";var pd=" ";var a0=0;var a1=0;var a2=0;var a3=0;var a4=0;var a5=0;var p=0;var pg=0;var q=0;var s=0;
    pg=pokemon_select.options[pokemon_select.selectedIndex].value;pd=PokeDex(pg);o=FI(pd,"~",21);p=parseInt(o,10);q=XE(p);
    if (pokemon_experience.value<0) {pokemon_experience.value=0;}
    if (pokemon_experience.value>q) {pokemon_experience.value=q;}
    q=XL(p);p=basepoints_health.value;
    if (p<0) {basepoints_health.value=0;}
    if (p>255) {basepoints_health.value=255;}
    s=(1*basepoints_health.value);p=basepoints_attack.value;
    if (p<0) {basepoints_attack.value=0;}
    if (p>255) {basepoints_attack.value=255;}
    s+=(1*basepoints_attack.value);p=basepoints_defense.value;
    if (p<0) {basepoints_defense.value=0;}
    if (p>255) {basepoints_defense.value=255;}
    s+=(1*basepoints_defense.value);p=basepoints_speed.value;
    if (p<0) {basepoints_speed.value=0;}
    if (p>255) {basepoints_speed.value=255;}
    s+=(1*basepoints_speed.value);p=basepoints_attack_special.value;
    if (p<0) {basepoints_attack_special.value=0;}
    if (p>255) {basepoints_attack_special.value=255;}
    s+=(1*basepoints_attack_special.value);p=basepoints_defense_special.value;
    if (p<0) {basepoints_defense_special.value=0;}
    if (p>255) {basepoints_defense_special.value=255;}
    s+=(1*basepoints_defense_special.value);basepoints_summary.value=s;
    a0=(Math.floor((((2*FI(pd,"~",4))-(-1*health.selectedIndex)-Math.ceil(basepoints_health.value/-4))*pokemon_level.value)/100)-(-10)-(-1*pokemon_level.value));
    a1=Math.floor((Math.floor((((2*FI(pd,"~",5))-(-1*attack.selectedIndex)-Math.ceil(basepoints_attack.value/-4))*pokemon_level.value)/100)-(-5))*PerMod("Atk"));
    a2=Math.floor((Math.floor((((2*FI(pd,"~",6))-(-1*defense.selectedIndex)-Math.ceil(basepoints_defense.value/-4))*pokemon_level.value)/100)-(-5))*PerMod("Def"));
    a3=Math.floor((Math.floor((((2*FI(pd,"~",7))-(-1*speed.selectedIndex)-Math.ceil(basepoints_speed.value/-4))*pokemon_level.value)/100)-(-5))*PerMod("Spe"));
    a4=Math.floor((Math.floor((((2*FI(pd,"~",8))-(-1*attack_special.selectedIndex)-Math.ceil(basepoints_attack_special.value/-4))*pokemon_level.value)/100)-(-5))*PerMod("SpA"));
    a5=Math.floor((Math.floor((((2*FI(pd,"~",9))-(-1*defense_special.selectedIndex)-Math.ceil(basepoints_defense_special.value/-4))*pokemon_level.value)/100)-(-5))*PerMod("SpD"));
    health_dex.value=a0;attack_dex.value=a1;defense_dex.value=a2;speed_dex.value=a3;attack_special_dex.value=a4;defense_special_dex.value=a5;p=0;q=(1*health.selectedIndex)%4;if (q==2||q==3) {p+=1;}
    q=(1*attack.selectedIndex)%4;if (q==2||q==3) {p+=2;}
    q=(1*defense.selectedIndex)%4;if (q==2||q==3) {p+=4;}
    q=(1*speed.selectedIndex)%4;if (q==2||q==3) {p+=8;}
    q=(1*attack_special.selectedIndex)%4;if (q==2||q==3) {p+=16;}
    q=(1*defense_special.selectedIndex)%4;if (q==2||q==3) {p+=32;}
    p=Math.floor((p*40)/63)+30;hidden_power.value=p;p=0;q=(1*health.selectedIndex)%2;if (q==1) {p+=1;}
    q=(1*attack.selectedIndex)%2;if (q==1) {p+=2;}
    q=(1*defense.selectedIndex)%2;if (q==1) {p+=4;}
    q=(1*speed.selectedIndex)%2;if (q==1) {p+=8;}
    q= (1*attack_special.selectedIndex)%2;if (q==1) {p+=16;}
    q=(1*defense_special.selectedIndex)%2;if (q==1) {p+=32;}
    p=Math.floor((p*15)/63);hidden_type.selectedIndex=p;return p;
}
function PerMod(w) {
    var o= 1.0;var n=0;n=pokemon_nature.selectedIndex;o=1.0;
    if (w=="Atk") {if (n==1) {o=1.1;} if (n==2) {o=1.1;} if (n==3) {o=1.1;} if (n==4) {o=1.1;} if (n==5) {o=0.9;} if (n==10) {o=0.9;} if (n==15) {o=0.9;} if (n==20) {o=0.9;}}
    if (w=="Def") {if (n==1) {o=0.9;} if (n==5) {o=1.1;} if (n==7) {o=1.1;} if (n==8) {o=1.1;} if (n==9) {o=1.1;} if (n==11) {o=0.9;} if (n==16) {o=0.9;} if (n==21) {o=0.9;}}
    if (w=="Spe") {if (n==2) {o=0.9;} if (n==7) {o=0.9;} if (n==10) {o=1.1;} if (n==11) {o=1.1;} if (n==13) {o=1.1;} if (n==14) {o=1.1;} if (n==17) {o=0.9;} if (n==22) {o=0.9;}}
    if (w=="SpA") {if (n==3) {o=0.9;} if (n==8) {o=0.9;} if (n==13) {o=0.9;} if (n==15) {o=1.1;} if (n==16) {o=1.1;} if (n==17) {o=1.1;} if (n==19) {o=1.1;} if (n==23) {o=0.9;}}
    if (w=="SpD") {if (n==4) {o=0.9;} if (n==9) {o=0.9;} if (n==14) {o=0.9;} if (n==19) {o=0.9;}if (n==20) {o=1.1;} if (n==21) {o=1.1;} if (n==22) {o=1.1;} if (n==23) {o=1.1;}}
    return o;
}
function MT(n,W,T2) {
    var x=0;var c=" ";var o=" ";o="Unbekannt";x=n;
    if (x<0) {o="P=================/Kein Typ";}
    if (x>16) {o="P=================/Kein Typ";}
    if (x==0) {o="P=--=+-0+====-+=++/Kampf";}
    if (x==1) {o="P+===-+=-==+-=====/Flug";}
    if (x==2) {o="P==---=-0==+======/Gift";}
    if (x==3) {o="P=0+=+-=++=-+=====/Boden";}
    if (x==4) {o="P-+=-=+=-+====+===/Stein";}
    if (x==5) {o="P---===---=+=+==+=/Käfer";}
    if (x==6) {o="P======+-====+==-0/Geist";}
    if (x==7) {o="P====+==---=-=+===/Stahl";}
    if (x==8) {o="S====-+=+--+==+-==/Feuer";}
    if (x==9) {o="S===++===+--===-==/Wasser";}
    if (x==10) {o="S=--++-=--+-===-==/Pflanze";}
    if (x==11) {o="S=+=0=====+--==-==/Elektro";}
    if (x==12) {o="S+=+====-====-==0=/Psycho";}
    if (x==13) {o="S=+=+===---+==-+==/Eis";}
    if (x==14) {o="S=======-======+==/Drachen";}
    if (x==15) {o="S-=====+-====+==-=/Dunkel";}
    if (x==16) {o="P====-=0-=========/Normal";}
    x=W;
    if (x<0) {x=1;}
    if (x>3) {x=1;}
    if (x==0) {o=o.substring(0,1);}
    if (x==1) {o=o.substring(19,o.length);}
    if (x==2) {o=o.substring(1,18);}
    if (x==3) {x=T2;if (x<0) {x=16;} if (x>16) {x=16;} c=o.substring((1+x),1);if (c=="+") {o=2.0;} if (c=="-") {o=-2.0;} if (c=="=") {o=1.0;} if (c=="0") {o=0.0;}}
    return o;
}
function Gtest() {var pg=0;var pd=" ";var p=" ";var gt=0;gt=256;pg=pokemon_select.options[pokemon_select.selectedIndex].value;pd=PokeDex(pg);p=FI(pd,"~",20);if (p=="-1") {gt=128;} if (p=="0") {gt=128;} if (p=="12") {gt=30;} if (p=="25") {gt=62;} if (p=="50") {gt=126;} if (p=="75") {gt=190;} if (p=="100") {gt=128;} return gt;}
function FI(S,C,N) {var i=0;var j=0;var f=0;var t=" ";var o=" ";j=0;f=0;o="";for (i=0;i<(S.length);i++) {t=S.substring(i,i+1);if (f==0) {if (t==C) {j+=1;if (j==N) {f=1;}}} else {if (t==C) {j=i;i=(S.length)+1;} else {o+=t;}}} return o;}
function PokeDex(n) {
    // info from http://pokefor.tk/
    //   1            2      3       4   5  6    7   8       9       10  11  12  13  14      15      16      17   18
    //  ~National#   ~Hn#   ~Name   ~HP ~AT ~DF ~SP ~SpA    ~SpD    ~HP ~AT ~DF ~SP ~SpA    ~SpD    ~Bex    ~Rare~
    //     19      20     21      22        23
    // Type~pokemon_ability~Gender~Max EXP~Egg Group~Held Item~
    var O=" ";
    O="~1~203~Bisasam~45~49~49~45~65~65~0~0~0~0~1~0~64~45~10/2~39~12~3~9/11~0/0~";
    if (n==1) {O="~1~203~Bisasam~45~49~49~45~65~65~0~0~0~0~1~0~64~45~10/2~39~12~3~9/11~0/0~";}
    if (n==2) {O="~2~204~Bisaknosp~60~62~63~60~80~80~0~0~0~0~1~1~141~45~10/2~39~12~3~9/11~0/0~";}
    if (n==3) {O="~3~205~Bisaflor~80~82~83~80~100~100~0~0~0~0~2~1~208~45~10/2~39~12~3~9/11~0/0~";}
    if (n==4) {O="~4~206~Glumanda~39~52~43~65~60~50~0~0~0~1~0~0~65~45~8~3~12~3~9/2~0/0~";}
    if (n==5) {O="~5~207~Glutexo~58~64~58~80~80~65~0~0~0~1~1~0~142~45~8~3~12~3~9/2~0/0~";}
    if (n==6) {O="~6~208~Glurak~78~84~78~100~109~85~0~0~0~0~3~0~209~45~8/1~3~12~3~9/2~0/0~";}
    if (n==7) {O="~7~209~Schiggy~44~48~65~43~50~64~0~0~1~0~0~0~66~45~9~68~12~3~9/12~0/0~";}
    if (n==8) {O="~8~210~Schillok~59~63~80~58~65~80~0~0~1~0~0~1~143~45~9~68~12~3~9/12~0/0~";}
    if (n==9) {O="~9~211~Turtok~79~83~100~78~85~105~0~0~0~0~0~3~210~45~9~68~12~3~9/12~0/0~";}
    if (n==10) {O="~10~212~Raupy~45~30~35~45~20~20~1~0~0~0~0~0~53~255~5~56~50~0~0~0/0~";}
    if (n==11) {O="~11~213~Safcon~50~20~55~30~25~25~0~0~2~0~0~0~72~120~5~54~50~0~0~0/0~";}
    if (n==12) {O="~12~214~Smettbo~60~45~50~70~80~80~0~0~0~0~2~1~160~45~5/1~9~50~0~0~0/0BC~";}
    if (n==13) {O="~13~215~Hornliu~40~35~30~50~20~20~0~0~0~1~0~0~52~255~5/2~56~50~0~0~0/0~";}
    if (n==14) {O="~14~216~Kokuna~45~25~50~35~25~25~0~0~2~0~0~0~71~120~5/2~54~50~0~0~0/0~";}
    if (n==15) {O="~15~217~Bibor~65~80~40~75~45~80~0~2~0~0~0~1~159~45~5/2~64~50~0~0~0/0D3~";}
    if (n==16) {O="~16~218~Taubsi~40~45~40~56~35~35~0~0~0~1~0~0~55~255~16/1~28~50~3~4~0/0~";}
    if (n==17) {O="~17~219~Tauboga~63~60~55~71~50~50~0~0~0~2~0~0~113~120~16/1~28~50~3~4~0/0~";}
    if (n==18) {O="~18~220~Tauboss~83~80~75~91~70~70~0~0~0~3~0~0~172~45~16/1~28~50~3~4~0/0~";}
    if (n==19) {O="~19~221~Rattfratz~30~56~35~72~25~35~0~0~0~1~0~0~57~255~16~49/19~50~0~5~0/0~";}
    if (n==20) {O="~20~222~Rattikarl~55~81~60~97~50~70~0~0~0~2~0~0~116~127~16~49/19~50~0~5~0/0~";}
    if (n==21) {O="~21~223~Habitak~40~60~30~70~31~31~0~0~0~1~0~0~58~255~16/1~28~50~0~4~0/0~";}
    if (n==22) {O="~22~224~Ibitak~65~90~65~100~61~61~0~0~0~2~0~0~162~90~16/1~28~50~0~4~0/0D2~";}
    if (n==23) {O="~23~225~Rettan~35~60~44~55~40~54~0~1~0~0~0~0~62~255~2~27/54~50~0~5/2~0/0~";}
    if (n==24) {O="~24~226~Arbok~60~85~69~80~65~79~0~2~0~0~0~0~147~90~2~27/54~50~0~5/2~0/0~";}
    if (n==25) {O="~25~156~Pikachu~35~55~30~90~50~40~0~0~0~2~0~0~82~190~11~59~50~0~5/3~08B/0CA~";}
    if (n==26) {O="~26~157~Raichu~60~90~55~100~90~80~0~0~0~3~0~0~122~75~11~59~50~0~5/3~0/08B~";}
    if (n==27) {O="~27~112~Sandan~50~75~85~40~20~30~0~0~1~0~0~0~93~255~3~51~50~0~5~0/0B7~";}
    if (n==28) {O="~28~113~Sandamer~75~100~110~65~45~55~0~0~2~0~0~0~163~90~3~51~50~0~5~0/0B7~";}
    if (n==29) {O="~29~227~Nidoran ♀~55~47~52~41~40~40~1~0~0~0~0~0~59~235~2~43~100~3~9/5~0/0~";}
    if (n==30) {O="~30~228~Nidorina~70~62~67~56~55~55~2~0~0~0~0~0~117~120~2~43~100~3~10~0/0~";}
    if (n==31) {O="~31~229~Nidoqueen~90~82~87~76~75~85~3~0~0~0~0~0~194~45~2/3~43~100~3~10~0/0~";}
    if (n==32) {O="~32~230~Nidoran ♂~46~57~40~50~40~40~0~1~0~0~0~0~60~235~2~43~0~3~9/5~0/0~";}
    if (n==33) {O="~33~231~Nidorino~61~72~57~65~55~55~0~2~0~0~0~0~118~120~2~43~0~3~9/5~0/0~";}
    if (n==34) {O="~34~232~Nidoking~81~92~77~85~85~75~0~3~0~0~0~0~195~45~2/3~43~0~3~9/5~0/0~";}
    if (n==35) {O="~35~233~Piepi~70~45~48~35~60~65~2~0~0~0~0~0~68~150~16~10~75~4~3~08A/05E~";}
    if (n==36) {O="~36~234~Pixi~95~70~73~60~85~90~3~0~0~0~0~0~129~25~16~10~75~4~3~08A/05E~";}
    if (n==37) {O="~37~153~Vulpix~38~41~40~65~50~65~0~0~0~1~0~0~63~190~8~17~75~0~5~088/088~";}
    if (n==38) {O="~38~154~Vulnona~73~76~75~100~81~100~0~0~0~1~0~1~178~75~8~17~75~0~5~088/088~";}
    if (n==39) {O="~39~138~Pummeluff~115~45~20~20~45~25~2~0~0~0~0~0~76~170~16~10~75~4~3~0/0~";}
    if (n==40) {O="~40~139~Knuddeluff~140~70~45~45~75~50~3~0~0~0~0~0~109~50~16~10~75~4~3~0/0~";}
    if (n==41) {O="~41~63~Zubat~40~45~35~55~30~40~0~0~0~1~0~0~54~255~2/1~25~50~0~4~0/0~";}
    if (n==42) {O="~42~64~Golbat~75~80~70~90~65~75~0~0~0~2~0~0~171~90~2/1~25~50~0~4~0/0~";}
    if (n==43) {O="~43~88~Myrapla~45~50~55~30~75~65~0~0~0~0~1~0~78~255~10/2~5~50~3~11~0/0~";}
    if (n==44) {O="~44~89~Duflor~60~65~70~40~85~75~0~0~0~0~2~0~132~120~10/2~5~50~3~11~0/0~";}
    if (n==45) {O="~45~90~Giflor~75~80~85~50~100~90~0~0~0~0~3~0~184~45~10/2~5~50~3~11~0/0~";}
    if (n==46) {O="~46~235~Paras~35~70~55~25~45~55~0~1~0~0~0~0~70~190~5/10~15~50~0~0/11~067/068~";}
    if (n==47) {O="~47~236~Parasek~60~95~80~30~60~80~0~2~1~0~0~0~128~75~5/10~15~50~0~0/11~067/068~";}
    if (n==48) {O="~48~237~Bluzuk~60~55~50~45~40~55~0~0~0~0~0~1~75~190~5/2~9~50~0~0~0/0~";}
    if (n==49) {O="~49~238~Omot~70~65~60~90~90~75~0~0~0~1~1~0~138~75~5/2~56~50~0~0~0/0~";}
    if (n==50) {O="~50~239~Digda~10~55~25~95~35~45~0~0~0~1~0~0~81~255~3~51/1~50~0~5~0/0~";}
    if (n==51) {O="~51~240~Digdri~35~80~50~120~50~70~0~0~0~2~0~0~153~50~3~51/1~50~0~5~0/0~";}
    if (n==52) {O="~52~241~Mauzi~40~45~35~90~40~40~0~0~0~1~0~0~69~255~16~41~50~0~5~0/0~";}
    if (n==53) {O="~53~242~Snobilikat~65~70~60~115~65~65~0~0~0~2~0~0~148~90~16~31~50~0~5~0/0~";}
    if (n==54) {O="~54~158~Enton~50~52~48~55~65~50~0~0~0~0~1~0~80~190~9~11/7~50~0~12/5~0/0~";}
    if (n==55) {O="~55~159~Entoron~80~82~78~85~95~80~0~0~0~0~2~0~174~75~9~11/7~50~0~12/5~0/0~";}
    if (n==56) {O="~56~243~Menki~40~80~35~70~35~45~0~1~0~0~0~0~74~190~0~71~50~0~5~0/0~";}
    if (n==57) {O="~57~244~Rasaff~65~105~60~95~60~70~0~2~0~0~0~0~149~75~0~71~50~0~5~0/0~";}
    if (n==58) {O="~58~245~Fukano~55~70~45~60~70~50~0~1~0~0~0~0~91~190~8~27/17~25~5~5~088/088~";}
    if (n==59) {O="~59~246~Arkani~90~110~80~95~100~80~0~2~0~0~0~0~213~75~8~27/17~25~5~5~088/088~";}
    if (n==60) {O="~60~247~Quapsel~40~50~40~90~40~40~0~0~0~1~0~0~77~255~9~73/11~50~3~12~0/0~";}
    if (n==61) {O="~61~248~Quaputzi~65~65~65~90~50~50~0~0~0~2~0~0~131~120~9~73/11~50~3~12~0/0BB~";}
    if (n==62) {O="~62~249~Quappo~90~85~95~70~70~90~0~0~3~0~0~0~185~45~9/0~73/11~50~3~12~0/0BB~";}
    if (n==63) {O="~63~39~Abra~25~20~15~90~105~55~0~0~0~0~1~0~73~200~12~66/25~25~3~6~0/0D6~";}
    if (n==64) {O="~64~40~Kadabra~40~35~30~105~120~70~0~0~0~0~2~0~145~100~12~66/25~25~3~6~0/0D6~";}
    if (n==65) {O="~65~41~Simsala~55~50~45~120~135~85~0~0~0~0~3~0~186~50~12~66/25~25~3~6~0/0D6~";}
    if (n==66) {O="~66~73~Machollo~70~80~50~35~35~35~0~1~0~0~0~0~88~180~0~19~25~3~6~0/0~";}
    if (n==67) {O="~67~74~Maschok~80~100~70~45~50~60~0~2~0~0~0~0~146~90~0~19~25~3~6~0/0~";}
    if (n==68) {O="~68~75~Machomei~90~130~80~55~65~85~0~3~0~0~0~0~193~45~0~19~25~3~6~0/0~";}
    if (n==69) {O="~69~250~Knofensa~50~75~35~40~70~30~0~1~0~0~0~0~84~255~10/2~5~50~3~11~0/0~";}
    if (n==70) {O="~70~251~Ultrigaria~65~90~50~55~85~45~0~2~0~0~0~0~151~120~10/2~5~50~3~11~0/0~";}
    if (n==71) {O="~71~252~Sarzenia~80~105~65~70~100~60~0~3~0~0~0~0~191~45~10/2~5~50~3~11~0/0~";}
    if (n==72) {O="~72~66~Tentacha~40~40~35~70~50~100~0~0~0~0~0~1~105~190~9/2~6/32~50~5~14~0/0~";}
    if (n==73) {O="~73~67~Tentoxa~80~70~65~100~80~120~0~0~0~0~0~2~205~60~9/2~6/32~50~5~14~0/0~";}
    if (n==74) {O="~74~57~Kleinstein~40~80~100~20~30~30~0~0~1~0~0~0~86~255~4/3~47/62~50~3~8~0/0C3~";}
    if (n==75) {O="~75~58~Georok~55~95~115~35~45~45~0~0~2~0~0~0~134~120~4/3~47/62~50~3~8~0/0C3~";}
    if (n==76) {O="~76~59~Geowaz~80~110~130~45~55~65~0~0~3~0~0~0~177~45~4/3~47/62~50~3~8~0/0C3~";}
    if (n==77) {O="~77~253~Ponita~50~85~55~90~65~65~0~0~0~1~0~0~152~190~8~49/17~50~0~5~0/0~";}
    if (n==78) {O="~78~254~Gallopa~65~100~70~105~80~80~0~0~0~2~0~0~192~60~8~49/17~50~0~5~0/0~";}
    if (n==79) {O="~79~255~Flegmon~90~65~65~15~40~40~1~0~0~0~0~0~99~190~9/12~38/40~50~0~9/12~0/0BB~";}
    if (n==80) {O="~80~256~Lahmus~95~75~110~30~100~80~0~0~2~0~0~0~164~75~9/12~38/40~50~0~9/12~0/0BB~";}
    if (n==81) {O="~81~82~Magnetilo~25~35~70~45~95~55~0~0~0~0~1~0~89~190~11/7~34/62~-1~0~8~0/0C7~";}
    if (n==82) {O="~82~83~Magneton~50~60~95~70~120~70~0~0~0~0~2~0~161~60~11/7~34/62~-1~0~8~0/0C7~";}
    if (n==83) {O="~83~257~Porenta~52~65~55~60~58~62~0~1~0~0~0~0~94~45~16/1~28/25~50~0~4/5~0/0E1~";}
    if (n==84) {O="~84~92~Dodu~35~85~45~75~35~35~0~1~0~0~0~0~96~190~16/1~49/14~50~0~4~0/0D2~";}
    if (n==85) {O="~85~93~Dodri~60~110~70~100~60~60~0~2~0~0~0~0~158~45~16/1~49/14~50~0~4~0/0D2~";}
    if (n==86) {O="~86~258~Jurob~65~45~55~45~45~70~0~0~0~0~0~1~100~190~9~67~50~0~12/5~0/0~";}
    if (n==87) {O="~87~259~Jugong~90~70~80~70~70~95~0~0~0~0~0~2~176~75~9/13~67~50~0~12/5~0/0~";}
    if (n==88) {O="~88~106~Sleima~80~80~50~25~40~50~1~0~0~0~0~0~90~190~2~60/61~50~0~7~0/06E~";}
    if (n==89) {O="~89~107~Sleimok~105~105~75~50~65~100~1~1~0~0~0~0~157~75~2~60/61~50~0~7~0/06E~";}
    if (n==90) {O="~90~260~Muschas~30~65~100~40~45~25~0~0~1~0~0~0~97~190~9~55~50~5~14~06A/06B~";}
    if (n==91) {O="~91~261~Austos~50~95~180~70~85~45~0~0~2~0~0~0~203~60~9/13~55~50~5~14~06A/06B~";}
    if (n==92) {O="~92~262~Nebulak~30~35~30~80~100~35~0~0~0~0~1~0~95~190~6/2~29~50~3~7~0/0~";}
    if (n==93) {O="~93~263~Alpollo~45~50~45~95~115~55~0~0~0~0~2~0~126~90~6/2~29~50~3~7~0/0~";}
    if (n==94) {O="~94~264~Gengar~60~65~60~110~130~75~0~0~0~0~3~0~190~45~6/2~29~50~3~7~0/0~";}
    if (n==95) {O="~95~265~Onix~35~45~160~70~30~45~0~0~1~0~0~0~108~45~4/3~47/62~50~0~8~0/0~";}
    if (n==96) {O="~96~266~Traumato~60~48~45~42~43~90~0~0~0~0~0~1~102~190~12~26~50~0~6~0/0~";}
    if (n==97) {O="~97~267~Hypno~85~73~70~67~73~115~0~0~0~0~0~2~165~75~12~26~50~0~6~0/0~";}
    if (n==98) {O="~98~268~Krabby~30~105~90~50~25~25~0~1~0~0~0~0~115~225~9~22/55~50~0~14~0/0~";}
    if (n==99) {O="~99~269~Kingler~55~130~115~75~50~50~0~2~0~0~0~0~206~60~9~22/55~50~0~14~0/0~";}
    if (n==100) {O="~100~84~Voltobal~40~30~50~100~55~55~0~0~0~1~0~0~103~190~11~57/59~-1~0~8~0/0~";}
    if (n==101) {O="~101~85~Lectrobal~60~50~70~140~80~80~0~0~0~2~0~0~150~60~11~57/59~-1~0~8~0/0~";}
    if (n==102) {O="~102~270~Owei~60~40~80~40~60~45~0~0~1~0~0~0~98~90~10/12~5~50~5~11~0/0~";}
    if (n==103) {O="~103~271~Kokowei~95~95~85~55~125~65~0~0~0~0~2~0~212~45~10/12~5~50~5~11~0/0~";}
    if (n==104) {O="~104~272~Tragosso~50~50~95~35~40~50~0~0~1~0~0~0~87~190~3~47/30~50~0~9~0/0E0~";}
    if (n==105) {O="~105~273~Knogga~60~80~110~45~50~80~0~0~2~0~0~0~124~75~3~47/30~50~0~9~0/0E0~";}
    if (n==106) {O="~106~274~Kicklee~50~120~53~87~35~110~0~2~0~0~0~0~139~45~0~31~0~0~6~0/0~";}
    if (n==107) {O="~107~275~Nockchan~50~105~79~76~35~110~0~0~0~0~0~2~140~45~0~28~0~0~6~0/0~";}
    if (n==108) {O="~108~276~Schlurp~90~55~75~30~60~75~2~0~0~0~0~0~127~45~16~40/38~50~0~9~0/0~";}
    if (n==109) {O="~109~108~Smogon~40~65~95~35~60~45~0~0~1~0~0~0~114~190~2~29~50~0~7~0/0C2~";}
    if (n==110) {O="~110~109~Smogmog~65~90~120~60~85~70~0~0~2~0~0~0~173~60~2~29~50~0~7~0/0C2~";}
    if (n==111) {O="~111~169~Rihorn~80~85~95~25~30~30~0~0~1~0~0~0~135~120~3/4~30/47~50~5~9/5~0/0~";}
    if (n==112) {O="~112~170~Rizeros~105~130~120~40~45~45~0~2~0~0~0~0~204~60~3/4~30/47~50~5~9/5~0/0~";}
    if (n==113) {O="~113~277~Chaneira~250~5~5~50~35~105~2~0~0~0~0~0~255~30~16~37/52~100~4~3~0/0C5~";}
    if (n==114) {O="~114~278~Tangela~65~55~115~60~100~40~0~0~1~0~0~0~166~45~10~5~50~0~11~0/0~";}
    if (n==115) {O="~115~279~Kangama~105~95~80~90~40~80~2~0~0~0~0~0~175~45~16~14~100~0~9~0/0~";}
    if (n==116) {O="~116~184~Seeper~30~40~70~60~70~25~0~0~0~0~1~0~83~225~9~65~50~0~12/2~0/0C9~";}
    if (n==117) {O="~117~185~Seemon~55~65~95~85~95~45~0~0~1~0~1~0~155~75~9~43~50~0~12/2~0/0C9~";}
    if (n==118) {O="~118~50~Goldini~45~67~60~63~35~50~0~1~0~0~0~0~111~225~9~65/74~50~0~13~0/0~";}
    if (n==119) {O="~119~51~Golking~80~92~65~68~65~80~0~2~0~0~0~0~170~60~9~65/74~50~0~13~0/0~";}
    if (n==120) {O="~120~143~Sterndu~30~45~55~85~70~55~0~0~0~1~0~0~106~225~9~23/37~-1~5~14~06C/06D~";}
    if (n==121) {O="~121~144~Starmie~60~75~85~115~100~85~0~0~0~2~0~0~207~70~9/12~23/37~-1~5~14~06C/06D~";}
    if (n==122) {O="~122~280~Pantimos~40~45~65~90~100~120~0~0~0~0~0~2~136~45~12~57~50~0~6~0/08A~";}
    if (n==123) {O="~123~281~Sichlor~70~110~80~105~55~80~0~1~0~0~0~0~187~45~5/1~64~50~0~0~0/0~";}
    if (n==124) {O="~124~282~Rossana~65~50~35~95~115~95~0~0~0~0~2~0~137~45~13/12~38~100~0~6~089/089~";}
    if (n==125) {O="~125~283~Elektek~65~83~57~105~95~85~0~0~0~2~0~0~156~45~11~59~25~0~6~0/0~";}
    if (n==126) {O="~126~284~Magmar~65~95~57~93~100~85~0~0~0~0~2~0~167~45~8~16~25~0~6~088/088~";}
    if (n==127) {O="~127~167~Pinsir~65~125~100~85~55~70~0~2~0~0~0~0~200~45~5~22~50~5~0~0/0~";}
    if (n==128) {O="~128~285~Tauros~75~100~95~110~40~70~0~1~0~1~0~0~211~45~16~27~0~5~5~0/0~";}
    if (n==129) {O="~129~52~Karpador~20~10~55~80~15~20~0~0~0~1~0~0~20~255~9~65~50~5~13/2~0/0~";}
    if (n==130) {O="~130~53~Garados~95~125~79~81~60~100~0~2~0~0~0~0~214~45~9/1~27~50~5~13/2~0/0~";}
    if (n==131) {O="~131~286~Lapras~130~85~80~60~85~95~2~0~0~0~0~0~219~45~9/13~73/55~50~5~9/12~0/0~";}
    if (n==132) {O="~132~287~Ditto~48~48~48~48~48~48~1~0~0~0~0~0~61~35~16~31~-1~0~1~0/0DF~";}
    if (n==133) {O="~133~288~Evoli~55~55~50~55~45~65~0~0~0~0~0~1~92~45~16~49~12~0~5~0/0~";}
    if (n==134) {O="~134~289~Aquana~130~65~60~65~110~95~2~0~0~0~0~0~196~45~9~73~12~0~5~0/0~";}
    if (n==135) {O="~135~290~Blitza~65~65~60~130~110~95~0~0~0~2~0~0~197~45~11~72~12~0~5~0/0~";}
    if (n==136) {O="~136~291~Flamara~65~130~60~65~95~110~0~2~0~0~0~0~198~45~8~17~12~0~5~0/0~";}
    if (n==137) {O="~137~292~Porygon~65~60~70~40~85~75~0~0~0~0~1~0~130~45~16~69~-1~0~8~0/0~";}
    if (n==138) {O="~138~293~Amonitas~35~40~100~35~90~55~0~0~1~0~0~0~120~45~4/9~65/55~12~0~12/14~0/0~";}
    if (n==139) {O="~139~294~Amoroso~70~60~125~55~115~70~0~0~2~0~0~0~199~45~4/9~65/55~12~0~12/14~0/0~";}
    if (n==140) {O="~140~295~Kabuto~30~80~90~55~55~45~0~0~1~0~0~0~119~45~4/9~65/2~12~0~12/14~0/0~";}
    if (n==141) {O="~141~296~Kabutops~60~115~105~80~65~70~0~2~0~0~0~0~201~45~4/9~65/2~12~0~12/14~0/0~";}
    if (n==142) {O="~142~297~Aerodactyl~80~105~65~130~60~75~0~0~0~2~0~0~202~45~4/1~47/44~12~5~4~0/0~";}
    if (n==143) {O="~143~298~Relaxo~160~110~65~30~65~110~2~0~0~0~0~0~154~25~16~24/67~12~5~9~0C8/0C8~";}
    if (n==144) {O="~144~299~Arktos~90~85~100~85~95~125~0~0~0~0~0~3~215~3~13/1~44~-1~5~10~0/0~";}
    if (n==145) {O="~145~300~Zapdos~90~90~85~100~125~90~0~0~0~0~3~0~216~3~11/1~44~-1~5~10~0/0~";}
    if (n==146) {O="~146~301~Lavados~90~100~90~90~125~85~0~0~0~0~3~0~217~3~8/1~44~-1~5~10~0/0~";}
    if (n==147) {O="~147~302~Dratini~41~64~45~50~50~50~0~1~0~0~0~0~67~45~14~54~50~5~12/2~0/0C9~";}
    if (n==148) {O="~148~303~Dragonir~61~84~65~70~70~70~0~2~0~0~0~0~144~45~14~54~50~5~12/2~0/0C9~";}
    if (n==149) {O="~149~304~Dragoran~91~134~95~80~100~100~0~3~0~0~0~0~218~45~14/1~25~50~5~12/2~0/0C9~";}
    if (n==150) {O="~150~305~Mewtu~106~110~90~130~154~90~0~0~0~0~3~0~220~3~12~44~-1~5~10~0/0~";}
    if (n==151) {O="~151~306~Mew~100~100~100~100~100~100~3~0~0~0~0~0~64~45~12~66~-1~3~10~08D/08D~";}
    if (n==152) {O="~152~307~Endivie~45~49~65~45~49~65~0~0~0~0~0~1~64~45~10~39~12~3~9/11~0/0~";}
    if (n==153) {O="~153~308~Lorblatt~60~62~80~60~63~80~0~0~1~0~0~1~141~45~10~39~12~3~9/11~0/0~";}
    if (n==154) {O="~154~309~Meganie~80~82~100~80~83~100~0~0~1~0~0~2~208~45~10~39~12~3~9/11~0/0~";}
    if (n==155) {O="~155~310~Feurigel~39~52~43~65~60~50~0~0~0~1~0~0~65~45~8~3~12~3~5~0/0~";}
    if (n==156) {O="~156~311~Igelavar~58~64~58~80~80~65~0~0~0~1~1~0~142~45~8~3~12~3~5~0/0~";}
    if (n==157) {O="~157~312~Tornupto~78~84~78~100~109~85~0~0~0~0~3~0~209~45~8~3~12~3~5~0/0~";}
    if (n==158) {O="~158~313~Karnimani~50~65~64~43~44~48~0~1~0~0~0~0~66~45~9~68~12~3~9/12~0/0~";}
    if (n==159) {O="~159~314~Tyracroc~65~80~80~58~59~63~0~1~1~0~0~0~143~45~9~68~12~3~9/12~0/0~";}
    if (n==160) {O="~160~315~Impergator~85~105~100~78~79~83~0~2~1~0~0~0~210~45~9~68~12~3~9/12~0/0~";}
    if (n==161) {O="~161~316~Wiesor~35~46~34~20~35~45~0~1~0~0~0~0~57~255~16~49/28~50~0~5~0/08B~";}
    if (n==162) {O="~162~317~Wiesenior~85~76~64~90~45~55~0~0~0~2~0~0~116~90~16~49/28~50~0~5~08B/08E~";}
    if (n==163) {O="~163~318~Hoothoot~60~30~30~50~36~56~1~0~0~0~0~0~58~255~16/1~26/28~50~0~4~0/0~";}
    if (n==164) {O="~164~319~Noctuh~100~50~50~70~76~96~2~0~0~0~0~0~162~90~16/1~26/28~50~0~4~0/0~";}
    if (n==165) {O="~165~320~Ledyba~40~20~30~55~40~80~0~0~0~0~0~1~54~255~5/1~64/14~50~4~0~0/0~";}
    if (n==166) {O="~166~321~Ledian~55~35~50~85~55~110~0~0~0~0~0~2~134~90~5/1~64/14~50~4~0~0/0~";}
    if (n==167) {O="~167~322~Webarak~40~60~40~30~40~40~0~1~0~0~0~0~54~255~5/2~64/26~50~4~0~0/0~";}
    if (n==168) {O="~168~323~Ariados~70~90~70~40~60~60~0~2~0~0~0~0~134~90~5/2~64/26~50~4~0~0/0~";}
    if (n==169) {O="~169~65~Iksbat~85~90~80~130~70~80~0~0~0~3~0~0~204~90~2/1~25~50~0~4~0/0~";}
    if (n==170) {O="~170~181~Lampi~75~38~38~67~56~56~1~0~0~0~0~0~90~190~9/11~72/23~50~5~13~0/032~";}
    if (n==171) {O="~171~182~Lanturn~125~58~58~67~76~76~2~0~0~0~0~0~156~75~9/11~72/23~50~5~13~0/032~";}
    if (n==172) {O="~172~155~Pichu~20~40~15~60~35~35~0~0~0~1~0~0~42~190~11~59~50~0~10~0/08B~";}
    if (n==173) {O="~173~324~Pii~50~25~28~15~45~55~0~0~0~0~0~1~37~150~16~10~75~4~10~08A 05E~";}
    if (n==174) {O="~174~137~Fluffeluff~90~30~15~15~40~20~1~0~0~0~0~0~39~170~16~10~75~4~10~0/0~";}
    if (n==175) {O="~175~325~Togepi~35~20~65~20~40~65~0~0~0~0~0~1~74~190~16~21/52~12~4~10~0/0~";}
    if (n==176) {O="~176~326~Togetic~55~40~85~40~80~105~0~0~0~0~0~2~114~75~16/1~21/52~12~4~4/3~0/0~";}
    if (n==177) {O="~177~162~Natu~40~50~45~70~70~45~0~0~0~0~1~0~73~190~12/1~66/14~50~0~4~0/0~";}
    if (n==178) {O="~178~163~Xatu~65~75~70~95~95~70~0~0~0~1~1~0~171~75~12/1~66/14~50~0~4~0/0~";}
    if (n==179) {O="~179~327~Voltilamm~55~40~40~35~65~45~0~0~0~0~1~0~59~235~11~59~50~3~9/5~0/0~";}
    if (n==180) {O="~180~328~Waaty~70~55~55~45~80~60~0~0~0~0~2~0~117~120~11~59~50~3~9/5~0/0~";}
    if (n==181) {O="~181~329~Ampharos~90~75~75~55~115~90~0~0~0~0~3~0~194~45~11~59~50~3~9/5~0/0~";}
    if (n==182) {O="~182~91~Blubella~75~80~85~50~90~100~0~0~0~0~0~3~184~45~10~5~50~3~11~0/0~";}
    if (n==183) {O="~183~55~Marill~70~20~50~40~20~50~2~0~0~0~0~0~58~190~9~67/20~50~4~12/3~0/0~";}
    if (n==184) {O="~184~56~Azumarill~100~50~80~50~50~80~3~0~0~0~0~0~153~75~9~67/20~50~4~12/3~0/0~";}
    if (n==185) {O="~185~330~Mogelbaum~70~100~115~30~30~65~0~0~2~0~0~0~135~65~4~62/47~50~0~8~0/0~";}
    if (n==186) {O="~186~331~Quaxo~90~75~75~70~90~100~0~0~0~0~0~3~185~45~9~73/11~50~3~12~0/0BB~";}
    if (n==187) {O="~187~332~Hoppspross~35~35~40~50~35~55~0~0~0~0~0~1~74~255~10/1~5~50~3~3/11~0/0~";}
    if (n==188) {O="~188~333~Hubelupf~55~45~50~80~45~65~0~0~0~2~0~0~136~120~10/1~5~50~3~3/11~0/0~";}
    if (n==189) {O="~189~334~Papungha~75~55~70~110~55~85~0~0~0~3~0~0~176~45~10/1~5~50~3~3/11~0/0~";}
    if (n==190) {O="~190~335~Griffel~55~70~55~85~40~55~0~0~0~1~0~0~94~45~16~49/41~50~4~5~0/0~";}
    if (n==191) {O="~191~336~Sonnkern~30~30~30~30~30~30~0~0~0~0~1~0~52~235~10~5~50~3~11~0/0~";}
    if (n==192) {O="~192~337~Sonnflora~75~75~55~30~105~85~0~0~0~0~2~0~146~120~10~5~50~3~11~0/0~";}
    if (n==193) {O="~193~338~Yanma~65~65~45~95~75~45~0~0~0~2~0~0~147~75~5/1~58/9~50~0~0~0/0~";}
    if (n==194) {O="~194~339~Felino~55~45~45~15~25~25~1~0~0~0~0~0~52~255~9/3~11/73~50~0~12/5~0/0~";}
    if (n==195) {O="~195~340~Morlord~95~85~85~35~65~65~2~0~0~0~0~0~137~90~9/3~11/73~50~0~12/5~0/0~";}
    if (n==196) {O="~196~341~Psiana~65~65~60~110~130~95~0~0~0~0~2~0~197~45~12~66~12~0~5~0/0~";}
    if (n==197) {O="~197~342~Nachtara~95~65~110~65~60~130~0~0~0~0~0~2~197~45~15~66~12~0~5~0/0~";}
    if (n==198) {O="~198~343~Kramurx~60~85~42~91~85~42~0~0~0~1~0~0~107~30~15/1~26~50~3~4~0/0~";}
    if (n==199) {O="~199~344~Laschoking~95~75~80~30~100~110~0~0~0~0~0~3~164~70~9/12~38/40~50~0~9/12~0/0BB~";}
    if (n==200) {O="~200~345~Traunfugil~60~60~60~85~85~85~0~0~0~0~1~1~147~45~6~29~50~4~7~0/0D5~";}
    if (n==201) {O="~201~346~Icognito~48~72~48~48~72~48~0~1~0~0~1~0~61~225~12~29~-1~0~10~0/0~";}
    if (n==202) {O="~202~161~Woingenau~190~33~58~33~33~58~2~0~0~0~0~0~177~45~12~53~50~0~7~0/0~";}
    if (n==203) {O="~203~164~Girafarig~70~80~65~85~90~65~0~0~0~0~2~0~149~60~16/12~25/14~50~0~5~0/08C~";}
    if (n==204) {O="~204~347~Tannza~50~65~90~15~35~35~0~0~1~0~0~0~60~190~5~62~50~0~0~0/0~";}
    if (n==205) {O="~205~348~Forstellka~75~90~140~40~60~60~0~0~2~0~0~0~118~75~5/7~62~50~0~0~0/0~";}
    if (n==206) {O="~206~349~Dummisel~100~70~70~45~65~65~1~0~0~0~0~0~75~190~16~52/49~50~0~5~0/0~";}
    if (n==207) {O="~207~350~Skorgla~65~75~105~85~35~65~0~0~1~0~0~0~108~60~3/1~22/51~50~3~0~0/0~";}
    if (n==208) {O="~208~351~Stahlos~75~85~200~30~55~65~0~0~2~0~0~0~196~25~7/3~47/62~50~0~8~0/0C7~";}
    if (n==209) {O="~209~352~Snubbull~60~80~50~30~40~40~0~1~0~0~0~0~63~190~16~27/49~75~4~5/3~0/0~";}
    if (n==210) {O="~210~353~Granbull~90~120~75~45~60~60~0~2~0~0~0~0~178~75~16~27~75~4~5/3~0/0~";}
    if (n==211) {O="~211~354~Baldorfish~65~95~75~85~55~55~0~1~0~0~0~0~100~45~9/2~43/65~50~0~13~0/0~";}
    if (n==212) {O="~212~355~Scherox~70~130~100~65~55~80~0~2~0~0~0~0~200~25~5/7~64~50~0~0~0/0~";}
    if (n==213) {O="~213~356~Pottrott~20~10~230~5~10~230~0~0~1~0~0~1~80~190~5/4~62~50~3~0~08B/08B~";}
    if (n==214) {O="~214~168~Skaraborn~80~125~75~85~40~95~0~2~0~0~0~0~200~45~5/0~64/19~50~5~0~0/0~";}
    if (n==215) {O="~215~357~Sniebel~55~95~55~115~35~75~0~0~0~1~0~0~132~60~15/13~25/28~50~3~5~0/0B7~";}
    if (n==216) {O="~216~358~Teddiursa~60~80~50~40~50~50~0~1~0~0~0~0~124~120~16~41~50~0~5~0/0~";}
    if (n==217) {O="~217~359~Ursaring~90~130~75~55~75~75~0~2~0~0~0~0~189~60~16~19~50~0~5~0/0~";}
    if (n==218) {O="~218~103~Schneckmag~40~40~40~20~70~40~0~0~0~0~1~0~78~190~8~33/16~50~0~7~0/0~";}
    if (n==219) {O="~219~104~Magcargo~50~50~120~30~80~80~0~0~2~0~0~0~154~75~8/4~33/16~50~0~7~0/0~";}
    if (n==220) {O="~220~360~Quiekel~50~50~40~50~30~30~0~1~0~0~0~0~78~225~13/3~38~50~5~5~0/0~";}
    if (n==221) {O="~221~361~Keifel~100~100~80~50~60~60~1~1~0~0~0~0~160~75~13/3~38~50~5~5~0/0~";}
    if (n==222) {O="~222~180~Corasonn~55~55~85~35~65~85~0~0~1~0~0~1~113~60~9/4~21/37~75~4~12/14~0/030~";}
    if (n==223) {O="~223~362~Remoraid~35~65~35~65~65~35~0~0~0~0~1~0~78~190~9~21~50~0~12/13~0/0~";}
    if (n==224) {O="~224~363~Octillery~75~105~75~45~105~75~0~1~0~0~1~0~164~75~9~63~50~0~12/13~0/0~";}
    if (n==225) {O="~225~364~Botogel~45~55~45~75~65~45~0~0~0~1~0~0~183~45~13/1~71/21~50~4~12/5~0/0~";}
    if (n==226) {O="~226~365~Mantax~65~40~70~70~80~140~0~0~0~0~0~2~168~25~9/1~65/73~50~5~12~0/0~";}
    if (n==227) {O="~227~115~Panzaeron~65~80~140~70~40~70~0~0~2~0~0~0~168~25~7/1~28/62~50~5~4~0/0~";}
    if (n==228) {O="~228~366~Hunduster~45~60~30~65~80~50~0~0~0~0~1~0~114~120~15/8~14/17~50~5~5~0/0~";}
    if (n==229) {O="~229~367~Hundemon~75~90~50~95~110~80~0~0~0~0~2~0~204~45~15/8~14/17~50~5~5~0/0~";}
    if (n==230) {O="~230~186~Seedraking~75~95~95~85~95~95~0~1~0~0~1~1~207~45~9/14~65~50~0~12/2~0/0C9~";}
    if (n==231) {O="~231~165~Phanpy~90~60~60~40~40~40~1~0~0~0~0~0~124~120~3~41~50~0~5~0/0~";}
    if (n==232) {O="~232~166~Donphan~90~120~120~50~60~60~0~1~1~0~0~0~189~60~3~62~50~0~5~0/0~";}
    if (n==233) {O="~233~368~Porygon 2~85~80~90~60~105~95~0~0~0~0~2~0~180~45~16~69~-1~0~8~0/0~";}
    if (n==234) {O="~234~369~Damhirplex~73~95~62~85~85~65~0~1~0~0~0~0~165~45~16~27~50~5~5~0/0~";}
    if (n==235) {O="~235~370~Farbeagle~55~20~35~75~20~45~0~0~0~1~0~0~106~45~16~40~50~4~5~0/0~";}
    if (n==236) {O="~236~371~Rabauz~35~35~35~35~35~35~0~1~0~0~0~0~91~75~0~19~0~0~10~0/0~";}
    if (n==237) {O="~237~372~Kapoera~50~95~95~70~35~110~0~0~0~0~0~2~138~45~0~27~0~0~6~0/0~";}
    if (n==238) {O="~238~373~Kussilla~45~30~15~65~85~65~0~0~0~0~1~0~87~45~13/12~38~100~0~10~089/089~";}
    if (n==239) {O="~239~374~Elekid~45~63~37~95~65~55~0~0~0~1~0~0~106~45~11~59~25~0~10~0/0~";}
    if (n==240) {O="~240~375~Magby~45~75~37~83~70~55~0~0~0~1~0~0~117~45~8~16~25~0~10~088/088~";}
    if (n==241) {O="~241~376~Miltank~95~80~105~100~40~70~0~0~2~0~0~0~200~45~16~67~100~5~5~01D/01D~";}
    if (n==242) {O="~242~377~Heiteira~255~10~10~55~75~135~2~0~0~0~0~0~255~30~16~37/52~100~4~3~0/0C5~";}
    if (n==243) {O="~243~378~Raikou~90~85~75~115~115~100~0~0~0~2~1~0~216~3~11~44~-1~5~10~0/0~";}
    if (n==244) {O="~244~379~Entei~115~115~85~100~90~75~1~2~0~0~0~0~217~3~8~44~-1~5~10~0/0~";}
    if (n==245) {O="~245~380~Suicune~100~75~115~85~90~115~0~0~1~0~0~2~215~3~9~44~-1~5~10~0/0~";}
    if (n==246) {O="~246~381~Larvitar~50~64~50~41~45~50~0~1~0~0~0~0~67~45~4/3~19~50~5~9~0/0~";}
    if (n==247) {O="~247~382~Pupitar~70~84~70~51~65~70~0~2~0~0~0~0~144~45~4/3~54~50~5~9~0/0~";}
    if (n==248) {O="~248~383~Despotar~100~134~110~61~95~100~0~3~0~0~0~0~218~45~4/15~50~50~5~9~0/0~";}
    if (n==249) {O="~249~384~Lugia~106~90~130~110~90~154~0~0~0~0~0~3~220~3~12/1~44~-1~5~10~0/0~";}
    if (n==250) {O="~250~385~Ho-oh~106~130~90~90~110~154~0~0~0~0~0~3~220~3~8/1~44~-1~5~10~02D/02D~";}
    if (n==251) {O="~251~386~Celebi~100~100~100~100~100~100~3~0~0~0~0~0~64~45~12/10~37~-1~3~10~08D/08D~";}
    if (n==277) {O="~252~1~Geckarbor~40~45~35~70~65~55~0~0~0~1~0~0~65~45~10~39~12~3~9/2~0/0~";}
    if (n==278) {O="~253~2~Reptain~50~65~45~95~85~65~0~0~0~2~0~0~141~45~10~39~12~3~9/2~0/0~";}
    if (n==279) {O="~254~3~Gewaldro~70~85~65~120~105~85~0~0~0~3~0~0~208~45~10~39~12~3~9/2~0/0~";}
    if (n==280) {O="~255~4~Flemmli~45~60~40~45~70~50~0~0~0~0~1~0~65~45~8~3~12~3~5~0/0~";}
    if (n==281) {O="~256~5~Jungglut~60~85~60~55~85~60~0~1~0~0~1~0~142~45~8/0~3~12~3~5~0/0~";}
    if (n==282) {O="~257~6~Lohgock~80~120~70~80~110~70~0~3~0~0~0~0~209~45~8/0~3~12~3~5~0/0~";}
    if (n==283) {O="~258~7~Hydropi~50~70~50~40~50~50~0~1~0~0~0~0~65~45~9~68~12~3~9/12~0/0~";}
    if (n==284) {O="~259~8~Moorabbel~70~85~70~50~60~70~0~2~0~0~0~0~143~45~9/3~68~12~3~9/12~0/0~";}
    if (n==285) {O="~260~9~Sumpex~100~110~90~60~85~90~0~3~0~0~0~0~210~45~9/3~68~12~3~9/12~0/0~";}
    if (n==286) {O="~261~10~Fiffyen~35~55~35~35~30~30~0~1~0~0~0~0~55~255~15~49~50~0~5~0/087~";}
    if (n==287) {O="~262~11~Magnayen~70~90~70~70~60~60~0~2~0~0~0~0~128~127~15~27~50~0~5~0/087~";}
    if (n==288) {O="~263~12~Zigzachs~38~30~41~60~30~41~0~0~0~1~0~0~60~255~16~41~50~0~5~0/08B~";}
    if (n==289) {O="~264~13~Geradaks~78~70~61~100~50~61~0~0~0~2~0~0~128~90~16~41~50~0~5~08B/08E~";}
    if (n==290) {O="~265~14~Waumpel~45~45~35~20~20~30~1~0~0~0~0~0~54~255~5~56~50~0~0~0/0~";}
    if (n==291) {O="~266~15~Schaloko~50~35~55~15~25~25~0~0~2~0~0~0~71~120~5~54~50~0~0~0/0~";}
    if (n==292) {O="~267~16~Papinella~60~70~50~65~90~50~0~0~0~0~3~0~161~45~5/1~64~50~0~0~0/0BC~";}
    if (n==293) {O="~268~17~Panekon~50~35~55~15~25~25~0~0~2~0~0~0~72~120~5~54~50~0~0~0/0~";}
    if (n==294) {O="~269~18~Pudox~60~50~70~65~50~90~0~0~0~0~0~3~160~45~5/2~56~50~0~0~0/0BC~";}
    if (n==295) {O="~270~19~Loturzel~40~30~30~30~40~50~0~0~0~0~0~1~74~255~9/10~65/46~50~3~12/11~0/0~";}
    if (n==296) {O="~271~20~Lombrero~60~50~50~50~60~70~0~0~0~0~0~2~141~120~9/10~65/46~50~3~12/11~0/0~";}
    if (n==297) {O="~272~21~Kappalores~80~70~70~70~90~100~0~0~0~0~0~3~181~45~9/10~65/46~50~3~12/11~0/0~";}
    if (n==298) {O="~273~22~Samurzel~40~40~50~30~30~30~0~0~1~0~0~0~74~255~10~5/14~50~3~5/11~0/0~";}
    if (n==299) {O="~274~23~Blanas~70~70~40~60~60~40~0~2~0~0~0~0~141~45~10/15~5/14~50~3~5/11~0/0~";}
    if (n==300) {O="~275~24~Tengulist~90~100~60~80~90~60~0~3~0~0~0~0~181~45~10/15~5/14~50~3~5/11~0/0~";}
    if (n==301) {O="~290~42~Nincada~31~45~90~40~30~30~0~0~1~0~0~0~65~255~5/3~9~50~1~0~0/0~";}
    if (n==302) {O="~291~43~Ninjask~61~90~45~160~50~50~0~0~0~2~0~0~155~120~5/1~58~50~1~0~0/0~";}
    if (n==303) {O="~292~44~Ninjatom~1~90~45~40~30~30~2~0~0~0~0~0~95~45~5/6~76~-1~1~8~0/0~";}
    if (n==304) {O="~276~25~Schwalbini~40~55~30~85~30~30~0~0~0~1~0~0~59~200~16/1~19~50~3~4~0/0~";}
    if (n==305) {O="~277~26~Schwalboss~60~85~60~125~50~50~0~0~0~2~0~0~162~45~16/1~19~50~3~4~0/0~";}
    if (n==306) {O="~285~34~Knilz~60~40~60~35~40~60~1~0~0~0~0~0~65~255~10~15~50~2~3/11~0/0~";}
    if (n==307) {O="~286~35~Kapilz~60~130~80~70~60~60~0~2~0~0~0~0~165~90~10/0~15~50~2~3/11~0/0~";}
    if (n==308) {O="~327~114~Pandir~60~60~60~60~60~60~0~0~0~0~1~0~85~255~16~40~50~4~5/6~0/086~";}
    if (n==309) {O="~278~27~Wingull~40~30~30~85~55~30~0~0~0~1~0~0~64~190~9/1~28~50~0~12/4~0/0~";}
    if (n==310) {O="~279~28~Pelipper~60~50~100~65~85~70~0~0~2~0~0~0~164~45~9/1~28~50~0~12/4~0/0~";}
    if (n==311) {O="~283~32~Gehweiher~40~30~32~65~50~52~0~0~0~1~0~0~63~200~5/9~65~50~0~12/0~0/0~";}
    if (n==312) {O="~284~33~Maskeregen~70~60~62~60~80~82~0~0~0~0~1~1~128~75~5/1~27~50~0~12/0~0/0BC~";}
    if (n==313) {O="~320~99~Wailmer~130~70~35~60~70~35~1~0~0~0~0~0~137~125~9~74/38~50~2~5/13~0/0~";}
    if (n==314) {O="~321~100~Wailord~170~90~45~60~90~45~2~0~0~0~0~0~206~60~9~74/38~50~2~5/13~0/0~";}
    if (n==315) {O="~300~61~Eneco~50~45~45~50~35~35~0~0~0~1~0~0~65~255~16~10~75~4~5/3~0/08A~";}
    if (n==316) {O="~301~62~Enekoro~70~65~65~70~55~55~1~0~0~1~0~0~138~60~16~10~75~4~5/3~0/08A~";}
    if (n==317) {O="~352~145~Kecleon~60~90~70~40~60~120~0~0~0~0~0~1~132~200~16~8~50~3~5~0/08C~";}
    if (n==318) {O="~343~131~Puppance~40~40~55~55~40~70~0~0~0~0~0~1~58~255~3/12~29~-1~0~8~0/0~";}
    if (n==319) {O="~344~132~Lepumentas~60~70~105~75~70~120~0~0~0~0~0~2~189~90~3/12~29~-1~0~8~0/0~";}
    if (n==320) {O="~299~60~Nasgnet~30~45~135~30~45~90~0~0~1~0~0~0~108~255~4~62/34~50~0~8~0/0~";}
    if (n==321) {O="~324~105~Qurtel~70~85~140~20~85~70~0~0~2~0~0~0~161~90~8~75~50~0~5~0/0~";}
    if (n==322) {O="~302~68~Zobiris~50~75~75~50~65~65~0~1~1~0~0~0~98~45~15/6~28~50~3~6~0/0~";}
    if (n==323) {O="~339~127~Schmerbe~50~48~43~60~46~41~1~0~0~0~0~0~92~190~9/3~38~50~0~13~0/0~";}
    if (n==324) {O="~340~128~Welsar~110~78~73~60~76~71~2~0~0~0~0~0~158~75~9/3~38~50~0~13~0/0~";}
    if (n==325) {O="~370~183~Liebiskus~43~30~55~97~40~65~0~0~0~1~0~0~110~225~9~65~75~4~13~06F/0~";}
    if (n==326) {O="~341~129~Krebscorps~43~80~65~35~50~35~0~1~0~0~0~0~111~205~9~22/55~50~2~12/14~0/0~";}
    if (n==327) {O="~342~130~Krebutack~63~120~85~55~90~55~0~2~0~0~0~0~161~155~9/15~22/55~50~2~12/14~0/0~";}
    if (n==328) {O="~349~140~Barschwa~20~15~20~80~10~55~0~0~0~1~0~0~61~255~9~65~50~1~12/2~0/0~";}
    if (n==329) {O="~350~141~Milotic~95~60~79~81~100~125~0~0~0~0~0~2~213~60~9~35~50~1~12/2~0/0~";}
    if (n==330) {O="~318~97~Kanivanha~45~90~20~65~65~20~0~1~0~0~0~0~88~225~9/15~48~50~5~13~0/0~";}
    if (n==331) {O="~319~98~Tohaido~70~120~40~95~95~40~0~2~0~0~0~0~175~60~9/15~48~50~5~13~0/0~";}
    if (n==332) {O="~328~116~Knacklion~45~100~45~10~45~45~0~1~0~0~0~0~73~255~3~22/1~50~3~0~0/0CB~";}
    if (n==333) {O="~329~117~Vibrava~50~70~50~70~50~50~0~1~0~1~0~0~126~120~3/14~29~50~3~0~0/0~";}
    if (n==334) {O="~330~118~Libelldra~80~100~80~100~80~80~0~1~0~2~0~0~197~45~3/14~29~50~3~0~0/0~";}
    if (n==335) {O="~296~48~Makuhita~72~60~30~25~20~30~1~0~0~0~0~0~87~180~0~67/19~25~2~6~0/0~";}
    if (n==336) {O="~297~49~Hariyama~144~120~60~50~40~60~2~0~0~0~0~0~184~200~0~67/19~25~2~6~0/0BB~";}
    if (n==337) {O="~309~78~Frizelbliz~40~45~40~65~65~40~0~0~0~1~0~0~104~120~11~59/30~50~5~5~0/0~";}
    if (n==338) {O="~310~79~Voltenso~70~75~60~105~105~60~0~0~0~2~0~0~168~45~11~59/30~50~5~5~0/0~";}
    if (n==339) {O="~322~101~Camaub~60~60~40~35~65~45~0~0~0~0~1~0~88~255~8/3~38~50~0~5~088/088~";}
    if (n==340) {O="~323~102~Camerupt~70~100~70~40~105~75~0~1~0~0~1~0~175~150~8/3~33~50~0~5~088/088~";}
    if (n==341) {O="~363~173~Seemops~70~40~50~25~55~50~1~0~0~0~0~0~75~255~13/9~67~50~3~12/5~0/0~";}
    if (n==342) {O="~364~174~Seejong~90~60~70~45~75~70~2~0~0~0~0~0~128~120~13/9~67~50~3~12/5~0/0~";}
    if (n==343) {O="~365~175~Walraisa~110~80~90~65~95~90~3~0~0~0~0~0~192~45~13/9~67~50~3~12/5~0/0~";}
    if (n==344) {O="~331~119~Tuska~50~85~40~35~85~40~0~0~0~0~1~0~97~190~10~51~50~3~11/6~0/0D3~";}
    if (n==345) {O="~332~120~Noktuska~70~115~60~55~115~60~0~1~0~0~1~0~177~60~10/15~51~50~3~11/6~0/0D3~";}
    if (n==346) {O="~361~171~Schneppke~50~50~50~50~50~50~1~0~0~0~0~0~74~190~13~25~50~0~3/8~0/0~";}
    if (n==347) {O="~362~172~Firnontor~80~80~80~80~80~80~2~0~0~0~0~0~187~75~13~25~50~0~3/8~0/0D4~";}
    if (n==348) {O="~337~125~Lunastein~70~55~65~70~95~85~0~0~0~0~2~0~150~45~4/12~29~-1~4~8~0/05E~";}
    if (n==349) {O="~338~126~Sonnfel~70~95~85~70~55~65~0~2~0~0~0~0~150~45~4/12~29~-1~4~8~0/05D~";}
    if (n==350) {O="~298~54~Azurill~50~20~40~20~20~40~1~0~0~0~0~0~33~150~16~67/20~75~4~10~0/0~";}
    if (n==351) {O="~325~110~Spoink~60~25~35~60~70~80~0~0~0~0~0~1~89~255~12~67/40~50~4~5~0/0~";}
    if (n==352) {O="~326~111~Groink~80~45~65~80~90~110~0~0~0~0~0~2~164~60~12~67/40~50~4~5~0/0~";}
    if (n==353) {O="~311~80~Plusle~60~50~40~95~85~75~0~0~0~1~0~0~120~200~11~42~50~0~3~0/0~";}
    if (n==354) {O="~312~81~Minun~60~40~50~95~75~85~0~0~0~1~0~0~120~200~11~36~50~0~3~0/0~";}
    if (n==355) {O="~303~69~Flunkifer~50~85~85~50~55~55~0~1~1~0~0~0~98~45~7~22/27~50~4~5/3~0/0~";}
    if (n==356) {O="~307~76~Meditie~30~40~55~60~40~55~0~0~0~1~0~0~91~180~0/12~45~50~0~6~0/0~";}
    if (n==357) {O="~308~77~Meditalis~60~60~75~80~60~75~0~0~0~2~0~0~153~90~0/12~45~50~0~6~0/0~";}
    if (n==358) {O="~333~121~Wablu~45~40~60~50~40~75~0~0~0~0~0~1~74~255~16/1~37~50~1~4/2~0/0~";}
    if (n==359) {O="~334~122~Altaria~75~70~90~80~70~105~0~0~0~0~0~2~188~45~14/1~37~50~1~4/2~0/0~";}
    if (n==360) {O="~360~160~Isso~95~23~48~23~23~48~1~0~0~0~0~0~44~125~12~53~50~0~10~0/0~";}
    if (n==361) {O="~355~148~Zwirrlicht~20~40~90~25~30~90~0~0~1~0~0~1~97~190~6~29~50~4~7~0/0D5~";}
    if (n==362) {O="~356~149~Zwirrklop~40~70~130~25~60~130~0~0~1~0~0~2~179~90~6~44~50~4~7~0/0D5~";}
    if (n==363) {O="~315~94~Roselia~50~60~45~65~100~80~0~0~0~0~1~0~152~150~10/2~37/43~50~3~3/11~0/0D3~";}
    if (n==364) {O="~287~36~Bummelz~60~60~60~30~35~35~1~0~0~0~0~0~83~255~16~70~50~5~5~0/0~";}
    if (n==365) {O="~288~37~Muntier~80~80~80~90~55~55~0~0~0~2~0~0~126~120~16~71~50~5~5~0/0~";}
    if (n==366) {O="~289~38~Letarking~150~160~100~100~95~65~3~0~0~0~0~0~210~45~16~70~50~5~5~0/0~";}
    if (n==367) {O="~316~95~Schluppuck~70~43~53~40~43~53~1~0~0~0~0~0~75~225~2~32/61~50~2~7~0/06B~";}
    if (n==368) {O="~317~96~Schlukwech~100~73~83~55~73~83~2~0~0~0~0~0~168~75~2~32/61~50~2~7~0/06B~";}
    if (n==369) {O="~357~150~Tropius~99~68~83~51~72~87~2~0~0~0~0~0~169~200~10/1~5~50~5~9/11~0/0~";}
    if (n==370) {O="~293~45~Flurmel~64~51~23~28~51~23~1~0~0~0~0~0~68~190~16~57~50~3~9/5~0/086~";}
    if (n==371) {O="~294~46~Krakeelo~84~71~43~48~71~43~2~0~0~0~0~0~126~120~16~57~50~3~9/5~0/086~";}
    if (n==372) {O="~295~47~Krawumms~104~91~63~68~91~63~3~0~0~0~0~0~184~45~16~57~50~3~9/5~0/086~";}
    if (n==373) {O="~366~176~Perlu~35~64~85~32~74~55~0~0~1~0~0~0~142~255~9~55~50~1~12~0/031~";}
    if (n==374) {O="~367~177~Aalabyss~55~104~105~52~94~75~0~1~1~0~0~0~178~60~9~65~50~1~12~0/0~";}
    if (n==375) {O="~368~178~Saganabyss~55~84~105~52~114~75~0~0~0~0~2~0~178~60~9~65~50~1~12~0/0~";}
    if (n==376) {O="~359~152~Absol~65~130~60~75~75~60~0~2~0~0~0~0~174~30~15~44~50~3~5~0/0~";}
    if (n==377) {O="~353~146~Shuppet~44~75~35~45~63~33~0~1~0~0~0~0~97~225~6~26~50~4~7~0/0D5~";}
    if (n==378) {O="~354~147~Banette~64~115~65~65~83~63~0~2~0~0~0~0~179~45~6~26~50~4~7~0/0D5~";}
    if (n==379) {O="~336~124~Vipitis~73~100~60~65~100~60~0~1~0~0~1~0~165~90~2~54~50~2~5/2~0/0~";}
    if (n==380) {O="~335~123~Sengo~73~115~60~90~60~60~0~2~0~0~0~0~165~90~16~24~50~1~5~0/0~";}
    if (n==381) {O="~369~179~Relicanth~100~90~130~55~45~65~1~0~1~0~0~0~198~25~9/4~65/47~12~5~12/13~0/033~";}
    if (n==382) {O="~304~70~Stollunior~50~70~100~30~40~40~0~0~1~0~0~0~96~180~7/4~62/47~50~5~9~0/0CC~";}
    if (n==383) {O="~305~71~Stollrak~60~90~140~40~50~50~0~0~2~0~0~0~152~90~7/4~62/47~50~5~9~0/0CC~";}
    if (n==384) {O="~306~72~Stolloss~70~110~180~50~60~60~0~0~3~0~0~0~205~45~7/4~62/47~50~5~9~0/0CC~";}
    if (n==385) {O="~351~142~Formeo~70~70~70~70~70~70~1~0~0~0~0~0~145~45~16~18~50~0~3/7~0D1/0D1~";}
    if (n==386) {O="~313~86~Volbeat~65~73~55~85~47~75~0~0~0~1~0~0~146~150~5~23/64~0~1~0/6~0/0~";}
    if (n==387) {O="~314~87~Illumise~65~47~55~85~73~75~0~0~0~1~0~0~146~150~5~38~100~2~0/6~0/0~";}
    if (n==388) {O="~345~133~Liliep~66~41~77~23~61~87~0~0~0~0~0~1~121~45~4/10~63~12~1~14~0/0~";}
    if (n==389) {O="~346~134~Wielie~86~81~97~43~81~107~0~0~0~0~0~2~201~45~4/10~63~12~1~14~0/0~";}
    if (n==390) {O="~347~135~Anorith~45~95~50~75~40~50~0~1~0~0~0~0~119~45~4/5~2~12~1~14~0/0~";}
    if (n==391) {O="~348~136~Armaldo~75~125~100~45~70~80~0~2~0~0~0~0~200~45~4/5~2~12~1~14~0/0~";}
    if (n==392) {O="~280~29~Trasla~28~25~25~40~45~35~0~0~0~0~1~0~70~235~12~66/69~50~5~7~0/0~";}
    if (n==393) {O="~281~30~Kirlia~38~35~35~50~65~55~0~0~0~0~2~0~140~120~12~66/69~50~5~7~0/0~";}
    if (n==394) {O="~282~31~Guardevoir~68~65~65~80~125~115~0~0~0~0~3~0~208~45~12~66/69~50~5~7~0/0~";}
    if (n==395) {O="~371~187~Kindwurm~45~75~60~50~40~30~0~1~0~0~0~0~89~45~14~47~50~5~2~0/0C9~";}
    if (n==396) {O="~372~188~Draschel~65~95~100~50~60~50~0~0~2~0~0~0~144~45~14~47~50~5~2~0/0C9~";}
    if (n==397) {O="~373~189~Brutalanda~95~135~80~100~110~80~0~3~0~0~0~0~218~45~14/1~27~50~5~2~0/0C9~";}
    if (n==398) {O="~374~190~Tanhel~40~55~80~30~35~60~0~0~1~0~0~0~103~3~7/12~6~-1~5~8~0/0C7~";}
    if (n==399) {O="~375~191~Metang~60~75~100~50~55~80~0~0~2~0~0~0~153~3~7/12~6~-1~5~8~0/0C7~";}
    if (n==400) {O="~376~192~Metagross~80~135~130~70~95~90~0~0~3~0~0~0~210~3~7/12~6~-1~5~8~0/0C7~";}
    if (n==401) {O="~377~193~Regirock~80~100~200~50~50~100~0~0~3~0~0~0~217~3~4~6~-1~5~10~0/0~";}
    if (n==402) {O="~378~194~Regice~80~50~100~50~100~200~0~0~0~0~0~3~216~3~13~6~-1~5~10~0/0~";}
    if (n==403) {O="~379~195~Registeel~80~75~150~50~75~150~0~0~2~0~0~1~215~3~7~6~-1~5~10~0/0~";}
    if (n==404) {O="~382~198~Kyogre~100~100~90~90~150~140~0~0~0~0~3~0~218~5~9~12~-1~5~10~0/0~";}
    if (n==405) {O="~383~199~Groudon~100~150~140~90~100~90~0~3~0~0~0~0~218~5~3~13~-1~5~10~0/0~";}
    if (n==406) {O="~384~200~Rayquaza~105~150~90~95~150~90~0~2~0~0~1~0~220~3~14/1~0~-1~5~10~0/0~";}
    if (n==407) {O="~380~196~Latias~80~80~90~110~110~130~0~0~0~0~0~3~211~3~14/12~29~100~5~10~0/0~";}
    if (n==408) {O="~381~197~Latios~80~90~80~110~130~110~0~0~0~0~3~0~211~3~14/12~29~0~5~10~0/0~";}
    if (n==409) {O="~385~201~Jirachi~100~100~100~100~100~100~3~0~0~0~0~0~215~3~7/12~52~-1~5~10~06D/06D~";}
    if (n==410) {O="~386~202~Deoxys~50~150~50~150~150~50~0~1~0~1~1~0~215~3~12~44~-1~5~10~0/0~";
        if (game_select.value==14||game_select.value==16||game_select.value==19||game_select.value==21||game_select.value==23||game_select.value==25||game_select.value==27) {O="~386~202~Deoxys~50~180~20~150~180~20~0~1~0~1~1~0~215~3~12~44~-1~5~10~0/0~";}
        if (game_select.value==15||game_select.value==17||game_select.value==20||game_select.value==22||game_select.value==24||game_select.value==26||game_select.value==28) {O="~386~202~Deoxys~50~70~160~90~70~160~0~1~0~1~1~0~215~3~12~44~-1~5~10~0/0~";}
        if (game_select.value==18) {O="~386~202~Deoxys~50~95~90~180~95~90~0~1~0~1~1~0~215~3~12~44~-1~5~10~0/0~";}}
    if (n==411) {O="~358~151~Palimpalim~65~50~70~65~95~80~0~0~0~0~1~1~147~45~12~29~50~4~7~0/0~";}
    return O;
}
function ItemC() {var t=" ";var i=0;i=item_carry.selectedIndex;t=item_carry[i].value;item_description.value=ItemDex(t,2);return i;}
function ItemDex(n,w) {
    var o=" ";var i=0;var t=" ";
    if (n=="000") {o="~Nichts~";} else {o="~Unknown~"+n+" Unknown Item~";}
    i=0;
    if (n=="001") {o="~Meister-Ball~Der Meisterball ist der beste aller Pokebälle, wobei er garantiert jedes Pokemon fängt.~"; i=1;}
    if (n=="002") {o="~Hyper-Ball~Wie auch der Poke-Ball dient der Hyper-Ball dem Fangen von Pokemon, allerdings ist seine Fangchance mit 2 deutlich höher als die des Poke-Balls und auch höher als die des Super-Balls. So eignet er sich am besten um starke, seltene oder sogar legendäre Pokemon zu fangen.~"; i=2;}
    if (n=="003") {o="~Super-Ball~Wie auch der Poke-Ball dient der Super-Ball dem Fangen von Pokemon, allerdings ist seine Fangchance mit 1,5 höher als die des Poke-balls. So eignet er sich besser um stärkere Pokemon zu fangen.~"; i=3;}
    if (n=="004") {o="~Poke-Ball~Der Poke-Ball ist der gewöhnlichste aller Bälle. Mit Erhalt des Pokedexes erhält der Spieler bereits seine ersten Pokebälle. Da sie zunächst die einzige Möglichkeit sind Pokemon zu fangen, sind sie auch ein elementarer Bestandteil der Reise und dürfen auf keinen Fall fehlen. Erst der Super-Ball bietet eine Alternative zum Poke-Ball um Pokemon zu fangen. Dieser hat auch zugleich eine höhere Fangchance als der gewöhnliche Poke-Ball, womit er sich besser eignet um starke oder seltene Pokemon zu fangen.~"; i=4;}
    if (n=="005") {o="~Safari-Ball~Der Safari-Ball dient dem Fangen von Pokemon in der Safari-Zone. Er hat eine Fangchance von 1,5 und entspricht somit einem Super-Ball.~"; i=5;}
    if (n=="006") {o="~Netz-Ball~Der Netz-Ball ist speziell für Käfer- und Wasser-Pokemon entwickelt worden, weswegen die Fangchance bei diesen Pokemon seit der siebten Generation 3,5-mal so hoch wie jene eines normalen Poke-Balls, bis zur sechsten Generation ist sie unter diesen Bedingungen dreimal so hoch. Bei Pokemon eines anderen Typs entspricht die Fangchance jedoch jener des Poke-Balls.~"; i=6;}
    if (n=="007") {o="~Tauch-Ball~Dieser Ball wurde speziell für den Einsatz unter Wasser entwickelt. Bei Pokemon, die Unterwasser angetroffen werden, liegt die Fangchance 3,5 mal so hoch, wie bei einem normalen Poke-Ball. Seit Pokemon Feuerrot und Blattgrün gilt dieser Effekt nicht mehr nur unter Wasser, sondern auch bei Pokemon, die durch angeln oder surfen getroffen werden. An Land wirkt dieser spezielle Effekt nicht, wodurch die Fangchance der des Poke-Balls entspricht.~"; i=7;}
    if (n=="008") {o="~Nest-Ball~Dieser Ball wurde speziell für schwache Pokemon entwickelt. Die Fangchance richtet sich dementsprechend nach dem Level des zu fangenden Pokemon. So entspricht der Nest-Ball bei Pokemon ab Level 30 einem normalen Pokeball, unter Level 20 erreicht er eine dreimal so hohe Fangchance. Zwischen Level 20 und 29 hat er eine doppelt so hohe Fangchance.~"; i=8;}
    if (n=="009") {o="~Wieder-Ball~Dieser Ball nutzt die Daten bereits gefangener Pokemon, um die Fangchance bei erneuten Fangversuchen derselben Art zu erhöhen. Sollte bereits ein Exemplar des Pokemon im Pokedex registriert sein, ist die Fangchance seit der siebten Generation 3,5-mal und bis zur sechsten Generation dreimal so hoch wie jene des Poke-Balls. Sollte jedoch noch kein Exemplar registriert sein, so entspricht der Wieder-Ball einem normalen Poke-Ball.~"; i=9;}
    if (n=="00A") {o="~Timer-Ball~Der Timer-Ball wird effektiver, je länger der Kampf andauert. Dabei wird die Fangchance mit einer Formel jede Runde neu berechnet. Die maximale Fangchance von 4 ist damit also nach 30 Runden erreicht und steigt jede Runde um 0,01 bzw. 10%.~"; i=10;}
    if (n=="00B") {o="~Luxus-Ball~Die Fangchance des Luxus-Balls entspricht jener eines normalen Poke-Balls, jedoch wird bei Aktionen, die die Freundschaft eines Pokemon steigern, zusätzlich ein weiterer Punkt addiert.~"; i=11;}
    if (n=="00C") {o="~Premier-Ball~Der Premier-Ball entspricht einem normalen Poke-Ball und hat keine weiteren Effekte.~"; i=12;}
    if (n=="00D") {o="~Trank~Stellt 20 Kraftpunkte eines Pokemon wieder her. Stärkere Versionen des Tranks sind der Super-Trank, der Hyper-Trank, der Top-Trank und die Top-Genesung.~"; i=13;}
    if (n=="00E") {o="~Gegengift~Befreit ein Pokemon von einer Vergiftung.~"; i=14;}
    if (n=="00F") {o="~Feuer-Heiler~Heilt Verbrennungen.~"; i=15;}
    if (n=="010") {o="~Eis-Heiler~Heilt Erfrierungen.~"; i=16;}
    if (n=="011") {o="~Aufwecker~Weckt schlafende Pokemon.~"; i=17;}
    if (n=="012") {o="~Para-Heiler~Heilt paralysierte Pokemon.~"; i=18;}
    if (n=="013") {o="~Top-Genesung~Alle Kraftpunkte werden wieder hergestellt und alle Statusveränderungen werden aufgehoben.~"; i=19;}
    if (n=="014") {o="~Top-Trank~Alle Kraftpunkte eines Pokemon werden wieder hergestellt.~"; i=20;}
    if (n=="015") {o="~Hyper-Trank~Füllt 200 Kraftpunkte auf.~"; i=21;}
    if (n=="016") {o="~Super-Trank~Füllt 50 Kraftpunkte auf.~"; i=22;}
    if (n=="017") {o="~Hyper-Heiler~Alle Statusveränderungen werden aufgehoben.~"; i=23;}
    if (n=="018") {o="~Beleber~Belebt besiegte Pokemon wieder und stellt die Hälfte ihrer Kraftpunkte wieder her.~"; i=24;}
    if (n=="019") {o="~Top-Beleber~Regeneriert besiegte Pokemon komplett.~"; i=25;}
    if (n=="01A") {o="~Tafelwasser~Es füllt die KP eines Pokemon um 50 Punkte auf. Dadurch ist es wesentlich effizienter als ein Trank, jedoch erst später im Spiel zu erhalten.~"; i=26;}
    if (n=="01B") {o="~Sprudel~Es füllt die KP eines Pokemon um 60 Punkte auf.~"; i=27;}
    if (n=="01C") {o="~Limonade~Füllt die Kraftpunkte eines Pokemon um 80 Punkte auf.~"; i=28;}
    if (n=="01D") {o="~Kuhmuh-Milch~Nahrhafte Milch, die einem Pokemon 100 Kraftpunkte zurück gibt.~"; i=29;}
    if (n=="01E") {o="~Energiestaub~Der Energiestaub füllt die KP eines Pokemon wie ein Supertrank um 50 Punkte auf. Jedoch mögen Pokemon den bitteren Geschmack nicht. Somit hat es eine Nebenwirkung, denn es senkt die Zuneigung eines Pokemon zu seinem Trainer.~"; i=30;}
    if (n=="01F") {o="~Kraftwurzel~Wie bei einem Hypertrank regeneriert die Kraftwurzel 200 Kraftpunkte, aber die Zuneigung des Pokemon zu seinem Trainer sinkt, weil sie so bitter schmeckt.~"; i=31;}
    if (n=="020") {o="~Heilpuder~Trotz seines bitteren Geschmacks hebt es alle Statuveränderungen auf. Aber die Zuneigung des Pokemon zum Trainer leidet.~"; i=32;}
    if (n=="021") {o="~Vitalkraut~Das Vitalkraut belebt ein besiegtes Pokemon und stellt sämtliche KP wieder her. Aber die Zuneigung des Pokemon zum Trainer leidet.~"; i=33;}
    if (n=="022") {o="~Äther~Der Äther stellt 10 Angriffspunkte einer Attacke wieder her. Stärkere Versionen sind der Top-Äther, das Elixier und das Top-Elixier.~"; i=34;}
    if (n=="023") {o="~Top-Äther~Stellt alle Angriffspunkte einer Attacke wieder her.~"; i=35;}
    if (n=="024") {o="~Elixier~Ein Elixier füllt die Angriffspunkte aller Attacken eines Pokemon um 10 auf. Es gibt eine mächtigere Version des Items, das Top-Elixier, das die Angriffspunkte vollständig auffüllt. Ähnliche Items sind Äther und Top-Äther, die nur von einer Attacke die Angriffspunkte wiederherstellen.~"; i=36;}
    if (n=="025") {o="~Top-Elixier~Stellt alle Angriffspunkte aller Attacken wieder her.~"; i=37;}
    if (n=="026") {o="~Lavakeks~Eine Spezialität aus Bad Lavastadt, die alle Statusprobleme eines Pokemon heilt.~"; i=38;}
    if (n=="027") {o="~Blaue Flöte~Eine blaue, gläserne Flöte, die schlafende Pokemon aufweckt.~"; i=39;}
    if (n=="028") {o="~Gelbe Flöte~Eine gelbe, gläserne Flöte, die verwirrte Pokemon heilt.~"; i=40;}
    if (n=="029") {o="~Rote Flöte~Eine rote, gläserne Flöte, die Pokemon von Anziehung heilt.~"; i=41;}
    if (n=="02A") {o="~Schwarze Flöte~Eine schwarze, gläserne Flöte, die wilde Pokemon vom Angriff abhalten kann.~"; i=42;}
    if (n=="02B") {o="~Weisse Flöte~Eine durchsichtige, gläserne Flöte, die wilde Pokemon anziehen kann.~"; i=43;}
    if (n=="02C") {o="~Beerensaft~Reiner Fruchtsaft, der die KP eines Pokemon um 20 Punkte auffüllt.~"; i=44;}
    if (n=="02D") {o="~Zauberasche~Belebt und erfrischt alle besiegten Pokemon und füllt deren KP vollständig wieder auf.~"; i=45;}
    if (n=="02E") {o="~Küstensalz~Salz, das sich tief in der Küstenhöhle befand. Es ist extrem salzig!~"; i=46;}
    if (n=="02F") {o="~Küstenschale~Eine schöne Muschelschale, die sich in der Küstenhöhle befand. Sie ist blau und weiß gestreift.~"; i=47;}
    if (n=="030") {o="~Purpurstück~Eine rote Scherbe eines antiken Werkzeugs, das vor langer Zeit angefertigt wurde.~"; i=48;}
    if (n=="031") {o="~Indigostück~Eine blaue Scherbe eines antiken Werkzeugs, das vor langer Zeit angefertigt wurde.~"; i=49;}
    if (n=="032") {o="~Gelbstück~Eine gelbe Scherbe eines antiken Werkzeugs, das vor langer Zeit angefertigt wurde.~"; i=50;}
    if (n=="033") {o="~Grünstück~Eine grüne Scherbe eines antiken Werkzeugs, das vor langer Zeit angefertigt wurde."; i=51;}
    if (n=="03F") {o="~KP~Ein gehaltvolles Getränk, das die KP-Anzeige eines Pokemon erhöht.~"; i=52;}
    if (n=="040") {o="~Protein~Ein gehaltvolles Getränk, das den Angriffswert eines Pokemon hebt.~"; i=53;}
    if (n=="041") {o="~Eisen~Ein gehaltvolles Getränk, das den Verteidigungswert eines Pokemon hebt.~"; i=54;}
    if (n=="042") {o="~Carbon~Ein gehaltvolles Getränk, das den Initiativwert eines Pokemon hebt.~"; i=55;}
    if (n=="043") {o="~Kalzium~Ein gehaltvolles Getränk, das den Spezial-Angriffswert eines Pokemon hebt.~"; i=56;}
    if (n=="044") {o="~Sonderbonbon~Ein energiereiches Bonbon, das den Level eines Pokemon um 1 anhebt.~"; i=57;}
    if (n=="045") {o="~AP-Plus~Hebt die maximale Anzahl der Angriffspunkte einer Attacke eines Pokemon.~"; i=58;}
    if (n=="046") {o="~Zink~Ein gehaltvolles Getränk, das den Spezial-Verteidigungswert eines Pokemon hebt.~"; i=59;}
    if (n=="047") {o="~AP-Top~Maximiert die Anzahl der Angriffspunkte einer Attacke eines Pokemon.~"; i=60;}
    if (n=="049") {o="~Megablock~Eine mögliche Statusänderung der Pokemon im Team wird für fünf Runden verhindert.~"; i=61;}
    if (n=="04A") {o="~X-Volltreffer~Hebt die Volltrefferquote des Pokemon im Kampf. Die Wirkung wird mit dem Tausch des Pokemon beendet.~"; i=62;}
    if (n=="04B") {o="~X-Angriff~Hebt den Angriffswert eines Pokemon im Kampf. Die Wirkung wird mit dem Tausch des Pokemon beendet.~"; i=63;}
    if (n=="04C") {o="~X-Verteidigung~Hebt den Verteidigungswert eines Pokemon im Kampf. Die Wirkung wird mit dem Tausch des Pokemon beendet.~"; i=64;}
    if (n=="04D") {o="~X-Tempo~Hebt den Initiativewert eines Pokemon im Kampf. Die Wirkung wird mit dem Tausch des Pokemon beendet.~"; i=65;}
    if (n=="04E") {o="~X-Treffer~Hebt die Genauigkeit eines Pokemon im Kampf. Die Wirkung wird mit dem Tausch des Pokemon beendet.~"; i=66;}
    if (n=="04F") {o="~X-Spezial~Hebt den Spezial-Angriffswert eines Pokemon im Kampf. Die Wirkung wird mit dem Tausch des Pokemon beendet.~"; i=67;}
    if (n=="050") {o="~Pokepuppe~Eine hübsche Puppe. Sie ermöglicht die Flucht im Kampf gegen wilde Pokemon.~"; i=68;}
    if (n=="051") {o="~Eneco-Rute~Ein tolles Item. Fliehe damit aus jedem Kampf mit einem wilden Pokemon.~"; i=69;}
    if (n=="053") {o="~Super-Schutz~Hält 200 Schritte lang schwache, wilde Pokemon ab.~"; i=70;}
    if (n=="054") {o="~Top-Schutz~Hält 250 Schritte lang schwache, wilde Pokemon ab.~"; i=71;}
    if (n=="055") {o="~Fluchtseil~Ein langes, festes Seil, das die sofortige Flucht aus Höhlen oder Ähnlichem ermöglicht.~"; i=72;}
    if (n=="056") {o="~Schutz~Hält 100 Schritte lang schwache, wilde Pokemon ab.~"; i=73;}
    if (n=="05D") {o="~Sonnenstein~Dieser spezielle Stein löst bei bestimmten Pokemon die Entwicklung aus. Er ist rot wie die Sonne.~"; i=74;}
    if (n=="05E") {o="~Mondstein~Dieser spezielle Stein löst bei bestimmten Pokemon die Entwicklung aus. Er ist schwarz wie die Nacht.~"; i=75;}
    if (n=="05F") {o="~Feuerstein~Dieser spezielle Stein löst bei bestimmten Pokemon die Entwicklung aus. Er ist orange.~"; i=76;}
    if (n=="060") {o="~Donnerstein~Dieser spezielle Stein löst bei bestimmten Pokemon die Entwicklung aus. Er hat ein Blitzmuster.~"; i=77;}
    if (n=="061") {o="~Wasserstein~Dieser spezielle Stein löst bei bestimmten Pokemon die Entwicklung aus. Er ist hellblau.~"; i=78;}
    if (n=="062") {o="~Blattstein~Dieser spezielle Stein löst bei bestimmten Pokemon die Entwicklung aus. Er hat ein Blattmuster.~"; i=79;}
    if (n=="067") {o="~Minipilz~Ein kleiner und seltener Pilz, der seine Liebhaber hat.~"; i=80;}
    if (n=="068") {o="~Riesenpilz~Ein großer und seltener Pilz, der seine Liebhaber hat.~"; i=81;}
    if (n=="06A") {o="~Perle~Eine relativ kleine Perle, die in schönem Silber funkelt. Sie ist von geringem Wert.~"; i=82;}
    if (n=="06B") {o="~Riesenperle~Eine relativ große Perle, die in schönem Silber funkelt. Sie ist von hohem Wert.~"; i=83;}
    if (n=="06C") {o="~Sternenstaub~Schöner, roter Sand, der sich seidenweich anfühlt. Er ist von hohem Wert.~"; i=84;}
    if (n=="06D") {o="~Sternenstück~Ein schöner, roter Edelstein, der einen hohen Preis erzielen kann.~"; i=85;}
    if (n=="06E") {o="~Nugget~Ein Nugget aus purem Gold, das einen schimmernden Glanz besitzt. Es ist von großem Wert.~"; i=86;}
    if (n=="06F") {o="~Herzschuppe~Eine hübsche, herzförmige, sehr seltene Schuppe. Sie erstrahlt in den Farben des Regenbogens.~"; i=87;}
    if (n=="079") {o="~Zigzagbrief~Ein Brief mit Zigzachs-Aufdruck. Er kann von einem Pokemon getragen werden.~"; i=88;}
    if (n=="07A") {o="~Hafenbrief~Ein Brief mit Wingull-Aufdruck. Er kann von einem Pokemon getragen werden.~"; i=89;}
    if (n=="07B") {o="~Glitzerbrief~Ein Brief mit Pikachu-Aufdruck. Er kann von einem Pokemon getragen werden.~"; i=90;}
    if (n=="07C") {o="~Eilbrief~Ein Brief mit Magnetilo-Aufdruck. Er kann von einem Pokemon getragen werden.~"; i=91;}
    if (n=="07D") {o="~Waldbrief~Ein Brief mit Bummelz-Aufdruck. Er kann von einem Pokemon getragen werden.~"; i=92;}
    if (n=="07E") {o="~Wellenbrief~Ein Brief mit Wailmer-Aufdruck. Er kann von einem Pokemon getragen werden.~"; i=93;}
    if (n=="07F") {o="~Perlenbrief~Ein Brief, der von einem Pokemon getragen werden kann und als Aufdruck den Träger hat.~"; i=94;}
    if (n=="080") {o="~Dunkelbrief~Ein Brief mit Zwirrlicht-Aufdruck. Er kann von einem Pokemon getragen werden.~"; i=95;}
    if (n=="081") {o="~Tropenbrief~Ein Brief mit Blubella-Aufdruck. Er kann von einem Pokemon getragen werden.~"; i=96;}
    if (n=="082") {o="~Traumbrief~Ein Brief, der von einem Pokemon getragen werden kann und als Aufdruck den Träger hat.~"; i=97;}
    if (n=="083") {o="~Edelbrief~Ein Brief mit einem bezaubernden, extravaganten Aufdruck. Er kann von einem Pokemon getragen werden.~"; i=98;}
    if (n=="084") {o="~Retrobrief~Brief mit dem Aufdruck dreier niedlicher, possierlicher Pokemon-Gesichter.~"; i=99;}
    if (n=="085") {o="~Amrenabeere~Heilt bei Paralyse.~"; i=100;}
    if (n=="086") {o="~Maronbeere~Heilt bei Schlaf.~"; i=101;}
    if (n=="087") {o="~Pirsifbeere~Heilt bei Vergiftung.~"; i=102;}
    if (n=="088") {o="~Fragiabeere~Heilt bei Verbrennung.~"; i=103;}
    if (n=="089") {o="~Wilbirbeere~Heilt bei Erfrierung.~"; i=104;}
    if (n=="08A") {o="~Jonagobeere~Füllt AP um 10 Punkte auf.~"; i=105;}
    if (n=="08B") {o="~Sinelbeere~Füllt KP um 10 Punkte auf, wenn unter 50%.~"; i=106;}
    if (n=="08C") {o="~Persimbeere~Heilt bei Verwirrung.~"; i=107;}
    if (n=="08D") {o="~Prunusbeere~Heilt alle Statusveränderungen.~"; i=108;}
    if (n=="08E") {o="~Tsitrubeere~Füllt KP um 30 Punkte auf, wenn unter 50%.~"; i=109;}
    if (n=="08F") {o="~Giefebeere~Füllt KP auf, bewirkt aber eventuell Verwirrung.~"; i=110;}
    if (n=="090") {o="~Wikibeere~Füllt KP auf, bewirkt aber eventuell Verwirrung.~"; i=111;}
    if (n=="091") {o="~Magobeere~Füllt KP auf, bewirkt aber eventuell Verwirrung.~"; i=112;}
    if (n=="092") {o="~Gauvebeere~Füllt KP auf, bewirkt aber eventuell Verwirrung.~"; i=113;}
    if (n=="093") {o="~Yapabeere~Füllt KP auf, bewirkt aber eventuell Verwirrung.~"; i=114;}
    if (n=="094") {o="~Himmihbeere~Kann zu einem Pulver gemahlen werden, um Medizin herzustellen.~"; i=115;}
    if (n=="095") {o="~Morbbeere~Kann zu einem Pulver gemahlen werden, um Medizin herzustellen.~"; i=116;}
    if (n=="096") {o="~Nanabbeere~Kann zu einem Pulver gemahlen werden, um Medizin herzustellen.~"; i=117;}
    if (n=="097") {o="~Nirbebeere~Kann zu einem Pulver gemahlen werden, um Medizin herzustellen.~"; i=118;}
    if (n=="098") {o="~Sananabeere~Kann zu einem Pulver gemahlen werden, um Medizin herzustellen.~"; i=119;}
    if (n=="099") {o="~Granabeere~Kann zu einem Pulver gemahlen werden, um Medizin herzustellen.~"; i=120;}
    if (n=="09A") {o="~Setangbeere~Kann zu einem Pulver gemahlen werden, um Medizin herzustellen.~"; i=121;}
    if (n=="09B") {o="~Qualotbeere~Kann zu einem Pulver gemahlen werden, um Medizin herzustellen.~"; i=122;}
    if (n=="09C") {o="~Honmelbeere~Kann zu einem Pulver gemahlen werden, um Medizin herzustellen.~"; i=123;}
    if (n=="09D") {o="~Labrusbeere~Kann zu einem Pulver gemahlen werden, um Medizin herzustellen.~"; i=124;}
    if (n=="09E") {o="~Tamotbeere~Kann zu einem Pulver gemahlen werden, um Medizin herzustellen.~"; i=125;}
    if (n=="09F") {o="~Saimbeere~Kann zu einem Pulver gemahlen werden, um Medizin herzustellen.~"; i=126;}
    if (n=="0A0") {o="~Magostbeere~Kann zu einem Pulver gemahlen werden, um Medizin herzustellen.~"; i=127;}
    if (n=="0A1") {o="~Rabutabeere~Kann zu einem Pulver gemahlen werden, um Medizin herzustellen.~"; i=128;}
    if (n=="0A2") {o="~Tronzibeere~Kann zu einem Pulver gemahlen werden, um Medizin herzustellen.~"; i=129;}
    if (n=="0A3") {o="~Kiwanbeere~Kann zu einem Pulver gemahlen werden, um Medizin herzustellen.~"; i=130;}
    if (n=="0A4") {o="~Pallmbeere~Kann zu einem Pulver gemahlen werden, um Medizin herzustellen.~"; i=131;}
    if (n=="0A5") {o="~Wasmelbeere~Kann zu einem Pulver gemahlen werden, um Medizin herzustellen.~"; i=132;}
    if (n=="0A6") {o="~Durinbeere~Kann zu einem Pulver gemahlen werden, um Medizin herzustellen.~"; i=133;}
    if (n=="0A7") {o="~Myrtilbeere~Kann zu einem Pulver gemahlen werden, um Medizin herzustellen.~"; i=134;}
    if (n=="0A8") {o="~Lydzibeere~Hebt Angriffswert in einer Notlage.~"; i=135;}
    if (n=="0A9") {o="~Linganbeere~Hebt Verteidigungswert in einer Notlage.~"; i=136;}
    if (n=="0AA") {o="~Salkabeere~Steigert Initiative in einer Notlage.~"; i=137;}
    if (n=="0AB") {o="~Tahaybeere~Hebt Spezial-Angriffswert in einer Notlage.~"; i=138;}
    if (n=="0AC") {o="~Apikobeere~Hebt Spezial-Verteidigungswert in einer Notlage.~"; i=139;}
    if (n=="0AD") {o="~Lansatbeere~Steigert in Notlagen die Chance, Volltreffer zu landen.~"; i=140;}
    if (n=="0AE") {o="~Krambobeere~Hebt einen Statuswert in einer Notlage.~"; i=141;}
    if (n=="0AF") {o="~Enigmabeere~Kann zu einem Pulver gemahlen werden, um Medizin herzustellen.~"; i=142;}
    if (n=="0B3") {o="~Blendpuder~Senkt die Genauigkeit des Gegners.~"; i=143;}
    if (n=="0B4") {o="~Schlohkraut~Hebt jede Statusveränderung auf.~"; i=144;}
    if (n=="0B5") {o="~Machoband~Es fördert Wachstum, senkt aber die Initiative.~"; i=145;}
    if (n=="0B6") {o="~EP-Teiler~Wird der EP-Teiler getragen, erhält das Pokemon die Hälfte der Erfahrungspunkte, auch wenn es nicht am Kampf teilgenommen hat.~"; i=146;}
    if (n=="0B7") {o="~Flinkklaue~Hebt die Erstschlagquote.~"; i=147;}
    if (n=="0B8") {o="~Sanftglocke~Sie besänftigt und fördert Sympathie.~"; i=148;}
    if (n=="0B9") {o="~Mentalkraut~Es erlöst Pokemon von Anziehung.~"; i=149;}
    if (n=="0BA") {o="~Wahlband~Es stärkt eine Attacke. Aber nur diese ist einsetzbar.~"; i=150;}
    if (n=="0BB") {o="~King-Stein~Er kann Gegner zurückweichen lassen.~"; i=151;}
    if (n=="0BC") {o="~Silberstaub~Er verbessert Käfer-Attacken.~"; i=152;}
    if (n=="0BD") {o="~Münzamulett~Nimmt der Träger am Kampf teil, erhält man das doppelte Preisgeld.~"; i=153;}
    if (n=="0BE") {o="~Schutzband~Es kann wilde Pokemon abhalten, wenn der Träger an erster Stelle steht.~"; i=154;}
    if (n=="0BF") {o="~Seelentau~Ein Item, das von Latios oder Latias getragen werden kann. Es hebt den Spezialangriff und die Spezialverteidigung um 50%.~"; i=155;}
    if (n=="0C0") {o="~Abysszahn~Ein Item, das von Perlu getragen werden kann. Es verdoppelt den Spezialangriff.~"; i=156;}
    if (n=="0C1") {o="~Abyssschuppe~Ein Item, das von Perlu getragen werden kann. Es verdoppelt die Spezialabwehr.~"; i=157;}
    if (n=="0C2") {o="~Rauchball~Fluchtgarantie vor wilden Pokemon.~"; i=158;}
    if (n=="0C3") {o="~Ewigstein~Dieser mysteriöse Stein verhindert die Entwicklung von Pokemon.~"; i=159;}
    if (n=="0C4") {o="~Fokusband~Kann manchmal ein K.O. verhindern.~"; i=160;}
    if (n=="0C5") {o="~Glücks-Ei~Verdoppelt die Erfahrungspunkte des Trägers.~"; i=161;}
    if (n=="0C6") {o="~Scope-Linse~Erhöht die Volltreffer-Quote.~"; i=162;}
    if (n=="0C7") {o="~Metallmantel~Verstärkt Stahl-Attacken.~"; i=163;}
    if (n=="0C8") {o="~Überreste~Füllt im Kampf stetig KP auf.~"; i=164;}
    if (n=="0C9") {o="~Drachenschuppe~Seltsame Haut zum Tragen für Pokemon der Elementklasse Drache.~"; i=165;}
    if (n=="0CA") {o="~Kugelblitz~Ein Item, das von Pikachu getragen werden kann. Es verdoppelt den Spezialangriff.~"; i=166;}
    if (n=="0CB") {o="~Pudersand~Verstärkt Boden-Attacken.~"; i=167;}
    if (n=="0CC") {o="~Granitstein~Verstärkt Stein-Attacken.~"; i=168;}
    if (n=="0CD") {o="~Wundersaat~Verstärkt Pflanzen-Attacken.~"; i=169;}
    if (n=="0CE") {o="~Schattenbrille~Verstärkt Dunkel-Attacken.~"; i=170;}
    if (n=="0CF") {o="~Schwarzgurt~Verstärkt Kampf-Attacken.~"; i=171;}
    if (n=="0D0") {o="~Magnet~Verstärkt Elektro-Attacken.~"; i=172;}
    if (n=="0D1") {o="~Zauberwasser~Verstärkt Wasser-Attacken.~"; i=173;}
    if (n=="0D2") {o="~Spitzer Schnabel~Verstärkt Flug-Attacken.~"; i=174;}
    if (n=="0D3") {o="~Giftstich~Verstärkt Gift-Attacken.~"; i=175;}
    if (n=="0D4") {o="~Ewiges Eis~Verstärkt Eis-Attacken.~"; i=176;}
    if (n=="0D5") {o="~Bannsticker~Verstärkt Geist-Attacken.~"; i=177;}
    if (n=="0D6") {o="~Krummlöffel~Verstärkt Psycho-Attacken.~"; i=178;}
    if (n=="0D7") {o="~Holzkohle~Verstärkt Feuer-Attacken."; i=179;}
    if (n=="0D8") {o="~Drachenzahn~Verstärkt Drachen-Attacken."; i=180;}
    if (n=="0D9") {o="~Seidenschal~Verstärkt Normal-Attacken.~"; i=181;}
    if (n=="0DA") {o="~Up-Grade~Entwickelt Porygon beim Tausch.~"; i=182;}
    if (n=="0DB") {o="~Muschelglocke~Es füllt im Kampf stetig KP auf.~"; i=183;}
    if (n=="0DC") {o="~Seerauch~Verstärkt Wasser-Attacken."; i=184;}
    if (n=="0DD") {o="~Laxrauch~Senkt Genauigkeit des Gegners.~"; i=185;}
    if (n=="0DE") {o="~Lucky Punch~Erhöht Chaneira's Volltrefferquote.~"; i=186;}
    if (n=="0DF") {o="~Metallstaub~Erhöht Ditto's Verteidigungswert.~"; i=187;}
    if (n=="0E0") {o="~Kampfknochen~Ein harter Knochen, der den Agriffswert von Tragosso oder Knogga erhöht, wenn sie ihn tragen.~"; i=188;}
    if (n=="0E1") {o="~Lauchstange~Diese Lauchstange erhöht die Volltrefferquote, wenn Porenta sie trägt.~"; i=189;}
    if (n=="0FE") {o="~Roter Schal~Erhöht den Cool-Wert in Wettbewerben.~"; i=190;}
    if (n=="0FF") {o="~Blauer Schal~Erhöht den Schön-Wert in Wettbewerben.~"; i=191;}
    if (n=="100") {o="~Rosa Schal~Erhöht den Anmut-Wert in Wettbewerben.~"; i=192;}
    if (n=="101") {o="~Grüner Schal~Erhöht den Klug-Wert in Wettbewerben.~"; i=193;}
    if (n=="102") {o="~Gelber Schal~Erhöht den Stark-Wert in Wettbewerben.~"; i=194;}
    if (n=="103") {o="~Eilrad~Klapprad, das doppelt so schnell ist wie ein Fußgänger.~"; i=195;}
    if (n=="104") {o="~Münzkorb~Im Korb finden bis zu 9999 Münzen für die Spielhalle Platz.~"; i=196;}
    if (n=="105") {o="~Detektor~Ein Gerät, das verborgene Items via Schallwellen ortet.~"; i=197;}
    if (n=="106") {o="~Angel~Damit kannst du in jedem Gewässer nach Pokemon angeln.~"; i=198;}
    if (n=="107") {o="~Profiangel~Eine recht gute Angel, um Pokemon zu fangen."; i=199;}
    if (n=="108") {o="~Superangel~Eine wundervoll gefertigte Angel. Die beste Angel, um nach Pokemon zu fischen.~"; i=200;}
    if (n=="109") {o="~Bootsticket~Ein Ticket zur Fahrt auf einer Fähre.~"; i=201;}
    if (n=="10A") {o="~Wettbewerbskarte~Ausweis zur Teilnahme an Pokemon-Wettbewerben. Die Zeichnung eines Bandes ist aufgedruckt.~"; i=202;}
    if (n=="10C") {o="~Wailmerkanne~Ein Gegenstand zum Gießen von Pflanzen, wie beispielsweise Beeren.~"; i=203;}
    if (n=="10D") {o="~Devon-Waren~Ein Päckchen, das Maschinenteile der Devon Corporation enthält.~"; i=204;}
    if (n=="10E") {o="~Aschetasche~Ein Säckchen zum Sammeln und Aufbewahren von Vulkanasche.~"; i=205;}
    if (n=="10F") {o="~Kelleröffner~Schlüssel für Neu-Malvenfroh, das unter Mavenfroh-City errichtet wurde.~"; i=206;}
    if (n=="110") {o="~Kunstrad~Dieses Klapprad ermöglicht Sprünge und Wheelies.~"; i=207;}
    if (n=="111") {o="~Pokeriegelbox~Box für Pokeriegel, die im Beerenmixer hergestellt werden. Wird sie geschüttelt, spendet sie einen Riegel.~"; i=208;}
    if (n=="112") {o="~Brief An Troy~Ein äußerst wichtiger Brief an Troy, vom Päsidenten der Devon Corporation.~"; i=209;}
    if (n=="113") {o="~Äon-Ticket~Das Bootsticket zu einer fernen Insel im Süden. Eine Zeichnung der Insel ist aufgedruckt.~"; i=210;}
    if (n=="114") {o="~Roter Edelstein~Eine rot glühende Kugel, die eine uralte Macht bergen soll.~"; i=211;}
    if (n=="115") {o="~Blauer Edelstein~Eine blau glühende Kugel, die eine uralte Macht bergen soll.~"; i=212;}
    if (n=="116") {o="~Scanner~Ein Gerät, mit dem man im Wasser nach Lebewesen sucht. Seine Bedienung ist schwierig.~"; i=213;}
    if (n=="117") {o="~Wüstenbrille~Eine Schutzbrille, die es ermöglicht, selbst bei Sandstürmen Wüsten zu durchqueren.~"; i=214;}
    if (n=="118") {o="~Meteorit~Ein Meteorit, der im Mondberg aufschlug. Ein sehr harter Klumpen.~"; i=215;}
    if (n=="119") {o="~R1-Schlüssel~Ein Schlüssel, der in das Schloss eines Raumes auf Seewoge Malvenfroh passt.~"; i=216;}
    if (n=="11A") {o="~R2-Schlüssel~Ein Schlüssel, der in das Schloss eines Raumes auf Seewoge Malvenfroh passt.~"; i=217;}
    if (n=="11B") {o="~R4-Schlüssel~Ein Schlüssel, der in das Schloss eines Raumes auf Seewoge Malvenfroh passt.~"; i=218;}
    if (n=="11C") {o="~R6-Schlüssel~Ein Schlüssel, der in das Schloss eines Raumes auf Seewoge Malvenfroh passt.~"; i=219;}
    if (n=="11D") {o="~Lagerschlüssel~Ein Schlüssel, der in das Schloss des Lagerraums auf Seewoge Malvenfroh passt.~"; i=220;}
    if (n=="11E") {o="~Wurzelfossil~Das Fossil eines uralten Pokemon, das in der Tiefsee lebte. Es sieht wie eine Pflanzenwurzel aus.~"; i=221;}
    if (n=="11F") {o="~Klauenfossil~Das Fossil eines uralten Pokemon, das in der Tiefsee lebte. Es sieht wie eine Klaue aus.~"; i=222;}
    if (n=="120") {o="~Devon-Scope~Ein Gerät der Devon Corporation, das unsichtbare Pokemon entlarvt.~"; i=223;}
    if (n=="121") {o="~TM 01 - Power-Punch~Power-Punch fügt dem Ziel enormen Schaden zu. Am Anfang einer Runde lädt sich das Pokemon auf. Der eigentliche Angriff kommt meistens am Ende der Runde, da der Angriff eine niedrige Priorität besitzt. Der Anwender darf in dem Zeitraum keinen Schaden durch direkte Angriffe erleiden, da er ansonsten seinen Fokus verliert und nicht mehr angreifen kann. Wird stattdessen der Delegator getroffen, kann das Pokemon die Attacke ausführen.~"; i=224;}
    if (n=="122") {o="~TM 02 - Drachenklaue~Das Ziel wird mit riesigen, scharfen Klauen stark verletzt.Drachenklaue schadet dem Ziel ohne Zusatzeffekte.~"; i=225;}
    if (n=="123") {o="~TM 03 - Aquawelle~Aquawelle fügt dem Ziel Schaden zu und kann es mit einer Wahrscheinlichkeit von 20% verwirren. Besitzt das Ziel die Fähigkeit Tempomacher, kann es nicht verwirrt werden.~"; i=226;}
    if (n=="124") {o="~TM 04 - Gedankengut~Gedankengut erhöht den Spezial-Angriff und die Spezial-Verteidigung des Anwenders jeweils um eine Stufe.~"; i=227;}
    if (n=="125") {o="~TM 05 - Brüller~Brüller beendet den Kampf gegen wilde Pokemon, sofern das Level des Anwenders höher ist als das des Ziels. Lediglich in Kämpfen gegen wilde Pokemon während einer Inselprüfung hat Brüller keinen Effekt. In Trainerkämpfen wird hingegen das Ziel gegen ein anderes Pokemon des Trainers ausgetauscht. Hat der Trainer kein anderes Pokemon mehr, schlägt Brüller fehl.~"; i=228;}
    if (n=="126") {o="~TM 06 - Toxin~Das Ziel wird schwer vergiftet. Der Schaden wird am Ende jeder Runde um 1/16 erhöht. Das Ziel kann nicht vergiftet werden, wenn es einen Delegator hat, bereits von eine primären Statusveränderung betroffen ist oder gegen Vergiftung immun ist.~"; i=229;}
    if (n=="127") {o="~TM 07 - Hagelsturm~Der verursachte Hagelsturm hält 5 Runden an und schadet allen Pokemon, außer denen vom Typ Eis.~"; i=230;}
    if (n=="128") {o="~TM 08 - Protzer~Protzer erhöht den Angriff und die Verteidigung des Anwenders jeweils um eine Stufe.~"; i=231;}
    if (n=="129") {o="~TM 09 - Kugelsaat~Kugelsaat trifft das Ziel zwei- bis fünfmal. Die Chance für 2 und 3 Treffer ist 1/3 (33,3%). Die Chance für 4 oder 5 Treffer beträgt 1/6 (16,7%). Besitzt der Anwender die Fähigkeit Wertelink, wird das Ziel garantiert fünfmal getroffen.~"; i=232;}
    if (n=="12A") {o="~TM 10 - Kraftreserve~Der Typ dieser Attacke hängt vom jeweiligen Pokemon ab, das sie einsetzt.~"; i=233;}
    if (n=="12B") {o="~TM 11 - Sonnentag~Die Sonne brennt unbarmherzig fünf Runden lang. Dadurch werden Attacken vom Typ Feuer verstärkt.~"; i=234;}
    if (n=="12C") {o="~TM 12 - Verhöhner~Das Ziel kann über drei Runden hinweg ausschließlich Attacken einsetzen, die direkten Schaden verursachen. Dieser Effekt endet nach drei Runden oder wenn das Ziel ausgetauscht wird. Beherrscht das Ziel solche Attacken nicht oder hält ein Wahlitem und es ist eine Status-Attacke ausgewählt, so setzt es Verzweifler ein, bis der Effekt von Verhöhner endet.~"; i=235;}
    if (n=="12D") {o="~TM 13 - Eisstrahl~Eisstrahl verursacht Schaden und friert das Ziel mit einer Wahrscheinlichkeit von 10% ein.~"; i=236;}
    if (n=="12E") {o="~TM 14 - Blizzard~Blizzard fügt dem Gegner Schaden zu und friert ihn mit einer Wahrscheinlichkeit von 10% ein. Blizzard trifft bei Hagel unabhängig von Veränderungen an Genauigkeit und Fluchtwert immer.~"; i=237;}
    if (n=="12F") {o="~TM 15 - Hyperstrahl~Hyperstrahl verursacht Schaden. Der Rückstoß der Attacke bewirkt, dass der Anwender in der nächsten Runde aussetzen muss, auch, wenn das Ziel durch Hyperstrahl besiegt wird. Dabei kann er nicht ausgewechselt werden und auch sonst kann keine Handlung vollzogen werden. Schlägt die Attacke fehl, zum Beispiel durch Senkung der Genauigkeit oder den Einsatz von Schutzschild, muss der Anwender in der nächsten Runde nicht aussetzen. Besitzt der Anwender die Fähigkeit Schnarchnase, so fällt der negative Effekt dieser Fähigkeit und der negative Effekt von Hyperstrahl auf die gleiche Runde, sodass der Anwender in der zweiten Runde wieder angreifen kann.~"; i=238;}
    if (n=="130") {o="~TM 16 - Lichtschild~Der Schaden, den der Anwender und seine Partner durch Spezial-Angriffe erleiden, wird fünf Runden lang halbiert.~"; i=239;}
    if (n=="131") {o="~TM 17 - Schutzschild~Schützt den Anwender vor Schaden und Effekten von Attacken, die in derselben Runde gegen ihn eingesetzt werden. Die Attacke besitzt eine erhöhte Priorität. Die Attacke schützt nicht vor Schaden von vorherigen Attacken der erst am Ende der Runden verrechnet wird, wie Wickel, verschiedene Wetter oder den Attacken Seher und Kismetwunsch.~"; i=240;}
    if (n=="132") {o="~TM 18 - Regentanz~Anwender erzeugt für fünf Runden einen Regenschauer. Jeder andere Wettereffekt wird dadurch aufgehoben. Sollte der Anwender einen Nassbrocken tragen, so hält der Regen acht anstatt fünf Runden an.~"; i=241;}
    if (n=="133") {o="~TM 19 - Gigasauger~Schadet dem Ziel und füllt die KP des Anwenders um 50% des verursachten Schadens auf (es wird aufgerundet). Wird ein Gegner mit der Fähigkeit Kloakensoße angegriffen, verliert der Anwender KP, anstatt welche dazuzubekommen. Wenn der Anwender Großwurzel trägt, bekommt er 30% mehr KP als ohne getragenes Item; der angerichtete Schaden bleibt dabei gleich.~"; i=242;}
    if (n=="134") {o="~TM 20 - Bodyguard~Bodyguard verhindert, dass dem Anwender und seinen Teammitglieder fünf Runden lang primären Statusveränderungen und Verwirrungen zugefügt werden können. Dabei werden Pokemon nicht vor selbst verschuldeten Statusveränderungen, weder durch Attacken, wie Erholung oder Wutanfall, noch Trageitems, wie Heiß-Orb oder Giefebeere, geschützt.~"; i=243;}
    if (n=="135") {o="~TM 21 - Frustration~Frustration schädigt den Gegner. Die Stärke ist von der Zuneigung abhängig.~"; i=244;}
    if (n=="136") {o="~TM 22 - Solarstrahl~Diese Attacke verursacht Schaden. In der Runde, in der Solarstrahl ausgewählt wurde, badet der Anwender in Sonnenlicht und greift in der nächsten Runde an. Ist Solarstrahl einmal ausgewählt, kann der Anwender nicht ausgetauscht werden. Während Sonnentag aktiv ist, braucht der Anwender keine Aufladerunde; es kann sofort angegriffen werden. Ebenso verhält es sich, wenn der Anwender ein Energiekraut trägt; dieses wird damit aufgebraucht. Die Attacke hat nur eine Stärke von 60 anstatt von 120, wenn Sandsturm, Regen oder Hagel herrscht. AP werden erst nach einem erfolgreichen Angriff abgezogen; wenn Solarstrahl nicht vollständig ausgeführt wird, werden keine AP abgezogen und es zählt nicht als die zuletzt ausgeführte Attacke. Paralyse, Zurückschrecken oder Selbstverletzung durch Verwirrung beenden Solarstrahl. Schlaf, Einfrieren oder Gefangennahme durch Attacken wie Wickel lassen die Attacke nur pausieren, unterbrechen sie aber nicht. Wenn der Gegner Spiegeltrick während der Vorbereitungsrunde von Solarstrahl einsetzt, so kopiert Spiegeltrick die Attacke, die der Anwender vor Solarstrahl eingesetzt hat (wurde davor keine Attacke eingesetzt, schlägt es fehl).~"; i=245;}
    if (n=="137") {o="~TM 23 - Eisenschweif~Schädigt das Ziel und senkt mit einer Wahrscheinlichkeit von 30% seine Verteidigung um 1 Stufe.~"; i=246;}
    if (n=="138") {o="~TM 24 - Donnerblitz~Donnerblitz verursacht Schaden und paralysiert das Ziel mit einer Wahrscheinlichkeit von 10%.~"; i=247;}
    if (n=="139") {o="~TM 25 - Donner~Verursacht Schaden und paralysiert das Ziel mit einer Wahrscheinlichkeit von 30%. Donner trifft bei Regen unabhängig von Veränderungen an Genauigkeit und Fluchtwert immer, bei Sonnenschein nur mit einer Genauigkeit von 50%.~"; i=248;}
    if (n=="13A") {o="~TM 26 - Erdbeben~Fügt allen im Kampf befindlichen Pokemon in der Nähe außer dem Anwender selbst Schaden zu. Hat ein Pokemon Schaufler eingesetzt, trifft die Attacke mit doppelter Kraft.~"; i=249;}
    if (n=="13B") {o="~TM 27 - Rückkehr~Rückkehr schädigt das Ziel. Die Stärke ist von der Zuneigung abhängig.~"; i=250;}
    if (n=="13C") {o="~TM 28 - Schaufler~Diese Attacke verursacht Schaden. In der Runde, in der Schaufler ausgewählt wurde, gräbt sich der Anwender in die Erde ein und greift in der nächsten Runde an. Ist Schaufler einmal ausgewählt, kann der Anwender nicht ausgetauscht werden. AP werden erst nach einem erfolgreichen Angriff abgezogen; wenn Schaufler nicht vollständig ausgeführt wird, werden keine AP abgezogen und es zählt nicht als die zuletzt ausgeführte Attacke. Paralyse oder Selbstverletzung durch Verwirrung beenden Schaufler. Wenn der Anwender wegen Paralyse in der Vorbereitungsrunde nicht angreifen kann, so bleibt er unter der Erde bis er ausgewechselt wird oder Schaufler vollständig ausführt. Unter der Erde ist der Anwender gegen fast alle Attacken immun. Setzt der Gegner Erdbeben oder Intensität ein, kann der Anwender nicht ausweichen und erleidet doppelten Schaden (außer er ist aus anderen Gründen gegen diese Attacken immun); auch Geofissur kann nicht ausgewichen werden. Der Anwender kann von jeder Attacke getroffen werden, wenn in der Runde vor dem Einsatz von Schaufler Zielschuss oder Willensleser auf den Anwender eingesetzt wurde oder wenn der Gegner die Fähigkeit Schildlos hat. Er erleidet keinen Schaden durch Sandsturm oder Hagel. Wenn der Gegner Spiegeltrick während der Vorbereitungsrunde von Schaufler einsetzt, so kopiert Spiegeltrick die Attacke, die der Anwender vor Schaufler eingesetzt hat (wurde davor keine Attacke eingesetzt, schlägt es fehl).~"; i=251;}
    if (n=="13D") {o="~TM 29 - Psychokinese~Schadet dem Ziel und hat eine Chance von 10%, die Spezial-Verteidigung um eine Stufe zu senken. In der ersten Generation senkt Psychokinese den Spezial-Wert des Gegners mit einer Chance von 30%.~"; i=252;}
    if (n=="13E") {o="~TM 30 - Spukball~Spukball schädigt das Ziel und senkt mit einer Chance von 20% dessen Spezial-Verteidigung.~"; i=253;}
    if (n=="13F") {o="~TM 31 - Durchbruch~Schädigt das Ziel. Bevor der Schaden zugefügt wird, werden die Effekte von Lichtschild, Reflektor und Auroraschleier von der Seite des Ziels entfernt. Die Effekte werden nicht aufgehoben, wenn Durchbruch daneben geht, es durch eine Schild-Attacke abgewehrt wird oder das Ziel immun gegen Durchbruch ist.~"; i=254;}
    if (n=="140") {o="~TM 32 - Doppelteam~Der Fluchtwert des Anwenders steigt um 1 Stufe.~"; i=255;}
    if (n=="141") {o="~TM 33 - Reflektor~Der Schaden, den der Anwender und seine Partner durch physische Angriffe erleiden, wird fünf Runden lang halbiert.~"; i=256;}
    if (n=="142") {o="~TM 34 - Schockwelle~Verursacht Schaden und trifft den Gegner auf jeden Fall. Die Trefferwahrscheinlichkeit wird nicht von Veränderungen an Genauigkeit oder Fluchtwert des Anwenders oder des Ziels beeinflusst (z. B. durch Einsatz von Doppelteam oder Sandwirbel) und auch nicht von Effekten, die die Trefferwahrscheinlichkeit negativ beeinflussen, z. B. Nebel oder Sandschleier. Schockwelle trifft nicht in den Vorbereitungsrunden von Attacken wie z. B. Schaufler, Fliegen und Taucher. Der Schaden kann durch Einsatz von Schutzschild verhindert werden.~"; i=257;}
    if (n=="143") {o="~TM 35 - Flammenwurf~Schädigt das Ziel und verbrennt es mit einer Wahrscheinlichkeit von 10%.~"; i=258;}
    if (n=="144") {o="~TM 36 - Matschbombe~Das Ziel wird geschädigt und mit einer Chance von 30% vergiftet. Das Ziel kann nicht vergiftet werden, wenn es einen Delegator benutzt, bereits einer primären Statusveränderung unterliegt, die Fähigkeit Immunität hat oder vom Typ Gift oder Stahl ist.~"; i=259;}
    if (n=="145") {o="~TM 37 - Sandsturm~Der Einsatz von Sandsturm ändert das Wetter in Sandsturm und alle Kampfteilnehmer, die nicht vom Typ Boden, Gestein oder Stahl sind, erleiden Schaden in Höhe von 1/16 ihrer maximalen KP. Alle anderen bestehenden Wettereffekte werden aufgehoben. Der Sandsturm dauert fünf Runden lang, ein gehaltener Glattbrocken verlängert die Rundenzahl auf acht. Pokemon, die sich in der Vorbereitungsrunde von Taucher und Schaufler befinden, werden von Sandsturm nicht getroffen. Die Spezial-Verteidigung aller im Kampf befindlichen Gestein-Pokemon wird um 50% erhöht.~"; i=260;}
    if (n=="146") {o="~TM 38 - Feuersturm~Schädigt das Ziel und verbrennt es mit einer Chance von 10%.~"; i=261;}
    if (n=="147") {o="~TM 39 - Felsgrab~Felsgrab verursacht Schaden und senkt die Initiative des Ziels um eine Stufe.~"; i=262;}
    if (n=="148") {o="~TM 40 - Aero-Ass~Verursacht Schaden und trifft den Gegner auf jeden Fall. Die Trefferwahrscheinlichkeit wird nicht von Veränderungen an Genauigkeit oder Fluchtwert des Anwenders oder des Ziels beeinflusst (z.B. durch Einsatz von Doppelteam oder Sandwirbel) und auch nicht von Effekten, die die Trefferwahrscheinlichkeit negativ beeinflussen, z.B. Nebel oder Sandschleier. Aero-Ass trifft nicht in den Vorbereitungsrunden von Attacken wie z. B. Schaufler, Fliegen und Taucher.~"; i=263;}
    if (n=="149") {o="~TM 41 - Folterknecht~Folterknecht hindert das Ziel daran, dass dieses dieselbe Attacke zweimal hintereinander zum Einsatz auswählen kann. Hat es nur eine Attacke zur Wahl, oder wurde es vorher nur auf eine Attacke limitiert, muss es jede zweite Runde Verzweifler einsetzen. Verzweifler wird von Folterknecht nicht beeinflusst; das Ziel kann Verzweifler mehrmals hintereinander einsetzen, wenn es sonst keine Attacken mehr übrig hat.~"; i=264;}
    if (n=="14A") {o="~TM 42 - Fassade~Die Attacke schädigt das Ziel. Ist der Anwender von einer Paralyse, Vergiftung oder Verbrennung betroffen, verdoppelt sich die Stärke und steigt von 70 auf 140. Zusätzlich wird bei einer Verbrennung der Angriff des Anwenders beim Einsatz von Fassade nicht halbiert.~"; i=265;}
    if (n=="14B") {o="~TM 43 - Geheimpower~Geheimpower richtet Schaden an und erzeugt einen Effekt mit 30% Wahrscheinlichkeit. Der Schaden und der Effekt hängen von der Umgebung ab, da für die unterschiedlichen Umgebungen eine andere Attacke eingesetzt wird.~"; i=266;}
    if (n=="14C") {o="~TM 44 - Erholung~Durch Erholung schläft der Anwender ein und seine KP werden auf das Maximum aufgefüllt. Dabei werden Paralyse, Verbrennungen und Vergiftungen geheilt. Der Anwender schläft danach für die nächsten zwei Runden lang und wacht in der dritten Runde wieder auf.~"; i=267;}
    if (n=="14D") {o="~TM 45 - Anziehung~Trifft Anziehung, löst sie den gleichnamigen Status aus, der den Gegner nur mit einer Chance von 50% angreifen lässt. Die Attacke funktioniert nur, wenn der Gegner vom anderen Geschlecht als der Anwender ist. Auch Pokemon von unbekanntem Geschlecht bleiben von Anziehung unberührt.~"; i=268;}
    if (n=="14E") {o="~TM 46 - Raub~Raub verursacht Schaden und stiehlt das Item des Zieles, falls dieses eins hält. Wenn das Ziel kein Item hält oder der Anwender bereits ein Item hält, wird nur Schaden verursacht und kein Item gestohlen.~"; i=269;}
    if (n=="14F") {o="~TM 47 - Stahlflügel~Stahlflügel verursacht Schaden und erhöht mit einer Wahrscheinlichkeit von 10% die Verteidigung des Anwenders um 1 Stufe.~"; i=270;}
    if (n=="150") {o="~TM 48 - Wertewechsel~Die Fähigkeiten des Anwenders und des Ziels werden getauscht. Wirkungslos bei Wunderwache, Trugbild und Variabilität. Fähigkeiten, die normalerweise aktiviert werden, wenn das Pokemon in den Kampf geschickt wird (z. B. Bedroher), werden aktiviert, nachdem sie durch Fähigkeitstausch getauscht wurden. Wird der Anwender, nachdem er diese Attacke ausgeführt hat, ausgetauscht, erhält er seine ursprüngliche Fähigkeit zurück.~"; i=271;}
    if (n=="151") {o="~TM 49 - Übernahme~Übernahme hat eine erhöhte Priorität von +4. Der Anwender wartet eine Status-Attacke des Gegners ab, um die Wirkung der Attacke des Gegners zu stehlen und auf sich selbst zu übertragen.~"; i=272;}
    if (n=="152") {o="~TM 50 - Hitzekoller~Schädigt das Ziel und senkt den Spezial-Angriff des Anwenders um zwei Stufen.~"; i=273;}
    if (n=="153") {o="~VM 01 - Zerschneider~Zerschneider schadet dem Ziel ohne Zusatzeffekte.~"; i=274;}
    if (n=="154") {o="~VM 02 - Fliegen~Diese Attacke verursacht Schaden. In der Runde, in der Fliegen ausgewählt wurde, fliegt der Anwender in die Luft und greift in der nächsten Runde an. Ist Fliegen erst einmal ausgewählt, kann der Anwender in der nächsten Runde nicht ausgetauscht werden. AP werden erst beim Einsatz der Attacke in der zweiten Runde abgezogen.~"; i=275;}
    if (n=="155") {o="~VM 03 - Surfer~Die Attacke richtet Schaden an. Wenn das angegriffene Pokemon Taucher eingesetzt hat, verdoppelt sich der erhaltene Schaden. Der Partner wird in Doppel- und Dreierkämpfen auch getroffen.~"; i=276;}
    if (n=="156") {o="~VM 04 - Stärke~Verursacht Schaden ohne Zusatzeffekte.~"; i=277;}
    if (n=="157") {o="~VM 05 - Blitz~Senkt die Genauigkeit des Ziels um eine Stufe.~"; i=278;}
    if (n=="158") {o="~VM 06 - Zertrümmerer~Schädigt das Ziel und senkt mit einer Chance von 50% dessen Verteidigung.~"; i=279;}
    if (n=="159") {o="~VM 07 - Kaskade~Schädigt das Ziel und lässt es mit einer Chance von 20% zurückschrecken.~"; i=280;}
    if (n=="15A") {o="~VM 08 - Taucher~Diese Attacke verursacht Schaden, allerdings erst nach einer Vorbereitungsrunde, in der der Anwender abtaucht. Wird das ausführende Pokemon von Surfer oder von Whirlpool getroffen, während es abgetaucht ist, erleidet es den doppelten Schaden.~"; i=281;}
    if (n=="15D") {o="~Eich's Paket~Ein Paket, das vom Pokemon-Supermarkt in Vertania-City zu Professor Eich gebracht werden muss.~"; i=282;}
    if (n=="15E") {o="~Pokeflöte~Die Pokeflöte wird benötigt, um Relaxo aufzuwecken. Zudem kann man mithilfe der Pokeflöte in Pokemon Rot, Blau, Gelb, Feuerrot und Blattgrün auch jedes schlafende Pokemon während eines Kampfes aufwecken.~"; i=283;}
    if (n=="15F") {o="~Geheimschlüssel~Der Schlüssel zur Arena der Zinnoberinsel. Er ist rot und reich verziert.~"; i=284;}
    if (n=="160") {o="~Rad-Coupon~Gegen Vorlage dieses Gutscheins erhältst du im Fahrradladen in Azuria-City ein Fahrrad.~"; i=285;}
    if (n=="161") {o="~Goldenes Gebiss~Das verlorene Gebiss des Wärters in der Safari-Zone. Sein Lächeln wirkt dadurch goldig.~"; i=286;}
    if (n=="162") {o="~Altbernstein~Ein Stück Bernstein, in dem die Gene eines antiken Pokemon enthalten sind. Es ist durchsichtig! Aerodactyl kann damit rekonstruiert werden...~"; i=287;}
    if (n=="163") {o="~Schlüsselkarte Kanto~Eine Art Schlüsselkarte, mit der die Türen im Hauptsitz der Silph Corporation in Saffronia-City geöffnet werden.~"; i=288;}
    if (n=="164") {o="~Liftschlüssel Kanto~Der Liftschlüssel für das Penthouse in Team-Rocket's Geheimbasis.~"; i=289;}
    if (n=="165") {o="~Domfossil~Das Domfossil kann in Kanto im Zinnoberinsel-Labor bzw. in Marmoria-City, in Hoenn bei der Devon Corporation, in Sinnoh in Erzelingen, in Einall in Septerna City, in Kalos in Petrophia oder in Alola auf Route 8 zu einem Kabuto reanimiert werden.~"; i=290;}
    if (n=="166") {o="~Helixfossil~Das Helixfossil kann in Kanto im Zinnoberinsel-Labor bzw. in Marmoria-City, in Hoenn bei der Devon Corporation, in Sinnoh in Erzelingen, in Einall in Septerna City, in Kalos in Petrophia oder in Alola auf Route 8 zu einem Amonitas reanimiert werden.~"; i=291;}
    if (n=="167") {o="~Silph Scope~Man kann den Geist von Knogga und Geist-Pokemon im Pokemon-Turm von Lavandia sehen und bekämpfen.~"; i=292;}
    if (n=="168") {o="~Fahrrad~Das Fahrrad bietet die Möglichkeit einer schnelleren Fortbewegung während des Abenteuers. Bis zur dritten Generation ist es die einzige Möglichkeit, sich schneller fortzubewegen, erst dort werden die Turbotreter eingeführt.~"; i=293;}
    if (n=="169") {o="~Karte~Eine Karte der Kanto-Region.~"; i=294;}
    if (n=="16A") {o="~Kampffahnder~Ein Gerät, das rückkampfwillige Trainer ausfindig macht. Die Batterie lädt sich beim Reisen auf.~"; i=295;}
    if (n=="16B") {o="~Ruhmesdatei~Die Ruhmesdatei sammelt Informationen über wichtige Personen, indem man Personen, Schilder, Bilder oder Regale anspricht. Wenn man zu einer Person alle 6 Informationen bekommen hat, erhält man von ihr eine Nachricht. Darüber hinaus ist die Ruhmesdatei nicht von großer Bedeutung und man bekommt für das Vervollständigen keine Belohnung. Sie ist bloß für detektivischen Spaß gedacht und um die wichtigen Personen besser kennenzulernen bzw. sie sich ins Gedächtnis zu rufen.~"; i=296;}
    if (n=="16C") {o="~TM- | VM-Box~Eine Box, in der VMs und TMs aufbewahrt werden. Sie ist in deinen Beutel integriert.~"; i=297;}
    if (n=="16D") {o="~Beerentüte~Die Beerentüte lagert alle Beeren, die man im Verlauf des Spiels erhält.~"; i=298;}
    if (n=="16E") {o="~Lehrkanal~Der Lehrkanal ist ein kleiner Fernseher, der Anfängern das Spielprinzip näher bringen soll.~"; i=299;}
    if (n=="16F") {o="~Tri-Pass~Mit dem Tri-Pass kann man mit der Seesprint-Fähre zwischen Eiland Eins, Zwei, Drei und Orania City reisen. Nach dem Erhalt des Bunt-Passes wird der Tri-Pass nicht mehr benötigt.~"; i=300;}
    if (n=="170") {o="~Bunt-Pass~Man kann mit der Seesprint-Fähre zwischen allen sieben Eilanden und Orania City reisen.~"; i=301;}
    if (n=="171") {o="~Tee~Gibt man dieses Getränk einem der um Saffronia-City stationierten Wachposten, so darf man die Stadt betreten. Da der Wächter den Tee mit seinen drei Kollegen teilt, kann man Saffronia von allen vier Himmelsrichtungen aus bereisen.~"; i=302;}
    if (n=="172") {o="~Geheimticket~Mit dem Geheimticket ist es möglich, zum Nabelfels zu reisen und dort sowohl Ho-Oh als auch Lugia herauszufordern.~"; i=303;}
    if (n=="173") {o="~Auroraticket~Mit dem Auroraticket ist es möglich die Entstehungsinsel zu bereisen und dort Deoxys herauszufordern.~"; i=304;}
    if (n=="174") {o="~Puderdöschen~Das Puderdöschen lagert Puder, welches gegen Items eingetauscht werden kann. Zudem ermöglicht es das Benutzen der Beerenmühle.~"; i=305;}
    if (n=="175") {o="~Rubin~Zusammen mit dem Saphir kann Celio eine Verbindung zwischen Kanto und Hoenn herstellen, wodurch man Pokemon zwischen beiden Regionen tauschen kann.~"; i=306;}
    if (n=="176") {o="~Saphir~Zusammen mit dem Rubin kann Celio eine Verbindung zwischen Kanto und Hoenn herstellen, wodurch man Pokemon zwischen beiden Regionen tauschen kann.~"; i=307;}
    if (n=="177") {o="~Magma-Emblem~Das Magma-Emblem öffnet Team Magmas Versteck am Steilpass.~"; i=308;}
    if (n=="178") {o="~Alte Karte~Die Alte Karte erlaubt dem Spieler nach Ferneiland zu reisen und dort Mew herauszufordern.~"; i=309;}
    if (n=="1F4") {o="~Zellenschlüssel~XD~"; i=310;}
    if (n=="1F5") {o="~Liftschlüssel~XD~"; i=311;}
    if (n=="1F6") {o="~Steintafel~XD~"; i=312;}
    if (n=="1F7") {o="~V-Disc~XD~"; i=313;}
    if (n=="1F8") {o="~R-Disc~XD~"; i=314;}
    if (n=="1F9") {o="~L-Disc~XD~"; i=315;}
    if (n=="1FA") {o="~D-Disc~XD~"; i=316;}
    if (n=="1FB") {o="~U-Disc~XD~"; i=317;}
    if (n=="1FC") {o="~Zugschlüssel~XD~"; i=318;}
    if (n=="1FD") {o="~Torschlüssel~XD~"; i=319;}
    if (n=="1FE") {o="~Schlüsselkarte~XD~"; i=320;}
    if (n=="1FF") {o="~UG-Schlüssel~XD~"; i=321;}
    if (n=="200") {o="~DNS-Probe~XD~"; i=322;}
    if (n=="201") {o="~Lorblatt-DNS~XD~"; i=323;}
    if (n=="202") {o="~DNS-Probe 2~XD~"; i=324;}
    if (n=="203") {o="~Igelavar-DNS~XD~"; i=325;}
    if (n=="204") {o="~DNS-Probe 3~XD~"; i=326;}
    if (n=="205") {o="~Tyracroc-DNA~XD~"; i=327;}
    if (n=="206") {o="~DNS-Probe 4~XD~"; i=328;}
    if (n=="207") {o="~Mogelbaum-DNA~XD~"; i=329;}
    if (n=="208") {o="~DNS-Probe 5~XD~"; i=330;}
    if (n=="209") {o="~Traunfugil-DNA~XD~"; i=331;}
    if (n=="20A") {o="~DNS-Probe 6~XD~"; i=332;}
    if (n=="20B") {o="~Magnayen-DNA~XD~"; i=333;}
    if (n=="20C") {o="~DNS-Probe 7~XD~"; i=334;}
    if (n=="20D") {o="~Raikou-DNA~XD~"; i=335;}
    if (n=="20E") {o="~DNS-Probe 8~XD~"; i=336;}
    if (n=="20F") {o="~Entei-DNA~XD~"; i=337;}
    if (n=="210") {o="~DNS-Probe 9~XD~"; i=338;}
    if (n=="211") {o="~Suicune-DNA~XD~"; i=339;}
    if (n=="212") {o="~CD-ROM~XD~"; i=340;}
    if (n=="213") {o="~Zahnprothese~XD~"; i=341;}
    if (n=="214") {o="~Zahnrad~XD~"; i=342;}
    if (n=="215") {o="~Rote ID-Marke~XD~"; i=343;}
    if (n=="216") {o="~Grüne ID-Marke~XD~"; i=344;}
    if (n=="217") {o="~Blaue ID-Marke~XD~"; i=345;}
    if (n=="218") {o="~Gelbe ID-Marke~XD~"; i=346;}
    if (n=="219") {o="~Zeitflöte~XD~"; i=347;}
    if (n=="21A") {o="~Culpa-Akte C-P~XD~"; i=348;}
    if (n=="21B") {o="~Culpa-Akte F-M~XD~"; i=349;}
    if (n=="21C") {o="~Culpa-Akte C~XD~"; i=350;}
    if (n=="21D") {o="~Culpa-Akte C-E~XD~"; i=351;}
    if (n=="21E") {o="~Essenz-Kiste~XD~"; i=352;}
    if (n=="21F") {o="~Froh-Essenz~XD~"; i=353;}
    if (n=="220") {o="~Glücks-Essenz~XD~"; i=354;}
    if (n=="221") {o="~Paradies-Essenz~XD~"; i=355;}
    if (n=="222") {o="~Ersatzteil~XD~"; i=356;}
    if (n=="223") {o="~Culpa-Akte A-B~XD~"; i=357;}
    if (n=="224") {o="~Battle CD 15~XD~"; i=358;}
    if (n=="225") {o="~Battle CD 16~XD~"; i=359;}
    if (n=="226") {o="~Battle CD 17~XD~"; i=360;}
    if (n=="227") {o="~Battle CD 18~XD~"; i=361;}
    if (n=="228") {o="~Battle CD 19~XD~"; i=362;}
    if (n=="229") {o="~Battle CD 20~XD~"; i=363;}
    if (n=="22A") {o="~Battle CD 21~XD~"; i=634;}
    if (n=="22B") {o="~Battle CD 22~XD~"; i=365;}
    if (n=="22C") {o="~Battle CD 23~XD~"; i=366;}
    if (n=="22D") {o="~Battle CD 24~XD~"; i=367;}
    if (n=="22E") {o="~Battle CD 25~XD~"; i=368;}
    if (n=="22F") {o="~Battle CD 26~XD~"; i=369;}
    if (n=="230") {o="~Battle CD 27~XD~"; i=370;}
    if (n=="231") {o="~Battle CD 28~XD~"; i=371;}
    if (n=="232") {o="~Battle CD 29~XD~"; i=372;}
    if (n=="233") {o="~Battle CD 30~XD~"; i=373;}
    if (n=="234") {o="~Battle CD 31~XD~"; i=374;}
    if (n=="235") {o="~Battle CD 32~XD~"; i=375;}
    if (n=="236") {o="~Battle CD 33~XD~"; i=376;}
    if (n=="237") {o="~Battle CD 34~XD~"; i=377;}
    if (n=="238") {o="~Battle CD 35~XD~"; i=378;}
    if (n=="239") {o="~Battle CD 36~XD~"; i=379;}
    if (n=="23A") {o="~Battle CD 37~XD~"; i=380;}
    if (n=="23B") {o="~Battle CD 38~XD~"; i=381;}
    if (n=="23C") {o="~Battle CD 39~XD~"; i=382;}
    if (n=="23D") {o="~Battle CD 40~XD~"; i=383;}
    if (n=="23E") {o="~Battle CD 41~XD~"; i=384;}
    if (n=="23F") {o="~Battle CD 42~XD~"; i=385;}
    if (n=="240") {o="~Battle CD 43~XD~"; i=386;}
    if (n=="241") {o="~Battle CD 44~XD~"; i=387;}
    if (n=="242") {o="~Battle CD 45~XD~"; i=388;}
    if (n=="243") {o="~Battle CD 46~XD~"; i=389;}
    if (n=="244") {o="~Battle CD 47~XD~"; i=390;}
    if (n=="245") {o="~Battle CD 48~XD~"; i=391;}
    if (n=="246") {o="~Battle CD 49~XD~"; i=392;}
    if (n=="247") {o="~Battle CD 50~XD~"; i=393;}
    if (n=="248") {o="~Battle CD 51~XD~"; i=394;}
    if (n=="249") {o="~Battle CD 52~XD~"; i=395;}
    if (n=="24A") {o="~Battle CD 53~XD~"; i=396;}
    if (n=="24B") {o="~Battle CD 54~XD~"; i=397;}
    if (n=="24C") {o="~Battle CD 55~XD~"; i=398;}
    if (n=="24D") {o="~Battle CD 56~XD~"; i=399;}
    if (n=="24E") {o="~Battle CD 57~XD~"; i=400;}
    if (n=="24F") {o="~Battle CD 58~XD~"; i=401;}
    if (n=="250") {o="~Battle CD 59~XD~"; i=402;}
    if (n=="251") {o="~Battle CD 60~XD~"; i=403;}
    if (w==0) {t=o;}
    if (w==1) {t=i;}
    if (w==2) {t=FI(o,"~",2);}
    if (w==3) {t=FI(o,"~",1);}
    return t;
}
function LocDex(n,w) {
    var o=" ";var a=" ";var t=" ";o="~"+n+"~Unbekannt~Unbekannt~Unbekannt~";
    if (n=="00") {o="~Wurzelheim~Wurzelheim~Wurzelheim~";}
    if (n=="01") {o="~Rosaltstadt~Rosaltstadt~Rosaltstadt~";}
    if (n=="02") {o="~Faustauhaven~Faustauhaven~Faustauhaven~";}
    if (n=="03") {o="~Bad Lavastadt~Bad Lavastadt~Bad Lavastadt~";}
    if (n=="04") {o="~Laubwechselfeld~Laubwechselfeld~Laubwechselfeld~";}
    if (n=="05") {o="~Wiesenflur~Wiesenflur~Wiesenflur~";}
    if (n=="06") {o="~Flossbrunn~Flossbrunn~Flossbrunn~";}
    if (n=="07") {o="~Blütenburg-City~Blütenburg-City~Blütenburg-City~";}
    if (n=="08") {o="~Graphitport-City~Graphitport-City~Graphitport-City~";}
    if (n=="09") {o="~Malvenfroh-City~Malvenfroh-City~Malvenfroh-City~";}
    if (n=="0A") {o="~Metarost-City~Metarost-City~Metarost-City~";}
    if (n=="0B") {o="~Baumhausen-City~Baumhausen-City~Baumhausen-City~";}
    if (n=="0C") {o="~Seegrasulb-City~Seegrasulb-City~Seegrasulb-City~";}
    if (n=="0D") {o="~Moosbach-City~Moosbach-City~Moosbach-City~";}
    if (n=="0E") {o="~Xeneroville~Xeneroville~Xeneroville~";}
    if (n=="0F") {o="~Prachtpolis-City~Prachtpolis-City~Prachtpolis-City~";}
    if (n=="10") {o="~Route 101~Route 101~Route 101~";}
    if (n=="11") {o="~Route 102~Route 102~Route 102~";}
    if (n=="12") {o="~Route 103~Route 103~Route 103~";}
    if (n=="13") {o="~Route 104~Route 104~Route 104~";}
    if (n=="14") {o="~Route 105~Route 105~Route 105~";}
    if (n=="15") {o="~Route 106~Route 106~Route 106~";}
    if (n=="16") {o="~Route 107~Route 107~Route 107~";}
    if (n=="17") {o="~Route 108~Route 108~Route 108~";}
    if (n=="18") {o="~Route 109~Route 109~Route 109~";}
    if (n=="19") {o="~Route 110~Route 110~Route 110~";}
    if (n=="1A") {o="~Route 111~Route 111~Route 111~";}
    if (n=="1B") {o="~Route 112~Route 112~Route 112~";}
    if (n=="1C") {o="~Route 113~Route 113~Route 113~";}
    if (n=="1D") {o="~Route 114~Route 114~Route 114~";}
    if (n=="1E") {o="~Route 115~Route 115~Route 115~";}
    if (n=="1F") {o="~Route 116~Route 116~Route 116~";}
    if (n=="20") {o="~Route 117~Route 117~Route 117~";}
    if (n=="21") {o="~Route 118~Route 118~Route 118~";}
    if (n=="22") {o="~Route 119~Route 119~Route 119~";}
    if (n=="23") {o="~Route 120~Route 120~Route 120~";}
    if (n=="24") {o="~Route 121~Route 121~Route 121~";}
    if (n=="25") {o="~Route 122~Route 122~Route 122~";}
    if (n=="26") {o="~Route 123~Route 123~Route 123~";}
    if (n=="27") {o="~Route 124~Route 124~Route 124~";}
    if (n=="28") {o="~Route 125~Route 125~Route 125~";}
    if (n=="29") {o="~Route 126~Route 126~Route 126~";}
    if (n=="2A") {o="~Route 127~Route 127~Route 127~";}
    if (n=="2B") {o="~Route 128~Route 128~Route 128~";}
    if (n=="2C") {o="~Route 129~Route 129~Route 129~";}
    if (n=="2D") {o="~Route 130~Route 130~Route 130~";}
    if (n=="2E") {o="~Route 131~Route 131~Route 131~";}
    if (n=="2F") {o="~Route 132~Route 132~Route 132~";}
    if (n=="30") {o="~Route 133~Route 133~Route 133~";}
    if (n=="31") {o="~Route 134~Route 134~Route 134~";}
    if (n=="32") {o="~Unterwasser - Route 124~Unterwasser - Route 124~Unterwasser - Route 124~";}
    if (n=="33") {o="~Unterwasser - Route 126~Unterwasser - Route 126~Unterwasser - Route 126~";}
    if (n=="34") {o="~Unterwasser - Route 127~Unterwasser - Route 127~Unterwasser - Route 127~";}
    if (n=="35") {o="~Unterwasser - Route 128~Unterwasser - Route 128~Unterwasser - Route 128~";}
    if (n=="36") {o="~Unterwasser - Xeneroville~Unterwasser - Xeneroville~Unterwasser - Xeneroville~";}
    if (n=="37") {o="~Granithöhle~Granithöhle~Granithöhle~";}
    if (n=="38") {o="~Schlotberg~Schlotberg~Schlotberg~";}
    if (n=="39") {o="~Safari-Zone~Safari-Zone~Safari-Zone~";}
    if (n=="3A") {o="~Duellturm~Duellturm~Duellturm~";}
    if (n=="3B") {o="~Blütenburgwald~Blütenburgwald~Blütenburgwald~";}
    if (n=="3C") {o="~Metaflurtunnel~Metaflurtunnel~Metaflurtunnel~";}
    if (n=="3D") {o="~Schiffswrack~Schiffswrack~Schiffswrack~";}
    if (n=="3E") {o="~Neu-Malvenfroh~Neu-Malvenfroh~Neu-Malvenfroh~";}
    if (n=="3F") {o="~Meteorfälle~Meteorfälle~Meteorfälle~";}
    if (n=="40") {o="~Meteorfälle - 1. Stock~Meteorfälle - 1. Stock~Meteorfälle - 1. Stock~";}
    if (n=="41") {o="~Pyroberg~Pyroberg~Pyroberg~";}
    if (n=="42") {o="~Team Magmas Versteck~Team Magmas Versteck~Team Magmas Versteck~";}
    if (n=="43") {o="~Küstenhöhle~Küstenhöhle~Küstenhöhle~";}
    if (n=="44") {o="~Tiefseehöhle~Tiefseehöhle~Tiefseehöhle~";}
    if (n=="45") {o="~Unterwasser - Ozeanhöhle~Unterwasser - Ozeanhöhle~Unterwasser - Ozeanhöhle~";}
    if (n=="46") {o="~Siegesstraße~Siegesstraße~Siegesstraße~";}
    if (n=="47") {o="~Wundereiland~Wundereiland~Wundereiland~";}
    if (n=="48") {o="~Urzeithöhle~Urzeithöhle~Urzeithöhle~";}
    if (n=="49") {o="~Insel im Süden~Insel im Süden~Insel im Süden~";}
    if (n=="4A") {o="~Feuriger Pfad - Endhöhle~Feuriger Pfad - Endhöhle~Feuriger Pfad - Endhöhle~";}
    if (n=="4B") {o="~Feuriger Pfad~Feuriger Pfad~Feuriger Pfad~";}
    if (n=="4C") {o="~Steilpass - Spitze~Steilpass - Spitze~_Steilpass - Spitze~";}
    if (n=="4D") {o="~Steilpass - Fuss~Steilpass - Fuss~Steilpass - Fuss~";}
    if (n=="4E") {o="~Unterwasser - Siegelkammer~Unterwasser - Siegelkammer~Unterwasser - Siegelkammer~";}
    if (n=="4F") {o="~Unterwasser - Route 134~Unterwasser - Route 134~Unterwasser - Route 134~";}
    if (n=="50") {o="~Sonnengrotte~Sonnengrotte~Sonnengrotte~";}
    if (n=="51") {o="~Inselhöhle~Inselhöhle~Inselhöhle~";}
    if (n=="52") {o="~Wüstenruine~Wüstenruine~Wüstenruine~";}
    if (n=="53") {o="~Grabmal~Grabmal~Grabmal~";}
    if (n=="54") {o="~LKW~LKW~LKW~";}
    if (n=="55") {o="~Himmelturm~Himmelturm~Himmelturm~";}
    if (n=="56") {o="~Geheimbasis~Geheimbasis~Geheimbasis~";}
    if (n=="57") {o="~Fähre~Fähre~Fähre~";}
    if (n=="58") {o="~Alabastia~Alabastia~Alabastia~";}
    if (n=="59") {o="~Vertania-City~Vertania-City~Vertania-City~";}
    if (n=="5A") {o="~Marmoria-City~Marmoria-City~Marmoria-City~";}
    if (n=="5B") {o="~Azuria-City~Azuria-City~Azuria-City~";}
    if (n=="5C") {o="~Lavandia~Lavandia~Lavandia~";}
    if (n=="5D") {o="~Orania-City~Orania-City~Orania-City~";}
    if (n=="5E") {o="~Prismania-City~Prismania-City~Prismania-City~";}
    if (n=="5F") {o="~Fuchsania-City~Fuchsania-City~Fuchsania-City~";}
    if (n=="60") {o="~Zinnoberinsel~Zinnoberinsel~Zinnoberinsel~";}
    if (n=="61") {o="~Indigo-Plateau~Indigo-Plateau~Indigo-Plateau~";}
    if (n=="62") {o="~Saffronia-City~Saffronia-City~Saffronia-City~";}
    if (n=="63") {o="~Route 4 - Eingang~Route 4 - Eingang~Route 4 - Eingang~";}
    if (n=="64") {o="~Route 10~Route 10~Route 10~";}
    if (n=="65") {o="~Route 1~Route 1~Route 1~";}
    if (n=="66") {o="~Route 2~Route 2~Route 2~";}
    if (n=="67") {o="~Route 3~Route 3~Route 3~";}
    if (n=="68") {o="~Route 4~Route 4~Route 4~";}
    if (n=="69") {o="~Route 5~Route 5~Route 5~";}
    if (n=="6A") {o="~Route 6~Route 6~Route 6~";}
    if (n=="6B") {o="~Route 7~Route 7~Route 7~";}
    if (n=="6C") {o="~Route 8~Route 8~Route 8~";}
    if (n=="6D") {o="~Route 9~Route 9~Route 9~";}
    if (n=="6E") {o="~Route 10~Route 10~Route 10~";}
    if (n=="6F") {o="~Route 11~Route 11~Route 11~";}
    if (n=="70") {o="~Route 12~Route 12~Route 12~";}
    if (n=="71") {o="~Route 13~Route 13~Route 13~";}
    if (n=="72") {o="~Route 14~Route 14~Route 14~";}
    if (n=="73") {o="~Route 15~Route 15~Route 15~";}
    if (n=="74") {o="~Route 16~Route 16~Route 16~";}
    if (n=="75") {o="~Route 17~Route 17~Route 17~";}
    if (n=="76") {o="~Route 18~Route 18~Route 18~";}
    if (n=="77") {o="~Route 19~Route 19~Route 19~";}
    if (n=="78") {o="~Route 20~Route 20~Route 20~";}
    if (n=="79") {o="~Route 21~Route 21~Route 21~";}
    if (n=="7A") {o="~Route 22~Route 22~Route 22~";}
    if (n=="7B") {o="~Route 23~Route 23~Route 23~";}
    if (n=="7C") {o="~Route 24~Route 24~Route 24~";}
    if (n=="7D") {o="~Route 25~Route 25~Route 25~";}
    if (n=="7E") {o="~Vertania-Wald~Vertania-Wald~Vertania-Wald~";}
    if (n=="7F") {o="~Mondberg~Mondberg~Mondberg~";}
    if (n=="80") {o="~M.S. Anne~M.S. Anne~M.S. Anne~";}
    if (n=="81") {o="~Unterführung Süd~Unterführung Süd~Unterführung Süd~";}
    if (n=="82") {o="~Unterführung Nord~Unterführung Nord~Unterführung Nord~";}
    if (n=="83") {o="~Digda-Höhle~Digda-Höhle~Digda-Höhle~";}
    if (n=="84") {o="~Siegesstraße~Siegesstraße~Siegesstraße~";}
    if (n=="85") {o="~Rocket-Versteck~Rocket-Versteck~Rocket-Versteck~";}
    if (n=="86") {o="~Silph Company~Silph Company~Silph Company~";}
    if (n=="87") {o="~Pokemon-Landgut~Pokemon-Landgut~Pokemon-Landgut~";}
    if (n=="88") {o="~Safari-Zone~Safari-Zone~Safari-Zone~";}
    if (n=="89") {o="~Pokemon-Liga~Pokemon-Liga~Pokemon-Liga~";}
    if (n=="8A") {o="~Felstunnel~Felstunnel~Felstunnel~";}
    if (n=="8B") {o="~Seeschauminseln~Seeschauminseln~Seeschauminseln~";}
    if (n=="8C") {o="~Pokemon-Turm~Pokemon-Turm~Pokemon-Turm~";}
    if (n=="8D") {o="~Azuria-Höhle~Azuria-Höhle~Azuria-Höhle~";}
    if (n=="8E") {o="~Kraftwerk~Kraftwerk~Kraftwerk~";}
    if (n=="8F") {o="~Eiland Eins~Eiland Eins~Eiland Eins~";}
    if (n=="90") {o="~Eiland Zwei~Eiland Zwei~Eiland Zwei~";}
    if (n=="91") {o="~Eiland Drei~Eiland Drei~Eiland Drei~";}
    if (n=="92") {o="~Eiland Vier~Eiland Vier~Eiland Vier~";}
    if (n=="93") {o="~Eiland Fünf~Eiland Fünf~Eiland Fünf~";}
    if (n=="94") {o="~Eiland Sieben~Eiland Sieben~Eiland Sieben~";}
    if (n=="95") {o="~Eiland Sechs~Eiland Sechs~Eiland Sechs~";}
    if (n=="96") {o="~Glühweg~Glühweg~Glühweg~";}
    if (n=="97") {o="~Schatzgestade~Schatzgestade~Schatzgestade~";}
    if (n=="98") {o="~Kap Kante~Kap Kante~Kap Kante~";}
    if (n=="99") {o="~Bundbrücke~Bundbrücke~Bundbrücke~";}
    if (n=="9A") {o="~Tri-Eiland Hafen~Tri-Eiland Hafen~Tri-Eiland Hafen~";}
    if (n=="9B") {o="~Eiland Sechs~Eiland Sechs~Eiland Sechs~";}
    if (n=="9C") {o="~Eiland Sieben~Eiland Sieben~Eiland Sieben~";}
    if (n=="9D") {o="~Eiland Acht~Eiland Acht~Eiland Acht~";}
    if (n=="9E") {o="~Eiland Neun~Eiland Neun~Eiland Neun~";}
    if (n=="9F") {o="~Ferienparadies~Ferienparadies~Ferienparadies~";}
    if (n=="A0") {o="~Wasserirrgarten~Wasserirrgarten~Wasserirrgarten~";}
    if (n=="A1") {o="~Weide~Weide~Weide~";}
    if (n=="A2") {o="~Südsee-Route~Südsee-Route~Südsee-Route~";}
    if (n=="A3") {o="~Fern-Eiland~Fern-Eiland~Fern-Eiland~";}
    if (n=="A4") {o="~Grüner Pfad~Grüner Pfad~Grüner Pfad~";}
    if (n=="A5") {o="~Wasserweg~Wasserweg~Wasserweg~";}
    if (n=="A6") {o="~Ruinental~Ruinental~Ruinental~";}
    if (n=="A7") {o="~Trainerturm~Trainerturm~Trainerturm~";}
    if (n=="A8") {o="~Schluchteingang~Schluchteingang~Schluchteingang~";}
    if (n=="A9") {o="~7-Schatzschlucht~7-Schatzschlucht~7-Schatzschlucht~";}
    if (n=="AA") {o="~Tanibo-Ruinen~Tanibo-Ruinen~Tanibo-Ruinen~";}
    if (n=="AB") {o="~Eiland 22~Eiland 22~Eiland 22~";}
    if (n=="AC") {o="~Eiland 23~Eiland 23~Eiland 23~";}
    if (n=="AD") {o="~Eiland 24~Eiland 24~Eiland 24~";}
    if (n=="AE") {o="~Nabelfelsen~Nabelfelsen~Nabelfelsen~";}
    if (n=="AF") {o="~Glutberg~Glutberg~Glutberg~";}
    if (n=="B0") {o="~Beerenforst~Beerenforst~Beerenforst~";}
    if (n=="B1") {o="~Eiskaskadenhöhle~Eiskaskadenhöhle~Eiskaskadenhöhle~";}
    if (n=="B2") {o="~Rocketlager~Rocketlager~Rocketlager~";}
    if (n=="B3") {o="~Trainerturm~Trainerturm~Trainerturm~";}
    if (n=="B4") {o="~Punktloch~Punktloch~Punktloch~";}
    if (n=="B5") {o="~Verlorene Höhle~Verlorene Höhle~Verlorene Höhle~";}
    if (n=="B6") {o="~Musterbuschwald~Musterbuschwald~Musterbuschwald~";}
    if (n=="B7") {o="~Wandelhöhle~Wandelhöhle~Wandelhöhle~";}
    if (n=="B8") {o="~Tanibo-Kammern~Tanibo-Kammern~Tanibo-Kammern~";}
    if (n=="B9") {o="~Tri-Eiland Tunnel~Tri-Eiland Tunnel~Tri-Eiland Tunnel~";}
    if (n=="BA") {o="~Tanibo-Schlüssel~Tanibo-Schlüssel~Tanibo-Schlüssel~";}
    if (n=="BB") {o="~Entstehungsinsel~Entstehungsinsel~Entstehungsinsel~";}
    if (n=="BC") {o="~Einamon Kammer~Einamon Kammer~Einamon Kammer~";}
    if (n=="BD") {o="~Pezwulp Kammer~Pezwulp Kammer~Pezwulp Kammer~";}
    if (n=="BE") {o="~Dreiecke Kammer~Dreiecke Kammer~Dreiecke Kammer~";}
    if (n=="BF") {o="~Vierzisse Kammer~Vierzisse Kammer~Vierzisse Kammer~";}
    if (n=="C0") {o="~Fünibisku Kammer~Fünibisku Kammer~Fünibisku Kammer~";}
    if (n=="C1") {o="~Lilechs Kammer~Lilechs Kammer~Lilechs Kammer~";}
    if (n=="C2") {o="~Sieborbia Kammer~Sieborbia Kammer~Sieborbia Kammer~";}
    if (n=="C3") {o="~Glutberg-Spa~Glutberg-Spa~Glutberg-Spa~";}
    if (n=="C4") {o="~Prismania-City-Einkaufszentrum~Prismania-City-Einkaufszentrum~Prismania-City-Einkaufszentrum~";}
    if (n=="C5") {o="~Team Aqua's Versteck~Team Aqua's Versteck~Team Aqua's Versteck~";}
    if (n=="C6") {o="~Team Magma's Versteck~Team Magma's Versteck~Team Magma's Versteck~";}
    if (n=="C7") {o="~Wunderturm~Wunderturm~Wunderturm~";}
    if (n=="C8") {o="~Entstehungsinsel~Entstehungsinsel~Entstehungsinsel~";}
    if (n=="C9") {o="~Fern-Eiland~Fern-Eiland~Fern-Eiland~";}
    if (n=="CA") {o="~Höhlenatelier~Höhlenatelier~Höhlenatelier~";}
    if (n=="CB") {o="~Ozeanhöhle~Ozeanhöhle~Ozeanhöhle~";}
    if (n=="CC") {o="~Unterwasser~Unterwasser~Unterwasser~";}
    if (n=="CD") {o="~Terrahöhle~Terrahöhle~Terrahöhle~";}
    if (n=="CE") {o="~Unterwasser~Unterwasser~Unterwasser~";}
    if (n=="CF") {o="~Unterwasser~Unterwasser~Unterwasser~";}
    if (n=="D0") {o="~Unterwasser~Unterwasser~Unterwasser~";}
    if (n=="D1") {o="~Wüstentunnel~Wüstentunnel~Wüstentunnel~";}
    if (n=="D2") {o="~Wandelhöhle~Wandelhöhle~Wandelhöhle~";}
    if (n=="D3") {o="~Nabelfelsen~Nabelfelsen~Nabelfelsen~";}
    if (n=="D4") {o="~Trainerberg~Trainerberg~Trainerberg~";}
    if (n=="D5") {o="~ ~ ~ ~";}
    if (n=="D6") {o="~ ~ ~ ~";}
    if (n=="D7") {o="~ ~ ~ ~";}
    if (n=="D8") {o="~ ~ ~ ~";}
    if (n=="D9") {o="~ ~ ~ ~";}
    if (n=="DA") {o="~ ~ ~ ~";}
    if (n=="DB") {o="~ ~ ~ ~";}
    if (n=="DC") {o="~ ~ ~ ~";}
    if (n=="DD") {o="~ ~ ~ ~";}
    if (n=="DE") {o="~ ~ ~ ~";}
    if (n=="DF") {o="~ ~ ~ ~";}
    if (n=="E0") {o="~ ~ ~ ~";}
    if (n=="E1") {o="~ ~ ~ ~";}
    if (n=="E2") {o="~ ~ ~ ~";}
    if (n=="E3") {o="~ ~ ~ ~";}
    if (n=="E4") {o="~ ~ ~ ~";}
    if (n=="E5") {o="~ ~ ~ ~";}
    if (n=="E6") {o="~ ~ ~ ~";}
    if (n=="E7") {o="~ ~ ~ ~";}
    if (n=="E8") {o="~ ~ ~ ~";}
    if (n=="E9") {o="~ ~ ~ ~";}
    if (n=="EA") {o="~ ~ ~ ~";}
    if (n=="EB") {o="~ ~ ~ ~";}
    if (n=="EC") {o="~ ~ ~ ~";}
    if (n=="ED") {o="~ ~ ~ ~";}
    if (n=="EE") {o="~ ~ ~ ~";}
    if (n=="EF") {o="~ ~ ~ ~";}
    if (n=="F0") {o="~ ~ ~ ~";}
    if (n=="F1") {o="~ ~ ~ ~";}
    if (n=="F2") {o="~ ~ ~ ~";}
    if (n=="F3") {o="~ ~ ~ ~";}
    if (n=="F4") {o="~ ~ ~ ~";}
    if (n=="F5") {o="~ ~ ~ ~";}
    if (n=="F6") {o="~ ~ ~ ~";}
    if (n=="F7") {o="~ ~ ~ ~";}
    if (n=="F8") {o="~ ~ ~ ~";}
    if (n=="F9") {o="~ ~ ~ ~";}
    if (n=="FA") {o="~ ~ ~ ~";}
    if (n=="FB") {o="~ ~ ~ ~";}
    if (n=="FC") {o="~ ~ ~ ~";}
    if (n=="FD") {o="~ ~ ~ ~";}
    if (n=="FE") {o="~Durch Tausch erhalten~Durch Tausch erhalten~Durch Tausch erhalten~";}
    if (n=="FF") {o="~Schicksalhafte Begegnung~Schicksalhafte Begegnung~Schicksalhafte Begegnung~";}
    // Num
    t=n;
    if (w==0) {a=FI(o,"~",1);t+=" "+a;a=FI(o,"~",2);t+=a;a=FI(o,"~",3);t+=a;}
    // Ruby/Sapphire/Emerald/Fire/Leaf
    if (w==1||w==2||w==3) {a=FI(o,"~",1);t+=" "+a;}
    // Colosseum
    if (w==4) {a=FI(o,"~",2);t+=" "+a;}
    // XD
    if (w==5) {a=FI(o,"~",3);t+=" "+a;}
    return t;
}
function MoveDex(n,w) {
    var o=" ";
    // 1    2     3        4  5    6
    // ~Name~power~Accuracy~PP~Type~Desc~
    o="~Unbekannt~0~0%~5~Unbekannt~"+DecToHex(n,4)+" Unbekannt~";
    if (n==0) {o="~Nichts Ausgewählt~0~0%~0~Kein Typ~Nichts Ausgewählt...~";}
    if (n==1) {o="~Pfund~40~100%~35~Normal~Die Attacke schädigt das Ziel ohne zusätzliche Effekte.~";}
    if (n==2) {o="~Karateschlag~50~100%~25~Kampf~Dem Ziel wird Schaden zugefügt. Dabei ist die Volltrefferquote um 1 Stufe höher.~";}
    if (n==3) {o="~Duplexhieb~15~85%~10~Normal~Die Attacke fügt 2 bis 5 mal hintereinander Schaden zu und gehört zu den Serien-Attacken.~";}
    if (n==4) {o="~Kometenhieb~18~85%~15~Normal~Die Attacke fügt 2 bis 5 mal hintereinander Schaden zu und gehört zu den Serien-Attacken.~";}
    if (n==5) {o="~Megahieb~80~85%~20~Normal~Megahieb schädigt das Ziel ohne Zusatzeffekte.~";}
    if (n==6) {o="~Zahltag~40~100%~20~Normal~Verursacht Schaden und verteilt Pokedollar auf dem Boden, die der Spieler nach dem Kampf aufsammelt. Die Menge beträgt das Fünffache des Levels des Anwenders pro Einsatz. Münzamulett oder Glücksrauch verdoppeln die Menge des erhaltenen Geldes.~";}
    if (n==7) {o="~Feuerschlag~75~100%~15~Feuer~Schädigt das Ziel und besitzt eine Chance von 10% das Ziel zu verbrennen.~";}
    if (n==8) {o="~Eishieb~75~100%~15~Eis~Schädigt das Ziel und lässt es mit einer Wahrscheinlichkeit von 10% einfrieren.~";}
    if (n==9) {o="~Donnerschlag~75~100%~15~Elektro~Donnerschlag verursacht Schaden und paralysiert das Ziel mit einer Wahrscheinlichkeit von 10%.~";}
    if (n==10) {o="~Kratzer~40~100%~35~Normal~Die Attacke schädigt das Ziel ohne zusätzliche Effekte.~";}
    if (n==11) {o="~Klammer~55~100%~30~Normal~Die Attacke schädigt das Ziel ohne zusätzliche Effekte.~";}
    if (n==12) {o="~Guillotine~1~30%~5~Normal~Guillotine zählt zu den sogenannten K.O.-Attacken. Landet der Anwender einen Treffer, wird das Ziel dadurch sofort besiegt. Anders als die meisten anderen Attacken besitzt Guillotine keine feste Trefferchance und wird auch nicht von Veränderungen an Genauigkeit und Fluchtwert beeinflusst.~";}
    if (n==13) {o="~Klingensturm~80~100%~10~Normal~In der ersten Runde wird ein Klingensturm entfacht, wobei der Anwender während der Aufladerunde nicht ausgetauscht werden kann und auch den Angriffen des Gegners ausgesetzt ist. In der zweiten Runde wird mit einer erhöhten Volltrefferquote angegriffen.~";}
    if (n==14) {o="~Schwerttanz~0~0%~30~Normal~Schwerttanz erhöht den Angriff des Anwenders um zwei Stufen. Hat dieser Statuswert bereits Stufe 6 erreicht, schlägt die Attacke fehl.~";}
    if (n==15) {o="~Zerschneider~50~95%~30~Normal~Zerschneider schadet dem Ziel ohne Zusatzeffekte.~";}
    if (n==16) {o="~Windstoß~40~100%~35~Flug~Diese Attacke schädigt den Gegner ohne Zusatzeffekte. Befindet sich der Gegner gerade durch Einsatz von z.B. Fliegen oder Sprungfeder in der Luft, richtet diese Attacke doppelten Schaden an.~";}
    if (n==17) {o="~Flügelschlag~60~100%~35~Flug~Die Attacke schädigt das Ziel ohne zusätzliche Effekte.~";}
    if (n==18) {o="~Wirbelwind~0~100%~20~Normal~Das gegnerische Pokemon wird ausgetauscht und der Gegner schickt ein anderes kampffähiges Pokemon in den Kampf. Da Wirbelwind eine niedrige Priorität von -6 hat, wird sie nach vielen anderen Attacken eingesetzt. Sie schlägt fehl, wenn der Gegner kein weiteres kampffähiges Pokemon mehr besitzt.~";}
    if (n==19) {o="~Fliegen~70~95%~15~Flug~Diese Attacke verursacht Schaden. In der Runde, in der Fliegen ausgewählt wurde, fliegt der Anwender in die Luft und greift in der nächsten Runde an. Ist Fliegen erst einmal ausgewählt, kann der Anwender in der nächsten Runde nicht ausgetauscht werden. AP werden erst beim Einsatz der Attacke in der zweiten Runde abgezogen.~";}
    if (n==20) {o="~Klammergriff~15~75%~20~Normal~Klammergriff verursacht Schaden. Dem Ziel werden 1/8 seiner maximalen KP in jeder Runde abgezogen, zusätzlich zu dem Schaden beim Einsatz der Attacke. Klammergriff dauert 4 bis 5 Runden an. Hält der Anwender Griffklaue, sind es immer 7 Runden. Der Gegner kann während dieser Zeit normal agieren, außer sich austauschen lassen oder fliehen. Trägt der Anwender Klammerband, so werden dem Ziel jede Runde 1/6 seiner maximalen KP abgezogen.~";}
    if (n==21) {o="~Slam~80~75%~20~Normal~Die Attacke schädigt das Ziel ohne zusätzliche Effekte.~";}
    if (n==22) {o="~Rankenhieb~35~100%~10~Pflanze~Die Attacke schädigt das Ziel ohne zusätzliche Effekte.~";}
    if (n==23) {o="~Stampfer~65~100%~20~Normal~Stampfer schädigt den Gegner und lässt ihn mit einer Chance von 30% zurückschrecken. Die Stärke verdoppelt sich auf 130, wenn das Ziel Komprimator eingesetzt hat.~";}
    if (n==24) {o="~Doppelkick~30~100%~30~Kampf~Die Attacke verursacht Schaden, trifft zweimal in Folge und ist eine Serien-Attacke. Jeder einzelne Treffer besitzt eine eigene Volltrefferquote. Der Angriff wird auch fortgesetzt, wenn ein Delegator zerstört wurde.~";}
    if (n==25) {o="~Megakick~120~75%~5~Normal~Die Attacke schädigt das Ziel ohne zusätzliche Effekte.~";}
    if (n==26) {o="~Sprungkick~70~95%~25~Kampf~Sprungkick schädigt das Ziel; geht die Attacke daneben, erhält der Anwender die Hälfte seiner maximalen KP als Rückstoßschaden. Wenn es gegen ein Geist-Pokemon eingesetzt wird, gilt es immer als Misserfolg und geht daneben.~";}
    if (n==27) {o="~Fegekick~60~85%~15~Kampf~Fegekick schädigt das Ziel und lässt es mit einer Chance von 30% zurückschrecken.~";}
    if (n==28) {o="~Sandwirbel~0~100%~15~Boden~Senkt die Genauigkeit des Ziels um eine Stufe. Die Genauigkeit kann nicht weiter gesenkt werden, wenn sie die Stufe -6 erreicht hat.~";}
    if (n==29) {o="~Kopfnuss~70~100%~15~Normal~Schadet dem Ziel und lässt es mit einer Wahrscheinlichkeit von 30% zurückschrecken.~";}
    if (n==30) {o="~Hornattacke~65~100%~25~Normal~Die Attacke schädigt das Ziel ohne zusätzliche Effekte.~";}
    if (n==31) {o="~Furienschlag~15~85%~20~Normal~Die Attacke fügt 2 bis 5 mal hintereinander Schaden zu und gehört zu den Serien-Attacken.~";}
    if (n==32) {o="~Hornbohrer~1~30%~5~Normal~Landet der Anwender einen Treffer, wird das Ziel sofort besiegt. Die Attacke schlägt fehl, wenn der Level des Ziels höher ist als der Level des Anwenders.~";}
    if (n==33) {o="~Tackle~35~95%~35~Normal~Die Attacke schädigt das Ziel ohne zusätzliche Effekte.~";}
    if (n==34) {o="~Bodyslam~85~100%~15~Normal~Verursacht Schaden und paralysiert das Ziel mit einer Wahrscheinlichkeit von 30%.~";}
    if (n==35) {o="~Wickel~15~85%~20~Normal~Wickel verursacht Schaden. Dem Ziel werden 1/8 seiner maximalen KP in jeder Runde abgezogen, zusätzlich zu dem Schaden beim Einsatz der Attacke. Trägt der Anwender ein Klammerband, beträgt der Schaden 1/6 der maximalen KP des Ziels. Wickel dauert 4 bis 5 Runden an.~";}
    if (n==36) {o="~Bodycheck~90~85%~20~Normal~Bodycheck schadet dem Ziel. Der Anwender erleidet selbst 25% des angerichteten Schadens durch Rückstoss.~";}
    if (n==37) {o="~Fuchtler~90~100%~20~Normal~Die Attacke fügt Schaden zu und dauert 2 bis 3 Runden. In diesen Runden kann das ausführende Pokemon weder ausgetauscht werden noch kann es eine andere Attacke einsetzen. Anschließend wird der Anwender durch Fuchtler verwirrt. Es wird nur ein AP abgezogen, wenn die Attacke ausgewählt wird, nicht aber in jeder Runde.~";}
    if (n==38) {o="~Risikotackle~120~100%~15~Normal~Risikotackle verursacht bei einem Treffer Schaden, der Anwender erleidet 33% des angerichteten Schadens als Rückstoßschaden.~";}
    if (n==39) {o="~Rutenschlag~0~100%~30~Normal~Rutenschlag senkt die Verteidigung des Ziels um 1 Stufe.~";}
    if (n==40) {o="~Giftstachel~15~100%~35~Gift~Schädigt das Ziel und vergiftet es mit einer Chance von 30%.~";}
    if (n==41) {o="~Duonadel~25~100%~20~Käfer~Die Attacke fügt zweimal hintereinander Schaden zu und jeder Treffer vergiftet das Ziel mit einer Chance von 20%. Es handelt sich hierbei um eine Serien-Attacke. Jeder Treffer hat eine unabhängige Volltrefferchance und Volltreffer verstärken nur den Treffer, bei dem sie auftreten.~";}
    if (n==42) {o="~Nadelrakete~14~85%~20~Käfer~Die Attacke fügt 2 bis 5 mal hintereinander Schaden zu und gehört zu den Serien-Attacken.~";}
    if (n==43) {o="~Silberblick~0~100%~30~Normal~Die Verteidigung des gegnerischen Pokemon sinkt um eine Stufe.~";}
    if (n==44) {o="~Biss~60~100%~25~Dunkel~Biss verursacht Schaden und lässt das Ziel mit einer Wahrscheinlichkeit von 30% zurückschrecken.~";}
    if (n==45) {o="~Heuler~0~100%~40~Normal~Heuler senkt den Angriff des Ziels um 1 Stufe.~";}
    if (n==46) {o="~Brüller~0~100%~20~Normal~Brüller beendet den Kampf gegen wilde Pokemon, sofern das Level des Anwenders höher ist als das des Ziels. Lediglich in Kämpfen gegen wilde Pokemon während einer Inselprüfung hat Brüller keinen Effekt. In Trainerkämpfen wird hingegen das Ziel gegen ein anderes Pokemon des Trainers ausgetauscht. Hat der Trainer kein anderes Pokemon mehr, schlägt Brüller fehl.~";}
    if (n==47) {o="~Gesang~0~55%~15~Normal~Der Gegner wird in Schlaf versetzt.~";}
    if (n==48) {o="~Superschall~0~55%~20~Normal~Superschall verwirrt das Ziel.~";}
    if (n==49) {o="~Ultraschall~1~90%~20~Normal~Ultraschall verursacht einen festen Schaden von 20 KP. Diese Höhe wird nicht durch Typeinflüsse oder andere Effekte beeinflusst.~";}
    if (n==50) {o="~Aussetzer~0~55%~20~Normal~Aussetzer blockiert die zuletzt eingesetzte Attacke des Ziels für 4 Runden, das heißt, dass das Ziel so lange die Attacke nicht benutzen kann. Die Blockade kann durch Austauschen aufgehoben werden. Stehen dem Ziel keine anderen Attacken zur Wahl, muss es Verzweifler einsetzen.~";}
    if (n==51) {o="~Säure~40~100%~30~Gift~Schädigt den Gegner und senkt mit einer Wahrscheinlichkeit von 10% seine Spezial-Verteidigung um 1 Stufe. Säure senkt die Spezial-Verteidigung des Gegners nicht mehr, wenn er die Stufe -6 erreicht hat, oder wenn der Gegner einen Delegator hat.~";}
    if (n==52) {o="~Glut~40~100%~25~Feuer~Schadet dem Ziel und verbrennt es mit einer Chance von 10%.~";}
    if (n==53) {o="~Flammenwurf~95~100%~15~Feuer~Schädigt das Ziel und verbrennt es mit einer Wahrscheinlichkeit von 10%.~";}
    if (n==54) {o="~Weißnebel~0~0%~30~Eis~Weißnebel verhindert fünf Runden lang Statuswertveränderungen des Anwenders durch den Gegner. Würde eine Attacke nur eine Statuswertveränderung bewirken, wie Telekinese oder Heuler, so schlägt diese fehl. Weißnebel hat keinen Einfluss auf Statuswertveränderungen, die als Nebeneffekt von einigen Attacken auftreten, wie z.B. bei Säure oder Psychokinese. Weißnebel hebt keine bereits bestehenden Statuswertveränderungen auf, verhindert nicht, dass der Anwender selbst seine Statuswerte verändert und verhindert die Statuswertveränderungen durch Paralyse und Verbrennung nicht.~";}
    if (n==55) {o="~Aquaknarre~40~100%~25~Wasser~Die Attacke schädigt das Ziel ohne zusätzliche Effekte.~";}
    if (n==56) {o="~Hydropumpe~120~80%~5~Wasser~Die Attacke schädigt das Ziel ohne zusätzliche Effekte.~";}
    if (n==57) {o="~Surfer~95~100%~15~Wasser~Die Attacke richtet Schaden an. Wenn das angegriffene Pokemon Taucher eingesetzt hat, verdoppelt sich der erhaltene Schaden. Der Partner wird in Doppel- und Dreierkämpfen auch getroffen.~";}
    if (n==58) {o="~Eisstrahl~95~100%~10~Eis~Eisstrahl verursacht Schaden und friert das Ziel mit einer Wahrscheinlichkeit von 10% ein.~";}
    if (n==59) {o="~Blizzard~120~70%~5~Eis~Blizzard fügt dem Gegner Schaden zu und friert ihn mit einer Wahrscheinlichkeit von 10% ein. Blizzard trifft bei Hagel unabhängig von Veränderungen an Genauigkeit und Fluchtwert immer.~";}
    if (n==60) {o="~Psystrahl~65~100%~20~Psycho~Psystrahl verursacht Schaden und verwirrt das Ziel mit einer Wahrscheinlichkeit von 10%.~";}
    if (n==61) {o="~Blubbstrahl~65~100%~20~Wasser~Schadet dem Ziel und verringert mit einer Wahrscheinlichkeit von 10% seine Initiative um eine Stufe.~";}
    if (n==62) {o="~Aurorastrahl~65~100%~20~Eis~Aurorastrahl verursacht Schaden und senkt bei einem Treffer mit einer Wahrscheinlichkeit von 10% den Angriff des Ziels um eine Stufe.~";}
    if (n==63) {o="~Hyperstrahl~150~90%~5~Normal~Hyperstrahl verursacht Schaden. Der Rückstoß der Attacke bewirkt, dass der Anwender in der nächsten Runde aussetzen muss, auch, wenn das Ziel durch Hyperstrahl besiegt wird. Dabei kann er nicht ausgewechselt werden und auch sonst kann keine Handlung vollzogen werden. Schlägt die Attacke fehl, zum Beispiel durch Senkung der Genauigkeit oder den Einsatz von Schutzschild, muss der Anwender in der nächsten Runde nicht aussetzen. Besitzt der Anwender die Fähigkeit Schnarchnase, so fällt der negative Effekt dieser Fähigkeit und der negative Effekt von Hyperstrahl auf die gleiche Runde, sodass der Anwender in der zweiten Runde wieder angreifen kann.~";}
    if (n==64) {o="~Pikser~35~100%~35~Flug~Die Attacke schädigt das Ziel ohne zusätzliche Effekte.~";}
    if (n==65) {o="~Bohrschnabel~80~100%~20~Flug~Die Attacke schädigt das Ziel ohne zusätzliche Effekte.~";}
    if (n==66) {o="~Überroller~80~80%~25~Kampf~Überroller verursacht Schaden und der Anwender erhält 25% des angerichteten Schadens als Rückstoßschaden. Wenn der Anwender von Überroller zuerst angreift und sich mit dem Rückstoßschaden besiegt, erhält der Gegner keinen Schaden durch wiederkehrenden Schaden (wie durch Egelsamen). Rückstoßschaden aus der vorherigen Runde kann gekontert werden, wenn der Gegner in der nächsten Runde nicht angreift.~";}
    if (n==67) {o="~Fußkick~1~100%~20~Kampf~Der Schaden wird an dem Gewicht des Gegners kalkuliert. Je schwerer der Gegner, desto stärker ist die Attacke.~";}
    if (n==68) {o="~Konter~1~100%~20~Kampf~Wenn der zuletzt vor Einsatz von Konter dem Anwender zugefügte Schaden größer als 0 ist und durch eine physische Attacke zugefügt wurde, fügt Konter dem Verursacher doppelt so viel Schaden zu. Konter schlägt fehl, wenn der Anwender von keiner physischen Attacke getroffen wird. Konter ist zwar eine Kampf-Attacke, dies ändert jedoch nichts am Schaden, den die Attacke verursacht.~";}
    if (n==69) {o="~Geowurf~1~100%~20~Kampf~Geowurf richtet Schaden in Höhe des Levels des Angreifers an. Es kann somit maximal 100 KP Schaden verursachen.~";}
    if (n==70) {o="~Stärke~80~100%~15~Normal~Verursacht Schaden ohne Zusatzeffekte.~";}
    if (n==71) {o="~Absorber~20~100%~20~Pflanze~Schadet dem Ziel und füllt die KP des Anwenders um 50% des verursachten Schadens auf (es wird aufgerundet). Wird ein Gegner mit der Fähigkeit Kloakensoße angegriffen, verliert der Anwender KP, anstatt welche dazuzubekommen.~";}
    if (n==72) {o="~Megasauger~40~100%~10~Pflanze~Schadet dem Ziel und füllt die KP des Anwenders um 50% des verursachten Schadens auf (es wird aufgerundet). Wird ein Gegner mit der Fähigkeit Kloakensoße angegriffen, verliert der Anwender KP, anstatt welche dazuzubekommen.~";}
    if (n==73) {o="~Egelsamen~0~90%~10~Pflanze~Das Ziel wird bepflanzt. Am Ende jeder Runde verliert das Ziel 1/8 seiner maximalen KP und dieselbe Menge an KP werden dem aktiven Pokemon aufgefüllt (auch, wenn der ursprüngliche Anwender ausgetauscht wurde). Dies ist nicht in der Runde der Fall, in der das Pokemon auf der Anwenderseite besiegt wurde. Hat der Gegner weniger als 8 maximale KP, so wird ihm in jeder Runde nur 1 KP abgezogen.~";}
    if (n==74) {o="~Wachstum~0~0%~40~Normal~Der Angriffs- und der Spezial-Angriffs-Wert erhöhen sich jeweils um eine Stufe. Bei Sonnenschein erhöhen sich die genannten Statuswerte um zwei Stufen.~";}
    if (n==75) {o="~Rasierblatt~55~95%~25~Pflanze~Rasierblatt verursacht Schaden ohne zusätzliche Effekte und besitzt eine erhöhte Volltrefferquote.~";}
    if (n==76) {o="~Solarstrahl~120~100%~10~Pflanze~Diese Attacke verursacht Schaden. In der Runde, in der Solarstrahl ausgewählt wurde, badet der Anwender in Sonnenlicht und greift in der nächsten Runde an. Ist Solarstrahl einmal ausgewählt, kann der Anwender nicht ausgetauscht werden. Während Sonnentag aktiv ist, braucht der Anwender keine Aufladerunde; es kann sofort angegriffen werden. Ebenso verhält es sich, wenn der Anwender ein Energiekraut trägt; dieses wird damit aufgebraucht. Die Attacke hat nur eine Stärke von 60 anstatt von 120, wenn Sandsturm, Regen oder Hagel herrscht. AP werden erst nach einem erfolgreichen Angriff abgezogen; wenn Solarstrahl nicht vollständig ausgeführt wird, werden keine AP abgezogen und es zählt nicht als die zuletzt ausgeführte Attacke. Paralyse, Zurückschrecken oder Selbstverletzung durch Verwirrung beenden Solarstrahl. Schlaf, Einfrieren oder Gefangennahme durch Attacken wie Wickel lassen die Attacke nur pausieren, unterbrechen sie aber nicht. Wenn der Gegner Spiegeltrick während der Vorbereitungsrunde von Solarstrahl einsetzt, so kopiert Spiegeltrick die Attacke, die der Anwender vor Solarstrahl eingesetzt hat (wurde davor keine Attacke eingesetzt, schlägt es fehl).~";}
    if (n==77) {o="~Giftpuder~0~75%~35~Gift~Vergiftet den Gegner.~";}
    if (n==78) {o="~Stachelspore~0~75%~30~Pflanze~Das Ziel wird paralysiert.~";}
    if (n==79) {o="~Schlafpuder~0~75%~15~Pflanze~Das Ziel wird in Schlaf versetzt.~";}
    if (n==80) {o="~Blättertanz~70~100%~20~Pflanze~Die Attacke fügt Schaden zu und dauert 2 bis 3 Runden. In diesen Runden kann das ausführende Pokemon weder ausgetauscht werden noch kann es eine andere Attacke einsetzen. Anschließend wird der Anwender durch Blättertanz verwirrt. Es wird nur ein AP abgezogen, wenn die Attacke ausgewählt wird, nicht aber in jeder Runde.~";}
    if (n==81) {o="~Fadenschuss~0~95%~40~Käfer~Senkt die Initiative der Gegner um 2 Stufen.~";}
    if (n==82) {o="~Drachenwut~1~100%~10~Drachen~Drachenwut verursacht unabhängig von Schwächen und Resistenzen des Ziels stets 40 KP Schaden, bleibt jedoch gegen Ziele, die gegen Drachen-Attacken immun sind, weiterhin wirkungslos.~";}
    if (n==83) {o="~Feuerwirbel~15~70%~15~Feuer~Feuerwirbel verursacht Schaden und gehört zu den Klammerattacken.~";}
    if (n==84) {o="~Donnerschock~40~100%~30~Elektro~Donnerschock verursacht Schaden und paralysiert das Ziel mit einer Wahrscheinlichkeit von 10%.~";}
    if (n==85) {o="~Donnerblitz~95~100%~15~Elektro~Donnerblitz verursacht Schaden und paralysiert das Ziel mit einer Wahrscheinlichkeit von 10%.~";}
    if (n==86) {o="~Donnerwelle~0~100%~20~Elektro~Das Ziel wird bei Erfolg paralysiert.~";}
    if (n==87) {o="~Donner~120~70%~10~Elektro~Verursacht Schaden und paralysiert das Ziel mit einer Wahrscheinlichkeit von 30%. Donner trifft bei Regen unabhängig von Veränderungen an Genauigkeit und Fluchtwert immer, bei Sonnenschein nur mit einer Genauigkeit von 50%.~";}
    if (n==88) {o="~Steinwurf~50~90%~15~Stein~Die Attacke schädigt das Ziel ohne zusätzliche Effekte.~";}
    if (n==89) {o="~Erdbeben~100~100%~10~Boden~Fügt allen im Kampf befindlichen Pokemon in der Nähe außer dem Anwender selbst Schaden zu. Hat ein Pokemon Schaufler eingesetzt, trifft die Attacke mit doppelter Kraft.~";}
    if (n==90) {o="~Geofissur~1~30%~5~Boden~Landet der Anwender einen Treffer, wird das Ziel sofort besiegt. Die Attacke schlägt fehl, wenn der Level des Ziels höher ist als der Level des Anwenders. Die Genauigkeit ist abhängig von den Leveln des Anwenders und des Ziels.~";}
    if (n==91) {o="~Schaufler~60~100%~10~Boden~Diese Attacke verursacht Schaden. In der Runde, in der Schaufler ausgewählt wurde, gräbt sich der Anwender in die Erde ein und greift in der nächsten Runde an. Ist Schaufler einmal ausgewählt, kann der Anwender nicht ausgetauscht werden. AP werden erst nach einem erfolgreichen Angriff abgezogen; wenn Schaufler nicht vollständig ausgeführt wird, werden keine AP abgezogen und es zählt nicht als die zuletzt ausgeführte Attacke. Paralyse oder Selbstverletzung durch Verwirrung beenden Schaufler. Wenn der Anwender wegen Paralyse in der Vorbereitungsrunde nicht angreifen kann, so bleibt er unter der Erde bis er ausgewechselt wird oder Schaufler vollständig ausführt. Unter der Erde ist der Anwender gegen fast alle Attacken immun. Setzt der Gegner Erdbeben oder Intensität ein, kann der Anwender nicht ausweichen und erleidet doppelten Schaden (außer er ist aus anderen Gründen gegen diese Attacken immun); auch Geofissur kann nicht ausgewichen werden. Der Anwender kann von jeder Attacke getroffen werden, wenn in der Runde vor dem Einsatz von Schaufler Zielschuss oder Willensleser auf den Anwender eingesetzt wurde oder wenn der Gegner die Fähigkeit Schildlos hat. Er erleidet keinen Schaden durch Sandsturm oder Hagel. Wenn der Gegner Spiegeltrick während der Vorbereitungsrunde von Schaufler einsetzt, so kopiert Spiegeltrick die Attacke, die der Anwender vor Schaufler eingesetzt hat (wurde davor keine Attacke eingesetzt, schlägt es fehl).~";}
    if (n==92) {o="~Toxin~0~85%~10~Gift~Das Ziel wird schwer vergiftet. Der Schaden wird am Ende jeder Runde um 1/16 erhöht. Das Ziel kann nicht vergiftet werden, wenn es einen Delegator hat, bereits von eine primären Statusveränderung betroffen ist oder gegen Vergiftung immun ist.~";}
    if (n==93) {o="~Konfusion~50~100%~25~Psycho~Schädigt das Ziel und hat eine 10%-Chance, das angegriffene Pokemon zu verwirren.~";}
    if (n==94) {o="~Psychokinese~90~100%~10~Psycho~Schadet dem Ziel und hat eine Chance von 10%, die Spezial-Verteidigung um eine Stufe zu senken. In der ersten Generation senkt Psychokinese den Spezial-Wert des Gegners mit einer Chance von 30%.~";}
    if (n==95) {o="~Hypnose~0~60%~20~Psycho~Der Gegner wird in Schlaf versetzt.~";}
    if (n==96) {o="~Meditation~0~0%~40~Psycho~Meditation erhöht den Angriff des Anwenders um 1 Stufe.~";}
    if (n==97) {o="~Agilität~0~0%~30~Psycho~Agilität erhöht die Initiative des Anwenders um zwei Stufen.~";}
    if (n==98) {o="~Ruckzuckhieb~40~100%~30~Normal~Die Attacke verursacht Schaden und besitzt eine erhöhte Priorität von +1. Benutzt der Gegner in derselben Runde eine Attacke mit einer niedrigeren Priorität als Ruckzuckhieb, wird Ruckzuckhieb immer als Erstes eingesetzt, unabhängig von der Initiative der Teilnehmer. Wenn die gegnerische Attacke dieselbe Priorität besitzt, wird die Reihenfolge wie immer durch die Initiative der Teilnehmer festgelegt.~";}
    if (n==99) {o="~Raserei~20~100%~20~Normal~Die Attacke fügt Schaden zu. Der Anwender muss die Attacke jede Runde neu auswählen. Dies kostet jedes mal einen AP.~";}
    if (n==100) {o="~Teleport~0~0%~20~Psycho~Durch den Einsatz von Teleport wird der Anwender mit einem anderen Pokemon aus dem Team ausgetauscht. Teleport hat eine negative Priorität und wird nach den meisten anderen Attacken eingesetzt.~";}
    if (n==101) {o="~Nachtnebel~1~100%~15~Geist~Nachtnebel richtet Schaden in Höhe des Levels des Anwenders an.~";}
    if (n==102) {o="~Mimikry~0~100%~10~Normal~Mimikry kopiert die vom Ziel zuletzt eingesetzte Attacke. Diese tritt bei der Attackenauswahl dann an die Stelle von Mimikry, wobei sie über 5 AP verfügt.~";}
    if (n==103) {o="~Kreideschrei~0~85%~40~Normal~Kreideschrei senkt die Verteidigung des Ziels um zwei Stufen. Hat dieser Statuswert bereits -6 erreicht, schlägt die Attacke fehl.~";}
    if (n==104) {o="~Doppelteam~0~0%~15~Normal~Der Fluchtwert des Anwenders steigt um 1 Stufe.~";}
    if (n==105) {o="~Genesung~0~0%~20~Normal~Genesung stellt 50% der maximalen KP des Anwenders wieder her.~";}
    if (n==106) {o="~Härtner~0~0%~30~Normal~Härtner erhöht die Verteidigung des Anwenders um 1 Stufe.~";}
    if (n==107) {o="~Komprimator~0~0%~20~Normal~Erhöht den Fluchtwert des Anwenders um 2 Stufen. Die Attacke schlägt fehl, wenn der Wert 6 erreicht wird.~";}
    if (n==108) {o="~Rauchwolke~0~100%~20~Normal~Rauchwolke senkt die Genauigkeit des Zieles um 1 Stufe.~";}
    if (n==109) {o="~Konfusstrahl~0~100%~10~Geist~Das Ziel wird nach erfolgreicher Ausführung dieser Attacke verwirrt.~";}
    if (n==110) {o="~Panzerschutz~0~0%~40~Wasser~Panzerschutz erhöht die Verteidigung des Anwenders um 1 Stufe. Die Verteidigung wird nicht weiter erhöht sobald sie die Stufe 6 erreicht hat.~";}
    if (n==111) {o="~Einigler~0~0%~40~Normal~Erhöht die Verteidigung des Anwenders um 1 Stufe.~";}
    if (n==112) {o="~Barriere~0~0%~30~Psycho~Barriere erhöht den Verteidigungswert des Anwenders um 2 Stufen. Die Attacke schlägt fehl, wenn die Verteidigung des Anwenders Stufe 6 erreicht hat.~";}
    if (n==113) {o="~Lichtschild~0~0%~30~Psycho~Der Schaden, den der Anwender und seine Partner durch Spezial-Angriffe erleiden, wird fünf Runden lang halbiert.~";}
    if (n==114) {o="~Dunkelnebel~0~0%~30~Eis~Dunkelnebel setzt alle Statuswertveränderungen der aktiven Pokemon zurück.~";}
    if (n==115) {o="~Reflektor~0~0%~20~Psycho~Der Schaden, den der Anwender und seine Partner durch physische Angriffe erleiden, wird fünf Runden lang halbiert.~";}
    if (n==116) {o="~Energiefokus~0~0%~30~Normal~Erhöht Volltrefferquote des Anwenders um 2 Stufen. Energiefokus schlägt fehl, wenn Angriffplus oder Energiefokus bereits eingesetzt wurden.~";}
    if (n==117) {o="~Geduld~1~100%~10~Normal~Geduld besitzt eine erhöhte Priorität. Nachdem Geduld ausgewählt ist, kann der Anwender 2 Runden lang keine andere Attacke mehr auswählen, er kann allerdings noch ausgewechselt werden. Danach verursacht Geduld doppelt so viel Schaden, wie der Anwender während der Runden erlitten hat.~";}
    if (n==118) {o="~Metronom~0~0%~10~Normal~Metronom wählt zufällig eine Attacke aus und führt diese dann aus. Die durch Metronom ausgewählte Attacke zählt als die zuletzt ausgeführte Attacke. Durch Metronom kann man auch eine Attacke ausführen, die durch Aussetzer blockiert wird.~";}
    if (n==119) {o="~Spiegeltrick~0~0%~20~Flug~Durch Einsatz von Spiegeltrick setzt das ausführende Pokemon die vom Gegner zuletzt benutzte Attacke ein. Eine so durch Spiegeltrick eingesetzte Attacke gilt als die zuletzt ausgeführte Attacke.~";}
    if (n==120) {o="~Finale~200~100%~5~Normal~Finale schadet allen Pokemon in der Umgebung und besiegt den Anwender.~";}
    if (n==121) {o="~Eierbombe~100~75%~10~Normal~Die Attacke schädigt das Ziel ohne zusätzliche Effekte.~";}
    if (n==122) {o="~Schlecker~20~100%~30~Geist~Schädigt den Gegner und paralysiert ihn mit einer Wahrscheinlichkeit von 30%.~";}
    if (n==123) {o="~Smog~20~70%~20~Gift~Schädigt das Ziel und vergiftet es mit einer Chance von 40%.~";}
    if (n==124) {o="~Schlammbad~65~100%~20~Gift~Das Ziel wird geschädigt und mit einer Chance von 30% vergiftet.~";}
    if (n==125) {o="~Knochenkeule~65~85%~20~Boden~Knochenkeule schadet und lässt das Ziel mit einer Wahrscheinlichkeit von 10% zurückschrecken.~";}
    if (n==126) {o="~Feuersturm~120~85%~5~Feuer~Schädigt das Ziel und verbrennt es mit einer Chance von 10%.~";}
    if (n==127) {o="~Kaskade~80~100%~15~Wasser~Schädigt das Ziel und lässt es mit einer Chance von 20% zurückschrecken.~";}
    if (n==128) {o="~Schnapper~35~75%~10~Wasser~Schnapper verursacht Schaden und hält das Ziel für vier bis fünf Runden in einem Quetschgriff gefangen. In dieser Zeit werden dem Ziel 1/8 seiner maximalen KP am Ende jeder Runde abgezogen und es kann nicht ausgetauscht werden oder fliehen.~";}
    if (n==129) {o="~Sternschauer~60~0%~20~Normal~Verursacht Schaden und hat eine 100% Trefferchance.~";}
    if (n==130) {o="~Schädelwumme~100~100%~15~Normal~Diese Attacke verursacht Schaden. In der Runde, in der Schädelwumme ausgewählt wurde, passiert nichts, außer dass die Verteidigung des Anwenders um 1 Stufe erhöht wird. In der nächsten Runde verursacht die Attacke Schaden, ein AP wird abgezogen und Schädelwumme zählt als die zuletzt eingesetzte Attacke. Der Anwender kann, wenn Schädelwumme einmal ausgewählt ist, nicht ausgewechselt werden, bis es ganz ausgeführt oder abgebrochen wurde.~";}
    if (n==131) {o="~Dornkanone~20~100%~15~Normal~Die Attacke fügt 2 bis 5 mal hintereinander Schaden zu und gehört zu den Serien-Attacken.~";}
    if (n==132) {o="~Umklammerung~10~100%~35~Normal~Schädigt das Ziel und senkt mit einer Chance von 10% dessen Initiative um 1 Stufe. Die Initiative wird nicht gesenkt, wenn sie schon Stufe -6 erreicht hat oder das Ziel einen Delegator hat.~";}
    if (n==133) {o="~Amnesie~0~0%~20~Psycho~Die Spezial-Verteidigung des Anwenders wird um zwei Stufen erhöht.~";}
    if (n==134) {o="~Psykraft~0~80%~15~Psycho~Senkt Genauigkeit des Zieles um 1 Stufe. Die Attacke schlägt fehl, wenn der Gegner einen Delegator hat oder vorher Weißnebel eingesetzt hat.~";}
    if (n==135) {o="~Weichei~0~100%~10~Normal~Weichei heilt 50% der maximalen KP des Anwenders.~";}
    if (n==136) {o="~Turmkick~85~90%~20~Kampf~Turmkick schädigt das Ziel. Geht die Attacke daneben, erhält der Anwender die Hälfte seiner maximalen KP als Rückstoßschaden.~";}
    if (n==137) {o="~Schlangenblick~0~75%~30~Normal~Bei Erfolg wird das Ziel paralysiert.~";}
    if (n==138) {o="~Traumfresser~100~100%~15~Psycho~Traumfresser verursacht Schaden und funktioniert nur, wenn das Ziel schläft. Ansonsten schlägt es fehl. Die Hälfte des verursachten Schadens werden dem Anwender an KP aufgefüllt, aufgerundet, falls ungerade.~";}
    if (n==139) {o="~Giftwolke~0~55%~40~Gift~Vergiftet den Gegner.~";}
    if (n==140) {o="~Stakkato~15~85%~20~Normal~Die Attacke fügt 2 bis 5 mal hintereinander Schaden zu und gehört zu den Serien-Attacken.~";}
    if (n==141) {o="~Blutsauger~20~100%~15~Käfer~Schadet dem Ziel und füllt die KP des Anwenders um 50% des verursachten Schadens auf (es wird aufgerundet). Wird ein Gegner mit der Fähigkeit Kloakensoße angegriffen, verliert der Anwender KP, anstatt welche dazuzubekommen.~";}
    if (n==142) {o="~Todeskuss~0~75%~10~Normal~Das Ziel wird in Schlaf versetzt.~";}
    if (n==143) {o="~Himmelsfeger~140~90%~5~Flug~Diese Attacke verursacht Schaden, besitzt eine erhöhte Volltrefferquote und hat zu 30% die Chance, dass der Gegner zurückschreckt.~";}
    if (n==144) {o="~Wandler~0~0%~10~Normal~Wandler ändert den Typ, die Statuswerte, die Statuswertveränderungen, die Attacken, die Spezies und den Ruf des Anwenders in die des Gegners. Jede Attacke, die kopiert wird, hat 5 AP.~";}
    if (n==145) {o="~Blubber~20~100%~30~Wasser~Schadet dem Ziel und verringert mit einer Wahrscheinlichkeit von 10% seine Initiative um eine Stufe.~";}
    if (n==146) {o="~Irrschlag~70~100%~10~Normal~Irrschlag schädigt das Ziel mit einer Chance von 20%, ihn zu verwirren.~";}
    if (n==147) {o="~Pilzspore~0~100%~15~Pflanze~Der Gegner wird in Schlaf versetzt.~";}
    if (n==148) {o="~Blitz~0~70%~20~Normal~Senkt die Genauigkeit des Ziels um eine Stufe.~";}
    if (n==149) {o="~Psywelle~1~80%~15~Psycho~Psywelle verursacht variablen Schaden.~";}
    if (n==150) {o="~Platscher~0~0%~40~Normal~er Einsatz von Platscher hat keinen Effekt.~";}
    if (n==151) {o="~Säurepanzer~0~0%~40~Gift~Der Verteidigungs-Wert des Anwenders erhöht sich um zwei Stufen. Hat dieser Statuswert bereits die Stufe 6 erreicht, schlägt die Attacke fehl.~";}
    if (n==152) {o="~Krabbhammer~90~85%~10~Wasser~Krabbhammer verursacht Schaden und die Attacke besitzt eine erhöhte Volltrefferquote.~";}
    if (n==153) {o="~Explosion~250~100%~5~Normal~Explosion schadet allen Pokemon in der Umgebung und besiegt den Anwender.~";}
    if (n==154) {o="~Kratzfurie~18~80%~15~Normal~Die Attacke fügt 2 bis 5 mal hintereinander Schaden zu und gehört zu den Serien-Attacken.~";}
    if (n==155) {o="~Knochmerang~50~90%~10~Boden~Die Attacke verursacht Schaden, trifft zweimal in Folge und ist eine Serien-Attacke. Jeder einzelne Treffer besitzt eine eigene Volltrefferquote.~";}
    if (n==156) {o="~Erholung~0~0%~10~Psycho~Durch Erholung schläft der Anwender ein und seine KP werden auf das Maximum aufgefüllt. Dabei werden Paralyse, Verbrennungen und Vergiftungen geheilt. Der Anwender schläft danach für die nächsten zwei Runden lang und wacht in der dritten Runde wieder auf.~";}
    if (n==157) {o="~Steinhagel~75~90%~10~Stein~Steinhagel schädigt den Gegner und lässt ihn mit einer Wahrscheinlichkeit von 30% zurückschrecken.~";}
    if (n==158) {o="~Hyperzahn~80~90%~15~Normal~Schädigt das Ziel und lässt es mit einer Chance von 10% zurückschrecken.~";}
    if (n==159) {o="~Schärfer~0~0%~30~Normal~Schärfer erhöht den Angriff des Anwenders um 1 Stufe.~";}
    if (n==160) {o="~Umwandlung~0~0%~30~Normal~Umwandlung ändert den Typ des Anwenders in den Typ einer seiner Attacken.~";}
    if (n==161) {o="~Triplette~80~100%~10~Normal~Die Attacke verursacht Schaden und hat eine Wahrscheinlichkeit von 20% den Gegner zu paralysieren, zu verbrennen oder zu vereisen.~";}
    if (n==162) {o="~Superzahn~1~90%~10~Normal~Halbiert die momentanen KP des gegnerischen Pokemon. Sollte die Anzahl der momentanen KP des Gegners ungerade und daher die Hälfte davon nicht ganzzahlig sein, wird der Schaden abgerundet. Sollte der Gegner noch alle KP besitzen, bleiben ihm nach Einsatz von Superzahn dann noch etwas mehr als 50% der KP übrig. Besitzt der Gegner hingegen nur noch ein KP, wird der Schaden durch Superzahn auf 1 KP aufgerundet.~";}
    if (n==163) {o="~Schlitzer~70~100%~20~Normal~Schädigt den Gegner und besitzt eine erhöhte Volltrefferquote.~";}
    if (n==164) {o="~Delegator~0~0%~10~Normal~Indem er 25 % seiner maximalen KP verbraucht, erstellt der Anwender einen Delegator mit der verbrauchten Zahl an KP. Mit einigen später genannten Ausnahmen treffen nun alle Attacken, die auf den Delegator-Anwender zielen, stattdessen den Delegator. Dabei werden alle das Ziel betreffenden Attacken-Effekte abgesehen vom direkten Schaden ignoriert, also haben die meisten Status-Attacken und Nebeneffekte von offensiven Attacken keine Wirkung. Der Delegator wird zerstört, wenn seine KP verbraucht sind.~";}
    if (n==165) {o="~Verzweifler~50~100%~1~Normal~Verzweifler ist keine erlernbare Attacke und kann nur dann eingesetzt werden, wenn das Pokémon keine AP mehr für seine Attacken hat. Es wird automatisch eingesetzt, wenn ein Angriff ausgeführt werden soll. Für die Attacke wurde nur 1 AP einprogrammiert, jedoch ist sie theoretisch unbegrenzt oft einsetzbar.~";}
    if (n==166) {o="~Nachahmer~0~0%~1~Normal~Die vom Ziel zuletzt eingesetzte Attacke wird dauerhaft erlernt, Nachahmer wird dafür vergessen. Farbeagle kann Nachahmer immer nur einmal erlernen. Es ist daher unmöglich ein Farbeagle zu haben, das die Attacke mehrmals beherrscht. Wird Nachahmer von einem verwandelten Pokémon eingesetzt, schlägt sie fehl. Wird eine Attacke in einem Link-Kampf erlernt, wird die Attacke nach dem Kampf wieder vergessen.~";}
    if (n==167) {o="~Dreifachkick~10~90%~10~Kampf~Dreifachkick verursacht bis zu dreimal in einer Runde Schaden und ist eine Serien-Attacke. Die Stärke jedes Treffers in Folge erhöht sich um 10; somit besitzt der letzte Treffer eine Stärke von 30. Anders als Doppelkick hat jeder der drei Angriffe eine eigene Berechnung der Trefferchance, somit kann nicht nur der erste Angriff daneben gehen. Wenn einer der Angriffe daneben geht, wird die Attacke beendet.~";}
    if (n==168) {o="~Raub~40~100%~10~Dunkel~Raub verursacht Schaden und stiehlt das Item des Zieles, falls dieses eins hält. Wenn das Ziel kein Item hält oder der Anwender bereits ein Item hält, wird nur Schaden verursacht und kein Item gestohlen.~";}
    if (n==169) {o="~Spinnennetz~0~100%~10~Käfer~Spinnennetz verhindert den Austausch des Ziels. Dieser Effekt bleibt solange bestehen, wie der Anwender am Kampf teilnimmt und kann nicht durch Stafette übergeben werden.~";}
    if (n==170) {o="~Willensleser~0~100%~5~Normal~Wenn Willensleser eingesetzt worden ist, dann trifft die nächste Attacke zu 100%. Auch, wenn das Ziel sich in den Vorbereitungsrunden von Attacken wie Fliegen, Taucher, Sprungfeder oder Schaufler befindet.~";}
    if (n==171) {o="~Nachtmahr~0~100%~15~Geist~Wenn das angegriffene Pokémon schläft und gegen dieses Nachtmahr eingesetzt wird, verliert dieses am Ende jeder Runde 1/4 der maximalen KP. Die Wirkung von Nachtmahr wird aufgehoben, sobald das Pokémon wieder aufwacht. Wird jedoch das aufwachende Pokémon in derselben Runde wieder in Schlaf versetzt, wirkt Nachtmahr weiterhin fort.~";}
    if (n==172) {o="~Flammenrad~60~100%~25~Feuer~Flammenrad schädigt den Gegner und besitzt eine Chance von 10%, diesen zu verbrennen. Ist der Anwender gefroren, taut er beim Einsatz von Flammenrad wieder auf.~";}
    if (n==173) {o="~Schnarcher~40~100%~15~Normal~Schnarcher kann nur dann eingesetzt werden, wenn der Anwender schläft oder die Fähigkeit Dauerschlaf besitzt; ansonsten schlägt es fehl. Schnarcher schädigt das Ziel und lässt es mit einer Chance von 30% zurückschrecken.~";}
    if (n==174) {o="~Fluch~0~0%~10~???~Der Effekt der Attacke ist bei Geister-Pokémon anders als bei denen anderer Typen; dies schließt auch Typenkombinationen mit dem Geister-Typ ein. Dabei wird der Typ während der Durchführung der Attacke in Betracht gezogen, nicht bei der Attackenauswahl.~";}
    if (n==175) {o="~Dreschflegel~1~100%~15~Normal~Schädigt den Gegner. Die Stärke der Attacke ist umso höher, je weniger KP der Anwender besitzt.~";}
    if (n==176) {o="~Umwandlung 2~0~100%~30~Normal~Umwandlung 2 ändert den Typ des Anwendes so, dass er gegen den Typ der vom Gegner zuletzt eingesetzten Attacke entweder immun oder resistent ist.~";}
    if (n==177) {o="~Luftstoß~100~95%~5~Flug~Schädigt den Gegner und besitzt eine erhöhte Volltrefferquote.~";}
    if (n==178) {o="~Baumwollsaat~0~85%~40~Pflanze~Baumwollsaat senkt die Initiative des Zieles um 2 Stufen.~";}
    if (n==179) {o="~Gegenschlag~1~100%~15~Kampf~Schädigt den Gegner. Die Stärke der Attacke ist umso höher, je weniger KP der Anwender besitzt.~";}
    if (n==180) {o="~Groll~0~100%~10~Geist~Dem Gegner werden vier AP von der zuletzt ausgeführten Attacke abgezogen. Groll kann durch Magiemantel abgewehrt werden.~";}
    if (n==181) {o="~Pulverschnee~40~100%~25~Eis~Pulverschnee schädigt das Ziel und lässt es mit einer Chance von 10% einfrieren. Das Ziel kann nicht eingefroren werden, wenn es vom Typ Eis ist, die Fähigkeit Magmapanzer besitzt, einen Delegator hat oder bereits einer primären Statusveränderung unterliegt.~";}
    if (n==182) {o="~Schutzschild~0~0%~10~Normal~Schützt den Anwender vor Schaden und Effekten von Attacken, die in derselben Runde gegen ihn eingesetzt werden. Die Attacke besitzt eine erhöhte Priorität. Die Attacke schützt nicht vor Schaden von vorherigen Attacken der erst am Ende der Runden verrechnet wird, wie Wickel, verschiedene Wetter oder den Attacken Seher und Kismetwunsch.~";}
    if (n==183) {o="~Tempohieb~40~100%~30~Kampf~Die Attacke verursacht Schaden und besitzt eine erhöhte Priorität von +1. Benutzt der Gegner in derselben Runde eine Attacke mit einer niedrigeren Priorität als Tempohieb, wird Tempohieb immer als Erstes eingesetzt, unabhängig von der Initiative der Teilnehmer. Wenn die gegnerische Attacke dieselbe Priorität besitzt, wird die Reihenfolge wie immer durch die Initiative der Teilnehmer festgelegt.~";}
    if (n==184) {o="~Grimasse~0~90%~10~Normal~Grimasse senkt die Initiative des Ziels um zwei Stufen. Wenn dieser Statuswert bereits die Stufe -6 erreicht hat, schlägt die Attacke fehl.~";}
    if (n==185) {o="~Finte~60~0%~20~Dunkel~Verursacht Schaden und trifft unabhängig von Veränderungen an Genauigkeit und Fluchtwert immer.~";}
    if (n==186) {o="~Bitterkuss~0~75%~10~Normal~Trifft die Attacke, wird das Ziel verwirrt.~";}
    if (n==187) {o="~Bauchtrommel~0~0%~10~Normal~Bauchtrommel zieht dem Anwender zunächst die Hälfte seiner maximalen KP ab. Infolgedessen wird der Angriffswert auf Stufe 6 erhöht, auch wenn der Wert vor dem Einsatz unter 0 lag.~";}
    if (n==188) {o="~Matschbombe~90~100%~10~Gift~Das Ziel wird geschädigt und mit einer Chance von 30% vergiftet. Das Ziel kann nicht vergiftet werden, wenn es einen Delegator benutzt, bereits einer primären Statusveränderung unterliegt, die Fähigkeit Immunität hat oder vom Typ Gift oder Stahl ist.~";}
    if (n==189) {o="~Lehmschelle~20~100%~10~Boden~Lehmschelle schadet dem Ziel und senkt dessen Genauigkeitswert um eine Stufe. Dieser Zusatzeffekt fällt weg, wenn die Genauigkeit des Ziels bereits auf -6 herabgestuft worden ist.~";}
    if (n==190) {o="~Octazooka~65~85%~10~Wasser~Octazooka schädigt den Gegner und senkt mit einer Wahrscheinlichkeit von 50% dessen Genauigkeit um 1 Stufe.~";}
    if (n==191) {o="~Stachler~0~0%~20~Boden~Stacheln werden vom Anwender ausgelegt, so nimmt jedes vom Gegner neu ausgeschickte Pokemon sofort Schaden.~";}
    if (n==192) {o="~Blitzkanone~100~50%~5~Elektro~Blitzkanone schädigt das Ziel und paralysiert es bei einem Treffer zu 100%.~";}
    if (n==193) {o="~Scharfblick~0~100%~40~Normal~Durch Einsatz dieser Attacke verlieren gegnerische Geist-Pokemon ihre Immunität gegen Normal- und Kampf-Attacken. Außerdem wird der Fluchtwert des angegriffenen Pokemon normalisiert.~";}
    if (n==194) {o="~Abgangsbund~0~0%~5~Geist~Wird der Anwender durch einen direkten Treffer eines gegnerischen Angriffs besiegt, nachdem er Abgangsbund eingesetzt hat, verliert auch das gegnerische Pokemon, das ihn besiegt hat, seine gesamten KP. Der Effekt von Abgangsbund wirkt solange, bis der Anwender ein weiteres Mal am Zug ist.~";}
    if (n==195) {o="~Abgesang~0~0%~5~Normal~Jedes im Kampf befindliche Pokemon, das von der Attacke getroffen wird, wird mit einem Countdown versehen. Der Countdown beginnt bei drei und zählt jede Runde um eins herunter. Hat der Countdown eines Pokemon null erreicht, wird es besiegt, sofern es nicht vorher ausgewechselt wird.~";}
    if (n==196) {o="~Eissturm~55~95%~15~Eis~Fügt dem Ziel Schaden zu und senkt dessen Initiative um 1 Stufe.~";}
    if (n==197) {o="~Scanner~0~0%~5~Kampf~Schützt den Anwender vor Schaden und Effekten von Attacken, die in derselben Runde gegen ihn eingesetzt werden. Die Attacke besitzt eine erhöhte Priorität.~";}
    if (n==198) {o="~Knochenhatz~25~80%~10~Boden~Die Attacke fügt 2 bis 5 mal hintereinander Schaden zu und gehört zu den Serien-Attacken.~";}
    if (n==199) {o="~Zielschuss~0~100%~5~Normal~Wenn Zielschuss eingesetzt worden ist, dann trifft die nächste Attacke zu 100%. Auch, wenn sich das Ziel im Moment in der Luft oder im Wasser befindet.~";}
    if (n==200) {o="~Wutanfall~90~100%~15~Drachen~Die Attacke fügt Schaden zu und dauert 2 bis 3 Runden. In diesen Runden kann das ausführende Pokemon weder ausgetauscht werden noch kann es eine andere Attacke einsetzen. Anschließend ist es verwirrt. Es wird nur ein AP abgezogen, wenn die Attacke ausgewählt wird, nicht aber in jeder Runde.~";}
    if (n==201) {o="~Sandsturm~0~0%~10~Stein~Der Einsatz von Sandsturm ändert das Wetter in Sandsturm und alle Kampfteilnehmer, die nicht vom Typ Boden, Gestein oder Stahl sind, erleiden Schaden in Höhe von 1/16 ihrer maximalen KP. Alle anderen bestehenden Wettereffekte werden aufgehoben. Der Sandsturm dauert fünf Runden lang, ein gehaltener Glattbrocken verlängert die Rundenzahl auf acht. Pokemon, die sich in der Vorbereitungsrunde von Taucher und Schaufler befinden, werden von Sandsturm nicht getroffen. Die Spezial-Verteidigung aller im Kampf befindlichen Gestein-Pokemon wird um 50% erhöht.~";}
    if (n==202) {o="~Gigasauger~60~100%~5~Pflanze~Schadet dem Ziel und füllt die KP des Anwenders um 50% des verursachten Schadens auf (es wird aufgerundet). Wird ein Gegner mit der Fähigkeit Kloakensoße angegriffen, verliert der Anwender KP, anstatt welche dazuzubekommen. Wenn der Anwender Großwurzel trägt, bekommt er 30% mehr KP als ohne getragenes Item; der angerichtete Schaden bleibt dabei gleich.~";}
    if (n==203) {o="~Ausdauer~0~0%~10~Normal~Wird der Anwender von einer Attacke getroffen, durch deren Schaden er normalerweise besiegt werden würde, dann bleibt ihm doch noch genau 1 KP übrig. Dies gilt auch, wenn der Anwender mehrmals in der gleichen Runde von einer Attacke getroffen wird.~";}
    if (n==204) {o="~Charme~0~100%~20~Normal~Senkt den Angriff des Gegners um zwei Stufen.~";}
    if (n==205) {o="~Walzer~30~90%~20~Stein~Diese Attacke verursacht Schaden. Der Anwender setzt Walzer automatisch für die folgenden fünf Runden ein. Die Attacke wird abgebrochen, wenn ein Angriff daneben geht oder abgewehrt wird. Die Stärke eines Treffers verdoppelt sich mit jedem Treffer in Folge. Wird vor Walzer Einigler eingesetzt, wird die Stärke von Walzer nochmal verdoppelt. Bei Neuausführung der Attacke geht die Stärke wieder auf die Ausgangsstärke 30 zurück.~";}
    if (n==206) {o="~Trugschlag~40~100%~40~Normal~Trugschlag schädigt das Ziel, kann das Ziel aber nicht besiegen: selbst wenn es nur noch 1 KP hat und Trugschlag gegen ihn eingesetzt wird, wird es nach der Attacke noch 1 KP haben.~";}
    if (n==207) {o="~Angeberei~0~90%~15~Normal~Angeberei erhöht den Angriff des Ziels um zwei Stufen und verwirrt es. Sollte das Ziel bereits verwirrt sein, oder ist es gegen Verwirrung immun, wird der Angriff trotzdem erhöht. Weil der Angriff des Ziels erhöht wird, erleidet dieses mehr Schaden, falls es sich selbst verletzt.~";}
    if (n==208) {o="~Milchgetränk~0~0%~10~Normal~Milchgetränk füllt die KP des Anwenders um bis zu 50% der maximalen KP auf.~";}
    if (n==209) {o="~Funkensprung~65~100%~20~Elektro~Schädigt das Ziel und besitzt eine Chance von 30%, das angegriffene Pokemon zu paralysieren.~";}
    if (n==210) {o="~Zornklinge~10~95%~20~Käfer~Die Attacke schädigt das Ziel. Die Stärke dieser Attacke verdoppelt sich nach jeder erfolgreichen Anwendung.~";}
    if (n==211) {o="~Stahlflügel~70~90%~25~Stahl~Stahlflügel verursacht Schaden und erhöht mit einer Wahrscheinlichkeit von 10% die Verteidigung des Anwenders um 1 Stufe.~";}
    if (n==212) {o="~Horrorblick~0~100%~5~Normal~Horrorblick verhindert den Austausch des Ziels. Dieser Effekt bleibt solange bestehen, wie der Anwender am Kampf teilnimmt und kann nicht durch Stafette übergeben werden. Wird allerdings das Ziel durch Stafette ausgewechselt, kann das eingewechselte Pokemon nicht mehr getauscht werden.~";}
    if (n==213) {o="~Anziehung~0~100%~15~Normal~Trifft Anziehung, löst sie den gleichnamigen Status aus, der den Gegner nur mit einer Chance von 50% angreifen lässt. Die Attacke funktioniert nur, wenn der Gegner vom anderen Geschlecht als der Anwender ist. Auch Pokemon von unbekanntem Geschlecht bleiben von Anziehung unberührt.~";}
    if (n==214) {o="~Schlafrede~0~0%~10~Normal~Schlafrede kann nur verwendet werden, wenn der Anwender schläft oder die Fähigkeit Dauerschlaf besitzt, ansonsten schlägt es fehl. Dann benutzt der Anwender zufällig eine seiner übrigen Attacken.~";}
    if (n==215) {o="~Vitalglocke~0~0%~5~Normal~Vitalglocke heilt alle im Kampf und im Team befindlichen Pokemon auf der Seite des Anwenders von allen primären Statusveränderungen.~";}
    if (n==216) {o="~Rückkehr~1~100%~20~Normal~Rückkehr schädigt das Ziel. Die Stärke ist von der Zuneigung abhängig.~";}
    if (n==217) {o="~Geschenk~1~90%~15~Normal~Geschenk schädigt das Ziel oder heilt es. Wenn es dem Ziel schadet, liegt die Stärke der Attacke zufällig bei 40, 80 oder 120.~";}
    if (n==218) {o="~Frustration~1~100%~20~Normal~Frustration schädigt den Gegner. Die Stärke ist von der Zuneigung abhängig.~";}
    if (n==219) {o="~Bodyguard~0~0%~25~Normal~Bodyguard verhindert, dass dem Anwender und seinen Teammitglieder fünf Runden lang primären Statusveränderungen und Verwirrungen zugefügt werden können. Dabei werden Pokemon nicht vor selbst verschuldeten Statusveränderungen, weder durch Attacken, wie Erholung oder Wutanfall, noch Trageitems, wie Heiß-Orb oder Giefebeere, geschützt.~";}
    if (n==220) {o="~Leidteiler~0~100%~20~Normal~Die KP des Anwenders und des Ziels werden addiert und anschließend geteilt. Die KP beider Teilnehmer werden dann auf diesen ausgerechneten Wert gesetzt. Ist der neue Wert höher als die Maximal-KP, wird die Maximal-KP wieder hergestellt.~";}
    if (n==221) {o="~Läuterfeuer~100~95%~5~Feuer~Der Gegner erleidet Schaden und wird mit einer Wahrscheinlichkeit von 50% verbrannt.~";}
    if (n==222) {o="~Intensität~1~100%~30~Boden~Intensität schädigt das Ziel. Die Stärke der Attacke variiert.~";}
    if (n==223) {o="~Wuchtschlag~100~50%~5~Kampf~Bei einem Treffer schädigt und verwirrt die Attacke das Ziel.~";}
    if (n==224) {o="~Vielender~120~85%~10~Käfer~Die Attacke schädigt das Ziel ohne zusätzliche Effekte.~";}
    if (n==225) {o="~Feuerodem~60~100%~20~Drachen~Schädigt den Gegner und paralysiert ihn mit einer Wahrscheinlichkeit von 30%.~";}
    if (n==226) {o="~Stafette~0~0%~40~Normal~Stafette wechselt den Anwender aus und überträgt alle momentanen Statuswertveränderungen auf das eingetauschte Pokemon. Auch die Wirkung von Attacken für sichere Treffer, wie Zielschuss, werden übertragen.~";}
    if (n==227) {o="~Zugabe~0~100%~5~Normal~Zugabe zwingt den Gegner, seine zuletzt eingesetzte Attacke noch 3 mal zu wiederholen, wenn er angreifen will. Hat die erzwungene Attacke mehrere Zielmöglichkeiten, wird ein zufälliger Gegner gewählt.~";}
    if (n==228) {o="~Verfolgung~40~100%~20~Dunkel~Verfolgung verursacht Schaden. Wenn das Ziel in der Runde ausgetauscht wird, bekommt Verfolgung eine Priorität von +7 und greift somit noch vor dem Austausch des Gegners an.~";}
    if (n==229) {o="~Turbodreher~20~100%~40~Normal~Turbodreher schädigt den Gegner und hebt alle Effekte auf, die den Anwender gefangen nehmen.~";}
    if (n==230) {o="~Lockduft~0~100%~20~Normal~Senkt den Fluchtwert des Gegners um zwei Stufen.~";}
    if (n==231) {o="~Eisenschweif~100~75%~15~Stahl~Schädigt das Ziel und senkt mit einer Wahrscheinlichkeit von 30% seine Verteidigung um 1 Stufe.~";}
    if (n==232) {o="~Metallklaue~50~95%~35~Stahl~Metallklaue schädigt das Ziel und erhöht mit einer Chance von 10% den Angriff des Anwenders um eine Stufe.~";}
    if (n==233) {o="~Überwurf~70~100%~10~Kampf~Überwurf schädigt den Gegner und besitzt eine Priorität von -1. Es wird also nach jeder Attacke mit normaler oder erhöhter Priorität eingesetzt, allerdings vor allen Attacken, die eine niedrigere Priorität haben.~";}
    if (n==234) {o="~Morgengrauen~0~0%~5~Normal~Je nach Wetter werden dem Anwender eine unterschiedliche Anzahl KP aufgefüllt.";}
    if (n==235) {o="~Synthese~0~0%~5~Pflanze~Füllt bei normalem Wetter 50%, bei Regen, Sandsturm und Hagel 25% und bei Sonnenschein 66,7% der KP des Anwenders auf.~";}
    if (n==236) {o="~Mondschein~0~0%~5~Normal~Abhängig vom Wetter wird beim Anwender eine unterschiedliche Anzahl an KP aufgefüllt.~";}
    if (n==237) {o="~Kraftreserve~1~100%~15~Normal~Der Typ dieser Attacke hängt vom jeweiligen Pokemon ab, das sie einsetzt.~";}
    if (n==238) {o="~Kreuzhieb~100~80%~5~Kampf~Verursacht Schaden und hat eine erhöhte Volltrefferquote.~";}
    if (n==239) {o="~Windhose~40~100%~20~Drachen~Windhose verursacht Schaden und lässt den Gegner mit einer Wahrscheinlichkeit von 20% zurückschrecken. Wird Windhose gegen einen Gegner eingesetzt, der Fliegen oder Sprungfeder einsetzt, so erhält der Gegner den doppelten Schaden.~";}
    if (n==240) {o="~Regentanz~0~0%~5~Wasser~Anwender erzeugt für fünf Runden einen Regenschauer. Jeder andere Wettereffekt wird dadurch aufgehoben. Sollte der Anwender einen Nassbrocken tragen, so hält der Regen acht anstatt fünf Runden an.~";}
    if (n==241) {o="~Sonnentag~0~0%~5~Feuer~Die Sonne brennt unbarmherzig fünf Runden lang. Dadurch werden Attacken vom Typ Feuer verstärkt.~";}
    if (n==242) {o="~Knirscher~80~100%~15~Dunkel~Knirscher verursacht Schaden. Die Verteidigung des Ziels wird mit einer Wahrscheinlichkeit von 20% um eine Stufe gesenkt.~";}
    if (n==243) {o="~Spiegelcape~1~100%~20~Psycho~Wenn der zuletzt vor Einsatz von Spiegelcape dem Anwender zugefügte Schaden größer als 0 ist und durch eine Spezial-Attacke zugefügt wurde, fügt Spiegelcape dem Verursacher doppelt so viel Schaden zu. Spiegelcape schlägt fehl, wenn der Anwender von keiner Spezial-Attacke getroffen wird.~";}
    if (n==244) {o="~Psycho-Plus~0~0%~10~Normal~Beim Einsatz von Psycho-Plus werden die (positiven wie negativen) Veränderungen der Statuswerte des Zieles übernommen. Betroffen davon sind die Werte für Angriff, Verteidigung, Spezial-Angriff, Spezial-Verteidigung, Initiative, Genauigkeit und Fluchtwert. Modifikationen dieser Werte durch getragene Items oder Fähigkeiten werden nicht übernommen.~";}
    if (n==245) {o="~Turbotempo~80~100%~5~Normal~Die Attacke verursacht Schaden und besitzt eine erhöhte Priorität von +2. Benutzt der Gegner in derselben Runde eine Attacke mit einer niedrigeren Priorität als Turbotempo, wird Turbotempo immer als Erstes eingesetzt, unabhängig von der Initiative der Teilnehmer.~";}
    if (n==246) {o="~Antik-Kraft~60~100%~5~Stein~Schadet dem Ziel und erhöht mit einer Wahrscheinlichkeit von 10% alle Statuswerte um eine Stufe (außer Genauigkeit und Fluchtwert).~";}
    if (n==247) {o="~Spukball~80~100%~15~Geist~Spukball schädigt das Ziel und senkt mit einer Chance von 20% dessen Spezial-Verteidigung.~";}
    if (n==248) {o="~Seher~80~90%~15~Psycho~Der Angriff erfolgt zwei Runden nachdem die Attacke eingesetzt wurde. In den Runden dazwischen können andere Attacken eingesetzt und sowohl der Anwender als auch das Ziel ausgetauscht oder besiegt werden. Es wird das Pokemon getroffen, was zum Zeitpunkt des Angriffs auf dem Feld steht. Wird dieses in der Runde besiegt, geht der Angriff ins Leere.~";}
    if (n==249) {o="~Zertrümmerer~20~100%~15~Kampf~Schädigt das Ziel und senkt mit einer Chance von 50% dessen Verteidigung.~";}
    if (n==250) {o="~Whirlpool~15~70%~15~Wasser~Whirlpool verursacht Schaden. Dem Ziel werden 1/8 seiner maximalen KP in jeder Runde abgezogen, zusätzlich zu dem Schaden beim Einsatz der Attacke. Whirlpool hat eine Genauigkeit von 85%, eine Stärke von 35 und dauert 4 bis 5 Runden an.~";}
    if (n==251) {o="~Prügler~10~100%~10~Dunkel~Prügler fügt dem Ziel Schaden von jedem im Team des Anwenders befindlichen Pokemon zu, das an keiner primären Statusveränderung leidet und das nicht besiegt ist.~";}
    if (n==252) {o="~Mogelhieb~40~100%~10~Normal~Mogelhieb trifft nur, wenn es in der ersten Runde eingesetzt wird, in der der Anwender am Kampf teilnimmt. Die Attacke trifft auch jedes Mal im ersten Zug, nachdem der Anwender ausgewechselt und später wieder eingewechselt worden ist.~";}
    if (n==253) {o="~Aufruhr~50~100%~10~Normal~Aufruhr verursacht Schaden und umgeht dabei Delegator. Der Anwender setzt Aufruhr für drei Runden ein und kann dabei keine andere Attacke einsetzen.~";}
    if (n==254) {o="~Horter~0~0%~10~Normal~Horter sammelt Energie für die Attacken Entfessler und Verzehrer und steigert bei jedem Einsatz die Verteidigung und Spezial-Verteidigung um je eine Stufe.~";}
    if (n==255) {o="~Entfessler~100~100%~10~Normal~Entfessler schlägt fehl, wenn vorher Horter nicht eingesetzt wurde. Wenn Horter davor eingesetzt wurde, verursacht Entfessler Schaden ohne Nebeneffekte.~";}
    if (n==256) {o="~Verzehrer~0~0%~10~Normal~Verzehrer schlägt fehl, wenn vorher Horter nicht eingesetzt wurde. Die Menge der KP, die durch Verzehrer aufgefüllt werden, hängen davon ab, wie oft der Anwender Horter eingesetzt hat.~";}
    if (n==257) {o="~Hitzewelle~100~90%~10~Feuer~Hitzewelle fügt dem Gegner Schaden zu und verbrennt ihn mit einer Wahrscheinlichkeit von 10%.~";}
    if (n==258) {o="~Hagelsturm~0~0%~10~Eis~Der verursachte Hagelsturm hält 5 Runden an und schadet allen Pokemon, außer denen vom Typ Eis.~";}
    if (n==259) {o="~Folterknecht~0~100%~15~Dunkel~Folterknecht hindert das Ziel daran, dass dieses dieselbe Attacke zweimal hintereinander zum Einsatz auswählen kann. Hat es nur eine Attacke zur Wahl, oder wurde es vorher nur auf eine Attacke limitiert, muss es jede zweite Runde Verzweifler einsetzen. Verzweifler wird von Folterknecht nicht beeinflusst; das Ziel kann Verzweifler mehrmals hintereinander einsetzen, wenn es sonst keine Attacken mehr übrig hat.~";}
    if (n==260) {o="~Schmeichler~0~100%~15~Dunkel~Erhöht den Spezial-Angriff des Ziel um eine Stufe und verwirrt es dafür.~";}
    if (n==261) {o="~Irrlicht~0~75%~15~Feuer~Das Ziel wird verbrannt.~";}
    if (n==262) {o="~Memento-Mori~0~100%~10~Dunkel~Der Anwender besiegt sich selbst. Dabei wird der Angriff und Spezial-Angriff des Gegners jeweils um zwei Stufen gesenkt. Trifft den Gegner auch, wenn er Fliegen eingesetzt hat.~";}
    if (n==263) {o="~Fassade~70~100%~20~Normal~Die Attacke schädigt das Ziel. Ist der Anwender von einer Paralyse, Vergiftung oder Verbrennung betroffen, verdoppelt sich die Stärke und steigt von 70 auf 140. Zusätzlich wird bei einer Verbrennung der Angriff des Anwenders beim Einsatz von Fassade nicht halbiert.~";}
    if (n==264) {o="~Power-Punch~150~100%~20~Kampf~Power-Punch fügt dem Ziel enormen Schaden zu. Am Anfang einer Runde lädt sich das Pokemon auf. Der eigentliche Angriff kommt meistens am Ende der Runde, da der Angriff eine niedrige Priorität besitzt. Der Anwender darf in dem Zeitraum keinen Schaden durch direkte Angriffe erleiden, da er ansonsten seinen Fokus verliert und nicht mehr angreifen kann. Wird stattdessen der Delegator getroffen, kann das Pokemon die Attacke ausführen.~";}
    if (n==265) {o="~Riechsalz~60~100%~10~Normal~Riechsalz schädigt das Ziel und greift mit doppelter Stärke an, wenn der Gegner paralysiert ist. In diesem Falle wird das Ziel allerdings auch von der Paralyse geheilt.~";}
    if (n==266) {o="~Spotlight~0~100%~20~Normal~Alle Attacken des gegnerischen Pokemon-Teams im Doppelkampf bzw. aller sich in der Nähe des Anwenders befindlichen Gegner im Dreierkampf, die nur ein einzelnes Pokemon als Ziel wählen, werden auf das ausführende Pokemon gezogen.~";}
    if (n==267) {o="~Natur-Kraft~0~95%~20~Normal~Abhängig von der Umgebung wird diese Attacke zu einer anderen Attacke.~";}
    if (n==268) {o="~Ladevorgang~0~100%~20~Elektro~Wenn der Anwender nach der Ausführung dieser Attacke eine Elektro-Attacke einsetzt, fügt diese doppelt so viel Schaden zu wie gewöhnlich.~";}
    if (n==269) {o="~Verhöhner~0~100%~20~Dunkel~Das Ziel kann über drei Runden hinweg ausschließlich Attacken einsetzen, die direkten Schaden verursachen. Dieser Effekt endet nach drei Runden oder wenn das Ziel ausgetauscht wird. Beherrscht das Ziel solche Attacken nicht oder hält ein Wahlitem und es ist eine Status-Attacke ausgewählt, so setzt es Verzweifler ein, bis der Effekt von Verhöhner endet.~";}
    if (n==270) {o="~Rechte Hand~0~100%~20~Normal~In einem Doppel- oder Dreierkampf wird die Basisstärke der Attacke des Partners durch Einsatz von Rechte Hand um 50% erhöht.~";}
    if (n==271) {o="~Trickbetrug~0~100%~10~Psycho~Tauscht gehaltenes Item mit dem des Gegners.~";}
    if (n==272) {o="~Rollenspiel~0~100%~10~Psycho~Rollenspiel ersetzt die Fähigkeit des Anwenders mit der Fähigkeit des Ziels.~";}
    if (n==273) {o="~Wunschtraum~0~100%~10~Normal~Am Ende der nächsten Runde erhält das ausführende Pokemon 50% seiner maximalen KP zurück. Das Pokemon kann zwischenzeitlich ausgetauscht werden. So wird das eingetauschte Pokemon von Wunschtraum geheilt, allerdings darf es im Verlauf der Runde nicht besiegt werden.~";}
    if (n==274) {o="~Zuschuss~0~100%~20~Normal~Zuschuss wählt eine zufällige Attacke eines Teampokemon aus und führt diese ganz aus. Eine von Zuschuss benutzte Attacke gilt als die zuletzt ausgeführte Attacke. Der Anwender kann durch Zuschuss auch eine Attacke einsetzen, die bei ihm selbst durch Aussetzer blockiert ist.~";}
    if (n==275) {o="~Verwurzler~0~100%~20~Pflanze~Erhöht pro Runde 1/16 der KP des Anwenders, dieser kann jedoch nicht mehr ausgetauscht werden.~";}
    if (n==276) {o="~Kraftkoloss~120~100%~5~Kampf~Fügt dem Ziel Schaden zu, senkt jedoch bei einem Treffer Angriff und Verteidigung des Anwenders jeweils um eine Stufe.~";}
    if (n==277) {o="~Magiemantel~0~100%~15~Psycho~Magiemantel reflektiert alle Attacken, die Statusveränderungen hervorrufen (z. B. Egelsamen, Donnerwelle oder Anziehung), zurück zum Anwender dieser Attacken. Auch Attacken, die zu Beginn des Einwechselns schädigen (z. B. Stachler) und Attacken wie Folterknecht und Verhöhner können reflektiert werden. Es werden alle Attacken reflektiert, die von Magiespiegel auch reflektiert werden.~";}
    if (n==278) {o="~Aufbereitung~0~100%~10~Normal~Durch den Einsatz von Aufbereitung kann der Anwender einmalig nutzbare Items, wie zum Beispiel Beeren, wieder verwenden, nachdem sie bereits verwendet wurden. Dies ist so oft möglich, wie Aufbereitung eingesetzt wird.~";}
    if (n==279) {o="~Vergeltung~60~100%~10~Kampf~Vergeltung schädigt den Gegner. Aufgrund einer Priorität von -4 wird diese Attacke stets zuletzt in einer Kampfrunde ausgeführt. Sollte das ausführende Pokemon in dieser Runde Schaden erlitten haben, so verdoppelt sich die Stärke der Attacke.~";}
    if (n==280) {o="~Durchbruch~75~100%~15~Kampf~Schädigt das Ziel. Bevor der Schaden zugefügt wird, werden die Effekte von Lichtschild, Reflektor und Auroraschleier von der Seite des Ziels entfernt. Die Effekte werden nicht aufgehoben, wenn Durchbruch daneben geht, es durch eine Schild-Attacke abgewehrt wird oder das Ziel immun gegen Durchbruch ist.~";}
    if (n==281) {o="~Gähner~0~100%~10~Normal~Gähner macht das Ziel schläfrig und sorgt so dafür, dass es am Ende der nächsten Runde einschläft. Gähner trifft unabhängig von Veränderungen an Genauigkeit und Fluchtwert immer.~";}
    if (n==282) {o="~Abschlag~20~100%~20~Dunkel~Abschlag verursacht Schaden. Trägt das getroffene Pokemon ein Item, wird 50% mehr Schaden verursacht und das getragene Item des Ziels wird entfernt. Wenn das Item entfernt wurde, kann es den gesamten Kampf über nicht mehr verwendet werden und auch durch ein Auswechseln eines der im Kampf befindlichen Pokemon wird es nicht mehr zurückgewonnen.~";}
    if (n==283) {o="~Notsituation~1~100%~5~Normal~Durch Einsatz von Notsituation werden die KP des Ziels mit den KP des Anwenders gleichgesetzt. Die Attacke schlägt fehl, wenn das Ziel weniger KP hat als der Anwender.~";}
    if (n==284) {o="~Eruption~150~100%~5~Feuer~Es wird Schaden mit veränderlicher Stärke angerichtet.~";}
    if (n==285) {o="~Wertewechsel~0~100%~10~Psycho~Die Fähigkeiten des Anwenders und des Ziels werden getauscht. Wirkungslos bei Wunderwache, Trugbild und Variabilität. Fähigkeiten, die normalerweise aktiviert werden, wenn das Pokemon in den Kampf geschickt wird (z. B. Bedroher), werden aktiviert, nachdem sie durch Fähigkeitstausch getauscht wurden. Wird der Anwender, nachdem er diese Attacke ausgeführt hat, ausgetauscht, erhält er seine ursprüngliche Fähigkeit zurück.~";}
    if (n==286) {o="~Begrenzer~0~100%~10~Psycho~Nach dem Einsatz von Begrenzer kann der Gegner Attacken, die dem Anwender ebenfalls bekannt sind, nicht mehr einsetzen.~";}
    if (n==287) {o="~Heilung~0~100%~20~Normal~Heilt den Anwender von Verbrennung, Vergiftung und Paralyse.~";}
    if (n==288) {o="~Nachspiel~0~100%~5~Geist~Wird der Anwender von Nachspiel vom Gegner angegriffen und dadurch besiegt, sinken die AP dieser Attacke des Gegners auf 0.~";}
    if (n==289) {o="~Übernahme~0~100%~10~Dunkel~Übernahme hat eine erhöhte Priorität von +4. Der Anwender wartet eine Status-Attacke des Gegners ab, um die Wirkung der Attacke des Gegners zu stehlen und auf sich selbst zu übertragen.~";}
    if (n==290) {o="~Geheimpower~70~100%~20~Normal~Geheimpower richtet Schaden an und erzeugt einen Effekt mit 30% Wahrscheinlichkeit. Der Schaden und der Effekt hängen von der Umgebung ab, da für die unterschiedlichen Umgebungen eine andere Attacke eingesetzt wird.~";}
    if (n==291) {o="~Taucher~60~100%~10~Wasser~Diese Attacke verursacht Schaden, allerdings erst nach einer Vorbereitungsrunde, in der der Anwender abtaucht. Wird das ausführende Pokemon von Surfer oder von Whirlpool getroffen, während es abgetaucht ist, erleidet es den doppelten Schaden.~";}
    if (n==292) {o="~Armstoß~15~100%~20~Kampf~Armstoß schädigt das Ziel und trifft 2 bis 5 Mal in einer Runde.~";}
    if (n==293) {o="~Tarnung~0~100%~20~Normal~Tarnung ändert den Typ des Anwenders im Kampf abhängig vom Umfeld des Kampfes.~";}
    if (n==294) {o="~Schweifglanz~0~100%~20~Käfer~Schweifglanz erhöht den Spezial-Angriff des Anwenders um drei Stufen. Hat dieser Statuswert bereits Stufe 6 erreicht, schlägt die Attacke fehl.~";}
    if (n==295) {o="~Scheinwerfer~70~100%~5~Psycho~Scheinwerfer schadet dem Ziel und senkt mit einer Wahrscheinlichkeit von 50% dessen Spezial-Verteidigung um eine Stufe.~";}
    if (n==296) {o="~Nebelball~70~100%~5~Psycho~Schädigt das Ziel und senkt mit einer Chance von 50% dessen Spezial-Angriff um eine Stufe.~";}
    if (n==297) {o="~Daunenreigen~0~100%~15~Flug~Senkt den Angriff des Ziels um 2 Stufen.~";}
    if (n==298) {o="~Taumeltanz~0~100%~20~Normal~Mit Ausnahme des Anwenders werden alle sich im Kampf und in der Nähe des Anwenders befindlichen Pokemon verwirrt.~";}
    if (n==299) {o="~Feuerfeger~85~90%~10~Feuer~Schadet dem Ziel und verbrennt es mit einer Chance von 10%. Die Attacke besitzt eine erhöhte Volltrefferquote.~";}
    if (n==300) {o="~Lehmsuhler~0~100%~15~Boden~Alle Elektro-Attacken, sowohl eigene als auch gegnerische sind um 50% schwächer als gewöhnlich. Der Effekt hält solange an, wie der Anwender aktiv am Kampf teilnimmt.~";}
    if (n==301) {o="~Frostbeule~30~90%~20~Eis~Frostbeule schädigt das Ziel über fünf Runden. Mit jeder Runde wird die Stärke der Attacke verdoppelt. Die Attacke wird abgebrochen, wenn ein Angriff daneben geht, abgewehrt wird oder der Anwender nicht angreifen konnte.~";}
    if (n==302) {o="~Nietenranke~60~100%~15~Pflanze~Nietenranke schädigt den Gegner und lässt ihn mit einer Wahrscheinlichkeit von 30% zurückschrecken.~";}
    if (n==303) {o="~Tagedieb~0~100%~10~Normal~Dem Anwender werden 50% seiner maximalen KP aufgefüllt.~";}
    if (n==304) {o="~Schallwelle~90~100%~10~Normal~Die Attacke schädigt das Ziel ohne zusätzliche Effekte.~";}
    if (n==305) {o="~Giftzahn~50~100%~15~Gift~Giftzahn schädigt das Ziel und kann es mit einer Chance von 50% schwer vergiften.~";}
    if (n==306) {o="~Zermalmklaue~75~95%~10~Normal~Schädigt das Ziel und senkt mit einer Wahrscheinlichkeit von 50% die Verteidigung des Ziels um 1 Stufe.~";}
    if (n==307) {o="~Lohekanonade~150~90%~5~Feuer~Lohekanonade verursacht Schaden ohne zusätzliche Effekte. Trifft die Attacke, muss der Angreifer in der nächsten Runde pausieren.~";}
    if (n==308) {o="~Aquahaubitze~150~90%~5~Wasser~Aquahaubitze verursacht Schaden ohne zusätzliche Effekte. Trifft die Attacke, muss der Anwender in der nächsten Runde pausieren.~";}
    if (n==309) {o="~Sternenhieb~100~85%~10~Stahl~Sternenhieb verursacht Schaden und erhöht mit einer Wahrscheinlichkeit von 20% den Angriff des Anwenders um 1 Stufe.~";}
    if (n==310) {o="~Erstauner~30~100%~15~Geist~Erstauner schädigt das Ziel und lässt es mit einer Wahrscheinlichkeit von 30% zurückschrecken.~";}
    if (n==311) {o="~Meteorologe~50~100%~10~Normal~Meteorologe fügt Schaden zu. Besteht ein Wettereffekt im Kampf, verdoppelt sich die Stärke von Meteorologe zu 100.~";}
    if (n==312) {o="~Aromakur~0~0%~5~Pflanze~Aromakur heilt alle im Kampf und im Team befindlichen Pokemon auf der Seite des Anwenders von allen primären Statusveränderungen.~";}
    if (n==313) {o="~Trugträne~0~100%~20~Dunkel~Die Spezial-Verteidigung des Ziels sinkt um zwei Stufen. Hat dieser Statuswert bereits die Stufe -6 erreicht, schlägt die Attacke fehl.~";}
    if (n==314) {o="~Windschnitt~55~95%~25~Flug~Schädigt den Gegner und hat eine erhöhte Volltrefferquote.~";}
    if (n==315) {o="~Hitzekoller~140~90%~5~Feuer~Schädigt das Ziel und senkt den Spezial-Angriff des Anwenders um zwei Stufen.~";}
    if (n==316) {o="~Schnüffler~0~100%~40~Normal~Schnüffler hebt bei gegnerischen Geist-Pokemon die Immunität gegen Normal- und Kampf-Attacken auf und normalisiert Veränderungen am gegnerischen Fluchtwert. Die Attacke hat keine Genauigkeit und trifft daher immer. Schnüffler kann mit Magiemantel reflektiert werden.~";}
    if (n==317) {o="~Felsgrab~50~80%~10~Stein~Felsgrab verursacht Schaden und senkt die Initiative des Ziels um eine Stufe.~";}
    if (n==318) {o="~Silberhauch~60~100%~5~Käfer~Schädigt das Ziel und hat danach eine Chance von 10%, alle Statuswerte des Anwenders (Genauigkeit und Fluchtwert ausgenommen) um je 1 Stufe zu erhöhen.~";}
    if (n==319) {o="~Metallsound~0~85%~40~Stahl~Die Spezial-Verteidigung des angegriffenen Pokemon wird um zwei Stufen reduziert. Hat dieser Statuswert bereits die Stufe -6 erreicht, schlägt die Attacke fehl.~";}
    if (n==320) {o="~Grasflöte~0~55%~15~Pflanze~Der Gegner wird in Schlaf versetzt.~";}
    if (n==321) {o="~Spaßkanone~0~100%~20~Normal~Senkt den Angriff und die Verteidigung des Ziels um 1 Stufe.~";}
    if (n==322) {o="~Kosmik-Kraft~0~0%~20~Psycho~Die Verteidigung und Spezial-Verteidigung des Anwenders steigen um je 1 Stufe.~";}
    if (n==323) {o="~Fontränen~150~100%~5~Wasser~Es wird Schaden mit veränderlicher Stärke angerichtet.~";}
    if (n==324) {o="~Ampelleuchte~75~100%~15~Käfer~Fügt Schaden zu und verwirrt den Gegner mit einer Wahrscheinlichkeit von 10%.~";}
    if (n==325) {o="~Spukball~60~0%~20~Geist~Spukball schädigt das Ziel und senkt mit einer Chance von 20% dessen Spezial-Verteidigung.~";}
    if (n==326) {o="~Sondersensor~80~100%~30~Psycho~Sondersensor schädigt das Ziel und lässt es mit einer Wahrscheinlichkeit von 10% zurückschrecken.~";}
    if (n==327) {o="~Himmelhieb~85~90%~15~Kampf~Richtet Schaden an und kann auch Ziele treffen, die sich durch Fliegen, Sprungfeder oder Freier Fall in der Luft befinden.~";}
    if (n==328) {o="~Sandgrab~15~70%~15~Boden~Sandgrab schadet dem Ziel und hält es für vier bis fünf Runden in einer Sandhose fest. In dieser Zeit kann das betroffene Pokemon nicht fliehen bzw. ausgewechselt werden und erhält jede Runde 1/8 seiner maximalen KP als Schaden.~";}
    if (n==329) {o="~Eiseskälte~1~30%~5~Eis~Trifft die Attacke, richtet sie Schaden in Höhe der momentanen KP des Zieles an, und garantiert damit, dass das Ziel besiegt wird. Die Attacke schlägt fehl, wenn der Level des Ziels höher ist als der Level des Anwenders oder wenn das Ziel dem Typ Eis angehört.~";}
    if (n==330) {o="~Lehmbrühe~95~85%~10~Wasser~Lehmbrühe schädigt den Gegner und senkt mit einer Wahrscheinlichkeit von 30% dessen Genauigkeit um eine Stufe.~";}
    if (n==331) {o="~Kugelsaat~10~100%~30~Pflanze~Kugelsaat trifft das Ziel zwei- bis fünfmal. Die Chance für 2 und 3 Treffer ist 1/3 (33,3%). Die Chance für 4 oder 5 Treffer beträgt 1/6 (16,7%). Besitzt der Anwender die Fähigkeit Wertelink, wird das Ziel garantiert fünfmal getroffen.~";}
    if (n==332) {o="~Aero-Ass~60~0%~20~Flug~Verursacht Schaden und trifft den Gegner auf jeden Fall. Die Trefferwahrscheinlichkeit wird nicht von Veränderungen an Genauigkeit oder Fluchtwert des Anwenders oder des Ziels beeinflusst (z.B. durch Einsatz von Doppelteam oder Sandwirbel) und auch nicht von Effekten, die die Trefferwahrscheinlichkeit negativ beeinflussen, z.B. Nebel oder Sandschleier. Aero-Ass trifft nicht in den Vorbereitungsrunden von Attacken wie z. B. Schaufler, Fliegen und Taucher.~";}
    if (n==333) {o="~Eisspeer~10~100%~30~Eis~Die Attacke fügt 2- bis 5-mal hintereinander Schaden zu und gehört zu den Serien-Attacken.~";}
    if (n==334) {o="~Eisenabwehr~0~0%~15~Stahl~Eisenabwehr erhöht die Verteidigung des Anwenders um 2 Stufen.~";}
    if (n==335) {o="~Rückentzug~0~100%~5~Normal~Rückentzug verhindert den Austausch des Ziels. Dieser Effekt bleibt solange bestehen, wie der Anwender am Kampf teilnimmt und kann nicht durch Stafette übergeben werden. Wird allerdings das Ziel durch Stafette ausgewechselt, kann das eingewechselte Pokemon nicht mehr getauscht werden.~";}
    if (n==336) {o="~Jauler~0~0%~40~Normal~Jauler steigert den Angriff des Anwenders und aller verbündeten Pokemon um 1 Stufe.~";}
    if (n==337) {o="~Drachenklaue~80~100%~15~Drachen~Das Ziel wird mit riesigen, scharfen Klauen stark verletzt.Drachenklaue schadet dem Ziel ohne Zusatzeffekte.~";}
    if (n==338) {o="~Flora-Statue~150~90%~5~Pflanze~Flora-Statue schädigt das Ziel. Der Rückstoß der Attacke bewirkt, dass der Anwender in der nächsten Runde aussetzen muss. Dabei kann er nicht angreifen, und an seiner Stelle kann der Spieler auch keine sonstigen Handlung vollziehen. Geht die Attacke daneben oder schlägt ihr Einsatz fehl, muss der Anwender in der nächsten Runde nicht aussetzen.~";}
    if (n==339) {o="~Protzer~0~0%~20~Kampf~Protzer erhöht den Angriff und die Verteidigung des Anwenders jeweils um eine Stufe.~";}
    if (n==340) {o="~Sprungfeder~85~85%~5~Flug~Sprungfeder verursacht Schaden und hat eine Chance von 30%, den Gegner zu paralysieren. In der 1. Runde springt der Anwender in die Luft, in der 2. Runde wird der Schaden verursacht.~";}
    if (n==341) {o="~Lehmschuss~55~95%~15~Boden~Lehmschuss schädigt das Ziel und senkt dessen Initiativewert um eine Stufe. Dieser Zusatzeffekt fällt weg, wenn die Initiative des Ziels bereits auf -6 herabgestuft worden ist.~";}
    if (n==342) {o="~Giftschweif~50~100%~25~Gift~Giftschweif schädigt den Gegner, vergiftet ihn mit einer Wahrscheinlichkeit von 10% und hat eine erhöhte Volltrefferquote. Das Ziel kann nicht vergiftet werden, wenn es einen Delegator benutzt, bereits einer primären Statusveränderung unterliegt, die Fähigkeit Immunität hat oder vom Typ Gift oder Stahl ist.~";}
    if (n==343) {o="~Bezirzer~40~100%~40~Normal~Bezirzer verursacht Schaden und stiehlt gleichzeitig das gehaltene Item des Ziels.~";}
    if (n==344) {o="~Volttackle~120~100%~15~Elektro~Bei Erfolg schädigt Volttackle den Gegner; der Anwender erleidet selbst 33% des zugefügten Schadens durch Rückstoß. Zusätzlich hat diese Attacke eine Wahrscheinlichkeit von 10%, den Gegner zu paralysieren.~";}
    if (n==345) {o="~Zauberblatt~60~0%~20~Pflanze~Verursacht Schaden und trifft den Gegner auf jeden Fall.~";}
    if (n==346) {o="~Nassmacher~0~100%~15~Wasser~Alle Feuer-Attacken, sowohl eigene als auch gegnerische, sind 50% schwächer als sonst. Dieser Effekt bleibt bestehen, bis der Anwender ausgetauscht wird.~";}
    if (n==347) {o="~Gedankengut~0~0%~20~Psycho~Gedankengut erhöht den Spezial-Angriff und die Spezial-Verteidigung des Anwenders jeweils um eine Stufe.~";}
    if (n==348) {o="~Laubklinge~70~100%~15~Pflanze~Laubklinge schädigt das Ziel und besitzt eine erhöhte Volltrefferquote.~";}
    if (n==349) {o="~Drachentanz~0~0%~20~Drachen~Erhöht den Angriffs- und den Initiative-Wert um jeweils eine Stufe.~";}
    if (n==350) {o="~Felswurf~25~80%~10~Stein~Die Attacke fügt 2 bis 5 mal hintereinander Schaden zu und gehört zu den Serien-Attacken.~";}
    if (n==351) {o="~Schockwelle~60~0%~20~Elektro~Verursacht Schaden und trifft den Gegner auf jeden Fall. Die Trefferwahrscheinlichkeit wird nicht von Veränderungen an Genauigkeit oder Fluchtwert des Anwenders oder des Ziels beeinflusst (z. B. durch Einsatz von Doppelteam oder Sandwirbel) und auch nicht von Effekten, die die Trefferwahrscheinlichkeit negativ beeinflussen, z. B. Nebel oder Sandschleier. Schockwelle trifft nicht in den Vorbereitungsrunden von Attacken wie z. B. Schaufler, Fliegen und Taucher. Der Schaden kann durch Einsatz von Schutzschild verhindert werden.~";}
    if (n==352) {o="~Aquawelle~60~100%~20~Wasser~Aquawelle fügt dem Ziel Schaden zu und kann es mit einer Wahrscheinlichkeit von 20% verwirren. Besitzt das Ziel die Fähigkeit Tempomacher, kann es nicht verwirrt werden.~";}
    if (n==353) {o="~Kismetwunsch~120~85%~5~Stahl~Der Angriff erfolgt zwei Runden, nachdem die Attacke eingesetzt wurde. In den Runden dazwischen können andere Attacken eingesetzt und sowohl der Anwender als auch das Ziel ausgetauscht oder besiegt werden. Es wird das Pokemon getroffen, was zum Zeitpunkt des Angriffs auf dem Feld steht. Wird dieses in der Runde besiegt, geht der Angriff ins Leere.~";}
    if (n==354) {o="~Psyschub~140~90%~5~Psycho~Psyschub verursacht Schaden und senkt den Spezial-Angriff des Anwenders um zwei Stufen.~";}
    if (n==356) {o="~Cryptoschlag~90~100%~99~Shadow~Nur für Schatten-Pokemon. Typ ???~";}
    t=FI(o,"~",w);
    return t;
}
function NMove(n) {
    var i=0;var x=0;var y=0;var o=" ";i=move_1.options[move_1.selectedIndex].value;
    if (n=="1" || n=="5") {o=MoveDex(i,4);x=Math.floor((1*o)/5);y=(x*move_1_level.selectedIndex)+(1*o);move_1_pp.value=y;}
    o=MoveDex(i,5);move_1_type.value=o;o=MoveDex(i,2);move_1_power.value=o;o=MoveDex(i,3);move_1_accuracy.value=o;o=MoveDex(i,6);move_1_description.value=o;i=move_2.options[move_2.selectedIndex].value;
    if (n=="2" || n=="5") {o=MoveDex(i,4);x=Math.floor((1*o)/5);y=(x*move_2_level.selectedIndex)+(1*o);move_2_pp.value=y;}
    o=MoveDex(i,5);move_2_type.value=o;o=MoveDex(i,2);move_2_power.value=o;o=MoveDex(i,3);move_2_accuracy.value=o;o=MoveDex(i,6);move_2_description.value=o;i=move_3.options[move_3.selectedIndex].value;
    if (n=="3" || n=="5") {o=MoveDex(i,4);x=Math.floor((1*o)/5);y=(x*move_3_level.selectedIndex)+(1*o);move_3_pp.value=y;}
    o=MoveDex(i,5); move_3_type.value=o;o=MoveDex(i,2); move_3_power.value=o;o=MoveDex(i,3); move_3_accuracy.value=o;o=MoveDex(i,6); move_3_description.value=o;i=move_4.options[move_4.selectedIndex].value;
    if (n=="4" || n=="5") {o=MoveDex(i,4);x=Math.floor((1*o)/5);y=(x*move_4_level.selectedIndex)+(1*o);move_4_pp.value=y;}
    o=MoveDex(i,5);move_4_type.value=o;o=MoveDex(i,2);move_4_power.value=o;o=MoveDex(i,3);move_4_accuracy.value=o;o=MoveDex(i,6);move_4_description.value=o;
    return i;
}
function Copy(c) {
    var C=code_output;
    if (c=="C") {C=code_output;}
    if (c=="L") {C=LogConsole;}
    if (c=="D") {C=dna;}
    if (navigator.appName=="Microsoft Internet Explorer") {
        if (parseInt(navigator.appVersion) > 3) {C.focus();C.select();var crange=C.createTextRange();copyRange=crange.execCommand("Copy");LogConsole.value=navigator.appName + " Copy Code Complete";}
        else {LogConsole.value=navigator.appName + " Need Version4+";}}
    else {LogConsole.value=navigator.appName + " Can't Copy Code";}
}
function Paste(c) {
    var C=code_output;
    if (c=="C") {C=code_output;}
    if (c=="L") {C=LogConsole;}
    if (c=="D") {C=dna;}
    if (navigator.appName=="Microsoft Internet Explorer") {
        if (parseInt(navigator.appVersion) > 3) {C.value="";C.focus();document.execCommand('Paste');LogConsole.value=navigator.appName + " Paste Code Complete";}
        else {LogConsole.value=navigator.appName + " Need Version4+";}}
    else {LogConsole.value=navigator.appName + " Can't Paste";}
}
function MakeHexC(JI) {
    // Convert 1 JunkChar to HexChar "0" - "F"
    var HO=" ";HO="*";
    if (JI=="?") {HO="0";}
    if (JI=="0") {HO="0";}
    if (JI=="1") {HO="1";}
    if (JI=="2") {HO="2";}
    if (JI=="3") {HO="3";}
    if (JI=="4") {HO="4";}
    if (JI=="5") {HO="5";}
    if (JI=="6") {HO="6";}
    if (JI=="7") {HO="7";}
    if (JI=="8") {HO="8";}
    if (JI=="9") {HO="9";}
    if (JI=="a") {HO="A";}
    if (JI=="b") {HO="B";}
    if (JI=="c") {HO="C";}
    if (JI=="d") {HO="D";}
    if (JI=="e") {HO="E";}
    if (JI=="f") {HO="F";}
    if (JI=="A") {HO="A";}
    if (JI=="B") {HO="B";}
    if (JI=="C") {HO="C";}
    if (JI=="D") {HO="D";}
    if (JI=="E") {HO="E";}
    if (JI=="F") {HO="F";}
    return HO;
}
function MakeHexW(JI) {
    // Take Junk Code and Make it Hex
    // init vars
    // vars for input & output
    var mx = "0123456789abcdef";var HO = "ERROR           ";
    //  var for parsing HexInput
    var CHF="F";var CHE="E";var CHD="D";var CHC="C";var CHB="B";var CHA="A";var CH9="9";var CH8="8";var CH7="7";var CH6="6";var CH5="5";var CH4="4";var CH3="3";var CH2="2";var CH1="1";var CH0="0";var chkspace = " ";
    // Parse JunkIn and make valid hex
    mx = JI;CHF=MakeHexC(mx.substring(0,1));CHE=MakeHexC(mx.substring(1,2));CHD=MakeHexC(mx.substring(2,3));CHC=MakeHexC(mx.substring(3,4));CHB=MakeHexC(mx.substring(4,5));CHA=MakeHexC(mx.substring(5,6));CH9=MakeHexC(mx.substring(6,7));CH8=MakeHexC(mx.substring(7,8));chkspace=mx.substring(8,9);
    if (chkspace==" "||chkspace==":") {CH7=MakeHexC(mx.substring(9,10));CH6=MakeHexC(mx.substring(10,11));CH5=MakeHexC(mx.substring(11,12));CH4=MakeHexC(mx.substring(12,13));CH3=MakeHexC(mx.substring(13,14));CH2=MakeHexC(mx.substring(14,15));CH1=MakeHexC(mx.substring(15,16));CH0=MakeHexC(mx.substring(16,17));}
    else {CH7=MakeHexC(mx.substring(8,9));CH6=MakeHexC(mx.substring(9,10));CH5=MakeHexC(mx.substring(10,11));CH4=MakeHexC(mx.substring(11,12));CH3=MakeHexC(mx.substring(12,13));CH2=MakeHexC(mx.substring(13,14));CH1=MakeHexC(mx.substring(14,15));CH0=MakeHexC(mx.substring(15,16));}
    HO=CHF+CHE+CHD+CHC+CHB+CHA+CH9+CH8;HO+=CH7+CH6+CH5+CH4+CH3+CH2+CH1+CH0;return HO;
}
function DecToHex(DecNum, Group, Sign, Dollar) {
    // DecNum = Decimal Number In
    // Group = Number of digit to show
    // Sign = 0 no sign / Sign = 1 show sign / Sign = 2 invert bits
    // Dollar = 0 no $ / Dollar = 1 show $
    // 0xFF javascript hex value
    // 4294967296 dec = 0x100000000 hex too big
    // 268435456 dec = 0x10000000 hex
    // 16777216 dec = 0x1000000 hex
    // 1048576 dec = 0x100000 hex
    // 65536 dec = 0x10000 hex
    // 4096 dec = 0x1000 hex
    // 256 dec = 0x100 hex
    // 16 dec = 0x10 hex
    // 1 dec = 0x01 hex
    var HexChars = "0123456789ABCDEF";var HexOut = "00000000";var tc = " ";var H7 = 0;var H6 = 0;var H5 = 0;var H4 = 0;var H3 = 0;var H2 = 0;var H1 = 0;var H0 = 0;var a = 0;var b = 0;var g = 1;var s = 0;var st = 0;var d = 0;s = 0;st = 0;
    if (Sign == 1) {s = 1;}
    if (Sign == 2) {s = 2;} d = 0;
    if (Dollar == 1) {d = 1;} g = 1;g = Group;
    if (g < 1 || g > 8) {g = 1;} a = DecNum;
    if (a < 0) {st = 1;if (s == 1) {a = a * -1;} if (s == 2) {a = a * -1;a -= 1;}}
    if (a > 0xFFFFFFFF) {a = 0;}
    b = a % 0x10000000;H7 = (a - b) / 0x10000000;a = b;b = a % 0x1000000;H6 = (a - b) / 0x1000000;a = b;b = a % 0x100000;H5 = (a - b) / 0x100000;a = b;b = a % 0x10000;H4 = (a - b) / 0x10000;a = b;b = a % 0x1000;H3 = (a - b) / 0x1000;a = b;b = a % 0x100;H2 = (a - b) / 0x100;a = b;b = a % 0x10;H1 = (a - b) / 0x10;H0 = b;HexOut = "";
    if (s == 1) {if (st == 1) {HexOut += "-";} else {HexOut += "+";}}
    if (d == 1) {HexOut += "$";}
    if (g > 7) {tc = HexChars.charAt(H7);if (s == 2 && st == 1) {tc = InvHex(tc);} HexOut += tc;}
    if (g > 6) {tc = HexChars.charAt(H6);if (s == 2 && st == 1) {tc = InvHex(tc);} HexOut += tc;}
    if (g > 5) {tc = HexChars.charAt(H5);if (s == 2 && st == 1) {tc = InvHex(tc);} HexOut += tc;}
    if (g > 4) {tc = HexChars.charAt(H4);if (s == 2 && st == 1) {tc = InvHex(tc);} HexOut += tc;}
    if (g > 3) {tc = HexChars.charAt(H3);if (s == 2 && st == 1) {tc = InvHex(tc);} HexOut += tc;}
    if (g > 2) {tc = HexChars.charAt(H2);if (s == 2 && st == 1) {tc = InvHex(tc);} HexOut += tc;}
    if (g > 1) {tc = HexChars.charAt(H1);if (s == 2 && st == 1) {tc = InvHex(tc);} HexOut += tc;}
    tc = HexChars.charAt(H0);
    if (s == 2 && st == 1) {tc = InvHex(tc);} HexOut += tc;
    // output HexOut
    return HexOut;
}
function InvHex(Hex) {
    var IHex = "0";
    if (Hex == "0") {IHex = "F";}
    if (Hex == "1") {IHex = "E";}
    if (Hex == "2") {IHex = "D";}
    if (Hex == "3") {IHex = "C";}
    if (Hex == "4") {IHex = "B";}
    if (Hex == "5") {IHex = "A";}
    if (Hex == "6") {IHex = "9";}
    if (Hex == "7") {IHex = "8";}
    if (Hex == "8") {IHex = "7";}
    if (Hex == "9") {IHex = "6";}
    if (Hex == "A") {IHex = "5";}
    if (Hex == "B") {IHex = "4";}
    if (Hex == "C") {IHex = "3";}
    if (Hex == "D") {IHex = "2";}
    if (Hex == "E") {IHex = "1";}
    if (Hex == "F") {IHex = "0";}
    if (Hex == "a") {IHex = "5";}
    if (Hex == "b") {IHex = "4";}
    if (Hex == "c") {IHex = "3";}
    if (Hex == "d") {IHex = "2";}
    if (Hex == "e") {IHex = "1";}
    if (Hex == "f") {IHex = "0";}
    return IHex;
}
function GAD(code_output,what) {
    // Gamboy Advance Decrypt
    var x=" ";var y=" ";var ta=" ";var tv=" ";var z=" ";var mx=" ";
    // Get Code
    x=code_output;mx=x+"00000000000000000";mx=mx.substr(0,17);
    // make sure input is hex
    mx = MakeHexW(mx);ta = mx.substr(0,8);tv = mx.substr(8,16);y = GADecrypt(ta,tv,what);
    // put Hex code out
    x= y.substring(0,8);z= y.substring(8,16);y=x+z;
    // y+=" "+what;
    return y;
}
function GADecrypt(ar,vl,what) {
    // Use Parasyte Info.
    var rs = "0xC6EF3720";var ra = "0x9E3779B9";var v1s0 = "0x09F4FBBD";var v1s1 = "0x9681884A";var v1s2 = "0x352027E9";var v1s3 = "0xF3DEE5A7";var v3s0 = "0x7AA9648F";var v3s1 = "0x7FAE6994";var v3s2 = "0xC0EFAAD5";var v3s3 = "0x42712C57";var loop = 0;var tval = 0;var tadd = 0;var shif = 0;var s0 = 0;var s1 = 0;var s2 = 0;var s3 = 0;var r = 0;var rsa = 0;var t = 0;var t2 = 0;var hout = "0123456789ancdef";
    r = 1 * rs;rsa = 1 * ra;
    if (what == "1") {s0 = 1 * v1s0;s1 = 1 * v1s1;s2 = 1 * v1s2;s3 = 1 * v1s3;}
    else {s0 = 1 * v3s0;s1 = 1 * v3s1;s2 = 1 * v3s2;s3 = 1 * v3s3;}
    tval = 1 * ("0x" + vl);tadd = 1 * ("0x" + ar);l = 32;
    while (l > 0) {
        t = (tadd << 4) & (1 * "0xFFFFFFFF");
        if (t < 0) {t += (1 * "0x100000000");}
        if (t > (1 * "0xFFFFFFFF")) {t -= (1 * "0x100000000");} t += s2;
        if (t < 0) {t += (1 * "0x100000000");}
        if (t > (1 * "0xFFFFFFFF")) {t -= (1 * "0x100000000");} t2 = tadd + r;
        if (t2 < 0) {t2 += (1 * "0x100000000");}
        if (t2 > (1 * "0xFFFFFFFF")) {t2 -= (1 * "0x100000000");} t ^= t2;
        if (t < 0) {t += (1 * "0x100000000");}
        if (t > (1 * "0xFFFFFFFF")) {t -= (1 * "0x100000000");} t2 = (tadd >> 5) & (1 * "0x07FFFFFF");
        if (t2 < 0) {t2 += (1 * "0x100000000");}
        if (t2 > (1 * "0xFFFFFFFF")) {t2 -= (1 * "0x100000000");} t2 += s3;
        if (t2 < 0) {t2 += (1 * "0x100000000");}
        if (t2 > (1 * "0xFFFFFFFF")) {t2 -= (1 * "0x100000000");} t ^= t2;
        if (t < 0) {t += (1 * "0x100000000");}
        if (t > (1 * "0xFFFFFFFF")) {t -= (1 * "0x100000000");} tval -= t;
        if (tval < 0) {tval += (1 * "0x100000000");}
        if (tval > (1 * "0xFFFFFFFF")) {tval -= (1 * "0x100000000");} t = (tval << 4) & (1 * "0xFFFFFFFF");
        if (t < 0) {t += (1 * "0x100000000");}
        if (t > (1 * "0xFFFFFFFF")) {t -= (1 * "0x100000000");} t += s0;
        if (t < 0) {t += (1 * "0x100000000");}
        if (t > (1 * "0xFFFFFFFF")) {t -= (1 * "0x100000000");} t2 = tval + r;
        if (t2 < 0) {t2 += (1 * "0x100000000");}
        if (t2 > (1 * "0xFFFFFFFF")) {t2 -= (1 * "0x100000000");} t ^= t2;
        if (t < 0) {t += (1 * "0x100000000");}
        if (t > (1 * "0xFFFFFFFF")) {t -= (1 * "0x100000000");} t2 = (tval >> 5) & (1 * "0x07FFFFFF");
        if (t2 < 0) {t2 += (1 * "0x100000000");}
        if (t2 > (1 * "0xFFFFFFFF")) {t2 -= (1 * "0x100000000");} t2 += s1;
        if (t2 < 0) {t2 += (1 * "0x100000000");}
        if (t2 > (1 * "0xFFFFFFFF")) {t2 -= (1 * "0x100000000");} t ^= t2;
        if (t < 0) {t += (1 * "0x100000000");}
        if (t > (1 * "0xFFFFFFFF")) {t -= (1 * "0x100000000");} tadd -= t;
        if (tadd < 0) {tadd += (1 * "0x100000000");}
        if (tadd > (1 * "0xFFFFFFFF")) {tadd -= (1 * "0x100000000");} r -= rsa;
        if (r < 0) {r += (1 * "0x100000000");}
        if (r > (1 * "0xFFFFFFFF")) {r -= (1 * "0x100000000");} l --;
    }
    hout = DecToHex(tadd,8,2) + DecToHex(tval,8,2);return hout;
}
function GAE(code_output,what) {
    // Gamboy Advance Encrypt
    var x=" ";var y=" ";var ta=" ";var tv=" ";var z=" ";var mx=" ";
    // Get Code
    x=code_output;mx=x+"00000000000000000";mx=mx.substr(0,17);
    // make sure input is hex
    mx = MakeHexW(mx);ta = mx.substr(0,8);if (what=="1") {ta= "2"+ ta.substr(1,8);} if (what=="3") {ta= "04"+ mx.substr(1,1) + mx.substr(3,5);}
    // if (what=="3") {ta="04"+mx.substr(1,2)+ mx.substr(3,8);)
    tv = mx.substr(8,16);y = GAEncrypt(ta,tv,what);
    // put Hex code out
    x=y.substring(0,8);z=y.substring(8,16);y=x+" "+z;
    // y+=" "+what;
    return y;
}
function GAEncrypt(ar,vl,what) {
    // Use Parasyte Info.
    var rs = "0x00000000";var ra = "0x9E3779B9";var v1s0 = "0x09F4FBBD";var v1s1 = "0x9681884A";var v1s2 = "0x352027E9";var v1s3 = "0xF3DEE5A7";var v3s0 = "0x7AA9648F";var v3s1 = "0x7FAE6994";var v3s2 = "0xC0EFAAD5";var v3s3 = "0x42712C57";var loop = 0;var tval = 0;var tadd = 0;var shif = 0;var s0 = 0;var s1 = 0;var s2 = 0;var s3 = 0;var r = 0;var rsa = 0;var t = 0;var t2 = 0;var hout = "0123456789ancdef";
    r = 1 * rs;rsa = 1 * ra;if (what == "1") {s0 = 1 * v1s0;s1 = 1 * v1s1;s2 = 1 * v1s2;s3 = 1 * v1s3;} else {s0 = 1 * v3s0;s1 = 1 * v3s1;s2 = 1 * v3s2;s3 = 1 * v3s3;} tval = 1 * ("0x" + vl);tadd = 1 * ("0x" + ar);l = 32;
    while (l > 0) {
        r += rsa;
        if (r < 0) {r += (1 * "0x100000000");}
        if (r > (1 * "0xFFFFFFFF")) {r -= (1 * "0x100000000");} t = (tval << 4) & (1 * "0xFFFFFFFF");
        if (t < 0) {t += (1 * "0x100000000");}
        if (t > (1 * "0xFFFFFFFF")) {t -= (1 * "0x100000000");} t += s0;
        if (t < 0) {t += (1 * "0x100000000");}
        if (t > (1 * "0xFFFFFFFF")) {t -= (1 * "0x100000000");} t2 = tval + r;
        if (t2 < 0) {t2 += (1 * "0x100000000");}
        if (t2 > (1 * "0xFFFFFFFF")) {t2 -= (1 * "0x100000000");} t ^= t2;
        if (t < 0) {t += (1 * "0x100000000");}
        if (t > (1 * "0xFFFFFFFF")) {t -= (1 * "0x100000000");} t2 = (tval >> 5) & (1 * "0x07FFFFFF");
        if (t2 < 0) {t2 += (1 * "0x100000000");}
        if (t2 > (1 * "0xFFFFFFFF")) {t2 -= (1 * "0x100000000");} t2 += s1;
        if (t2 < 0) {t2 += (1 * "0x100000000");}
        if (t2 > (1 * "0xFFFFFFFF")) {t2 -= (1 * "0x100000000");} t ^= t2;
        if (t < 0) {t += (1 * "0x100000000");}
        if (t > (1 * "0xFFFFFFFF")) {t -= (1 * "0x100000000");} tadd += t;
        if (tadd < 0) {tadd += (1 * "0x100000000");}
        if (tadd > (1 * "0xFFFFFFFF")) {tadd -= (1 * "0x100000000");} t = (tadd << 4) & (1 * "0xFFFFFFFF");
        if (t < 0) {t += (1 * "0x100000000");}
        if (t > (1 * "0xFFFFFFFF")) {t -= (1 * "0x100000000");} t += s2;
        if (t < 0) {t += (1 * "0x100000000");}
        if (t > (1 * "0xFFFFFFFF")) {t -= (1 * "0x100000000");} t2 = tadd + r;
        if (t2 < 0) {t2 += (1 * "0x100000000");}
        if (t2 > (1 * "0xFFFFFFFF")) {t2 -= (1 * "0x100000000");} t ^= t2;
        if (t < 0) {t += (1 * "0x100000000");}
        if (t > (1 * "0xFFFFFFFF")) {t -= (1 * "0x100000000");} t2 = (tadd >> 5) & (1 * "0x07FFFFFF");
        if (t2 < 0) {t2 += (1 * "0x100000000");}
        if (t2 > (1 * "0xFFFFFFFF")) {t2 -= (1 * "0x100000000");} t2 += s3;
        if (t2 < 0) {t2 += (1 * "0x100000000");}
        if (t2 > (1 * "0xFFFFFFFF")) {t2 -= (1 * "0x100000000");} t ^= t2;
        if (t < 0) {t += (1 * "0x100000000");}
        if (t > (1 * "0xFFFFFFFF")) {t -= (1 * "0x100000000");} tval += t;
        if (tval < 0) {tval += (1 * "0x100000000");}
        if (tval > (1 * "0xFFFFFFFF")) {tval -= (1 * "0x100000000");} l --;
    }
    hout = DecToHex(tadd,8,2) + DecToHex(tval,8,2);return hout;
}
function Sample(n) {
    var i=0;var j=0;var D=rdna;var As=ra_sample;var Bs=rb_sample;var Cs=rc_sample;var Ds=rd_sample;var abcd=" ";var tlog=" ";tlog="";
    if (-2<n && n<20) {if (n==-1) {tlog="All Samples\r\n";} for (i=0; i<20; i++) {if (n==-1 || i==n) {tlog+="Code Sample "+i+":"+D[i].value+"\r\n";}}}
    if (n>19) {
        if (n==32) {tlog="ABCD Structure\r\n";}abcd=abcd_output.value;
        if (n==32) {tlog+="Structure Order:"+abcd+"\r\n";}
        for (j=0;j<4;j++) {t=abcd.substring(j,j+1);
            if (t=="A") {if (n==32) {tlog+="\r\n";} if ((19<n && n<23)||n==32) {for (i=0; i<3; i++) {if (n==32 || i==n-20) {tlog+="A Structure "+i+":"+As[i].value+"\r\n";}}}}
            if (t=="B") {if (n==32) {tlog+="\r\n";} if (n==32 || (22<n && n<26)) {for (i=0; i<3; i++) {if (n==32 || i==n-23) {tlog+="B Structure "+i+":"+Bs[i].value+"\r\n";}}}}
            if (t=="C") {if (n==32) {tlog+="\r\n";} if (n==32 || (25<n && n<29)) {for (i=0; i<3; i++) {if (n==32 || i==n-26) {tlog+="C Structure "+i+":"+Cs[i].value+"\r\n";}}}}
            if (t=="D") {if (n==32) {tlog+="\r\n";} if (n==32 || (28<n && n<32)) {for (i=0; i<3; i++) {if (n==32 || i==n-29) {tlog+="D Structure "+i+":"+Ds[i].value+"\r\n";}}}}
        }
        if (n==32) {tlog+="\r\nCheckSum:"+code_selector.value+"\r\n";}
    }
    LogConsole.value=tlog;
}

function FillAll() {
    var P=pokemon_select;var Pvalue=P.options[P.selectedIndex].value;var U=icognito_select;var Utext=U.options[U.selectedIndex].text;var G=pokemon_gender;var N=pokemon_nature;var D=rdna;var As=ra_sample;var Bs=rb_sample;var Cs=rc_sample;var Ds=rd_sample;var BA0=" ";var BA1=" ";var BA2=" ";var BB0=" ";var BB1=" ";var BB2=" ";var BC0=" ";var BC1=" ";var BC2=" ";var BD0=" ";var BD1=" ";var BD2=" ";var tt=" ";var ts=" ";var tg=0;var gt=0;var tn=0;var tpid=0;var tid=0;var xk=0;var r=0;var r1=0;var S=" ";var addr=0;var cs=0;var i=0;xk = 0;r=1*trainer_id_secret.value;
    if (r<0||r>65565) {r=Math.round(Math.random()*65535);} trainer_id_secret.value=r;r=1*trainer_id.value;
    if (r<0||r>65565) {r=Math.round(Math.random()*65535);} trainer_id.value=r;tid=(trainer_id_secret.value*65536)+(1*trainer_id.value);
    if (rpid.checked) {
        if (pokemon_shiny.checked) {i=0;gt=Gtest();for (i=0;i<65536;i++) {r=Math.round(Math.random()*65535);xk=(r*65536)+(r^(Math.round(Math.random()*7)));if (xk<0) {xk+=(1*"0x100000000");} tpid=xk^tid;if (tpid<0) {tpid+=(1*"0x100000000");} tg=Math.floor(tpid%256);if (tg<0) {tg+=256;} tn=Math.floor(tpid%25);if (tn<0) {tn+=25;} if (tg>gt && G.selectedIndex==1 && N.selectedIndex==tn) {if (Pvalue==201) {if (UnownID(tpid,1)==Utext) {i=65537;}} else {i=65537;}} if (tg<=gt && G.selectedIndex==0 && N.selectedIndex==tn) {if (Pvalue==201) {if (UnownID(tpid,1)==Utext) {i=65537;}} else {i=65537;}}}}
        else {i=0;gt=Gtest();for (i=0;i<65536;i++) {tpid=(Math.round(Math.random()*65536)*Math.round(Math.random()*65536))+Math.round(Math.random()*65512);if (tpid<0) {tpid+=(1*"0x100000000");} tn=Math.floor(tpid%25);if (tpid<0) {tpid+=(1*"0x100000000");} tpid+=pokemon_nature.selectedIndex;if (tpid<0) {tpid+=(1*"0x100000000");} tg=Math.floor(tpid%256);if (tg<0) {tg+=256;} tn=Math.floor(tpid%25);if (tn<0) {tn+=25;} if (tg>gt && G.selectedIndex==1 && N.selectedIndex==tn) {if (Pvalue==201) {if (UnownID(tpid,1)==Utext) {i=65537;}} else {i=65537;}} if (tg<=gt && G.selectedIndex==0 && N.selectedIndex==tn) {if (Pvalue==201) {if (UnownID(tpid,1)==Utext) {i=65537;}} else {i=65537;}}}xk=tid^tpid;}
        if (i<65538) {pid.value="try again";code_output.value="try again";return;} else {pid.value=tpid;}
    }
    else {tpid=pid.value*1;tn=Math.floor(tpid%25);if (tn<0) {tn+=25;} N.selectedIndex=tn;tg=Math.floor(tpid%256);if (tg<0) {tg+=256;} gt=Gtest();if (tg>gt) {tg=1;} else {tg=0;} G.selectedIndex==tg;i=Math.floor(tpid%65536);r=(1*trainer_id.value)^i;i=Math.floor(tpid/65536);r1=(1*trainer_id_secret.value)^i;xk=r^r1;if (xk<8) {pokemon_shiny.checked=true;}else{pokemon_shiny.checked=false;} xk=tid^tpid;ts=Pvalue;if (ts=="201") {r1=UnownID(tpid,0);U.options[r1].selected=true;}} r1=xk;
    if (r1<0) {r1+=1*"0x100000000";}
    if (r1>(1*"0xFFFFFFFF")) {r1-=1*"0x100000000";}xk=r1;tg=Math.floor(tpid%256);gt=Gtest();
    if (tg>gt) {tg=1;}
    else {tg=0;}
    G.selectedIndex=tg;
    pid.value=tpid;
    xkey.value=DecToHex(xk,8);
    ts=DecToHex(tpid,8);
    D[0].value=ts;
    ts=DecToHex(tid,8);
    D[1].value=ts;
    if (pokemon_egg.checked) {pokemon_name.value="Ei";}
    if (pokemon_name.value=="") {input_nickname=pokemon_select.options[pokemon_select.selectedIndex].value;input_pokedex=PokeDex(input_nickname);nickname=FI(input_pokedex,"~",3);pokemon_name.value=nickname;}
    ts=StrToPoke(pokemon_name.value,10);tt=ts.substr(6,2);tt+=ts.substr(4,2);tt+=ts.substr(2,2);tt+=ts.substr(0,2);D[2].value=tt;tt=ts.substr(14,2);tt+=ts.substr(12,2);tt+=ts.substr(10,2);tt+=ts.substr(8,2);D[3].value=tt;
    tt=font.value;// 0201 Japanese | 0202 USA | 0203 French | 0204 Italian | 0205 German | 0206 | 0207 Spanish
    tt+=ts.substr(18,2);tt+=ts.substr(16,2);D[4].value=tt;
    if (trainer_name.value=="") {trainer_name.value="Ash";} ts=StrToPoke(trainer_name.value,7);tt=ts.substr(6,2);tt+=ts.substr(4,2);tt+=ts.substr(2,2);tt+=ts.substr(0,2);D[5].value=tt;r=0;
    if (marker_circle.checked) {r+=1;}
    if (marker_square.checked) {r+=2;}
    if (marker_triangle.checked) {r+=4;}
    if (marker_heart.checked) {r+=8;} tt=DecToHex(r,2);tt+=ts.substr(12,2);tt+=ts.substr(10,2);tt+=ts.substr(8,2);D[6].value=tt;BA0="0"+item_carry.options[item_carry.selectedIndex].value+DecToHex(Pvalue,4);As[0].value=BA0;cs=1*Pvalue;r=1*("0x0"+item_carry.options[item_carry.selectedIndex].value);cs+=r;r=xk^(1*("0x"+BA0));
    if (r<0) {r+=1*"0x100000000";}
    if (r>(1*"0xFFFFFFFF")) {r-=1*"0x100000000";} BA0=DecToHex(r,8);r1=pokemon_experience.value;
    if (r1<0) {pokemon_experience.value=0;} S=PokeDex(pokemon_select.options[pokemon_select.selectedIndex].value);r=FI(S,21);
    if (r1>r) {r1=r;} BA1=DecToHex(pokemon_experience.value,8);As[1].value=BA1;cs+=pokemon_experience.value%65536;cs+=Math.floor(pokemon_experience.value/65536);r=xk^(1*("0x"+BA1));
    if (r<0) {r+=1*"0x100000000";}
    if (r>(1*"0xFFFFFFFF")) {r-=1*"0x100000000";} BA1=DecToHex(r,8);r=move_1_level.selectedIndex*1;
    if (move_2.selectedIndex!=0) {r+=move_2_level.selectedIndex*4;}
    if (move_3.selectedIndex!=0) {r+=move_3_level.selectedIndex*16;}
    if (move_4.selectedIndex!=0) {r+=move_4_level.selectedIndex*64;} r1=pokemon_happy.value;
    if (r1<0) {pokemon_happy.value=0;}
    if (r1>255) {pokemon_happy.value=255;} r+=pokemon_happy.value*256;As[2].value=DecToHex(r,8);cs+=r%65536;cs+=Math.floor(r/65536);BA2=DecToHex(r,8);r=xk^(1*("0x"+BA2));
    if (r<0) {r+=1*"0x100000000";}
    if (r>(1*"0xFFFFFFFF")) {r-=1*"0x100000000";} BA2=DecToHex(r,8);BB0=DecToHex(move_2.options[move_2.selectedIndex].value,4)+DecToHex(move_1.options[move_1.selectedIndex].value,4);Bs[0].value=BB0;cs+=1*(move_1.options[move_1.selectedIndex].value);cs+=1*(move_2.options[move_2.selectedIndex].value);r=xk^(1*("0x"+BB0));
    if (r<0) {r+=1*"0x100000000";}
    if (r>(1*"0xFFFFFFFF")) {r-=1*"0x100000000";} BB0=DecToHex(r,8);BB1=DecToHex(move_4.options[move_4.selectedIndex].value,4)+DecToHex(move_3.options[move_3.selectedIndex].value,4);Bs[1].value=BB1;cs+=1*(move_3.options[move_3.selectedIndex].value);cs+=1*(move_4.options[move_4.selectedIndex].value);r=xk^(1*("0x"+BB1));
    if (r<0) {r+=1*"0x100000000";}
    if (r>(1*"0xFFFFFFFF")) {r-=1*"0x100000000";} BB1=DecToHex(r,8);r1=move_1_pp.value;
    if (r1<0) {move_1_pp.value=0;}
    if (r1>99) {move_1_pp.value=99;} r1=move_2_pp.value;
    if (r1<0) {move_2_pp.value=0;}
    if (r1>99) {move_2_pp.value=99;} r1=move_3_pp.value;
    if (r1<0) {move_3_pp.value=0;}
    if (r1>99) {move_3_pp.value=99;} r1=move_4_pp.value;
    if (r1<0) {move_4_pp.value=0;}
    if (r1>99) {move_4_pp.value=99;}
    if (move_4.selectedIndex!=0) {BB2=DecToHex(move_4_pp.value,2);}else{BB2="00";}
    if (move_3.selectedIndex!=0) {BB2+=DecToHex(move_3_pp.value,2);}else{BB2+="00";}
    if (move_2.selectedIndex!=0) {BB2+=DecToHex(move_2_pp.value,2);}else{BB2+="00";} BB2+=DecToHex(move_1_pp.value,2);Bs[2].value=BB2;cs+=(1*("0x"+BB2))%65536;cs+=Math.floor((1*("0x"+BB2))/65536);r=xk^(1*("0x"+BB2));
    if (r<0) {r+=1*"0x100000000";}
    if (r>(1*"0xFFFFFFFF")) {r-=1*"0x100000000";} BB2=DecToHex(r,8);BC0=DecToHex(basepoints_speed.value,2);BC0+=DecToHex(basepoints_defense.value,2);BC0+=DecToHex(basepoints_attack.value,2);BC0+=DecToHex(basepoints_health.value,2);Cs[0].value=BC0;cs+=(1*("0x"+BC0))%65536;cs+=Math.floor((1*("0x"+BC0))/65536);r=xk^(1*("0x"+BC0));
    if (r<0) {r+=1*"0x100000000";}
    if (r>(1*"0xFFFFFFFF")) {r-=1*"0x100000000";} BC0=DecToHex(r,8);r=Beauty.value;
    if (r<0) {r=0;}
    if (r>255) {r=255;} Beauty.value=r;BC1=DecToHex(Beauty.value,2);r=Cool.value;
    if (r<0) {r=0;}
    if (r>255) {r=255;} Cool.value=r;BC1+=DecToHex(Cool.value,2);BC1+=DecToHex(basepoints_defense_special.value,2);BC1+=DecToHex(basepoints_attack_special.value,2);Cs[1].value=BC1;cs+=(1*("0x"+BC1))%65536;cs+=Math.floor((1*("0x"+BC1))/65536);r=xk^(1*("0x"+BC1));
    if (r<0) {r+=1*"0x100000000";}
    if (r>(1*"0xFFFFFFFF")) {r-=1*"0x100000000";} BC1=DecToHex(r,8);r=Luster.value;
    if (r<0) {r=0;}
    if (r>255) {r=255;} Luster.value=r;BC2=DecToHex(Luster.value,2);r=Tough.value;
    if (r<0) {r=0;}
    if (r>255) {r=255;} Tough.value=r;BC2+=DecToHex(Tough.value,2);r=Smart.value;
    if (r<0) {r=0;}
    if (r>255) {r=255;} Smart.value=r;BC2+=DecToHex(Smart.value,2);r=Cute.value;
    if (r<0) {r=0;}
    if (r>255) {r=255;} Cute.value=r;BC2+=DecToHex(Cute.value,2);Cs[2].value=BC2;cs+=(1*("0x"+BC2))%65536;cs+=Math.floor((1*("0x"+BC2))/65536);r=xk^(1*("0x"+BC2));
    if (r<0) {r+=1*"0x100000000";}
    if (r>(1*"0xFFFFFFFF")) {r-=1*"0x100000000";} BC2=DecToHex(r,8);r1=pokemon_caught_level.value;
    if (r1<0) {pokemon_caught_level.value=0;}
    if (r1>100) {pokemon_caught_level.value=100;} r1=parseInt(1*("0x"+pokemon_caught_location[pokemon_caught_location.selectedIndex].value),10);r=(pokemon_caught_ball.selectedIndex+1)*134217728+(pokemon_caught_level.value)*65536+(r1)*256;
    if (pokemon_pokerus.selectedIndex==1) {r+=1;}
    if (pokemon_pokerus.selectedIndex==2) {r+=16;}
    if (trainer_gender.value==1) {r+=1*"0x80000000";} r1=pokemon_caught_game.selectedIndex;r+=r1*8388608;BD0=DecToHex(r,8);Ds[0].value=BD0;cs+=(1*("0x"+BD0))%65536;cs+=Math.floor((1*("0x"+BD0))/65536);r=xk^(1*("0x"+BD0));
    if (r<0) {r+=1*"0x100000000";}
    if (r>(1*"0xFFFFFFFF")) {r-=1*"0x100000000";} BD0=DecToHex(r,8);r=(defense_special.selectedIndex)*33554432;r+=(attack_special.selectedIndex)*1048576;r+=(speed.selectedIndex)*32768;r+=(defense.selectedIndex)*1024;r+=(attack.selectedIndex)*32;r+=(health.selectedIndex)*1;
    if (pokemon_egg.checked) {r+=1073741824;}
    if (pokemon_ability.selectedIndex==1) {r+=2147483648;} BD1=DecToHex(r,8);Ds[1].value=BD1;cs+=(1*("0x"+BD1))%65536;cs+=Math.floor((1*("0x"+BD1))/65536);r=xk^(1*("0x"+BD1));
    if (r<0) {r+=1*"0x100000000";}
    if (r>(1*"0xFFFFFFFF")) {r-=1*"0x100000000";} BD1=DecToHex(r,8);r=ribbon_cool.selectedIndex;r+=(ribbon_beauty.selectedIndex)*8;r+=(ribbon_cute.selectedIndex)*64;r+=(ribbon_smart.selectedIndex)*512;r+=(ribbon_tough.selectedIndex)*4096;
    if (RChampion.checked) {r+=32768;}
    if (RB50.checked) {r+=65536;}
    if (RB100.checked) {r+=131072;}
    if (RSketch.checked) {r+=262144;}
    if (RHardWorker.checked) {r+=524288;}
    if (RS0.checked) {r+=1048576;}
    if (RS1.checked) {r+=2097152;}
    if (RS2.checked) {r+=4194304;}
    if (RS3.checked) {r+=8388608;}
    if (RS4.checked) {r+=16777216;}
    if (RS5.checked) {r+=33554432;}
    if (RS6.checked) {r+=67108864;}
    if (pokemon_obedient.checked) {r+=2147483648;} BD2=DecToHex(r,8);Ds[2].value=BD2;cs+=(1*("0x"+BD2))%65536;cs+=Math.floor((1*("0x"+BD2))/65536);r=xk^(1*("0x"+BD2));
    if (r<0) {r+=1*"0x100000000";}
    if (r>(1*"0xFFFFFFFF")) {r-=1*"0x100000000";} BD2=DecToHex(r,8);cs=Math.floor(cs%65536);code_selector.value=DecToHex(cs,4);ts="0000"+DecToHex(cs,4);D[7].value=ts;S=SetABCD();
    for (var i=0; i<4;i++) {r=i*3+8;if (S.substr(i,1)=="A") {D[r].value=BA0;r+=1;D[r].value=BA1;r+=1;D[r].value=BA2;} if (S.substr(i,1)=="B") {D[r].value=BB0;r+=1;D[r].value=BB1;r+=1;D[r].value=BB2;} if (S.substr(i,1)=="C") {D[r].value=BC0;r+=1;D[r].value=BC1;r+=1;D[r].value=BC2;} if (S.substr(i,1)=="D") {D[r].value=BD0;r+=1;D[r].value=BD1;r+=1;D[r].value=BD2;}}
    tt=SetDNA();
}
function ec(addr,dat,s,r) {
    var dh=" ";var dl=" ";var ah=" ";var al=" ";var a=0;var A0=" ";var A1=" ";var A2=" ";var tt=" ";tt="";
    if (s==32) {
        if (r==0) {tt=addr+":"+dat;}
        if (r==1) {al=addr.substring(1,8);A1="2"+al;tt=GAEncrypt(A1,dat,"1");}
        if (r==2) {ah=addr.substring(1,2);al=addr.substring(3,8);A1="04"+ah+al;tt=GAEncrypt(A1,dat,"3");tt=tt.substring(0,8)+" "+tt.substring(8,16);}
        if (r==3||r==5) {al=addr.substring(1,8);A1="8"+al;dl=dat.substring(4,8);tt=A1+" "+dl+"\r\n";a=(1*("0x"+addr))+2;A0=DecToHex(a,8);al=A0.substring(1,8);A1="8"+al;dh=dat.substring(0,4);tt+=A1+" "+dh;}
    }
    if (s==16) {
        if (r==0) {tt=addr+":"+dat;}
        if (r==1) {al=addr.substring(1,8);A1="1"+al;A2="0000"+dat;tt=GAEncrypt(A1,A2,"1");}
        if (r==2) {ah=addr.substring(1,2);al=addr.substring(3,8);A1="02"+ah+al;A2="0000"+dat;tt=GAEncrypt(A1,A2,"3");tt=tt.substring(0,8)+" "+tt.substring(8,16);}
        if (r==3||r==5) {al=addr.substring(1,8);A1="8"+al;tt=A1+" "+dat;}
    }
    if (s==8) {
        if (r==0) {tt=addr+":"+dat;}
        if (r==1) {al=addr.substring(1,8);A1="0"+al;A2="000000"+dat;tt=GAEncrypt(A1,A2,"1");}
        if (r==2) {ah=addr.substring(1,2);al=addr.substring(3,8);A1="00"+ah+al;A2="000000"+dat;tt=GAEncrypt(A1,A2,"3");tt=tt.substring(0,8)+" "+tt.substring(8,16);}
        if (r==3||r==5) {al=addr.substring(1,8);A1="3"+al;tt=A1+" 00"+dat;}
    }
    return tt;
}
function codeout(n) {
    clipboard_text.value = '';
    var addr=0;var tt=" ";var t=" ";var r=0;var L="\r\n";var D=rdna;var tcode="";var tlog=" ";var i=0;var i2=0;var BA0=" ";var BA1=" ";var BA2=" ";t=FillAll();
    i=game_select.value;
    if (i==0) {t="Ruby"+L+L;}
    if (i==1) {t="Sapphire"+L+L;}
    if (i==2) {t="Rubis"+L+L;}
    if (i==3) {t="Saphir"+L+L;}
    if (i==4) {t="Rubin-Edition"+L+L;}
    if (i==5) {t="Saphir-Edition"+L+L;}
    if (i==6) {t="Rubi"+L+L;}
    if (i==7) {t="Zafiro"+L+L;}
    if (i==8) {t="Rubino"+L+L;}
    if (i==9) {t="Zaffiro"+L+L;}
    if (i==10) {t="Ruby"+L+L;}
    if (i==11) {t="Sapphire"+L+L;}
    if (i==12) {t="Ruby"+L+L;}
    if (i==13) {t="Sapphire"+L+L;}
    if (i==14) {t="Fire Red"+L+L;}
    if (i==15) {t="Leaf Green"+L+L;}
    if (i==16) {t="Red Fire 1.0"+L+L;}
    if (i==17) {t="Green Leaf 1.0"+L+L;}
    if (i==18) {t="Emerald"+L+L;}
    if (i==19) {t="Red Fire 1.1"+L+L;}
    if (i==20) {t="Green Leaf 1.1"+L+L;}
    if (i==21) {t="Rojo Fuego"+L+L;}
    if (i==22) {t="Verde Hoja"+L+L;}
    if (i==23) {t="Blattgrüne Edition"+L+L;}
    if (i==24) {t="Feuerrote Edition"+L+L;}
    if (i==25) {t="Rouge Feu"+L+L;}
    if (i==26) {t="Vert Feuille"+L+L;}
    if (i==27) {t="Versione Rosso Fuoco"+L+L;}
    if (i==28) {t="Versione Verde Foglia"+L+L;}
    if (i==29) {t="Emerald"+L+L;}
    if (i==30) {t="Smaragd-Edition"+L+L;}
    tcode+=t;
    if (n==-1) {r=0;for (i=0; i<6; i++) {if (RCode[i].checked) {r=i;i=7;}}}
    else {r=n;} LogConsole.value="Code Out";tlog="Code Output\r\n";tCode="";t="";
    if (r<4||r==5) {
        i=game_select.value;
        if (master_code.checked) {
            if (i>13 && i<16 && r==0) {t+="Anti-DMA (Muss aktiviert sein):"+L+"0D6333465BE368CB"+L;}
            if (i>15 && i<18 && r==0) {t+="Anti-DMA (Muss aktiviert sein):"+L+"20AAA133853F98EB"+L;}
            if (i==18 && r==0) {t+="Anti-DMA (Muss aktiviert sein):"+L+"8182D513D9CC1064"+L;}
            if (i>18 && i<21 && r==0) {t+="Anti-DMA (Muss aktiviert sein):"+L+"08CEC818DE923E83"+L;}
            if (i>20 && i<23 && r==0) {t+="Anti-DMA (Muss aktiviert sein):"+L+"C16A4EA4CA210A5C"+L;}
            if (i>22 && i<25 && r==0) {t+="Anti-DMA (Muss aktiviert sein):"+L+"5A8E401F123286BB"+L;}
            if (i>24 && i<27 && r==0) {t+="Anti-DMA (Muss aktiviert sein):"+L+"7744C4A7176BB522"+L;}
            if (i>26 && i<29 && r==0) {t+="Anti-DMA (Muss aktiviert sein):"+L+"B2C57874904ABEBE"+L;}
            if (i==29 && r==0) {t+="Anti-DMA (Muss aktiviert sein):"+L+"E1F2DD6004576E50"+L;}
            if (r>0) {t+="Master-Code:"+L;}
            if (i==0 && r==1) {t+="9E6AC862823AB7A8"+L+"46B7D9E4A709E9E1"+L+L;}
            if (i==1 && r==1) {t+="9E6AC862823AB7A8"+L+"8365F8FA817CF3E9"+L+L;}
            if (i==2 && r==1) {t+="683C7E7A0102EC9F"+L+"DF9D42B90AAFD621"+L+L;}
            if (i==3 && r==1) {t+="683C7E7A0102EC9F"+L+"1CA30DA43F2C9EED"+L+L;}
            if (i==4 && r==1) {t+="9CC58A9036224243"+L+"9ECADB3BFBDD4712"+L+L;}
            if (i==5 && r==1) {t+="9CC58A9036224243"+L+"67DCACBE05C3BA0E"+L+L;}
            if (i==6 && r==1) {t+="E63DA7BD161720E3"+L+"9EE2F297F924AEF6"+L+L;}
            if (i==7 && r==1) {t+="E63DA7BD161720E3"+L+"2A0954429AF614DC"+L+L;}
            if (i==8 && r==1) {t+="9CC58A9036224243"+L+"B571CB0DFF0D0CA4"+L+L;}
            if (i==9 && r==1) {t+="9CC58A9036224243"+L+"2DB32A9BB94B6340"+L+L;}
            if (i==10 && r==1) {t+="FBC85C6B793937A1"+L+"46B7D9E4A709E9E1"+L+L;}
            if (i==11 && r==1) {t+="FBC85C6B793937A1"+L+"8365F8FA817CF3E9"+L+L;}
            if (i==12 && r==1) {t+="6E93895CC2679628"+L+"02BD3075C9E2B4CE"+L+L;}
            if (i==13 && r==1) {t+="6E93895CC2679628"+L+"03514D3E7157DA35"+L+L;}
            if (i==14 && r==1) {t+="78A0B2AE45CB4E65"+L+"423E91A1A46AEFBA"+L+L;t+="Anti-DMA (Muss aktiviert sein):"+L+"0D6333465BE368CB"+L+L;}
            if (i==15 && r==1) {t+="78A0B2AE45CB4E65"+L+"DA3DFA98CB6A3E6E"+L+L;t+="Anti-DMA (Muss aktiviert sein):"+L+"0D6333465BE368CB"+L+L;}
            if (i==16 && r==1) {t+="78A0B2AE45CB4E65"+L+"3C1BD432E365EC14"+L+L;t+="Anti-DMA (Muss aktiviert sein):"+L+"20AAA133853F98EB"+L+L;}
            if (i==17 && r==1) {t+="78A0B2AE45CB4E65"+L+"4D2BB04F34651E54"+L+L;t+="Anti-DMA (Muss aktiviert sein):"+L+"20AAA133853F98EB"+L+L;}
            if (i==18 && r==1) {t+="CADD22F0ADF77526"+L+"6626FE4B34EB0C5C"+L+L;t+="Anti-DMA (Muss aktiviert sein):"+L+"8182D513D9CC1064"+L+L;}
            if (i==19 && r==1) {t+="388E455EF1D8A012"+L+"3C1BD432E365EC14"+L+L;t+="Anti-DMA (Muss aktiviert sein):"+L+"08CEC818DE923E83"+L+L;}
            if (i==20 && r==1) {t+="388E455EF1D8A012"+L+"4D2BB04F34651E54"+L+L;t+="Anti-DMA (Muss aktiviert sein):"+L+"08CEC818DE923E83"+L+L;}
            if (i==21 && r==1) {t+="CADD22F0ADF77526"+L+"DB1CCA88E093B834"+L+L;t+="Anti-DMA (Muss aktiviert sein):"+L+"C16A4EA4CA210A5C"+L+L;}
            if (i==22 && r==1) {t+="CADD22F0ADF77526"+L+"D6BB988DE3709329"+L+L;t+="Anti-DMA (Muss aktiviert sein):"+L+"C16A4EA4CA210A5C"+L+L;}
            if (i==23 && r==1) {t+="A6E15278DFA09AB7"+L+"21631F6FD70B7220"+L+L;t+="Anti-DMA (Muss aktiviert sein):"+L+"5A8E401F123286BB"+L+L;}
            if (i==24 && r==1) {t+="A6E15278DFA09AB7"+L+"EC29BAC6E7EB2C8B"+L+L;t+="Anti-DMA (Muss aktiviert sein):"+L+"5A8E401F123286BB"+L+L;}
            if (i==25 && r==1) {t+="CADD22F0ADF77526"+L+"B0B22CF03865C3DE"+L+L;t+="Anti-DMA (Muss aktiviert sein):"+L+"7744C4A7176BB522"+L+L;}
            if (i==26 && r==1) {t+="CADD22F0ADF77526"+L+"A3BA42C2EB1050DF"+L+L;t+="Anti-DMA (Muss aktiviert sein):"+L+"7744C4A7176BB522"+L+L;}
            if (i==27 && r==1) {t+="A6E15278DFA09AB7"+L+"96A8EC170D4714B6"+L+L;t+="Anti-DMA (Muss aktiviert sein):"+L+"B2C57874904ABEBE"+L+L;}
            if (i==28 && r==1) {t+="A6E15278DFA09AB7"+L+"DA661FCD9D61C27D"+L+L;t+="Anti-DMA (Muss aktiviert sein):"+L+"B2C57874904ABEBE"+L+L;}
            if (i==29 && r==1) {t+="78A0B2AE45CB4E65"+L+"3C1BD432E365EC14"+L+L;t+="Anti-DMA (Muss aktiviert sein):"+L+"E1F2DD6004576E50"+L+L;}
            if (i==0 && r==2) {t+="DE00AAFD 2EBD05D0"+L+"530823D9 16558191"+L+L;}
            if (i==1 && r==2) {t+="DE00AAFD 2EBD05D0"+L+"B4564EFE 23F44BF2"+L+L;}
            if (i==2 && r==2) {t+="F57C7BCB ADC632B9"+L+"90A6E9C3 2D8D03E3"+L+L;}
            if (i==3 && r==2) {t+="F57C7BCB ADC632B9"+L+"A43FB15C 1E8ECF5D"+L+L;}
            if (i==4 && r==2) {t+="5E263E14 AD8EF97D"+L+"851B05E0 594B5D88"+L+L;}
            if (i==5 && r==2) {t+="5E263E14 AD8EF97D"+L+"41C1BF4B 17EE5233"+L+L;}
            if (i==6 && r==2) {t+="33E6A427 056936FC"+L+"E87BA897 4FFD3634"+L+L;}
            if (i==7 && r==2) {t+="33E6A427 056936FC"+L+"B02EF1DB D06782F2"+L+L;}
            if (i==8 && r==2) {t+="5E263E14 AD8EF97D"+L+"93A1C658 8DD5F1D0"+L+L;}
            if (i==9 && r==2) {t+="5E263E14 AD8EF97D"+L+"F5288E7B 33220035"+L+L;}
            if (i==10 && r==2) {t+="8CF9C3C8 FD548197"+L+"530823D9 16558191"+L+L;}
            if (i==11 && r==2) {t+="8CF9C3C8 FD548197"+L+"B4564EFE 23F44BF2"+L+L;}
            if (i==12 && r==2) {t+="CD361343 4CF2A2BF"+L+"1660CD84 4D5251F4"+L+L;}
            if (i==13 && r==2) {t+="CD361343 4CF2A2BF"+L+"65C7640E 2099B840"+L+L;}
            if (i==14 && r==2) {t+="72BC6DFB E9CA5465"+L+"F0826040 FE465C57"+L+L;t+="Anti-DMA (Muss aktiviert sein):"+L+"80C2CE72 6E8398D4"+L;t+="78DA95DF 44018CB4"+L+L;}
            if (i==15 && r==2) {t+="72BC6DFB E9CA5465"+L+"2FD2DBC6 552BC912"+L+L;t+="Anti-DMA (Muss aktiviert sein):"+L+"80C2CE72 6E8398D4"+L;t+="78DA95DF 44018CB4"+L+L;}
            if (i==16 && r==2) {t+="72BC6DFB E9CA5465"+L+"A47FB2DC 1AF3CA86"+L+L;t+="Anti-DMA (Muss aktiviert sein):"+L+"8D671FD9 6F6BEFF2"+L;t+="78DA95DF 44018CB4"+L+L;}
            if (i==17 && r==2) {t+="72BC6DFB E9CA5465"+L+"56671F3A 6F4F4D6B"+L+L;t+="Anti-DMA (Muss aktiviert sein):"+L+"8D671FD9 6F6BEFF2"+L;t+="78DA95DF 44018CB4"+L+L;}
            if (i==18 && r==2) {t+="D8BAE4D9 4864DCE5"+L+"0CD39E3A BD6E41B1"+L+L;t+="Anti-DMA (Muss aktiviert sein):"+L+"6ED6DA14 686DF10E"+L;t+="1C7B3231 B494738C"+L+L;}
            if (i==19 && r==2) {t+="E6A003D6 8110DDD5"+L+"A47FB2DC 1AF3CA86"+L+L;t+="Anti-DMA (Muss aktiviert sein):"+L+"24C35E88 037C3033"+L;t+="78DA95DF 44018CB4"+L+L;}
            if (i==20 && r==2) {t+="E6A003D6 8110DDD5"+L+"56671F3A 6F4F4D6B"+L+L;t+="Anti-DMA (Muss aktiviert sein):"+L+"24C35E88 037C3033"+L;t+="78DA95DF 44018CB4"+L+L;}
            if (i==21 && r==2) {t+="D8BAE4D9 4864DCE5"+L+"4879A617 AE7683D9"+L+L;t+="Anti-DMA (Muss aktiviert sein):"+L+"61181D0E ABC43CBE"+L;t+="78DA95DF 44018CB4"+L+L;}
            if (i==22 && r==2) {t+="D8BAE4D9 4864DCE5"+L+"CB89E5ED 0ADBAF91"+L+L;t+="Anti-DMA (Muss aktiviert sein):"+L+"61181D0E ABC43CBE"+L;t+="78DA95DF 44018CB4"+L+L;}
            if (i==23 && r==2) {t+="DFC87987 BBA21C13"+L+"66A64C7D C1365507"+L+L;t+="Anti-DMA (Muss aktiviert sein):"+L+"A269812A 7C8BB4D9"+L;t+="78DA95DF 44018CB4"+L+L;}
            if (i==24 && r==2) {t+="DFC87987 BBA21C13"+L+"CEBF8DCD FD0A2E01"+L+L;t+="Anti-DMA (Muss aktiviert sein):"+L+"A269812A 7C8BB4D9"+L;t+="78DA95DF 44018CB4"+L+L;}
            if (i==25 && r==2) {t+="D8BAE4D9 4864DCE5"+L+"0B40BD4C 6F70EA2C"+L+L;t+="Anti-DMA (Muss aktiviert sein):"+L+"115D14A2 58B9B5BF"+L;t+="78DA95DF 44018CB4"+L+L;}
            if (i==26 && r==2) {t+="D8BAE4D9 4864DCE5"+L+"FB41D9B3 3A1BF27D"+L+L;t+="Anti-DMA (Muss aktiviert sein):"+L+"115D14A2 58B9B5BF"+L;t+="78DA95DF 44018CB4"+L+L;}
            if (i==27 && r==2) {t+="DFC87987 BBA21C13"+L+"8378FDD4 5ABC5853"+L+L;t+="Anti-DMA (Muss aktiviert sein):"+L+"1C83801E D2A043BF"+L;t+="78DA95DF 44018CB4"+L+L;}
            if (i==28 && r==2) {t+="DFC87987 BBA21C13"+L+"518E0AB2 E182C852"+L+L;t+="Anti-DMA (Muss aktiviert sein):"+L+"1C83801E D2A043BF"+L;t+="78DA95DF 44018CB4"+L+L;}
            if (i==29 && r==2) {t+="D8BAE4D9 4864DCE5"+L+"A86CDBA5 19BA49B3"+L+L;t+="Anti-DMA (Muss aktiviert sein):"+L+"B2809E31 3CEF5320"+L;t+="1C7B3231 B494738C"+L+L;}
            if (i==30 && r==2) {t+="D8BAE4D9 4864DCE5"+L+"DD5F41DA 90B02762"+L+L;t+="Anti-DMA (Muss aktiviert sein):"+L+"96B7FF51 60DE4853"+L;t+="1C7B3231 B494738C"+L+L;}
            if (i==0 && (r==3 || r==5)) {t+="0000B138 000A"+L+"1000042C 0007"+L+L;}
            if (i==1 && (r==3 || r==5)) {t+="000056D0 000A"+L+"1000042C 0007"+L+L;}
            if (i==2 && (r==3 || r==5)) {t+="0000ABFA 000A"+L+"10000564 0007"+L+L;}
            if (i==3 && (r==3 || r==5)) {t+="0000F97B 000A"+L+"10000564 0007"+L+L;}
            if (i==4 && (r==3 || r==5)) {t+="00000A78 000A"+L+"10000564 0007"+L+L;}
            if (i==5 && (r==3 || r==5)) {t+="0000E1F8 000A"+L+"10000564 0007"+L+L;}
            if (i==6 && (r==3 || r==5)) {t+="000045A1 000A"+L+"1000055C 0007"+L+L;}
            if (i==7 && (r==3 || r==5)) {t+="00001E2C 000A"+L+"1000055C 0007"+L+L;}
            if (i==8 && (r==3 || r==5)) {t+="00000018 000A"+L+"1000055C 0007"+L+L;}
            if (i==9 && (r==3 || r==5)) {t+="00005D09 000A"+L+"1000055C 0007"+L+L;}
            if (i==10 && (r==3 || r==5)) {t+="00007d44 000A"+L+"1000042C 0007"+L+L;}
            if (i==11 && (r==3 || r==5)) {t+="00000b86 000A"+L+"1000042C 0007"+L+L;}
            if (i==12 && (r==3 || r==5)) {t+="00004798 000A"+L+"10000434 0007"+L+L;}
            if (i==13 && (r==3 || r==5)) {t+="00002B1F 000A"+L+"10000434 0007"+L+L;}
            if (i==14 && (r==3 || r==5)) {t+="000077CA 000A"+L+"1004448C 0007"+L+"83005040 61A1"+L+"83005042 0A35"+L+L;}
            if (i==15 && (r==3 || r==5)) {t+="0000BE99 000A"+L+"1004448C 0007"+L+"83005040 61A1"+L+"83005042 0A35"+L+L;}
            if (i==16 && (r==3 || r==5)) {t+="0000295F 000A"+L+"10044EC8 0007"+L+"83005000 61A1"+L+"83005002 0A35"+L+L;}
            if (i==17 && (r==3 || r==5)) {t+="000038DA 000A"+L+"10044EC8 0007"+L+"83005000 61A1"+L+"83005002 0A35"+L+L;}
            if (i==18 && (r==3 || r==5)) {t+="0000961F 000A"+L+"1006F050 0007"+L+"83005ae0 61A1"+L+"83005ae2 0A35"+L+L;}
            if (i==19 && (r==3 || r==5)) {t+="00005E18 000A"+L+"10044EDC 0007"+L+"83005000 61A1"+L+"83005002 0A35"+L+L;}
            if (i==20 && (r==3 || r==5)) {t+="0000E673 000A"+L+"10044EDC 0007"+L+"83005000 61A1"+L+"83005002 0A35"+L+L;}
            if (i==21 && (r==3 || r==5)) {t+="00002B02 000A"+L+"10044EA0 0007"+L+"83004F50 61A1"+L+"83004F52 0A35"+L+L;}
            if (i==22 && (r==3 || r==5)) {t+="00003107 000A"+L+"10044EA0 0007"+L+"83004F50 61A1"+L+"83004F52 0A35"+L+L;}
            if (i==23 && (r==3 || r==5)) {t+="00005D5C 000A"+L+"10044DCC 0007"+L+"83004F50 61A1"+L+"83004F52 0A35"+L+L;}
            if (i==24 && (r==3 || r==5)) {t+="00002998 000A"+L+"10044DCC 0007"+L+"83004F50 61A1"+L+"83004F52 0A35"+L+L;}
            if (i==25 && (r==3 || r==5)) {t+="000093B5 000A"+L+"10044E8C 0007"+L+"83004F50 61A1"+L+"83004F52 0A35"+L+L;}
            if (i==26 && (r==3 || r==5)) {t+="0000250D 000A"+L+"10044E8C 0007"+L+"83004F50 61A1"+L+"83004F52 0A35"+L+L;}
            if (i==27 && (r==3 || r==5)) {t+="00000341 000A"+L+"10044DB8 0007"+L+"83004F50 61A1"+L+"83004F52 0A35"+L+L;}
            if (i==28 && (r==3 || r==5)) {t+="000045A6 000A"+L+"10044DB8 0007"+L+"83004F50 61A1"+L+"83004F52 0A35"+L+L;}
            if (i==29 && (r==3 || r==5)) {t+="00006FA7 000A"+L+"1006F5CC 0007"+L+"83005D80 61A6"+L+"83005D82 0A35"+L+L;}
            tcode+=t;
        }
    }
    if (r<4||r==5) {
        if (trainer_name_box.checked) {
            tcode+="Trainer-Name: "+trainer_name.value+L;
            if (game_select.value<12) {BA1="02024EA4";}
            if (game_select.value>11&&game_select.value<14) {BA1="02024C04";}
            if (game_select.value>13&&game_select.value<16) {BA1="020244E8";}
            if (game_select.value>15&&game_select.value<18) {BA1="02024588";}
            if (game_select.value==18) {BA1="020246F8";}
            if (game_select.value>18&&game_select.value<29) {BA1="02024588";}
            if (game_select.value==29) {BA1="02024A54";}
            BA2=D[5].value;tt=ec(BA1,BA2,32,r);tcode+=tt+L;
            if (game_select.value<12) {BA1="02024EA8";}
            if (game_select.value>11&&game_select.value<14) {BA1="02024C08";}
            if (game_select.value>13&&game_select.value<16) {BA1="020244EC";}
            if (game_select.value>15&&game_select.value<18) {BA1="0202458C";}
            if (game_select.value==18) {BA1="020246FC";}
            if (game_select.value>18&&game_select.value<29) {BA1="0202458C";}
            //if (game_select.value==29) {BA1="02024A58";}
            if (game_select.value>28&&game_select.value<31) {BA1="02024A58";}
            BA2=D[6].value;BA2="FF"+BA2.substring(2,8);tt=ec(BA1,BA2,32,r);tcode+=tt+L;
        }
        if (trainer_gender_box.checked) {
            BA0="♂";
            if (trainer_gender.value==1) {BA0="♀";}
            tcode+=L+"Trainer-Geschlecht: "+BA0+L;
            if (game_select.value<12) {BA1="02024EAC";}
            if (game_select.value>11&&game_select.value<14) {BA1="02024C0C";}
            if (game_select.value>13&&game_select.value<16) {BA1="020244F0";}
            if (game_select.value>15&&game_select.value<18) {BA1="02024590";}
            if (game_select.value==18) {BA1="02024700";}
            if (game_select.value>18&&game_select.value<29) {BA1="02024590";}
            //if (game_select.value==29) {BA1="02024A5C";}
            if (game_select.value>28&&game_select.value<31) {BA1="02024A5C";}
            BA2=DecToHex(trainer_gender.value,2);tt=ec(BA1,BA2,8,r);tcode+=tt+L;
        }
        if (trainer_id_box.checked) {
            tcode+=L+"Trainer-ID: "+trainer_id.value+L;
            if (game_select.value<12) {BA1="02024EAE";}
            if (game_select.value>11&&game_select.value<14) {BA1="02024C0E";}
            if (game_select.value>13&&game_select.value<16) {BA1="020244F2";}
            if (game_select.value>15&&game_select.value<18) {BA1="02024592";}
            if (game_select.value==18) {BA1="02024702";}
            if (game_select.value>18&&game_select.value<29) {BA1="02024592";}
            //if (game_select.value==29) {BA1="02024A5E";}
            if (game_select.value>28&&game_select.value<31) {BA1="02024A5E";}
            BA2=D[1].value.substring(4,8);tt=ec(BA1,BA2,16,r);tcode+=tt+L;
        }
        if (trainer_id_secret_box.checked) {
            tcode+=L+"Trainer-Secret-ID: "+trainer_id_secret.value+L;
            if (game_select.value<12) {BA1="02024EB0";}
            if (game_select.value>11&&game_select.value<14) {BA1="02024C10";}
            if (game_select.value>13&&game_select.value<16) {BA1="020244F4";}
            if (game_select.value>15&&game_select.value<18) {BA1="02024594";}
            if (game_select.value==18) {BA1="02024704";}
            if (game_select.value>18&&game_select.value<29) {BA1="02024594";}
            //if (game_select.value==29) {BA1="02024A60";}
            if (game_select.value>28&&game_select.value<31) {BA1="02024A60";}
            BA2=D[1].value.substring(0,4);tt=ec(BA1,BA2,16,r);tcode+=tt+L;
        }
        if (pokemon_name_box.checked) {
            tcode+=L+"Pokemon-Namens-Code: "+pokemon_name.value+L;
            if (game_select.value<12) {addr=(1*"0x020300A4")+(pokemon_box.selectedIndex)*2400+(pokemon_spot.selectedIndex)*80;}
            if (game_select.value>11&&game_select.value<14) {addr=(1*"0x0202FDC0")+(pokemon_box.selectedIndex)*2400+(pokemon_spot.selectedIndex)*80;}
            if (game_select.value>13&&game_select.value<16) {addr=(1*"0x02029250")+(pokemon_box.selectedIndex)*2400+(pokemon_spot.selectedIndex)*80;}
            if (game_select.value>15&&game_select.value<18) {addr=(1*"0x02029318")+(pokemon_box.selectedIndex)*2400+(pokemon_spot.selectedIndex)*80;}
            if (game_select.value==18) {addr=(1*"0x020294B0")+(pokemon_box.selectedIndex)*2400+(pokemon_spot.selectedIndex)*80;}
            if (game_select.value>18&&game_select.value<29) {addr=(1*"0x02029318")+(pokemon_box.selectedIndex)*2400+(pokemon_spot.selectedIndex)*80;}
            //if (game_select.value==29) {addr=(1*"0x0202980C")+(Box.selectedIndex)*2400+(Spot.selectedIndex)*80;}
            if (game_select.value>28&&game_select.value<31) {addr=(1*"0x0202980C")+(pokemon_box.selectedIndex)*2400+(pokemon_spot.selectedIndex)*80;}
            addr+=8;BA1=DecToHex(addr,8);BA2=D[2].value;tt=ec(BA1,BA2,32,r);tcode+=tt+L;addr+=4;BA1=DecToHex(addr,8);BA2=D[3].value;tt=ec(BA1,BA2,32,r);tcode+=tt+L;addr+=4;BA1=DecToHex(addr,8);BA2=D[4].value.substring(4,8);tt=ec(BA1,BA2,16,r);tcode+=tt+L;
        }
        if (font_box.checked) {
            tcode+="Font Code: "+font.value+L;tcode+="Box: "+(pokemon_box.selectedIndex+1)+"   -   Platz:"+(pokemon_spot.selectedIndex+1)+L;
            if (game_select.value<12) {addr=(1*"0x020300A4")+(pokemon_box.selectedIndex)*2400+(pokemon_spot.selectedIndex)*80;}
            if (game_select.value>11&&game_select.value<14) {addr=(1*"0x0202FDC0")+(pokemon_box.selectedIndex)*2400+(pokemon_spot.selectedIndex)*80;}
            if (game_select.value>13&&game_select.value<16) {addr=(1*"0x02029250")+(pokemon_box.selectedIndex)*2400+(pokemon_spot.selectedIndex)*80;}
            if (game_select.value>15&&game_select.value<18) {addr=(1*"0x02029318")+(pokemon_box.selectedIndex)*2400+(pokemon_spot.selectedIndex)*80;}
            if (game_select.value==18) {addr=(1*"0x020294B0")+(pokemon_box.selectedIndex)*2400+(pokemon_spot.selectedIndex)*80;}
            if (game_select.value>18&&game_select.value<29) {addr=(1*"0x02029318")+(pokemon_box.selectedIndex)*2400+(pokemon_spot.selectedIndex)*80;}
            //if (game_select.value==29) {addr=(1*"0x0202980C")+(Box.selectedIndex)*2400+(Spot.selectedIndex)*80;}
            if (game_select.value>28&&game_select.value<31) {addr=(1*"0x0202980C")+(pokemon_box.selectedIndex)*2400+(pokemon_spot.selectedIndex)*80;}
            addr+=18;BA1=DecToHex(addr,8);BA2=font.value;tt=ec(BA1,BA2,16,r);tcode+=tt+L;
        }
        if (mirage_island_code.checked&&(game_select.value<14||game_select.value==18||game_select.value==29||game_select.value==30)) {
            tcode+=L+"Wundereiland-Code"+L+"für dieses Pokemon:"+L;
            if (game_select.value<12) {BA1="02026ABC";}
            if (game_select.value>11&&game_select.value<14) {BA1="0202681C";}
            if (game_select.value==18) {BA1="02026A88";}
            if (game_select.value==29) {BA1="02026DE4";}
            if (game_select.value==30) {BA1="02026DE4";}
            BA2=D[0].value.substring(4,8);tt=ec(BA1,BA2,16,r);tcode+=tt+L;
        }
        tlog+="Box: "+(pokemon_box.selectedIndex+1)+"   -   Platz: "+(pokemon_spot.selectedIndex+1)+L;
        if (game_select.value<12) {addr=(1*"0x020300A4")+(pokemon_box.selectedIndex)*2400+(pokemon_spot.selectedIndex)*80;}
        if (game_select.value>11&&game_select.value<14) {addr=(1*"0x0202FDC0")+(pokemon_box.selectedIndex)*2400+(pokemon_spot.selectedIndex)*80;}
        if (game_select.value>13&&game_select.value<16) {addr=(1*"0x02029250")+(pokemon_box.selectedIndex)*2400+(pokemon_spot.selectedIndex)*80;}
        if (game_select.value>15&&game_select.value<18) {addr=(1*"0x02029318")+(pokemon_box.selectedIndex)*2400+(pokemon_spot.selectedIndex)*80;}
        if (game_select.value==18) {addr=(1*"0x020294B0")+(pokemon_box.selectedIndex)*2400+(pokemon_spot.selectedIndex)*80;}
        if (game_select.value>18&&game_select.value<29) {addr=(1*"0x02029318")+(pokemon_box.selectedIndex)*2400+(pokemon_spot.selectedIndex)*80;}
        //if (game_select.value==29) {addr=(1*"0x0202980C")+(Box.selectedIndex)*2400+(Spot.selectedIndex)*80;}
        if (game_select.value>28&&game_select.value<31) {addr=(1*"0x0202980C")+(pokemon_box.selectedIndex)*2400+(pokemon_spot.selectedIndex)*80;}
        tlog+="Address: "+DecToHex(addr,8)+L;i=pokemon_select.options[pokemon_select.selectedIndex].value;tt=PokeDex(i);t=FI(tt,"~",3);
        tcode+=L+"Pokemon:   "+t+L+"Spitzname: "+pokemon_name.value+L+L;
        if (pokemon_egg.checked) {
            if (pokemon_happy.value<6) {tcode+="It's making sounds."+L+"It's about to hatch!"+L;}
            if (pokemon_happy.value<11&&pokemon_happy.value>5) {tcode+="It moves occsionally."+L+"It should hatch soon."+L+"Set Happy lower for faster hatching"+L;}
            if (pokemon_happy.value<41&&pokemon_happy.value>10) {tcode+="What will hatch from this?"+L+"It will take some time."+L+"Set Happy lower for faster hatching"+L;}
            if (pokemon_happy.value>40) {tcode+="It looks like this EGG will"+L+"take a long time to hatch."+L+"Set Happy lower for faster hatching"+L;}
        }
        tcode+="Box: "+(pokemon_box.selectedIndex+1)+"   -   Platz: "+(pokemon_spot.selectedIndex+1)+L+L;
        if (r==5) {BA1=DecToHex(addr,8);tt="5"+BA1.substring(1,8)+" 0028";tcode+=tt+L;BA2=dna.value;for (i=0; i<13; i++) {i2=i*12;BA0=BA2.substring(i2,i2+12);tt=BA0.substring(0,8)+" "+BA0.substring(8,12);tcode+=tt+L;tlog+="Code Sample "+i+":"+tt+L;} BA0=BA2.substring(156,160);tt=BA0.substring(0,4)+"0000 0000";tcode+=tt+L;tlog+="Code Sample 13:"+tt+L;}
        else {for (i=0; i<20; i++) {t= D[i].value;BA1=DecToHex(addr,8);tt=ec(BA1,t,32,r);tcode+=tt+L;
            clipboard_text.value += tt+' ';
            tlog+="Code Sample "+i+":"+t+L;addr+=4;}}
        if (RS0.checked || RS1.checked || RS2.checked || RS3.checked || RS4.checked || RS5.checked || RS6.checked) {tcode+=L+L+"Spezial-Bänder-Codes:"+L;}
        if (RS0.checked) {
            addr="02028844";
            if (game_select.value<12) {addr="02028844";}
            if (game_select.value>11&&game_select.value<14) {addr="020285A4";}
            if (game_select.value>13&&game_select.value<16) {addr="02024FD8";}
            if (game_select.value>15&&game_select.value<18) {addr="02025078";}
            if (game_select.value==18) {addr="0202884C";}
            if (game_select.value>18&&game_select.value<29) {addr="02025078";}
            //if (game_select.value==29) {addr="02028BA8";}
            if (game_select.value>28&&game_select.value<31) {addr="02028BA8";}
            BA2=DecToHex(S0M.selectedIndex,2);tt=ec(addr,BA2,8,r);tcode+=tt+L;
        }
        if (RS1.checked) {
            addr="02028845";
            if (game_select.value<12) {addr="02028845";}
            if (game_select.value>11&&game_select.value<14) {addr="020285A5";}
            if (game_select.value>13&&game_select.value<16) {addr="02024FD9";}
            if (game_select.value>15&&game_select.value<18) {addr="02025079";}
            if (game_select.value==18) {addr="0202884D";}
            if (game_select.value>18&&game_select.value<29) {addr="02025079";}
            //if (game_select.value==29) {addr="02028BA9";}
            if (game_select.value>28&&game_select.value<31) {addr="02028BA9";}
            BA2=DecToHex(S1M.selectedIndex,2);tt=ec(addr,BA2,8,r);tcode+=tt+L;
        }
        if (RS2.checked) {
            addr="02028846";
            if (game_select.value<12) {addr="02028846";}
            if (game_select.value>11&&game_select.value<14) {addr="020285A6";}
            if (game_select.value>13&&game_select.value<16) {addr="02024FDA";}
            if (game_select.value>15&&game_select.value<18) {addr="0202507A";}
            if (game_select.value==18) {addr="0202884D";}
            if (game_select.value>18&&game_select.value<29) {addr="0202507A";}
            //if (game_select.value==29) {addr="02028BAA";}
            if (game_select.value>28&&game_select.value<31) {addr="02028BAA";}
            BA2=DecToHex(S2M.selectedIndex,2);tt=ec(addr,BA2,8,r);tcode+=tt+L;
        }
        if (RS3.checked) {
            addr="02028847";
            if (game_select.value<12) {addr="02028847";}
            if (game_select.value>11&&game_select.value<14) {addr="020285A7";}
            if (game_select.value>13&&game_select.value<16) {addr="02024FDB";}
            if (game_select.value>15&&game_select.value<18) {addr="0202507B";}
            if (game_select.value==18) {addr="0202884E";}
            if (game_select.value>18&&game_select.value<29) {addr="0202507B";}
            //if (game_select.value==29) {addr="02028BAB";}
            if (game_select.value>28&&game_select.value<31) {addr="02028BAB";}
            BA2=DecToHex(S3M.selectedIndex,2);tt=ec(addr,BA2,8,r);tcode+=tt+L;
        }
        if (RS4.checked) {
            addr="02028848";
            if (game_select.value<12) {addr="02028848";}
            if (game_select.value>11&&game_select.value<14) {addr="020285A8";}
            if (game_select.value>13&&game_select.value<16) {addr="02024FDC";}
            if (game_select.value>15&&game_select.value<18) {addr="0202507C";}
            if (game_select.value==18) {addr="0202884F";}
            if (game_select.value>18&&game_select.value<29) {addr="0202507C";}
            //if (game_select.value==29) {addr="02028BAC";}
            if (game_select.value>28&&game_select.value<31) {addr="02028BAC";}
            BA2=DecToHex(S4M.selectedIndex,2);tt=ec(addr,BA2,8,r);tcode+=tt+L;
        }
        if (RS5.checked) {
            addr="02028849";
            if (game_select.value<12) {addr="02028849";}
            if (game_select.value>11&&game_select.value<14) {addr="020285A9";}
            if (game_select.value>13&&game_select.value<16) {addr="02024FDD";}
            if (game_select.value>15&&game_select.value<18) {addr="0202507D";}
            if (game_select.value==18) {addr="02028850";}
            if (game_select.value>18&&game_select.value<29) {addr="0202507D";}
            //if (game_select.value==29) {addr="02028BAD";}
            if (game_select.value>28&&game_select.value<31) {addr="02028BAD";}
            BA2=DecToHex(S5M.selectedIndex,2);tt=ec(addr,BA2,8,r);tcode+=tt+L;
        }
        if (RS6.checked) {
            addr="0202884A";
            if (game_select.value<12) {addr="0202884A";}
            if (game_select.value>11&&game_select.value<14) {addr="020285AA";}
            if (game_select.value>13&&game_select.value<16) {addr="02024FDE";}
            if (game_select.value>15&&game_select.value<18) {addr="0202507E";}
            if (game_select.value==18) {addr="02028851";}
            if (game_select.value>18&&game_select.value<29) {addr="0202507E";}
            //if (game_select.value==29) {addr="02028BAE";}
            if (game_select.value>28&&game_select.value<31) {addr="02028BAE";}
            BA2=DecToHex(S6M.selectedIndex,2);tt=ec(addr,BA2,8,r);tcode+=tt+L;
        }
    }
    else {tcode=dna.value;}
    code_output.value=tcode;
    LogConsole.value=tlog+"Fertig...";

    //var create_clipboard = access.CreateTextFile('clipboard.cmd',1,0);
    //create_clipboard.WriteLine('echo '+clipboard_text.value+' | clip');
    //create_clipboard.Close();
    //execute.Run('clipboard.cmd',1,1);
}
function IsCode(C) {var e=0;e=0;if (C=="0") {e=1;} if (C=="1") {e=1;} if (C=="2") {e=1;} if (C=="3") {e=1;} if (C=="4") {e=1;} if (C=="5") {e=1;} if (C=="6") {e=1;} if (C=="7") {e=1;} if (C=="8") {e=1;} if (C=="9") {e=1;} if (C=="a") {e=1;} if (C=="b") {e=1;} if (C=="c") {e=1;} if (C=="d") {e=1;} if (C=="e") {e=1;} if (C=="f") {e=1;} if (C=="A") {e=1;} if (C=="B") {e=1;} if (C=="C") {e=1;} if (C=="D") {e=1;} if (C=="E") {e=1;} if (C=="F") {e=1;} if (C.charCodeAt(0)==13) {e=2;} if (C.charCodeAt(0)==10) {e=2;} if (C==" ") {e=2;} if (C==":") {e=2;} return e;}
function codein() {
    var t=" ";var tt=" ";var r=0;var tcode=" ";var tlog=" ";var i=0; var j=0; var n=0;var w=0; var x=0; var y=0; var z=0;var ao=0;var tf=0;var a=" "; var v=" ";var cb=0;var c=RCode;var D=rdna;
    tcode=code_output.value;LogConsole.value="Scanning for Addr\r\n";r=0; j=0; n=0; t="";tt="";tlog="";a=" ";v=" ";tf=0; ao=0; cb=0;tlog="Code Extraction\r\n";
    for (i=0;(tcode.length)>=i;i++) {
        t=tcode.substring(i,i+1);
        if (IsCode(t)==1) {
            tt+=t;
            n+=1;
            if (n>11 && cb==0) {
                t=tt.substring(0,4);
                if (t=="8203"||t=="8202"||t=="5202"||t=="5203") {
                    if (r==0) {
                        if (t=="8203"||t=="8202") {tlog+="CB/GSv4+Type8 Codes:\r\n";c[0].checked = false;c[1].checked = false;c[2].checked = false;c[3].checked = true;c[4].checked = false;c[5].checked = false;tf=4;}
                        if (t=="5202"||t=="5203") {tlog+="CB/GSv4+Type5 Codes:\r\n";c[0].checked = false;c[1].checked = false;c[2].checked = false;c[3].checked = false;c[4].checked = false;c[5].checked = true;tf=6;}
                        a="0"+tt.substring(1,8);z=Math.floor((1*("0x"+a))-Math.floor(1*"0x020300A4",10),10);x=z/80;w=Math.floor(z/80);y=x-w;
                        if (y==0) {LogConsole.Value+="Found International Ruby/Sapphire Code\r\n";tlog+="Found International Ruby/Sapphire Code\r\n";game_select.value=0;ao=z;}
                        z=Math.floor((1*("0x"+a))-Math.floor(1*"0x0202FDC0",10),10);x=z/80;w=Math.floor(z/80);y=x-w;
                        if (y==0) {LogConsole.Value+="Found Japanese Ruby/Sapphire Code\r\n";tlog+="Found Japanese Ruby/Sapphire Code\r\n";game_select.value=12;ao=z;}
                        z=Math.floor((1*("0x"+a))-Math.floor(1*"0x02029250",10),10);x=z/80;w=Math.floor(z/80);y=x-w;
                        if (y==0) {LogConsole.Value+="Found Japanese Fire/Leaf Code\r\n";tlog+="Found Japanese Fire/Leaf Code\r\n";game_select.value=14;ao=z;}
                        z=Math.floor((1*("0x"+a))-Math.floor(1*"0x02029318",10),10);x=z/80;w=Math.floor(z/80);y=x-w;
                        if (y==0) {LogConsole.Value+="Found International Fire/Leaf Code\r\n";tlog+="Found International Fire/Leaf Code\r\n";game_select.value=16;ao=z;}
                        z=Math.floor((1*("0x"+a))-Math.floor(1*"0x020294B0",10),10);x=z/80;w=Math.floor(z/80);y=x-w;
                        if (y==0) {LogConsole.Value+="Found Japanese Emerald Code\r\n";tlog+="Found Japanese Emerald Code\r\n";game_select.value=18;ao=z;}
                        z=Math.floor((1*("0x"+a))-Math.floor(1*"0x0202980C",10),10);x=z/80;w=Math.floor(z/80);y=x-w;
                        if (y==0) {LogConsole.Value+="Found USA Emerald Code\r\n";tlog+="Found USA Emerald Code\r\n";game_select.value=29;ao=z;}
                        x=Math.floor((Math.floor(ao%2400,10)/80),10);
                        if (x<0 || x>29) {LogConsole.Value="Scanning for Addr";j=0;}
                        else {y=Math.floor((ao-x)/2400);if (y<0 || y>13) {LogConsole.Value="Scanning for Addr";j=0;} else {LogConsole.Value="Found Code Sample 0:\r\nScanning for Code";pokemon_box.selectedIndex=y;pokemon_spot.selectedIndex=x;tlog+="Box:"+(y+1)+" Platz:"+(x+1)+"\r\n";tlog+="Addr:"+a+"\r\n";j=1;}}
                    }
                    if (j==1) {if (t=="8203"||t=="8202") {v=tt.substring(8,12); cb=8;} if (t=="5202"||t=="5203") {v=""; cb=5;}}
                    n=0;
                }
            }
            if (n>11 && cb==8) {a=tt.substring(8,12);v=a+v;D[r].value=v;tlog+="Code Sample "+r+":"+v+"\r\n";r+=1;cb=0;n=0;}
            if (n>11 && cb==5) {v+=tt;tlog+=tt+"\r\n";r+=1;n=0;}
            if (n>15 && cb==0) {
                if (tf<4) {LogConsole.Value="Scanning for Code S"+r+"\r\n";}
                t=tt.substring(0,4);
                if (t=="0203"||t=="0202") {if (r==0) {tlog+="VBA Codes:\r\n";c[0].checked = true;c[1].checked = false;c[2].checked = false;c[3].checked = false;c[4].checked = false;c[5].checked = false;tf=0;} a=tt.substring(0,8);v=tt.substring(8,16);j=1;}
                else {
                    t=GAD(tt,"1");a=t.substring(0,4);
                    if (a=="2203"||a=="2202") {if (r==0) {tlog+="AR v1 Codes:\r\n";c[0].checked = false;c[1].checked = true;c[2].checked = false;c[3].checked = false;c[4].checked = false;c[5].checked = false;tf=2;}a="0"+t.substring(1,8);v=t.substring(8,16);j=1;}
                    else {
                        t=GAD(tt,"3");
                        a=t.substring(0,4);
                        if (a=="0423"||a=="0422") {if (r==0) {tlog+="AR v3 Codes:\r\n";c[0].checked = false;c[1].checked = false;c[2].checked = true;c[3].checked = false;c[4].checked = false;c[5].checked = false;tf=3;} a="020"+t.substring(3,8);v=t.substring(8,16);j=1;}
                        else {LogConsole.Value="Scanning for 80-Bytes";j=2;tf=5;if (n>159) {tlog+="80-Bytes Found:\r\n";c[0].checked = false;c[1].checked = false;c[2].checked = false;c[3].checked = false;c[4].checked = true;c[5].checked = false;dna.value=tt;for (r=0;r<20;r++) {D[r].value=tt.substr((r*8+6),2)+tt.substr((r*8+4),2)+tt.substr((r*8+2),2)+tt.substr((r*8),2);tlog+=tt.substr((r*8),2)+tt.substr((r*8+2),2)+tt.substr((r*8+4),2)+tt.substr((r*8+6),2)+"\r\n";}pokemon_box.selectedIndex=0;pokemon_spot.selectedIndex=0;j=0;}}
                    }
                }
                if (j==1) {
                    if (r==0) {
                        z=Math.floor((1*("0x"+a))-Math.floor(1*"0x020300A4",10),10);x=z/80;w=Math.floor(z/80);y=x-w;
                        if (y==0) {LogConsole.Value+="Found International Ruby/Sapphire Code\r\n";tlog+="Found International Ruby/Sapphire Code\r\n";game_select.value=0;ao=z;}
                        z=Math.floor((1*("0x"+a))-Math.floor(1*"0x0202FDC0",10),10);x=z/80;w=Math.floor(z/80);y=x-w;
                        if (y==0) {LogConsole.Value+="Found Japanese Ruby/Sapphire Code\r\n";tlog+="Found Japanese Ruby/Sapphire Code\r\n";game_select.value=12;ao=z;}
                        z=Math.floor((1*("0x"+a))-Math.floor(1*"0x02029250",10),10);x=z/80;w=Math.floor(z/80);y=x-w;
                        if (y==0) {LogConsole.Value+="Found Japanese Fire/Leaf Code\r\n";tlog+="Found Japanese Fire/Leaf Code\r\n";game_select.value=14;ao=z;}
                        z=Math.floor((1*("0x"+a))-Math.floor(1*"0x02029318",10),10);x=z/80;w=Math.floor(z/80);y=x-w;
                        if (y==0) {LogConsole.Value+="Found International Fire/Leaf Code\r\n";tlog+="Found International Fire/Leaf Code\r\n";game_select.value=16;ao=z;}
                        z=Math.floor((1*("0x"+a))-Math.floor(1*"0x020294B0",10),10);x=z/80;w=Math.floor(z/80);y=x-w;
                        if (y==0) {LogConsole.Value+="Found Japanese Emerald Code\r\n";tlog+="Found Japanese Emerald Code\r\n";game_select.value=18;ao=z;}
                        z=Math.floor((1*("0x"+a))-Math.floor(1*"0x0202980C",10),10);x=z/80;w=Math.floor(z/80);y=x-w;
                        if (y==0) {LogConsole.Value+="Found USA Emerald Code\r\n";tlog+="Found USA Emerald Code\r\n";game_select.value=29;ao=z;}
                        x=Math.floor((Math.floor(ao%2400,10)/80),10);
                        if (x<0 || x>29) {LogConsole.Value="Scanning for Addr";j=0;}
                        else {y=Math.floor((ao-x)/2400);if (y<0 || y>13) {LogConsole.Value="Scanning for Addr";j=0;} else {LogConsole.Value="Found Code Sample 0:\r\nScanning for Code";pokemon_box.selectedIndex=y;pokemon_spot.selectedIndex=x;tlog+="Box:"+(y+1)+" Platz:"+(x+1)+"\r\n";tlog+="Addr:"+a+"\r\n";j=1;}}
                    }
                    if (j==1) {if (r<20) {D[r].value=v;tlog+="Code Sample "+r+":"+v+"\r\n";r+=1;}}
                }
                if (j<2) {tt="";j=0;n=0;}
            }
        }
        else {if (IsCode(t)==2) {if (n<8) {n=0; tt="";}} else {n=0;tt="";}}
    }
    if (cb==5) {if (r==14) {r=20;} if ((v.length)<160) {r=1;} else {dna.value=v;tt=v;for (r=0;r<20;r++) {D[r].value=tt.substr((r*8+6),2)+tt.substr((r*8+4),2)+tt.substr((r*8+2),2)+tt.substr((r*8),2);tlog+=tt.substr((r*8),2)+tt.substr((r*8+2),2)+tt.substr((r*8+4),2)+tt.substr((r*8+6),2)+"\r\n";}}}
    if (r<20) {tlog+="Error: Incomplete Code found.\r\n";}
    else {if (r>20) {tlog+="Error: Too Many Codes found.\r\n";} else {tlog=SetAll(tlog);}}
    LogConsole.value=tlog+"Done.";
}


function SetAll(tlog) {
    var G=pokemon_gender;var ga=0;var x=0;var t=" ";var dna=" ";var D=rdna;dna=SetDNA();ga=parseInt(1*("0x"+D[0].value),10);pid.value=ga;x=(1*("0x"+D[1].value))%65536;
    if (x<1) {x=0;} trainer_id.value=parseInt(x,10);x=(1*("0x"+D[1].value))/65536;
    if (x<1) {x=0;} trainer_id_secret.value=parseInt(x,10);pokemon_name.value=PToS(dna.substring(16,36),10);t=D[4].value;font.value=t.substring(0,4);trainer_name.value=PToS(dna.substring(40,54),7);t=Marks((1*("0x"+dna.substring(55,56))));t=SetNature();t=SetXKey();t=SetShiny();t=SetABCD();t=SetUnown();t=FindABCD(t);t="";t=FindCS(t);tlog+=t;t=SetStructure();ga=Math.floor(ga%256);gt=Gtest();
    if (ga>gt) {ga=1;}else{ga=0;} G.selectedIndex=ga;t=SetGender();return tlog;
}
function SetStructure() {
    var As=ra_sample;var Bs=rb_sample;var Cs=rc_sample;var Ds=rd_sample;var t=" ";var i=0;var a0=" ";var a1=" ";var a2=" ";var b0=" ";var b1=" ";var b2=" ";var c0=" ";var c1=" ";var c2=" ";var d0=" ";var d1=" ";var d2=" ";
    a0=1*("0x"+As[0].value);a1=1*("0x"+As[1].value);a2=1*("0x"+As[2].value);b0=1*("0x"+Bs[0].value);b1=1*("0x"+Bs[1].value);b2=1*("0x"+Bs[2].value);c0=1*("0x"+Cs[0].value);c1=1*("0x"+Cs[1].value);c2=1*("0x"+Cs[2].value);d0=1*("0x"+Ds[0].value);d1=1*("0x"+Ds[1].value);d2=1*("0x"+Ds[2].value);
    if (P1O.selectedIndex!=0) {P1O.selectedIndex=0;i=NPO();} i=Math.floor(a0%65536)-1;
    if (i>251) {i-=25;} pokemon_select.selectedIndex=i;
    if (item_sort.selectedIndex!=0) {item_sort.selectedIndex=0;i=NIO();} i=Math.floor(a0/65536);item_carry.selectedIndex=ItemDex(DecToHex(i,3),1);item_description.value=ItemDex(DecToHex(i,3),2);pokemon_experience.value=a1;i=Math.floor(a2%4);move_1_level.selectedIndex=i;i=Math.floor((a2/4)%4);move_2_level.selectedIndex=i;i=Math.floor((a2/16)%4);move_3_level.selectedIndex=i;i=Math.floor((a2/64)%4);move_4_level.selectedIndex=i;i=Math.floor((a2/256)%256);pokemon_happy.value=i;
    if (move_1_sort.selectedIndex!=0) {move_1_sort.selectedIndex=0;i=NMO('1')} i=Math.floor(b0%65536)-1;move_1.selectedIndex=i;
    if (move_2_sort.selectedIndex!=0) {move_2_sort.selectedIndex=0;i=NMO('2')} i=Math.floor(b0/65536);move_2.selectedIndex=i;
    if (move_3_sort.selectedIndex!=0) {move_3_sort.selectedIndex=0;i=NMO('3')} i=Math.floor(b1%65536);move_3.selectedIndex=i;
    if (move_4_sort.selectedIndex!=0) {move_4_sort.selectedIndex=0;i=NMO('4')} i=Math.floor(b1/65536);move_4.selectedIndex=i;i=Math.floor(b2%256);move_1_pp.value=i;i=Math.floor((b2/256)%256);move_2_pp.value=i;i=Math.floor((b2/65536)%256);move_3_pp.value=i;i=Math.floor((b2/16777216)%256);move_4_pp.value=i;i=Math.floor(c0%256);basepoints_health.value=i;i=Math.floor((c0/256)%256);basepoints_attack.value=i;i=Math.floor((c0/65536)%256);basepoints_defense.value=i;i=Math.floor((c0/16777216)%256);basepoints_speed.value=i;i=Math.floor(c1%256);basepoints_attack_special.value=i;i=Math.floor((c1/256)%256);basepoints_defense_special.value=i;i=Math.floor((c1/65536)%256);Cool.value=i;i=Math.floor((c1/16777216)%256);Beauty.value=i;i=Math.floor(c2%256);Cute.value=i;i=Math.floor((c2/256)%256);Smart.value=i;i=Math.floor((c2/65536)%256);Tough.value=i;i=Math.floor((c2/16777216)%256);Luster.value=i;i=Math.floor(d0%256);
    if (i==0) {pokemon_pokerus.selectedIndex=0;}
    if (i>0&&i<16) {pokemon_pokerus.selectedIndex=1;}
    if (i>=16) {pokemon_pokerus.selectedIndex=2;}
    if (Lsort.selectedIndex!=0) {Lsort.selectedIndex=0;i=NLO();} i=Math.floor((d0/256)%256);pokemon_caught_location.selectedIndex=i;i=Math.floor((d0/65536)%256)&"0x7F";pokemon_caught_level.value=i;i=Math.floor((d0/8388608))%16;pokemon_caught_game.selectedIndex=i;i=Math.floor((d0/134217728)%16)-1;
    if (i<0) {i=3;} pokemon_caught_ball.selectedIndex=i;i=Math.floor((d0/2147483648))%2;trainer_gender.value=i;i=Math.floor(d1%32);health.selectedIndex=i;i=Math.floor((d1/32)%32);attack.selectedIndex=i;i=Math.floor((d1/1024)%32);defense.selectedIndex=i;i=Math.floor((d1/32768)%32);speed.selectedIndex=i;i=Math.floor((d1/1048576)%32);attack_special.selectedIndex=i;i=Math.floor((d1/33554432)%32);defense_special.selectedIndex=i;i=Math.floor((d1/1073741824)%2);
    if (i==0) {pokemon_egg.checked=false;} else {pokemon_egg.checked=true;} i=Math.floor((d1/2147483648))%2;pokemon_ability.selectedIndex=i;i=Math.floor(d2%8);ribbon_cool.selectedIndex=i;i=Math.floor((d2/8)%8);ribbon_beauty.selectedIndex=i;i=Math.floor((d2/64)%8);ribbon_cute.selectedIndex=i;i=Math.floor((d2/512)%8);ribbon_smart.selectedIndex=i;i=Math.floor((d2/4096)%8);ribbon_tough.selectedIndex=i;i=Math.floor((d2/32768)%2);
    if (i!=0) {RChampion.checked=true;} else {RChampion.checked=false;} i=Math.floor((d2/65536)%2);
    if (i!=0) {RB50.checked=true;} else {RB50.checked=false;} i=Math.floor((d2/131072)%2);
    if (i!=0) {RB100.checked=true;} else {RB100.checked=false;} i=Math.floor((d2/262144)%2);
    if (i!=0) {RSketch.checked=true;} else {RSketch.checked=false;} i=Math.floor((d2/524288)%2);
    if (i!=0) {RHardWorker.checked=true;} else {RHardWorker.checked=false;} i=Math.floor((d2/1048576)%2);
    if (i!=0) {RS0.checked=true;} else {RS0.checked=false;} i=Math.floor((d2/2097152)%2);
    if (i!=0) {RS1.checked=true;} else {RS1.checked=false;} i=Math.floor((d2/4194304)%2);
    if (i!=0) {RS2.checked=true;} else {RS2.checked=false;} i=Math.floor((d2/8388608)%2);
    if (i!=0) {RS3.checked=true;} else {RS3.checked=false;} i=Math.floor((d2/16777216)%2);
    if (i!=0) {RS4.checked=true;if (pokemon_caught_game.selectedIndex==15) {S4M.selectedIndex=44;}} else {RS4.checked=false;} i=Math.floor((d2/33554432)%2);
    if (i!=0) {RS5.checked=true;} else {RS5.checked=false;} i=Math.floor((d2/67108864)%2);
    if (i!=0) {RS6.checked=true;} else {RS6.checked=false;} i=Math.floor((d2/2147483648)%2);
    if (i!=0) {pokemon_obedient.checked=true;} else {pokemon_obedient.checked=false;} t=NewPoke();i=NMove('5');return "Hi";
}
function SetShiny() {
    var X=xkey;var wh=0;var wl=0;var dw=0;var t=" ";var i=0;dw=1*("0x"+X.value);wh=Math.floor(dw/65536);wl=Math.floor(dw%65536);i=wl^wh;
    if (i<0) {i+=1*("0x100000000")}
    if (i<8) {pokemon_shiny.checked=true;t="Shiny";}
    else {pokemon_shiny.checked=false;t="Normal";}
    return t;
}
function FindCS(tl) {
    var As=ra_sample;var Bs=rb_sample;var Cs=rc_sample;var Ds=rd_sample;var cs=0;var dw=0;var i=0;var tlog=" ";tlog=rdna[7].value;code_selector.value=tlog.substring(4,8);tlog=tl;cs=0;
    for (i=0;i<3;i++) {dw=1*("0x"+As[i].value);cs+=Math.floor(dw/65536);cs+=Math.floor(dw%65536);}
    for (i=0;i<3;i++) {dw=1*("0x"+Bs[i].value);cs+=Math.floor(dw/65536);cs+=Math.floor(dw%65536);}
    for (i=0;i<3;i++) {dw=1*("0x"+Cs[i].value);cs+=Math.floor(dw/65536);cs+=Math.floor(dw%65536);}
    for (i=0;i<3;i++) {dw=1*("0x"+Ds[i].value);cs+=Math.floor(dw/65536);cs+=Math.floor(dw%65536);} cs=cs&(1*"0xFFFF");i=1*("0x"+code_selector.value);
    if (i!=cs) {tlog+="Bad EGG CheckSum Error:"+DecToHex(cs,4)+"\r\n";} else {tlog+="CheckSum:"+DecToHex(cs,4)+"\r\n";}
    return tlog;
}
function FindABCD(tl) {
    var As=ra_sample;var Bs=rb_sample;var Cs=rc_sample;var Ds=rd_sample;var D=rdna;var xk=0;var t0=" ";var t1=" ";var t2=" ";var t=" ";var i=0;var abcd=" ";var a0=" ";var a1=" ";var a2=" ";var b0=" ";var b1=" ";var b2=" ";var c0=" ";var c1=" ";var c2=" ";var d0=" ";var d1=" ";var d2=" ";var tlog=" ";tlog=tl;abcd=abcd_output.value;tlog+=abcd+"\r\n";xk=parseInt(1*("0x"+xkey.value),10);
    for (i=0;i<4;i++) {if (i==0) {t0=D[8].value;t1=D[9].value;t2=D[10].value;} if (i==1) {t0=D[11].value;t1=D[12].value;t2=D[13].value;} if (i==2) {t0=D[14].value;t1=D[15].value;t2=D[16].value;} if (i==3) {t0=D[17].value;t1=D[18].value;t2=D[19].value;} t=abcd.substring(i,i+1);if (t=="A") {a0=t0;a1=t1;a2=t2;} if (t=="B") {b0=t0;b1=t1;b2=t2;} if (t=="C") {c0=t0;c1=t1;c2=t2;} if (t=="D") {d0=t0;d1=t1;d2=t2;}} i=Math.floor(xk^(1*("0x"+a0)));
    if (i<0) {i+=1*"0x100000000";} As[0].value=DecToHex(i,8);i=Math.floor(xk^(1*("0x"+a1)));
    if (i<0) {i+=1*"0x100000000";} As[1].value=DecToHex(i,8);i=Math.floor(xk^(1*("0x"+a2)));
    if (i<0) {i+=1*"0x100000000";} As[2].value=DecToHex(i,8);i=Math.floor(xk^(1*("0x"+b0)));
    if (i<0) {i+=1*"0x100000000";} Bs[0].value=DecToHex(i,8);i=Math.floor(xk^(1*("0x"+b1)));
    if (i<0) {i+=1*"0x100000000";} Bs[1].value=DecToHex(i,8);i=Math.floor(xk^(1*("0x"+b2)));
    if (i<0) {i+=1*"0x100000000";} Bs[2].value=DecToHex(i,8);i=Math.floor(xk^(1*("0x"+c0)));
    if (i<0) {i+=1*"0x100000000";} Cs[0].value=DecToHex(i,8);i=Math.floor(xk^(1*("0x"+c1)));
    if (i<0) {i+=1*"0x100000000";} Cs[1].value=DecToHex(i,8);i=Math.floor(xk^(1*("0x"+c2)));
    if (i<0) {i+=1*"0x100000000";} Cs[2].value=DecToHex(i,8);i=Math.floor(xk^(1*("0x"+d0)));
    if (i<0) {i+=1*"0x100000000";} Ds[0].value=DecToHex(i,8);i=Math.floor(xk^(1*("0x"+d1)));
    if (i<0) {i+=1*"0x100000000";} Ds[1].value=DecToHex(i,8);i=Math.floor(xk^(1*("0x"+d2)));
    if (i<0) {i+=1*"0x100000000";} Ds[2].value=DecToHex(i,8);return tlog;
}
function SetXKey() {var D=rdna;var X=xkey;var tid=0;var pid=0;var xk=0;var t=" ";pid=parseInt(1*("0x"+D[0].value),10);tid=parseInt(1*("0x"+D[1].value),10);xk=Math.floor(pid^tid);if (xk<0) {xk+=1*"0x100000000";} t=DecToHex(xk,8);X.value=t;return t;}

function SetABCD() {var A=abcd_output;var n=0;var t=" ";n=Math.floor(pid.value%24);if (n==0) {t="ABCD";} if (n==1) {t="ABDC";} if (n==2) {t="ACBD";} if (n==3) {t="ACDB";} if (n==4) {t="ADBC";} if (n==5) {t="ADCB";} if (n==6) {t="BACD";} if (n==7) {t="BADC";} if (n==8) {t="BCAD";} if (n==9) {t="BCDA";} if (n==10) {t="BDAC";} if (n==11) {t="BDCA";} if (n==12) {t="CABD";} if (n==13) {t="CADB";} if (n==14) {t="CBAD";} if (n==15) {t="CBDA";} if (n==16) {t="CDAB";} if (n==17) {t="CDBA";} if (n==18) {t="DABC";} if (n==19) {t="DACB";} if (n==20) {t="DBAC";} if (n==21) {t="DBCA";} if (n==22) {t="DCAB";} if (n==23) {t="DCBA";} A.value=t;return t;}
function SetNature() {var pid=0;var D=rdna;var N=pokemon_nature;var n=0;pid=parseInt(1*("0x"+D[0].value),10);n=Math.floor(pid%25);N.selectedIndex=n;return n;}
function SetDNA() {var t=" ";var tt=" ";var i=0;var D=rdna;tt="";for (i=0;20>i;i++) {t=D[i].value;tt+=t.substring(6,8);tt+=t.substring(4,6);tt+=t.substring(2,4);tt+=t.substring(0,2);} dna.value=tt;return tt;}
function SetGender() {
    var G=pokemon_gender;var pdex=" ";var pgn=0;var o=0;pgn=pokemon_select.options[pokemon_select.selectedIndex].value;pdex=PokeDex(pgn);x=FI(pdex,"~",20);o=G.selectedIndex;G.options.length=0;
    if (x==-1) {G.options[0] = new Option("⚪","0",true);G.options[1] = new Option("⚪","1");}
    if (x==100) {G.options[0] = new Option("♀","0",true);G.options[1] = new Option("♀","1");}
    if (x==0) {G.options[0] = new Option("♂","0",true);G.options[1] = new Option("♂","1");}
    if (x!=-1&&x!=100&&x!=0) {G.options[0] = new Option("♀","0",true);G.options[1] = new Option("♂","1");} G.options.length=2;G.selectedIndex=o;return o;
}
function Marks(m) {var c=" ";var t=0;t=0;if ((m&1)==1) {marker_circle.checked=true;} else {marker_circle.checked=false;} if ((m&2)==2) {marker_square.checked=true;} else {marker_square.checked=false;} if ((m&4)==4) {marker_triangle.checked=true;} else {marker_triangle.checked=false;} if ((m&8)==8) {marker_heart.checked=true;} else {marker_heart.checked=false;} t=m;c=DecToHex(t,1);return c;}
function PToS(I,L) {var s=" ";var t=" ";var cc=" ";var c=" ";var m=0;s=I;t="";m=L; for(var i=0;i<m;i+=1) {if (i>=s.length) {cc="";} else {c=s.substr(i*2,2);c=c.toUpperCase();if (c=="FF") {cc="";i=m+1;} else {cc=PokeToChar(c);}} t+=cc;} return t;}
function StrToPoke(I,L) {var s=" ";var t=" ";var cc=" ";var c=" ";var m=0;s=I;t="";m=L+1;for(var i=0;i<=m;i++) {if (i>=s.length) {cc="FF";} else {c=s.substr(i,1);if (c=="#") {cc=s.substr(i+1,2);i+=2;m+=2;} else {cc=CharToPoke(c);}} t+=cc;} return t;}
function CharToPoke(c) {var t=" ";t="00";if (c==" ") {t="00";} if (c=="~") {t="1B";} if (c=="0") {t="A1";} if (c=="1") {t="A2";} if (c=="2") {t="A3";} if (c=="3") {t="A4";} if (c=="4") {t="A5";} if (c=="5") {t="A6";} if (c=="6") {t="A7";} if (c=="7") {t="A8";} if (c=="8") {t="A9";} if (c=="9") {t="AA";} if (c=="!") {t="AB";} if (c=="?") {t="AC";} if (c==".") {t="AD";} if (c=="-") {t="AE";} if (c=="_") {t="AF";} if (c=="=") {t="B0";} if (c==':') {t="B1";} if (c=='"') {t="B2";} if (c==";") {t="B3";} if (c=="'") {t="B4";} if (c=="<") {t="B5";} if (c==">") {t="B6";} if (c=="$") {t="B7";} if (c==",") {t="B8";} if (c=="*") {t="B9";} if (c=="/") {t="BA";} if (c=="A") {t="BB";} if (c=="B") {t="BC";} if (c=="C") {t="BD";} if (c=="D") {t="BE";} if (c=="E") {t="BF";} if (c=="F") {t="C0";} if (c=="G") {t="C1";} if (c=="H") {t="C2";} if (c=="I") {t="C3";} if (c=="J") {t="C4";} if (c=="K") {t="C5";} if (c=="L") {t="C6";} if (c=="M") {t="C7";} if (c=="N") {t="C8";} if (c=="O") {t="C9";} if (c=="P") {t="CA";} if (c=="Q") {t="CB";} if (c=="R") {t="CC";} if (c=="S") {t="CD";} if (c=="T") {t="CE";} if (c=="U") {t="CF";} if (c=="V") {t="D0";} if (c=="W") {t="D1";} if (c=="X") {t="D2";} if (c=="Y") {t="D3";} if (c=="Z") {t="D4";} if (c=="a") {t="D5";} if (c=="b") {t="D6";} if (c=="c") {t="D7";} if (c=="d") {t="D8";} if (c=="e") {t="D9";} if (c=="f") {t="DA";} if (c=="g") {t="DB";} if (c=="h") {t="DC";} if (c=="i") {t="DD";} if (c=="j") {t="DE";} if (c=="k") {t="DF";} if (c=="l") {t="E0";} if (c=="m") {t="E1";} if (c=="n") {t="E2";} if (c=="o") {t="E3";} if (c=="p") {t="E4";} if (c=="q") {t="E5";} if (c=="r") {t="E6";} if (c=="s") {t="E7";} if (c=="t") {t="E8";} if (c=="u") {t="E9";} if (c=="v") {t="EA";} if (c=="w") {t="EB";} if (c=="x") {t="EC";} if (c=="y") {t="ED";} if (c=="z") {t="EE";} return t;}
function PokeToChar(i) {var t=" ";var c=" ";c=i.toUpperCase(); t="#"+c;if (c=="00") {t=" ";} if (c=="A1") {t="0";} if (c=="A2") {t="1";} if (c=="A3") {t="2";} if (c=="A4") {t="3";} if (c=="A5") {t="4";} if (c=="A6") {t="5";} if (c=="A7") {t="6";} if (c=="A8") {t="7";} if (c=="A9") {t="8";} if (c=="AA") {t="9";} if (c=="AB") {t="!";} if (c=="AC") {t="?";} if (c=="AD") {t=".";} if (c=="AE") {t="-";} if (c=='B1') {t=":";} if (c=="B3") {t=";";} if (c=="B7") {t="$";} if (c=="B8") {t=",";} if (c=="B9") {t="*";} if (c=="BA") {t="/";} if (c=="BB") {t="A";} if (c=="BC") {t="B";} if (c=="BD") {t="C";} if (c=="BE") {t="D";} if (c=="BF") {t="E";} if (c=="C0") {t="F";} if (c=="C1") {t="G";} if (c=="C2") {t="H";} if (c=="C3") {t="I";} if (c=="C4") {t="J";} if (c=="C5") {t="K";} if (c=="C6") {t="L";} if (c=="C7") {t="M";} if (c=="C8") {t="N";} if (c=="C9") {t="O";} if (c=="CA") {t="P";} if (c=="CB") {t="Q";} if (c=="CC") {t="R";} if (c=="CD") {t="S";} if (c=="CE") {t="T";} if (c=="CF") {t="U";} if (c=="D0") {t="V";} if (c=="D1") {t="W";} if (c=="D2") {t="X";} if (c=="D3") {t="Y";} if (c=="D4") {t="Z";} if (c=="D5") {t="a";} if (c=="D6") {t="b";} if (c=="D7") {t="c";} if (c=="D8") {t="d";} if (c=="D9") {t="e";} if (c=="DA") {t="f";} if (c=="DB") {t="g";} if (c=="DC") {t="h";} if (c=="DD") {t="i";} if (c=="DE") {t="j";} if (c=="DF") {t="k";} if (c=="E0") {t="l";} if (c=="E1") {t="m";} if (c=="E2") {t="n";} if (c=="E3") {t="o";} if (c=="E4") {t="p";} if (c=="E5") {t="q";} if (c=="E6") {t="r";} if (c=="E7") {t="s";} if (c=="E8") {t="t";} if (c=="E9") {t="u";} if (c=="EA") {t="v";} if (c=="EB") {t="w";} if (c=="EC") {t="x";} if (c=="ED") {t="y";} if (c=="EE") {t="z";} return t;}
function NMO(n) {
    var M1=move_1; var M2=move_2; var M3=move_3; var M4=move_4;var ln=" "; var o=0; var l=0; var m=0; var w=0; var t=" ";var tn=0; var tname=" ";LogConsole.value+="Sorting Move "+n+"\r\n";
    if (n=='1') {o=move_1_sort.selectedIndex;} if (n=='2') {o=move_2_sort.selectedIndex;} if (n=='3') {o=move_3_sort.selectedIndex;} if (n=='4') {o=move_4_sort.selectedIndex;}
    // Original if (o==1) {ln="~71~51~151~332~177~97~314~133~246~292~312~274~310~213~62~140~112~226~251~187";ln+="~117~20~44~307~299~59~335~34~125~198~155~340~280~145~61~339~331~347~293~268";ln+="~204~128~4~109~93~132~160~176~322~178~68~343~152~238~242~306~174~15~111~194";ln+="~197~91~50~291~146~353~24~104~38~3~337~349~82~225~138~65~223~89~121~52";ln+="~227~283~203~284~153~326~245~263~185~252~313~206~297~126~7~83~90~175~172~53";ln+="~148~260~19~116~264~266~193~338~218~31~210~154~248~202~137~320~45~74~288~12";ln+="~16~258~106~114~29~215~257~270~136~237~30~32~336~308~56~63~158~304~95~301";ln+="~58~8~333~196~286~275~334~231~26~2~134~282~348~141~73~43~122~113~199~142";ln+="~67~295~183~277~345~222~212~96~72~25~5~224~262~232~319~309~118~208~102~170";ln+="~107~243~119~54~296~236~234~341~300~189~330~267~302~101~171~190~316~200~315~220";ln+="~6~64~195~80~42~305~139~40~342~77~1~181~217~182~60~244~94~354~149~228";ln+="~98~99~240~229~75~13~105~278~115~287~156~216~279~179~46~350~157~249~88~317";ln+="~272~27~205~221~219~328~28~201~184~10~103~290~69~120~247~325~356~159~329~351";ln+="~324~318~47~166~285~130~143~327~303~21~163~79~214~124~188~265~123~108~289~173";ln+="~135~76~49~209~169~131~191~255~180~150~147~211~254~23~70~81~165~78~66~164";ln+="~241~162~276~48~57~207~256~186~230~129~14~235~33~294~39~36~269~298~100~168";ln+="~37~87~86~85~9~84~321~259~92~144~161~271~167~41~239~253~11~22~233~344";ln+="~55~352~346~323~127~311~250~18~261~17~273~110~35~281~192~-1~";}
    if (o==1) {ln="~194~195~282~71~332~97~133~324~207~246~213~308~55~352~292~312~278~253~62~203~50~112~187~178~286~343~44~186~80~148~192~59~145~61~141~36~219~34~65~46~204~356~297~164~87~85~9~84~86~24~104~131~337~349~82~167~175~114~41~3~280~73~121~111~334~231~329~8~333~58~196~116~255~89~156~310~284~153~81~263~27~317~350~299~225~7~126~83~120~185~172~53~19~338~174~17~259~323~301~218~37~209~31~67~281~347~117~179~290~105~90~69~47~217~77~342~40~139~305~202~52~320~184~180~12~258~106~287~45~327~143~315~257~30~32~212~254~56~63~158~95~222~261~146~336~2~127~353~11~20~13~242~198~125~155~4~107~93~109~68~29~322~152~276~237~10~154~103~238~331~268~348~330~189~341~300~220~113~230~307~177~221~277~188~96~5~25~72~262~232~319~311~118~208~102~252~236~234~166~288~171~101~42~346~267~296~302~283~190~110~1~64~147~150~264~339~251~94~244~134~354~60~149~181~22~99~75~168~108~270~115~240~265~38~272~335~216~98~39~328~201~28~51~151~197~130~304~193~159~91~295~79~214~124~137~122~163~260~128~173~316~351~182~294~14~248~43~318~21~123~76~326~241~321~243~119~169~266~340~26~247~325~78~191~226~211~140~23~70~157~88~309~129~48~162~57~235~33~303~293~291~298~100~183~142~92~138~271~161~206~313~229~245~136~289~66~233~49~132~160~176~228~279~269~275~256~165~224~215~344~74~205~144~135~54~285~250~35~170~239~314~16~18~223~273~200~6~345~306~15~249~199~210~227~274~-1~";}
    // ???
    if (o==2) {ln="~174~-1~";}
    // Fighting
    // Original if (o==3) {ln="~292~280~339~68~238~197~24~223~264~136~26~2~67~183~279~179~249~27~69~327";ln+="~66~276~167~233~-1~";}
    if (o==3) {ln="~292~24~167~280~27~67~179~69~327~2~68~276~238~264~339~197~26~183~136~66~233~279~223~249~-1~";}
    // Flying
    // Original if (o==4) {ln="~332~177~314~340~65~297~19~16~119~64~143~17~-1~";}
    if (o==4) {ln="~332~65~297~19~17~143~177~64~119~340~314~16~-1~";}
    // Poison
    // Original if (o==5) {ln="~51~151~305~139~40~342~77~124~188~123~92~-1~";}
    if (o==5) {ln="~77~342~40~139~305~188~51~151~124~123~92~-1~";}
    // Ground
    // Original if (o==6) {ln="~125~198~155~91~89~90~222~341~300~189~328~28~191~-1~";}
    if (o==6) {ln="~89~90~222~198~125~155~189~341~300~328~28~91~191~-1~";}
    // Rock
    // Original if (o==7) {ln="~246~350~157~88~317~205~201~-1~";}
    if (o==7) {ln="~246~317~350~201~157~88~205~-1~";}
    // Bug
    // Original if (o==8) {ln="~210~141~224~42~324~318~169~81~294~41~-1~";}
    if (o==8) {ln="~324~141~41~81~42~294~318~169~224~210~-1~";}
    // Ghost
    // Original if (o==9) {ln="~310~109~194~288~122~101~171~247~325~180~-1~";}
    if (o==9) {ln="~194~310~180~109~288~171~101~122~247~325~-1~";}
    // Steel
    // Original if (o==10) {ln="~353~334~231~232~319~309~211~-1~";}
    if (o==10) {ln="~334~231~353~232~319~211~309~-1~";}
    // Fire
    // Original if (o==11) {ln="~307~299~52~284~126~7~83~172~53~257~315~221~241~261~-1~";}
    if (o==11) {ln="~284~299~7~126~83~172~53~52~315~257~261~307~221~241~-1~";}
    // Water
    // Original if (o==12) {ln="~145~61~128~152~291~308~56~330~190~240~57~55~352~346~323~127~250~110~-1";}
    if (o==12) {ln="~308~55~352~145~61~323~56~127~152~330~346~190~110~240~128~57~291~250~-1";}
    // Grass
    // Original if (o==13) {ln="~71~312~331~178~338~202~320~275~348~73~345~72~302~80~75~79~76~147~78~235~22~-1~";}
    if (o==13) {ln="~71~312~178~80~73~338~202~320~331~348~72~302~147~22~75~79~76~78~235~275~345~-1~";}
    // Electric
    // Original if (o==14) {ln="~268~351~209~87~86~85~9~84~344~192~-1~";}
    if (o==14) {ln="~192~87~85~9~84~86~209~268~351~344~-1~";}
    // Psychic
    // Original if (o==15) {ln="~97~133~112~347~93~322~138~326~248~95~286~134~113~295~277~96~243~296~60~94";ln+="~354~149~115~156~272~285~100~271~-1";}
    if (o==15) {ln="~97~133~112~286~156~347~95~93~322~113~277~96~296~94~134~354~60~149~115~272~295~248~326~243~100~138~271~285~-1";}
    // Ice
    // Original if (o==16) {ln="~62~59~258~114~301~58~8~333~196~54~181~329~-1~";}
    if (o==16) {ln="~62~59~114~329~8~333~58~196~301~258~181~54~-1~";}
    // Dragon
    // Original if (o==17) {ln="~337~349~82~225~200~239~-1~";}
    if (o==17) {ln="~337~349~82~225~239~200~-1~";}
    // Dark
    // Original if (o==18) {ln="~251~44~242~185~313~260~282~262~228~289~269~168~259~-1~";}
    if (o==18) {ln="~282~44~185~259~242~262~251~168~260~313~289~228~269~-1~";}
    // Normal
    // Original if (o==19) {ln="~274~213~140~226~187~117~20~335~34~293~204~4~132~160~176~343~306~15~111~50";ln+="~146~104~38~3~121~227~283~203~153~245~263~252~206~175~148~116~266~193~218~31";ln+="~154~137~45~74~12~106~29~215~270~237~30~32~336~63~158~304~43~199~142~212";ln+="~25~5~118~208~102~170~107~236~234~267~316~220~6~195~1~217~182~244~98~99";ln+="~229~13~105~278~287~216~46~219~184~10~103~290~120~159~47~166~130~303~21~163";ln+="~214~265~108~173~135~49~131~255~150~254~23~70~165~164~162~48~207~256~186~230";ln+="~129~14~33~39~36~298~37~321~144~161~253~11~311~18~273~35~281~-1~";}
    if (o==19) {ln="~195~207~213~278~253~203~50~187~343~186~148~36~219~34~46~204~164~104~131~175~3~121~111~116~255~153~263~120~218~37~31~281~117~290~105~47~217~184~12~106~287~45~30~32~212~254~63~158~146~336~11~20~13~4~107~29~237~10~154~103~220~230~5~25~311~118~208~102~252~236~234~166~267~283~1~150~244~99~108~270~265~38~335~216~98~39~130~304~193~159~214~137~163~173~316~182~14~43~21~321~266~226~140~23~70~129~48~162~33~303~293~298~142~161~206~229~245~49~132~160~176~256~165~215~74~144~135~35~170~18~273~6~306~15~199~227~274~-1~";}
    // TMs/HMs
    // Original if (o==20) {ln="~264~337~352~347~46~92~258~339~331~237~241~269~58~59~63~113~182~240~202~219";ln+="~218~76~231~85~87~89~216~91~94~325~280~104~115~351~53~188~201~126~317~332";ln+="~259~263~290~156~213~168~211~285~289~315~15~19~57~70~148~249~127~291~-1~";}
    if (o==20) {ln="~264~337~352~347~46~92~258~339~331~237~241~269~58~59~63~113~182~240~202~219";ln+="~218~76~231~85~87~89~216~91~94~325~280~104~115~351~53~188~201~126~317~332";ln+="~259~263~290~156~213~168~211~285~289~315~15~19~57~70~148~249~127~291~-1~";}
    // vs 2 Moves
    // Original if (o==21) {ln="~51~314~59~145~89~284~153~45~258~114~257~304~196~43~222~300~330~195~181~240";ln+="~75~13~157~201~120~81~241~57~230~129~39~298~239~253~323~-1~";}
    if (o==21) {ln="~195~253~59~145~114~196~89~284~153~81~120~323~258~45~257~222~13~330~300~230~181~75~240~39~201~51~304~43~241~157~129~57~298~239~314~-1~";}
    // Cool
    // Original if (o==22) {ln="~332~97~112~280~331~322~238~306~15~197~146~24~104~337~349~82~225~65~223~326";ln+="~245~206~116~31~210~12~136~30~32~336~63~304~231~348~43~183~224~232~309~200";ln+="~64~42~98~99~229~75~13~179~46~351~143~327~163~76~49~209~131~211~66~129";ln+="~100~87~86~85~9~84~239~233~17~192~-1~";}
    if (o==22) {ln="~332~97~112~192~65~46~87~85~9~84~86~24~104~131~337~349~82~280~231~116~225~17~209~31~179~12~327~143~30~32~63~146~336~13~322~238~331~348~232~42~64~99~75~98~197~304~163~351~43~76~326~211~309~129~100~183~206~229~245~136~66~233~49~224~239~223~200~306~15~210~-1~";}
    // Beauty
    // Original if (o==23) {ln="~62~299~59~61~339~178~291~52~284~153~126~7~83~148~74~258~114~215~257~5";ln+="~6~301~58~8~196~113~277~345~212~96~243~54~236~234~267~315~195~80~181~60";ln+="~219~120~329~324~318~147~241~57~14~294~161~352~323~250~261~-1~";}
    if (o==23) {ln="~195~324~352~62~178~80~148~59~61~219~114~329~8~58~196~284~153~299~7~126~83~120~323~301~52~258~315~257~212~261~113~277~96~5~236~234~267~147~339~60~181~294~14~318~241~243~57~291~161~215~74~54~250~6~345~-1~";}
    // Cute
    // Original if (o==24) {ln="~133~274~213~226~187~335~340~145~204~343~111~227~263~252~175~218~45~102~107~300";ln+="~189~182~287~156~216~272~28~47~303~214~173~150~207~186~230~39~298~321~253~55";ln+="~346~273~281~-1~";}
    if (o==24) {ln="~133~207~213~55~253~187~343~186~145~204~175~111~156~263~218~281~47~287~45~107~189~300~230~102~252~346~150~272~335~216~39~28~214~173~182~321~340~226~303~298~273~227~274~-1~";}
    // Smart
    // Original if (o==25) {ln="~71~51~312~310~347~293~268~109~93~194~91~50~138~185~313~260~19~193~248~202";ln+="~16~270~237~95~286~275~134~282~141~73~199~295~72~319~170~119~296~302~101~316";ln+="~305~139~40~342~77~244~94~149~228~105~115~317~328~103~290~247~325~285~79~265";ln+="~108~289~191~81~78~164~48~235~269~92~271~311~18~-1~";}
    if (o==25) {ln="~194~282~71~312~50~286~141~164~73~310~81~317~185~19~347~290~105~77~342~40~139~305~202~95~93~109~237~103~268~72~319~311~101~296~302~94~244~134~149~108~270~115~265~328~51~193~91~295~79~260~316~248~119~247~325~78~191~48~235~293~92~138~271~313~289~228~269~275~285~170~16~18~199~-1~";}
    // Tough
    // Original if (o==26) {ln="~151~246~292~117~20~44~34~128~132~68~152~242~174~38~3~89~283~203~90~264";ln+="~154~137~288~106~29~334~2~122~67~222~262~341~330~1~240~279~350~157~249~88";ln+="~205~201~184~10~69~130~21~124~188~123~255~180~254~23~70~276~256~33~36~168";ln+="~37~259~11~127~35~-1~";}
    if (o==26) {ln="~246~292~203~44~36~34~3~334~255~89~350~174~259~37~67~117~90~69~184~180~106~254~222~2~127~11~20~242~68~29~152~276~10~154~330~341~188~262~288~283~1~264~168~240~38~201~151~130~124~137~122~128~21~123~23~70~157~88~33~132~279~256~205~35~249~-1~";}
    l=0;m=0;w=0;
    if (n=='1') {M1.options.lenght=0;}
    if (n=='2') {M2.options.lenght=0;M2.options[m]= new Option("Keine Attacke","0",true);m+=1;}
    if (n=='3') {M3.options.lenght=0;M3.options[m]= new Option("Keine Attacke","0",true);m+=1;}
    if (n=='4') {M4.options.lenght=0;M4.options[m]= new Option("Keine Attacke","0",true);m+=1;}
    while(l==0) {
        w+=1;
        if (o==0) {if (w>354) {w=-1;}t=parseInt(w,10);}
        else {t=FI(ln,"~",w);}
        if (t=="-1") {if (n=='1') {M1.options.length=m;M1.selectedIndex=0;} if (n=='2') {M2.options.length=m;M2.selectedIndex=0;} if (n=='3') {M3.options.length=m;M3.selectedIndex=0;} if (n=='4') {M4.options.length=m;M4.selectedIndex=0;} t=NMove(n);l=1;}
        else {tn=1*t;tname=MoveDex(tn,1);if (n=='0' && m==1) {M1.options[m]= new Option(tname,t,true);} else {if (n=='1') {M1.options[m] = new Option(tname,t);} if (n=='2') {M2.options[m] = new Option(tname,t);} if (n=='3') {M3.options[m] = new Option(tname,t);} if (n=='4') {M4.options[m] = new Option(tname,t);}} m+=1;}
    }
    LogConsole.value+="Done Sorting\r\n";return t;
}

function NIO() {
    var H1=item_carry;var ln=" ";var o=0;var l=0;var m=0;var w=0;var t=" ";var t2=" ";var tname=" ";LogConsole.value+="Sorting Items\r\n";o=item_sort.selectedIndex;
    // Num
    if (o==0) {ln="~000~001~002~003~004~005~006~007~008~009~00A~00B~00C~00D~00E~00F~010~011~012~013~014";ln+="~015~016~017~018~019~01A~01B~01C~01D~01E~01F~020~021~022~023~024~025~026~027~028";ln+="~029~02A~02B~02C~02D~02E~02F~030~031~032~033~03F~040~041~042~043~044~045~046~047";ln+="~049~04A~04B~04C~04D~04E~04F~050~051~053~054~055~056~05D~05E~05F~060~061~062~067";ln+="~068~06A~06B~06C~06D~06E~06F~079~07A~07B~07C~07D~07E~07F~080~081~082~083~084~085";ln+="~086~087~088~089~08A~08B~08C~08D~08E~08F~090~091~092~093~094~095~096~097~098~099";ln+="~09A~09B~09C~09D~09E~09F~0A0~0A1~0A2~0A3~0A4~0A5~0A6~0A7~0A8~0A9~0AA~0AB~0AC~0AD";ln+="~0AE~0AF~0B3~0B4~0B5~0B6~0B7~0B8~0B9~0BA~0BB~0BC~0BD~0BE~0BF~0C0~0C1~0C2~0C3~0C4";ln+="~0C5~0C6~0C7~0C8~0C9~0CA~0CB~0CC~0CD~0CE~0CF~0D0~0D1~0D2~0D3~0D4~0D5~0D6~0D7~0D8";ln+="~0D9~0DA~0DB~0DC~0DD~0DE~0DF~0E0~0E1~0FE~0FF~100~101~102~103~104~105~106~107~108";ln+="~109~10A~10C~10D~10E~10F~110~111~112~113~114~115~116~117~118~119~11A~11B~11C~11D";ln+="~11E~11F~120~121~122~123~124~125~126~127~128~129~12A~12B~12C~12D~12E~12F~130~131";ln+="~132~133~134~135~136~137~138~139~13A~13B~13C~13D~13E~13F~140~141~142~143~144~145";ln+="~146~147~148~149~14A~14B~14C~14D~14E~14F~150~151~152~153~154~155~156~157~158~159";ln+="~15A~15D~15E~15F~160~161~162~163~164~165~166~167~168~169~16A~16B~16C~16D~16E~16F";ln+="~170~171~172~173~174~175~176~177~178~1F4~1F5~1F6~1F7~1F8~1F9~1FA~1FB~1FC~1FD~1FE~1FF~200";ln+="~201~202~203~204~205~206~207~208~209~20A~20B~20C~20D~20E~20F~210~211~212~213~214";ln+="~215~216~217~218~219~21A~21B~21C~21D~21E~21F~220~221~222~223~224~225~226~227~228";ln+="~229~22A~22B~22C~22D~22E~22F~230~231~232~233~234~235~236~237~238~239~23A~23B~23C";ln+="~23D~23E~23F~240~241~242~243~244~245~246~247~248~249~24A~24B~24C~24D~24E~24F~250";ln+="~251~-1~";}
    // Alpha
    // Original if (o==1) {ln="~000~110~092~0BD~00E~0AC~089";ln+="~011~10F~07F~0A7~02C~068~06B~0CF~02A~0CE~027~115~0FF~031~095~0B3~00F~043~042~0D7";ln+="~085~086~0BA~11F~0BE~104~10A~09F~0C1~0C0~120~10D~04A~007~0D8~0C9~082~0A6~024~01E";ln+="~01F~0AF~113~055~022~0C3~0B6~083~08F~05F~051~0C4~01A~017~013~0A9~07B~117~107~003";ln+="~101~033~09D~049~07A~0CC~020~06F~153~154~155~156~157~158~159~15A~09C~03F~015~093";ln+="~010~041~105~09A~0BB~0AD~026~0DD~062~0C8~01C~08A~112~0A8~0CA~0C5~0DE~08D~00B~103";ln+="~0B5~0D0~091~0A0~001~025~023~014~054~019~07C~0B9~0C7~0DF~118~0CD~01D~05E~0D1~096";ln+="~008~006~0D4~0A2~06E~106~08B~079~0A4~012~06A~087~08C~0AB~098~100~0D3~004~050~111";ln+="~099~00D~047~045~00C~040~09B~0B7~0A1~044~088~094~029~114~0FE~030~009~056~084~021";ln+="~018~119~11A~11B~11C~11E~109~02D~005~0AA~116~0C6~0DC~080~0D2~0DB~02E~02F~0D9~0BC";ln+="~08E~0C2~01B~0CB~10E~0B8~0BF~0D5~0A3~06D~06C~0AE~0E1~11D~05D~016~053~108~09E~0E0";ln+="~060~00A~067~121~122~123~124~125~126~127~128~129~12A~12B~12C~12D~12E~12F~130~131";ln+="~132~133~134~135~136~137~138~139~13A~13B~13C~13D~13E~13F~140~141~142~143~144~145";ln+="~146~147~148~149~14A~14B~14C~14D~14E~14F~150~151~152~081~0D6~002~0DA~10C~061~0A5";ln+="~07E~097~02B~0B4~090~07D~04E~04B~04C~04F~04D~028~102~032~046~";ln+="~201~217~1FE~21E~205~1FA~212~200~202~204~206~208~20A~20C~20E~210~1FF~21C~223~21B";ln+="~21D~21A~1F5~20F~220~1F7~214~216~1F4~21F~1F9~1FD~20B~209~222~203~1F8~20D~215~1F6";ln+="~213~1FC~207~211~219~1FB~221~218~173~16A~16D~168~160~163~165~164~161~166~16E~174";ln+="~172~15D~162~15E~170~175~176~15F~167~171~16C~169~16F~16B~177~178~-1~";}
    if (o==1) {ln="~0C1~0C0~162~178~085~106~113~0AC~045~047~10E~022~011~173~0D5~224~225~226~227~228~229~22A~22B~22C~22D~22E~22F~230~231~232~233~234~235~236~237~238~239~23A~23B~23C~23D~23E~23F~240~241~242~243~244~245~246~247~248~249~24A~24B~24C~24D~24E~24F~250~251~02C~16D~018~062~027~217~115~0FF~0B3~109~112~170~042~212~223~21C~21D~21A~21B~1FA~105~120~10D~200~202~204~206~208~20A~20C~20E~210~165~060~0C9~0D8~080~0A6~083~15D~07C~103~041~010~024~051~01E~0AF~20F~0B6~222~21E~0D4~0C3~168~00F~05F~0B7~055~0C4~088~21F~092~00E~15F~172~028~218~102~032~08F~0D3~07B~0C5~220~161~099~0CC~216~101~033~07A~020~166~06F~094~0D7~09C~002~017~015~203~031~08A~043~16A~0E0~169~000~10F~0BB~0A3~11F~03F~01F~0AE~0D6~0CA~01D~110~02E~02F~09D~11D~0AD~0E1~026~0DD~1F9~16E~1F5~164~01C~0A9~201~0DE~00B~0A8~0B5~177~20B~0D0~091~0A0~086~049~001~0B9~0C7~0DF~118~067~207~05E~095~0BD~104~0DB~0A7~096~008~006~097~06E~0A4~221~012~06A~07F~08C~087~004~15E~050~111~00C~107~040~08D~174~0CB~030~09B~119~11A~11B~11C~0A1~160~20D~0C2~1F8~084~06B~068~100~029~215~114~0FE~175~16B~005~09F~0AA~098~0B8~176~116~0CE~0B4~1FE~163~056~0BE~02A~0CF~0C6~0BF~0DC~0D9~09A~0BC~167~08B~044~05D~0D2~01B~1F6~06C~06D~211~108~003~053~016~01A~0AB~09E~007~171~00A~121~122~123~124~125~126~127~128~129~12A~12B~12C~12D~12E~12F~130~131~132~133~134~135~136~137~138~139~13A~13B~13C~13D~13E~13F~140~141~142~143~144~145~146~147~148~149~14A~14B~14C~14D~14E~14F~150~151~152~16C~023~019~025~013~054~014~1FD~00D~082~209~16F~0A2~081~08E~205~0C8~1FB~1FF~0DA~1F7~021~153~154~155~156~157~158~159~15A~0BA~10C~07D~0A5~061~02B~07E~10A~009~090~089~0CD~11E~117~04C~04B~04F~04D~04E~04A~093~213~214~02D~0D1~219~1F4~079~046~1FC~-1~";}
    // Ball
    // Original if (o==2) {ln="~000~001~002~003~004~005~006~007~008~009~00A~00B~00C~-1~";}
    if (o==2) {ln="~000~001~002~003~004~005~006~007~008~009~00A~00B~00C~-1~";}
    // Berry
    // Original if (o==3) {ln="~000~092~0AC~089~0A7~095~085~086~09F~0A6~0AF~08F~0A9~09D~09C~093~09A~0AD~08A~0A8~08D";ln+="~091~0A0~096~0A2~08B~0A4~087~08C~0AB~098~099~09B~0A1~088~094~0AA~08E~0A3~0AE~09E";ln+="~0A5~097~090~-1~";}
    if (o==3) {ln="~000~085~0AC~0A6~0AF~088~092~08F~099~094~09C~08A~0A3~0AE~09D~0AD~0A9~0A8~091~0A0~086~095~0A7~096~097~0A4~08C~087~08D~09B~0A1~09F~0AA~098~09A~08B~0AB~09E~0A2~08E~0A5~090~089~093~-1~";}
    // Key
    // Original if (o==4) {ln="~000~201~217~1FE~21E~205~1FA~212~200~202~204~206~208~20A~20C~20E~210~1FF~21C~223~21B";ln+="~21D~21A~1F5~20F~220~1F7~214~216~1F4~21F~1F9~1FD~20B~209~222~203~1F8~20D~215~1F6";ln+="~213~1FC~207~211~219~1FB~221~218~173~16A~16D~168~160~163~165~164~161~166~16E~174";ln+="~172~15D~162~15E~170~175~176~15F~167~171~16C~169~16F~16B~110~10F~115~11F~104~10A";ln+="~120~10D~113~117~107~105~112~103~118~106~111~114~119~11A~11B~11C~11E~109~116~10E";ln+="~11D~108~10C~177~178~224~225~226~227~228~229~22A~22B~22C~22D~22E~22F~230~231~232";ln+="~233~234~235~236~237~238~239~23A~23B~23C~23D~23E~23F~240~241~242~243~244~245~246";ln+="~247~248~249~24A~24B~24C~24D~24E~24F~250~251~-1~";}
    if (o==4) {ln="~000~162~178~106~113~10E~173~224~225~226~227~228~229~22A~22B~22C~22D~22E~22F~230~231~232~233~234~235~236~237~238~239~23A~23B~23C~23D~23E~23F~240~241~242~243~244~245~246~247~248~249~250~250~250~250~251~251~251~251~16D~217~115~109~112~170~212~223~21C~21D~21A~21B~1FA~105~120~10D~200~202~204~206~208~20A~20C~20E~210~165~15D~103~20F~222~21E~168~21F~15F~172~218~220~161~216~166~203~16A~169~10F~11F~110~11D~1F9~16E~1F5~164~201~177~20B~118~207~104~221~15E~111~107~174~119~11A~11B~11C~160~20D~1F8~215~114~175~16B~176~116~1FE~163~167~1F6~211~108~171~16C~1FD~209~16F~205~1FB~1FF~1F7~10C~10A~11E~117~213~214~219~1F4~1FC~-1~";}
    // Hold
    // Original if (o==5) {ln="~000~0BD~0CF~0CE~0FF~0B3~0D7~0BA~0BE~0C1~0C0~0D8~0C9~0C3~0B6~0C4~101~0CC~0BB~0DD~0C8";ln+="~0CA~0C5~0DE~0B5~0D0~0B9~0C7~0DF~0CD~0D1~0D4~100~0D3~0B7~0FE~0C6~0DC~0D2~0DB~0D9";ln+="~0BC~0C2~0CB~0B8~0BF~0D5~0E1~0E0~0D6~0DA~0B4~102~-1~";}
    if (o==5) {ln="~000~0C1~0C0~0D5~0FF~0B3~0C9~0D8~0B6~0D4~0C3~0B7~0C4~102~0D3~0C5~0CC~101~0D7~0E0~0BB~0D6~0CA~0E1~0DD~0DE~0B5~0D0~0B9~0C7~0DF~0BD~0DB~0CB~0C2~100~0FE~0B8~0CE~0B4~0BE~0CF~0C6~0BF~0DC~0D9~0BC~0D2~0C8~0DA~0BA~0CD~0D1~-1~";}
    // TM
    // Original if (o==6) {ln="~000~121~122~123~124~125~126~127~128~129~12A~12B~12C~12D~12E~12F~130~131~132~133~134";ln+="~135~136~137~138~139~13A~13B~13C~13D~13E~13F~140~141~142~143~144~145~146~147~148";ln+="~149~14A~14B~14C~14D~14E~14F~150~151~152~153~154~155~156~157~158~159~15A~-1~";}
    if (o==6) {ln="~000~121~122~123~124~125~126~127~128~129~12A~12B~12C~12D~12E~12F~130~131~132~133~134~135~136~137~138~139~13A~13B~13C~13D~13E~13F~140~141~142~143~144~145~146~147~148~149~14A~14B~14C~14D~14E~14F~150~151~152~153~154~155~156~157~158~159~15A~-1~";}
    // Disc
    // Original if (o==7) {ln="~216~217~218~219~21A~21B~21C~21D~21E~21F~220~221~222~223~224~225~226~227~228~229";ln+="~22A~22B~22C~22D~22E~22F~230~231~232~233~234~235~236~237~238~239~23A~23B~23C~23D";ln+="~23E~23F~240~241~242~243~244~245~246~247~248~249~24A~24B~24C~24D~24E~24F~250~251~-1~";}
    if (o==7) {ln="~000~224~225~226~227~228~229~22A~22B~22C~22D~22E~22F~230~231~232~233~234~235~236~237~238~239~23A~23B~23C~23D~23E~23F~240~241~242~243~244~245~246~247~248~249~24A~24B~24C~24D~24E~24F~250~251~217~223~21C~21D~21A~21B~222~21E~21F~218~220~216~221~219~-1~";}
    l=0;m=0;w=0;H1.options.lenght=0;
    while (l==0) {w+=1;t=FI(ln,"~",w);if (t=="-1") {H1.options.length=m;H1.selectedIndex=0;t=ItemC();l=1;} else {tname=ItemDex(t,3);if (m==0) {H1.options[m]= new Option(tname,t,true);} else {H1.options[m]= new Option(tname,t);} m+=1;}}
    LogConsole.value+="Done Sorting\r\n";return t;
}
function NLO() {
    var H1=pokemon_caught_location;var ln=" ";var o=0;var l=0;var m=0;var w=0;var t=" ";var t2=" ";var tname=" ";LogConsole.value+="Sorting Locations\r\n";o=Lsort.selectedIndex;
    // Num
    if (o==0) {ln="~00~01~02~03~04~05~06~07~08~09~0A~0B~0C~0D~0E~0F";ln+="~10~11~12~13~14~15~16~17~18~19~1A~1B~1C~1D~1E~1F";ln+="~20~21~22~23~24~25~26~27~28~29~2A~2B~2C~2D~2E~2F";ln+="~30~31~32~33~34~35~36~37~38~39~3A~3B~3C~3D~3E~3F";ln+="~40~41~42~43~44~45~46~47~48~49~4A~4B~4C~4D~4E~4F";ln+="~50~51~52~53~54~55~56~57~58~59~5A~5B~5C~5D~5E~5F";ln+="~60~61~62~63~64~65~66~67~68~69~6A~6B~6C~6D~6E~6F";ln+="~70~71~72~73~74~75~76~77~78~69~7A~7B~7C~7D~7E~7F";ln+="~80~81~82~83~84~85~86~87~88~89~8A~8B~8C~8D~8E~8F";ln+="~90~91~92~93~94~95~96~97~98~99~9A~9B~9C~9D~9E~9F";ln+="~A0~A1~A2~A3~A4~A5~A6~A7~A8~A9~AA~AB~AC~AD~AE~AF";ln+="~B0~B1~B2~B3~B4~B5~B6~B7~B8~B9~BA~BB~BC~BD~BE~BF";ln+="~C0~C1~C2~C3~C4~C5~C6~C7~C8~C9~CA~CB~CC~CD~CE~CF";ln+="~D0~D1~D2~D3~D4~D5~D6~D7~D8~D9~DA~DB~DC~DD~DE~DF";ln+="~E0~E1~E2~E3~E4~E5~E6~E7~E8~E9~EA~EB~EC~ED~EE~EF";ln+="~F0~F1~F2~F3~F4~F5~F6~F7~F8~F9~FA~FB~FC~FD~FE~FF";ln+="~-1~";}
    // Ruby/Sapphire
    if (o==1) {ln="~00~01~02~03~04~05~06~07~08~09~0A~0B~0C~0D~0E~0F";ln+="~10~11~12~13~14~15~16~17~18~19~1A~1B~1C~1D~1E~1F";ln+="~20~21~22~23~24~25~26~27~28~29~2A~2B~2C~2D~2E~2F";ln+="~30~31~32~33~34~35~36~37~38~39~3A~3B~3C~3D~3E~3F";ln+="~40~41~42~43~44~45~46~47~48~49~4A~4B~4C~4D~4E~4F";ln+="~50~51~52~53~54~55~56~57~FE~FF~-1~";}
    // Emerald
    if (o==2) {ln="~00~01~02~03~04~05~06~07~08~09~0A~0B~0C~0D~0E~0F";ln+="~10~11~12~13~14~15~16~17~18~19~1A~1B~1C~1D~1E~1F";ln+="~20~21~22~23~24~25~26~27~28~29~2A~2B~2C~2D~2E~2F";ln+="~30~31~32~33~34~35~36~37~38~39~3A~3B~3C~3D~3E~3F";ln+="~40~41~42~43~44~45~46~47~48~49~4A~4B~4C~4D~4E~4F";ln+="~50~51~52~53~54~55~56~57";ln+="~C5~C6~C7~C8~C9~CA~CB~CC~CD~CE~CF";ln+="~D0~D1~D2~D3~D4~FE~FF~-1~";}
    // Fire/Green
    if (o==3) {ln="~58~59~5A~5B~5C~5D~5E~5F";ln+="~60~61~62~63~64~65~66~67~68~69~6A~6B~6C~6D~6E~6F";ln+="~70~71~72~73~74~75~76~77~78~69~7A~7B~7C~7D~7E~7F";ln+="~80~81~82~83~84~85~86~87~88~89~8A~8B~8C~8D~8E~8F";ln+="~90~91~92~93~94~95~96~97~98~99~9A~9B~9C~9D~9E~9F";ln+="~A0~A1~A2~A3~A4~A5~A6~A7~A8~A9~AA~AB~AC~AD~AE~AF";ln+="~B0~B1~B2~B3~B4~B5~B6~B7~B8~B9~BA~BB~BC~BD~BE~BF";ln+="~C0~C1~C2~C3~C4~FE~FF~-1~";}
    // Colosseum
    if (o==4) {ln="~00~01~02~03~04~05~06~07~08~09~0A~0B~0C~0D~0E~0F";ln+="~10~11~12~13~14~15~16~17~18~19~1A~1B~1C~1D~1E~1F";ln+="~20~21~22~23~24~25~26~27~28~29~2A~2B~2C~2D~2E~2F";ln+="~30~31~32~33~34~35~36~37~38~39~3A~3B~3C~3D~3E~3F";ln+="~40~41~42~43~44~45~46~47~48~49~4A~4B~4C~4D~4E~4F";ln+="~50~51~52~53~54~55~56~57~58~59~5A~5B~5C~5D~5E~5F";ln+="~60~61~62~63~64~65~66~67~68~69~6A~6B~6C~6D~6E~6F";ln+="~70~71~72~73~74~75~76~77~78~69~7A~7B~7C~7D~7E~7F";ln+="~80~81~82~83~84~85~86~87~88~89~8A~8B~8C~8D~8E~8F";ln+="~FE~FF";ln+="~-1~";}
    // XD
    if (o==5) {ln="~00~09~10~0A~0B";ln+="~40~41~42~43~44~45~46~47~49~4A~4B~4C~4D";ln+="~50~51~54~55~57~58~5A~5B~5C~5E";ln+="~64~6B~6D~6E~6F~77~8F~99";ln+="~A2~A4~FE~FF~-1~";}
    l=0;m=0;w=0;H1.options.lenght=0;
    while (l==0) {w+=1;t=FI(ln,"~",w);if (t=="-1") {H1.options.length=m;H1.selectedIndex=0;l=1;} else {tname=LocDex(t,o);if (m==0) {H1.options[m]= new Option(tname,t,true);} else {H1.options[m]= new Option(tname,t);} m+=1;}}
    LogConsole.value+="Done Sorting\r\n";return t;
}