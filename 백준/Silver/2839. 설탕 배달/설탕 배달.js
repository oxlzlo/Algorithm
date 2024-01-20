const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];

rl.on('line', function(line) {
    input.push(line);
}).on('close', function(){

    let N = Number(input);

    let sugarNumber = -1;
    let five = Math.floor(N/5);

    while (five >= 0) {
        let remain = N - five *5;
        if (remain%3 == 0) {
            sugarNumber = remain / 3 + five;
            break;
        } else {
            five -= 1;
        }
    }

    console.log(sugarNumber)

    rl.close();

    process.exit();
});