const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
    input = line.split(' ').map(el => parseInt(el));
}).on('close', function(){

    console.log(`|\\_/|`);
    console.log(`|q p|   /}`);
    console.log(`( 0 )"""\\`);
    console.log(`|"^"`+"`"+`    |`);
    console.log(`||_/=\\\\__|`);
    
    
    process.exit();
});