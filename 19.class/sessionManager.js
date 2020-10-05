'use strict'

const cacheManager = require('./cacheManager');

class sessionManager extends cacheManager {}

const SessionManager = new sessionManager();
SessionManager.addConfig({
    token: 'ran'
})
const config = SessionManager.getConfig();
console.log(config);