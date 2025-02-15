function download(obj) {
    if (obj == 'mb3pwn') {url = 'files/app/MB-3Pwn.apk'}
    else if (obj == 'booklet') {url = 'files/booklet/booklet_pronto_script.pdf'}
    else if (obj == 'skin') {url = 'files/skin/MB-Pronto.mxcf'}
    var link = document.createElement("a");
    link.href = url;
    link.download = url.split('/').pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }