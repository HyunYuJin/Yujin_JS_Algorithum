const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input.push(line.split(' '));
}).on('close', function () {
    const T = parseInt(input[0]);
    for (let i = 1; i <= T; i++) {
        const A = parseInt(input[i][0]);
        const B = parseInt(input[i][1]);
        console.log(A + B);
    }
    
    process.exit();
});