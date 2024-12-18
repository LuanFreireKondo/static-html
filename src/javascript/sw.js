const version = '0.0.1'

const CACHE_NAME = version
const URLS_TO_CACHE = ['style.css']

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache')
        return cache.addAll(URLS_TO_CACHE)
      })
  )
})
