const CACHE_NAME = 'patente-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  // Aggiungi qui eventuali altri file se ne hai (es. CSS esterni)
];

// Installazione e Caching
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Recupero dati (Funziona Offline)
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});