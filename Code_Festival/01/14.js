// 랜덤으로 숫자가 3의 배수라면 박수'짝' 아니면 그대로 숫자 출력

let input = prompt("숫자를 입력하세요.");

if (input % 3 == 0) {
  console.log("짝");
} else {
  console.log(input);
}

// ------------------------------------------------------

// 조금 더 개선한 부분
// 0을 반드시 체크해주기!!

let input = prompt("숫자를 입력하세요.");

if (input % 3 == 0 && input != 0) {
  console.log("짝");
} else {
  console.log(input);
}
