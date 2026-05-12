function download(obj) {
  if (obj == 'mb3pwn') {url = 'downloads/mb_3pwn.apk'}
  else if (obj == 'mb_payload_sender__') {url = 'downloads/mb_payload_sender_1_0.apk'}
  else if (obj == 'mb_ps_tools________') {url = 'downloads/mb_ps_tools_1_0.apk'}
  else if (obj == 'ps4_debug__________') {url = 'downloads/ps4_debug_1_1_19.bin'}
  else if (obj == 'ps4_goldhen________') {url = 'downloads/ps4_goldhen_2_4_b_18_2.bin'}
  else if (obj == 'ps5_debug__________') {url = 'downloads/ps5_debug_1_0_b_5.bin'}
  else if (obj == 'ps5_etahen_________') {url = 'downloads/ps5_etahen_2_5_b.bin'}
  else if (obj == 'ps5_fake_signin____') {url = 'downloads/ps5_fake_signin_1_1.elf'}
  else if (obj == 'ps5_lapse__________') {url = 'downloads/ps5_lapse_1_0.js'}
  else if (obj == 'ps5_nanodns________') {url = 'downloads/ps5_nanodns_0_2.elf'}
  else if (obj == 'ps5_y2jb_mb_version') {url = 'downloads/ps5_y2jb_update_0_5_mb_version.zip'}
  else if (obj == 'ps5_y2jb_creator___') {url = 'downloads/ps5_y2jb_update_creator.zip'}
  var link = document.createElement("a");
  link.href = url;
  link.download = url.split('/').pop();
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
