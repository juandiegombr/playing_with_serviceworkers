self.addEventListener('install', event => {
  console.log('installed', event)
})
const pikachu = 'https://localhost:3000/pikachu.png'
const raichu = 'https://localhost:3000/raichu.png'
self.addEventListener('fetch', event => {
  console.log('fetch', event.request)
  if (event.request.url === pikachu) {
    event.respondWith(fetch(raichu))
  }
})