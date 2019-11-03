const express = require('express')
const app = express()
const path = require('path');
 
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname,'publish','images','stock.png'),(err)=>{
    console.log(err)
  })
})
 
app.listen(3001,function(){

  console.log('http://localhost:3001')
})