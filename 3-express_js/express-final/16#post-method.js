const express = require('express')
const app = express()
let {people} = require('./3-express_js/express-final/data')


// HTTP METHOD 
// GET  - Read Data
// POST - Insert Data
// PUT  - Update Data
// DELETE - Delete Data

 app.use(express.static('./modern-app'))

app.get('/api/people', (req,res) => {
    res.status(200).json({success : true , data : people})
})


app.post('/login',(req,res) => {
    res.send('POST')
})

app.listen(5000, () => {
    console.log('running on 5000 ports');
})


