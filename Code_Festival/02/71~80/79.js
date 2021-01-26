// 순회하는 리스트
// 변하기 전 원소와 변한 후 원소의 값의 차가 가장 작은 값을 출력하는 프로그램을 작성하기
// ex)
// 순회전_리스트 = [10, 20, 25, 27, 34, 35, 39]
// 순회후_리스트 = [35, 39, 10, 20, 25, 27, 34]
// 리스트의_차 = [25, 19, 15, 7, 9, 8, 5]
// 입력 - 순회횟수는 : 2
// 출력: index : 6, value : 39, 34

function rotate(inL, inN) {
  let answer = "";
  let outL = inL.slice(); // 순회 후 리스트를 위해 배열 복사
  let sub_arr = [];
  let value = [];

  for (let i = 0; i < inN; i++) {
    let current = outL.pop();
    outL.unshift(current);
  }

  for (let i = 0; i < inL.length; i++) {
    let sub = Math.abs(outL[i] - inL[i]);
    sub_arr.push(sub);
  }

  // console.log(sub_arr); // [25, 19, 15, 7, 9, 8, 5]

  const min = Math.min.apply(null, sub_arr);
  const index = sub_arr.indexOf(min);

  value.push(inL[index], outL[index]);
  answer = `index: ${index}, value: ${value}`;

  return answer;
}

const l = [10, 20, 25, 27, 34, 35, 39]; //기존 입력 값
const n = parseInt(prompt("순회횟수는?"), 10);
// const n = 2;
console.log(rotate(l, n));
