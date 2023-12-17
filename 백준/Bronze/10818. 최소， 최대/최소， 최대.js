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
    let nArr = input[1].toString().split(' ').map(Number);

    const max = Math.max(...nArr);
    const min = Math.min(...nArr);

    console.log(min, max);

    rl.close();

    process.exit();
});