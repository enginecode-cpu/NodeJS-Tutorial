/*
 * 비동기 패턴2
 * 생성자 안에서 비동기 처리를 하는 방법
*/
'use strict'

class DatabaseManager {
    constructor(settings) {
        this.settings = settings;
        this.init = new Promise((resolve, reject) => {

        })
    }

    query() {
        // QUERY('') Agnostic
    }

    async init() {
        // Pending Promise 상태로 반환
    }

    async newMember() {
        // Pending Promise 상태로 반환
        await this.init
    }
}