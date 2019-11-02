const http = require('http');
const path = require('path');
const fs = require('fs')
const url = require('url')
// Create an HTTP server
const srv = http.createServer((req, res) => {
  if (req.url == '/index' || req.url == '/index.do') {
  
    console.log(url.parse(req.url,true))

    let filePath = path.join(__dirname, "publish", "index.html")
    fs.readFile(filePath, (err, data) => {
      if (err) throw err;
      res.end(data);
    });
  } 
  else {
    let filePath = path.join(__dirname, "publish", "404.html")
    fs.readFile(filePath, (err, data) => {
      if (err) throw err;
      res.end(data);
    });
  }
});


// now that server is running
srv.listen(81, '127.0.0.1', (err) => {
  if (err) {
    console.log(err)
  } else {
    console.log('http://127.0.0.1:81')
  }


});