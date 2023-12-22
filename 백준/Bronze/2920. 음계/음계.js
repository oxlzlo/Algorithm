const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];

rl.on('line', function(line) {
    input.push(line);
}).on('close', function(){

    const result = {
        '1 2 3 4 5 6 7 8' : 'ascending',
        '8 7 6 5 4 3 2 1' : 'descending'
    }[input];

    console.log(result || 'mixed')   

    rl.close();

    process.exit();
});