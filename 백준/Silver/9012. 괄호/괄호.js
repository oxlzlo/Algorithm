const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];

rl.on('line', function(line) {
    input.push(line);
}).on('close', function(){

    const T = input.shift();
    const testDates = input.toString().split(',');
    
    for (let i=0; i<testDates.length; i++) {
        let testString = testDates[i];
        let stacks = [];
        let result = 'YES';

        for (let j=0; j<testString.length; j++) {
            if (testString[j] == '(') {
                stacks.push(testString[j])
            } else if (testString[j] == ')') {
                if (!stacks.pop()) {
                    result = 'NO'
                }
            }
        }

        if (stacks.length !== 0) {
            result = 'NO'
        }

        console.log(result)
    }

    rl.close();

    process.exit();
});