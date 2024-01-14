const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];

rl.on('line', function(line) {
    input.push(line);
}).on('close', function(){

    const [N, M] = input[0].split(' ').map(Number);
    const cardArray = input[1].split(' ').map(Number);

    let result = 0;

    for (let i=0; i<N; i++) {
        for (let j=i+1; j<N; j++) {
            for (let k=j+1; k<N; k++) {
                const sum = cardArray[i] + cardArray[j] + cardArray[k];
                if (sum <= M && sum >= result) {
                    result = sum;
                }
            }
        }
    }

    console.log(result)

    rl.close();

    process.exit();
});