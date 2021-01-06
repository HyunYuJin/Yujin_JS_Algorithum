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


// ------------------------------------------------------

const input = "97 86 86 75 66 55 97 85 97 97 95".split(" ");

let sortInput = input.sort((a, b) => {
  return a - b;
});

console.log(sortInput);

let top3 = [];
let count = 0;

while (top3.length < 4) { // 4로 한 이유는 3으로 하면 top3의 개수가 3개가 되자마자 while문이 종료되기 때문이다!!
  let value = sortInput.pop();

  // 편하게 includes 함수를 이용해서 배열에 현재 값이 있는지 없는지를 찾을 수 있다!!
  if (!top3.includes(value)) {
    top3.push(value);
  }

  count++;
}

console.log(top3);
console.log(count - 1); // 3등까지만 줄거니까!
