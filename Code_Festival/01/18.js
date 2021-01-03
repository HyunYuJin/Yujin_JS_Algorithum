// 국어, 수학, 영어 점수를 공백으로 구분해서 입력받기
// 평균 구하기

var input = prompt("점수 입력").split(" ");

var sum = input.reduce((a, b) => {
  return parseInt(a, 10) + parseInt(b, 10);
});

var result = sum / input.length;

console.log(result);

// ------------------------------------------------------

// 조금 더 개선한 부분
// 소수점 버린다는 부분에서 주의할 점!

var input = prompt("점수 입력").split(" ");

var sum = input.reduce((a, b) => {
  return parseInt(a, 10) + parseInt(b, 10);
});

var result = Math.floor(sum / input.length);
// Math.floor(): 주어진 값보다 이하의 가장 큰 정수를 반환한다.
// ex) -70.333333 -> -71 로 반환

console.log(result);
