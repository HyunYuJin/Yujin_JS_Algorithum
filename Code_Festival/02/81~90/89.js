// 지식이의 게임 개발2
// { 상:1, 하:2, 좌:3, 우:4 }
// 상: map[i - 1][j]
// 하: map[i + 1][j]
// 좌: map[i][j - 1]
// 우: map[i][j + 1]

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

function move(map, moving) {
  let x = 0;
  let y = 0;
  for (let i of map) {
    if (i.includes(1)) {
      x = map.indexOf(i);
      y = i.indexOf(1);
    }
  }
  map[y][x] = 0;

  for (let i of moving) {
    if (i === 1 && map[y - 1][x] !== 2) {
      y -= 1;
    } else if (i === 2 && map[y + 1][x] !== 2) {
      y += 1;
    } else if (i === 3 && map[y][x - 1] !== 2) {
      x -= 1;
    } else if (i === 4 && map[y][x + 1] !== 2) {
      x += 1;
    }
  }

  map[y][x] = 1;

  return [x, y];
}

// 지도
const n = 4;
const m = 5;
const character = [0, 0];
const obstacle = [
  [0, 1],
  [1, 1],
  [2, 3],
  [1, 3]
];
console.log("캐릭터 이동 전 지도");
let 지도 = make_map(n, m, character, obstacle);
for (let i of 지도) {
  console.log(i);
}

// 캐릭터 위치
const moving = [2, 2, 2, 4, 4, 4];
console.log("캐릭터 이동 후 지도");
let 캐릭터위치 = move(지도, moving);
console.log(캐릭터위치);
