const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

rl.on('line', function(line) {
    input.push(+line.toString());
}).on('close', function(){

    let result = [];

    for (let i=1; i<=30; i++) {
        if (!input.includes(i)) result.push(i);
        if (result.length === 2) break;
    }

    console.log(result.join('\n'));

    process.exit();
});