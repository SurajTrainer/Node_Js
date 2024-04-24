
const authorize = (req,res,next) => {

    const {user} = req.query

    if (user === 'anil') {
        req.user = {name : 'anil', id : 2}
        next();
    }else{
        res.status(404).send('sorry! , unauthorized')
    }


    console.log('authorizing from out side..');
    next();
}

module.exports = authorize



// const authorize = (req,res,next) => {
//     console.log('authorizing from out side..');
//     next();
// }

// module.exports = authorize