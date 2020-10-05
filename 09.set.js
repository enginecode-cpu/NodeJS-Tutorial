'use strict'

const test = new Set();

test.add(1);
test.add(1);
test.add(2);
test.add(2);
test.add(4);

console.log(test);

for(const item of test) {
    console.log(item);
}

const have2 = test.has(2);
console.log(have2);

const have0 = test.has(0);
console.log(have0);

const lolololo = '쓰레기 버리러 가야하는데...';
console.log(lolololo);