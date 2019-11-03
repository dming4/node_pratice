const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.redirect('/about')
})
 
app.listen(3000)