let fs = require('fs');
let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let testcase = parseInt(input[0]);
for (let i = 1; i <= testcase; i++) {
    let quiz = input[i].split("");
    let countArr = [];
    let count = 0;
    
    let result = quiz.map((a, b) => {
        a == "O" ? (count += 1) : (count = 0);
        countArr.push(count);
    });
    
    let sum = countArr.reduce((a, b) => {
      return a + b;
    });

    console.log(sum);
}

