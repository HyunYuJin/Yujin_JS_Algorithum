// 총 문자열의 길이는 50으로 제한하고 사용자가 문자열을 입력하면 그 문자열을 가운데 정렬을 해주고, 나머지 빈 부분에는 '='을 채워 넣기
// 입력: hi
// 출력: ========================hi========================

const input = "hi";
let result = [];

for (let i = 0; i < 50; i++) {
  result.push("=");
}

console.log(result);
let startIndex = (result.length / 2) - 1;
let deleteIndex = input.length;

result.splice(startIndex, deleteIndex, input);

console.log(result.join(""));
