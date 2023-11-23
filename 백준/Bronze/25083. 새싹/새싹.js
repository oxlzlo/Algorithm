const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
    input = line.split(' ').map(el => parseInt(el));
}).on('close', function(){

    console.log(`         ,r'"7`);
    console.log("r"+"`"+"-_   ,'  ,/");
    console.log(` \\. ". L_r'`);
    console.log("   `~\\/");
    console.log(`      |`);
    console.log(`      |`)
    
    process.exit();
});