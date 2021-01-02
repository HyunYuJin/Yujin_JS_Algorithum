let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let testcase = Number(input[0]);

for (let i = 1; i <= testcase; i++) {
  let score = input[i].split(' ');
  let people = Number(score[0]);
  let sum = 0;

  for (let j = 1; j <= people; j++) {
    sum += Number(score[j]);
  }
  let reverage = sum / people;

  let overCount = 0;
  for (let k = 1; k <= people; k++) {
    if (reverage < score[k]) {
      overCount++;
    }
  }
  
  let result = (overCount / people * 100).toFixed(3);
  console.log(result + '%');
}
