'use strict'

// 캐시 매니저나 DB 매니저를 구현할 때
// class를 사용한다.

class cacheManager {
    constructor() {
        this.config = [];
    }
    addConfig(obj = {}) {
        this.config.push(obj);
    }
    getConfig() {
        return this.config;
    }
}

module.exports = cacheManager