var TETRIS = new function() {

    function random_det(seed) {return function() {seed = ((seed + 0x7ed55d16) + (seed << 12)) & 0xffffffff;seed = ((seed ^ 0xc761c23c) ^ (seed >>> 19)) & 0xffffffff;seed = ((seed + 0x165667b1) + (seed << 5)) & 0xffffffff;seed = ((seed + 0xd3a2646c) ^ (seed << 9)) & 0xffffffff;seed = ((seed + 0xfd7046c5) + (seed << 3)) & 0xffffffff;seed = ((seed ^ 0xb55a4f09) ^ (seed >>> 16)) & 0xffffffff;return (seed >>> 0);};}
    function random_det_7(seed) {var gen = random_det(seed);return function() {return gen() % tetrominos.length;};}
    function random_perm_7(seed) {var gen = random_det(seed);var arr = [0, 1, 2, 3, 4, 5, 6];return function() {var i;for (i = 6; i > 0; i--) {var j = gen() % (i + 1);var tmp = arr[j];arr[j] = arr[i];arr[i] = tmp;} return arr;};}
    function random_perm_single(seed) {var gen = random_perm_7(seed);var curPerm = gen();var which = -1;return function() {which += 1;if (which >= 7) {curPerm = gen();which = 0;} return curPerm[which];};}

    var board = [];
    var i = 0;
    for (i = 0; i < 240; i++) {board[i] = 0;}
    var xoff = 8;
    var yoff = 8;
    var xsize = 15;
    var ysize = 15;
    var gapsize = 2;
    var bordersize = 2;
    // white, red, green, blue, purple, yellow, orange, cyan
    // None,  Z,   S,     J,    T,      O,      L,      I

    function getColors(mode) {
        switch (mode) {
            case "winter":
                return ["#999", "#fff", "#fff", "#fff", "#fff", "#fff", "#fff", "#fff", "#000"];
            case "normal":
            default:
                return ["#999", "#F00", "#0F0","#22F", "#F0F", "#FF0","#F70", "#0EE", "#000"];
        }
    }
    var colors = getColors("normal");

    function drawBox(position, value, context) {var i = position % 10;var j = (position - i) / 10;drawBox2(i, j, value, context);}
    function drawBox2(posX, posY, value, context) {context.fillStyle = colors[value];context.fillRect(xoff + posX * (xsize + gapsize), yoff + posY * (ysize + gapsize), xsize, ysize);}
    function drawSingleBlock(x, y, context) {context.fillRect(x, y, xsize, ysize);}
    function drawBoard(boardArr, context) {var i;context.fillStyle = "#000";context.fillRect(0, 0, xoff * 2 + xsize * 10 + gapsize * 9, yoff * 2 + ysize * 24 + gapsize * 23);context.clearRect(xoff - bordersize, yoff - bordersize, (xsize + gapsize) * 10 - gapsize + bordersize * 2, (ysize + gapsize) * 24 - gapsize + bordersize * 2);context.strokeRect(xoff - .5, yoff - .5, (xsize + gapsize) * 10 - gapsize + 1, (ysize + gapsize) * 24 - gapsize + 1);context.fillStyle = "#888";context.fillRect(xoff, yoff, (xsize + gapsize) * 10 - gapsize, (ysize + gapsize) * 24 - gapsize);for (i = 0; i < 240; i++) {drawBox(i, board[i], context);}}
    var positionFromLeft = 0;
    function updateSizing() {console.log('update');xsize = ysize = Math.floor((window.innerHeight - 25 - yoff * 2 - 24 * gapsize) / 24.0);var bc = document.getElementById('board_canvas');var ac = document.getElementById('animated_canvas');var sc = document.getElementById('shadow_canvas');var score_el = document.getElementById('score').parentNode;bc.width = ac.width = sc.width = (xoff * 2 + xsize * 10 + gapsize * 9);bc.height = ac.height = sc.height = (yoff * 2 + ysize * 24 + gapsize * 23);document.getElementById('instructions').style.marginLeft = (bc.width) + "px";document.getElementById('instr').ontouchmove = function(e) {e.stopPropagation();};positionFromLeft = Math.floor((window.innerWidth - (xoff * 2 + xsize * 10 + gapsize * 9) - 20) / 2.0);bc.style.left = ac.style.left = sc.style.left = positionFromLeft + "px";score_el.style.left = positionFromLeft + bc.width + 10 + "px";document.getElementById('instructions').style.top = score_el.clientHeight + "px";var ctx1 = document.getElementById('board_canvas').getContext('2d');drawBoard(board, ctx1);updatePiece();updateShadow();if (paused) drawPaused();}

    var drop_speed = 500;
    var faktor = 10000;

    var soundtrack = {};var muted = "true" === localStorage["muted"];

    function loadTrack(name, src) {if (soundtrack[name] === undefined) {soundtrack[name] = new Audio(src);} else {soundtrack[name].src = src;}}

    function loadSoundtrack(name) {
        loadTrack("mainMusic", "sound/" + name + "/main_music.mp3");
        soundtrack.mainMusic.loop = true;
        loadTrack("tetris", "sound/" + name + "/tetris.mp3");
        loadTrack("endTune", "sound/" + name + "/end_tune.mp3");
        loadTrack("endMusic", "sound/" + name + "/end_music.mp3");
    }
    function mute() {soundtrack.mainMusic.pause();soundtrack.tetris.pause();soundtrack.endTune.pause();soundtrack.endMusic.pause();}

    var tetrisCount = 0;
    function clearRowCheck(startrow, numrowsdown) {var i;var numRowsCleared = 0;for (i = 0; i < numrowsdown; i++) {var j;var full = true;for (j = 0; j < 10; j++) {if (!board[(startrow + i) * 10 + j]) full = false;} if (full) {numRowsCleared++;shiftDown(startrow + i);var ctx1 = document.getElementById('board_canvas').getContext('2d');drawBoard(board, ctx1);}} if (numRowsCleared == 1) { applyScore(100); } else if (numRowsCleared == 2) { applyScore(200); } else if (numRowsCleared == 3) { applyScore(400); } else if (numRowsCleared == 4) {applyScore(1000);tetrisCount = tetrisCount + 1;document.getElementById('tetrisCount').innerHTML = tetrisCount;if (!muted) {}} clearInterval(autoMoveDownInterval);autoMoveDownInterval = setInterval(moveDownIntervalFunc, drop_speed);}
    function shiftDown(row) {var i;for (i = row * 10 - 1; i >= 0; i--) {board[i + 10] = board[i];} for (i = 0; i < 10; i++) {board[i] = 0;}}

    var autoMoveDownInterval = "";
    var animationUpdateInterval = "";
    var mouseControlInterval = "";
    var prev = [];
    var pocetTickuNaLock = 5;

    function resetPrev() {for (var i = 0; i < 10; i++);prev[i] = i * 10 + 50;}
    function moveDownIntervalFunc() {
        for (var i = 0; i < 8; i++) {prev[i] = prev[i + 1];}
        prev[pocetTickuNaLock] = pieceY;
        var stejny = 0;
        for (var i = 0; i < pocetTickuNaLock; i++) {if (prev[i] === prev[i + 1]) {stejny++;}}
        if (stejny >= pocetTickuNaLock) {console.log('forced drop', prev, stejny, pocetTickuNaLock);moves[6]();resetPrev();}
        else {moves[7]();updatePiece();}
    }

    function animationUpdateIntervalFunc() {animPositionX += (pieceX - animPositionX) * .3;animPositionY += (pieceY - animPositionY) * .3;animRotation -= animRotation * 0.3;updatePiece();}
    function mouseControlFunc() {}
    var isMouseControl = false;
    var mouseControlX = 0;
    function toggleMouseControl() {if (isMouseControl) {mouseControlFunc = function() {};document.oncontextmenu = null;} else {mouseControlFunc = function() {mouseControlX = (posx / window.innerWidth) * 11.5 - 2.5;if (pieceX > mouseControlX + .5) moves[0]();if (pieceX < mouseControlX - .5) moves[2]();};document.oncontextmenu = function() {return false;};} isMouseControl = !isMouseControl;}
    var paused = false;
    function isPaused() {return paused;}

    // Speed Setting:

    //var intervalID = setInterval(function() {if (!isPaused()) {drop_speed *= 0.999;}}, 200);
    var intervalID = setInterval(function() {if (!isPaused()) {drop_speed = 500;}}, 200);

    function drawSpeed() {var ctx = document.getElementById("animated_canvas").getContext('2d');var offset = xoff + (xsize + gapsize);var size = (xsize + gapsize * .9) * 2.05;ctx.strokeStyle = "#FFF";var sdrop_speed = (Math.round(drop_speed * 100) / 100).toString();ctx.strokeText(sdrop_speed, offset, 20, size / 2, 150);ctx.strokeStyle = "#000";ctx.strokeText(sdrop_speed, offset, 20, size / 2, 80);}
    function drawPaused() {var ctx = document.getElementById("animated_canvas").getContext('2d');var offset = xoff;var size = (xsize + gapsize * .9) * 2.05;var yoffset = yoff + (xsize + gapsize) * 10;ctx.strokeStyle = "#FFF";ctx.strokeText("PAUSED", offset, yoffset, size, 160);ctx.strokeStyle = "#000";ctx.strokeText("PAUSED", offset, yoffset, size, 100);}
    var setPause = function(isendgame) {if (paused) return;clearInterval(autoMoveDownInterval);autoMoveDownInterval = "";clearInterval(animationUpdateInterval);animationUpdateInterval = "";clearInterval(mouseControlInterval);mouseControlInterval = "";if (!isendgame) {drawPaused();drawSpeed();} paused = true;pausedBecauseLostFocus = false;}
    function unPause() {if (!paused) return;if (autoMoveDownInterval == "") {autoMoveDownInterval = setInterval(moveDownIntervalFunc, drop_speed);} if (animationUpdateInterval == "") {animationUpdateInterval = setInterval(animationUpdateIntervalFunc, 16);} if (mouseControlInterval == "") {mouseControlInterval = setInterval(mouseControlFunc, 100);} paused = false;pausedBecauseLostFocus = false;}
    var control_accum = [-1, -1];
    var xMoveThreshold = 30;
    var yMoveThreshold = 30;
    var hardDropYDistanceThreshold = 35;
    var hardDropGestureTime = 300;
    var hardDropYAccAtPreviousTimes = [];

    function hardDropTest(x, y) {if (hardDropYAccAtPreviousTimes.length > 2) {var now = new Date().getTime();if (now - lastFixTime > hardDropGestureTime) {for (var i = hardDropYAccAtPreviousTimes.length - 1; i >= 0; --i) {if ((now - hardDropYAccAtPreviousTimes[i][1]) < hardDropGestureTime) {if ((y - hardDropYAccAtPreviousTimes[i][0]) > hardDropYDistanceThreshold) {moves[6]();return;}}}}} hardDropYAccAtPreviousTimes = [];}
    function Control(newpos) {if (paused) return;var cl = control_location;var delta = [newpos[0] - cl[0], newpos[1] - cl[1]];control_accum = [control_accum[0] + delta[0], control_accum[1] + delta[1]];var thresh_sq = 50;if (touchlist.length == 1 && control_accum[0] * control_accum[0] + control_accum[1] * control_accum[1] > thresh_sq) {lastTouchStartTime = 0;} while (control_accum[0] > xMoveThreshold) {control_accum[0] -= xMoveThreshold;moves[2]();hardDropYAccAtPreviousTimes = [];} while (control_accum[0] < -xMoveThreshold) {control_accum[0] += xMoveThreshold;moves[0]();hardDropYAccAtPreviousTimes = [];} while (control_accum[1] > yMoveThreshold) {control_accum[1] -= yMoveThreshold;moves[3]();} hardDropYAccAtPreviousTimes.push([newpos[1], new Date().getTime()]);control_location[0] = newpos[0];control_location[1] = newpos[1];}
    var actually_draw_touches = false;

    function drawTouches() {if (!actually_draw_touches) return;var indicator_container = document.getElementById('indicatorcontainer');for (var i = 0; i < indicator_container.childNodes.length; i++) {var found = false;for (var j = 0; j < touchlist.length; ++j) {if (touchlist[j].identifier == indicator_container.childNodes[i].innerHTML.replace(/^(.*)@.*$/, '$1')) {found = true;}} if (!found) {indicator_container.removeChild(indicator_container.childNodes[i]);i--;}} for (var i = 0; i < touchlist.length; ++i) {var found = false;for (var j = 0; j < indicator_container.childNodes.length; j++) {var thisf = indicator_container.childNodes[j];if (thisf.innerHTML.replace(/^(.*)@.*$/, '$1') == touchlist[i].identifier) {thisf.style.webkitTransform = 'translate(' + touchlist[i].clientX + 'px, ' + touchlist[i].clientY + 'px)';thisf.innerHTML = touchlist[i].identifier + "@ " + touchlist[i].clientX + ", " + touchlist[i].clientY;found = true;if (touchlist[i].identifier == control_finger_id) {thisf.setAttribute('class', 'finger-indicator control');}}} if (!found) {var new_indicator = document.createElement('span');new_indicator.innerHTML = touchlist[i].identifier + "@ " + touchlist[i].clientX + ", " + touchlist[i].clientY;new_indicator.style.webkitTransform = 'translate(' + touchlist[i].clientX + 'px, ' + touchlist[i].clientY + 'px)';new_indicator.setAttribute('class', 'finger-indicator');if (touchlist[i].identifier == control_finger_id) {new_indicator.setAttribute('class', 'finger-indicator control');} indicator_container.appendChild(new_indicator);}}}
    function initParamControls() {document.getElementById('repeatRateInitial').addEventListener('keyup', function(e) {var value = parseInt(this.value, 10);if (Number.isInteger(value) && value >= 0) {repeatRateInitial = value;} if (e.keyCode === 13) {this.blur()}});document.getElementById('repeatRate').addEventListener('keyup', function(e) {var value = parseInt(this.value, 10);if (Number.isInteger(value) && value >= 0) {repeatRate = value;} if (e.keyCode === 13) {this.blur()}});document.getElementById('mute').checked = localStorage["muted"] === "true" ? true : false;document.getElementById('mute').addEventListener('change', function(e) {muted = this.checked;localStorage["muted"] = this.checked;if (muted) {mute();} else {if (finish) {} else {}} this.blur();});var radios = document.querySelectorAll('input[type=radio][name="soundtrack"]');Array.prototype.forEach.call(radios, function(radio) {if (localStorage["soundtrack"] !== undefined) {if (radio.value == localStorage["soundtrack"]) {radio.checked = true;}} radio.addEventListener('change', function(event) {switch (this.value) {case "ventolin": loadSoundtrack(this.value);localStorage["soundtrack"] = this.value;break;case "lagoon": default: loadSoundtrack("lagoon");localStorage["soundtrack"] = "lagoon";break;} this.blur();if (!muted) {if (finish) {} else {}}});});}
    function win_onload() {Tetris.Startup.main();if (localStorage["soundtrack"] === undefined) {loadSoundtrack("lagoon");} else {loadSoundtrack(localStorage["soundtrack"]);} getScore();next();applyScore(0);setPause(false);unPause();var animCtx = document.getElementById('animated_canvas').getContext('2d');set_textRenderContext(animCtx);if (check_textRenderContext(animCtx)) {} else {} initParamControls();updateSizing();}
    window.onload = function() {win_onload();};

    var tetromino_Z = [[[1, 1],[0, 1, 1]],[[0, 0, 1],[0, 1, 1],[0, 1]],[[],[1, 1],[0, 1, 1]],[[0, 1],[1, 1],[1]]];
    var tetromino_S = [[[0, 2, 2],[2, 2]],[[0, 2],[0, 2, 2],[0, 0, 2]],[[],[0, 2, 2],[2, 2]],[[2],[2, 2],[0, 2]]];
    var tetromino_J = [[[3],[3, 3, 3]],[[0, 3, 3],[0, 3],[0, 3]],[[],[3, 3, 3],[0, 0, 3]],[[0, 3],[0, 3],[3, 3]]];
    var tetromino_T = [[[0, 4],[4, 4, 4]],[[0, 4],[0, 4, 4],[0, 4]],[[],[4, 4, 4],[0, 4]],[[0, 4],[4, 4],[0, 4]]];
    var tetromino_O = [[[5, 5],[5, 5]]];
    var tetromino_L = [[[0, 0, 6],[6, 6, 6]],[[0, 6],[0, 6],[0, 6, 6]],[[],[6, 6, 6],[6]],[[6, 6],[0, 6],[0, 6]]];
    var tetromino_I = [[[],[7, 7, 7, 7]],[[0, 0, 7],[0, 0, 7],[0, 0, 7],[0, 0, 7]],[[],[],[7, 7, 7, 7]],[[0, 7],[0, 7],[0, 7],[0, 7]]];
    var tetromino_X = [[[8, 8, 0, 0],[0, 8, 8, 0],[0, 0, 8, 8]],[[0, 0, 8],[0, 8, 8],[8, 8, 0],[8, 0, 0]]];
    var tetrominos = [tetromino_Z, tetromino_S, tetromino_J, tetromino_T, tetromino_O, tetromino_L, tetromino_I];
    var tet_center_rot = [[1, 1, true],[1, 1, true],[1, 1, true],[1, 1, true],[0, 0, false],[1, 1, true],[1, 1, false],[0, 0, false]];
    var pieceX = 3;
    var pieceY = 0;
    var curPiece = 0;
    var curRotation = 0;

    function drawMessage(messageString, size) {var ctx = document.getElementById("animated_canvas").getContext('2d');var offset = xoff;var size = (xsize + gapsize * .9) * size;var yoffset = yoff + (xsize + gapsize) * 10;ctx.strokeStyle = "#FFF";ctx.strokeText(messageString, offset, yoffset, size, 160);ctx.strokeStyle = "#000";ctx.strokeText(messageString, offset, yoffset, size, 100);}
    function clearContext(ctx, width, height) {ctx.save();ctx.setTransform(1, 0, 0, 1, 0, 0);ctx.clearRect(0, 0, width, height);ctx.restore();}

    var highScore;
    var maxScoreListLength = 5;
    function displayScoreByMode(mode) {var scoreDiv = document.getElementById(mode);var html = "";if (highScore && mode in highScore) {highScore[mode].forEach(function(scoreItem) {html += "<div><strong>" + scoreItem.name + "</score> " + scoreItem.score;if (scoreItem.tetris !== undefined) {html += " (" + scoreItem.tetris + ")";} html += "</div>";});} scoreDiv.innerHTML = html;}
    function displayScore() {displayScoreByMode("alltime");displayScoreByMode("today");}
    function getScore() {}
    function checkScoreByMode(mode) {var beat = false;if (highScore && mode in highScore) {if (highScore[mode].length < maxScoreListLength) {beat = true;} else {highScore[mode].forEach(function(item) {if (score > item.score) {beat = true;}});}} return beat;}
    function sendScore() {}
    function gameWin() {var sc = document.getElementById('shadow_canvas');clearContext(sc.getContext('2d'), sc.width, sc.height);var ac = document.getElementById('animated_canvas');clearContext(ac.getContext('2d'), ac.width, ac.height);drawMessage("You Win!", 1.45);setPause(true);}
    function gameOver() {drawMessage("Game Over", 1.45);setPause(true);}

    function displayNextPiece() {

        var tetk = tetrominos[nextPiece][0];
        var view = "";

        for (j = 0; j < tetk.length; j++) {
            var tetkj = tetk[j];
            for (i = 0; i < tetkj.length; i++) {
                var tetkji = tetkj[i];
                if (tetkji) {
                    view += "&#x25a0;"
                } else {
                    view += "&nbsp;";
                }
            }
            view += "<br>";
        }
        var nextDiv = document.getElementById("next");
        nextDiv.innerHTML = view;
        nextDiv.style.color = colors[nextPiece + 1];
    }

    var objPos = { x: 0, y: 0 };
    var lockTimer = "";
    var nextPiece;
    var generator = random_perm_single(Math.floor((new Date()).getTime() / 1000));
    //var generator = random_perm_single(1);
    var finish = false;

    function next() {

        if (finish) {
            return;
        }
        pieceX = 3;
        pieceY = 0;
        animPositionX = pieceX;
        animPositionY = pieceY;
        curRotation = 0 //Math.random() >0.5 ? 0:1 ;
        if (nextPiece === undefined) {
            nextPiece = generator();
        }
        curPiece = nextPiece;
        nextPiece = generator();
        displayNextPiece();;

        if (kick()) {
            gameOver();

            soundtrack.mainMusic.pause();
            sendScore();

            if (!muted) {
                soundtrack.endTune.play();
                soundtrack.endTune.onended = function() {
                    soundtrack.endMusic.play();
                };
            }
            finish = true;
        }
        updateShadow();
    }


    var lastFixTime = 0;

    function fixPiece() {
        lastFixTime = new Date().getTime();
        var i, j;
        var tetk = tetrominos[curPiece][curRotation];
        for (j = 0; j < tetk.length; j++) {
            var tetkj = tetk[j];
            for (i = 0; i < tetkj.length; i++) {
                var tetkji = tetkj[i];
                var pxi = pieceX + i;
                var pyj = pieceY + j;
                if (tetkji) {
                    board[pyj * 10 + pxi] = tetkji;
                }
            }
        }
        drawBoard(board, document.getElementById('board_canvas').getContext('2d'));
        // will hardcode this behavior for now
        clearRowCheck(pieceY, tetrominos[curPiece][curRotation].length);
        next();
    }

    function isPieceInside() {
        var i, j;
        var tetk = tetrominos[curPiece][curRotation];
        for (j = 0; j < tetk.length; j++) {
            var tetkj = tetk[j];
            for (i = 0; i < tetkj.length; i++) {
                var tetkji = tetkj[i];
                var pxi = pieceX + i;
                var pyj = pieceY + j;
                if (tetkji && (pxi < 0 || pyj < 0 || pxi > 9 || pyj > 23)) {
                    //document.getElementById('msg').innerHTML += "<br>pxi,pyj="+pxi+","+pyj+"i,j="+i+","+j+"tetkji="+tetkji;
                    return 1;
                }
                if (tetkji && board[pyj * 10 + pxi]) {
                    return 2;
                }
            }
        }
        return 0;
    }
    moves = [
        // left
        function() {
            if (freezeInteraction) return;
            pieceX -= 1;
            if (isPieceInside()) pieceX += 1;
            shiftright = 0;
            updateShadow();
            clearLockTimer();
        },
        // up direction movement is a cheat in standard tetris
        function() {
            if (freezeInteraction) return;
            pieceY -= 1;
            if (isPieceInside()) pieceY += 1;
            clearLockTimer();
        },
        // right
        function() {
            if (freezeInteraction) return;
            pieceX += 1;
            if (isPieceInside()) pieceX -= 1;
            shiftright = 1;
            updateShadow();
            clearLockTimer();
        },
        // down key calls this -- moves stuff down, if at bottom, locks it
        function() {
            if (freezeInteraction) return;
            pieceY += 1;
            if (isPieceInside()) {
                pieceY -= 1;
                fixPiece();
            }
            clearLockTimer();
        },
        // rotate clockwise
        function() {
            if (freezeInteraction) return;
            var oldrot = curRotation;
            curRotation = (curRotation + 1) % (tetrominos[curPiece].length);
            if (kick()) curRotation = oldrot;
            else animRotation = -Math.PI / 2.0;
            updateShadow();
            clearLockTimer();
        },
        // rotate ccw
        function() {
            if (freezeInteraction) return;
            var oldrot = curRotation;
            var len = tetrominos[curPiece].length;
            curRotation = (curRotation - 1 + len) % len;
            if (kick()) curRotation = oldrot;
            else animRotation = Math.PI / 2.0;
            updateShadow();
            clearLockTimer();
        },
        // hard drop
        function() {
            if (freezeInteraction) return;
            var curY;
            var traversed = 0;
            while (!isPieceInside()) {
                curY = pieceY;
                pieceY++;
                traversed++;
            }
            pieceY = curY;
            console.log('hard drop')
            dropPiece();
            applyScore(traversed * 3);
            clearLockTimer();
        },
        // timer based down
        function() {
            if (freezeInteraction) return;
            pieceY += 1;
            if (isPieceInside()) {
                pieceY -= 1;
                if (lockTimer == "") {
                    lockTimer = setTimeout(function() { moves[3](); }, 200);
                }
            }
        },
        // hold feature
        function() {
            //alert("hold unimplemented.");
        },
        function() {
            toggleMouseControl();
        },
        function() {
            drawIndicators = !drawIndicators;
        }
    ];

    function clearLockTimer() {
        if (lockTimer != "") {
            clearTimeout(lockTimer);
            lockTimer = "";
        }
    }

    var freezeInteraction = false;
    var hardDropTimeout = "";
    // sets up hard drop animation
    function dropPiece() {
        if (hardDropTimeout != "") return;
        freezeInteraction = true;
        hardDropTimeout = setTimeout(function() {
            freezeInteraction = false;
            fixPiece();
            clearLockTimer();
            hardDropTimeout = "";
        }, 20);
    }

    // left, right
    var shiftorders = [
        [0, 0], // initial
        [-1, 0],
        [-1, 1],
        [-1, -1],
        [0, -1], // col 1 block left; directly above
        [-1, 2],
        [-1, -2], // col 1 block left, two away vertically
        [-2, 0],
        [-2, 1],
        [-2, -1],
        [-2, 2],
        [-2, -2], // col 2 blocks left
        [0, -2], // directly above, two spaces

        //	[0,2], // directly below, two spaces (can cause tunnelling perhaps? one space below certainly is not needed)
        //	[-3,0],[-3,1],[-3,-1],[-3,2],[-3,-2], // col 3 blocks left -- this may be getting cheap
        [1, 0],
        [1, 1],
        [1, -1],
        [2, 0],
        [2, 1],
        [2, -1],
        [1, 2],
        [1, -2] // move left for wall kicking
    ];
    var shiftright = 0; // 0 = left, 1 = right


    // rotation nudge. Attempts to shift piece into a space that fits nearby, if necessary.
    // if such a position is found, it will be moved there. 
    function kick() {
        var i;
        // modify this array to change the order in which shifts are tested. To favor burying pieces into gaps below,
        // place negative y offset entries closer to the front. 

        var oldpos = [pieceX, pieceY]; // for simplicity I reuse methods that actually modify piece position.
        for (i = 0; i < shiftorders.length; i++) {
            pieceX = oldpos[0];
            pieceY = oldpos[1]; // restore position
            if (shiftright) pieceX -= shiftorders[i][0];
            else pieceX += shiftorders[i][0];
            pieceY += shiftorders[i][1];
            if (!isPieceInside())
                return 0;
        }
        pieceX = oldpos[0];
        pieceY = oldpos[1]; // restore position
        return 1; // return failure
    }

    function updatePiece() {
        var ctx = document.getElementById('animated_canvas').getContext('2d');
        drawPiece(ctx);
    }

    // Does not need to be called every frame like updatePiece is.
    // will be called from left and right moves, also 
    function updateShadow() {
        var ctx = document.getElementById('shadow_canvas').getContext('2d');
        drawShadow(ctx);
    }

    var repeatRateInitial = 100;
    var repeatRate = 40;


    var repeatIntervals = ["", "", "", ""];
    var repeatInitPassed = [false, false, false, false];

    function setupRepeat(i) {

        if (i < 4) {
            if (repeatIntervals[i] == "") {
                repeatIntervals[i] = setTimeout(
                    function() {
                        moves[i]();
                        repeatIntervals[i] = setInterval(moves[i], repeatRate);
                        repeatInitPassed[i] = true;
                    }, repeatRateInitial
                );
            }
        }
    }

    function stopRepeat(i) {
        if (i < 4 && repeatIntervals[i] != "") {
            if (repeatInitPassed[i]) {
                clearInterval(repeatIntervals[i]);
            } else clearTimeout(repeatIntervals[i]);
            repeatIntervals[i] = "";
        }
    }

    var buttonList = [
        [37, 74],
        [],
        [39, 76],
        [40, 75],
        [38, 73, 88, 82],
        [90, 84],
        [68, 32],
        [],
        [67],
        [77],
        [78]
    ];
    var buttonStates = new Array(buttonList.length);
    for (i = 0; i < buttonList.length; ++i) buttonStates[i] = 0;

    //var directionalButtonStates = [0,0,0,0]; // left up right down
    //var rotationButtonStates = [0,0] // cw, ccw
    //var dropButtonState = 0;
    //var holdButtonState = 0; 
    // these variables keep track of button state in order to customize
    // key repeat rates

    function keydownfunc(e) {
        var keynum;
        if (!(e.which)) keynum = e.keyCode;
        else if (e.which) keynum = e.which;
        else return;
        var keychar = String.fromCharCode(keynum);
        //document.title = keynum;

        if (keychar == 'P') {
            if (paused) unPause();
            else { setPause(false); return; }
        }
        if (paused) return;

        var i;
        for (i = 0; i < buttonList.length; i++) {
            var j;
            for (j = 0; j < buttonList[i].length; j++) {
                if (keynum == buttonList[i][j] && !buttonStates[i]) {
                    moves[i]();
                    stopRepeat(i); // this is insurance
                    setupRepeat(i);
                    buttonStates[i] = 1;
                }
            }
        }

        //document.getElementById('msg').innerHTML = "last key pressed: "+ keynum + "inside:"+isPieceInside();
        updatePiece();
    }

    function keyupfunc(e) {
        var keynum;
        if (!(e.which)) keynum = e.keyCode;
        else if (e.which) keynum = e.which;
        else return;
        var keychar = String.fromCharCode(keynum);
        if (paused) return;

        var i;
        for (i = 0; i < buttonList.length; i++) {
            var j;
            for (j = 0; j < buttonList[i].length; j++) {
                if (keynum == buttonList[i][j]) {
                    buttonStates[i] = 0;
                    stopRepeat(i);
                }
            }
        }

    }

    var animPositionX = 3;
    var animPositionY = 0;
    var animRotation = 0;

    /*
    function drawPieceOld(context) {
    	var i,j;
    	var tetk = tetrominos[curPiece][curRotation];
    	for (j=0;j<tetk.length;j++) {
    		var tetkj = tetk[j];
    		for (i=0;i<tetkj.length;i++) {
    			var tetkji = tetkj[i];
    			if (tetkji) {
    			context.save();
    		context.rotate(10.0*3.1415926/180.0);
    				drawBox2(animPositionX+i,animPositionY+j,tetkji,context);
    		context.restore();
    			}
    		}
    	}
    }
    */
    var drawIndicators = false;

    function drawPiece(context) {
        var i, j;
        // drawing using geometry of current rotation 
        var tetk = tetrominos[curPiece][curRotation];
        // translating (canvas origin) to the center, 
        // rotating there, then drawing the boxes
        context.clearRect(0, 0, xoff * 2 + xsize * 10 + gapsize * 9, yoff * 2 + ysize * 24 + gapsize * 23);
        if (isMouseControl && drawIndicators) {
            context.save();
            context.translate(xoff + (xsize + gapsize) * (mouseControlX + 1.5), yoff);

            context.fillStyle = "rgba(0,0,255," + (Math.abs((mouseControlX) - Math.floor(mouseControlX + 0.5)) * 0.2 + 0.2) + ")";
            context.fillRect(-xsize / 4, 0, xsize / 2, ysize * 24 + gapsize * 23);
            context.restore();
        }
        context.save();
        context.fillStyle = colors[curPiece + 1];
        var centerX = tet_center_rot[curPiece][0] * (xsize + gapsize) + xsize / 2 + (!tet_center_rot[curPiece][2]) * (xsize / 2 + gapsize);
        var centerY = tet_center_rot[curPiece][1] * (ysize + gapsize) + ysize / 2 + (!tet_center_rot[curPiece][2]) * (ysize / 2 + gapsize);

        context.translate(xoff + animPositionX * (xsize + gapsize) + centerX, yoff + animPositionY * (ysize + gapsize) + centerY);
        context.rotate(animRotation);
        context.translate(-centerX, -centerY);

        // now in rotated coordinates, zeroed at piece origin
        for (j = 0; j < tetk.length; j++) {
            var tetkj = tetk[j];
            for (i = 0; i < tetkj.length; i++) {
                var tetkji = tetkj[i];
                if (tetkji) {
                    context.fillRect(i * (xsize + gapsize), j * (ysize + gapsize), xsize, ysize);
                }
            }
        }
        context.restore();
        if (isMouseControl && drawIndicators) {
            context.save();
            context.translate(xoff + (animPositionX + 1.5) * (xsize + gapsize), yoff);
            context.fillStyle = "rgba(255,0,0,0.3)";
            context.fillRect(-xsize / 4, 0, xsize / 2, ysize * 24 + gapsize * 23);
            context.restore();
        }

    }

    var shadowY = 0;

    function drawShadow(context) {
        var curY;
        var count = 0;
        var origY = pieceY;
        while (!isPieceInside()) {
            curY = pieceY;
            pieceY++;
            count++;
        } // This is a little bad --
        // I am modifying critical program state
        // when it is not necessary.
        // This is done to increase code reuse
        pieceY = origY;
        shadowY = curY;
        if (!count) return;
        drawShadowPieceAt(context, pieceX, curY);
    }

    function drawShadowPieceAt(context, gridX, gridY) {
        tetk = tetrominos[curPiece][curRotation];
        context.clearRect(0, 0, xoff * 2 + xsize * 10 + gapsize * 9, yoff * 2 + ysize * 24 + gapsize * 23);
        context.save();
        context.fillStyle = "#777";
        context.translate(xoff + gridX * (xsize + gapsize), yoff + gridY * (ysize + gapsize));
        for (j = 0; j < tetk.length; j++) {
            var tetkj = tetk[j];
            for (i = 0; i < tetkj.length; i++) {
                var tetkji = tetkj[i];
                if (tetkji) {
                    context.fillRect(i * (xsize + gapsize), j * (ysize + gapsize), xsize, ysize);
                }
            }
        }
        context.restore();
    }

    var posx = 0;
    var posy = 0;

    function mousemovefunc(e) {
        if (!e) var e = window.event;
        if (e.pageX || e.pageY) {
            posx = e.pageX;
            posy = e.pageY;
        } else if (e.clientX || e.clientY) {
            posx = e.clientX + document.body.scrollLeft +
                document.documentElement.scrollLeft;
            posy = e.clientY + document.body.scrollTop +
                document.documentElement.scrollTop;
        }
        /*if (!e) e = event;
        if (e.pageX || e.pageY) {
        	posx = e.pageX;
        	posy = e.pageY;
        }
        else if (e.clientX || e.clientY) {
        	posx = e.clientX + document.body.scrollLeft
        		+ document.documentElement.scrollLeft;
        posy = e.clientY + document.body.scrollTop
        	+ document.documentElement.scrollTop;
        } */

        //if (!(Math.floor((posx/5-100-(xsize+gapsize)*pieceX)/(xsize+gapsize)) <= 0)) moves[2]();
        //if (Math.floor((posx/5-100-(xsize+gapsize)*pieceX)/(xsize+gapsize))< 0) moves[0]();
        //updatePiece();
        if (!paused)
            mouseControlFunc();
    }

    var pausedBecauseLostFocus = false;

    function losefocusfunc() {
        if (paused) return;
        setPause(false);
        pausedBecauseLostFocus = true;
    }

    function gainfocusfunc() {
        if (paused && pausedBecauseLostFocus) {
            unPause();
        }
    }

    function mousedownfunc(e) {
        if (isMouseControl) {
            if (e.which == 1) {
                moves[4]();
            } else if (e.which == 3) {
                console.log('drop mouse down')
                moves[6]();
            }
        }
    }
    var score = 1000;
    var isScoreIncreasing = false;

    var scoreCallback = function(val) {}; // I get called when score changes. 

    function applyScore(amount) {
        amount = amount * 1000;
        if (isScoreIncreasing) {
            increaseScore(amount);
        } else {
            subtractScore(amount);
        }
        scoreCallback(score);

    }

    function increaseScore(amount) {
        score += amount;
        document.getElementById('score').innerHTML = score;

    }

    function subtractScore(amount) {
        score -= amount;
        if (score <= 0) { // reached zero 
            gameWin();
            score = 0;
        }
        document.getElementById('score').innerHTML = score;
    }

    document.onkeydown = function(e) { keydownfunc(e); };
    document.onkeyup = function(e) { keyupfunc(e); };
    document.onmousemove = function(e) { mousemovefunc(e); };
    window.onblur = function() { losefocusfunc(); };
    window.onfocus = function() { gainfocusfunc(); };
    document.onmousedown = function(e) { mousedownfunc(e); };

    // for iOS preventing default scroll
    document.ontouchmove = function(e) { doc_otm(e); };

    function doc_otm(e) {

        drawTouches(); // presumably some fingers need to be updated
        if (control_finger_id != -1) { // control finger active
            for (var i = 0; i < e.changedTouches.length; ++i) { // search moved fingers for control finger
                if (e.changedTouches[i].identifier == control_finger_id) { // found it
                    // verify a past position exists (it should) 
                    if (control_location[0] < 0 || control_location[1] < 0) {
                        alert("control_location not set!");
                    }
                    Control([e.changedTouches[i].clientX, e.changedTouches[i].clientY]);
                }
            }
        }
        e.preventDefault();

    };

    var touchlist = [];

    var lastTouchID = -1; // used for tracking potential taps 
    var lastTouchStartTime = 0;

    document.ontouchstart = function(e) { doc_ots(e); };

    function doc_ots(e) {
        touchlist = (e.touches);
        //	for (var i =0;i<touchlist.length;++i) { 
        //		console.log(i+": "+touchlist[i].identifier+" at "+touchlist[i].clientX+","+touchlist[i].clientY);
        //	}

        if (e.touches.length == 1) { // set this finger as control
            control_finger_id = e.touches[0].identifier;
            // initialize control_location 
            control_location = [e.touches[0].clientX, e.touches[0].clientY];
            // initialize control_accum
            control_accum = [0, 0];
        }

        if (e.changedTouches.length == 1) {
            lastTouchID = e.changedTouches[0].identifier;
            lastTouchStartTime = new Date().getTime();
        }

        drawTouches();

    };

    var control_finger_id = -1;
    var control_location = [-1, -1]; // last location: -1 indicates undefined

    document.ontouchend = function(e) { doc_ote(e); };

    function doc_ote(e) {
        touchlist = e.touches;
        for (var i = 0; i < e.changedTouches.length; i++) {
            if (e.changedTouches[i].identifier == control_finger_id) {
                // Easy way out: defer control to first of remaining fingers
                if (e.touches.length > 0) {
                    control_finger_id = e.touches[0].identifier;
                    control_location = [e.touches[0].clientX, e.touches[0].clientY];
                } else {
                    control_finger_id = -1;
                    control_location = control_accum = [-1, -1];
                }
                //break;
                //entry point for hard drop 
                hardDropTest(e.changedTouches[i].clientX, e.changedTouches[i].clientY);
            }
            if (!paused && e.changedTouches[i].identifier == lastTouchID && new Date().getTime() - lastTouchStartTime < 300) {
                moves[4]();
            }
        }
        drawTouches();
    };


    // document.ontouchend  document.ontouch

    function flatten(obj, levels) {
        if (levels == 0) return '';
        var empty = true;
        if (obj instanceof Array) {
            str = '[';
            empty = true;
            for (var i = 0; i < obj.length; i++) {
                empty = false;
                str += flatten(obj[i], levels - 1) + ', ';
            }
            return (empty ? str : str.slice(0, -2)) + ']';
        } else if (obj instanceof Object) {
            str = '{';
            empty = true;
            for (i in obj) {
                empty = false;
                str += i + '->' + flatten(obj[i], levels - 1) + ', ';
            }
            return (empty ? str : str.slice(0, -2)) + '}';
        } else {
            return obj; // not an obj, don't stringify me
        }
    }

    window.onselectstart = function(e) { return false; }
        // no IE
    window.onresize = function() { win_onresize(); };

    function win_onresize() {
        updateSizing();
    };


    // HERE IS THE API

    this.isPaused = function() { return isPaused(); };

    this.reset = function() { console.log(this); };

    this.setPause = function() { setPause(false); };
    this.unPause = function() { unPause(); };
    this.setTouchSensitivity = function(value) {
            yMoveThreshold = xMoveThreshold = 30.0 / value;
        }
        // returns touch_draw setting
    this.toggle_touch_draw = function() { actually_draw_touches = !actually_draw_touches; return actually_draw_touches; };
    this.setScoreIncreasing = function() {
        isScoreIncreasing = true;
        score = 0;
    };
    this.scoreChangeCallback = function(cb) { scoreCallback = cb; };

}; // end TETRIS namespace (this module system is some weirdness I don't yet fully understand but it works and that's all that matters)