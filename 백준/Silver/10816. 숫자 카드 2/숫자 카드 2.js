const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

rl.on('line', function(line) {
    input.push(line);
}).on('close', function(){

    const N = Number(input[0]);
    const sanggeunArr = input[1].split(' ');
    const M = Number(input[2]);
    const shouldfindArr = input[3].split(' ');

    let countMap = new Map();
    sanggeunArr.forEach(num => {
        countMap.set(num, (countMap.get(num) || 0) + 1);
    });

    let result = shouldfindArr.map(num => countMap.get(num) || 0);

    console.log(result.join(' '));

    rl.close();

    process.exit();
});