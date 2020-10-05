'use strict'

let string = '신짱구는 귀여워';

let isStartWith = string.startsWith('신');
let isIncludes = string.includes('짱구는');
let isEndWith = string.endsWith('워');

const res = () => {
    if (isStartWith && isIncludes && isEndWith) {
        return true;
    } else {
        return false;
    }
}
console.log(res());