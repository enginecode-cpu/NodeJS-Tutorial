/*
 * Static Factory Method
 * 1. constructor를 생성자로서의 기능을 버리는 것
 * 2. 생성자를 static method로 구성을 한다.
 */

'use strict'

const { settings } = require("cluster");
const { Z_DATA_ERROR } = require("zlib");

class DatabaseManager {
    constructor(settings) {
    }

    // constructor가 하는 기능을 하고
    // 생성자를 넘긴다.
    static async BIULD(settings) {
        const config = await this.init(settings);
        // 수행하고자 하는 비동기 작업을 할 수 있다.
        return new DatabaseManager(config);
    }

    query() {
        // QUERY('') Agnostic
        // 구현체마다 다르기 때문에 여기에서 정의 되어진다고 선언
    }

    // init()은 최초 1회만 실행한다.
    async init() {
    }

    async newMember() {
        await this.init();
    }

    async deleteMember() {
        await this.init();
    }
}

const manager = DatabaseManager.BIULD(settings);