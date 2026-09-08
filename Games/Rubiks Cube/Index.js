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

    const k =
        .3 *
        (face % 2 * 2 - 1) *
        (2 * cw - 1);

    const qubes = Array(9)
        .fill(pieces[face])
        .map((value, index) =>
            index
                ? getPieceBy(face, index / 2, index % 2)
                : value
        );

    (function rotatePieces() {

        const passed = Date.now() - currentTime;

        const style =
            `rotate${getAxis(face)}(` +
            `${k * passed * (passed < 300)}deg)`;

        qubes.forEach((piece) => {

            piece.style.transform =
                piece.style.transform.replace(
                    /rotate.\(\S+\)/,
                    style
                );

        });

        if (passed >= 300) {

            swapPieces(face, 3 - 2 * cw);

            if (onDone) {
                onDone();
            }

            return;
        }

        requestAnimationFrame(rotatePieces);

    })();
}

document.addEventListener('pointerdown', e => {
    console.log(
        'POINTERDOWN',
        'type=', e.pointerType,
        'target=', e.target,
        'x=', e.clientX,
        'y=', e.clientY
    );
}, true);

document.addEventListener('pointermove', e => {
    console.log(
        'POINTERMOVE',
        'type=', e.pointerType,
        'target=', e.target
    );
}, true);

document.addEventListener('mousedown', e => {
    console.log('MOUSEDOWN', e.target);
}, true);

document.addEventListener('touchstart', e => {
    console.log('TOUCHSTART', e.target);
}, true);

function pointerDown(e) {
    console.log(
    'POINTER DOWN:',
    e.pointerType,
    e.target
);

    // Nur einen Finger gleichzeitig zulassen
    if (e.pointerType === 'touch' && e.isPrimary === false) {
        return;
    }

    e.preventDefault();

    const startX = e.clientX;
    const startY = e.clientY;

    const startXY =
        pivot.style.transform
            .match(/-?\d+\.?\d*/g)
            .map(Number);

    const element =
        e.target.closest('.element');

    const face = element
        ? [].indexOf.call(
            element.parentNode.children,
            element
        )
        : -1;

    let finished = false;

    /*
     * Pointer Capture ist hier sehr hilfreich:
     * Der Finger darf das ursprüngliche Element verlassen,
     * die Szene bekommt trotzdem weiterhin pointermove.
     */
    if (scene.setPointerCapture) {
        try {
            scene.setPointerCapture(e.pointerId);
        } catch {}
    }

    /*
     * GUIDE anzeigen.
     */
    (element || document.body).appendChild(guide);


    function pointerMove(ev) {
        console.log(
    'POINTER MOVE:',
    e.clientX,
    e.clientY
);

        if (finished) {
            return;
        }

        if (ev.pointerId !== e.pointerId) {
            return;
        }

        ev.preventDefault();


        /*
         * ==========================================
         * EINZELNE WÜRFELSEITE
         * ==========================================
         */
        if (element) {

            const target =
                document.elementFromPoint(
                    ev.clientX,
                    ev.clientY
                );

            if (!target) {
                return;
            }

            /*
             * Wir suchen das Anchor-Element.
             *
             * Wichtig:
             * elementFromPoint() kann z.B. einen
             * Sticker oder ein anderes Child liefern.
             * Deshalb closest('.anchor').
             */
            const anchor =
                target.closest('.anchor');

            if (!anchor) {
                return;
            }


            /*
             * ID des Anchors.
             *
             * Dein ursprünglicher Code erwartet
             * eine Zahl in der ID.
             */
            const gid =
                /\d/.exec(anchor.id);

            if (!gid) {
                return;
            }


            /*
             * Bewegung wurde erkannt.
             */
            finished = true;

            const anchorIndex =
                Number(gid[0]);


            const neighbour =
                element.parentNode.children[
                    mx(
                        face,
                        anchorIndex + 3
                    )
                ];


            const hasSticker =
                neighbour.hasChildNodes();


            const rotationFace =
                mx(
                    face,
                    anchorIndex +
                    1 +
                    2 * hasSticker
                );


            /*
             * Pointer-Events beenden
             */
            cleanup();


            /*
             * Layer drehen
             */
            animateRotation(
                rotationFace,
                hasSticker,
                Date.now()
            );

        }


        /*
         * ==========================================
         * GESAMTEN CUBE DREHEN
         * ==========================================
         */
        else {

            const dx =
                ev.clientX - startX;

            const dy =
                ev.clientY - startY;


            const rotateX =
                startXY[0] - dy / 2;

            const rotateY =
                startXY[1] + dx / 2;


            pivot.style.transform =
                `rotateX(${rotateX}deg)` +
                `rotateY(${rotateY}deg)`;
        }
    }


    function pointerUp(ev) {

        if (
            ev &&
            ev.pointerId !== e.pointerId
        ) {
            return;
        }

        cleanup();
    }


    function cleanup() {

        if (finished) {
            document.body.appendChild(guide);
        }

        scene.removeEventListener(
            'pointermove',
            pointerMove
        );

        scene.removeEventListener(
            'pointerup',
            pointerUp
        );

        scene.removeEventListener(
            'pointercancel',
            pointerUp
        );

        if (scene.releasePointerCapture) {

            try {
                scene.releasePointerCapture(
                    e.pointerId
                );
            } catch {}
        }

        scene.addEventListener(
            'pointerdown',
            pointerDown
        );
    }


    scene.addEventListener(
        'pointermove',
        pointerMove
    );

    scene.addEventListener(
        'pointerup',
        pointerUp
    );

    scene.addEventListener(
        'pointercancel',
        pointerUp
    );

    scene.removeEventListener(
        'pointerdown',
        pointerDown
    );
}
document.ondragstart = () => false
window.addEventListener('load', assembleCube);
//scene.addEventListener('mousedown', mouseDown);
scene.addEventListener('pointerdown', pointerDown);

async function scrambleCube(numberOfMoves = 25) {

    let lastFace = -1;

    for (let i = 0; i < numberOfMoves; i++) {

        let face;

        do {
            face =
                Math.floor(Math.random() * 6);

        } while (
            face === lastFace ||
            Math.floor(face / 2) ===
            Math.floor(lastFace / 2)
        );

        const cw =
            Math.random() < 0.5;

        await rotate(face, cw);

        lastFace = face;
    }
}

/*
async function scrambleCube(numberOfMoves = 25) {
    let lastFace = -1;
    for (let i = 0; i < numberOfMoves; i++) {
        let face;
        do {face = Math.floor(Math.random() * 6);}
        while (face === lastFace || Math.floor(face / 2) === Math.floor(lastFace / 2));
        const cw = Math.random() < 0.5;
        //await rotate(face, cw);
        rotate(face, cw);
        lastFace = face;
    }
}
    */