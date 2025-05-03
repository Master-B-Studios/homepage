function download(obj) {
  if (obj == 'mb3pwn') {url = 'downloads/PS4 MB-3Pwn.apk'}
  else if (obj == 'ps5_jb_05.10') {url = 'downloads/PS5 Jailbreak 05.10 - MBMB00510.pkg'}
  else if (obj == 'psender') {url = 'downloads/MB PSender 1.0.apk'}
  else if (obj == 'etaHEN') {url = 'downloads/PS5 etaHEN 2.1.bin'}
  else if (obj == 'airPSX') {url = 'downloads/PS5 airPSX 0.13.plugin'}
  var link = document.createElement("a");
  link.href = url;
  link.download = url.split('/').pop();
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function call_jailbreak_0510() {
  window.location.href = 'PS5 - 05.10 Jailbreak/index.html'
}