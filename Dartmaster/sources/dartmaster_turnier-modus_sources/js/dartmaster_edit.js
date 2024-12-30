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
		$('#button_done').text(res.button_done);

		$('#title_match_title').text(res.title_match_title);
		$('#title_player_name').text(res.title_player_name);
		$('#title_start_score').text(res.title_start_score);
		$('#label_limit_rounds').text(res.label_limit_rounds);
		$('#limit_leg_msg1').text(res.limit_leg_msg1);
		$('#limit_leg_msg2').text(res.limit_leg_msg2);
	}
});

$(document).ready( function() {
	$('#header').show();
	$('#article').show();
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

	$('#button_cancel').click(function() {
		if (dartmaster_data.getSetData() !== null) {
			window.location.href = 'modify.html';
		} else {
			window.location.href = '../turnier-modus.html';
		}
	});

	$('#button_done').click(function() {
		dartmaster_data.gameOptions.scheduleData[dartmaster_data.gameOptions.scheduleEditIndex].subTitle = jQuery.trim($('#match_title').val());
		dartmaster_data.gameOptions.scheduleData[dartmaster_data.gameOptions.scheduleEditIndex].playerName[0] = jQuery.trim($('#p1_name').val());
		dartmaster_data.gameOptions.scheduleData[dartmaster_data.gameOptions.scheduleEditIndex].playerName[1] = jQuery.trim($('#p2_name').val());
		var startScore = $('#start_score').val();
		if (startScore === '') {
			startScore = 501;
		} else {
			startScore = parseInt(startScore, 10);
			if (startScore <= 1) {
				startScore = 501;
			}
		}
		dartmaster_data.gameOptions.scheduleData[dartmaster_data.gameOptions.scheduleEditIndex].startScore = startScore;
		
		if ($('#limit_rounds').prop('checked')) {
			dartmaster_data.gameOptions.scheduleData[dartmaster_data.gameOptions.scheduleEditIndex].roundLimit = 1;
		} else {
			dartmaster_data.gameOptions.scheduleData[dartmaster_data.gameOptions.scheduleEditIndex].roundLimit = 0;
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
		dartmaster_data.gameOptions.scheduleData[dartmaster_data.gameOptions.scheduleEditIndex].maxRound = rounds;

		var limit_leg_count = $('#limit_leg_count').val();
		if (limit_leg_count === '') {
			limit_leg_count = 2;
		} else {
			limit_leg_count = parseInt(limit_leg_count, 10);
			if (limit_leg_count <= 0) {
				limit_leg_count = 1;
			}
			if (limit_leg_count > 99) {
				limit_leg_count = 99;
			}
		}
		dartmaster_data.gameOptions.scheduleData[dartmaster_data.gameOptions.scheduleEditIndex].limit_leg_count = limit_leg_count;
		dartmaster_data.saveGameOptions();
		if (dartmaster_data.getSetData() !== null) {
			window.location.href = 'modify.html';
		} else {
			window.location.href = '../turnier-modus.html';
		}
	});
});

function connectText(textid, ischecked) {
	$('#' + textid).prop('disabled', !ischecked);
}

function initSetting() {
	dartmaster_data.restoreGameOptions();
	
	$('#match_title').val(dartmaster_data.gameOptions.scheduleData[dartmaster_data.gameOptions.scheduleEditIndex].subTitle);

	$('#p1_name').val(dartmaster_data.gameOptions.scheduleData[dartmaster_data.gameOptions.scheduleEditIndex].playerName[0]);
	$('#p2_name').val(dartmaster_data.gameOptions.scheduleData[dartmaster_data.gameOptions.scheduleEditIndex].playerName[1]);

	$('#start_score').val(dartmaster_data.gameOptions.scheduleData[dartmaster_data.gameOptions.scheduleEditIndex].startScore);
	oldStartScore = dartmaster_data.gameOptions.scheduleData[dartmaster_data.gameOptions.scheduleEditIndex].startScore;

	$('#limit_rounds').prop('checked', (dartmaster_data.gameOptions.scheduleData[dartmaster_data.gameOptions.scheduleEditIndex].roundLimit) ? true : false);
	$('#rounds').val(dartmaster_data.gameOptions.scheduleData[dartmaster_data.gameOptions.scheduleEditIndex].maxRound);
	connectText('rounds', $('#limit_rounds').prop('checked'));

	$('#limit_leg_count').val(dartmaster_data.gameOptions.scheduleData[dartmaster_data.gameOptions.scheduleEditIndex].limit_leg_count);
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

	var buttonPadding = windowSize * 0.02;
	$('input[type="button"]').css('padding', buttonPadding + 'px');

	var topPadding = windowSize * 0.02;
	$('#title_match_title').css('padding-top', topPadding + 'px');

	var detailFont = windowSize * 0.04;
	$('#menu_detail').css('font-size', detailFont + 'px');

	var indent = windowSize * 0.07;
	$('.indent').css('padding-left', indent + 'px');

	var menuPadding = windowSize * 0.03;
	$('#menu').css('padding-bottom', menuPadding + 'px');

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
	}
	var headerHeight = $('#header_table').height();
	$('#header_back').css('height', headerHeight + 'px');
	$('#article').css('padding', headerHeight + 'px 0 0 0');
}
