
const http = require('http');

const server = http.createServer((req,res) => {

    if (req.url === '/') {
        res.end('Home Page');
    }
    if (req.url === '/about') {
        // res.end('About us ..');
        for (let i = 0; i < 50; i++) {
            for (let j = 0; j < 50; j++) {
                console.log(`${i} , ${j}`);
            }
        }
    }
    res.end('Error get caught');
})


server.listen(5000 , () => {
    console.log('Server is on 5000 ports');
})