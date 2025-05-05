self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('church-app').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/manifest.json',
        '/checkin.html',
        '/countdown.html',
        '/facebook.html',
        '/facility-request.html',
        '/give-modal.html',
        '/index.html',
        '/qr.html',
        '/videos.html',
        '/we-are-live.html'
      ]);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});