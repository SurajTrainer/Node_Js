const express = require('express')
const router  = express.Router()


router.post('/',(req,res) => {
    // console.log(req.body);
    const {name} = req.body;
    if (name) {
        return res.status(200).send(`Welcome Mr/Mrs ${name}`)
    }
    res.status(404).send('no value here')
})

module.exports = router