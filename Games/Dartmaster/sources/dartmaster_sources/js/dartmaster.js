var resources = {de : {middle_p1win : "Spieler 1 Gewinnt",middle_p2win : "Spieler 2 Gewinnt",draw_msg : "Unentschieden",previous_leg_confirm: "Zurück Zum Vorherigen Leg?",game_shot_msg_prefix : "Leg Gewonnen ",game_shot_msg_suffix : " Dart",game_shot_msg_darts : " Darts",},};
var res = {};
$(document).ready(function() {
	var lang = 'de';if (navigator.browserLanguage) {lang = navigator.browserLanguage;} else if (navigator.language) {lang = navigator.language;} if (lang.length > 2) {lang = lang.substr(0, 2);} res = resources[lang];if (res === undefined) {res = resources['de'];}
	else if (lang !== 'de') {$('#menu_remaining_score').text(res.menu_remaining_score);$('#menu_exchange_scores').text(res.menu_exchange_scores);$('#menu_previous_leg').text(res.menu_previous_leg);$('#menu_end_leg').text(res.menu_end_leg);$('#menu_option').text(res.menu_option);$('#menu_cancel').text(res.menu_cancel);$('#menu_new').text(res.menu_new);$('#menu_finish').text(res.menu_finish);$('#menu_stats').text(res.menu_stats);$('#key_enter').text(res.key_enter);$('#finish_first').text(res.finish_first);$('#finish_second').text(res.finish_second);$('#finish_third').text(res.finish_third);$('#finish_cancel').text(res.finish_cancel);$('#middle_p1win').text(res.middle_p1win);$('#middle_p2win').text(res.middle_p2win);$('#middle_draw').text(res.middle_draw);$('#middle_cancel').text(res.middle_cancel);$('#msg_ok').text(res.msg_ok);$('#msg_cancel').text(res.msg_cancel);$('#msg_com_ok').text(res.msg_ok);}
	$('#p1_name,#p2_name').click(function() {if (dartmaster_data.gameOptions.com[0] === 0 || dartmaster_data.gameOptions.com[1] === 0) {window.location.href = 'sources/dartmaster_sources/rename.html';}});
});

function load_spiel() {$('#header').fadeIn('fast');$('#article').fadeIn('fast');$('#footer').fadeIn('fast');dartmaster_data.restoreOptions();dartmaster_data.restoreGameOptions();dartmaster_data.restoreSetData();if (currentLegData().selectRound === null) {currentLegData().selectRound = currentLegData().currentRound;} if (currentLegData().selectPlayer === null) {currentLegData().selectPlayer = currentLegData().currentPlayer;} initScore();showKeypad();if (dartmaster_data.options.leftShow === 1) {$('#left_table').show();} if (dartmaster_data.options.inputLeft === 1) {$('#header').css('background-color', '#000000');} else if (dartmaster_data.options.inputLeft === 0 && dartmaster_data.setData.leftMode === 1) {dartmaster_data.setData.leftMode = 0;dartmaster_data.setData.leftModeError = 0;changeSelectInput(currentLegData().selectRound, currentLegData().selectPlayer);if (nextScore()) {changeNextSelect();}} FreshGame();}

function CallerNewGame() {audio = new Audio('sources/dartmaster_sources/sounds/leg_comments/gameon.mp3');audio.play();}
function CallerScore() {var score = getCurrentScore();audio = new Audio('sources/dartmaster_sources/sounds/scores/russ_old/' + score + '.mp3');audio.play();}
function CallerFinish1() {audio = new Audio('sources/dartmaster_sources/sounds/leg_comments/gameshot1st.mp3');audio.play();}
function CallerFinish2() {audio = new Audio('sources/dartmaster_sources/sounds/leg_comments/gameshot2nd.mp3');audio.play();}
function CallerFinish3() {audio = new Audio('sources/dartmaster_sources/sounds/leg_comments/gameshot3rd.mp3');audio.play();}
function Playername1() {var name1 = dartmaster_data.gameOptions.playerName[0];audio = new Audio('sources/dartmaster_sources/sounds/names/' + name1 + '.mp3');audio.play();}
function Playername2() {var name2 = dartmaster_data.gameOptions.playerName[1];audio = new Audio('sources/dartmaster_sources/sounds/names/' + name2 + '.mp3');audio.play();}

function FreshGame() {var left = currentLegData().playerData[currentLegData().selectPlayer][currentLegData().selectRound].left;var start = dartmaster_data.gameOptions.startScore;if (currentLegData().currentPlayer === 0 && left - start === 0) {CallerNewGame();setTimeout(function() {Playername1();}, 1100);} if (currentLegData().currentPlayer === 1 && left - start === 0) {CallerNewGame();setTimeout(function() {Playername2();}, 1100);}}

$(function () {var timer = false;$(window).resize(function() {resize();if (timer !== false) {clearTimeout(timer);} timer = setTimeout(function() {resize();}, 100);});});
$(function () {
	$(document).on('keydown', function(e) {
		if($('#modal-overlay')[0]) {return false;}
		if (currentLegData() === undefined || currentLegData() === null) {return false;}
		var round = currentLegData().selectRound;
		var player = currentLegData().selectPlayer;
		switch (e.keyCode) {
			case 13:	// Enter
			case 9:		// Tab
				scrollRound(currentLegData().selectRound);if (nextScore() === false) {return false;} changeNextSelect();return false;
			case 8:		// BS
				deleteScore();return false;
			case 27:	// ESC
				if (dartmaster_data.setData.leftMode === 1) {dartmaster_data.setData.leftMode = 0;dartmaster_data.setData.leftModeError = 0;changeSelectInput(currentLegData().selectRound, currentLegData().selectPlayer);if (nextScore() === false) {return false;} changeNextSelect();return false;} if (currentLegData().currentRound === currentLegData().selectRound && currentLegData().currentPlayer === currentLegData().selectPlayer) {scrollRound(currentLegData().selectRound);return false;} if (currentLegData().playerData[currentLegData().selectPlayer][currentLegData().selectRound + 1] !== undefined) {setCurrentScore(currentLegData().playerData[currentLegData().selectPlayer][currentLegData().selectRound + 1].score);} changeSelectInput(currentLegData().currentRound, currentLegData().currentPlayer);return false;
			case 37:	// ←
				if (currentLegData().selectPlayer === 0 || nextScore() === false) {scrollRound(currentLegData().selectRound);return false;} changeSelectInput(round, 0);return false;
			case 38:	// ↑
				if (round === 0) {scrollTop();return false;} if (nextScore() === false) {scrollRound(currentLegData().selectRound);return false;} changeSelectInput(round - 1, player);return false;
			case 39:	// →
				if (currentLegData().selectPlayer === 1 || nextScore() === false) {scrollRound(currentLegData().selectRound);return false;} changeSelectInput(round, 1);return false;
			case 40:	// ↓
				if (round >= currentLegData().currentRound || nextScore() === false) {scrollRound(currentLegData().selectRound);return false;} changeSelectInput(round + 1, player);return false;
			case 66:	// B = 81
				setCurrentScore(81);nextScore();changeNextSelect();return false;
			case 67:	// C = 45
				setCurrentScore(45);nextScore();changeNextSelect();return false;
			case 77:	// M = 100
				setCurrentScore(100);nextScore();changeNextSelect();return false;
			case 78:	// N = 85
				setCurrentScore(85);nextScore();changeNextSelect();return false;
			case 86:	// V = 60
				setCurrentScore(60);nextScore();changeNextSelect();return false;
			case 88:	// X = 41
				setCurrentScore(41);nextScore();changeNextSelect();return false;
			case 89:	// Y = 26
				setCurrentScore(26);nextScore();changeNextSelect();return false;
			case 106:	// * = Finish 2nd
				CallerFinish2();finishConfirm(2);return false;
			case 107:	// + = New Game
				window.location.href = dartmaster_data.subPagePath + 'new.html';return false;
			case 109:	// - = Finish 3rd
				CallerFinish3();finishConfirm(3);return false;
			case 110:	// , = Rest
				remainingScore();return false;
			case 111:	// / = Finish 1st
				CallerFinish1();finishConfirm(1);return false;
			case 116:	// F5
			case 122:	// F11
				break;
			default:
				if (e.keyCode >= 48 && e.keyCode <= 48 + 9) {inputScore(e.keyCode - 48);} else if (e.keyCode >= 96 && e.keyCode <= 96 + 9) {inputScore(e.keyCode - 96);} return false;
		}
		return true;
	});
});

$(function() {
	$('#header_table, #score_table, #menu_table').on('click', function() {setFocus();});
	$('.score_input').on('click', function() {var round = parseInt($(this).attr('round'), 10);if (isNaN(round) || round < 0 || round > currentLegData().currentRound) {return;} var player = parseInt($(this).attr('player'), 10);if (isNaN(player)) {return;} if (currentLegData().selectRound === round && currentLegData().selectPlayer === player) {if (dartmaster_data.setData.leftMode === 1) {if (getCurrentScore() === '') {dartmaster_data.setData.leftMode = 0;dartmaster_data.setData.leftModeError = 0;changeSelectInput(currentLegData().selectRound, currentLegData().selectPlayer);currentLegData().playerData[currentLegData().selectPlayer].pop();return;}} else {return;}} if (nextScore()) {changeSelectInput(round, player);}});
	$('.score_left').on('click', function() {var round = parseInt($(this).attr('round'), 10);if (isNaN(round) || round < 0 || round > currentLegData().currentRound) {return;} var player = parseInt($(this).attr('player'), 10);if (isNaN(player)) {return;} if (currentLegData().selectRound === round && currentLegData().selectPlayer === player) {if (dartmaster_data.options.inputLeft === 1 && (dartmaster_data.gameOptions.com[currentLegData().selectPlayer] === 0 || dartmaster_data.options.inputLeftCom === 1)) {} else {return;}} if (nextScore()) {changeSelectInput(round, player);}});
});

$(function() {
	var touchstart;var touchend;if (navigator.pointerEnabled) {touchstart = 'pointerdown';touchend = 'pointerup';} else if (navigator.msPointerEnabled) {touchstart = 'MSPointerDown';touchend = 'MSPointerUp';} else if ('ontouchstart' in window) {if (dartmaster_util.getUserAgent().isAndroid) {touchstart = 'touchstart';touchend = 'touchend';} else {touchstart = 'touchstart mousedown';touchend = 'touchend mouseup';}} else {touchstart = 'mousedown';touchend = 'mouseup';}
	function menuFunc(menuId) {switch (menuId) {case 'menu_new': window.location.href = dartmaster_data.subPagePath + 'new.html';break;case 'menu_finish': scrollRound(currentLegData().selectRound);finishMenuOpen();break;case 'menu_stats': window.location.href = dartmaster_data.subPagePath + 'stats.html';break;case 'menu_menu': generalMenuOpen();break;}}
	var menuTouched = false;
	$('#menu_table td').on(touchstart, function(e) {if ($(this).prop('disabled')) {return false;} $(this).css('background-color', '#000000');menuTouched = true;return false;});
	$('#menu_table td').on(touchend, function(e) {$(this).css('background-color', '#000000');if (!menuTouched) {return false;} var menuId = this.id;setTimeout(function() {if (!menuTouched) {return;} menuTouched = false;menuFunc(menuId);}, 500);return false;});
	$('#menu_table td').on('click', function(e) {if (!menuTouched) {return false;} menuTouched = false;menuFunc(this.id);return false;});
	var touched = false;var eventType = null;var keyTimer = false;
	$('#key_table td').on(touchstart, function(e) {$(this).css('background-color', '#000000');touched = true;return false;});
	$('#key_table td').on(touchend, function(e) {$(this).css('background-color', '#000000');if (keyTimer !== false) {clearTimeout(keyTimer);} keyTimer = setTimeout(function() {eventType = null;}, 1000);if (eventType !== null && eventType !== e.type) {return false;} eventType = e.type;if (!touched) {return false;} touched = false;scrollRound(currentLegData().selectRound);var str = this.id;str = str.substr('key_'.length);if (str.length === 1) {inputScore(str);} else if (str === 'delete') {deleteScore();} else if (str === 'enter') {if (nextScore()) {changeNextSelect();}} return false;});
	$('#menu_table td,#key_table td').on('mouseout', function() {$(this).css('background-color', '#000000');menuTouched = false;touched = false;});
});

var oldWidth = 0;
function resize() {
	var windowSize = ($(window).width() < $(window).height()) ? $(window).width() : $(window).height();
	var modalWidth = windowSize * 0.9;$('.modal_window').css('width', modalWidth + 'px');
	var modalFont = windowSize * 0.06;$('.modal_window').css('font-size', modalFont + 'px');
	var menuPadding = windowSize * 0.045;$('.menu_ul li').css('padding', menuPadding + 'px 0px');
	var messagePadding1 = windowSize * 0.1;var messagePadding2 = windowSize * 0.005;var messagePaddingWidth = windowSize * 0.05;$('.message_title').css('padding', messagePadding1 + 'px ' + messagePaddingWidth + 'px ' + messagePadding2 + 'px ' + messagePaddingWidth + 'px');$('.message_msg').css('padding', messagePadding2 + 'px ' + messagePaddingWidth + 'px ' + messagePadding1 + 'px ' + messagePaddingWidth + 'px');
	var messageButtonPadding = windowSize * 0.045;
	$('.msg_button').css('padding', messageButtonPadding + 'px 0px');
	var messageButtonMargin = windowSize * 0.045;
	$('#msg_cancel').css('margin', '0 ' + (messageButtonMargin / 2) + 'px ' + messageButtonMargin + 'px ' + messageButtonMargin + 'px');
	$('#msg_ok').css('margin', '0 ' + messageButtonMargin + 'px ' + messageButtonMargin + 'px ' + (messageButtonMargin / 2) + 'px');
	$('#msg_com_ok').css('margin', messageButtonMargin + 'px');
	$('#msg_com_ok').css('margin-top', '0');
	var throwWidth = windowSize * 0.9;$('.throw_window').css('width', throwWidth + 'px');var throwPadding = windowSize * 0.05;$('.throw_div').css('padding', '0 ' + throwPadding + 'px 0 ' + throwPadding + 'px');var throwHeight = windowSize * 0.28;$('.throw').css('height', throwHeight + 'px');var throwFont = windowSize * 0.09;$('.throw').css('font-size', throwFont + 'px');
	centeringObject($("#general_menu"));centeringObject($("#finish_menu"));centeringObject($("#middle_menu"));centeringObject($("#popup_message"));centeringObject($("#com_throw"));centeringObject($("#popup_message_com"));
	var headerPaddingHeight = windowSize * 0.02;$('#p1_name').css('padding', headerPaddingHeight + 'px 0px ' +  headerPaddingHeight + 'px ' +  headerPaddingHeight + 'px');$('#p2_name').css('padding', headerPaddingHeight + 'px ' +  headerPaddingHeight + 'px ' +  headerPaddingHeight + 'px 0px');
	var headerFont = windowSize * 0.06;$('#header_table').css('font-size', headerFont + 'px');$('#header').css('height', $('#header_table').height() + 'px');
	var scoreFont;if ($(window).width() < $(window).height()) {windowSize = $(window).width();scoreFont = windowSize * 0.06;} else {windowSize = $(window).width() * 0.5;scoreFont = windowSize * 0.07;}
	var scoreHeaderHeight = windowSize * 0.08;var scoreHeaderFont = windowSize * 0.04;$('.score_table th').css('height', scoreHeaderHeight + 'px');$('.score_table th').css('font-size', scoreHeaderFont + 'px');
	var scoreHeight = windowSize * 0.1;$('.score_table td').css('height', scoreHeight + 'px');$('.score_table td').css('font-size', scoreFont + 'px');$('.hidden_table td').css('height', scoreHeight + 'px');$('.hidden_table td').css('font-size', scoreFont + 'px');$('.input_text_score').css('font-size', scoreFont + 'px');
	var border = Math.floor(windowSize * 0.0015);if (border < 1) {border = 1;}
	$('.score_table th').css('border', border + 'px solid #ffffff');
	$('.score_table td').css('border', border + 'px solid #ffffff');
	$('.hidden_table td').css('border', border + 'px solid #ffffff');
	$('.score_table th:first-child, .score_table td:first-child, .hidden_table td:first-child').css('border-left', '0px');
	$('.score_table th:last-child, .score_table td:last-child, .hidden_table td:last-child').css('border-right', '0px');
	$('.msg_button').css('border', border + 'px solid #ffffff');
	$('#footer').css('border-top', border + 'px solid #fff');
	resizeCircleTon(windowSize);
	windowSize = ($(window).width() < $(window).height()) ? $(window).width() : $(window).height();$('#key_table td').css('border', border + 'px solid #ffffff');$('#key_table td:first-child').css('border-left', '0px');$('#key_table td:last-child').css('border-right', '0px');$('#key_table tr:last-child td').css('border-bottom', '0px');
	if (dartmaster_data.options.leftShow === 1) {var leftWindowSize = ($(window).width() < $(window).height() * 1.1) ? $(window).width() : $(window).height() * 1.1;var leftFont = leftWindowSize * 0.21;$('#left_table td').css('font-size', leftFont + 'px');var leftPadding = leftWindowSize * 0.005;$('#p1left_big').css('padding', leftPadding + 'px 0');$('#p2left_big').css('padding', leftPadding + 'px 0');var leftFocusSize = windowSize * 0.017;$('#p1left_big').css('margin', leftFocusSize + 'px');$('#p2left_big').css('margin', leftFocusSize + 'px');$('#footer').css('border-top', (border * 2) + 'px solid #fff');$('#menu_table td').css('border-top', border + 'px solid #ffffff');}
	if ($(window).width() / $(window).height() >= 0.8 || dartmaster_data.options.smallKeypad === 1) {windowSize = windowSize / 1.5;}
	var menuHeight = windowSize * 0.1;var menuFont = windowSize * 0.05;$('#menu_table td').css('height', menuHeight + 'px');$('#menu_table td').css('font-size', menuFont + 'px');
	var imgMenuHeight = windowSize * 0.03;var imgMenuWidth = imgMenuHeight * 2;$('#img_menuButton').css('height', imgMenuHeight + 'px');$('#img_menuButton').css('width', imgMenuWidth + 'px');
	var keyHeight = windowSize * 0.15;var keyFont = windowSize * 0.09;$('#key_table td').css('height', keyHeight + 'px');$('#key_table').css('font-size', keyFont + 'px');var enterFont = windowSize * 0.06;$('#key_enter').css('font-size', enterFont + 'px');
	var imgDeleteHeight = windowSize * 0.058;var imgDeleteWidth = imgDeleteHeight * (230 / 140);$('#img_delete').css('height', imgDeleteHeight + 'px');$('#img_delete').css('width', imgDeleteWidth + 'px');
	var footerHeight = $('#menu_table').height();if (dartmaster_data.options.leftShow === 1) {footerHeight += $('#left_table').height();} if (dartmaster_data.options.keyShow === 1) {footerHeight += $('#key_table').height();} if (dartmaster_data.options.inputTag === 1 && dartmaster_util.getUserAgent().isiOS) {} $('#footer').css('height', footerHeight + 'px');$('#article').css('height', ($(window).height() - $('#header').outerHeight(true) - $('#footer').outerHeight(true)) + 'px');if (oldWidth !== $(window).width()) {oldWidth = $(window).width();if (currentLegData() !== undefined && currentLegData() !== null) {setTimeout(function() {scrollTop();scrollRound(currentLegData().selectRound);} ,100);}}
}

function resizeCircleTon(windowSize) {if (dartmaster_data.options.circleTon !== 1) {return;} var tonWidth = getScoreObj(0, 0).width() * 4;var tonHeight = getScoreObj(0, 0).height() * 4;if (tonWidth === 0 || tonHeight === 0) {return;} $('#canvas_ton').attr('width', tonWidth + 'px');$('#canvas_ton').attr('height', tonHeight + 'px');var canvas = document.getElementById('canvas_ton');if (!canvas || !canvas.getContext) {return;} var ctx = canvas.getContext('2d');ctx.beginPath();ctx.save();ctx.scale(tonWidth / tonHeight, 1);var margin = Math.floor(windowSize * 0.006);if (margin < 2) {margin = 2;} ctx.arc(tonHeight / 2, tonHeight / 2, tonHeight/ 2 - margin * 4, 0, Math.PI * 2, false);ctx.restore();ctx.strokeStyle = '#adff2f';var border = Math.floor(windowSize * 0.005);if (border < 2) {border = 2;} ctx.lineWidth = border * 4;ctx.stroke();$('.score_input').each(function(i, elem) {setCircleTon($(elem));});}
function setCircleTon(obj) {if (dartmaster_data.options.circleTon !== 1 || dartmaster_data.setData.leftMode === 1) {return;} var score = parseInt(obj.text(), 10);if (score >= 100) {var canvas = document.getElementById('canvas_ton');if (canvas && canvas.getContext) {obj.css('background-image', 'url("' + canvas.toDataURL() + '")');}} else {obj.css('background-image', 'none');}}
function centeringObject(obj) {var w = $(window).width();var h = $(window).height();var cw = obj.width();var ch = obj.height();obj.css({"left": ((w - cw) / 2) + "px", "top": ((h - ch) / 2) + "px"});}

function showKeypad() {if (dartmaster_data.options.keyShow === 1) {$('#key_table').show();} else {$('#key_table').hide();} resize();scrollRound(currentLegData().selectRound);}
function showName() {if (currentLegData().first === 0) {$('#p1_name').text('* ' + dartmaster_data.setData.statsData[0].name);$('#p2_name').text(dartmaster_data.setData.statsData[1].name);} else {$('#p1_name').text(dartmaster_data.setData.statsData[0].name);$('#p2_name').text('* ' + dartmaster_data.setData.statsData[1].name);} $('#article').css('top', $('#header_table').height() + 'px');}
function showLegs() {$('#legs').text(dartmaster_data.setData.statsData[0].winLegs + ' - ' + dartmaster_data.setData.statsData[1].winLegs);}
function showLeft() {if (dartmaster_data.options.leftShow !== 1) {return;} var left;if (currentLegData().playerData[0][currentLegData().currentRound + 1] !== undefined) {left = currentLegData().playerData[0][currentLegData().currentRound + 1].left;} else {left = currentLegData().playerData[0][currentLegData().currentRound].left;} $('#p1left_big').text(left);if (currentLegData().playerData[1][currentLegData().currentRound + 1] !== undefined) {left = currentLegData().playerData[1][currentLegData().currentRound + 1].left;} else {left = currentLegData().playerData[1][currentLegData().currentRound].left;} $('#p2left_big').text(left);showLeftCurrent();}
function setFinishLeft() {if (dartmaster_data.options.leftShow !== 1) {return;} if (currentLegData().currentPlayer === 0) {$('#p1left_big').text(0);} else {$('#p2left_big').text(0);}}
function showLeftCurrent() {if (dartmaster_data.options.leftShow !== 1) {return;} if (currentLegData().currentPlayer === 0) {$('#p1left_big_td').css('background-color', '#adff2f');$('#p2left_big_td').css('background-color', '#000000');} else {$('#p1left_big_td').css('background-color', '#000000');$('#p2left_big_td').css('background-color', '#adff2f');}}
function scrollTop() {$('#article').scrollTop(0);}
function scrollRound(round) {var offsetY = $('#article').height() - $('#round_' + round).height();var top = $('#score_table th').height() + $('#round_' + round).height() * (round + 1);var scrollY = $('#article').scrollTop();if (top <= scrollY) {$('#article').scrollTop(top);} else if(top >= scrollY + offsetY) {$('#article').scrollTop(top - offsetY);}}

var currentInputObj;
var startInput = true;
function changeSelectInput(newRound, newPlayer) {
	if (newRound < 0 || newRound > currentLegData().currentRound) {return;}
	if (currentInputObj != undefined) {currentInputObj.css('background-color', '#000000');if (dartmaster_data.options.inputTag === 1) {var currentScore = getCurrentScore();$('#input_text_score').remove();currentInputObj.text(currentScore);setCircleTon(currentInputObj);}}
	if (dartmaster_data.setData.leftMode === 1) {currentInputObj = getLeftObj(newRound, newPlayer);if (dartmaster_data.setData.leftModeError === 1) {currentInputObj.css('background-color', '#000000');} else {currentInputObj.css('background-color', '#000000');}}
	else {currentInputObj = getScoreObj(newRound, newPlayer);currentInputObj.css('background-color', '#adff2f');}
	if (dartmaster_data.options.inputTag === 1) {var score = currentInputObj.text();currentInputObj.text('');currentInputObj.append('<input type="text" id="input_text_score" class="input_text_score" />');$('.input_text_score').css('font-size',  $('.score_table td').css('font-size'));setCurrentScore(score);setCircleTon(currentInputObj);}
	startInput = true;currentLegData().selectRound = newRound;currentLegData().selectPlayer = newPlayer;dartmaster_data.setData.currnetInput = getCurrentScore();dartmaster_data.saveSetData();scrollRound(currentLegData().selectRound);enableFinishButton();setFocus();
	if (dartmaster_data.setData.leftMode === 0 && currentLegData().selectRound === currentLegData().currentRound && currentLegData().selectPlayer === currentLegData().currentPlayer && currentLegData().playerData[currentLegData().selectPlayer][currentLegData().selectRound + 1] === undefined && dartmaster_data.gameOptions.com[currentLegData().selectPlayer] === 1) {comStart();}
}

function changeNextSelect() {
	if (getCurrentScore() === '') {return;}
	if (currentLegData().first === currentLegData().selectPlayer) {CallerScore();refresh_stats();changeSelectInput(currentLegData().selectRound, (currentLegData().selectPlayer === 0) ? 1 : 0);}
	else {CallerScore();refresh_stats();changeSelectInput(currentLegData().selectRound + 1, (currentLegData().selectPlayer === 0) ? 1 : 0);}
}

function refresh_stats() {load_statistik();document.getElementById('verlauf_frame').src += '';}
function timer() {window.location.reload();}
function setCurrentScore(score) {if (dartmaster_data.options.inputTag === 1) {$('#input_text_score').val(score);} else {currentInputObj.text(score);setCircleTon(currentInputObj);}}
function getCurrentScore() {var score;if (dartmaster_data.options.inputTag === 1) {score = $('#input_text_score').val();} else {score = currentInputObj.text();} if (score === null) {score = '';} return score;}
function setFocus() {if (dartmaster_data.options.inputTag === 1) {$('#input_text_score').focus();}}
function enableFinishButton() {if (dartmaster_data.gameOptions.com[currentLegData().selectPlayer] === 1) {$('#menu_finish').css('color', '#000000');$('#menu_finish').prop('disabled', true);return;} if (currentLegData().playerData[currentLegData().selectPlayer][currentLegData().selectRound].left <= 180) {$('#menu_finish').css('color', '#adff2f');$('#menu_finish').prop('disabled', false);} else {$('#menu_finish').css('color', '#000000');$('#menu_finish').prop('disabled', true);}}

function initScore() {
	scrollTop();currentInputObj = undefined;$('#score_body').empty();var objStart = $('#score_list_start').clone(false).appendTo('#score_body');objStart.find('.p1left').text(currentLegData().playerData[0][0].left);objStart.find('.p2left').text(currentLegData().playerData[1][0].left);var round;
	if (dartmaster_data.gameOptions.roundLimit === 1) {round = dartmaster_data.gameOptions.maxRound;if (round > 60) {round = 60;}} else {round = 15;} if (round < currentLegData().playerData[0].length) {round = currentLegData().playerData[0].length;}
	for (var i = 0; i < round; i++) {var obj = addRound(i);if (currentLegData().playerData[0][i + 1] != undefined) {obj.find('.p1score').text(currentLegData().playerData[0][i + 1].score);obj.find('.p1left').text(currentLegData().playerData[0][i + 1].left);setCircleTon(obj.find('.p1score'));} if (currentLegData().playerData[1][i + 1] != undefined) {obj.find('.p2score').text(currentLegData().playerData[1][i + 1].score);obj.find('.p2left').text(currentLegData().playerData[1][i + 1].left);setCircleTon(obj.find('.p2score'));}}
	var currnetInput = dartmaster_data.setData.currnetInput;changeSelectInput(currentLegData().selectRound, currentLegData().selectPlayer);if (currnetInput !== getCurrentScore()) {startInput = false;}setCurrentScore(currnetInput);dartmaster_data.setData.currnetInput = currnetInput;dartmaster_data.saveSetData();showName();showLegs();showLeft();resize();
	var diff = $('#p1_name').width() - $('#p2_name').width();if (diff > 1 || diff < -1 || $('#header_table').width() > $(window).width()) {$('.player_name').css('word-wrap', 'break-word');resize();} setTimeout(function() {scrollRound(currentLegData().selectRound);setFocus();}, 200);
}
function addRound(round) {var obj = $('#score_list_score').clone(true).appendTo('#score_body');obj.attr('id', 'round_' + round);if (dartmaster_data.options.roundDarts === 1) {obj.find('.score_round').text((round + 1) * 3);} else {obj.find('.score_round').text(round + 1);} obj.find('.p1score').attr('round', round);obj.find('.p1left').attr('round', round);obj.find('.p2score').attr('round', round);obj.find('.p2left').attr('round', round);return obj;}
function inputScore(value) {if (dartmaster_data.setData.leftMode === 0 && dartmaster_data.gameOptions.com[currentLegData().selectPlayer] === 1) {return;} scrollRound(currentLegData().selectRound);var score = getCurrentScore();if (startInput === true || score === '') {score = '0';} score = parseInt(score, 10) * 10 + parseInt(value, 10);if (score > 999) {return;} setCurrentScore(score);startInput = false;dartmaster_data.setData.currnetInput = getCurrentScore();dartmaster_data.saveSetData();}
function deleteScore() {if (dartmaster_data.setData.leftMode === 0 && dartmaster_data.gameOptions.com[currentLegData().selectPlayer] === 1) {return;} scrollRound(currentLegData().selectRound);var score = getCurrentScore();if (score === '') {return;} if (score.length === 1) {setCurrentScore('');} else {setCurrentScore(Math.floor(parseInt(score, 10) / 10));} startInput = false;dartmaster_data.setData.currnetInput = getCurrentScore();dartmaster_data.saveSetData();}
function remainingScore() {if (dartmaster_data.gameOptions.com[currentLegData().selectPlayer] === 1) {return;} scrollRound(currentLegData().selectRound);var score = getCurrentScore();if (score === '') {return;} var left = currentLegData().playerData[currentLegData().selectPlayer][currentLegData().selectRound].left;if (left - score >= 0) {setCurrentScore(left - score);if (nextScore()) {changeNextSelect();}}}
function exchangeScores() {var tmpData = currentLegData().playerData[0];currentLegData().playerData[0] = currentLegData().playerData[1];currentLegData().playerData[1] = tmpData;currentLegData().first = (currentLegData().first == 0) ? 1 : 0;currentLegData().selectPlayer = (currentLegData().selectPlayer == 0) ? 1 : 0;currentLegData().currentPlayer = (currentLegData().currentPlayer == 0) ? 1 : 0;dartmaster_data.saveSetData();initScore();}
function checkLeft() {var inpuLeft = getCurrentScore();if (inpuLeft === '') {return false;} inpuLeft = parseInt(inpuLeft, 10);var left = currentLegData().playerData[currentLegData().selectPlayer][currentLegData().selectRound + 1].left;if (inpuLeft !== left) {dartmaster_data.setData.leftModeError = 1;changeSelectInput(currentLegData().selectRound, currentLegData().selectPlayer);return false;} dartmaster_data.setData.leftMode = 0;dartmaster_data.setData.leftModeError = 0;changeSelectInput(currentLegData().selectRound, currentLegData().selectPlayer);return nextScore();}

function nextScore() {
	if (dartmaster_data.setData.leftMode === 1) {return checkLeft();}var score = getCurrentScore();
	if (dartmaster_data.options.inputTag === 1) {score = score.replace(/[０-９]/g, function(s){return String.fromCharCode(s.charCodeAt(0) - 0xFEE0)});score = score.replace(/[^0-9]/g, '');setCurrentScore(score);}
	if (score === '') {if (currentLegData().selectRound === currentLegData().currentRound && (currentLegData().first === currentLegData().currentPlayer || currentLegData().selectPlayer === currentLegData().currentPlayer)) {return true;} return false;}
	score = parseInt(score, 10);if (score > 180 || score === 179 || score === 178 || score === 176 || score === 175 || score === 173 || score === 172 || score === 169) {return false;}
	if (dartmaster_data.setData.startTime === undefined || dartmaster_data.setData.startTime === 0) {dartmaster_data.setData.startTime = new Date().getTime();}
	var left = currentLegData().playerData[currentLegData().selectPlayer][currentLegData().selectRound].left - score;
	if (left < 0) {if (startInput === true) {return true;} return false;}
	if (left === 0) {finishMenuOpen();return false;}
	if (currentLegData().playerData[currentLegData().selectPlayer][currentLegData().selectRound + 1] === undefined) {currentLegData().playerData[currentLegData().selectPlayer].push({score: score, left: left});if (dartmaster_data.options.inputLeft === 1 && (dartmaster_data.gameOptions.com[currentLegData().selectPlayer] === 0 || dartmaster_data.options.inputLeftCom === 1)) {dartmaster_data.setData.leftMode = 1;dartmaster_data.setData.leftModeError = 0;changeSelectInput(currentLegData().selectRound, currentLegData().selectPlayer);return false;} else {getLeftObj(currentLegData().selectRound, currentLegData().selectPlayer).text(left);}}
	else {currentLegData().playerData[currentLegData().selectPlayer][currentLegData().selectRound + 1].score = score;currentLegData().playerData[currentLegData().selectPlayer][currentLegData().selectRound + 1].left = left;getLeftObj(currentLegData().selectRound, currentLegData().selectPlayer).text(left);}
	for (var i = currentLegData().selectRound + 1; i < currentLegData().currentRound + 1; i++) {if (currentLegData().playerData[currentLegData().selectPlayer][i + 1] === undefined) {break;} var nLeft = currentLegData().playerData[currentLegData().selectPlayer][i].left - currentLegData().playerData[currentLegData().selectPlayer][i + 1].score;currentLegData().playerData[currentLegData().selectPlayer][i + 1].left = nLeft;getLeftObj(i, currentLegData().selectPlayer).text(nLeft);}
	if (currentLegData().selectRound === currentLegData().currentRound && currentLegData().currentPlayer === currentLegData().first && currentLegData().selectPlayer !== currentLegData().first) {currentLegData().first = currentLegData().selectPlayer;currentLegData().currentPlayer = currentLegData().selectPlayer;showName();resize();}
	if (currentLegData().first === currentLegData().selectPlayer) {if (currentLegData().selectRound === currentLegData().currentRound && currentLegData().selectPlayer === currentLegData().currentPlayer) {currentLegData().currentPlayer = (currentLegData().currentPlayer === 0) ? 1 : 0;}}
	else {if (currentLegData().selectRound === currentLegData().currentRound) {currentLegData().currentRound++;currentLegData().currentPlayer = currentLegData().first;if ($('#score_body').children().length <= currentLegData().currentRound + 1) {addRound(currentLegData().currentRound);setTimeout(function() {scrollRound(currentLegData().selectRound);} ,100);} if (dartmaster_data.gameOptions.roundLimit === 1 && dartmaster_data.gameOptions.maxRound === currentLegData().currentRound) {showLeft();if (dartmaster_data.gameOptions.com[0] === 1 || dartmaster_data.gameOptions.com[1] === 1) {comDrawMsgOpen();} else {changeSelectInput(currentLegData().selectRound + 1, (currentLegData().selectPlayer === 0) ? 1 : 0);middleMenuOpen();} return false;}}}
	showLeft();dartmaster_data.saveSetData();return true;
}

function nextLeg() {
	if (dartmaster_data.setData.legData[dartmaster_data.setData.currentLeg + 1] === undefined) {dartmaster_data.setData.legData.push($.extend(true, {}, dartmaster_data.initLegData));var nextFirst = (currentLegData().first === 0) ? 1 : 0;dartmaster_data.setData.currentLeg++;currentLegData().first = currentLegData().currentPlayer = currentLegData().selectPlayer = nextFirst;} else {dartmaster_data.setData.currentLeg++;}
	if (dartmaster_data.gameOptions.p1_handicap === 1) {currentLegData().playerData[0][0].left = dartmaster_data.gameOptions.p1_handicap_score;} else {currentLegData().playerData[0][0].left = dartmaster_data.gameOptions.startScore;}
	if (dartmaster_data.gameOptions.p2_handicap === 1) {currentLegData().playerData[1][0].left = dartmaster_data.gameOptions.p2_handicap_score;} else {currentLegData().playerData[1][0].left = dartmaster_data.gameOptions.startScore;}
	dartmaster_data.setData.currnetInput = '';dartmaster_data.setData.leftMode = 0;dartmaster_data.setData.leftModeError = 0;dartmaster_data.saveSetData();initScore();
}
function previousConfirm() {if (dartmaster_data.setData.currentLeg === 0) {setFocus();return;} previousMsgOpen();}
function previousLeg() {if (dartmaster_data.setData.leftMode === 1) {dartmaster_data.setData.leftMode = 0;dartmaster_data.setData.leftModeError = 0;changeSelectInput(currentLegData().selectRound, currentLegData().selectPlayer);nextScore();} currentLegData().selectRound = currentLegData().currentRound;currentLegData().selectPlayer = currentLegData().currentPlayer;dartmaster_data.setData.currentLeg--;currentLegData().endFlag = 0;currentLegData().middleForDiddle = 0;if (currentLegData().winner >= 0) {dartmaster_data.setData.statsData[currentLegData().winner].winLegs--;} currentLegData().playerData[currentLegData().selectPlayer].splice(currentLegData().selectRound + 1);dartmaster_data.setData.currnetInput = '';dartmaster_data.saveSetData();initScore();}
function calcStatsData(player) {if (currentLegData().winner === player) {dartmaster_data.setData.statsData[player].winLegs++;}}

function finishConfirm(dart) {finishMsgOpen(currentLegData().selectPlayer, dart, (currentLegData().selectRound * 3) + dart);}
function finish(dart) {
	if (currentLegData().selectRound === currentLegData().currentRound && currentLegData().currentPlayer === currentLegData().first && currentLegData().selectPlayer !== currentLegData().first) {currentLegData().first = currentLegData().selectPlayer;currentLegData().currentPlayer = currentLegData().selectPlayer;showName();}
	currentLegData().playerData[currentLegData().selectPlayer].splice(currentLegData().selectRound + 1);var deletePlayer = (currentLegData().selectPlayer === 0) ? 1 : 0;var deleteRound = (currentLegData().first === deletePlayer) ? currentLegData().selectRound + 2 : currentLegData().selectRound + 1;currentLegData().playerData[deletePlayer].splice(deleteRound);
	if (currentLegData().playerData[currentLegData().selectPlayer][currentLegData().selectRound + 1] === undefined) {currentLegData().playerData[currentLegData().selectPlayer].push({score: (dart * -1), left: 0});} else {currentLegData().playerData[currentLegData().selectPlayer][currentLegData().selectRound + 1].score = (dart * -1);currentLegData().playerData[currentLegData().selectPlayer][currentLegData().selectRound + 1].left = 0;}
	currentLegData().currentRound = currentLegData().selectRound;currentLegData().currentPlayer = currentLegData().selectPlayer;currentLegData().endFlag = 1;currentLegData().middleForDiddle = 0;currentLegData().winner = currentLegData().selectPlayer;calcStatsData(currentLegData().selectPlayer);nextLeg();
}
function middleConfirm(player) {middleMsgOpen(player);}
function middle(player) {currentLegData().selectPlayer = currentLegData().first;currentLegData().playerData[0].splice(currentLegData().selectRound + 1);currentLegData().playerData[1].splice(currentLegData().selectRound + 1);currentLegData().currentRound = currentLegData().selectRound;currentLegData().currentPlayer = currentLegData().selectPlayer;currentLegData().endFlag = 1;currentLegData().middleForDiddle = 1;if (player === 0 || player === 1) {currentLegData().winner = player;calcStatsData(player);} else {currentLegData().winner = -1;} nextLeg();}

function generalMenuOpen() {
	if($('#modal-overlay')[0]) {return;}$('body').append('<div id="modal-overlay"></div>');$('#modal-overlay').show();$('#menu_remaining_score').show();$('#menu_exchange_scores').show();$('#menu_previous_leg').show();$('#menu_end_leg').show();if (dartmaster_data.options.inputLeft === 1) {$('#menu_remaining_score').hide();} if (dartmaster_data.gameOptions.com[0] === 1 || dartmaster_data.gameOptions.com[1] === 1) {$('#menu_remaining_score').show();$('#menu_exchange_scores').hide();$('#menu_previous_leg').show();$('#menu_end_leg').show();} centeringObject($("#general_menu"));$('#general_menu').show();
	function generalMenuClose() {$('#general_menu').hide();$('#modal-overlay').remove();$(document).off('keydown.general_menu');}
	$('#modal-overlay').unbind().click(function() {generalMenuClose();setFocus();return false;});
	$('#menu_remaining_score').unbind().click(function() {if (dartmaster_data.options.inputLeft === 1) {return false;} generalMenuClose();remainingScore();setFocus();return false;});
	$('#menu_exchange_scores').unbind().click(function() {if (dartmaster_data.gameOptions.com[0] === 1 || dartmaster_data.gameOptions.com[1] === 1) {return false;} generalMenuClose();exchangeScores();return false;});
	$('#menu_previous_leg').unbind().click(function() {generalMenuClose();previousConfirm();return false;});
	$('#menu_end_leg').unbind().click(function() {generalMenuClose();middleMenuOpen();return false;});
	$('#menu_option').unbind().click(function() {generalMenuClose();window.location.href = dartmaster_data.subPagePath + 'option.html';return false;});
	$('#menu_cancel').unbind().click(function() {generalMenuClose();setFocus();return false;});

	$(document).on('keydown.general_menu', function(e) {
		switch (e.keyCode) {
		case 49:	// 1
		case 97:	// 1
			$('#menu_remaining_score').click();break;
		case 50:	// 2
		case 98:	// 2
			$('#menu_exchange_scores').click();break;
		case 51:	// 3
		case 99:	// 3
			$('#menu_previous_leg').click();break;
		case 52:	// 4
		case 100:	// 4
			$('#menu_end_leg').click();break;
		case 53:	// 5
		case 101:	// 5
			$('#menu_option').click();break;
		case 27:	// ESC
			$('#menu_cancel').click();break;
		}
	});
}

function finishMenuOpen() {
	if($('#modal-overlay')[0]) {return;} $('body').append('<div id="modal-overlay"></div>');$('#modal-overlay').show();$("#finish_third").prependTo("#finish_menu ul");var left = currentLegData().playerData[currentLegData().selectPlayer][currentLegData().selectRound].left;if (left > 120) {$('#finish_second').hide();} else {$("#finish_second").insertBefore("#finish_third");$('#finish_second').show();} if (left > 60) {$('#finish_first').hide();} else {$("#finish_first").insertBefore("#finish_second");$('#finish_first').show();} centeringObject($("#finish_menu"));$('#finish_menu').show();
	function finishMenuClose() {$('#finish_menu').hide();$('#modal-overlay').remove();$(document).off('keydown.finish_menu');}
	$('#modal-overlay').unbind().click(function() {finishMenuClose();setFocus();return false;});
	$('#finish_first').unbind().click(function() {finishMenuClose();finishConfirm(1);return false;});
	$('#finish_second').unbind().click(function() {finishMenuClose();finishConfirm(2);return false;});
	$('#finish_third').unbind().click(function() {finishMenuClose();finishConfirm(3);return false;});
	$('#finish_cancel').unbind().click(function() {finishMenuClose();setFocus();return false;});

	$(document).on('keydown.finish_menu', function(e) {
		switch (e.keyCode) {
		case 49:	// 1
		case 97:	// 1
			if (left > 60) {break;}
		//$FALLTHROUGH$
		case 50:	// 2
		case 98:	// 2
			if (left > 120) {break;}
		//$FALLTHROUGH$
		case 51:	// 3
		case 99:	// 3
			finishMenuClose();if (e.keyCode <= 51) {finishConfirm(e.keyCode - 48);} else {finishConfirm(e.keyCode - 96);} break;
		case 27:	// ESC
			$('#finish_cancel').click();break;
		}
	});
}

function finishMsgOpen(player, dart, darts) {
	var oldInputScore = getCurrentScore();
	switch (dart) {
	case 1:
		setCurrentScore('x1');break;
	case 2:
		setCurrentScore('x2');break;
	case 3:
		setCurrentScore('x3');break;
	}

	setFinishLeft();
	if($('#modal-overlay')[0]) {return;}$('body').append('<div id="modal-overlay"></div>');$('#modal-overlay').show();
	$('#msg_title').text(dartmaster_data.setData.statsData[player].name);
	$('#msg_text').text(res.game_shot_msg_prefix + dart + res.game_shot_msg_suffix + ' (' + darts + res.game_shot_msg_darts + ')');
	centeringObject($("#popup_message"));$('#popup_message').show();
	function messageClose(cancel) {$('#popup_message').hide();$('#modal-overlay').remove();$(document).off('keydown.finish_message');if (cancel) {setCurrentScore(oldInputScore);showLeft();} setFocus();}
	$('#msg_ok').unbind().click(function() {messageClose(false);finish(dart);return false;});
	$('#msg_cancel').unbind().click(function() {messageClose(true);return false;});

	$(document).on('keydown.finish_message', function(e) {
		switch (e.keyCode) {
		case 13:	// Enter
			messageClose(false);finish(dart);window.location.reload();break;
		case 27:	// ESC
			$('#msg_cancel').click();break;
		}
	});
}

function middleMenuOpen() {
	if($('#modal-overlay')[0]) {return;} $('body').append('<div id="modal-overlay"></div>');$('#modal-overlay').show();centeringObject($("#middle_menu"));$('#middle_menu').show();
	function middleMenuClose() {$('#middle_menu').hide();$('#modal-overlay').remove();$(document).off('keydown.middle_menu');}
	$('#modal-overlay').unbind().click(function() {middleMenuClose();setFocus();return false;});
	$('#middle_p1win').unbind().click(function() {middleMenuClose();middleConfirm(0);return false;});
	$('#middle_p2win').unbind().click(function() {middleMenuClose();middleConfirm(1);return false;});
	$('#middle_draw').unbind().click(function() {middleMenuClose();middleConfirm(2);return false;});
	$('#middle_cancel').unbind().click(function() {middleMenuClose();setFocus();return false;});

	$(document).on('keydown.middle_menu', function(e) {
		switch (e.keyCode) {
		case 49:	// 1
		case 50:	// 2
		case 51:	// 3
			middleMenuClose();middleConfirm(e.keyCode - 49);break;
		case 97:	// 1
		case 98:	// 2
		case 99:	// 3
			middleMenuClose();middleConfirm(e.keyCode - 97);break;
		case 27:	// ESC
			$('#middle_cancel').click();break;
		}
	});
}

function middleMsgOpen(player) {
	if($('#modal-overlay')[0]) {return;} $('body').append('<div id="modal-overlay"></div>');$('#modal-overlay').show();
	
	switch (player) {
	case 0:
		$('#msg_title').text(res.middle_p1win);break;
	case 1:
		$('#msg_title').text(res.middle_p2win);break;
	case 2:
		$('#msg_title').text(res.draw_msg);break;
	}

	$('#msg_text').text('');centeringObject($("#popup_message"));$('#popup_message').show();
	function messageClose() {$('#popup_message').hide();$('#modal-overlay').remove();$(document).off('keydown.middle_message');setFocus();}
	$('#msg_ok').unbind().click(function() {messageClose();middle(player);return false;});
	$('#msg_cancel').unbind().click(function() {messageClose();return false;});
	
	$(document).on('keydown.middle_message', function(e) {
		switch (e.keyCode) {
		case 13:	// Enter
			messageClose();middle(player);break;
		case 27:	// ESC
			$('#msg_cancel').click();break;
		}
	});
}

function previousMsgOpen() {
	if($('#modal-overlay')[0]) {return;} $('body').append('<div id="modal-overlay"></div>');$('#modal-overlay').show();$('#msg_title').text(res.previous_leg_confirm);$('#msg_text').text('');centeringObject($("#popup_message"));$('#popup_message').show();
	function messageClose() {$('#popup_message').hide();$('#modal-overlay').remove();$(document).off('keydown.previous_message');setFocus();}
	$('#msg_ok').unbind().click(function() {messageClose();previousLeg();return false;});
	$('#msg_cancel').unbind().click(function() {messageClose();return false;});

	$(document).on('keydown.previous_message', function(e) {
		switch (e.keyCode) {
		case 13:	// Enter
			messageClose();previousLeg();break;
		case 27:	// ESC
			$('#msg_cancel').click();break;
		}
	});
}

// COM
var throwIndex;var throwList;var throwScore;var comCancel = false;var comTimerInterval = 1000;
function comStart() {if($('#modal-overlay')[0]) {return;} $('body').append('<div id="modal-overlay"></div>');$('#modal-overlay').css('background-color', 'transparent');$('#modal-overlay').show();$('#modal-overlay').unbind().click(function() {if (dartmaster_data.gameOptions.com[0] === 1 && dartmaster_data.gameOptions.com[1] === 1) {comCancel = true;}});$('#com_throw_1').text('');$('#com_throw_2').text('');$('#com_throw_3').text('');centeringObject($("#com_throw"));$('#com_throw').fadeIn('fast');throwIndex = 0;throwList = [];throwScore = [0, 0, 0];comCancel = false;setTimeout(comTimer, comTimerInterval);}
function comTimer() {if (comCancel === true) {$('#com_throw').hide();$('#modal-overlay').remove();return;} if (throwIndex >= 3) {comEnd();return;} var left = currentLegData().playerData[currentLegData().selectPlayer][currentLegData().selectRound].left;left -= (throwScore[0] + throwScore[1] + throwScore[2]);if (left <= 1) {comEnd();return;} var vsLeft = currentLegData().playerData[(currentLegData().selectPlayer === 0) ? 1 : 0][currentLegData().selectRound].left;var throwData = dartmaster_com.getComThrow(left, vsLeft, throwIndex, dartmaster_data.gameOptions.comLevel[currentLegData().selectPlayer]);throwList.push(throwData);throwScore[throwIndex] = throwData.target * throwData.segment;var scoreStr;switch(throwData.segment) {case dartmaster_com.SEGMENT_SINGLE: scoreStr = 'S' + throwData.target;break;case dartmaster_com.SEGMENT_DOUBLE: scoreStr = 'D' + throwData.target;break;case dartmaster_com.SEGMENT_TRIPLE: scoreStr = 'T' + throwData.target;break;} if (throwData.target === 0) {scoreStr = '0';} switch(throwIndex) {case 0: $('#com_throw_1').text(scoreStr);break;case 1: $('#com_throw_2').text(scoreStr);break;case 2: $('#com_throw_3').text(scoreStr);break;} throwIndex++;setTimeout(comTimer, comTimerInterval);}
function comEnd() {$('#com_throw').fadeOut('fast');$('#modal-overlay').remove();var left = currentLegData().playerData[currentLegData().selectPlayer][currentLegData().selectRound].left;left -= (throwScore[0] + throwScore[1] + throwScore[2]);if (left === 0 && throwList[throwIndex - 1].segment === dartmaster_com.SEGMENT_DOUBLE) {comFinishMsgOpen(currentLegData().selectPlayer, throwIndex, (currentLegData().selectRound * 3) + throwIndex);} else if (left <= 1) {setCurrentScore(0);scrollRound(currentLegData().selectRound);nextScore();changeNextSelect();} else {setCurrentScore(throwScore[0] + throwScore[1] + throwScore[2]);scrollRound(currentLegData().selectRound);nextScore();changeNextSelect();}}
function comFinishMsgOpen(player, dart, darts) {if($('#modal-overlay')[0]) {return;} switch (dart) {case 1: setCurrentScore('x1');break;case 2: setCurrentScore('x2');break;case 3: setCurrentScore('x3');break;} setFinishLeft();$('body').append('<div id="modal-overlay"></div>');$('#modal-overlay').show();$('#msg_com_title').text(dartmaster_data.setData.statsData[player].name);$('#msg_com_text').text(res.game_shot_msg_prefix + dart + res.game_shot_msg_suffix + ' (' + darts + res.game_shot_msg_darts + ')');centeringObject($("#popup_message_com"));$('#popup_message_com').show();function messageClose() {$('#popup_message_com').hide();$('#modal-overlay').remove();$(document).off('keydown.com_finish_message');setFocus();} $('#msg_com_ok').unbind().click(function() {messageClose();finish(dart);return false;});$(document).on('keydown.com_finish_message', function(e) {switch (e.keyCode) {case 13: messageClose();finish(dart);break;}});}
function comDrawMsgOpen() {if($('#modal-overlay')[0]) {return;} $('body').append('<div id="modal-overlay"></div>');$('#modal-overlay').show();$('#msg_com_title').text(res.draw_msg);$('#msg_com_text').text('');centeringObject($("#popup_message_com"));$('#popup_message_com').show();function messageClose() {$('#popup_message_com').hide();$('#modal-overlay').remove();$(document).off('keydown.com_draw_message');setFocus();} $('#msg_com_ok').unbind().click(function() {messageClose();middle(2);return false;});$(document).on('keydown.com_draw_message', function(e) {switch (e.keyCode) {case 13: messageClose();middle(2);break;}});}

function currentLegData() {if (dartmaster_data.setData === null) {return null;} return dartmaster_data.setData.legData[dartmaster_data.setData.currentLeg];}
function getScoreObj(round, player) {if (player === 0) {return $('#round_' + round).find('.p1score');} else {return $('#round_' + round).find('.p2score');}}
function getLeftObj(round, player) {if (player === 0) {return $('#round_' + round).find('.p1left');} else {return $('#round_' + round).find('.p2left');}}

// Statistik

function load_statistik() {
	dartmaster_data.restoreOptions();dartmaster_data.restoreGameOptions();dartmaster_data.restoreSetData();$('#p1_name_stats').text(dartmaster_data.setData.statsData[0].name);$('#p2_name_stats').text(dartmaster_data.setData.statsData[1].name);$('#p1_legs').text(dartmaster_data.setData.statsData[0].winLegs);$('#p2_legs').text(dartmaster_data.setData.statsData[1].winLegs);
	var statsTmplate = {ton00Count: 0,ton40Count: 0,ton80Count: 0,highOut: 0,bestLeg: 0,worstLeg: 0,allScore: 0,allDarts: 0,winDarts: 0,winCount: 0,first9Score: 0,first9Darts: 0};
	var stats1 = $.extend(true, {}, statsTmplate);calcPlayer(stats1, 0);$('#p1_ton00').text(stats1.ton00Count);$('#p1_ton40').text(stats1.ton40Count);$('#p1_ton80').text(stats1.ton80Count);$('#p1_highout').text(stats1.highOut);$('#p1_best').text(stats1.bestLeg);$('#p1_worst').text(stats1.worstLeg);
	if (stats1.winCount > 0) {var p1darts = stats1.winDarts / stats1.winCount;$('#p1_darts').text(p1darts.toFixed(2));}
	if (stats1.allDarts > 0) {var p1score = stats1.allScore / stats1.allDarts;if (dartmaster_data.options.avePPR === 1) {p1score *= 3;} $('#p1_score').text(p1score.toFixed(2));}
	if (stats1.first9Darts > 0) {var p1first9 = stats1.first9Score / stats1.first9Darts;if (dartmaster_data.options.avePPR === 1) {p1first9 *= 3;} $('#p1_first9').text(p1first9.toFixed(2));}
	var stats2 = $.extend(true, {}, statsTmplate);calcPlayer(stats2, 1);$('#p2_ton00').text(stats2.ton00Count);$('#p2_ton40').text(stats2.ton40Count);$('#p2_ton80').text(stats2.ton80Count);$('#p2_highout').text(stats2.highOut);$('#p2_best').text(stats2.bestLeg);$('#p2_worst').text(stats2.worstLeg);
	if (stats2.winCount > 0) {var p2darts = stats2.winDarts / stats2.winCount;$('#p2_darts').text(p2darts.toFixed(2));}
	if (stats2.allDarts > 0) {var p2score = stats2.allScore / stats2.allDarts;if (dartmaster_data.options.avePPR === 1) {p2score *= 3;} $('#p2_score').text(p2score.toFixed(2));}
	if (stats2.first9Darts > 0) {var p2first9 = stats2.first9Score / stats2.first9Darts;if (dartmaster_data.options.avePPR === 1) {p2first9 *= 3;} $('#p2_first9').text(p2first9.toFixed(2));}
}
function calcPlayer(stats, player) {for (var i = 0; i < dartmaster_data.setData.legData.length; i++) {calcLeg(stats, player, dartmaster_data.setData.legData[i]);if (dartmaster_data.setData.legData[i].endFlag === 0) {break;}}}
function calcLeg(stats, player, leg) {
	var round;
	if (((leg.first !== leg.currentPlayer && leg.currentPlayer === player) || leg.first === leg.currentPlayer) ||leg.middleForDiddle === 1) {round = leg.currentRound;} else {round = leg.currentRound + 1;} var first9Score = 0;var first9Darts = 0;
	for (var i = 1; i <= round; i++) {if (leg.playerData[player][i] === undefined) {round = i - 1;break;} var score = leg.playerData[player][i].score;if (score >=100 && score < 140) {stats.ton00Count++;} if (score >=140 && score < 180) {stats.ton40Count++;} if (score === 180) {stats.ton80Count++;} if (i <= 3) {first9Score += score;first9Darts += 3;}}
	if (leg.endFlag === 1 && leg.winner === player) {var allScore;var allDarts;if (leg.middleForDiddle === 0) {allScore = leg.playerData[player][0].left;allDarts = leg.currentRound * 3 + leg.playerData[player][leg.currentRound + 1].score * -1;stats.allScore += allScore;stats.allDarts += allDarts;if (leg.currentRound + 1 <= 3) {first9Score = allScore;first9Darts = allDarts;} var highOut = leg.playerData[player][leg.currentRound].left;if (stats.highOut < highOut) {stats.highOut = highOut;} if (highOut >=100 && highOut < 140) {stats.ton00Count++;} if (highOut >=140 && highOut < 180) {stats.ton40Count++;} if (highOut === 180) {stats.ton80Count++;} if (stats.bestLeg === 0 || stats.bestLeg > allDarts) {stats.bestLeg = allDarts;} if (stats.worstLeg < allDarts) {stats.worstLeg = allDarts;} stats.winCount++;stats.winDarts += allDarts;} else {allScore = leg.playerData[player][0].left - leg.playerData[player][round].left;allDarts = round * 3;stats.allScore += allScore;stats.allDarts += allDarts;if (stats.bestLeg === 0 || stats.bestLeg > allDarts + 1) {stats.bestLeg = allDarts + 1;} if (stats.worstLeg < allDarts + 1) {stats.worstLeg = allDarts + 1;} stats.winCount++;stats.winDarts += allDarts + 1;}}
	else {stats.allScore += leg.playerData[player][0].left - leg.playerData[player][round].left;stats.allDarts += round * 3;}
	stats.first9Score += first9Score;
	stats.first9Darts += first9Darts;
}

// Neues Spiel
function new_game() {window.location.href='sources/dartmaster_sources/new.html'}

var screen = document.documentElement;
var fullscreen = false;
function toggle_fullscreen() {
	if (fullscreen == false) {fullscreen_open();fullscreen = true;document.getElementById('fullscreen_image').src = 'sources/dartmaster_sources/image/Icon_Fullscreen_O.png';}
	else {fullscreen_exit();fullscreen = false;document.getElementById('fullscreen_image').src = 'sources/dartmaster_sources/image/Icon_Fullscreen_I.png';}}
function fullscreen_open() {
	if (screen.requestFullscreen) {screen.requestFullscreen();}
	else if (screen.webkitRequestFullscreen) {screen.webkitRequestFullscreen();}
	else if (screen.msRequestFullscreen) {screen.msRequestFullscreen();}
}
function fullscreen_exit() {
	if (document.exitFullscreen) {document.exitFullscreen();}
	else if (document.webkitExitFullscreen) {document.webkitExitFullscreen();}
	else if (document.msExitFullscreen) {document.msExitFullscreen();}
}
function homepage() {window.location.href='../../index.html'}