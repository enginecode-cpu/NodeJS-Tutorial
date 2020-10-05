/*
 * 100명 이상 이용하는 서비스를 운영할 경우 발생한다.
 * 예시
 [Promise1, Promise2].map((item) => {  
    비동기 코드
 })
 * map() 안에는 async를 쓰면 안 된다.
 
 * 잘못된 코드
 [Promise1, Promise2].map(async item => {
    await  
    비동기 코드
 })

 * 해결 방법
 const arr = [Promise1, Promise2]

 for (const item of arr) {
    비동기 코드 가능
 }
 
 * forEach 안에서도 async를 쓰면 안 된다.
 * 잘못된 코드
 arr.forEach(async item => {
    await 
 })
 */

