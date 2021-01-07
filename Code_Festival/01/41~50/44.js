// 사용자가 입력한 양의 정수의 각 자리수의 합 구하기

const input = prompt("양의 정수를 입력하세요.").split("");

let sum = input.reduce((a, b) => {
  return parseInt(a, 10) + parseInt(b, 10);
});

console.log(sum);
