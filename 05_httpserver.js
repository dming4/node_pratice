const http = require('http');

// Create an HTTP server
const srv = http.createServer((req, res) => {
  if (req.url == '/index')
    res.end('hello index');

  else if (req.url == '/login')
    res.end('hello login');
  else
    res.end('404,page not found');
});


// now that server is running
srv.listen(81, '127.0.0.1', (err) => {
  if (err) {
    console.log(err)
  } else {
    console.log('http://127.0.0.1:81')
  }


});