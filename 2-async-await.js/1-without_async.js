const {readFile} = require('fs');

readFile('./market/first.txt' , 'utf8', (err, data) => {
    if (err) {
        return;
    }else if(data) {
        console.log('ye i got it');
        console.log('ye i got it');
    }
    else{
        console.log(data);
    }
})