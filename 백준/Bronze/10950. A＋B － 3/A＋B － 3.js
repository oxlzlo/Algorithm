const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];

rl.on('line', function(line) {
    input.push(line);
}).on('close', function(){

    const T = Number(input[0]);

    for (let i=1; i<=T; i++) {
        let A = Number(input[i].split(' ')[0]);
        let B = Number(input[i].split(' ')[1]);

        console.log(A+B);
    }

    rl.close();

    process.exit();
});