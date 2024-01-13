const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];

rl.on('line', function(line) {
    input.push(line);
}).on('close', function(){

    const N = Number(input.shift());

    let arr = [];

    for (let i=0; i<N; i++) {
        arr.push(input[i].split(' ').map((item) => Number(item)));
    }

    arr.sort((a, b) => {
        if (a[0] == b[0]) {
            return a[1] - b[1];
        } else {
            return a[0] - b[0];
        }
    });

    let answer = [];

    for (let i=0; i<N; i++) {
        let ans = arr[i].join(' ');
        answer.push(ans);
    }

    console.log(answer.join('\n'));

    rl.close();

    process.exit();
});