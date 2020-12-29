const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const input = [];
rl.on('line', line => {
    input.push(line.split(' '));
}).on('close', () => {
    const A = parseInt(input[0][0]);
    const X = parseInt(input[0][1]);
    let numbers = input[1];
    let answer = [];
    
    for (let i = 0; i < A; i++) {
        const number = parseInt(numbers[i]);
        
        if (number < X) {
            answer.push(number);
        }
    }
    
    console.log(answer.join(' '));
    process.exit();
});