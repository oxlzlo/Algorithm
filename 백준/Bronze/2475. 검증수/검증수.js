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

    let a = num[0]*num[0];
    let b = num[1]*num[1];
    let c = num[2]*num[2];
    let d = num[3]*num[3];
    let e = num[4]*num[4];

    console.log((a+b+c+d+e)%10)

    rl.close();

    process.exit();
});