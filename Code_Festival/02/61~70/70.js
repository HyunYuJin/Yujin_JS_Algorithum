// 행렬 곱하기
// 곱할 수 있는 행렬인지 확인: 첫째 행렬의 열 갯수와 둘째 행렬의 행 갯수가 동일해야한다.
// 곱할 수 있다면 그 결과 출력하고 없다면 -1 출력하기

function solution(a, b) {
    let answer = [];
  
    if (a[0].length !== b.length) {
      return -1;
    } else {
      for (let i = 0; i < a[0].length; i++) {
        let row = [];
        for (let j = 0; j < a[0].length; j++) {
          let sum = 0;
          for (let z = 0; z < a[0].length; z++) {
            sum += a[i][z] * b[z][j];
          }
          row.push(sum);
        }
  
        answer.push(row);
      }
    }
  
    return answer;
  }
  
  const a = [
    [1, 2],
    [2, 4]
  ];
  const b = [
    [1, 0],
    [0, 3]
  ];
  
  console.log(solution(a, b));
  // [[1, 6], [2, 12]]
  