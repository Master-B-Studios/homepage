const CACHE_NAME = 'appcache';
const urlsToCache = [
    'index.html',
    'offline.html',
    'custom_host_stuff.js',
    'int64.js',
    'logo_01.jpg',
    'main.css',
    'main.js',
    'payload_map.js',
    'rop_slave.js',
    'rop.js',
    'syscalls.js',
    'umtx2.js',
    'offsets/1.00.js',
    'offsets/1.01.js',
    'offsets/1.02.js',
    'offsets/1.05.js',
    'offsets/1.10.js',
    'offsets/1.11.js',
    'offsets/1.12.js',
    'offsets/1.13.js',
    'offsets/1.14.js',
    'offsets/2.00.js',
    'offsets/2.20.js',
    'offsets/2.25.js',
    'offsets/2.26.js',
    'offsets/2.30.js',
    'offsets/2.50.js',
    'offsets/2.70.js',
    'offsets/3.00.js',
    'offsets/3.10.js',
    'offsets/3.20.js',
    'offsets/3.21.js',
    'offsets/4.00.js',
    'offsets/4.02.js',
    'offsets/4.03.js',
    'offsets/4.50.js',
    'offsets/4.51.js',
    'offsets/5.00.js',
    'offsets/5.02.js',
    'offsets/5.10.js',
    'offsets/5.50.js',
    'payloads/byepervisor.elf',
    'payloads/elfldr.elf',
    'payloads/etaHEN_2.1.bin',
    'payloads/etaHEN_2.2B.bin',
    'payloads/ftpsrv.elf',
    'payloads/gdbsrv.elf',
    'payloads/klogsrv.elf',
    'payloads/kstuff.elf',
    'payloads/libhijacker-game-patch.v1.160.elf',
    'payloads/ps5debug_dizz.elf',
    'payloads/ps5debug_v1.0b2.elf',
    'payloads/ps5debug_v1.0b3.elf',
    'payloads/ps5-versions.elf',
    'payloads/rp-get-pin.elf',
    'payloads/shsrv.elf',
    'payloads/spoofer.elf',
    'payloads/websrv.elf',
    'psfree/alert.js',
    'psfree/config.js',
    'psfree/COPYING',
    'psfree/psfree.js',
    'psfree/module/chain.js',
    'psfree/module/int64.js',
    'psfree/module/mem.js',
    'psfree/module/memtools.js',
    'psfree/module/offset.js',
    'psfree/module/rw.js',
    'psfree/module/utils.js'
];

// Install service worker and cache assets
self.addEventListener('install', event => {event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache)));});

// Fetch from cache first, then network
self.addEventListener('fetch', event => {
    event.respondWith(
        fetch(event.request).catch(() => {
            if (event.request.mode === 'navigate') {return caches.match ('offline.html');}
            return caches.match(event.request);
        })
    );
});

// Activate and clean old caches
self.addEventListener('activate', event => {
    const cachelist =  [CACHE_NAME];
    event.waitUntil(caches.keys().then(keys => Promise.all(keys.map(key => {if (!cachelist.includes(key)) {return caches.delete(key);}}))));
});