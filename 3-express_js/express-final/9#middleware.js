const express = require('express')
const app = express()


// req => middleware => res

app.get('/', (req,res)=> {
    const method = req.method;
    const url = req.url;
    const time = new Date()
    console.log(method, url,time);
    res.send('Home')
})

app.get('/about', (req,res)=> {
    res.send('About')
})

app.listen(5000, () => {
    console.log('running on 5000 ports');
})


