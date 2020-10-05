'use strict'

class FullStack {
    constructor(backend, frontend) {
        this.backend = backend;
        this.frontend = frontend;
    }
    getBackend() {
        return this.backend;
    }
    getFrontend() {
        return this.frontend;
    }
    setBackend(backend) {
        this.backend = backend;
    }
    setFrontend(frontend) {
        this.frontend = frontend;
    }
}

const fullstack = new FullStack('NodeJS', 'ReactJS');
const getB = fullstack.getBackend();
const getF = fullstack.getFrontend();

console.log(getB);
console.log(getF);