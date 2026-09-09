const colors = ['blue', 'green', 'white', 'yellow', 'orange', 'red'];
const pieces = document.getElementsByClassName('piece');

/**
 * Returns j-th adjacent face of i-th face  
 * @param {*} i 
 * @param {*} j 
 * @returns 
 */
function mx(i, j) {return ([2, 4, 3, 5][j % 4 | 0] + i % 2 * ((j | 0) % 4 * 2 + 3) + 2 * (i / 2 | 0)) % 6;}

function getAxis(face) {return String.fromCharCode('X'.charCodeAt(0) + face / 2);}

/**
 * Moves each of 26 pieces to their places, assigns IDs and attaches stickers
 */
function assembleCube() {
    function moveTo(face) {
        id = id + (1 << face);
        const newDiv = createDiv();
        const attribute = `sticker ${colors[face]}`;
        pieces[i].children[face].appendChild(newDiv).setAttribute('class', attribute);
        const axis = getAxis(face);
        const value = face % 2 * 4 - 2;
        return `translate${axis}(${value}em)`;
    }
    for (var id, x, i = 0; id = 0, i < 26; i++) {
        x = mx(i, i % 18);
        const transform = `rotateX(0deg)${moveTo(i % 6)}${i > 5 ? moveTo(x) + (i > 17 ? moveTo(mx(x, x + 2)) : '') : ''}`
        pieces[i].style.transform = transform;
        const pieceId = `piece${id}`;
        pieces[i].setAttribute('id', pieceId);
    }
}

function createDiv() {return document.createElement('div');}

function getPieceBy(face, index, corner) {
    const pieceId = `piece${(1 << face) + (1 << mx(face, index)) + (1 << mx(face, index + 1)) * corner}`;
    return document.getElementById(pieceId);
}

/**
 * Swaps stickers of the face (by clockwise) stated times, thereby rotates the face
 * @param {*} face 
 * @param {*} times 
 */
function swapPieces(face, times) {
    for (var i = 0; i < 6 * times; i++) {
        var piece1 = getPieceBy(face, i / 2, i % 2);
        var piece2 = getPieceBy(face, i / 2 + 1, i % 2);
        for (var j = 0; j < 5; j++) {
            var sticker1 = piece1.children[j < 4 ? mx(face, j) : face].firstChild;
            var sticker2 = piece2.children[j < 4 ? mx(face, j + 1) : face].firstChild;
            var className = sticker1 ? sticker1.className : '';
            if (className) {
                sticker1.className = sticker2.className;
                sticker2.className = className;
            }
        }
    }
}

/**
 * Animates rotation of the face (by clockwise if cw), and then swaps stickers
 * @param {*} face 
 * @param {*} cw 
 * @param {*} currentTime 
 */

function rotate(face, cw) {return new Promise((resolve) => {animateRotation(face, cw, Date.now(), resolve);});}

function animateRotation(face, cw, currentTime, onDone) {
    const k = .3 * (face % 2 * 2 - 1) * (2 * cw - 1);
    const qubes = Array(9).fill(pieces[face]).map((value, index) => index ? getPieceBy(face, index / 2, index % 2) : value);

    (function rotatePieces() {
        const passed = Date.now() - currentTime;
        const style = `rotate${getAxis(face)}(` + `${k * passed * (passed < 300)}deg)`;
        qubes.forEach((piece) => {piece.style.transform = piece.style.transform.replace(/rotate.\(\S+\)/, style);});
        if (passed >= 300) {
            swapPieces(face, 3 - 2 * cw);
            if (onDone) {onDone();}
            return;
        }
        requestAnimationFrame(rotatePieces);
    })();
}

//document.addEventListener('pointerdown', e => {console.log('POINTERDOWN', 'type=', e.pointerType, 'target=', e.target, 'x=', e.clientX,'y=', e.clientY);}, true);
//document.addEventListener('pointermove', e => {console.log('POINTERMOVE', 'type=', e.pointerType, 'target=', e.target);}, true);
//document.addEventListener('mousedown', e => {console.log('MOUSEDOWN', e.target);}, true);
//document.addEventListener('touchstart', e => {console.log('TOUCHSTART', e.target);}, true);

function pointerDown(e) {
    if (e.pointerType === 'touch' && e.isPrimary === false) {return;}
    e.preventDefault();
    const startX = e.clientX;
    const startY = e.clientY;
    const startXY = pivot.style.transform
        .match(/-?\d+(?:\.\d+)?/g)
        .map(Number);
    const element = e.target.closest('.element');
    const face = element ? [].indexOf.call(element.parentNode.children, element) : -1;
    const elementClass = element ? element.classList : null;
    let finished = false;
    function pointerMove(ev) {
        if (finished) {return;}
        if (ev.pointerId !== e.pointerId) {return;}
        ev.preventDefault();
        const dx = ev.clientX - startX;
        const dy = ev.clientY - startY;
        if (!element) {
            const rotateX = startXY[0] - dy / 2;
            const rotateY = startXY[1] + dx / 2;
            pivot.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            return;
        }
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 20) {return;}
        finished = true;
        // Achsenbewegung:
        // Rechts = 1, Unten = 2, Links = 3, Oben = 4
        //let anchorIndex;
        //if (Math.abs(dx) > Math.abs(dy)) {anchorIndex = dx > 0 ? 2 : 0;}
        //else {anchorIndex = dy > 0 ? 1 : 3;}let anchorIndex;

        const isLeft   = element.classList.contains('left');
        const isRight  = element.classList.contains('right');
        const isFront  = element.classList.contains('front');
        const isBack   = element.classList.contains('back');
        const isTop    = element.classList.contains('top');
        const isBottom = element.classList.contains('bottom');
        if (isFront) {if (Math.abs(dx) > Math.abs(dy)) {anchorIndex = dx > 0 ? 1 : 3;} else {anchorIndex = dy > 0 ? 0 : 2;}}
        else if (isBack) {if (Math.abs(dx) > Math.abs(dy)) {anchorIndex = dx > 0 ? 0 : 2;} else {anchorIndex = dy > 0 ? 3 : 1;}}
        else if (isRight) {if (Math.abs(dx) > Math.abs(dy)) {anchorIndex = dx > 0 ? 2 : 0;} else {anchorIndex = dy > 0 ? 1 : 3;}}
        else if (isLeft) {if (Math.abs(dx) > Math.abs(dy)) {anchorIndex = dx > 0 ? 3 : 1;} else {anchorIndex = dy > 0 ? 2 : 0;}}
        else if (isTop) {if (Math.abs(dx) > Math.abs(dy)) {anchorIndex = dx > 0 ? 0 : 2;} else {anchorIndex = dy > 0 ? 3 : 1;}}
        else if (isBottom) {if (Math.abs(dx) > Math.abs(dy)) {anchorIndex = dx > 0 ? 2 : 0;} else {anchorIndex = dy > 0 ? 1 : 3;}}
        const neighbour = element.parentNode.children[mx(face, anchorIndex + 3)];
        const hasSticker = neighbour.hasChildNodes();
        const rotationFace = mx(face, anchorIndex + 1 + 2 * hasSticker);
        const cw = hasSticker;
        console.log('FACE ROTATION:', 'element=', element.className, 'face=', face, 'dx=', dx, 'dy=', dy, 'anchorIndex=', anchorIndex, 'rotationFace=', rotationFace, 'cw=', cw);
        animateRotation(rotationFace, cw, Date.now());
        cleanup();
    }
    function pointerUp(ev) {if (ev && ev.pointerId !== e.pointerId) {return;} cleanup();}
    function cleanup() {
        scene.removeEventListener('pointermove', pointerMove);
        scene.removeEventListener('pointerup', pointerUp);
        scene.removeEventListener('pointercancel', pointerUp);
    }
    scene.addEventListener('pointermove', pointerMove);
    scene.addEventListener('pointerup', pointerUp);
    scene.addEventListener('pointercancel', pointerUp);
}

document.ondragstart = () => false
const scene = document.getElementById('scene');
const pivot = document.getElementById('pivot');
const guide = document.getElementById('guide');

//scene.addEventListener('mousedown', mouseDown);
scene.addEventListener('pointerdown', pointerDown);
window.addEventListener('load', assembleCube);

async function scrambleCube(numberOfMoves = 2) {
    let lastFace = -1;
    for (let i = 0; i < numberOfMoves; i++) {
        let face;
        do {face = Math.floor(Math.random() * 6);}
        while (face === lastFace || Math.floor(face / 2) === Math.floor(lastFace / 2));
        const cw = Math.random() < 0.5;
        await rotate(face, cw);
        lastFace = face;
    }
    const button_scramble = document.getElementById("button_scramble");
    button_scramble.blur();
}
