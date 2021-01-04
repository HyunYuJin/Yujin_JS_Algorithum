// 2-gram으로 반복해서 출력하기

const word = "Javascript";

for (let i = 0; i < word.length - 1; i++) {
  console.log(word[i], word[i + 1]);
}
