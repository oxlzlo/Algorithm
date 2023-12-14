const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];

rl.on('line', function(line) {
    input.push(line);
}).on('close', function(){

    let grade = input.toString();

    if (grade == 'A+') {
        console.log('4.3')
    }
    if (grade == 'A0') {
        console.log('4.0')
    }
    if (grade == 'A-') {
        console.log('3.7')
    }
    if (grade == 'B+') {
        console.log('3.3')
    }
    if (grade == 'B0') {
        console.log('3.0')
    }
    if (grade == 'B-') {
        console.log('2.7')
    }
    if (grade == 'C+') {
        console.log('2.3')
    }
    if (grade == 'C0') {
        console.log('2.0')
    }
    if (grade == 'C-') {
        console.log('1.7')
    }
    if (grade == 'D+') {
        console.log('1.3')
    }
    if (grade == 'D0') {
        console.log('1.0')
    }
    if (grade == 'D-') {
        console.log('0.7')
    }
    if (grade == 'F') {
        console.log('0.0')
    }

    rl.close();

    process.exit();
});