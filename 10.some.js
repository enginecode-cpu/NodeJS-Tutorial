'use strict'

const arr = [1, 2, 0, -1, -2];

const res = arr.some(key => key < 0);
console.log(res);

const arr2 = [1, 2, 0, 1, 2];
const res2 = arr2.some(key => key < 0);
console.log(res2);