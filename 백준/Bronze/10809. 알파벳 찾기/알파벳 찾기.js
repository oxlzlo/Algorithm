const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];

rl.on('line', function(line) {
    input.push(line);
}).on('close', function(){

    const S = input[0];

    let result = [];

    for (let i=97; i<=122; i++) {
        result.push(S.indexOf(String.fromCharCode(i)));
    }

    console.log(result.join(' '));

    rl.close();

    process.exit();
});