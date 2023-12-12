const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', function(line) {
    const input = line.split(' ').map(el => parseInt(el));

    const N = input[0];
    let answer = '';

    for (let i=1; i<=N; i++) {
        answer += '*';
        console.log(answer);
    }

    rl.close();

}).on('close', function(){
    process.exit();
});