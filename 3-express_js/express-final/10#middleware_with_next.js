const express = require('express')
const app = express()


// req => middleware => res

const helper = (req,res,next) => {
    const method = req.method;
    const url = req.url;
    const time = new Date()
    console.log(method, url,time);
    next();
}

app.get('/',helper, (req,res)=> {
    res.send('Home')
})

app.get('/about', (req,res)=> {
    res.send('About')
})

app.listen(5000, () => {
    console.log('running on 5000 ports');
})


