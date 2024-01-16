const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];

rl.on('line', function(line) {
    input.push(line);
}).on('close', function(){

    const [N, K] = input.toString().split(' ').map(Number);

    let n = 1;
    let k = 1;
    
    const A = N-K;
    let a = 1;

    for (let i=1; i<=N; i++) {
        n = n*i;
    }

    for (let i=1; i<=K; i++) {
        k = k*i;
    }

    for (let i=1; i<=A; i++) {
        a = a*i;
    }

    console.log(n/(k*a))

    rl.close();

    process.exit();
});