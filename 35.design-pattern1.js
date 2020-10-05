/*
 * 함수형 프로그래밍(Functional Programming)
 * 어떻게 설계를 하면 코드를 간결하고 유지보수 하기 좋게 할 수 있을지 고민
 */

// reduce: 각각의 배열의 요소를 하나하나씩 접근할 때 좋다.
'use strict'

const { toASCII } = require("punycode");

const numbers = [10, 20, 30, 40];

const sum = numbers.reduce((total, cur) => total + cur);
console.log(sum);

const avg = numbers.reduce((total, cur, index, arr) => {
    total += cur;
    if (index === arr.length - 1) {
        // 배열의 끝까지 도달하였다.
        return total / arr.length;
    } else {
        return total;
    }
})
console.log(avg);

/* 
 * reduce 응용
 * 배열을 순회하면서 조건에 맞는 것을 배열로 만드는 예제
 */

const res = numbers.reduce((total, amount) => {
    if (amount > 10) total.push(amount);
    return total;
}, [])
console.log(res);

/*
 * 문제: Count 객체를 만들기
*/
const array = ['pdf', 'html', 'html', 'gif', 'gif', 'gif'];

const resObj = array.reduce((cnt, fileType) => {
    cnt[fileType] = (cnt[fileType] || 0) + 1;
    return cnt;
}, {})
console.log(resObj)