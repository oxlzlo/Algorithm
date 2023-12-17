const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];

rl.on('line', function(line) {
    input.push(line);
}).on('close', function(){

    const words = input[0].trim().split(' ');
    let result = 0;

    for (let i=0; i<words.length; i++) {
        if (words[i] !== '') {
            result ++;
        }
    }

    console.log(result);

    rl.close();

    process.exit();
});