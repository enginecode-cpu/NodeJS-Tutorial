/*
 * 실제 실무에서 발생할 수 있는 사례

 * 문제점: 
 * 시스템 자원에 의존하는 경우가 발생한다.
 * transaction1 = add();
 * transaction2 = add();
 * -> input도 동일하고 조건도 동일하다.
 *    어떤 선행 조건도 없는 상황에 있다.
 *    그래서 CPU, Ram 상태에 따라서 해당하는 값은 임의의 순서로 반환.
*/

'use strict'

let total = 0;

async function getTotal() {
    return total;
}

async function setTotal(value) {
    return value;
}

async function increament(value, inc) {
    return value + inc;
}

async function add() {
    let cur, newValue;

    cur = await getTotal();
    newValue = await increament(cur, 20);
    
    await setTotal(newValue);
} 

async function main() {
    const transaction1 = add();
    const transaction2 = add();

    await transaction1;
    await transaction2;

    console.log(await getTotal())
}
main()