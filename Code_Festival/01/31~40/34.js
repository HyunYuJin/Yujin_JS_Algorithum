// 키가 주어지면 순서대로 제대로 섰는지 확인하기
// 제대로면 YES, 아니면 NO 출력

const unsorted = prompt("키를 입력하세요. (공백으로 구분)");
let sorted = "";

sorted = unsorted.split(" ").sort((a, b) => {
  return a - b;
});
console.log(sorted.join(" "));

unsorted == sorted ? console.log("YES") : console.log("No");
