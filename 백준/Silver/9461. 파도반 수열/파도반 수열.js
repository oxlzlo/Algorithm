const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];

rl.on('line', function(line) {
    input.push(line);
}).on('close', function(){

    const T = input.shift();
    const N = input.toString().split(',').map(Number);

    let dArr = new Array().fill(0);
    dArr[1] = 1;
    dArr[2] = 1;
    dArr[3] = 1;

    for (let i=4; i<=100; i++) {
        dArr[i] = dArr[i-2] + dArr[i-3];
    }

    let answer = [];

    for (let i=0; i<T; i++) {
        let a = N[i];
        answer.push(dArr[a]);
    }

    console.log(answer.join('\n'))

    rl.close();

    process.exit();
});