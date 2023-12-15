const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];

rl.on('line', function(line) {
    input.push(line);
}).on('close', function(){

    const num = input.toString().split(' ').map(Number);

    let A = num[0];
    let B = num[1];

    console.log((A+B)*(A-B));

    rl.close();

    process.exit();
});