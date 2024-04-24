const express = require('express')
const {product} = require('./3-express_js/express-final/data')

const app = express()

app.get('/', (req,res) => {
    res.json(product)
})

app.listen(5000, () => {
    console.log('running on 5000 ports');
})