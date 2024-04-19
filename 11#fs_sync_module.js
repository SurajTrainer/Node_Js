


const {readFileSync, writeFileSync} = require('fs');

const first = readFileSync('./market/first.txt', 'utf8');
const second = readFileSync('./market/second.txt', 'utf8');

// console.log(first , second);

writeFileSync('./market/bag.txt', `This total of all files : ${first} , ${second} `
// ,{flag : 'a'}
);
