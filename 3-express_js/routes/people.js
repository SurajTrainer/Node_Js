const express = require('express')
const router = express.Router()
const {getpeople, createpeoplePost, putmethodperson, deletemethodperson} = require('../controllers/people')

// 1st way to get data

// router.get('/', getpeople)
// router.post('/', createpeoplePost)
// router.put('/:id',putmethodperson);
// router.delete('/:id',deletemethodperson)


// 2nd way to get data..

router.route('/').get(getpeople).post(createpeoplePost);
router.route('/:id').put(putmethodperson).delete(deletemethodperson)

module.exports = router