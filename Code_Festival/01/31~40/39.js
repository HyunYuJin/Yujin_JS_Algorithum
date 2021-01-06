// q로 입력된 부분을 e로 바꾸는 프로그램 작성하기

const input = "querty".split("");
// const input = "hqllo my namq is hyqwon".split("");

for (let i = 0; i < input.length; i++) {
  if (input[i] === "q") {
    input.splice(i, 1, "e");
  }
}

console.log(input.join(""));
