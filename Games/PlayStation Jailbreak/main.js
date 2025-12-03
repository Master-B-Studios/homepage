function download(obj) {
  if (obj == 'mb3pwn') {url = 'downloads/PS4 MB-3Pwn.apk'}
  else if (obj == 'y2jb_autoloader____') {url = 'downloads/ps5_autoloader.zip'}
  else if (obj == 'y2jb_update________') {url = 'downloads/y2jb_update.zip'}
  else if (obj == 'y2jb_update_creator') {url = 'downloads/Y2JB Update-Creator.zip'}
  else if (obj == 'mb_payload_sender__') {url = 'downloads/MB Payload-Sender.apk'}
  else if (obj == 'etaHEN_____________') {url = 'downloads/PS5 etaHEN 2.4b.bin'}
  else if (obj == 'airPSX_____________') {url = 'downloads/PS5 airPSX 0.19.elf'}
  var link = document.createElement("a");
  link.href = url;
  link.download = url.split('/').pop();
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
