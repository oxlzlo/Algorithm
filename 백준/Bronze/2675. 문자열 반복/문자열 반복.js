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
    let result = '';

    for (let i=1; i<=T; i++) {
        let R = Number(input[i].split(' ')[0]);
        let S = input[i].split(' ')[1];

        for (let j=0; j<S.length; j++) {
            result += S[j].repeat(R)
        }

        result += '\n';
    }

    console.log(result);


    rl.close();

    process.exit();
});