const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];

rl.on('line', function(line) {
    input.push(line);
}).on('close', function(){

    let word = input.toString().toLowerCase();
    let most = {};

    for (let i=0; i<word.length; i++) {
        if (most[word[i]] === undefined) {
            most[word[i]] = 1;
        } else {
            most[word[i]] += 1;
        }
    }

    let result = '';
    let count = 0;

    for (char in most) {
        if (most[char] > count) {
            count = most[char];
            result = char.toUpperCase();
        } else if (most[char] === count) {
            result = '?'
        }
    }

    console.log(result);


    rl.close();

    process.exit();
});