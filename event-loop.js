const fs = require('fs');
const crypto = require('crypto');

const start = Date.now();

// process.env.UV_THREADPOOL_SIZE = 1;

setTimeout(() => console.log('timer 1 finished'), 0);
setImmediate(() => console.log("immedia 1 finished"));

fs.readFile('test-file.txt', () => {
    console.log('i/o finished');
    console.log('---------------------------------');
    setTimeout(() => console.log('timer 2 finished'), 0);
    setTimeout(() => console.log('timer 2 finished'), 3000);
    setImmediate(() => console.log("immedia 2 finished"));

    process.nextTick(() => { console.log('process nextTick'); });

    crypto.pbkdf2Sync('password', 'salt', 100000, 1024, 'sha512')
    console.log(Date.now() - start, 'password encrypted out');

    crypto.pbkdf2Sync('password', 'salt', 100000, 1024, 'sha512')
    console.log(Date.now() - start, 'password encrypted out');
    crypto.pbkdf2Sync('password', 'salt', 100000, 1024, 'sha512')
    console.log(Date.now() - start, 'password encrypted out');
    crypto.pbkdf2Sync('password', 'salt', 100000, 1024, 'sha512')
    console.log(Date.now() - start, 'password encrypted out');

    crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
        console.log(Date.now() - start, 'password encrypted');
    });
    crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
        console.log(Date.now() - start, 'password encrypted');
    });
    crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
        console.log(Date.now() - start, 'password encrypted');
    });
    crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
        console.log(Date.now() - start, 'password encrypted');
    });
    //additional threads of 4. the above lines will use about the same time;

    crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
        console.log(Date.now() - start, 'password encrypted');
    });
})

console.log('hello from the top level code');