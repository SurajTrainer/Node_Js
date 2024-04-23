const express = require('express')

const app = express()

//app.get
app.get('/',(req,res) => {
    res.send('This is get method')
})


// app.get('/about',(req,res) => {
//     res.send('About us on here')
// })

app.get('/about',(req,res) => {
    res.status(200).send('About us on here')
})

 // app.all

app.all('*',(req,res) => {
    res.status(404).send('not found')
})
// app.all('*',(req,res) => {
//     res.send('for all method')
// })

// app.listen
app.listen(5000, () => {
    console.log('this is 5000 ports of internet...');
})

// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen