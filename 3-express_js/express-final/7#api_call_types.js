const express = require('express')
const {product} = require('./3-express_js/express-final/data')

const app = express()

// for refering
app.get('/', (req,res) => {
    res.send('<h1>Home page </h1> <a href="/api/product"> Products </a>')
})

// using map
app.get('/api/product', (req,res) => {
    const newproduct = product.map((productData) => {
        const {id,title,price,brand} = productData
        return {id, title, brand, price}
    })
    res.json(newproduct)
})


// using find for single
// app.get('/api/product/1', (req,res) => {
//     const singleproduct = product.find((product) => product.id === 1)
//     res.json(singleproduct)
//     })


// // using for random number id
// app.get('/api/product/:productId', (req,res) => {
//     const {productId} = req.params
//     const singleproduct = product.find((product) => product.id === Number(productId))
//     res.json(singleproduct)
//     })




// using for random number id
app.get('/api/product/:productId', (req,res) => {
    const {productId} = req.params
    const singleproduct = product.find((product) => product.id === Number(productId))
    if (!singleproduct) {
        return res.status(404).send('Sorry, we can not finde this ')
    }
    return res.json(singleproduct)
    })


app.get('/api/product/:productId/reviews/:reviewId', (req,res) => {
        console.log(req.params);
    res.send('Hello Sir')
    })


    // query
app.get('/api/v1/query', (req,res) => {
        console.log(req.query);
    res.send('Hello Sir')
    })



app.listen(5000, () => {
    console.log('running on 5000 ports');
})

