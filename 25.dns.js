'use strict'

const dns = require('dns');

// family => IP버전을 알려준다.
dns.lookup('test.com', (err, addr, family) => {
    console.log(`addr: ${addr}, ${family}`)
})

dns.resolve4('archive.org', (err, addrs) => {
    if (err) throw err;

    const res = JSON.stringify(addrs);
    console.log(res);

    addrs.forEach(addr => {
        dns.reverse(addr, (err, hostnames) => {
            if (err) throw err;

            console.log(`reverse for ${addr} ${JSON.stringify(hostnames)}`)
        })
    })
})