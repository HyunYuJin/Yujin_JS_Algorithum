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
      let result = input.map((a, b) => {
          let numberObj = { value: 0, index: 0 };
          numberObj.value = a;
          numberObj.index = b + 1;
          
          return numberObj;
      });
      
      let max = result[1];
      
      for (let i in result) {
          let temp = result[i];
          max = max.value > temp.value ? max : temp;
      }
      
      console.log(max.value, max.index);
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