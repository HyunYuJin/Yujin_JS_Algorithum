// 입출력에 사용할 rl을 받아오는 함수
const getRl = () => {
    const readline = require('readline');
    return readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
  }
  const rl = getRl();
  
  // 주어진 숫자에 대해서 각 자리수의 합과 자리수의 가장 우측 숫자를 반환으로 결과 반환
  const getPattern = (number) => {
    let inputNum = number;
    let rightSum = 0;
  
    while(inputNum > 0) {
      rightSum += inputNum % 10;
      inputNum = parseInt(inputNum / 10);
    }
  
    return (number % 10) * 10 + (rightSum % 10);
  }
  
  // 주어진 입력을 이용해서 정답을 반환하는 함수
  const getAnswer = (number) => {
        const originNum = number;
        let cycle = 1;
        let currentNum = getPattern(originNum);
  
        while(originNum !== currentNum) {
          currentNum = getPattern(currentNum);
          cycle++;
        }
      
        return cycle;
  };
  
  // 입력 받아와서 알고리즘 동작하는 함수
  const input = [];
  const start = (rl) => {
      rl.on('line', line => {
          console.log(getAnswer(parseInt(line)));
        }).on('close', () => {
          process.exit();
        });
  }
  
  // 프로그램 동작
  start(rl);