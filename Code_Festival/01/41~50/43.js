// 10진수를 2진수로 바꾸기
// ex) 2^3 + 2^2 + 2^0 = 13 -> 1101

const num = parseInt(prompt('숫자를 입력하세요.'), 10);

function solution(num) {
  console.log(num.toString(2));
}

console.log(solution(num));


// ------------------------------------------------------

// 원시적인 방법도 알아두자!!
let num = "32";
let arrayBinary = [];

while (num) { // num이 0이 될 때까지!
  arrayBinary.push(num % 2);
  num = Math.floor(num / 2);
}

console.log(arrayBinary.reverse().join(""));
