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
var editCurrentSet = false;
var resources = {
	en : {
		delete_confirm : "Wirklich alle Daten löschen?",
		add_schedule_msg : "Modus Hinzufügen",
		
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
		$('#button_done').text(res.button_done);

		$('#title_match_list').text(res.title_match_list);
		$('#add_data').text(res.add_data);
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
			$('#button_done').click();
			break;
		}
	});

	$('.edit_button').click(function() {
		saveSetting($(this).attr('scid'));
		window.location.href = 'edit.html';
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
		window.location.href = 'edit.html';
	});

	$('#button_done').click(function() {
		saveSetting("-1");
		if (dartmaster_data.gameOptions.scheduleData.length <= dartmaster_data.gameOptions.currentSet) {
			alert(res.add_schedule_msg);
			return;
		}
		if (editCurrentSet) {
			dartmaster_data.initSet();
		}
		window.location.href = '../dartmaster_t.html' //dartmaster_data.topPage;
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
	dartmaster_data.restoreSetData();
	
	var currentIndex = dartmaster_data.gameOptions.currentSet;
	if (dartmaster_data.setData.legData.length > 1 ||
		dartmaster_data.setData.legData[0].playerData[0].length > 1 || dartmaster_data.setData.legData[0].playerData[1].length > 1) {
		currentIndex++;
		editCurrentSet = false;
	} else {
		editCurrentSet = true;
	}
	
	var i;
	for (i = 0; i < currentIndex; i++) {
		var objTitle = $('#match_list_title').clone(true).appendTo('#user_body_end');
		objTitle.attr('id', '');
		objTitle.find('.match_list_title_td').text(createTitle(dartmaster_data.gameOptions.scheduleData[i]));

		var obj = $('#match_list_item').clone(true).appendTo('#user_body_end');
		obj.attr('id', scheduleId);
		scheduleId++;
		obj.find('.match_list_name1').text(dartmaster_data.gameOptions.scheduleData[i].playerName[0]);
		obj.find('.match_list_name2').text(dartmaster_data.gameOptions.scheduleData[i].playerName[1]);
		obj.find('.match_list_subtitle').text(dartmaster_data.gameOptions.scheduleData[i].subTitle);
		obj.find('.match_list_startscore').text(dartmaster_data.gameOptions.scheduleData[i].startScore);
		obj.find('.match_list_roundlimit').text(dartmaster_data.gameOptions.scheduleData[i].roundLimit);
		obj.find('.match_list_maxround').text(dartmaster_data.gameOptions.scheduleData[i].maxRound);
		obj.find('.match_list_limitleg').text(dartmaster_data.gameOptions.scheduleData[i].limit_leg_count);

		objTitle.css('background-color', '#000000');
		objTitle.find('.edit_button').remove();
		objTitle.find('.delete_button').remove();
		objTitle.find('.up_button').remove();
		objTitle.find('.down_button').remove();
		obj.css('background-color', '#000000');
	}
	for (i = currentIndex; i < dartmaster_data.gameOptions.scheduleData.length; i++) {
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
	createScheduleData(selectId);
	dartmaster_data.saveGameOptions();
}

function createScheduleData(selectId) {
	dartmaster_data.gameOptions.scheduleData = [];
	var index = 0;
	$("#user_body_end").children().each(function(i, elem) {
		if ($(elem).attr('class') === 'match_list_item') {
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

	var addPadding = windowSize * 0.05;
	$('#add_data').css('padding', addPadding + 'px 0');

	var resetPadding = windowSize * 0.05;
	$('#reset_data').css('padding-top', resetPadding + 'px');

	var indent = windowSize * 0.07;
	$('.indent').css('padding-left', indent + 'px');

	var hrMargin = windowSize * 0.05;
	$('hr').css('margin', hrMargin + 'px 0');

	dartmaster_util.headerResize();
}
