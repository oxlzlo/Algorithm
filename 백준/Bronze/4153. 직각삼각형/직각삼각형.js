const readline = require('readline');

const rl = readline.createInterface({
    input:process.stdin,
    output: process.stdout,
});

const input = [];

rl.on('line', function(line) {
    input.push(line);
}).on('close', function(){

    input.pop();

    const newInput = input.map((a) => a.split(' ').map(Number).sort((a, b) => a - b));

    let result = [];

    for (let i=0; i<newInput.length; i++) {
        newInput[i][0]**2 + newInput[i][1]**2 == newInput[i][2]**2
        ? result.push('right')
        : result.push('wrong');
    }

    console.log(result.join('\n'));

    rl.close();

    process.exit();
});