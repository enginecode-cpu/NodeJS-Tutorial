// try-catch 예외처리할 때 사용한다.

try {
    console.log(a);
} catch (error) {
    console.log(`${error}가 발생했습니다.`);
}

// 연습 문제
try {
    a;
} catch (e) {}
console.log('a');
