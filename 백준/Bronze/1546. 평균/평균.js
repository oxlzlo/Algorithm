const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];

rl.on('line', function(line) {
    input.push(line);
}).on('close', function(){

    const N = input.shift() * 1;

    const scores = input.toString().split(' ').map(Number).sort((a, b) => b - a);
    const M = scores[0];

    let result = 0;

    for (let i=0; i<N; i++) {
        result += scores[i]/M*100
    }

    console.log(result/N)

    rl.close();

    process.exit();
});