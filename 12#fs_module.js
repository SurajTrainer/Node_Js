
const {readFile, writeFile} = require('fs');

readFile('./market/first.txt', 'utf8' , (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    // console.log(result);
    const first = result;

readFile('./market/second.txt', 'utf8' , (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    // console.log(result);
    const second = result;
    
    writeFile('./market/pen.txt', `here are : ${first} , ${second}`, (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(result);
})
})
})