nav_bar = document.getElementById('nav');
whiteboard = document.getElementById('whiteboard_frame');

var fullscreen = 0;
var last_touchpoint = null;
var toolbar = null;
var pen = null;
var loaded_document = null;
var file = null;
var pdf = null;
var page = 1;
var pages = null;

function prepare_whiteboard() {
  whiteboard.width = window.innerWidth;
  whiteboard.height = (window.innerHeight - nav_bar.offsetHeight);
  init();
}

function init() {
	pen = whiteboard.getContext('2d');
	pen.fillStyle = '#333333';
	pen.fillRect(0, 0, whiteboard.width, whiteboard.height);
	pen.strokeStyle = '#dbdbdb';
	pen.lineWidth = 2;
	if (window.PointerEvent) {whiteboard.addEventListener("pointerdown", function() {whiteboard.addEventListener("pointermove", draw, false);}, false);whiteboard.addEventListener("pointerup", end_pointer, false);}
    else {whiteboard.addEventListener("mousedown", function() {whiteboard.addEventListener("mousemove", draw, false);}, false);whiteboard.addEventListener("mouseup", end_pointer, false);}
}

function selection() {
	document.getElementById('selection_color').style.backgroundColor = pen.strokeStyle;
	var unit = '';
	if (localStorage.getItem('theme') == 'theme-widescreen') {unit = 'vw';} else if (localStorage.getItem('theme') == 'theme-portrait') {unit = 'vh';}
	if (pen.lineWidth == '2') {document.getElementById('selection_line_width').style = 'width: 0.3'+unit+';height: 0.3'+unit+';background-color: #dbdbdb;border-radius: 1vw;';}
	else if (pen.lineWidth == '4') {document.getElementById('selection_line_width').style = 'width: 0.4'+unit+';height: 0.4'+unit+';background-color: #dbdbdb;border-radius: 1vw;';}
	else if (pen.lineWidth == '8') {document.getElementById('selection_line_width').style = 'width: 0.6'+unit+';height: 0.6'+unit+';background-color: #dbdbdb;border-radius: 1vw;';}
	else if (pen.lineWidth == '10') {document.getElementById('selection_line_width').style = 'width: 0.8'+unit+';height: 0.8'+unit+';background-color: #dbdbdb;border-radius: 1vw;';}
	else if (pen.lineWidth == '20') {document.getElementById('selection_line_width').style = 'width: 1.0'+unit+';height: 1.0'+unit+';background-color: #dbdbdb;border-radius: 1vw;';}
	else if (pen.lineWidth == '40') {document.getElementById('selection_line_width').style = 'width: 1.2'+unit+';height: 1.2'+unit+';background-color: #dbdbdb;border-radius: 1vw;';}
}
function draw(e) {if (last_touchpoint!=null) {pen.beginPath();pen.moveTo(last_touchpoint.x, last_touchpoint.y-(nav_bar.offsetHeight));pen.lineTo(e.pageX, e.pageY-(nav_bar.offsetHeight));pen.stroke();}last_touchpoint = {x:e.pageX, y:e.pageY};}
function draws(e) {
	if (last_touchpoint != null && localStorage.getItem('theme') == 'theme-widescreen') {pen.beginPath();pen.moveTo(last_touchpoint.x-((window.innerWidth / 100) * 10), last_touchpoint.y);pen.lineTo(e.pageX-((window.innerWidth / 100) * 10), e.pageY);pen.stroke();}
	else if (last_touchpoint != null && localStorage.getItem('theme') == 'theme-portrait') {pen.beginPath();pen.moveTo(last_touchpoint.x, last_touchpoint.y-((window.innerHeight / 100) * 10));pen.lineTo(e.pageX, e.pageY-((window.innerHeight / 100) * 10));pen.stroke();}
	last_touchpoint = {x:e.pageX, y:e.pageY};
}
function end_pointer(e) {whiteboard.removeEventListener("pointermove", draw, false);whiteboard.removeEventListener("mousemove", draw, false);last_touchpoint = null;}

function clear_all() {location.reload();}

function background(obj) {pen.fillStyle = obj;pen.fillRect(0, 0, whiteboard.width, whiteboard.height);}
function color(obj) {pen.strokeStyle = obj;selection();}
function line_width(obj) {pen.lineWidth = obj;selection();}

function save_document(obj) {
	var link = document.createElement("A");
  var filename = 'MB Whiteboard-Download.png';
  var date = new Date().toISOString().substring(0, 10);
  var time = new Date().toISOString().substring(11, 19);
  var day = date.substring(8);var month = date.substring(5, 7);var year = date.substring(0, 4);var second = time.substring(6);var minute = time.substring(3, 5);var hour = ('0' + (parseInt(time.substring(0, 2)) + 2)).slice(-2);
  var date_string = year+'-'+month+'-'+day+' '+hour+'-'+minute+'-'+second;
  link.setAttribute("href",whiteboard.toDataURL("image/png"));
  link.setAttribute("style","display:none");
  link.setAttribute("download",date_string+' '+filename);
  document.body.appendChild(link);
  console.log(link.outerHTML);
  link.click();
  document.body.removeChild(link);
}

function load_document(obj) {
	file = obj.files[0];
	if (file && file.type == 'image/jpeg') {import_img(file);}
	if (file && file.type == 'image/png') {import_img(file);}
	if (file && file.type == 'application/pdf') {import_pdf(file);}
}
function import_img(file) {
	var img = new Image();
	var reader = new FileReader();
    reader.addEventListener('load',() => {
		pen = whiteboard.getContext('2d');
		img.addEventListener('load', () => {pen.drawImage(img, 0, 0);});
		img.src = reader.result;
	},false,);
	if (file) {reader.readAsDataURL(file);}
}
function import_pdf(file) {
	pdfjsLib.disableWorker = true;
	var reader = new FileReader();
	reader.onload = function(e) {
		pdf = new Uint8Array(e.target.result);
		pdfjsLib.getDocument(pdf).promise.then(function(pdf) {
			pages = pdf.numPages;
			pdf.getPage(page).then(function(page) {
				var viewport = null;
				var pdf_height_factor = whiteboard.height / page.getViewport({scale: 1.0}).height;
				var pdf_width_factor = whiteboard.width / page.getViewport({scale: 1.0}).width;

				var height_calc_height = page.getViewport({scale: pdf_height_factor}).height;
				var height_calc_width = page.getViewport({scale: pdf_height_factor}).width;
				
				var width_calc_height = page.getViewport({scale: pdf_width_factor}).height;
				var width_calc_width = page.getViewport({scale: pdf_width_factor}).width;
				
				if (height_calc_height <= whiteboard.height && height_calc_width <= whiteboard.width) {viewport = page.getViewport({scale: pdf_height_factor});}
				else {viewport = page.getViewport({scale: pdf_width_factor});}

				var height_calc_center = (whiteboard.height - viewport.height) / 2;
				var width_calc_center = (whiteboard.width - viewport.width) / 2;
				var transform = [1, 0, 0, 1, width_calc_center, height_calc_center];

				var extracted = {canvasContext: pen, transform: transform, viewport: viewport};
				page.render(extracted);
			});
			pdf_buttons();pdf_pages();
		});
	};
	reader.readAsArrayBuffer(file);
}
function pdf_prev() {page--;pdf_buttons();pdf_pages();import_pdf(file);}
function pdf_next() {page++;pdf_buttons();pdf_pages();import_pdf(file);}

function pdf_buttons() {
	if (pages == 1) {document.getElementById('pdf_prev').disabled = 'disabled';document.getElementById('pdf_prev').style.color = '#000000';document.getElementById('pdf_next').disabled = 'disabled';document.getElementById('pdf_next').style.color = '#000000';}
	if (page >=2 && page != pages) {document.getElementById('pdf_prev').disabled = '';document.getElementById('pdf_prev').style.color = '#dbdbdb';document.getElementById('pdf_next').disabled = '';document.getElementById('pdf_next').style.color = '#dbdbdb';}
  else if (page <= 1 && pages != 1) {document.getElementById('pdf_prev').disabled = 'disabled';document.getElementById('pdf_prev').style.color = '#000000';document.getElementById('pdf_next').disabled = '';document.getElementById('pdf_next').style.color = '#dbdbdb';}
	else if (page == pages && pages != 1) {document.getElementById('pdf_next').disabled = 'disabled';document.getElementById('pdf_next').style.color = '#000000';document.getElementById('pdf_prev').disabled = '';document.getElementById('pdf_prev').style.color = '#dbdbdb';}
}
function pdf_pages() {document.getElementById('pages').innerHTML = 'Seite '+page+' / '+pages;}

function line_stripes() {
	var height = 0;
	var lines = 0;
	if (localStorage.getItem('theme') == 'theme-widescreen') {lines = 16;}
	else if (localStorage.getItem('theme') == 'theme-portrait') {lines = 26;}
	var line_thickness = 0.4;
	var space = parseInt(whiteboard.height / lines);
	pen.fillStyle = '#dbdbdb';
	while (height <= whiteboard.height) {height += space;pen.fillRect(0,height,whiteboard.width,line_thickness);}
	}
function line_crosses() {
	var height = 0;
	var width = 0;
	var lines = 0;
	if (localStorage.getItem('theme') == 'theme-widescreen') {lines = (16 * 2);}
	else if (localStorage.getItem('theme') == 'theme-portrait') {lines = (26 * 2);}
	var line_thickness = 0.4;
	var space = parseInt(whiteboard.height / lines);
	pen.fillStyle = '#dbdbdb';
	while (height <= whiteboard.height) {height += space;pen.fillRect(0,height,whiteboard.width,line_thickness);}
	while (width <= whiteboard.width) {width += space;pen.fillRect(width,0,line_thickness,whiteboard.height);}
}
function set_date() {
  var date = new Date().toISOString().substring(0, 10);
  var time = new Date().toISOString().substring(11, 19);
  var day = date.substring(8);var month = date.substring(5, 7);var year = date.substring(0, 4);var second = time.substring(6);var minute = time.substring(3, 5);var hour = ('0' + (parseInt(time.substring(0, 2)) + 2)).slice(-2);

  //var date = new Date();
  //var day = date.getDate();var month = date.getMonth()+1;var year = date.getFullYear();var second = date.getSeconds().toISOString();var minute = date.getMinutes().toISOString();var hour = date.getHours().toISOString();
}

function fullscreen_toggle(screen) {
  if (fullscreen == 0) {if (screen.requestFullscreen) {screen.requestFullscreen();} else if (screen.msRequestFullscreen) {screen.msRequestFullscreen();} else if (screen.webkitRequestFullscreen) {screen.webkitRequestFullscreen();} fullscreen = 1;}
  if (fullscreen == 1) {if(document.exitFullscreen) {document.exitFullscreen();} else if(document.webkitExitFullscreen) {document.webkitExitFullscreen();} fullscreen = 0;}
}

window.onresize = function() {set_theme();init();selection();}