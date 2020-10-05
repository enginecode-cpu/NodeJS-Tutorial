/* 
  setTimeout(handler, N)
  최소 Nms 이후에 handler가 실행된다.
  최소 보장 시간이 Nms이다. 즉시 실행이 아니다.
  최소 지연 시간이다
*/

'use strict'

setTimeout(function() {
    console.log('First')
    console.log('handler가 최소 0초 뒤에 실행됩니다.');
    console.log('setTimeout 실행')
});

setImmediate(function() {
    console.log('Second');
    console.log('handler가 최소 0초 뒤에 실행됩니다.');
    console.log('setImmediate 실행');
});
// 시간을 갖게 설정할 경우
// 결과가 그때마다 다르다.

setInterval(function() {
    console.log('setInterval 실행');   
}, 1000);

/* 
  setTimeout, setImmediate, setInterval
  메모리 누수를 방지하기 위해서 상수로 저장
*/
const timeObj = setTimeout(function() {
    console.log('First');
})
const immediateObj = setImmediate(function() {
    console.log('Second');
})
const intervalObj = setInterval(function() {
    console.log('Third');
})

// 삭제하는 방법
clearTimeout(timeObj);
clearImmediate(immediateObj);
clearInterval(intervalObj);