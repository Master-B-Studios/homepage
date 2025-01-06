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

		$('#label_option_key_show').text(res.label_option_key_show);
		$('#label_option_left_score').text(res.label_option_left_score);
		$('#label_option_round_darts').text(res.label_option_round_darts);
		$('#label_option_circle_ton').text(res.label_option_circle_ton);
		$('#label_option_ppr').text(res.label_option_ppr);

		$('#label_option_input_left').text(res.label_option_input_left);
		$('#label_option_input_left_com').text(res.label_option_input_left_com);

		$('#label_option_small_keypad').text(res.label_option_small_keypad);
		$('#label_option_input_tag').text(res.label_option_input_tag);
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
		window.location.href = dartmaster_data.topPage;
	});

	$('#button_done').click(function() {
		dartmaster_data.options.keyShow = ($('#option_key_show').prop('checked')) ? 1 : 0;
		dartmaster_data.options.leftShow = ($('#option_left_score').prop('checked')) ? 1 : 0;
		dartmaster_data.options.roundDarts = ($('#option_round_darts').prop('checked')) ? 1 : 0;
		dartmaster_data.options.circleTon = ($('#option_circle_ton').prop('checked')) ? 1 : 0;
		dartmaster_data.options.avePPR = ($('#option_option_ppr').prop('checked')) ? 1 : 0;

		dartmaster_data.options.inputLeft = ($('#option_input_left').prop('checked')) ? 1 : 0;
		dartmaster_data.options.inputLeftCom = ($('#option_input_left_com').prop('checked')) ? 1 : 0;

		dartmaster_data.options.smallKeypad = ($('#option_small_keypad').prop('checked')) ? 1 : 0;
		dartmaster_data.options.inputTag = ($('#option_input_tag').prop('checked')) ? 1 : 0;
		dartmaster_data.saveOptions();

		window.location.href = dartmaster_data.topPage;
	});
});

function connectText(textid, ischecked) {
	$('#' + textid).prop('disabled', !ischecked);
}

function initSetting() {
	dartmaster_data.restoreOptions();
	$('#option_key_show').prop('checked', (dartmaster_data.options.keyShow === 1) ? true : false);
	$('#option_left_score').prop('checked', (dartmaster_data.options.leftShow === 1) ? true : false);
	$('#option_round_darts').prop('checked', (dartmaster_data.options.roundDarts === 1) ? true : false);
	$('#option_circle_ton').prop('checked', (dartmaster_data.options.circleTon === 1) ? true : false);
	$('#option_option_ppr').prop('checked', (dartmaster_data.options.avePPR === 1) ? true : false);

	$('#option_input_left').prop('checked', (dartmaster_data.options.inputLeft === 1) ? true : false);
	$('#option_input_left_com').prop('checked', (dartmaster_data.options.inputLeftCom === 1) ? true : false);
	connectText('option_input_left_com', $('#option_input_left').prop('checked'));

	$('#option_small_keypad').prop('checked', (dartmaster_data.options.smallKeypad === 1) ? true : false);
	$('#option_input_tag').prop('checked', (dartmaster_data.options.inputTag === 1) ? true : false);
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

	var checkWidth = windowSize * 0.05;
	$('input[type="checkbox"]').css('width', checkWidth + 'px');
	var checkHeight = windowSize * 0.05;
	$('input[type="checkbox"]').css('height', checkHeight + 'px');

	var indent = windowSize * 0.07;
	$('.indent').css('padding-left', indent + 'px');

	var hrMargin = windowSize * 0.03;
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
