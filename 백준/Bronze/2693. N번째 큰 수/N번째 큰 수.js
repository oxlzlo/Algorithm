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

    const test = input.toString().split(',');

    for (let i=0; i<test.length; i++) {
        const A = test[i].toString().split(' ').map(Number);
        A.sort(function(a, b) {
            return b - a;
        });
        
        console.log(A[2])
    }

    rl.close();

    process.exit();
});