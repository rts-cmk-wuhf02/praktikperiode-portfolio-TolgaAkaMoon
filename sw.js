self.addEventListener('install', function(event) {
    console.log('Service Worker installed successfully')
});

self.addEventListener('activate', function(event) {
    console.log('activate', event)
});

self.addEventListener('fetch', function(event) {
    console.log('fetch', event);
});