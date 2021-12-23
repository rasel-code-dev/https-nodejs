const https = require("https")
const {  createReadStream, readFileSync, createWriteStream} = require("fs");
var http = require('http')
const express = require("express");
var app = express()
const path = require("path");
const bodyParser = require("body-parser")
const cors = require("cors");
const buffer = require("buffer");
const Stream = require("stream");
const { createGzip } = require('zlib');
const { pipeline } = require('stream');

const NodeRSA = require("node-rsa")


// app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())


app.get("/", (req, res)=> {
  
  const key = new NodeRSA(`-----BEGIN PRIVATE KEY-----
  MIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQC80Ng1tTCxRht6
  q9PVY6WMX907CuGFEC3aWNFipJgOXofCKCtkEavfHzJDQGfMnJbfgFqkiQHCj0gM
  zVlgmqua1QGoxaUUs5CDrpIEZyjDCePqBzIVfQ3U+DyhYIT1vDJRpF4QGS95xjKN
  H6ULvQJdmu8YiYnMNa1LDM4eTedBFqHDeELDToKj6wZzUv3LvnZDTQCbEgMxJ1XU
  VH33qVU/3nYMro9ai5jB/WnJ3KZBfAB7AYFD//gCNXGj1ax1DmSgEBEv/Svkmq2H
  KYRqrkyMmnG9CMZwuT8ggChlhyA+n0hYz5za9R+w3Lubiagi0V3vQ+EbX2GsJxuB
  EO3n/7SfAgMBAAECggEAfSZ0WMz7NFVCu4GOzB7bSPr1mT/yEQ+TROmgB6EPRF71
  3wRfFln8MMzttNPIuT+FZSkfa3WAXCQ6Xnnx5u0+F0debS5r6BfJDu8zy4VQ6E3y
  6ljQopucAnBzR4fBOVv/gkvPKR54cF+lfBLgg7JJEiAyoHHxixB9B4S6Ti3WvTWO
  PacPue7dt2xp0OWcD18RL67wUq8+3h6xAQeNyn44YdIxjcrCZys7hTYFdl+UzCTp
  /TSp7YlyC8HCdspJaGRcAYerRFZXolKI3mYz234dCJ6VVMlwQJaZCYLDNqFGAZwN
  U9LfgTGW6MAXnRloP2LY0fhdDVL6O3mWqvXev0rSIQKBgQDRPg3vsV2Oha0xFCdK
  1JObTWwZdiPmT/ZjRvfMgoLYSvpuss3Xl4UTVLDTo/x2jiIT37opAUezIlKwaxhg
  lWlqubel/3a7nZ04KX0/htXO4vyTRb6CfSv9jbUs6APFSWF3So5SMj3xJtFvSu9M
  HL5YBzbj1NYaORZ54s0Q3HmBkQKBgQDnAkN5NjGF27eKe8Y9atvDfqZmXZjSR6Mt
  T20GTzQDltwBdTWNEKwRAfX98dfktzCEWNtraakhra6D220RxfNwAKq4W06cfzMX
  qxrYD1Ikw20AeuRsNuJE/y2b1uBmtb8ZSnXFDRiP+7nuyWX0OdKwuzmdC5pUwoOO
  X5AYZUy7LwKBgAZEcJBsZJv/PwfITcD9CwrMz98XXc3pOT0SBBwZEKg/3q5wJqA9
  hpvknoNIVyiJ61VjDyVpR2eDMKzeGFXUQ9sRgwGy3DCUcQAcpgbAGClhPSWAIkuw
  SiAHHZUhwfMn1oaHMioeHSLbAczulqpV9hGW7br3Rg51BUpTU8ccg3sxAoGAA+xU
  6wURmD1gA5kQh9B9xPcsqkZipweSbN2Rc2766iiwudGcxDWJRoyq+dIWoYq+5zB/
  IXbc6XaCpTifxJKBDODmBVV/o0bBvmAoh4zTD07GViDAKlpQQ221/5SJoRTrFund
  0Cflx+Q1hymicqBcxKWZV+Jvj4ryIwPadZ+ayv8CgYAJ2alXOCIaMzuOHsQyq1b7
  8TM18gRKy9RZj/pwH8vOA3X4Zwatu1QTP7t5cDKnA/qf1QLFgrOv97r+uXA4D10i
  s7P2/A+k9gM40HVfB7q5UTmbw72IHWS7zx86DkqvFKJAATjF8r8aE/Do0eV6ynsB
  BAoJYnFaTySdpUcahspdxg==
  -----END PRIVATE KEY-----
    `);
  const data = { hello: 'world' };
  const encrypted = key.encrypt(JSON.stringify(data), 'base64');
  console.log('ENCRYPTED:');
  res.json({
    status: 'OK',
    data: encrypted
  });
})

const options = {  key: readFileSync('localhost-key.pem'),
  cert: readFileSync('localhost.pem')
};


// http.createServer(app).listen(80)
https.createServer(options, app).listen(6600,  ()=> console.log(`https://localhost:6600`))



// app.listen = function () {
//   var server = http.createServer(this)
//   return server.listen.apply(server, arguments)
// }


// https.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.write('Hey there, your HTTPS Server is Live!');
//   res.end();
// }).listen(port, () => {
//
//   console.log(`App running on Port: ${port}`);
//
// });