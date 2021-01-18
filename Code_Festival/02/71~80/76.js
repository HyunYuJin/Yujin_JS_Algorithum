// 안전한 땅
// 0은 지뢰가 없음 1은 지뢰가 있음을 뜻한다.
// 수색 가능한 범위 bxb 내에서 찾아낼 수 있는 가장 큰 지뢰의 개수 구하기

let a = 5; // 수색할 도시의 크기 a
let b = 3; // 수색반이 한 번에 수색 가능한 범위 b
// 지뢰밭
let minefield = [
  [1, 0, 0, 1, 0],
  [0, 1, 0, 0, 1],
  [0, 0, 0, 1, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0]
];

let iadd = 0;
let jadd = 0;

// [i][j]
// (0, 0), (0, 1), (0, 2)
// (1, 0), (1, 1), (1, 2)
// (2, 0), (2, 1), (2, 2)

// (0, 1), (0, 2), (0, 3)
// (1, 1), (1, 2), (1, 3)
// (2, 1), (2, 2), (2, 3)
// 시작점 조정 필요..? 한 덩이 끝날때마다 jadd + 1?
// for (let j = jadd;)

// (0, 2), (0, 3), (0, 4)
// (1, 2), (1, 3), (1, 4)
// (2, 2), (2, 3), (2, 4)
// minefield[0].length 까지 다 돌았다면 iadd + 1?
// for (let i = iadd;)

let sum = 0; // 지뢰를 저장
let sum_arr = [];
for (let iadd = 0; iadd <= a - b; iadd++) {
  for (let jadd = 0; jadd <= a - b; jadd++) {
    for (let i = iadd; i < b + iadd; i++) {
      for (let j = jadd; j < b + jadd; j++) {
        sum += minefield[i][j];
      }
    }
    sum_arr.push(sum);
    sum = 0;
  }
}

console.log(sum_arr);
console.log(Math.max.apply(null, sum_arr));
