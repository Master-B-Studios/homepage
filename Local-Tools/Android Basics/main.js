function download(obj) {
  if (obj == 'tc') {url = 'files/apps/Total Commander 3.5.0.apk'}
  else if (obj == 'tc_smb') {url = 'files/apps/Total Commander SMB-Plugin.apk'}
  else if (obj == 'magisk') {url = 'files/apps/Magisk 27.apk'}
  else if (obj == 'magisk_rec') {url = 'files/apps/Magisk 27.zip'}
  var link = document.createElement("a");
  link.href = url;
  link.download = url.split('/').pop();
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}