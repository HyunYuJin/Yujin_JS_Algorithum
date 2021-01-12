// 입력: 정량 N이 입력
// 출력: 가장 적게 옮길 수 있는 횟수를 출력 / 만약 어떻게 해도 정량이 N이 되지 않는다면 -1을 출력
// 화물은 7kg, 3kg 두 가지
// 예를 들어 정량이 24kg이라면 3kg 8개를 옮기는 것보다는 7kg 3개, 3kg 1개 즉 4개로 더 적게 옮길 수 있다.

const N = 24
let str = [];

let result = N % 7;
if (result % 3 === 0) {
  str.push(Math.floor(N / 7), Math.floor((N % 7) / 3));
  console.log("7kg", str[0], "개 3kg", str[1], "개");
  console.log("총 ", str[0] + str[1], "개");
} else {
  console.log(-1);
}
