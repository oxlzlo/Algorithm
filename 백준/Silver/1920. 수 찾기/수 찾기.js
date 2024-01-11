const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];

rl.on('line', function(line) {
    input.push(line);
}).on('close', function(){

    const [N, aNumber, M, mNumber] = input.map(num => num.split(' '));

    const array = new Set(aNumber);

    const result = mNumber.map(num => array.has(num) ? 1 : 0);

    console.log(result.join('\n'))

    rl.close();

    process.exit();
});