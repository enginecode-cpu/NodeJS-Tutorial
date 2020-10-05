/*
 메모리 누수가 발생할 수 있는 코드
 * 메모리와 힙과 스택 상에서 데이터가 세팅이 되어 있다.
 * 데이터를 저장을 하고 있는데 크게 2가지 문제를 일컫는다.
 * 1. 불필요한 요소가 누적되면서 발생한다.
 * 2. 메모리가 할당이 되었지만 해제하지 않음으로써 발생한다.
 */

const study = (value1, value2) => {
    this.value1 = value1;
    this.value2 = value2;

    // prototype 없이 함수를 쓸 경우
    this.func1 = () => {
        console.log
    }
}

const problem = new study(undefined, undefined);
problem.func1();