// 퍼즐 게임
// 퍼즐 판은 N x M으로 이루어져있다.
// 퍼즐을 맞추기 위해서는 반드시 맨 오른쪽 줄로 이동해야 한다.
// 만약 종류가 같은 퍼즐이 연속될 시에 점수가 추가되며 그 퍼즐은 사라진다.
// - 파란색 공 : 1점
// - 빨간색 공 : 2점
// - 노란색 공 : 3점
// - 초록색 공 : 4점
// - 주황색 공 : 5점
// 예를 들어 빨간색 공이 2개 연속되어 없어졌을 경우 2*2 = 4점

// 만약 비어있는 곳을 선택하게 된다면 점수가 1점 감소

// 입력
// 퍼즐판 = [[0,0,0,0],[0,1,0,3],[2,5,0,1],[2,4,4,1],[5,1,1,1]]
// 조작 = [1,1,1,1,3,3,3]
// 출력 2

function puzzle(p, r) {
  let answer = 0; // 점수
  let stack = [0]; // 오른쪽 줄

  while (r.length !== 0) {
    let m = r.shift();
    for (let i = 0; i < p.length; i++) {
      if (p[i][m - 1] !== 0) {
        if (stack[stack.length - 1] === p[i][m - 1]) {
          answer += p[i][m - 1] * 2;
          stack.pop();
        } else {
          stack.push(p[i][m - 1]);
        }
        p[i][m - 1] = 0;

        break;
      } else if (i === p.length - 1) {
        answer -= 1;
      }
    }
  }

  return answer;
}

const plate = [
  [0, 0, 0, 0],
  [0, 1, 0, 3],
  [2, 5, 0, 1],
  [2, 4, 4, 1],
  [5, 1, 1, 1]
];
const rows = [1, 1, 1, 1, 3, 3, 3];
console.log(puzzle(plate, rows));
