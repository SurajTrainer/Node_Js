const express = require('express')
const app = express()
let people = require('./3-express_js/routes/people')
let auth = require('./3-express_js/routes/auth')




// HTTP METHOD 
// GET  - Read Data
// POST - Insert Data
// PUT  - Update Data
// DELETE - Delete Data

 app.use(express.static('./modern-app'))

 // parse from data
 app.use(express.urlencoded({extended : false}))

 // parse json
 app.use(express.json())


 app.use('/api/people',people)
 app.use('/login',auth)




app.listen(5000, () => {
    console.log('running on 5000 ports');
})
