

const {readFile,writeFile} = require('fs');
const util = require('util');

const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)


const start = async () => {
    try {
        const first = await readFilePromise('./market/first.txt', 'utf8');
        const second = await readFilePromise('./market/second.txt', 'utf8');
        await writeFilePromise(
            './market/exampeofUtil.txt',
            `This is use of util async await ${first} : ${second}`
        )
        console.log(first);
    } catch (error) {
        console.log(error);
    }
}

start();


// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf8', (err, data) => {
//             if (err) {
//                 reject(err);
//             }
//             else{
//                 resolve(data);
//             }
//         })
//     })
// }


//  getText('./market/first.txt')
// .then((result) => console.log(result))
// .catch((err) => console.log(err))