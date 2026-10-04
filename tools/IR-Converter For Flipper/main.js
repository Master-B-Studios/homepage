var output = '';
var list_number = 0;

function select_format(obj) {
	var box = document.getElementsByClassName('checkbox');
	for (i = 0; i < box.length; i++) {box[i].value = false;box[i].style = 'opacity = 0.5';box[i].style = 'transition: opacity 1s';}
	obj.value = true;obj.style.opacity = '1';
	if (obj.id == 'flipper_nec') {document.getElementById('remote_nec').style.opacity = '1';document.getElementById('remote_nec').value = true;}
	if (obj.id == 'flipper_necext') {document.getElementById('remote_nec').style.opacity = '1';document.getElementById('remote_nec').value = true;}
	if (obj.id == 'flipper_nec2') {document.getElementById('remote_nec2').style.opacity = '1';document.getElementById('remote_nec2').value = true;}
	if (obj.id == 'flipper_rc6') {document.getElementById('remote_rc6').style.opacity = '1';document.getElementById('remote_rc6').value = true;}
	if (obj.id == 'remote_nec') {document.getElementById('flipper_nec').style.opacity = '1';document.getElementById('flipper_nec').value = true;}
	if (obj.id == 'remote_nec2') {document.getElementById('flipper_nec2').style.opacity = '1';document.getElementById('flipper_nec2').value = true;}
	if (obj.id == 'remote_rc6') {document.getElementById('flipper_rc6').style.opacity = '1';document.getElementById('flipper_rc6').value = true;}
	correct_input();shortToCommand();correct_output();
}

function check_onfocus(obj) {
	if (obj.id == 'remote_name' && obj.innerHTML == 'Name Der Fernbedienung') {obj.innerHTML = '';}
	if (obj.id == 'command_name' && obj.innerHTML == 'Name Der Taste') {obj.innerHTML = '';}
}

function check_onblur(obj) {
	if (obj.id == 'flipper_input_phase_1' && obj.innerHTML == '') {obj.innerHTML = '0x02';correct_input();shortToCommand();correct_output();}
	if (obj.id == 'flipper_input_phase_1' && obj.innerHTML != '') {correct_input();shortToCommand();correct_output();}
	if (obj.id == 'flipper_input_phase_2' && obj.innerHTML == '') {obj.innerHTML = '0x04';correct_input();shortToCommand();correct_output();}
	if (obj.id == 'flipper_input_phase_2' && obj.innerHTML != '') {correct_input();shortToCommand();correct_output();}
	if (obj.id == 'remote_input' && obj.innerHTML == '') {obj.innerHTML = 'M@ster_B';commandToShort();correct_output();}
	if (obj.id == 'remote_name' && obj.innerHTML == '') {obj.innerHTML = 'Name Der Fernbedienung';}
	if (obj.id == 'command_name' && obj.innerHTML == '') {obj.innerHTML = 'Name Der Taste';}
}

function correct_input() {
	//document.getElementById('flipper_input_phase_1').innerHTML = document.getElementById('flipper_input_phase_1').innerHTML.toUpperCase();
	//document.getElementById('flipper_input_phase_2').innerHTML = document.getElementById('flipper_input_phase_2').innerHTML.toUpperCase();
	var flipper_code = document.getElementById('flipper_input_phase_1').innerHTML+' '+document.getElementById('flipper_input_phase_2').innerHTML;
	if (document.getElementById('flipper_nec').value == true) {
		var string_part_1 = flipper_code.substr(2,2);
		var string_part_2 = flipper_code.substr(7,2);
		var string_final = string_part_1+'00 + 0000 + '+string_part_2+'00 + 0000';
		document.getElementById('code_field_flipper').innerHTML = string_final;
	}
	if (document.getElementById('flipper_necext').value == true) {
		var string_part_1 = flipper_code.substr(4,2);
		var string_part_2 = flipper_code.substr(2,2);
		var string_part_3 = flipper_code.substr(11,2);
		var string_part_4 = flipper_code.substr(9,2);
		var string_final = string_part_1+string_part_2+' + 0000 + '+string_part_3+string_part_4+' + 0000';
		document.getElementById('code_field_flipper').innerHTML = string_final;
	}
	if (document.getElementById('flipper_nec2').value == true) {
		var string_part_1 = flipper_code.substr(2,2);
		var string_part_2 = flipper_code.substr(7,2);
		var string_final = string_part_1+'00 + 0000 + '+string_part_2+'00 + 0000';
		document.getElementById('code_field_flipper').innerHTML = string_final;
	}
	if (document.getElementById('flipper_rc6').value == true) {
		var string_part_1 = flipper_code.substr(2,2);
		var string_part_2 = flipper_code.substr(7,2);
		var string_final = string_part_1+'00 + 0000 + '+string_part_2+'00 + 0000';
		document.getElementById('code_field_flipper').innerHTML = string_final;
	}
}
function correct_output() {
	var phase_1 = document.getElementById('flipper_input_phase_1').innerHTML;
	var phase_2 = document.getElementById('flipper_input_phase_2').innerHTML;
	var string_1 = document.getElementById('code_field_flipper').innerHTML.toUpperCase().replace(/ /g,'');
	var string_2 = document.getElementById('remote_input').innerHTML.toUpperCase().replace(/ /g,'');
	document.getElementById('code_field_flipper').innerHTML = string_1;
	document.getElementById('remote_input').innerHTML = string_2;
	if (document.getElementById('flipper_nec').value == true && phase_1.length == 4 && phase_2.length == 4) {var out_string = string_2.substr(0,4)+string_2.substr(18,4);document.getElementById('remote_input').innerHTML = out_string;}
	else if (document.getElementById('flipper_necext').value == true && phase_1.length == 6 && phase_2.length == 6) {var out_string = string_2.substr(4,2)+string_2.substr(18,4);document.getElementById('remote_input').innerHTML = out_string;}
	else if (document.getElementById('flipper_nec2').value == true && phase_1.length == 4 && phase_2.length == 4) {var out_string = string_2.substr(0,2)+string_2.substr(0,2)+string_2.substr(18,4);document.getElementById('remote_input').innerHTML = out_string;}
	else if (document.getElementById('flipper_rc6').value == true && phase_1.length == 4 && phase_2.length == 4) {var out_string = string_1.substr(0,2)+string_1.substr(10,2);document.getElementById('remote_input').innerHTML = out_string;}

	else {document.getElementById('remote_input').innerHTML = 'Input Falsch';}
}

function getField(name) {return document.getElementById(name).innerHTML;}
function setField(name, val) {if (typeof val === 'undefined') {document.getElementById(name).innerHTML = '';} else {document.getElementById(name).innerHTML = val;}}
function shortToCommand() {let short = stripHex(getField('code_field_flipper'),4);setField('code_field_flipper', formatShort(short, 0, 4));if (short == '') {return}let hex = getCommandFromShort(short);output += hex;setField('remote_input', hex);}
function formatShort(str, space, plus) {if (!str) {return ''};let i, formated = '';str = str.replace(/[+]| /g, '');for (i in str) {if (i > 0) {if (plus && !(i % plus)) {formated += ' + ';} else if (space && !(i % space)) {formated += ' ';}} formated += str.charAt(i);} return formated;}
function getCommandFromShort(short) {let command = '';while (short.length > 3) {command += necPair(short.slice(0,4));short = short.slice(4);}command = formatShort(command, 4, 8);if(short) {command += ' (+)';output += 'Bytes quantity seems invalid - displaying partial conversion\n';}return command;}
function commandToShort() {let command = getField('remote_input');setField('code_field_flipper', getShortFromCommand(command, true));}
function stripHex(string, min) {string = string.replace(/[+,;\s/-]|/g, '');string = string.replace("0x", "");if (/^([0-9A-Fa-f/)]+)$/.test(string)) {if (string.length < min) {string = string.padStart(min,'0');} return string};return '';}
function necPair(hex) {let pronto = '';let device = toLsb(parseInt(hex.slice(0,2), 16));let functn = toLsb(parseInt(hex.slice(2,4), 16));pronto += device.toString(16).padStart(2, '0');pronto += invert(device).toString(16).padStart(2, '0');pronto += ' ';pronto += functn.toString(16).padStart(2, '0');pronto += invert(functn).toString(16).padStart(2, '0');return pronto;}
function necDepair(hex) {let byte1 = parseInt(hex.slice(0,2), 16);let byte2 = parseInt(hex.slice(2,4), 16);if (byte1 == invert(byte2)) {return toLsb(byte1).toString(16).padStart(2, '0');} else {return ' (' + hex + ') ';}}
function toLsb(byte) {let lsb = 128 * (byte & 1);lsb += 64 * ((byte & 2) != 0);lsb += 32 * ((byte & 4) != 0);lsb += 16 * ((byte & 8) != 0);lsb += 8 * ((byte & 16) != 0);lsb += 4 * ((byte & 32) != 0);lsb += 2 * ((byte & 64) != 0);lsb += 1 * ((byte & 128) != 0);return lsb;}
function invert(byte) {return byte ^ 255;}
function getShortFromCommand(hex, opt) {let errMsg = '';let err1 = ', no pairing found for values in parenthesis. ';let err2 = ' (partial conversion)';hex = stripHex(hex, 4);if (hex != '') {setField('remote_input', formatShort(hex, 4, 8));let short = '';while (hex.length > 3) {short += necDepair(hex.slice(0,4));hex = hex.slice(4);} if (short.includes('(')) {errMsg = err1};if (hex) {errMsg += err2};if (errMsg != '') {if (opt) {info('= ' + short + errMsg)};return '';} return formatShort(short, 0, 4);}}

function clipboard(obj) {navigator.clipboard.writeText(document.getElementById(obj).innerHTML);}

function add_remote() {
	var codec = '';
	if (document.getElementById('remote_nec').value == true) {codec = 'NEC';};
	if (document.getElementById('remote_nec2').value == true) {codec = 'NECx2';};
	if (document.getElementById('remote_rc6').value == true) {codec = 'RC6';};
	var command_name = document.getElementById('command_name').innerHTML;
	var remote_input = document.getElementById('remote_input').innerHTML;
	document.getElementById('remote_collection').innerHTML +=
	'<tr class="tr_ir_list">'+
	'<td class="'+list_number+'">'+list_number+'</td>'+
	'<td class="'+list_number+'">'+command_name+'</td>'+
	'<td class="'+list_number+'">'+remote_input+'</td>'+
	'<td class="'+list_number+'">'+codec+'</td>'+
	'</tr>';
	list_number +=1;
	document.getElementById('list_icon').style = 'visbility: ""';
}
function add_remote_empty() {
	var codec = '';
	if (document.getElementById('remote_nec').value == true) {codec = 'NEC';};
	if (document.getElementById('remote_nec2').value == true) {codec = 'NECx2';};
	if (document.getElementById('remote_rc6').value == true) {codec = 'RC6';};
	var command_name = 'EMPTY_COMMAND_LABEL_FLAG';
	var remote_input = 'undefined';
	document.getElementById('remote_collection').innerHTML +=
	'<tr class="tr_ir_list">'+
	'<td class="'+list_number+'">'+list_number+'</td>'+
	'<td class="'+list_number+'">'+command_name+'</td>'+
	'<td class="'+list_number+'">'+remote_input+'</td>'+
	'<td class="'+list_number+'">'+codec+'</td>'+
	'</tr>';
	list_number +=1;
	document.getElementById('list_icon').style = 'visbility: ""';
}

function export_list() {
	var codec = '';
	if (document.getElementById('remote_nec').value == true) {codec = 'NEC;';};
	if (document.getElementById('remote_nec2').value == true) {codec = 'NECx2;';};
	if (document.getElementById('remote_rc6').value == true) {codec = 'RC6;';};
	var remote_name = document.getElementById('remote_name').innerHTML;
	
	var to_copy = '';
	
	for (i = 0; i < list_number; i++) {
		var subclasses = document.getElementsByClassName([i]);
		var number = subclasses[0].innerHTML+';';
		var command_name = subclasses[1].innerHTML+';';
		var remote_input = subclasses[2].innerHTML+';';
		var something = 'false;';
		var color = 'Default;';
		var columns = '3';
		var end_of_line = '\n';

		to_copy += number+remote_name+';'+command_name+remote_input+number+something+codec+color+columns+end_of_line;
	}
	document.getElementById('code_field_output').innerHTML = to_copy;

    var link = document.createElement("A");
    var filename = remote_name+'.csv';

    link.setAttribute("href","data:text/xml,"+to_copy);
    link.setAttribute("style","display:none");
    link.setAttribute("download",filename);
    document.body.appendChild(link);
    console.log(link.outerHTML);
    link.click();
    document.body.removeChild(link);
}

function check_key(obj) {
	if (event.key == "Enter" && obj.id == 'flipper_input_phase_1') {event.preventDefault();check_onblur(obj);}
	if (event.key == "Enter" && obj.id == 'flipper_input_phase_2') {event.preventDefault();check_onblur(obj);}
	//if (event.key == "Enter" && obj.id == 'remote_input') {add_remote();}
}