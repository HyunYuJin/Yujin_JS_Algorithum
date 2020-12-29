const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const a = parseInt(input[0]);
const b = input[1];

const result1 = a * parseInt(b[2]);
const result2 = a * parseInt(b[1]);
const result3 = a * parseInt(b[0]);

console.log(result1);
console.log(result2);
console.log(result3);
console.log(a * parseInt(b));