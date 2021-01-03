// 문장이 입력되면 거꾸로 출력하는 프로그램 만들기

let input = prompt("문자열을 입력하세요.");
let input_desc = input.split("").reverse().join(""); // 메소드 체이닝

console.log(input_desc);
