// 1부터 20까지의(20 포함) 모든 숫자를 일렬로 놓고 모든 자릿수의 합을 구하기

const a = parseInt(prompt("몇번부터 시작할까요?"), 10);
const b = parseInt(prompt("몇번까지 더할까요?"), 10);
let strNum = "";

for (let i = a; i <= b; i++) {
  strNum += i;
}

let sum = strNum.split("").reduce((a, b) => {
  return parseInt(a, 10) + parseInt(b, 10);
});

console.log(sum);


// ------------------------------------------------------

// forEach문 이용해서 풀기!

let arr = [];
let total = 0;

for (let i = 0; i < 20; i++) {
  arr[i] = i + 1;
}

arr.forEach((n) => {
  while (n) {
    total = total + (n % 10);
    n = Math.floor(n / 10);
  }
});

console.log(total);
