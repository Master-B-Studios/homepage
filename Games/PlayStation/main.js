function download(obj) {
  if (obj == 'mb3pwn') {url = 'PS4 - 11.00 Jailbreak/app/MB-3Pwn.apk'}
  else if (obj == 'umtx_pkg') {url = 'PS5 - 05.10 Jailbreak/app/Umtx Offline Exploit.pkg'}
  else if (obj == 'mbps') {url = 'PS5 - 05.10 Jailbreak/app/MB PSender 1.0.apk'}
  else if (obj == 'eta2.0_kstuff') {url = 'PS5 - 05.10 Jailbreak/payloads/etaHEN 2.0b kstuff 5.10.bin'}
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