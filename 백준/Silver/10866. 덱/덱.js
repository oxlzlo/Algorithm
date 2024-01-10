const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];

rl.on('line', function(line) {
    input.push(line);
}).on('close', function(){

    const N = Number(input[0]);

    let deque = [];
    let result = [];

    for (let i=1; i<=N; i++) {
        let forPush = input[i].toString().split(' ');
        switch(forPush[0]) {
            case 'push_front' :
                deque.unshift(forPush[1]);
                break;
            case 'push_back' :
                deque.push(forPush[1]);
                break;
            case 'pop_front' :
                deque.length == 0? result.push(-1) : result.push(deque.shift());
                break;
            case 'pop_back' :
                deque.length == 0 ? result.push(-1) : result.push(deque.pop());
                break;
            case 'size' :
                result.push(deque.length);
                break;
            case 'empty' :
                deque.length == 0 ? result.push(1) : result.push(0);
                break;
            case 'front' :
                deque.length == 0 ? result.push(-1) : result.push(deque[0]);
                break;
            case 'back' :
                deque.length == 0 ? result.push(-1) : result.push(deque[deque.length - 1]);
                break;
        }
    }

    console.log(result.join('\n'));

    rl.close();

    process.exit();
});