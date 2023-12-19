const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];

rl.on('line', function(line) {
    input.push(line);
}).on('close', function(){

    const N = Number(input[0]);
    let result = '';
    let blank = '';

    for (let i=1; i<=N; i++) {
        result += '*';
        for (let j=0; j<N-i; j++) {
            blank += ' ';
        }
        console.log(blank + result);
        blank = '';
    }

    rl.close();

    process.exit();
});