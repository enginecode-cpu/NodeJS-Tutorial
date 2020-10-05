'use strict'

const promise1 = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve(`promise1`);
    }, 2000);
})
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(`promise2`);
    }, 0);
})
Promise.race([promise1, promise2])
.then(value => console.log(value));