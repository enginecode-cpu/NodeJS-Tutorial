/*
 * 비동기 패턴2
 * 생성자 안에서 비동기 처리를 하는 방법
 * 
 * 핵심: async-await은 Promise의 확장이다.
*/
'use strict'

class DatabaseManager {
    constructor(settings) {
        this.settings = settings;
        this.init = init; // Promise Cache: 최초 한 번만 수행
    }

    query() {
        // QUERY('') Agnostic
        // 구현체마다 다르기 때문에 여기에서 정의 되어진다고 선언
    }

    // init()은 최초 1회만 실행한다.
    async init() {
    }

    // 무언가를 실행할 때마다 초기화를 해야한다.
    // 이것을 해결하고 싶다.
    async newMember() {
        await this.init();
    }

    async deleteMember() {
        await this.init();
    }
}