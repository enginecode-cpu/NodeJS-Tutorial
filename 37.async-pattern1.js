/*
 * 비동기 패턴1
 * 제네릭을 이용한 생성자
*/

'use strict'

class Sample {
    *gen() {
        let cnt = 0;
        yield cnt++;
    }
}

const fn = new Sample();
const gn = fn.gen();

console.log(gn.next());
console.log(gn.next());

class Sample2 {
    // Computed Property
    *[Symbol.iterator]() {
        let cnt = 0;
        yield cnt++;
    }
}

console.log(Array.from(Sample2));