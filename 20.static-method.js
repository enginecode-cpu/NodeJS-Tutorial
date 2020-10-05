'use strict'

class test {
    /* 
    constructor() { 
        this.config = {}
    }
    fn() {

    } 
    */
    static call() {
        /* 
         * class를 생성하지 않고
         * 바로 접근할 수 있다.
         * 생성자에 접근하지 않고
         * 바로 static에 접근하기 때문에 가능하다.
         * 생성자에 접근하지 않기 때문에 
         * 생성자의 변수를 사용할 수 없다.
         * 그래서 생성자가 필요가 없다.
         * console.log('static method 입니다.')
        */
    }
}

// 기본적인 클래스 생성
const Test = new test();

// static method 호출 방법
test.call();