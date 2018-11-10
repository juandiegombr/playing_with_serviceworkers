
# Playing with ServiceWorkers
App built with Node and Express

## Configure

### Create a SSL certificate

```
openssl req -x509 -newkey rsa:2048 -keyout key.pem -out cert.pem -days 30

// Insert a password and fill the certificate fields.
// NOTE: In Common Name field, you have to type 'localhost' to development mode.
// On index.js modify SSL_PASSWORD. Put your password.

```
# Open a new instance of Chrome to allow the serviceWorker installation

```
// On a new terminal

/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --user-data-dir=/tmp/foo --ignore-certificate-errors --unsafely-treat-insecure-origin-as-secure=https://localhost:3000
```


## Start the server

```
yarn serve

// or

npm serve
```