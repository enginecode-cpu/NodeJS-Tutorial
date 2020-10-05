'use strict'

const obj = {
    title: 'node js 가즈아'
}

const newObj = {
    name: 'node js와 backend'
}

const res = Object.assign({}, obj, newObj);
console.log(res);