const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];

rl.on('line', function(line) {
    input.push(line);
}).on('close', function(){

    const T = input[0];

    for (let i=1; i<=T; i++) {
        console.log(input[i].charAt(0) + input[i].charAt(input[i].length -1))
    }

    rl.close();

    process.exit();
});