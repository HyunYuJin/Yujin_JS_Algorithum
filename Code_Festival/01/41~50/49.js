// 순서가 없는 10개의 숫자가 공백으로 구분되어 주어지면 최댓값을 반환

let input = prompt("순서가 없는 10개의 숫자를 공백으로 구분해서 입력하세요.").split(" ");
  
if (input.length !== 10) {
    console.log("숫자를 10개 입력하세요!");
} else {
    console.log(Math.max.apply(null, input));
}
