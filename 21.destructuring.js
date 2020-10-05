'use strict'

const obj = {
    title: '짱구는 못말려',
    mainCharacter: '신짱구'
};

const { title, mainCharacter } = obj;
console.log(title, mainCharacter);

const arr = [1, 2, 3];
const [ , second, third ] = arr;
console.log(second, third);