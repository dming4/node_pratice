const express = require('express')
const app = express()
 const path=require('path')
/**
 * 1: get and post request
 * 2: path full match
 */

var fn=express.static(path.join(__dirname,'publish'));

app.use('/', fn)
 
app.listen(3000)