const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];

rl.on('line', function(line) {
    input.push(line);
}).on('close', function(){

    let N = input.shift();
    const arr = input.toString().split(',');
    const s_arr = [...new Set(input)];

    const result = s_arr.sort((a, b) => a.length - b.length || a.localeCompare(b)).join('\n');
    
    console.log(result);

    rl.close();

    process.exit();
});