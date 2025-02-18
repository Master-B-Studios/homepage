function download(obj) {
  if (obj == 'no_shortcuts') {url = 'data/Windows 10 Shortcuts Manager.cmd'}
  else if (obj == 'booklet') {url = 'files/booklet/booklet_pronto_script.pdf'}
  else if (obj == 'skin') {url = 'files/skin/MB-Pronto.mxcf'}
  var link = document.createElement("a");
  link.href = url;
  link.download = url.split('/').pop();
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}