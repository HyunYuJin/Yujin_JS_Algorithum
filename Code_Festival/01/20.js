// 공백으로 구분하여 두 숫자를 입력
// 두번째 숫자를 첫번째 숫자로 나누었을 때 그 몫과 나머지를 공백으로 구분해서 출력

var input = prompt('몫과 나머지를 구할 2개의 숫자를 공백으로 구분하여 입력하세요.').split(" ");
let div = input.reduce((a, b) => {
  return [parseInt(a, 10) / parseInt(b, 10), parseInt(a, 10) % parseInt(b, 10)];
});

console.log(div[0], div[1]);
