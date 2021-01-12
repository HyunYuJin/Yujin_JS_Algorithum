// 문자열 입력받고 연속되는 문자열 압축해서 표현하기
// 입력: aaabbbbcdddd
// 출력: a3b4c1d4

const input = "aaabbbbcdddd".split("");
const inputValue = Array.from(new Set(input));
let count = 0;
let result = "";
let i = 0;

while (input.length) {
  if (inputValue[i] === input.shift()) {
    count++;
  } else {
    result += inputValue[i] + count;
    count = 1;
    i += 1;
  }
}

result += inputValue[i] + count;
console.log(result);


// ------------------------------------------------------


// for문으로 표현하기
const input = "aaabbbbcdddd".split("");
let str_arr = "";
let str = input[0]; // a
let count = 0;

for (let i = 0; i < input.length; i++) {
  if (str === input[i]) {
    count += 1;
  } else {
    str_arr += str += String(count);
    str = input[i];
    count = 1;
  }
}

str_arr += str += String(count);
console.log(str_arr);
