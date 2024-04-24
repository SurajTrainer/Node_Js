const express = require('express')
const app = express()
let {people} = require('./3-express_js/express-final/data')


// HTTP METHOD 
// GET  - Read Data
// POST - Insert Data
// PUT  - Update Data
// DELETE - Delete Data

 app.use(express.static('./modern-app'))

 // parse from data
 app.use(express.urlencoded({extended : false}))

app.get('/api/people', (req,res) => {
    res.status(200).json({success : true , data : people})
})


app.post('/login',(req,res) => {
    // console.log(req.body);
    const {name} = req.body;
    if (name) {
        return res.status(200).send(`Welcome Mr/Mrs ${name}`)
    }
    res.status(404).send('no value here')
})

app.listen(5000, () => {
    console.log('running on 5000 ports');
})


