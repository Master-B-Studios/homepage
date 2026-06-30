//-----------------------------------------------------
// Cursor Manager
//----------------------------------------------------

const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;

const cursor = document.getElementById("cursor");

const CURSOR_FPS = 8;
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

frames.forEach(frame => {frame.addEventListener("load", () => initFrame(frame));});

function initFrame(frame) {
    setCursor("default");
    const doc = frame.contentDocument;
    doc.addEventListener("mousemove", e => moveCursor(e, frame));
    doc.addEventListener("mouseenter", () => {if (!isTouch) cursor.style.display = "block";});
    doc.addEventListener("mouseleave", () => {cursor.style.display = "none";setCursor("default");});
    doc.addEventListener("mouseover", detectCursor);
    doc.addEventListener("mouseout", resetCursor);
}

function moveCursor(e, frame){
    const rect = frame.getBoundingClientRect();
    cursor.style.left = (rect.left + e.clientX) + "px";
    cursor.style.top  = (rect.top  + e.clientY) + "px";
}

function detectCursor(e){
    const hotspot = e.target.closest("[class*='cursor_']");
    if(!hotspot) return;
    for(const cls of hotspot.classList) {
        if(cls.startsWith("cursor_")) {
            setCursor(cls.substring(7));
            return;
        }
    }
}

function setCursor(type){
    if(type===cursorType) return;
    cursorType = type;
    cursorFrame = 1;
    cursor.src = cursorCache[type][0].src;
    const [x, y] = CURSORS[type].hotspot;
    cursor.style.transform = `translate(-${x}px,-${y}px)`;
    //cursor.style.transform = `translate(-${CURSORS[type].hotspotX}px,-${CURSORS[type].hotspotY}px)`;
}

function resetCursor(e) {const hotspot = e.target.closest("[class*='cursor_']");if(hotspot) {setCursor("default");}}

setInterval(() => {
    if (cursor.style.display === "none") return;
    cursorFrame++;
    if (cursorFrame > CURSOR_FRAMES)
        cursorFrame = 1;
    cursor.src = cursorCache[cursorType][cursorFrame - 1].src;
}, 1000 / CURSOR_FPS);