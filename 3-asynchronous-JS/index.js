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
        console.log("🚀 ~ file: index.js:36 ~ getDogPic ~ err:", err)

    }
}
getDogPic();
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



