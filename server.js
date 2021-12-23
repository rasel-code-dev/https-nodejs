const https = require("https")
const {   readFileSync } = require("fs");
const express = require("express");
var app = express()
const bodyParser = require("body-parser")
const cors = require("cors");
const crypto = require('crypto');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())


app.get("/", (req, res)=> {

  const bigData = [
    {title: "dummy post data", createdAt: Date.now(), description: "some dummy description ", id: 234324},
    {title: "dummy post data", createdAt: Date.now(), description: "some dummy description ", id: 234324},
    {title: "dummy post data", createdAt: Date.now(), description: "some dummy description ", id: 234324},
    {title: "dummy post data", createdAt: Date.now(), description: "some dummy description ", id: 234324},
    {title: "dummy post data", createdAt: Date.now(), description: "some dummy description ", id: 234324},
    {title: "dummy post data", createdAt: Date.now(), description: "some dummy description ", id: 234324},
    {title: "dummy post data", createdAt: Date.now(), description: "some dummy description ", id: 234324},
    {title: "dummy post data", createdAt: Date.now(), description: "some dummy description ", id: 234324},
    {title: "dummy post data", createdAt: Date.now(), description: "some dummy description ", id: 234324},
    {title: "dummy post data", createdAt: Date.now(), description: "some dummy description ", id: 234324},
    {title: "dummy post data", createdAt: Date.now(), description: "some dummy description ", id: 234324},
    {title: "dummy post data", createdAt: Date.now(), description: "some dummy description ", id: 234324},
    {title: "dummy post data", createdAt: Date.now(), description: "some dummy description ", id: 234324},
    {title: "dummy post data", createdAt: Date.now(), description: "some dummy description ", id: 234324},
    {title: "dummy post data", createdAt: Date.now(), description: "some dummy description ", id: 234324},
    {title: "dummy post data", createdAt: Date.now(), description: "some dummy description ", id: 234324},
    {title: "dummy post data", createdAt: Date.now(), description: "some dummy description ", id: 234324},
    {title: "dummy post data", createdAt: Date.now(), description: "some dummy description ", id: 234324},
    {title: "dummy post data", createdAt: Date.now(), description: "some dummy description ", id: 234324},
    {title: "dummy post data", createdAt: Date.now(), description: "some dummy description ", id: 234324},
    {title: "dummy post data", createdAt: Date.now(), description: "some dummy description ", id: 234324},
    {title: "dummy post data", createdAt: Date.now(), description: "some dummy description ", id: 234324},
    {title: "dummy post data", createdAt: Date.now(), description: "some dummy description ", id: 234324},
    {title: "dummy post data", createdAt: Date.now(), description: "some dummy description ", id: 234324},
    {title: "dummy post data", createdAt: Date.now(), description: "some dummy description ", id: 234324},
    {title: "dummy post data", createdAt: Date.now(), description: "some dummy description ", id: 234324},
    {title: "dummy post data", createdAt: Date.now(), description: "some dummy description ", id: 234324},
    {title: "dummy post data", createdAt: Date.now(), description: "some dummy description ", id: 234324},
    {title: "dummy post data", createdAt: Date.now(), description: "some dummy description ", id: 234324},
    {title: "dummy post data", createdAt: Date.now(), description: "some dummy description ", id: 234324},
    {title: "dummy post data", createdAt: Date.now(), description: "some dummy description ", id: 234324},
    {title: "dummy post data", createdAt: Date.now(), description: "some dummy description ", id: 234324},
    {title: "dummy post data", createdAt: Date.now(), description: "some dummy description ", id: 234324},
    {title: "dummy post data", createdAt: Date.now(), description: "some dummy description ", id: 234324},
    {title: "dummy post data", createdAt: Date.now(), description: "some dummy description ", id: 234324},
    {title: "dummy post data", createdAt: Date.now(), description: "some dummy description ", id: 234324},
    {title: "dummy post data", createdAt: Date.now(), description: "some dummy description ", id: 234324},
    {title: "dummy post data", createdAt: Date.now(), description: "some dummy description ", id: 234324},
    {title: "dummy post data", createdAt: Date.now(), description: "some dummy description ", id: 234324},
    {title: "dummy post data", createdAt: Date.now(), description: "some dummy description ", id: 234324},
    {title: "dummy post data", createdAt: Date.now(), description: "some dummy description ", id: 234324},
    {title: "dummy post data", createdAt: Date.now(), description: "some dummy description ", id: 234324},
    {title: "dummy post data", createdAt: Date.now(), description: "some dummy description ", id: 234324},
    {title: "dummy post data", createdAt: Date.now(), description: "some dummy description ", id: 234324},
    {title: "dummy post data", createdAt: Date.now(), description: "some dummy description ", id: 234324},
    {title: "dummy post data", createdAt: Date.now(), description: "some dummy description ", id: 234324},
    {title: "dummy post data", createdAt: Date.now(), description: "some dummy description ", id: 234324},
    {title: "dummy post data", createdAt: Date.now(), description: "some dummy description ", id: 234324},
    {title: "dummy post data", createdAt: Date.now(), description: "some dummy description ", id: 234324},
    {title: "dummy post data", createdAt: Date.now(), description: "some dummy description ", id: 234324},
    {title: "dummy post data", createdAt: Date.now(), description: "some dummy description ", id: 234324},
    {title: "dummy post data", createdAt: Date.now(), description: "some dummy description ", id: 234324},
    {title: "dummy post data", createdAt: Date.now(), description: "some dummy description ", id: 234324},
    {title: "dummy post data", createdAt: Date.now(), description: "some dummy description ", id: 234324},
    {title: "dummy post data", createdAt: Date.now(), description: "some dummy description ", id: 234324},
    {title: "dummy post data", createdAt: Date.now(), description: "some dummy description ", id: 234324},
    {title: "dummy post data", createdAt: Date.now(), description: "some dummy description ", id: 234324},
    {title: "dummy post data", createdAt: Date.now(), description: "some dummy description ", id: 234324},
    {title: "dummy post data", createdAt: Date.now(), description: "some dummy description ", id: 234324},
    {title: "dummy post data", createdAt: Date.now(), description: "some dummy description ", id: 234324},
    {title: "dummy post data", createdAt: Date.now(), description: "some dummy description ", id: 234324},
    {title: "dummy post data", createdAt: Date.now(), description: "some dummy description ", id: 234324},
    {title: "dummy post data", createdAt: Date.now(), description: "some dummy description ", id: 234324},
    {title: "dummy post data", createdAt: Date.now(), description: "some dummy description ", id: 234324},
    {title: "dummy post data", createdAt: Date.now(), description: "some dummy description ", id: 234324},
    {title: "dummy post data", createdAt: Date.now(), description: "some dummy description ", id: 234324},
    {title: "dummy post data", createdAt: Date.now(), description: "some dummy description ", id: 234324},
    {title: "dummy post data", createdAt: Date.now(), description: "some dummy description ", id: 234324},
    {title: "dummy post data", createdAt: Date.now(), description: "some dummy description ", id: 234324},
    {title: "dummy post data", createdAt: Date.now(), description: "some dummy description ", id: 234324},
    {title: "dummy post data", createdAt: Date.now(), description: "some dummy description ", id: 234324},
    {title: "dummy post data", createdAt: Date.now(), description: "some dummy description ", id: 234324},
    {title: "dummy post data", createdAt: Date.now(), description: "some dummy description ", id: 234324},
    {title: "dummy post data", createdAt: Date.now(), description: "some dummy description ", id: 234324},
    {title: "dummy post data", createdAt: Date.now(), description: "some dummy description ", id: 234324},
    {title: "dummy post data", createdAt: Date.now(), description: "some dummy description ", id: 234324},
    {title: "dummy post data", createdAt: Date.now(), description: "some dummy description ", id: 234324},
    {title: "dummy post data", createdAt: Date.now(), description: "some dummy description ", id: 234324},
    {title: "dummy post data", createdAt: Date.now(), description: "some dummy description ", id: 234324},
    {title: "dummy post data", createdAt: Date.now(), description: "some dummy description ", id: 234324},
    {title: "dummy post data", createdAt: Date.now(), description: "some dummy description ", id: 234324},
    {title: "dummy post data", createdAt: Date.now(), description: "some dummy description ", id: 234324},
    {title: "dummy post data", createdAt: Date.now(), description: "some dummy description ", id: 234324},
    {title: "dummy post data", createdAt: Date.now(), description: "some dummy description ", id: 234324},
    {title: "dummy post data", createdAt: Date.now(), description: "some dummy description ", id: 234324},
    {title: "dummy post data", createdAt: Date.now(), description: "some dummy description ", id: 234324},
    {title: "dummy post data", createdAt: Date.now(), description: "some dummy description ", id: 234324},
    {title: "dummy post data", createdAt: Date.now(), description: "some dummy description ", id: 234324},
    {title: "dummy post data", createdAt: Date.now(), description: "some dummy description ", id: 234324},
    {title: "dummy post data", createdAt: Date.now(), description: "some dummy description ", id: 234324},
    {title: "dummy post data", createdAt: Date.now(), description: "some dummy description ", id: 234324},
    {title: "dummy post data", createdAt: Date.now(), description: "some dummy description ", id: 234324},
    {title: "dummy post data", createdAt: Date.now(), description: "some dummy description ", id: 234324},
    {title: "dummy post data", createdAt: Date.now(), description: "some dummy description ", id: 234324},
    {title: "dummy post data", createdAt: Date.now(), description: "some dummy description ", id: 234324},
    {title: "dummy post data", createdAt: Date.now(), description: "some dummy description ", id: 234324},
    {title: "dummy post data", createdAt: Date.now(), description: "some dummy description ", id: 234324},
    {title: "dummy post data", createdAt: Date.now(), description: "some dummy description ", id: 234324},
    {title: "dummy post data", createdAt: Date.now(), description: "some dummy description ", id: 234324},
    {title: "dummy post data", createdAt: Date.now(), description: "some dummy description ", id: 234324},
    {title: "dummy post data", createdAt: Date.now(), description: "some dummy description ", id: 234324},
    {title: "dummy post data", createdAt: Date.now(), description: "some dummy description ", id: 234324},
    {title: "dummy post data", createdAt: Date.now(), description: "some dummy description ", id: 234324},
    {title: "dummy post data", createdAt: Date.now(), description: "some dummy description ", id: 234324},
    {title: "dummy post data", createdAt: Date.now(), description: "some dummy description ", id: 234324},
    {title: "dummy post data", createdAt: Date.now(), description: "some dummy description ", id: 234324},
  ]
  
  //Node JS example
  const pass = "H98zM6i/55yNJfkFsbu0HrzlFo17FtR9";
  
  const iv = pass.slice(0, 16);
  
  const cipher = crypto.createCipheriv('aes256', pass, iv);
  let result = cipher.update(JSON.stringify(bigData),'utf8',  "base64");
  result += cipher.final("base64");

  res.setHeader("Content-Type", "plain/text")
  res.status(200).send(result)
  
})

const options = {  key: readFileSync('localhost-key.pem'),
  cert: readFileSync('localhost.pem')
};


// http.createServer(app).listen(80)
https.createServer(options, app).listen(6600,  ()=> console.log(`https://localhost:6600`))
