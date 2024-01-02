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

    const numbers = input.toString().split(' ').map(Number);
    const numArr = numbers.sort((a, b) => b - a);
    const firstNum = numArr[0];
    const lastNum = numArr[N-1];

    let result = 0;

    if (numArr.length >= 2) {
        result = firstNum * lastNum;
    } else {
        result = firstNum * firstNum;
    }

    console.log(result)

    rl.close();

    process.exit();
});