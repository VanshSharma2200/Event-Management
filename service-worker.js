const CACHE_NAME = 'my-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/styles.css',
  '/script.js',
  '/image/slide-1.jpg',
  '/image/slide-2.jpg',
  '/image/slide-3.jpg',
  '/image/slide-4.jpg',
  '/image/slide-5.jpg',
  '/image/slide-6.jpg',
  '/image/slide-7.jpg',
  '/image/slide-8.jpg',
  '/image/slide-9.jpg',
  '/image/slide-10.jpg',
  '/image/slide-11.jpg',
  '/image/slide-12.jpg',
  '/image/slide-13.jpg'
];

// Install and cache files
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

// Fetch and serve cached content
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});

// Optional: Clean old caches
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((keyList) =>
      Promise.all(
        keyList.map((key) => {
          if (!cacheWhitelist.includes(key)) {
            return caches.delete(key);
          }
        })
      )
    )
  );
});
