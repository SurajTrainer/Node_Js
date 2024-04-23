
const http = require('http')

const server = http.createServer((req,res) => {
    const url = req.url;
    if (url === '/') {
        res.writeHead(200, {'content-type' : 'text/html'})
        res.write('<h2>He He lalala </h2>');
        res.write('<h1>This is your home page </h1>');
        res.end();
    }else if (url === '/about') {
        res.writeHead(200, {'content-type' : 'text/html'})
        res.write('<h2>He He ho ho</h2>');
        res.write('<h1>About Page hai yrr </h1>');
        res.end();
    }
    else{
        res.writeHead(404, {'content-type' : 'text/html'})
        res.write('<h2>tu to gya bete</h2>');
        res.write('<h1>No detination here.. </h1>');
        res.end();
    }
})

server.listen(5000);

