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
		$('#button_history').text(res.button_history);
	}
});

$(document).ready( function() {
	$('#header').show();
	$('#article').show();
	init();
	resize();

	$(window).resize(function() {
		resize();
	});

	$(document).on('keydown', function(e) {
		switch (e.keyCode) {
		case 72:	// h
			$('#button_history').click();
			break;
		case 80:	// p
			$('#print_stats').click();
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
	$('#button_history').click(function() {
		window.location.href = 'score.html';
	});
	$('#print_stats').click(function(){
		;
		genscreen();
	});
});

function genscreen() {
	
	var element = document.body;
	var opt = {
		filename:     'Statistik.pdf',
		image:        { type: 'jpeg', quality: 1 },
		html2canvas:  { scale: 2 },
	  };
	  html2pdf().set(opt).from(element).save();
}

function resize() {
	dartmaster_util.headerResize();

	var windowSize = ($(window).width() < $(window).height()) ? $(window).width() : $(window).height();
	var titleFont = windowSize * 0.04;
	$('#title').css('font-size', titleFont + 'px');
	var titlePadding = windowSize * 0.01;
	$('#title').css('padding-bottom', titlePadding + 'px');

	windowSize = ($(window).height() - $('#header_table').height()) / 1.25;
	if (windowSize > $(window).width()) {
		windowSize = $(window).width();
	}

	var bodyFont = windowSize * 0.06;
	$('body').css('font-size', bodyFont + 'px');

	var marginTop = windowSize * 0.01;
	$('.title_table').css('margin-top', marginTop + 'px');

	var padding = windowSize * 0.015;
	$('.stats_table td').css('padding', padding + 'px 0');

	var width = windowSize * 1.8;
	if  (width > $(window).width()) {
		width = $('#article').width();
		$('.name_table').css('width', '100%');
		$('.stats_table').css('width', '100%');
	} else {
		$('.name_table').css('width', width + 'px');
		$('.stats_table').css('width', width + 'px');
	}

	var centerWidth = windowSize * 0.4;
	$('td.center').css('width', centerWidth + 'px');
	$('td.left').css('width', ((width - centerWidth) / 2) + 'px');
	$('td.right').css('width', ((width - centerWidth) / 2) + 'px');
	if  ($(window).height() > $(window).width()) {
		$('#p1_name').css('text-align', 'left');
		$('#p2_name').css('text-align', 'right');
		var nameCenterWidth = windowSize * 0.03;
		$('#p1_name').css('width', (width / 2 - nameCenterWidth) + 'px');
		$('#p2_name').css('width', (width / 2 - nameCenterWidth) + 'px');
		$('td.name_center').css('width', nameCenterWidth + 'px');
	} else {
		$('#p1_name').css('text-align', 'center');
		$('#p2_name').css('text-align', 'center');
		$('#p1_name').css('width', ((width - centerWidth) / 2) + 'px');
		$('#p2_name').css('width', ((width - centerWidth) / 2) + 'px');
		$('td.name_center').css('width', centerWidth + 'px');
	}

	var subtitleFont = windowSize * 0.065;
	$('.subtitle').css('font-size', subtitleFont + 'px');
	var subtitlePadding = windowSize * 0.008;
	$('.subtitle').css('padding', subtitlePadding + 'px 0');
}

function init() {
	dartmaster_data.restoreOptions();
	dartmaster_data.restoreGameOptions();
	dartmaster_data.restoreSetData();
	
	$('#title').text(dartmaster_data.gameOptions.title);
	
	$('#p1_name').text(dartmaster_data.gameOptions.playerName[0] );
	$('#p2_name').text(dartmaster_data.gameOptions.playerName[1] );

	$('#p1_sets').text(dartmaster_data.gameOptions.winSets[0]);
	$('#p2_sets').text(dartmaster_data.gameOptions.winSets[1]);

	$('#p1_legs').text(dartmaster_data.setData.statsData[0].winLegs);
	$('#p2_legs').text(dartmaster_data.setData.statsData[1].winLegs);
	
	var statsTmplate = {
		ton00Count: 0,
		ton40Count: 0,
		ton80Count: 0,
		highOut: 0,
		bestLeg: 0,
		worstLeg: 0,
		allScore: 0,
		allDarts: 0,
		winDarts: 0,
		winCount: 0,
		first9Score: 0,
		first9Darts: 0
	};
	
	var stats1 = $.extend(true, {}, statsTmplate);
	var stats2 = $.extend(true, {}, statsTmplate);
	for (var i = 0; i < dartmaster_data.gameOptions.setData.length; i++) {
		calcPlayer(stats1, 0, dartmaster_data.gameOptions.setData[i]);
		calcPlayer(stats2, 1, dartmaster_data.gameOptions.setData[i]);
	}
	if (dartmaster_data.setData.endMatch !== 1) {
		calcPlayer(stats1, 0, dartmaster_data.setData);
		calcPlayer(stats2, 1, dartmaster_data.setData);
	}

	$('#p1_ton00').text(stats1.ton00Count);
	$('#p1_ton40').text(stats1.ton40Count);
	$('#p1_ton80').text(stats1.ton80Count);
	$('#p1_highout').text(stats1.highOut);
	$('#p1_best').text(stats1.bestLeg);
	$('#p1_worst').text(stats1.worstLeg);
	if (stats1.winCount > 0) {
		var p1darts = stats1.winDarts / stats1.winCount;
		$('#p1_darts').text(p1darts.toFixed(2));
	}
	if (stats1.allDarts > 0) {
		var p1score = stats1.allScore / stats1.allDarts;
		if (dartmaster_data.options.avePPR === 1) {
			p1score *= 3;
		}
		$('#p1_score').text(p1score.toFixed(2));
	}
	if (stats1.first9Darts > 0) {
		var p1first9 = stats1.first9Score / stats1.first9Darts;
		if (dartmaster_data.options.avePPR === 1) {
			p1first9 *= 3;
		}
		$('#p1_first9').text(p1first9.toFixed(2));
	}
	
	$('#p2_ton00').text(stats2.ton00Count);
	$('#p2_ton40').text(stats2.ton40Count);
	$('#p2_ton80').text(stats2.ton80Count);
	$('#p2_highout').text(stats2.highOut);
	$('#p2_best').text(stats2.bestLeg);
	$('#p2_worst').text(stats2.worstLeg);
	if (stats2.winCount > 0) {
		var p2darts = stats2.winDarts / stats2.winCount;
		$('#p2_darts').text(p2darts.toFixed(2));
	}
	if (stats2.allDarts > 0) {
		var p2score = stats2.allScore / stats2.allDarts;
		if (dartmaster_data.options.avePPR === 1) {
			p2score *= 3;
		}
		$('#p2_score').text(p2score.toFixed(2));
	}
	if (stats2.first9Darts > 0) {
		var p2first9 = stats2.first9Score / stats2.first9Darts;
		if (dartmaster_data.options.avePPR === 1) {
			p2first9 *= 3;
		}
		$('#p2_first9').text(p2first9.toFixed(2));
	}
}

function calcPlayer(stats, player, setData) {
	for (var i = 0; i < setData.legData.length; i++) {
		calcLeg(stats, player, setData.legData[i]);
		if (setData.legData[i].endFlag === 0) {
			break;
		}
	}
}

function calcLeg(stats, player, leg) {
	var round;
	if (((leg.first !== leg.currentPlayer && leg.currentPlayer === player) || leg.first === leg.currentPlayer) ||
			leg.middleForDiddle === 1) {
		round = leg.currentRound;
	} else {
		round = leg.currentRound + 1;
	}
	var first9Score = 0;
	var first9Darts = 0;
	for (var i = 1; i <= round; i++) {
		if (leg.playerData[player][i] === undefined) {
			round = i - 1;
			break;
		}
		var score = leg.playerData[player][i].score;
		if (score >=100 && score < 140) {
			stats.ton00Count++;
		}
		if (score >=140 && score < 180) {
			stats.ton40Count++;
		}
		if (score === 180) {
			stats.ton80Count++;
		}
		if (i <= 3) {
			first9Score += score;
			first9Darts += 3;
		}
	}
	if (leg.endFlag === 1 && leg.winner === player) {
		var allScore;
		var allDarts;
		if (leg.middleForDiddle === 0) {
			allScore = leg.playerData[player][0].left;
			allDarts = leg.currentRound * 3 + leg.playerData[player][leg.currentRound + 1].score * -1;
			stats.allScore += allScore;
			stats.allDarts += allDarts;
			if (leg.currentRound + 1 <= 3) {
				first9Score = allScore;
				first9Darts = allDarts;
			}
			var highOut = leg.playerData[player][leg.currentRound].left;
			if (stats.highOut < highOut) {
				stats.highOut = highOut;
			}
			if (highOut >=100 && highOut < 140) {
				stats.ton00Count++;
			}
			if (highOut >=140 && highOut < 180) {
				stats.ton40Count++;
			}
			if (highOut === 180) {
				stats.ton80Count++;
			}
			if (leg.playerData[player][0].left === 501) {
				if (stats.bestLeg === 0 || stats.bestLeg > allDarts) {
					stats.bestLeg = allDarts;
				}
				if (stats.worstLeg < allDarts) {
					stats.worstLeg = allDarts;
				}
				stats.winCount++;
				stats.winDarts += allDarts;
			}
		} else {
			allScore = leg.playerData[player][0].left - leg.playerData[player][round].left;
			allDarts = round * 3;
			stats.allScore += allScore;
			stats.allDarts += allDarts;
			if (leg.playerData[player][0].left === 501) {
				if (stats.bestLeg === 0 || stats.bestLeg > allDarts + 1) {
					stats.bestLeg = allDarts + 1;
				}
				if (stats.worstLeg < allDarts + 1) {
					stats.worstLeg = allDarts + 1;
				}
				stats.winCount++;
				stats.winDarts += allDarts + 1;
			}
		}
	} else {
		stats.allScore += leg.playerData[player][0].left - leg.playerData[player][round].left;
		stats.allDarts += round * 3;
	}
	stats.first9Score += first9Score;
	stats.first9Darts += first9Darts;
}
