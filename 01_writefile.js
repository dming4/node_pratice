const fs = require('fs')

const data = new Uint8Array(Buffer.from('Hello Node.js'));
fs.writeFile('message.txt', data, (err) => {
  if (err) {
    console.log(err)
  } else {
    console.log('ok')
  }
});