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

// post method
app.post('/api/people',(req,res) => {
    const {name} = req.body;
    if (!name) {
        return res.status(400).json({success:false, msg : 'please provide some value'})
    }
    res.status(404).json({success:true, person : name})
})


// post method
app.post('/login',(req,res) => {
    // console.log(req.body);
    const {name} = req.body;
    if (name) {
        return res.status(200).send(`Welcome Mr/Mrs ${name}`)
    }
    res.status(404).send('no value here')
})


app.put('/api/people/:id', (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    const person = people.find((person) => person.id === Number(id))

    if (!person) {
        return res.status(404).json({success :false ,msg :  `no person with : ${id}`})
    }
    const newPerson = people.map((person) => {
        if (person.id === Number(id)) {
            person.name = name;
        }
        return person
    })
    res.status(200).json({success:true, data : newPerson})

});


// delete method
app.delete('/api/people/:id',(req,res) => {
    const person = people.find((person) => person.id === Number(id))

    if (!person) {
        return res.status(404).json({success :false ,msg :  `no person with : ${req.params.id}`})
    }   
    const newPeople = people.filter((person) => {
        person.id !== Number(req.params.id)
    })
    return res.status(200).json({success : true, data : newPeople})
})


app.listen(5000, () => {
    console.log('running on 5000 ports');
})
