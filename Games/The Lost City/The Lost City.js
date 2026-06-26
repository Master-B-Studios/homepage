//----------------------------------------------------
// Cursor Manager
//----------------------------------------------------

const screenFrame = document.getElementById("screen_frame");
const cursor = document.getElementById("cursor");

const CURSOR_FPS = 10;
const CURSOR_FRAMES = 4;

let cursorType = "default";
let cursorFrame = 1;

const CURSORS = {

    default : { hotspot:[14,14] },

    left : { hotspot:[14,14] },

    right : { hotspot:[14,14] },

    up : { hotspot:[14,14] },

    down : { hotspot:[14,14] },

    object : { hotspot:[14,14] }

};

const cursorCache = {};

for (const type in CURSORS) {

    cursorCache[type] = [];

    for (let i = 1; i <= CURSOR_FRAMES; i++) {

        const img = new Image();

        img.src = `navigator/${type}_${i}.png`;

        cursorCache[type].push(img);

    }

}

//----------------------------------------------------
// Initialisierung
//----------------------------------------------------

screenFrame.addEventListener("load", initRoom);

function initRoom() {

    const doc = screenFrame.contentDocument;

    // Cursor bewegen
    doc.addEventListener("mousemove", moveCursor);

    // Cursor anzeigen
    doc.addEventListener("mouseenter", () => {
        cursor.style.display = "block";
    });

    // Cursor ausblenden
    doc.addEventListener("mouseleave", () => {
        cursor.style.display = "none";
        setCursor("default");
    });

    // Cursor automatisch erkennen
    doc.addEventListener("mouseover", detectCursor);
    doc.addEventListener("mouseout", resetCursor);

}

function moveCursor(e){

    const rect = screenFrame.getBoundingClientRect();

    cursor.style.left = (rect.left + e.clientX) + "px";
    cursor.style.top  = (rect.top  + e.clientY) + "px";

}

function detectCursor(e){

    const hotspot = e.target.closest("[class*='cursor_']");

    if(!hotspot)
        return;

    for(const cls of hotspot.classList){

        if(cls.startsWith("cursor_")){

            setCursor(cls.substring(7));
            return;

        }

    }

}

function setCursor(type){
    if(type===cursorType) return;
    cursorType = type;
    cursorFrame = 1;
    cursor.src = cache[type][0].src;
    cursor.style.transform = `translate(-${CURSORS[type].hotspotX}px,-${CURSORS[type].hotspotY}px)`;
}

function resetCursor(e){

    const hotspot = e.target.closest("[class*='cursor_']");

    if(hotspot){

        setCursor("default");

    }

}