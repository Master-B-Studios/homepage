function download(obj) {
  if (obj == 'firmware') {url = 'files/firmware/RU970 Firmware Update 1.4.zip'}
  else if (obj == 'emulator') {url = 'files/emulator/RU970 Emulator.zip'}
  else if (obj == 'skin') {url = 'files/skin/WinPronto.ccf'}
  var link = document.createElement("a");
  link.href = url;
  link.download = url.split('/').pop();
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}