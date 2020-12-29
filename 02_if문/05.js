const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', (line) => {
  input = line.split(' ').map((el) => parseInt(el));
}).on('close', () => {
  if (input[1] - 45 >= 0) {
    console.log(input[0], input[1] - 45);
  } else if (input[0] - 1 >= 0) {
    console.log(input[0] - 1, 15 + input[1]);
  } else {
    console.log(23, 15+input[1]);
  }
  process.exit();
});