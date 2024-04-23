
const http = require('http')
const {readFileSync} = require('fs')

// get files from index
const homeindex = readFileSync('./navbar-app/index.html')
const homestyle = readFileSync('./navbar-app/style.css')
const homejs = readFileSync('./navbar-app/script.js')

const server = http.createServer((req,res) => {
    const url = req.url;

    // Home page
    if (url === '/') {
        res.writeHead(200, {'content-type' : 'text/html'})
        res.write(homeindex);
        res.end();

        // Style page
    }else if (url === '/style.css') {
        res.writeHead(200, {'content-type' : 'text/css'})
        res.write(homestyle);
        res.end();
    

        // Js page
    }else if (url === '/script.js') {
        res.writeHead(200, {'content-type' : 'text/js'})
        res.write(homejs);
        res.end();
    
        // about page
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

