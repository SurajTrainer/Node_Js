const {writeFileSync} = require('fs');

for (let i = 0; i < 50; i++) {
        writeFileSync('./market/big-data.txt', `hey boys.. ${i}\n`,{flag:'a'})
}