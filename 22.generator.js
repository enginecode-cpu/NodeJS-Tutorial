/* 
 * generator가 async-await이 등장한 이후로
 * 사용 빈도가 낮아졌지만
 * 그래도 장점을 살리면 아주 좋다.
 * Redux에서 사용한다.
*/

'use strict'

const { yellow } = require("color-name")

/* 
 * yield : 함수를 끝내지 않는다.(arrow function을 사용하면 안 된다.)
 * return : 함수를 끝낸다.
*/
function *log() {
    console.log(0, yield);
    console.log(1, yield);
    console.log(2, yield);
}

const gen = log()
gen.next('zero');
gen.next('one');
gen.next('two');

const obj = {
    *gen() {
        let cnt = 0;
        yield ++cnt;
        yield ++cnt;
        yield ++cnt;
    }
}
const g = obj.gen();
console.log(g.next());
console.log(g.next());
console.log(g.next());

