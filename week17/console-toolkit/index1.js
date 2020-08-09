var tty = require('tty');
var ttys = require('ttys');
// var rl = require('readline');
// const { stdout } = require('process');
var stdin = ttys.stdin;
var stdout = ttys.stdout;

// stdout.write('Hello world!\n');
// stdout.write("\033[1A"); // 往上走一格
// stdout.write("zachy\n");

const readline = require('readline');
const { resolve } = require('path');
const { rejects } = require('assert');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


async function ask(question) {
    return new Promise((resolve, rejects) => {
        rl.question(question, (answer) => {
            resolve(answer)
        });
    })
}

void async function() {
    console.log(await ask('what is your name:'));
}()


// rl.close();
// console.log(`Thank you for your valuable feedback: ${answer}`);