// simple structur of http

const http = require('http')

const server = http.createServer((req,res) => {
    console.log('the user is cliked');
    res.end('all clear')
})

server.listen(5000)
