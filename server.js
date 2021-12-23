const https = require("https")
const {  createReadStream, readFileSync, createWriteStream} = require("fs");
var http = require('http')
const express = require("express");
var app = express()
const bodyParser = require("body-parser")
const cors = require("cors");

const CryptoJS = require('node-cryptojs-aes').CryptoJS;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())


app.get("/", (req, res)=> {
  let data = CryptoJS.AES.encrypt(JSON.stringify({name: "Rasel"}), "pass").toString()
  res.send(data)
})

const options = {  key: readFileSync('localhost-key.pem'),
  cert: readFileSync('localhost.pem')
};


// http.createServer(app).listen(80)
https.createServer(options, app).listen(6600,  ()=> console.log(`https://localhost:6600`))
