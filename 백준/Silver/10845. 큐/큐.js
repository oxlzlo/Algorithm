const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

rl.on('line', function(line) {
    input.push(line);
}).on('close', function(){

    const N = Number(input[0]);

    queue = [];
    let result = [];

    for (let i=1; i<=N; i++) {
        let forPush = input[i].toString().split(' ');
        switch (forPush[0]) {
            case 'push' :
                queue.push(forPush[1]);
                break;
            case 'pop' :
                queue.length == 0 ? result.push(-1) : result.push(queue.shift());
                break;
            case 'size' :
                result.push(queue.length);
                break;
            case 'empty' :
                queue.length == 0 ? result.push(1) : result.push(0);
                break;
            case 'front' :
                queue.length == 0 ? result.push(-1) : result.push(queue[0]);
                break;
            case 'back' :
                queue.length == 0 ? result.push(-1) : result.push(queue[queue.length-1]);
                break;
        }
    }

    console.log(result.join('\n'))



    rl.close();

    process.exit();
});