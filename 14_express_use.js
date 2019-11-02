const express = require('express')
const app = express()
 
/**
 * 1: get and post request
 * 2: first path  match
 * 
 * http://localhost:3000/index/xxx
 */
app.use('/index', function (req, res) {
  res.send('Hello World, using get and post')
})
 
app.listen(3000)