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

    function solution(N) {
        let count = 0;
        if (N===1 || N===3) return -1;

        while (N>0) {
            if (N%2 == 1 || N%5 == 0) {
                count += 1;
                N -= 5;
            } else if (N%2 == 0) {
                count += 1;
                N -= 2;
            }
        }
        return count;
    }

    const count = solution(N);
    console.log(count);


    rl.close();

    process.exit();
});