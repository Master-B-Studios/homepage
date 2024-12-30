/*
 * DartMaster V 2.0
 *
 * HTML-Source for DartMaster Android-App.
 *
 * Copyright (C) 2018 by Master B. All rights reserved.
 *
 * Special Thanks to Ohno Tomoaki for inventing n01.
 */

var scheduleId = 1;
var resources = {
	en : {
		delete_confirm : "Wirklich Löschen??",
		reset_confirm : "Alles Zurücksetzen?",
		add_schedule_msg : "Turnier-Modus Hinzufügen",
		
		limit_round : " Runden",
		limit_leg_msg1 : "First to ",
		limit_leg_msg2 : " Legs",
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

		$('#button_return').text(res.button_return);
		$('#button_game_on').text(res.button_game_on);

		$('#title_match_title').text(res.title_match_title);
		$('#title_player_name').text(res.title_player_name);
		$('#title_match_list').text(res.title_match_list);
		$('#add_data').text(res.add_data);
		$('#reset_data').text(res.reset_data);
		$('#label_change_first').text(res.label_change_first);
		$('#label_exit_result').text(res.label_exit_result);
	}
});

$(document).ready( function() {
	var sdata = dartmaster_data.getSetData();
	if (sdata !== null) {
		window.location.href = 'turnier-modus.html';
		return;
	}

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
				$('#button_return').click();
			}, 100);
			break;
		}
	});

	$('.edit_button').click(function() {
		saveSetting($(this).attr('scid'));
		window.location.href = dartmaster_data.subPagePath + 'edit.html';
	});

	$('.delete_button').click(function() {
		if (!window.confirm(res.delete_confirm)) {
			return;
		}
		var cur_tr = $(this).parent().parent();
		var cur_tr_next = cur_tr.next();
		
		cur_tr_next.remove();
		cur_tr.remove();

		saveSetting("-1");
	});
	$('.up_button').click(function() {
		var cur_tr = $(this).parent().parent();
		var cur_tr_next = cur_tr.next();

		var target = cur_tr.prev();
		if (target !== null) {
			target = target.prev();
			if (target !== null) {
				cur_tr.insertBefore(target);
				cur_tr_next.insertAfter(cur_tr);
			}
		}
		saveSetting("-1");
	});
	$('.down_button').click(function() {
		var cur_tr = $(this).parent().parent();
		var cur_tr_next = cur_tr.next();

		var target = cur_tr_next.next();
		if (target !== null) {
			target = target.next();
			if (target !== null) {
				cur_tr.insertAfter(target);
				cur_tr_next.insertAfter(cur_tr);
			}
		}
		saveSetting("-1");
	});

	$('#add_data').click(function() {
		var subTitle = "";
		var startScore = 501;
		var objTitle = $('#match_list_title').clone(true).appendTo('#user_body');
		objTitle.attr('id', '');
		objTitle.find('.match_list_title_td').text(subTitle + ' (' + startScore + ')');
		objTitle.find('.edit_button').attr('scid', scheduleId);

		var obj = $('#match_list_item').clone(true).appendTo('#user_body');
		obj.attr('id', scheduleId);
		scheduleId++;
		obj.find('.match_list_subtitle').text(subTitle);
		obj.find('.match_list_startscore').text(startScore);
		obj.find('.match_list_limitleg').text(2);

		saveSetting(obj.attr('id'));
		window.location.href = dartmaster_data.subPagePath + 'edit.html';
	});

	$('#reset_data').click(function() {
		if (!window.confirm(res.reset_confirm)) {
			return;
		}
		saveSetting("-1");
		dartmaster_data.gameOptions.scheduleData = [];
		dartmaster_data.initSchedule();
		dartmaster_data.saveGameOptions();
		window.location.href = 'turnier-modus.html';
	});

	$('#button_return').click(function() {
		window.location.href = '../dartmaster.html' //+ dartmaster_data.subPagePath + 'new.html';
	});

	$('#button_game_on').click(function() {
		saveSetting("-1");
		if (dartmaster_data.gameOptions.scheduleData.length === 0) {
			alert(res.add_schedule_msg);
			return;
		}

		dartmaster_data.initSet();
		window.location.href = 'dartmaster_t.html';
	});
});

function createTitle(data) {
	var title = data.subTitle + ' (' + data.startScore;
	if (data.roundLimit === 1) {
		title = title + ', ' + data.maxRound + res.limit_round;
	}
	title = title + ', ' + res.limit_leg_msg1 + data.limit_leg_count + res.limit_leg_msg2 + ')';
	return title;
}

function initSetting() {
	dartmaster_data.restoreGameOptions();
	
	$('#match_title').val(dartmaster_data.gameOptions.title);

	$('#p1_name').val(dartmaster_data.gameOptions.playerName[0]);
	$('#p2_name').val(dartmaster_data.gameOptions.playerName[1]);

	$('#change_first').prop('checked', (dartmaster_data.gameOptions.changeFirst) ? true : false);
	$('#exit_result').prop('checked', (dartmaster_data.gameOptions.exitResult) ? true : false);

	for (var i = 0; i < dartmaster_data.gameOptions.scheduleData.length; i++) {
		var objTitle = $('#match_list_title').clone(true).appendTo('#user_body');
		objTitle.attr('id', '');
		objTitle.find('.match_list_title_td').text(createTitle(dartmaster_data.gameOptions.scheduleData[i]));
		objTitle.find('.edit_button').attr('scid', scheduleId);

		var obj = $('#match_list_item').clone(true).appendTo('#user_body');
		obj.attr('id', scheduleId);
		scheduleId++;
		obj.find('.match_list_name1').text(dartmaster_data.gameOptions.scheduleData[i].playerName[0]);
		obj.find('.match_list_name2').text(dartmaster_data.gameOptions.scheduleData[i].playerName[1]);
		obj.find('.match_list_subtitle').text(dartmaster_data.gameOptions.scheduleData[i].subTitle);
		obj.find('.match_list_startscore').text(dartmaster_data.gameOptions.scheduleData[i].startScore);
		obj.find('.match_list_roundlimit').text(dartmaster_data.gameOptions.scheduleData[i].roundLimit);
		obj.find('.match_list_maxround').text(dartmaster_data.gameOptions.scheduleData[i].maxRound);
		obj.find('.match_list_limitleg').text(dartmaster_data.gameOptions.scheduleData[i].limit_leg_count);
	}
}

function saveSetting(selectId) {
	dartmaster_data.gameOptions.title = jQuery.trim($('#match_title').val());
	dartmaster_data.gameOptions.playerName[0] = jQuery.trim($('#p1_name').val());
	dartmaster_data.gameOptions.playerName[1] = jQuery.trim($('#p2_name').val());
	dartmaster_data.gameOptions.changeFirst = ($('#change_first').prop('checked')) ? 1 : 0;
	dartmaster_data.gameOptions.exitResult = ($('#exit_result').prop('checked')) ? 1 : 0;
	if (dartmaster_data.gameOptions.playerName[0] === '') {
		dartmaster_data.gameOptions.playerName[0] = 'Spieler 1';
	}
	if (dartmaster_data.gameOptions.playerName[1] === '') {
		dartmaster_data.gameOptions.playerName[1] = 'Spieler 2';
	}
	createScheduleData(selectId);

	dartmaster_data.gameOptions.setData = [];
	dartmaster_data.gameOptions.currentSet = 0;
	dartmaster_data.gameOptions.winSets = [0, 0];
	dartmaster_data.saveGameOptions();
}

function createScheduleData(selectId) {
	dartmaster_data.gameOptions.scheduleData = [];
	var index = 0;
	$("#user_body").children().each(function(i, elem) {
		if ($(elem).attr('class') === 'match_list_item') {
			if (selectId === $(elem).attr('id')) {
				dartmaster_data.gameOptions.scheduleEditIndex = index;
			}
			dartmaster_data.gameOptions.scheduleData.push($.extend(true, {}, dartmaster_data.initScheduleData));
			dartmaster_data.gameOptions.scheduleData[index].subTitle = $(elem).find('.match_list_subtitle').text();
			dartmaster_data.gameOptions.scheduleData[index].startScore = parseInt($(elem).find('.match_list_startscore').text(), 10);
			dartmaster_data.gameOptions.scheduleData[index].roundLimit = parseInt($(elem).find('.match_list_roundlimit').text(), 10);
			dartmaster_data.gameOptions.scheduleData[index].maxRound = parseInt($(elem).find('.match_list_maxround').text(), 10);
			dartmaster_data.gameOptions.scheduleData[index].limit_leg_count = parseInt($(elem).find('.match_list_limitleg').text(), 10);
			dartmaster_data.gameOptions.scheduleData[index].playerName[0] = $(elem).find('.match_list_name1').text();
			dartmaster_data.gameOptions.scheduleData[index].playerName[1] = $(elem).find('.match_list_name2').text();
			index++;
		}
	});
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

	var detailFont = windowSize * 0.04;
	$('#menu_detail').css('font-size', detailFont + 'px');

	var titlePaddingTop = windowSize * 0.01;
	$('.match_list_title_td').css('padding-top', titlePaddingTop + 'px');
	var titlePaddingBottom = windowSize * 0.04;
	$('.match_list_title_td').css('padding-bottom', titlePaddingBottom + 'px');
	var titleFont = windowSize * 0.03;
	$('.match_list_title_td').css('font-size', titleFont + 'px');

	var hPadding = windowSize * 0.05;
	$('.match_list_item td').css('padding-bottom', hPadding + 'px');

	var buttonTdPadding = windowSize * 0.01;
	$('.match_list_button').css('padding-left', buttonTdPadding + 'px');

	var topPadding = windowSize * 0.02;
	$('#title_match_title').css('padding-top', topPadding + 'px');

	var addPadding = windowSize * 0.05;
	$('#add_data').css('padding', addPadding + 'px 0');

	var resetPadding = windowSize * 0.05;
	$('#reset_data').css('padding', resetPadding + 'px 0');
	var resetMargin = windowSize * 0.02;
	$('#reset_data').css('margin-bottom', resetMargin + 'px');

	var indent = windowSize * 0.07;
	$('.indent').css('padding-left', indent + 'px');

	var menuPadding = windowSize * 0.03;
	$('#menu').css('padding-bottom', menuPadding + 'px');

	var hrMargin = windowSize * 0.05;
	$('hr').css('margin', hrMargin + 'px 0');

	dartmaster_util.headerResize();
	
	if (lang === 'ja') {
	} else {
		var gameOnButtonWidth = windowSize * 0.27;
		$('#td_button_game_on').css('width', gameOnButtonWidth + 'px');
	}
	var headerHeight = $('#header_table').height();
	$('#header_back').css('height', headerHeight + 'px');
	$('#article').css('padding', headerHeight + 'px 0 0 0');
}
