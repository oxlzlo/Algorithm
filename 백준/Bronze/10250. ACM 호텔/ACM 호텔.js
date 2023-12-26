const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];

rl.on('line', function(line) {
    input.push(line);
}).on('close', function(){

    const T = Number(input[0]);

    for (i=1; i<=T; i++) {
        let [H,W,N] = input[i].split(' ').map(Number);
        if (H >= N) {
            console.log(`${N}01`);
        } else {
            const room = Math.ceil(N/H);
            const floor = N%H === 0? H : N%H;
            console.log(room < 10? `${floor}0${room}` : `${floor}${room}`);
        }
    }

    rl.close();

    process.exit();
});