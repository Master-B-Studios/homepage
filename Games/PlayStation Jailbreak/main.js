function download(obj) {
  if (obj == 'mb3pwn') {url = 'downloads/PS4 MB-3Pwn.apk'}
  else if (obj == 'ps5_jb_05.10') {url = 'downloads/PS5 Jailbreak 05.10 - MBMB00510.pkg'}
  else if (obj == 'psender') {url = 'downloads/MB PSender 1.0.apk'}
  else if (obj == 'eta2.0_kstuff') {url = 'downloads/PS5 etaHEN 2.0b kstuff 5.10.bin'}
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