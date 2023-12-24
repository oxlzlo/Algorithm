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

    for (let i=1; i<=T; i++) {
        let quiz = input[i];
        let count = 0;
        let score = 0;
        for (let j=0; j<quiz.length; j++) {
            if (quiz[j] == 'O') {
                count++;
            } else {
                count = 0;
            }
            score += count;
        }
        console.log(score)
    }

    rl.close();

    process.exit();
});