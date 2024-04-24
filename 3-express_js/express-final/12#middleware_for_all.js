const express = require('express')
const helper = require('./3-express_js/express-final/helper')

const app = express()


// req => middleware => res

app.use(helper)

app.get('/', (req,res)=> {
    res.send('Home')
})

app.get('/about', (req,res)=> {
    res.send('About')
})

app.get('/data', (req,res)=> {
    res.send('Data')
})

app.get('/item', (req,res)=> {
    res.send('Item No.')
})

app.listen(5000, () => {
    console.log('running on 5000 ports');
})


