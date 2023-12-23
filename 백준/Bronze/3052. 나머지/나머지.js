const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];

rl.on('line', function(line) {
    input.push(line);
}).on('close', function(){

    const A = input.map(Number);
    const B = 42;
    let result = [];

    for (let i=0; i<A.length; i++) {
        result.push(A[i]%B)
    }

    const set = new Set(result);
    const answer = [...set];

    console.log(answer.length)

    rl.close();

    process.exit();
});