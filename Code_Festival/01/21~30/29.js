// 알파벳 하나를 입력받아 대문자면 YES, 소문자면 No를 출력

const input = prompt('알파벳을 입력하세요.').split("");

if (input.length == 1) {
  input == input.toUpperCase() ? console.log("YES") : console.log("No");
} else {
  console.log("알파벳 하나만 입력하세요.");
}
