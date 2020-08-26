let cacheName = "static-cache-v1";
let filesToCache = [
    '/',
    '/index.html',
    '/fallback.html',
    '/test/index.html',
    '/assets/images/marioios.png',
    '/assets/images/mario.png',
    '/assets/css/style.css',
    '/assets/javascript/script.js'
]

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(cacheName).then(function(cache) {
            console.log('[ServiceWorker] Caching app shell');
            return cache.addAll(filesToCache);
        })
    );
    console.log('Service Worker installed successfully')
});

self.addEventListener('activate', function(event) {
    console.log('activate', event)
});

self.addEventListener("fetch", function (event) {
    console.log("fetch", event);
    event.respondWith(
      caches.open(cacheName).then(function (cache) {
        return cache
          .match(event.request)
          .then(function (response) {
            return (
              response ||
              fetch(event.request).then(function (response) {
                cache.put(event.request, response.clone());
                return response;
              })
            );
          })
          .catch(function () {
            return caches.match("/fallback.html");
          });
      })
    );
});