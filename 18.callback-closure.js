'use strict'

// callback
function test(num, callback) {
    console.log(num);
    callback();
}

test(1, function() {
    console.log('콜백함수가 실행됐습니다.');
})

// closure
// 함수 내에서 변수를 메모리처럼 사용하는 것
function closure() {
    let num = 0;
    return function() {
        num++;
        console.log(num);
    }
}

let res = closure();
res();
res();
