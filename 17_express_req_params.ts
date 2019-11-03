const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World')
})
app.get('/new/:year/:month/:day', function (req, res) {
  res.send(req.params);
})
 
app.listen(3000)