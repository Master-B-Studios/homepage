/*
 * DartMaster V 2.0
 *
 * HTML-Source for DartMaster Android-App.
 *
 * Copyright (C) 2018 by Master B. All rights reserved.
 *
 * Special Thanks to Ohno Tomoaki for inventing n01.
 */

var oldStartScore;
var resources = {
	en : {
	},
};
var res = {};
var lang = 'en';
$(document).ready(function() {
	if (navigator.browserLanguage) {
	    lang = navigator.browserLanguage;
	} else if (navigator.language) {
	    lang = navigator.language;
	}
	if (lang.length > 2) {
		lang = lang.substr(0, 2);
	}
	res = resources[lang];
	if (res === undefined) {
		res = resources['en'];
	} else if (lang !== 'en') {
		$('#header_title').text(res.header_title);
		$('#button_cancel').text(res.button_cancel);
		$('#button_game_on').text(res.button_game_on);

		$('#title_player_name').text(res.title_player_name);
		$('#title_start_score').text(res.title_start_score);

		$('#label_option_p1_com').text(res.label_option_p1_com);
		$('#label_option_p2_com').text(res.label_option_p2_com);

		$('#title_practice').text(res.title_practice);
		$('#label_option_input_left').text(res.label_option_input_left);
		$('#label_option_input_left_com').text(res.label_option_input_left_com);

		$('#title_hadicap').text(res.title_hadicap);
		$('#label_limit_rounds').text(res.label_limit_rounds);

		$('#schedule_button').val(res.schedule_button);
	}
});

$(document).ready( function() {
	$('#header').show();
	$('#contents').show();
	initSetting();
	resize();

	$(window).resize(function() {
		resize();
	});

	$(document).on('keydown', function(e) {
		switch (e.keyCode) {
		case 13:	// Enter
			$('#button_game_on').click();
			break;
		case 27:	// ESC
			setTimeout(function() {
				$('#button_cancel').click();
			}, 100);
			break;
		}
	});

	$('#start_score').on('blur', function(){
		var startScore = $('#start_score').val();
		if (startScore === '') {
			startScore = 501;
		} else {
			startScore = parseInt(startScore, 10);
		}
		if (oldStartScore === startScore) {
			return;
		}
		oldStartScore = startScore;
		
		var rounds;
		switch (startScore) {
		case 301:
			rounds = 10;
			break;
		case 501:
			rounds = 15;
			break;
		case 1001:
			rounds = 30;
			break;
		default:
			rounds = 60;
			break;
		}
		$('#rounds').val(rounds);
	});

	$('#schedule_button').click(function() {
		window.location.href = '../turnier-modus.html';
	});

	$('#menu_button').click(function() {
		window.location.href = '../menu/';
	});

	$('#tips_button').click(function() {
		window.location.href = '../dartmaster_tips/';
	});

	$('#button_cancel').click(function() {
		window.location.href = dartmaster_data.topPage;
	});

	$('#button_game_on').click(function() {
		dartmaster_data.gameOptions.playerName[0] = $('#p1_name').val();
		dartmaster_data.gameOptions.playerName[1] = $('#p2_name').val();
		var startScore = $('#start_score').val();
		if (startScore === '') {
			startScore = 501;
		} else {
			startScore = parseInt(startScore, 10);
			if (startScore <= 1) {
				startScore = 501;
			}
		}
		dartmaster_data.gameOptions.startScore = startScore;
		
		if ($('#limit_rounds').prop('checked')) {
			dartmaster_data.gameOptions.roundLimit = 1;
		} else {
			dartmaster_data.gameOptions.roundLimit = 0;
		}
		var rounds = $('#rounds').val();
		if (rounds === '') {
			rounds = 15;
		} else {
			rounds = parseInt(rounds, 10);
			if (rounds < 0) {
				rounds = 15;
			}
		}
		dartmaster_data.gameOptions.maxRound = rounds;
		
		dartmaster_data.gameOptions.com[0] = ($('#option_p1_com').prop('checked')) ? 1 : 0;
		dartmaster_data.gameOptions.comLevel[0] = parseInt($('#option_p1_com_level').val(), 10);
		
		dartmaster_data.gameOptions.com[1] = ($('#option_p2_com').prop('checked')) ? 1 : 0;
		dartmaster_data.gameOptions.comLevel[1] = parseInt($('#option_p2_com_level').val(), 10);
		
		dartmaster_data.gameOptions.p1_handicap = ($('#p1_handicap_check').prop('checked')) ? 1 : 0;
		var p1_handicap_score = $('#p1_handicap').val();
		if (p1_handicap_score === '') {
			p1_handicap_score = 501;
		} else {
			p1_handicap_score = parseInt(p1_handicap_score, 10);
			if (p1_handicap_score <= 1) {
				p1_handicap_score = 501;
			}
		}
		dartmaster_data.gameOptions.p1_handicap_score = p1_handicap_score;

		dartmaster_data.gameOptions.p2_handicap = ($('#p2_handicap_check').prop('checked')) ? 1 : 0;
		var p2_handicap_score = $('#p2_handicap').val();
		if (p2_handicap_score === '') {
			p2_handicap_score = 501;
		} else {
			p2_handicap_score = parseInt(p2_handicap_score, 10);
			if (p2_handicap_score <= 1) {
				p2_handicap_score = 501;
			}
		}
		dartmaster_data.gameOptions.p2_handicap_score = p2_handicap_score;
		dartmaster_data.saveGameOptions();

		dartmaster_data.options.inputLeft = ($('#option_input_left').prop('checked')) ? 1 : 0;
		dartmaster_data.options.inputLeftCom = ($('#option_input_left_com').prop('checked')) ? 1 : 0;
		dartmaster_data.saveOptions();

		dartmaster_data.initSet();

		window.location.href = dartmaster_data.topPage;
	});
});

function connectText(textid, ischecked) {
	$('#' + textid).prop('disabled', !ischecked);
}

function initSetting() {
	dartmaster_data.restoreGameOptions();
	
	$('#p1_name').val(dartmaster_data.gameOptions.playerName[0]);
	$('#p2_name').val(dartmaster_data.gameOptions.playerName[1]);
	
	$('#start_score').val(dartmaster_data.gameOptions.startScore);
	oldStartScore = dartmaster_data.gameOptions.startScore;
	$('#limit_rounds').prop('checked', (dartmaster_data.gameOptions.roundLimit) ? true : false);
	$('#rounds').val(dartmaster_data.gameOptions.maxRound);
	connectText('rounds', $('#limit_rounds').prop('checked'));
	
	$('#option_p1_com').prop('checked', (dartmaster_data.gameOptions.com[0]) ? true : false);
	$('#option_p1_com_level').val(dartmaster_data.gameOptions.comLevel[0]);
	connectText('option_p1_com_level', $('#option_p1_com').prop('checked'));

	$('#option_p2_com').prop('checked', (dartmaster_data.gameOptions.com[1]) ? true : false);
	$('#option_p2_com_level').val(dartmaster_data.gameOptions.comLevel[1]);
	connectText('option_p2_com_level', $('#option_p2_com').prop('checked'));

	$('#p1_handicap_check').prop('checked', (dartmaster_data.gameOptions.p1_handicap) ? true : false);
	$('#p1_handicap').val(dartmaster_data.gameOptions.p1_handicap_score);
	connectText('p1_handicap', $('#p1_handicap_check').prop('checked'));

	$('#p2_handicap_check').prop('checked', (dartmaster_data.gameOptions.p2_handicap) ? true : false);
	$('#p2_handicap').val(dartmaster_data.gameOptions.p2_handicap_score);
	connectText('p2_handicap', $('#p2_handicap_check').prop('checked'));
	
	dartmaster_data.restoreOptions();
	$('#option_input_left').prop('checked', (dartmaster_data.options.inputLeft === 1) ? true : false);
	$('#option_input_left_com').prop('checked', (dartmaster_data.options.inputLeftCom === 1) ? true : false);
	connectText('option_input_left_com', $('#option_input_left').prop('checked'));
}

var oldWidth = 0;
function resize() {
	if (oldWidth !== 0 && oldWidth === $(window).width()) {
		return;
	}
	oldWidth = $(window).width();
	var windowSize = ($(window).width() < $(window).height()) ? $(window).width() : $(window).height();
	var bodyFont = windowSize * 0.06;
	$('body').css('font-size', bodyFont + 'px');
	$('input').css('font-size', bodyFont + 'px');
	$('select').css('font-size', bodyFont + 'px');

	var pMargin = windowSize * 0.02;
	$('p').css('margin-bottom', pMargin + 'px');

	var checkWidth = windowSize * 0.05;
	$('input[type="checkbox"]').css('width', checkWidth + 'px');
	var checkHeight = windowSize * 0.05;
	$('input[type="checkbox"]').css('height', checkHeight + 'px');

	var inputPadding = windowSize * 0.015;
	$('input[type="text"]').css('padding', inputPadding + 'px');
	$('input[type="number"]').css('padding', inputPadding + 'px');
	$('select').css('padding', inputPadding + 'px');

	var buttonMargin = windowSize * 0.02;
	$('input[type="button"]').css('margin', buttonMargin + 'px 0 ' + (buttonMargin * 2) + 'px 0');
	var buttonPadding = windowSize * 0.02;
	$('input[type="button"]').css('padding', buttonPadding + 'px');

	var topPadding = windowSize * 0.02;
	$('#title_player_name').css('padding-top', topPadding + 'px');

	var detailFont = windowSize * 0.04;
	$('#menu_detail').css('font-size', detailFont + 'px');

	var indent = windowSize * 0.07;
	$('.indent').css('padding-left', indent + 'px');

	var hrMargin = windowSize * 0.05;
	$('hr').css('margin', hrMargin + 'px 0');

	dartmaster_util.headerResize();
	
	if (lang === 'ja') {
		var cancelButtonWidth;
		if ($(window).width() < $(window).height()) {
			cancelButtonWidth = windowSize * 0.32;
		} else {
			cancelButtonWidth = windowSize * 0.27;
		}
		$('#td_button_cancel').css('width', cancelButtonWidth + 'px');
	} else {
		var gameOnButtonWidth = windowSize * 0.27;
		$('#td_button_game_on').css('width', gameOnButtonWidth + 'px');
	}
	var headerHeight = $('#header_table').height();
	$('#header_back').css('height', headerHeight + 'px');
	$('#article').css('padding', headerHeight + 'px 0 0 0');
}
