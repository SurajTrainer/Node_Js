const path = require('path');


console.log(path.sep);


const filePath = path.join('/market/', 'shop', 'shooes.txt')
console.log(filePath);

const base = path.basename(filePath)
console.log(base);

const exact = path.resolve(__dirname, 'market', 'shop', 'shooes.txt');
console.log(exact);