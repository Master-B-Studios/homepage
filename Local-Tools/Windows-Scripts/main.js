function download(obj) {
  if (obj == 'no_shortcuts') {url = 'data/Windows 10 Shortcuts Manager'}
  else if (obj == 'win_11_context') {url = 'data/Windows 11 Context-Menu Manager.cmd'}
  else if (obj == 'scroll_manager') {url = 'data/WinOnMac Scrolling Manager.cmd'}
  var link = document.createElement("a");
  link.href = url;
  link.download = url.split('/').pop();
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}