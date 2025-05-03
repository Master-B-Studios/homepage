const CACHE_NAME = 'appcache';
const urlsToCache = [
    '/',
    '/index.html',
    '/offline.html',
    '/custom_host_stuff.js',
    '/int64.js',
    '/logo_01.jpg',
    '/main.css',
    '/main.js',
    '/payload_map.js',
    '/rop_slave.js',
    '/rop.js',
    '/syscalls.js',
    '/umtx2.js'
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