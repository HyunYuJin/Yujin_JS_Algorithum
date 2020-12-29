// 입출력에 사용할 rl을 받아오는 함수
const getRl = () => {
    const readline = require('readline');
    return readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
  }
  const rl = getRl();
  
  // 주어진 입력들을 이용해서 정답을 반환하는 함수
  const printAnswer = (input) => {
    const N = parseInt(input[0]);
    let han_count = 0;
  
    for (let i = 1; i <= N; i++) {
      let num = i.toString();
      if (num.length < 3) {
        han_count += 1;
      }
  
      const numArr = num.split("").map((n) => parseInt(n));
      if (numArr[0] - numArr[1] === numArr[1] - numArr[2]) han_count += 1;
    }
    
    console.log(han_count);
  };
  
  // 입력 받아와서 알고리즘 동작하는 함수
  const input = [];
  const start = (rl) => {
    rl.on('line', line => {
      input.push(line.split(' '));
    }).on('close', () => {
      printAnswer(input);
      process.exit();
    });
  }
  
  // 프로그램 동작
  start(rl);