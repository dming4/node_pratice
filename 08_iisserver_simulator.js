const http = require('http');
const path = require('path');
const fs = require('fs')
const mime = require('mime')
// Create an HTTP server
const srv = http.createServer((req, res) => {

  let filePath = path.join(__dirname, "publish", req.url)
  mimeType= mime.getType(filePath)

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.end('404 page not found');
    };
    res.setHeader("content-type",mimeType)
    res.end(data);
  });

  
});


// now that server is running
srv.listen(81, '127.0.0.1', (err) => {
  if (err) {
    console.log(err)
  } else {
    console.log('http://127.0.0.1:81')
  }


});