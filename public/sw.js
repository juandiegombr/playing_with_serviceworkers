const baseUrl = location.href.slice(0, 21)
const pikachu = `${baseUrl}/images/pikachu.png`
const raichu = `${baseUrl}/images/raichu.png`

self.addEventListener('install', event => {
  console.log('Installing service worker...')
  event.waitUntil(
    caches.open('fallback-image')
      .then(cache => {
        cache.add(raichu)
      })
  )
})

self.addEventListener('activate', () => {
  console.log('Service worker activated')
})

const returnFallbackImage = (event) => {
  return fetch(event.request.url, {
    mode: 'no-cors'
  }).then((response) => {
    if (!response.ok) {
      console.log('response', response)
      const cacheResponse = caches.match(raichu, {cacheName: 'fallback-image'})
      return cacheResponse
    } else {
      return response
    }
  }).catch(err => {
    console.log(err) 
    return caches.match(raichu, {cacheName: 'fallback-image'})
  })
}

self.addEventListener('fetch', event => {
  console.log('fetch', event.request)
  event.respondWith(returnFallbackImage(event))
})