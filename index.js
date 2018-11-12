const https = require('https')
const fs = require('fs')
const path = require('path')
const express = require('express')
const app = express()

const SSL_PASSWORD = 'temporal'
const PORT = 3000

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'))
})

const serverOptions = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem'),
  passphrase: SSL_PASSWORD
}
      
https
  .createServer(serverOptions, app)
  .listen(PORT, () => {
    console.log(`Server running on port: ${PORT} 🚀 🚀`)
})


