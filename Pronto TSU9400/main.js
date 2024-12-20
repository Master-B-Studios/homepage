function download(obj) {
  if (obj == 'firmware') {url = 'files/firmware/Firmware Update 7.4.22-1.5.20.zip'}
  else if (obj == 'booklet') {url = 'files/booklet/booklet_pronto_script.pdf'}
  else if (obj == 'skin') {url = 'files/skin/MB-Pronto.mxcf'}
  var link = document.createElement("a");
  link.href = url;
  link.download = url.split('/').pop();
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}