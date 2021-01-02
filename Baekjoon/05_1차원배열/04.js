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
      const standard = 42;
      let stack = []; // 42로 나눈 나머지 값 저장
      
      for (let i = 0; i < input.length; i++) {
          stack.push(input[i] % standard);
      }
      
      for (let i = 0; i < stack.length; i++) {
          for (let j = i + 1; j < stack.length; j++) {
              if (stack[i] === stack[j]) {
                  stack.splice(j--, 1);
              }
          }
      }
      
      console.log(stack.length);
  };
  
  // 입력 받아와서 알고리즘 동작하는 함수
  const input = [];
  const start = (rl) => {
    rl.on('line', line => {
      input.push(parseInt(line));
    }).on('close', () => {
      printAnswer(input);
      process.exit();
    });
  }
  
  // 프로그램 동작
  start(rl);