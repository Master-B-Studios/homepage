function load_document(obj) {file = obj.files[0];if (file && file.type == 'text/csv') {import_csv(file);}}
function import_csv(file) {
	var content = document.getElementById('content');
	var reader = new FileReader();
  reader.addEventListener('load',() => {content.innerHTML = reader.result;transform_content();},false,);
  if (file) {reader.readAsText(file, 'cp1250');}
}
function transform_content() {
  var string = document.getElementById('content').innerHTML;
  var counter = string.length;
  var breaks = string.split('\n').length;
  var splitter = ';';
  var save_content = '';
  save_content += '<IPPhoneDirectory>\n';
  for (var i = 1; i < breaks-1; i++) {
    var string_broken = string.split('\n')[i];
    var semics = string_broken.split(splitter).length;
    save_content += '<DirectoryEntry>\n';
    for (var j = 0; j < semics; j++) {
      if (j == 0) {save_content += '<Name>'+string_broken.split(splitter)[j]+'</Name>\n';}
      if (j == 1) {save_content += '<Telephone>'+string_broken.split(splitter)[j]+'</Telephone>\n';}
      if (j == 2) {save_content += '<Office>'+string_broken.split(splitter)[j]+'</Office>\n';}
      if (j == 3) {save_content += '<Mobile>'+string_broken.split(splitter)[j]+'</Mobile>\n';}
    }
    save_content += '</DirectoryEntry>\n';
  }
  save_content += '</IPPhoneDirectory>\n';

  var link = document.createElement("A");
  var filename = file.name;
  filename = filename.slice(0, -4)+' Global.xml';

  link.setAttribute("href","data:text/xml,"+save_content);
  link.setAttribute("style","display:none");
  link.setAttribute("download",filename);
  document.body.appendChild(link);
  console.log(link.outerHTML);
  link.click();
  document.body.removeChild(link);
  show_conversion_info();
}
function show_conversion_info() {document.getElementById('info').innerHTML = 'Datei konvertiert & Download angefordert...';}
function show_download_info() {document.getElementById('info').innerHTML = 'Download der Vorlage angefordert...';}

function download_csv() {
  var link = document.createElement("A");
  var filename = 'SNOM Telefonbuch-Vorlage.csv';

  var save_content = '';
  save_content = 'Name;Nummer 1;Nummer 2;Nummer 3';

  link.setAttribute("href","data:text/csv,"+save_content);
  link.setAttribute("style","display:none");
  link.setAttribute("download",filename);
  document.body.appendChild(link);
  console.log(link.outerHTML);
  link.click();
  document.body.removeChild(link);
  show_download_info();
}