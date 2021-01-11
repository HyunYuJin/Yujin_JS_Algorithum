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


// ------------------------------------------------------

// padStart('주어진 길이', '채울 문자열'): 주어진 길이만큼 왼쪽에 주어진 문자열을 채운다.
// padEnd('주어진 길이', '채울 문자열'): 주어진 길이만큼 오른쪽에 주어진 문자열을 채운다.

const input = "hi";
const n = 25 + parseInt(input.length / 2, 10);

const left = input.padStart(n, "=");
const right = left.padEnd(50, "=");
console.log(right);