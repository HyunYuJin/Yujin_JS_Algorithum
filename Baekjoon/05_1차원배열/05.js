let fs = require('fs');
let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let M = input[0] * 1;
let score = input[1].split(' ');

let max = Math.max(...score); // 최고점
let sum = 0;

for (let i = 0; i < score.length; i++) {
  sum += score[i] / max * 100;
}

console.log(sum / M);
