const fs = require('fs')
const path = require('path');

fs.mkdir('D:/FrontEnd/node_practice/test', { recursive: true }, (err) => {
  if (err) throw err;

  console.log('ok')
}); 


fs.mkdir('test1/a/b', { recursive: true }, (err) => {
    if (err) throw err;
  
    console.log('ok')
  }); 