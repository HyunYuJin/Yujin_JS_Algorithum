// 학생들이 뽑은 후보들을 입력받으면 뽑힌 학생의 이름과 받은 표 수를 출력하는 프로그램 작성하기

// const input = prompt('후보를 입력하세요. (공백으로 구분)');
const input = "원범 원범 혜원 혜원 혜원 혜원 유진 유진".split(" ");
let obj = {};

for (let i in input) {
  let val = input[i];
  obj[val] = obj[val] == undefined ? 1 : (obj[val] += 1);

  // 왜 undefined?🤔
  // 맨 처음 객체에 key 값을 셋팅했을 때는 value가 당연히 undefined 이니까 값을 1로 초기화 해주어야 그 다음에 + 1씩 해줄 수 있다.
  // ex) { 원범: undefined } -> { 원범: 1 } -> { 원범: 2 }
  // ex) { 혜원: undefined } -> { 혜원: 1 } -> { 혜원: 2 } -> { 혜원: 3 } -> { 혜원: 4 }
  // ex) { 유진: undefined } -> { 유진: 1 } -> { 유진: 2 }

  // if (obj[val] == undefined) {
  //   obj[val] = 1;
  // }
}

let winner = Object.keys(obj).reduce((a, b) => {
  console.log(obj[a], obj[b]);
  return obj[a] > obj[b] ? a : b;
});

console.log(`${winner}(이)가 총 ${obj[winner]} 표로 반장이 되었습니다.`);


// ------------------------------------------------------

// 💡공부하면서 알게된 것!!!💡

// 다음처럼 입력하면 set으로 바꼈던 것을 다시 배열 형태로 바꿀 수 있다.
// Array.from(new set(array));