const express = require('express')
const app = express()
 
/**
 * 1: get and post request
 * 2: path full match
 */
app.all('/index', function (req, res) {
  res.send('Hello World')
})
 
app.listen(3000)