
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write("Welcome in my Home page yrr");
        res.end(); // End the response after writing all content
    } else if (req.url === '/about') {
        res.end("you can get all information about us...");
    } else {
        res.end(`
            <h1>Ohhh!</h1>
            <p>Sorry, we are not able to show anything...</p>
            <a href="/about">About us..</a>
        `);
    }
});

server.listen(5000, () => {
    console.log('Server is running on port 5000');
});










// const http = require('http');

// const server = http.createServer((req,res) => {
//     // console.log(req);

//     // res.write('Your most welcome in nod build in modulus');
//     // res.end();

//     if (req.url === '/') {
//         res.end("Welcome in my Home page yrr");
//         res.end(`<a href="/about">about us</a>`)
//     }
//     if (req.url === '/about') {
//         res.end("you can get all imformation about us...");
//     }
//     res.end(`
//     <h1>Ohhh!</h1>
//         <p>Sorry We are not applicable to see anything...</p>
//         <a href="/about">About us..</a>
//     `)
// })

// server.listen(5000);