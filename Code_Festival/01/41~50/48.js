// 대소문자 바꿔서 출력하기
// 문자열이 주어지면 대문자와 소문자를 바꿔서 출력하기

let input = prompt("대소문자 구분없이 문자열을 입력하세요.").split("");

for (let i = 0; i < input.length; i++) {
  if (input[i] === input[i].toUpperCase()) {
    input[i] = input[i].toLowerCase();
  } else if (input[i] === input[i].toLowerCase()) {
    input[i] = input[i].toUpperCase();
  }
}

console.log(input.join(""));
