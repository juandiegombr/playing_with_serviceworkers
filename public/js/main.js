
const button = document.getElementById("break-link")
const pikachu = document.getElementById("pikachu")
let isBroken = false
button.addEventListener("click", function(){
  console.log('click')
  if (isBroken) {
    isBroken = false
    pikachu.src = '/images/pikachu.png'
  } else {
    isBroken = true
    pikachu.src = '/images/_pikachu.png'
  }
})

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/sw.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }).catch(function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}