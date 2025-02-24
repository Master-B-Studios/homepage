var hashtag = '%23';
var opener = '<';

function init() {document.getElementById('unload_episodes_list').style.zIndex = '-200';document.getElementById('unload_episodes_list').style.opacity = '0';}

function jump_page_home() {window.location.href = '#home'}
function jump_page_film() {window.location.href = '#film'}
function jump_page_serie() {window.location.href = '#serie'}
function jump_page_episode() {window.location.href = '#episode'}

function subclick(obj) {obj.children[0].click();}

function reset_all() {
    document.getElementById('input_title_movie').innerHTML = '';
    document.getElementById('input_number_movie').innerHTML = '';
    document.getElementById('input_runtime_movie').innerHTML = '';
    document.getElementById('input_year_movie').innerHTML = '';
    document.getElementById('input_age_movie').innerHTML = '';
    document.getElementById('input_content_movie').innerHTML = '';
    document.getElementById('input_title_serie').innerHTML = '';
    document.getElementById('input_number_serie').innerHTML = '';
    document.getElementById('input_seasons_serie').innerHTML = '';
    document.getElementById('input_year_serie').innerHTML = '';
    document.getElementById('input_age_serie').innerHTML = '';
    document.getElementById('input_content_serie').innerHTML = '';
    document.documentElement.scrollTop = 0;
}

function save_film() {
    var title_movie = document.getElementById('input_title_movie').innerHTML;
    var number_movie = document.getElementById('input_number_movie').innerHTML;
    var runtime_movie = document.getElementById('input_runtime_movie').innerHTML;
    var year_movie = document.getElementById('input_year_movie').innerHTML;
    var age_movie = document.getElementById('input_age_movie').innerHTML;
    var content_movie = document.getElementById('input_content_movie').innerHTML;
    if (number_movie <= 9) {number_movie = '000'+number_movie;} else if (number_movie >= 10 && number_movie <= 99) {number_movie = '00'+number_movie;} else if (number_movie >= 100 && number_movie <= 999) {number_movie = '0'+number_movie;}

    content_movie = content_movie.replace(/<br>/gi, '');
    content_movie = content_movie.replace(/<div>/gi, '<br>');
    content_movie = content_movie.replace(/<\/div>/gi, '');
    content_movie = content_movie.replace(/&amp;/gi, '&');
    title_movie = title_movie.replace(/&amp;/gi, '&');
    
    var link = document.createElement("A");var filename = title_movie+'.nfo';

    var save_content = 
    '<?xml version="1.0" encoding="UTF-8" standalone="yes" ?>\n'+
    '<movie>\n'+
    '   <title>'+title_movie+'</title>\n'+
    '   <originaltitle>'+title_movie+'</originaltitle>\n'+
    '   <plot>'+content_movie+'</plot>\n'+
    '   <runtime>'+runtime_movie+'</runtime>\n'+
    '   <mpaa>'+age_movie+'</mpaa>\n'+
    '   <id>'+number_movie+'</id>\n'+
    '   <uniqueid type="mbdb">'+number_movie+'</uniqueid>\n'+
    '   <year>'+year_movie+'</year>\n'+
    '</movie>\n';

    link.setAttribute("href","data:text/xml,"+save_content);link.setAttribute("style","display:none");link.setAttribute("download",filename);document.body.appendChild(link);console.log(link.outerHTML);link.click();document.body.removeChild(link);
}
function save_serie() {
    var title_serie = document.getElementById('input_title_serie').innerHTML;
    var number_serie = document.getElementById('input_number_serie').innerHTML;
    var seasons_serie = document.getElementById('input_seasons_serie').innerHTML;
    var year_serie = document.getElementById('input_year_serie').innerHTML;
    var age_serie = document.getElementById('input_age_serie').innerHTML;
    var content_serie = document.getElementById('input_content_serie').innerHTML;

    if (number_serie <= 9) {number_serie = '000'+number_serie;} else if (number_serie >= 10 && number_serie <= 99) {number_serie = '00'+number_serie;} else if (number_serie >= 100 && number_serie <= 999) {number_serie = '0'+number_serie;}

    content_serie = content_serie.replace(/<br>/gi, '');
    content_serie = content_serie.replace(/<div>/gi, '<br>');
    content_serie = content_serie.replace(/<\/div>/gi, '');
    content_serie = content_serie.replace(/&amp;/gi, '&');
    title_serie = title_serie.replace(/&amp;/gi, '&');
    
    seasons_serie = parseInt(seasons_serie)+1;var seasons = '';for (var i = 1; i < seasons_serie; i++) {seasons = seasons + '   <namedseason number="'+i+'">Staffel '+i+'</namedseason>\n';}
    
    var link = document.createElement("A");var filename = 'tvshow.nfo';

    var save_content = 
    '<?xml version="1.0" encoding="UTF-8" standalone="yes" ?>\n'+
    '<tvshow>\n'+
    '   <title>'+title_serie+'</title>\n'+
    '   <plot>'+content_serie+'</plot>\n'+
    '   <mpaa>'+age_serie+'</mpaa>\n'+
    '   <id>S'+number_serie+'</id>\n'+
    '   <uniqueid type="mbdb">S'+number_serie+'</uniqueid>\n'+
    seasons+
    '   <premiered>'+year_serie+'-01-01</premiered>\n'+
    '</tvshow>\n';

    link.setAttribute("href","data:text/xml,"+save_content);link.setAttribute("style","display:none");link.setAttribute("download",filename);document.body.appendChild(link);console.log(link.outerHTML);link.click();document.body.removeChild(link);
}
function episode_prepare() {
    document.getElementById('input_title_serie_episode').innerHTML = document.getElementById('input_title_serie').innerHTML;
    document.getElementById('input_number_serie_episode').innerHTML = document.getElementById('input_number_serie').innerHTML;
    jump_page_episode();
}
function episode_prepare_next() {
    document.getElementById('input_title_episode').innerHTML = '';
    document.getElementById('input_content_episode').innerHTML = '';
    document.getElementById('input_number_episode').innerHTML = parseInt(document.getElementById('input_number_episode').innerHTML)+1;
    if (document.getElementById('episodes_list').innerHTML != '') {parse_episodes_list();}
    else {document.getElementById('input_title_episode').focus();}
}
function save_episode() {
    var title_serie_episode = document.getElementById('input_title_serie_episode').innerHTML;
    var number_serie_episode = document.getElementById('input_number_serie_episode').innerHTML;
    var title_episode = document.getElementById('input_title_episode').innerHTML;
    var season_episode = document.getElementById('input_season_episode').innerHTML;
    var number_episode = document.getElementById('input_number_episode').innerHTML;
    var content_episode = document.getElementById('input_content_episode').innerHTML;

    if (number_serie_episode <= 9) {number_serie_episode = '000'+number_serie_episode;} else if (number_serie_episode >= 10 && number_serie_episode <= 99) {number_serie_episode = '00'+number_serie_episode;} else if (number_serie_episode >= 100 && number_serie_episode <= 999) {number_serie_episode = '0'+number_serie_episode;}
    var season_episode_decimal = '';var number_episode_decimal = '';
    if (season_episode <= 9) {season_episode_decimal = '0'+season_episode;} else {season_episode_decimal = season_episode};
    if (number_episode <= 9) {number_episode_decimal = '0'+number_episode;} else {number_episode_decimal = number_episode};

    content_episode = content_episode.replace(/<br>/gi, '');
    content_episode = content_episode.replace(/<div>/gi, '<br>');
    content_episode = content_episode.replace(/<\/div>/gi, '');
    content_episode = content_episode.replace(/&amp;/gi, '&');
    title_serie_episode = title_serie_episode.replace(/&amp;/gi, '&');
    title_episode = title_episode.replace(/&amp;/gi, '&');
    
    var link = document.createElement("A");
    var filename = 'S'+season_episode_decimal+'E'+number_episode_decimal+' '+title_episode+'.nfo';

    var save_content = 
    '<?xml version="1.0" encoding="UTF-8" standalone="yes" ?>\n'+
    '<episodedetails>\n'+
    '   <title>'+title_episode+'</title>\n'+
    '   <showtitle>'+title_serie_episode+'</showtitle>\n'+
    '   <season>'+season_episode+'</season>\n'+
    '   <episode>'+number_episode+'</episode>\n'+
    '   <plot>'+content_episode+'</plot>\n'+
    '   <id>S'+number_serie_episode+season_episode_decimal+number_episode_decimal+'</id>\n'+
    '   <uniqueid type="mbdb">S'+number_serie_episode+season_episode_decimal+number_episode_decimal+'</uniqueid>\n'+
    '</episodedetails>\n';

    link.setAttribute("href","data:text/xml,"+save_content);link.setAttribute("style","display:none");link.setAttribute("download",filename);document.body.appendChild(link);console.log(link.outerHTML);link.click();document.body.removeChild(link);
}

function save_editor_serie() {
    var title_serie = document.getElementById('input_title_serie').innerHTML;
    var seasons_serie = document.getElementById('input_seasons_serie').innerHTML;

    var link = document.createElement("A");var filename = 'Seriendaten '+title_serie+' Erstellen.cmd';

    var save_content =
    '@echo off\n'+
    'chcp 65001\n'+
    'setlocal EnableDelayedExpansion\n'+
    'set "name='+title_serie+'"\n'+
    'set /a seasons='+seasons_serie+'\n'+
    'set /a season=1\n'+
    ':start\n'+
    ':create_directory\n'+
    'if exist "!name!.jpg" (\n'+
        'mkdir "!name!"\n'+
        'move "!name!.jpg" "!name!\\poster.jpg"\n'+
        'cd !name!\n'+
        'goto create_seasons\n'+
    ') else (\n'+
        'choice /C jn /N /M "Das Cover !name! liegt nicht in diesem Ordner. Trotzdem weiter machen? ([92mJ[0m)a | ([31mN[0m)ein"\n'+
        'if !errorlevel! equ 2 goto end\n'+
        'if !errorlevel! equ 1 goto directory\n'+
    ')\n'+
    ':create_seasons\n'+
    'if !season! leq 9 (\n'+
        'set "season_number=0!season!"\n'+
        'copy "poster.jpg" "season!season_number!-poster.jpg"\n'+
        'mkdir "Staffel !season_number!"\n'+
        'if !season! equ !seasons! (\n'+
            'copy "poster.jpg" "season-all-poster.jpg"\n'+
            'goto end\n'+
        ') else (\n'+
            'set /a season+=1\n'+
            'goto create_seasons\n'+
        ')\n'+
    ')\n'+
    ':end\n'+
    'exit\n'+
    ':directory\n'+
    'mkdir "!name!"\n'+
    'cd !name!\n'+
    'goto create_seasons\n';

    link.setAttribute("href","data:text/xml,"+save_content);link.setAttribute("style","display:none");link.setAttribute("download",filename);document.body.appendChild(link);console.log(link.outerHTML);link.click();document.body.removeChild(link);
}

function load_nfo(obj, type) {
    file = obj.files[0];
    var content = document.getElementById('loaded_content');
    var reader = new FileReader();
    reader.addEventListener('load',() => {content.innerHTML = reader.result;if (type == 'film') {parse_loaded_film();} else if (type == 'serie') {parse_loaded_serie();} else if (type == 'episode') {parse_loaded_episode();}},false,);
    reader.readAsText(file);
}
function parse_loaded_film() {
    var full_content = document.getElementById('loaded_content').innerHTML;
    var parser = new DOMParser();
    var xmlDoc = parser.parseFromString(full_content,'text/xml');
    if (xmlDoc.getElementsByTagName('movie')[0] != undefined) {
        document.getElementById('input_title_movie').innerHTML = xmlDoc.getElementsByTagName('title')[0].childNodes[0].nodeValue;
        document.getElementById('input_number_movie').innerHTML = parseInt(xmlDoc.getElementsByTagName('id')[0].childNodes[0].nodeValue);
        document.getElementById('input_runtime_movie').innerHTML = xmlDoc.getElementsByTagName('runtime')[0].childNodes[0].nodeValue;
        document.getElementById('input_year_movie').innerHTML = xmlDoc.getElementsByTagName('year')[0].childNodes[0].nodeValue;
        document.getElementById('input_age_movie').innerHTML = xmlDoc.getElementsByTagName('mpaa')[0].childNodes[0].nodeValue;
        document.getElementById('input_content_movie').innerHTML = xmlDoc.getElementsByTagName('plot')[0].childNodes[0].nodeValue;
        jump_page_film();document.documentElement.scrollTop = 0;
    } else {alert('Diese .nfo-Datei enthält keine Filmdaten!');}
}
function parse_loaded_serie() {
    var full_content = document.getElementById('loaded_content').innerHTML;
    var parser = new DOMParser();
    var xmlDoc = parser.parseFromString(full_content,'text/xml');
    if (xmlDoc.getElementsByTagName('tvshow')[0] != undefined) {
        document.getElementById('input_title_serie').innerHTML = xmlDoc.getElementsByTagName('title')[0].childNodes[0].nodeValue;
        document.getElementById('input_number_serie').innerHTML = parseInt(xmlDoc.getElementsByTagName('id')[0].childNodes[0].nodeValue.substring(1));
        document.getElementById('input_year_serie').innerHTML = xmlDoc.getElementsByTagName('premiered')[0].childNodes[0].nodeValue.substring(0, 4);
        document.getElementById('input_age_serie').innerHTML = xmlDoc.getElementsByTagName('mpaa')[0].childNodes[0].nodeValue;
        document.getElementById('input_content_serie').innerHTML = xmlDoc.getElementsByTagName('plot')[0].childNodes[0].nodeValue;
        document.getElementById('input_seasons_serie').innerHTML = xmlDoc.getElementsByTagName('namedseason').length;
        jump_page_serie();document.documentElement.scrollTop = 0;
    } else {alert('Diese .nfo-Datei enthält keine Seriendaten!');}
}
function parse_loaded_episode() {
    var full_content = document.getElementById('loaded_content').innerHTML;
    var parser = new DOMParser();
    var xmlDoc = parser.parseFromString(full_content,'text/xml');
    if (xmlDoc.getElementsByTagName('episodedetails')[0] != undefined) {
        document.getElementById('input_title_serie_episode').innerHTML = xmlDoc.getElementsByTagName('showtitle')[0].childNodes[0].nodeValue;
        document.getElementById('input_number_serie_episode').innerHTML = parseInt(xmlDoc.getElementsByTagName('id')[0].childNodes[0].nodeValue.substring(1, 5));
        document.getElementById('input_season_episode').innerHTML = xmlDoc.getElementsByTagName('season')[0].childNodes[0].nodeValue;
        document.getElementById('input_number_episode').innerHTML = xmlDoc.getElementsByTagName('episode')[0].childNodes[0].nodeValue;
        document.getElementById('input_title_episode').innerHTML = xmlDoc.getElementsByTagName('title')[0].childNodes[0].nodeValue;
        document.getElementById('input_content_episode').innerHTML = xmlDoc.getElementsByTagName('plot')[0].childNodes[0].nodeValue;
        jump_page_episode();document.documentElement.scrollTop = 0;
    } else {alert('Diese .nfo-Datei enthält keine Episodendaten!');}
}

function load_episodes_list(obj) {
    file = obj.files[0];
    var content = document.getElementById('episodes_list');
	var reader = new FileReader();
    reader.addEventListener('load',() => {
        content.innerHTML = reader.result;parse_episodes_list();
        document.getElementById('load_episodes_list').style.zIndex = '-200';document.getElementById('load_episodes_list').style.opacity = '0';
        document.getElementById('unload_episodes_list').style.zIndex = '100';document.getElementById('unload_episodes_list').style.opacity = '1';
    },false,);
    reader.readAsText(file);
}
function parse_episodes_list() {
    var number_episode = parseInt(document.getElementById('input_number_episode').innerHTML);
    var text_episode = document.getElementById('episodes_list').innerHTML;
    if (document.getElementById('episodes_list').innerHTML != '') {
        var breaks = text_episode.split('\n');
        var new_line = breaks[number_episode];
        document.getElementById('input_title_episode').innerHTML = '';
        document.getElementById('input_title_episode').innerHTML = new_line;
        episode_remove_pretitle();
    }
    else {document.getElementById('input_title_episode').focus();}
}
function episode_remove_pretitle() {
    var pretitle = document.getElementById('input_title_episode').innerHTML;
    var cleantitle = pretitle.substring(4);
    document.getElementById('input_title_episode').innerHTML = cleantitle;
    document.getElementById('input_content_episode').focus();
}
function unload_episodes_list() {
    document.getElementById('episodes_list').innerHTML = '';
    document.getElementById('load_episodes_list').style.zIndex = '100';document.getElementById('load_episodes_list').style.opacity = '1';
    document.getElementById('unload_episodes_list').style.zIndex = '-200';document.getElementById('unload_episodes_list').style.opacity = '0';
}
function format_text(obj) {
    var full_content = obj.innerHTML;
    var parser = new DOMParser();
    var xmlDoc = parser.parseFromString(full_content,'text/xml');
    if (xmlDoc.getElementsByTagName('p')[0].childNodes[0].nodeValue != null) {obj.innerHTML = xmlDoc.getElementsByTagName('p')[0].childNodes[0].nodeValue;}
}