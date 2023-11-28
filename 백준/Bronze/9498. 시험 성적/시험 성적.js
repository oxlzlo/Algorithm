const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
    input = line.split(' ').map(el => parseInt(el));
}).on('close', function(){

    let grade = Number(input);

    if (grade>=90 && grade<=100) {
        console.log("A");
    };
    if (grade>=80 && grade<=89) {
        console.log("B")
    };
    if (grade>=70 && grade<=79) {
        console.log("C")
    };
    if (grade>=60 && grade<=69) {
        console.log("D")
    };
    if (grade < 60) {
        console.log("F")
    };
    
    process.exit();
});