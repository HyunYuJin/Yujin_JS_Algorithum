// 공백으로 구분하여 두 숫자 a와 b가 주어지면 a의 b승을 구하기

var input = prompt('a의 b승을 구하기 위한 a, b를 공백으로 구분해서 입력하세요.').split(" ");
console.log(Math.pow(parseInt(input[0], 10), parseInt(input[1]), 10)); // 정수형으로 써줘야지!!
