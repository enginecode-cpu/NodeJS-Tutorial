'use strict'

const https = require('https');
const options = {
    hostname: 'google.com',
    port: 443,
    path: '/login',
    method: 'GET'
}

/* 
  트랜잭션: 
  어떤 데이터의 요청이 대해서 처음부터 끝까지 실행이 되었을 때만
  해당하는 요청을 완료한다.
  만약 오류가 났다면 이전 일을 다 취소하고(없던 일이었던 것처럼) 처음부터 다시 실행을 하게 된다.
*/
const req = https.request(options, (res) => {
    console.log(`status code: ${res.statusCode}`);

    res.on('data', (d) => {
        process.stdout.write(d)
    })

    req.on('error', (e) => {
        console.log(e);
    })
});

req.end();