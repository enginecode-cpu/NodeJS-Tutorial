/*
 * 싱글 톤 패턴
 * 객체나 데이터에 대해서 최초 한 번만 생성됨을 보장하기 위해서 사용
 * 
 * 싱글 톤 패턴이 되지 않는 캐시 매니저
 * -> 캐시 매니저가 실행될 때마다 새로 생성되어서 초기화가 되는 문제점 발생
*/

'use strict'

class CacheManager {
    constructor() {
        if (!CacheManager.instance) {
            this._cache = []
            CacheManager.instance = this
        }
        return CacheManager.instance 
    }
}

// object freeze
const instance = new CacheManager();
Object.freeze(instance);