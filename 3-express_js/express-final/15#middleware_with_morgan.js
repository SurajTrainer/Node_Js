const express = require('express')
const morgan = require('morgan')
const app = express()
const helper = require('./3-express_js/express-final/helper')
const authorize = require('./3-express_js/express-final/authorize')



// req => middleware => res

// download it using npm i morgan

// app.use(helper)

app.use(morgan('tiny'))
// api/home/data/item/product

app.get('/', (req,res)=> {
    res.send('Home')
})

app.get('/about', (req,res)=> {
    res.send('About')
})

app.get('/data', (req,res)=> {
    res.send('Data')
})


// app.get('/item',[helper,authorize], (req,res)=> {
app.get('/item', (req,res)=> {
    res.send('Item No.')
})

app.listen(5000, () => {
    console.log('running on 5000 ports');
})


