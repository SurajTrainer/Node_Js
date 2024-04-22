const {createReadStream} = require('fs');

const stream = createReadStream('./market/big-data.txt')

stream.on('data' , (result) => {
    console.log(result);
})


stream.on('data' , (err) => {
    console.log(err);
})

