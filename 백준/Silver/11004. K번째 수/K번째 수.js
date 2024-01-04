const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];

rl.on('line', function(line) {
    input.push(line);
}).on('close', function(){

    const K = input[0].split(' ')[1];

    const arr = input[1].split(' ').map(Number).sort((a, b) => a - b);

    console.log(arr[K-1])

    rl.close();

    process.exit();
});
