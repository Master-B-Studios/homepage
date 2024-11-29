function download(obj) {
  if (obj == 'firmware') {url = 'files/firmware/RU970__SYS_V1.4__APP_V1.4.exe'}
  else if (obj == 'emulator') {url = 'files/emulator/ProntoEmulator.exe'}
  else if (obj == 'skin') {url = 'files/skin/WinPronto.ccf'}
  var link = document.createElement("a");
  link.href = url;
  link.download = url.split('/').pop();
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}