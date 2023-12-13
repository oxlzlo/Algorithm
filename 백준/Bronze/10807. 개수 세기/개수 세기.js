const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];

rl.on('line', function(line) {
    input.push(line);
}).on('close', function(){

    const N = input[0];
    const arr = input[1].split(' ');
    const v = input[2];

    let result = 0;
    for (let i=0; i<N; i++) {
        if (arr[i] == v) {
            result ++;
        }
    }

    console.log(result);

    rl.close();

    process.exit();
});