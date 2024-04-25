
let {people} = require('../express-final/data')



const getpeople = (req,res) => {
    res.status(200).json({success : true , data : people})
}

const createpeoplePost = (req,res) => {
    const {name} = req.body;
    if (!name) {
        return res.status(400).json({success:false, msg : 'please provide some value'})
    }
    res.status(404).json({success:true, person : name})
}

const putmethodperson =  (req, res) => {
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

}

const deletemethodperson = (req,res) => {
    const person = people.find((person) => person.id === Number(id))

    if (!person) {
        return res.status(404).json({success :false ,msg :  `no person with : ${req.params.id}`})
    }   
    const newPeople = people.filter((person) => {
        person.id !== Number(req.params.id)
    })
    return res.status(200).json({success : true, data : newPeople})
}

module.exports = {
    getpeople, createpeoplePost, putmethodperson, deletemethodperson
}