const CACHE_NAME = 'version-1'
const urlsToCache = ['index.html', 'offline.html']

/* Install service worker */
// self refers to sw itself
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Open Cache')

      return cache.addAll(urlsToCache)
    })
  )
})

/* Listen for requests */
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then(() => {
      // if fetch() goes into catch(), it is currently offline
      return fetch(event.request).catch(() => caches.match('offline.html'))
    })
  )
})

/* Activate the service worker */
self.addEventListener('activate', (event) => {
  const cacheWhitelist = []
  cacheWhitelist.push(CACHE_NAME)

  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          // Only keep caches in whitelist
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName)
          }
        })
      )
    )
  )
})
