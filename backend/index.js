const express = require('express')
const cors = require('cors')

const server = express()

server.use(cors())

server.get('/', function (req, res) {
  res.send('Hello World')
})

server.get('/ping', (req, res) => {
    res.status(200).json(
        {
            message: 'pong'
        }
    )
})

server.listen(3000)