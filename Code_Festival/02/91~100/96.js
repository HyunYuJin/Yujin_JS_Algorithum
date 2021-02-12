// 넓은 텃밭 만들기!
// 1. 바위를(바위는 '1'로 표기한다.) 피해 텃밭을 만들되 정사각형 모양으로 텃밭을 만든다.
// 2. 텃밭은 가장 넓은 텃밭 1개만 만들고 그 크기를 반환한다.
// 3. 만든 텃밭은 모두 '#'으로 처리한다.
const g = [
  [0, 0, 0, 0, 0],
  [0, 1, 0, 0, 0],
  [0, 1, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 1, 0]
];

function solution(g) {
  // 역전된 텃밭 만들어주기
  // 0을 1로, 1을 0으로
  let reverse_g = [];
  for (let i = 0; i < g.length; i++) {
    reverse_g.push(Array(g.length).fill(0));
  }

  let height = g.length;
  let width = g[0].length;
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (g[i][j] === 1) {
        reverse_g[i][j] = 0;
      } else if (g[i][j] === 0) {
        reverse_g[i][j] = 1;
      }
    }
  }

  // console.log(reverse_g);

  // 현재 위치의 바로 윗줄
  // 현재 위치의 바로 왼쪽보다 크면
  // min은 바로 윗줄, 아니면 왼쪽
  // 아니면 왼쪽 대각선
  let max = 0;
  let x = 0;
  let y = 0;
  for (let i = 1; i < height; i++) {
    for (let j = 1; j < width; j++) {
      if (reverse_g[i][j] === 1) {
        let min;
        if (reverse_g[i - 1][j] > reverse_g[i][j - 1]) {
          min = reverse_g[i][j - 1];
        } else if (reverse_g[i - 1][j] < reverse_g[i][j - 1]) {
          min = reverse_g[i - 1][j];
        } else {
          min = reverse_g[i - 1][j - 1];
        }
        reverse_g[i][j] = min + 1;
        if (max < reverse_g[i][j]) {
          max = reverse_g[i][j];
          y = i;
          x = j;
        }
      }
    }
  }

  // console.log(reverse_g);
  // console.log(max);
  // console.log(y, x);

  // #으로 채워주기
  for (let i = y - (max - 1); i < y + 1; i++) {
    for (let j = x - (max - 1); j < x + 1; j++) {
      reverse_g[i][j] = "#";
    }
  }

  // 1보다 큰 값은 0으로, 0은 1로 변경하기
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (reverse_g[i][j] >= 1) {
        reverse_g[i][j] = 0;
      } else if (reverse_g[i][j] === 0) {
        reverse_g[i][j] = 1;
      }
    }
  }

  console.log(max + " X " + max);
  return reverse_g;
}

console.log(solution(g));

// 입력
// 0 0 0 0 0
// 0 1 0 0 0
// 0 1 0 0 0
// 0 0 1 0 0
// 0 0 0 1 0

// 출력
// 3 X 3
// 0 0 # # #
// 0 1 # # #
// 0 1 # # #
// 0 0 1 0 0
// 0 0 0 1 0
