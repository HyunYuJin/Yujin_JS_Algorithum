// (A + B) % C
// ((A % C) + (B % C)) % C
// (A × B) % C
// ((A % C) × (B % C)) % C
// 세 수 A, B, C가 주어졌을 때, 위의 네 가지 값을 구하는 프로그램

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');

const a = parseInt(input[0]);
const b = parseInt(input[1]);
const c = parseInt(input[2]);

console.log((a + b) % c);
console.log(((a % c) + (b % c)) % c);
console.log((a * b) % c);
console.log(((a % c) * (b % c)) % c)