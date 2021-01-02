const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input.push(line)
}).on('close', function () {
    for (let i = 1; i < 10; i++) {
        console.log(input[0] + ' * ' + i + ' = ' + parseInt(input[0]) * i);
    }
    
    process.exit();
});