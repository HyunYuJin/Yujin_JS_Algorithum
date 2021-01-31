// 지식이의 게임 개발
// 1. 지도의 크기 (가로(n), 세로(m)) -> 각각 외벽 포함
// 2. 장애물의 위치
// 3. 캐릭터의 위치만 입력하면
// 게임 지형을 완성해주는 프로그램 만들기

// 1. 지도의 크기는 n + 2 , m + 2만큼 배열을 생성해주고 default로 0으로 채워준다.
// 2. 캐릭터의 위치에 1로 변경
// 3. 외벽의 위치, 장애물 위치에 2로 변경

function make_map(n, m, c, o) {
  let map = [];

  for (let i = 0; i < m + 2; i++) {
    map.push(Array(n + 2).fill(0));
  }

  // 외벽 2로 바꾸기
  for (let i = 0; i < map.length; i++) {
    map[i][0] = 2;
    map[0][i] = 2;
    map[i][n + 2] = 2;
    map[n + 2][i] = 2;
  }

  // 캐릭터 위치 1로 바꾸기
  // [0, 0] -> [1, 1]
  let character = []; // 지도 상 캐릭터 위치
  for (let i = 0; i < c.length; i++) {
    character.push(c[i] + 1);
  }
  map[character[0]][character[1]] = 1;

  // 장애물 위치에 2로 변경
  for (let i = 0; i < o.length; i++) {
    for (let j = 0; j < o[i].length; j++) {
      o[i][j] = o[i][j] + 1;
    }
  }

  for (let i of o) {
    map[i[0]][i[1]] = 2;
  }

  return map;
}

const n = 4;
const m = 5;
const character = [0, 0];
const obstacle = [
  [0, 1],
  [1, 1],
  [2, 3],
  [1, 3]
];

console.log(make_map(n, m, character, obstacle));
