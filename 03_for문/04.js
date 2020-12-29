// node.js로 출력하는 것은 많은 시간을 소비할 수 있다.
// 따라서 한번에 문자열로 저장해서 출력해준다.
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let answer = '';
rl.on('line', line => {
    const input = line.split(' ');
    if(input.length === 2) {
        const A = parseInt(input[0]);
        const B = parseInt(input[1]);
        answer += A + B + '\n';
    }
}).on('close', () => {
    console.log(answer);
    process.exit();
})