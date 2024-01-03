const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];

rl.on('line', function(line) {
    input.push(line);
}).on('close', function(){

    const N = input.shift();

    const numbers = input.toString().split(',').map(Number);

    const arr = numbers.sort((a, b) => a -b);

    console.log(arr.join('\n'))

    rl.close();

    process.exit();
});