// 청길의 패션 대회
// 처음보는 숫자만 기록한다.
function solution(input) {
  let answer = [];

  for (let i of input) {
    for (let j of i) {
      if (!answer.includes(j)) {
        answer.push(j);
      }
    }
  }

  return answer;
}

let input = "1번: 4,2,3 2번: 3 3번: 2,3,4,1 4번: 2,3".split(/[0-9]번: /g); // 결과값: [4, 2, 3, 1]
// let input = "1번: 3,1 2번: 4 3번: 2,1,3 4번: 2,1,3,4"; // 결과 값: [3, 1, 4, 2]
input.shift();

for (let i = 0; i < input.length; i++) {
  input[i] = input[i].replace(/ /g, "").split(",");

  for (let j = 0; j < input[i].length; j++) {
    input[i][j] = parseInt(input[i][j], 10);
  }
}

console.log(solution(input));
