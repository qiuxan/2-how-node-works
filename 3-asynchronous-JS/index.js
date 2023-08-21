const { rejects } = require('assert');
const fs = require('fs');
const superagent = require('superagent');


const readFilePro = file => {
    return new Promise((resolve, reject) => {
        fs.readFile(file, (err, data) => {
            if (err) reject("I could not find that file 😢");
            resolve(data);
        });
    });
}

const writeFilePro = (file, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile('dog-img.txt', data, err => {
            if (err) reject("I could not write that file 😢");
            resolve("success");
        })

    });
}

const getDogPic = async () => {
    try {
        const data = await readFilePro(`${__dirname}/dog.txt`); // it will skip until the readFilePro has a result
        console.log(`Breed: ${data}`);

        const res = await superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
        console.log(res.body.message);

        await writeFilePro('dog-img.txt', res.body.message);
        console.log("dog image saved");
    } catch (err) {
        // console.log("🚀 ~ file: index.js:36 ~ getDogPic ~ err:", err)
        throw err

    }

    return '2: READY 🐶';

}

(async () => {
    try {
        console.log('1: Will get dog pics!');
        const x = await getDogPic();
        console.log(x);
        console.log('3: Done getting dog pics!');
    } catch (err) {
        console.log('ERROR 💥');
    }
})();
// console.log("1 before get dog");
// getDogPic().then(data => {
//     console.log(data);
//     console.log("3, after get dog");
// }).catch(err => {
//     console.log('ERROR 💥');
// });


/////////////
// readFilePro(`${__dirname}/dog.txt`)
//     .then(data => {
//         console.log(`Breed: ${data}`);
//         return superagent.get(`https://dog.ceo/api/breed/${data}/images/random`)
//     })
//     .then(res => {
//         return writeFilePro('dog-img.txt', res.body.message);
//     })
//     .then(() => {
//         console.log("dog image saved");
//     })
//     .catch(err => {
//         console.log(err);
//     });



