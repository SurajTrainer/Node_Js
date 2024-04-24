const express = require('express')
const helper = require('./3-express_js/express-final/helper')

const app = express()


// req => middleware => res


app.get('/',helper, (req,res)=> {
    res.send('Home')
})

app.get('/about', (req,res)=> {
    res.send('About')
})

app.listen(5000, () => {
    console.log('running on 5000 ports');
})


