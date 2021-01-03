// 국어, 수학, 영어 점수를 공백으로 구분해서 입력받기
// 평균 구하기

var input = prompt("점수 입력").split(" ");

var sum = input.reduce((a, b) => {
  return parseInt(a, 10) + parseInt(b, 10);
});

var result = sum / input.length;

console.log(result);
