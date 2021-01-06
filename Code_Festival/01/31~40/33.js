// 한 줄에 여러개의 숫자가 입력되면 역순으로 그 숫자들을 하나씩 출력하기

const input = prompt('숫자를 입력하세요.').split(' ');
console.log(input.reverse().join(' '));
