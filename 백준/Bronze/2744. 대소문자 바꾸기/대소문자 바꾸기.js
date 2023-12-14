const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];

rl.on('line', function(line) {
    input.push(line);
}).on('close', function(){

    let str = input.toString();
    let result = [];

    for (let i=0; i<str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
            result.push(str[i].toLowerCase());
        } else {
            result.push(str[i].toUpperCase());
        }
    }

    const answer = result.join('');

    console.log(answer);


    rl.close();

    process.exit();
});