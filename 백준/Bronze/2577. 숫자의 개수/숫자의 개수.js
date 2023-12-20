const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];

rl.on('line', function(line) {
    input.push(line);
}).on('close', function(){

    let A = parseInt(input[0]);
    let B = parseInt(input[1]);
    let C = parseInt(input[2]);

    let X = (A*B*C).toString().split('').map(Number);

    let result = new Array(10).fill(0);

    for (let i=0; i<X.length; i++) {
        let a = X[i]
        
        result[a] += 1
    };

    let answer = result.join('\n');

    console.log(answer);

    rl.close();

    process.exit();
});