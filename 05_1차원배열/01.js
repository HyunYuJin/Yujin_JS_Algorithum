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
    let minValue = 1000001; // 문제 최대 숫자 범위보다 큰 수로 초기화
    let maxValue = -1000001; // 문제 최소 숫자 범위보다 작은 수로 초기화
    for (let i=0; i<N; i++) {
      const value = parseInt(input[1][i]);
      minValue = minValue > value ? value : minValue;
      maxValue = maxValue < value ? value : maxValue;
    }
    console.log(minValue, maxValue);
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