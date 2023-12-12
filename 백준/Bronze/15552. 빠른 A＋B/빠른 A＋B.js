const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];

rl.on('line', function(line) {
    input.push(line);
}).on('close', function(){

    let i = 1;
    let answer = '';

    while(i < input.length) {
        let nums = input[i].split(' ');
        answer += Number(nums[0]) + Number(nums[1]) + '\n';
        i += 1;
    }

    console.log(answer);

    rl.close();

    process.exit();
});