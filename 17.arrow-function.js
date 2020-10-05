"use strict";

const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
const div = (a, b) => a / b;

console.log(add(1, 3));
console.log(sub(1, 3));
console.log(mul(1, 3));
console.log(div(1, 3));

/* 화살표 함수 예
API.prototype.get = (resource) => {
    new Promise((resolve, reject) => {
        http.get(this.uri + resource, (data) => {
            resolve(data);
        });
    });
};
 */

/* 
 * Curried Function
 * 예를 들어서, 내가 쇼핑몰을 운영한다고 생각해보자
 * VIP 고객이 있는데 VIP 고객에 대해서 할인율을 적용하고 싶다.
 * 이렇게 고객 등급에 따라 할인율을 적용할 경우 어떻게 해야할까?
 */

// Closure
const getDiscount = rate => price => rate * price;
const getTenPercentOff = getDiscount(0.1)

console.log(getTenPercentOff(10000));
