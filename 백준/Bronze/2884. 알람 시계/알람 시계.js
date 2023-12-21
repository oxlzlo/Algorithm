const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = []

rl.on('line', function(line) {
    input.push(line);
}).on('close', function(){

    const currentAlarm = input.toString().split(' ').map(Number);

    const H = currentAlarm[0]
    const M = currentAlarm[1]

    if (M < 45) {
        if (H === 0) {
            console.log(H+23, 60-45+M);
        } else {
            console.log(H-1, 60-45+M);
        }
    } else {
        console.log(H, M-45);
    }

    rl.close();

    process.exit();
});