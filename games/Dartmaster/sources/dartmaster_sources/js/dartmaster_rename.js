/*
 * DartMaster V 2.0
 *
 * HTML-Source for DartMaster Android-App.
 *
 * Copyright (C) 2018 by Master B. All rights reserved.
 *
 * Special Thanks to Ohno Tomoaki for inventing n01.
 */

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

		$('#title_player_name').text(res.title_player_name);
	}
});

$(document).ready( function() {
	$('#header').show();
	$('#article').show();
	initSetting();
	resize();

	$(window).resize(function() {
		resize();
	});

	$(document).on('keydown', function(e) {
		switch (e.keyCode) {
		case 13:	// Enter
			$('#button_done').click();
			break;
		case 27:	// ESC
			setTimeout(function() {
				$('#button_cancel').click();
			}, 100);
			break;
		}
	});

	$('#button_cancel').click(function() {
		window.location.href = 'stats.html';
	});

	$('#button_done').click(function() {
		dartmaster_data.gameOptions.playerName[0] = $('#p1_name').val();
		dartmaster_data.gameOptions.playerName[1] = $('#p2_name').val();
		dartmaster_data.saveGameOptions();

		dartmaster_data.restoreSetData();
		if (dartmaster_data.gameOptions.com[0] === 0) {
			dartmaster_data.setData.statsData[0].name = $('#p1_name').val();
			if (dartmaster_data.setData.statsData[0].name === '') {
				dartmaster_data.setData.statsData[0].name = 'Player 1';
			}
		}
		if (dartmaster_data.gameOptions.com[1] === 0) {
			dartmaster_data.setData.statsData[1].name = $('#p2_name').val();
			if (dartmaster_data.setData.statsData[1].name === '') {
				dartmaster_data.setData.statsData[1].name = 'Player 2';
			}
		}
		dartmaster_data.saveSetData();

		window.location.href = 'stats.html';
	});
});

function initSetting() {
	dartmaster_data.restoreGameOptions();
	
	$('#p1_name').val(dartmaster_data.gameOptions.playerName[0]);
	$('#p2_name').val(dartmaster_data.gameOptions.playerName[1]);
	
	if (dartmaster_data.gameOptions.com[0] === 1) {
		$('#p1_name').hide();
	}
	if (dartmaster_data.gameOptions.com[1] === 1) {
		$('#p2_name').hide();
	}
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

	var pMargin = windowSize * 0.03;
	$('p').css('margin-bottom', pMargin + 'px');

	var inputPadding = windowSize * 0.015;
	$('input[type="text"]').css('padding', inputPadding + 'px');

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
