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
    const n = input.toString().split(' ').map(Number);

    let result = 0;

    for (let i=0; i<n.length; i++) {
        if (n[i] == 1) {
            continue;
        } else {
            let count = 0;
            for (let j=2; j<n[i]; j++) {
                if (n[i]%j == 0) {
                    count ++;
                }
            }
            if (count == 0) {
                result ++
            }
        }
    }

    console.log(result)

    rl.close();

    process.exit();
});