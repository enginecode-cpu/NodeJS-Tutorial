/*
 * 42.race-condition.js을 해결하는 방법
 */

'use strict'

/*
 * 두 가지 이상의 데이터 경쟁 조건을 원천적으로 해결하기 위해
 * 경쟁 상태를 만들지 않겠다는 것이다.
 * Lock이 되어 있는지 확인을 해야한다.  
 */
class Lock {
    constructor() {
        this._locked = false;
        this._waitQueue = [];
    }

    lock() {
        const unlock = () => {
            let nextResolve;
            if (this._waitQueue.length > 0) {
                // 대기열이 있는 경우
                // 맨 앞의 있는 데이터를 가져온다.
                nextResolve = this._waitQueue.shift();
                nextResolve(unlock);
            } else {
                this._locked = false;
            }
        }
        if (this._locked) {
            // lock이 되어 있는 경우
            return new Promise((resolve) => {
                this._waitQueue.push(resolve);
            })
        } else {
            // lock이 되어 있지 않은 경우
            this._locked = true;
            return new Promise((resolve) => {
                resolve(unlock)
            })
        }
    }
}

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

const account = new Lock();

async function add() {
    let cur, newValue;

    const unlock = await account.lock();

    cur = await getTotal();
    newValue = await increament(cur, 20);
    await setTotal(newValue);

    await unlock();
} 

async function main() {
    const transaction1 = add();
    const transaction2 = add();

    await transaction1;
    await transaction2;

    console.log(await getTotal())
}
main();