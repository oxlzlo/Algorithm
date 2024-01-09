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

    stack = [];
    let result = [];

    for (let i=1; i<=N; i++) {
        let forPush = input[i].toString().split(' ');
        switch (forPush[0]) {
            case 'push':
                stack.push(forPush[1]);
                break;
            case 'pop' :
                stack.length == 0 ? result.push(-1) : result.push(stack.pop());
                break;
            case 'size' :
                result.push(stack.length);
                break;
            case 'empty' :
                stack.length == 0 ? result.push(1) : result.push(0);
                break;
            case 'top' :
                stack.length == 0 ? result.push(-1) : result.push(stack[stack.length - 1]);
                break;
        }
    }

    console.log(result.join('\n'))


    rl.close();

    process.exit();
});