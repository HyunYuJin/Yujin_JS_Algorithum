// 도장찍기
// 각 위치에서 몇 번 도장이 찍혔는지 그 결과값을 출력하기
// N, stmp, k는 입력받는다.

let N = 4; // 도장 크기
let stmp = [
  [1, 1, 1, 2],
  [2, 0, 0, 0],
  [1, 1, 1, 1],
  [0, 0, 0, 0]
]; // 도장 모양
const k = 1; // 회전 수

// 회전 규칙
// 0번째 행 -> 3번째 열
// 1번째 행 -> 2번째 열
// 2번째 행 -> 1번째 열
// 3번째 행 -> 0번째 열

function solution(stmp, k) {
  N = stmp.length;
  let p = [];
  // 우선 0으로 채워진 도장 만들기
  for (let i = 0; i < N; i++) {
    p.push(Array(N).fill(0));
  }

  // 회전 전 (최초) 도장 찍기
  p = sum_matrix(p, stmp);
  // console.log(p);

  for (let i = 0; i < k; i++) {
    // 회전 시키기
    stmp = rotate(stmp);
    // console.log(stmp);
    p = sum_matrix(p, stmp);
  }

  return p;
}

//배열(도장) 회전시키기
function rotate(stmp) {
  N = stmp.length;
  let rot = [];

  for (let i = 0; i < N; i++) {
    rot.push(Array(N).fill(0));
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      rot[j][N - 1 - i] = stmp[i][j];
    }
  }

  return rot;
}

//행렬 더하기 즉 도장이 찍히는 정도를 더한다.
function sum_matrix(p, stmp) {
  N = stmp.length;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      p[i][j] = p[i][j] + stmp[i][j];
    }
  }

  return p;
}

console.log(solution(stmp, k));
// [[1, 2, 3, 3], [2, 1, 0, 1], [1, 2, 1, 2], [0, 1, 0, 2]]
