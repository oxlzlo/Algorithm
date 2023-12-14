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
    let result = str.charCodeAt(0);

    console.log(result);
    
    
    rl.close();

    process.exit();
});