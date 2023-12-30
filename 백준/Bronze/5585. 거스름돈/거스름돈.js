const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];

rl.on('line', function(line) {
    input.push(line);
}).on('close', function(){

    let money = 1000 - Number(input);
    let coinCount = 0;

    while (money > 0) {
        if (money >= 500) {
            coinCount += 1;
            money -= 500;
        } else if (money >= 100) {
            coinCount += 1;
            money -= 100;
        } else if (money >= 50) {
            coinCount += 1;
            money -= 50;
        } else if (money >= 10) {
            coinCount += 1;
            money -= 10;
        } else if (money >= 5) {
            coinCount += 1;
            money -= 5;
        } else if (money >= 1) {
            coinCount += 1;
            money -= 1;
        };
    };

    console.log(coinCount);

    rl.close();

    process.exit();
});