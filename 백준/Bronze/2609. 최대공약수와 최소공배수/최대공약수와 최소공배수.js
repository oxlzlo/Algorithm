const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];

rl.on('line', function(line) {
    input.push(line);
}).on('close', function(){

    const numbers = input.toString().split(' ').map(Number);
    const firstNum = numbers[0];
    const secondNum = numbers[1];

    let gcd = 1;

    for (let i=1; i<=Math.min(firstNum, secondNum); i++) {
        if (firstNum%i == 0 && secondNum%i == 0) {
            gcd = i;
        }
    }

    let lcm = Math.floor(Math.max(firstNum, secondNum)/gcd)*Math.min(firstNum,secondNum);
    if (firstNum == secondNum) {
        gcd =  firstNum
    }

    console.log(`${gcd}\n${lcm}`);

    rl.close();

    process.exit();
});