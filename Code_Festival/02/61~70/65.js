// a = [1, 2, 3, 4]
// b = [a, b, c, d]
// 이런 리스트가 있을 때 [[1, a], [b, 2], [3, c], [d, 4]] 이런 식으로 a, b 리스트가 번갈아가면서 출력되도록하기

// const a = [1, 2, 3, 4];
// const b = ["a", "b", "c", "d"];

// let sumAB = [];

// for (let i = 0; i < a.length; i++) {
//   sumAB.push([a[i], b[i]]);
// }

// for (let i of sumAB) {
//   console.log(i);
// }


// ------------------------------------------------------

// 번갈아가면서 출력해야했어!!! 문제 똑바로 읽자!!
// 짝수, 홀수 index를 사용한다.

const a = [1, 2, 3, 4];
const b = ["a", "b", "c", "d"];
let c = [];

// map 사용
c = a.map((a, e) => {
  if (e % 2 === 0) {
    // 짝수
    return [a, b[e]];
  } else {
    return [b[e], a];
  }
});

// ForEach 사용
// a.forEach((a, e) => {
//   if (e % 2 === 0) {
//     // 짝수
//     c.push([a, b[e]]);
//   } else {
//     c.push([b[e], a]);
//   }
// });

// map과 forEach는 return 값에 차이가 있고 거의 비슷하다.

console.log(c);