const express = require('express')
const app = express()
 
app.post('/', function (req, res) {
  res.send('Hello World, using post')
})
 
app.listen(3000)