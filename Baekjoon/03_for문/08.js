const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];
rl.on('line', line => {
    input.push(line.split(' '));
}).on('close', () => {
    const testCase = parseInt(input[0]);
    let result = '';
    
    for(let i = 1; i <= testCase; i++){
        const A = parseInt(input[i][0]);
        const B = parseInt(input[i][1]);
        
        result += `Case #${i}: ${A} + ${B} = ${A + B}\n`;
    }
    
    console.log(result);
    process.exit();
});