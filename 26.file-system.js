'use strict'

const fs = require('fs');
const { promisify } = require('util');

const read = promisify(fs.readFile);
const write = promisify(fs.writeFile);

const fileReadAndWrite = async (data = '') => {
    try {
        await write('test.txt', data);
        return (await read('test.txt'));
    } catch (e) {
        console.error(e);
    }
};
fileReadAndWrite('짱구는 너무 귀여워');

/* 
fs.readFile('test.txt', 'utf-8', (err,data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});
*/

/* 
const content = '짱구는 못말려'
    fs.writeFile('test.txt', content, (err) => {
        if (err) {
            console.error(err);
            return;
    }
    console.log("Success!!")
});
*/
