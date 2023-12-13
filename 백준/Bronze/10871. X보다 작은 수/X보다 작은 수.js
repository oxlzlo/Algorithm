const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];

rl.on('line', function(line) {
    input.push(line);
}).on('close', function(){

    let X = input[0].split(' ').map(X => Number(X));
    let A = input[1].split(' ').map(X => Number(X));
    let result = [];

    for (let i=0; i <= X[0]; i++) {
        if (A[i] < X[1]) {
            result.push(A[i])
        }
    }

    console.log(result.join(' '));


    rl.close();

    process.exit();
});