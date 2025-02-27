function download(obj) {
  if (obj == 'mb3pwn') {url = 'PS4 - 11.00 Jailbreak/app/MB-3Pwn.apk'}
  var link = document.createElement("a");
  link.href = url;
  link.download = url.split('/').pop();
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}