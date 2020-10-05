/* 
  프로토타입
  어떠한 객체나 함수가 있었을 때
  기존의 속성들을 복사해서 새로운 함수나 객체를 만드는 것
 */

'use strict'

function fullstack(backend, frontend) {
    this.backend = backend;
    this.frontend = frontend;

    // 화살표 함수에서 this를 사용할 수 없다.
    // 화살표 함수의 this는 전역을 의미한다.
    fullstack.prototype.getBackend = () => this.backend;
    fullstack.prototype.setBackend = () => this.backend = backend;

    fullstack.prototype.getFrontend = () => this.frontend;
    fullstack.prototype.setFrontend = () => this.frontend = frontend;
}

const FullStack = new fullstack('NodeJS', 'ReactJS');
const getB = FullStack.getBackend();
const getF = FullStack.getFrontend();

console.log(getB);
console.log(getF);