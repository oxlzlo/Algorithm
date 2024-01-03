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

    const members = input.toString().split(',');
    const list = members.sort((a, b) => a.split(' ')[0] - b.split(' ')[0]);

    console.log(list.join('\n'));

    rl.close();

    process.exit();
});