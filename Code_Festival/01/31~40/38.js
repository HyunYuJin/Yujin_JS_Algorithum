// 학생들의 점수를 공백으로 입력받고 사탕을 받을 학생의 수를 출력
// 1 ~ 3위까지의 학생에게 상을 준다. (중복 허용)

// const input = "97 86 75 66 55 97 85 97 97 95".split(" ");
const input = prompt("학생들의 점수를 입력하세요. (공백으로 구분)").split(" ");

let sortInput = input.sort((a, b) => {
  return b - a;
});

// 배열의 중복을 제거하고 1등부터 3등 점수만 저장한다.
let maxScore = Array.from(new Set(sortInput)).slice(0, 3); // ["97", "95", "86"]
let obj = {};

for (let i = 0; i < maxScore.length; i++) {
  for (let j = 0; j < sortInput.length; j++) {
    if (sortInput[j] === maxScore[i]) { // {86: 1, 95: 1, 97: 4}
      obj[maxScore[i]] = obj[maxScore[i]] === undefined ? 1 : (obj[maxScore[i]] += 1);
    }
  }
}

let candy = 0;

for (let i = 0; i < maxScore.length; i++) {
  let val = maxScore[i];
  candy += obj[val];
}
console.log(candy);
