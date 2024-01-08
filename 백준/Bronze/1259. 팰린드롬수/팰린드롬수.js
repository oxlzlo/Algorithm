let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
input.pop()

let str = '';

for (let i=0; i<input.length; i++){
    str +=
    input[i].trim().split('').reverse().join('') === input[i].trim()
        ? 'yes\n'
        : 'no\n';
}

console.log(str)
