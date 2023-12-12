const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', function(line) {
    const input = line.split(' ').map(el => parseInt(el));

    let N = input[0];

    for (i = 1; i<=9; i++) {
        console.log(`${N} * ${i} = ${N*i}`);
    }

    rl.close();

}).on('close', function(){
    process.exit();
});