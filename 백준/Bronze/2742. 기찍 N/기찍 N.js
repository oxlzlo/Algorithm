const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];

rl.on('line', function(line) {
    input.push(line);
}).on('close', function(){

    let result = '';

    for (let i=input; i>=1; i--) {
        result += i + "\n";
    }

    console.log(result);


    process.exit();
});