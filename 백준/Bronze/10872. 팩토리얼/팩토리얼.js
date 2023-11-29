const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', function(line) {
    const input = line.split(' ').map(el => parseInt(el));

    let answer = 1;

    for (i=1; i<=input; i++) {
        answer = answer * i
    };

    console.log(answer);

    rl.close();

}).on('close', function(){
    process.exit();
});