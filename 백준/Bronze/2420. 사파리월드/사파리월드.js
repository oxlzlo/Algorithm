const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
    input = line.split(' ').map(el => parseInt(el));
}).on('close', function(){

    const N = parseInt(input[0]);
    const M = parseInt(input[1]);

    console.log(Math.abs(N-M));
    
    process.exit();
});