const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];

rl.on('line', function(line) {
    input.push(line);
}).on('close', function(){

    const N = Number(input[0]);

    let num = input[1].split('').map(Number);
    
    let result = 0;

    for (let i=0; i<N; i++) {
        result += num[i];
    }

    console.log(result);
    
    rl.close();

    process.exit();
});