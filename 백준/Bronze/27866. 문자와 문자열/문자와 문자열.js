const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];

rl.on('line', function(line) {
    input.push(line);
}).on('close', function(){

    let S = input[0].toString();
    let i = Number(input[1]);

    console.log(S[i-1]);

    rl.close();

    process.exit();
});