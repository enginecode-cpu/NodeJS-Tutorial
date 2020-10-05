'use strict'

const obj = {
    title: 'node js 가즈아'
};

const newObj = {
    name: 'node js와 backend'
};

const res = {
    ...obj,
    ...newObj
};
console.log(res);

const arr = [1, 2, 3];
const newArr = [4, 5, 6];

const res2 = [
    ...arr,
    ...newArr
];
console.log(res2);