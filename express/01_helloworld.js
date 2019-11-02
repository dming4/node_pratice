const express = require('express')
const app = express()


app.get('/^\/default.*$/', (req, res) => res.send('Hello World!'))

/**
 * match full path, receive get request
 */
app.get('/', (req, res) => res.send('Hello World!'))
/**
 * match first part,any request
 */
app.use('/index', (req, res) => res.send('index!'))
/**
 * match full path,any request
 */
app.listen(3000, () => console.log('http://localhost:3000'))