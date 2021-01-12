// 어떤 입력이 주어지면 앞 글자만 줄여 출력
// 입력: 복잡한 세상 편하게 살자
// 출력: 복세편살

const input = "복잡한 세상 편하게 살자".split(" ");
let short = "";

for (let i = 0; i < input.length; i++) {
  let input_arr = input[i].split("");
  short += input_arr[0];
}

console.log(short);
