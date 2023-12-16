const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];

rl.on('line', function(line) {
    input.push(line);
}).on('close', function(){

    const num = input.toString().split(',').map(Number);

    const maxNumber = Math.max(...input);

    console.log(maxNumber);
    console.log(num.indexOf(maxNumber) +1);

    rl.close();

    process.exit();
});