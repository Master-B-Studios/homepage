// Linker

function credits_2_main() {

    window.location.href = "../../index.html";
}
function main_2_credits() {

    window.location.href = "sources/html/Credits.html";
}
function system_2_main() {

    window.location.href = "../../../index.html";
}
function system_2_altair() {

    window.location.href = "../Sectors/Altair-Sector.html";
}
function system_2_canis() {

    window.location.href = "../Sectors/Canis-Sector.html";
}
function system_2_inner_core() {

    window.location.href = "../Sectors/Inner-Core-Sector.html";
}
function system_2_sirius() {

    window.location.href = "../Sectors/Sirius-Sector.html";
}
function system_2_sol() {

    window.location.href = "../Sectors/Sol-Sector.html";
}


// Map_Loader

function loadmap_sector() {

    var parsed_id = event.srcElement.id

    var part_1 = "sources/html/Sectors/";

    var part_2 = parsed_id;

    var part_3 = ".html";

    var multi = part_1 + part_2 + part_3;

    window.location.href = multi;
}

function loadmap_system() {

    var parsed_id = event.srcElement.id

    var part_1 = "../Systems/";

    var part_2 = parsed_id;

    var part_3 = ".html";

    var multi = part_1 + part_2 + part_3;

    window.location.href = multi;
}

function loadmap_big() {

    var parsed_id = event.srcElement.id

    var part_1 = parsed_id;

    var part_2 = "_Full.html";

    var multi = part_1 + part_2;

    window.location.href = multi;
}

// in System include: td class="jg_link" onclick="loadmap_link()" id=""
function loadmap_link() {

    var parsed_id = event.srcElement.id

    var part_1 = parsed_id;

    var part_2 = ".html";

    var multi = part_1 + part_2;

    window.location.href = multi;
}
