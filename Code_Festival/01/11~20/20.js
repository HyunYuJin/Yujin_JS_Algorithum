// 공백으로 구분하여 두 숫자를 입력
// 두번째 숫자를 첫번째 숫자로 나누었을 때 그 몫과 나머지를 공백으로 구분해서 출력

var input = prompt('몫과 나머지를 구할 2개의 숫자를 공백으로 구분하여 입력하세요.').split(" ");
let div = input.reduce((a, b) => {
  return [parseInt(a, 10) / parseInt(b, 10), parseInt(a, 10) % parseInt(b, 10)];
});

console.log(div[0], div[1]);

// ------------------------------------------------------

// ☝해설은 어찌 풀었나용?

const num = ["7", "2"];

let val1 = Math.floor(parseInt(num[0], 10) / parseInt(num[1], 10));
let val2 = parseInt(num[0], 10) % parseInt(num[1], 10);
console.log(val1, val2);