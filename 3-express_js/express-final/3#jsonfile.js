const express = require('express')

const app = express()

app.get('/', (req,res) => {
    res.json([{name : 'radha'},{name:'krishna'}])
})

app.listen(5000, () => {
    console.log('running on 5000 ports');
})