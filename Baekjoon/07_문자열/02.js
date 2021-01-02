let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const length = Number(input[0]);
const strArr = input[1].split('');
let sum = 0;

for (let i = 0; i < length; i++) {
    sum += Number(strArr[i]);
}

console.log(sum);