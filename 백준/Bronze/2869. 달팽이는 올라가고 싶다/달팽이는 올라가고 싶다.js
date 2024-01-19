const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];

rl.on('line', function(line) {
    input.push(line);
}).on('close', function(){
    
    const newInput = input.toString().split(' ');
    
    const A = Number(newInput[0]);
    const B = Number(newInput[1]);
    const V = Number(newInput[2]);

    console.log(Math.ceil((V-B)/(A-B)));

    rl.close();

    process.exit();
});