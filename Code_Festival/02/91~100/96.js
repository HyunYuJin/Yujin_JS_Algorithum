// 넓은 텃밭 만들기!
// 1. 바위를(바위는 '1'로 표기한다.) 피해 텃밭을 만들되 정사각형 모양으로 텃밭을 만든다.
// 2. 텃밭은 가장 넓은 텃밭 1개만 만들고 그 크기를 반환한다.
// 3. 만든 텃밭은 모두 '#'으로 처리한다.
const 텃밭 = [
  [0, 0, 0, 0, 0],
  [0, 1, 0, 0, 0],
  [0, 1, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 1, 0]
];

function solution(텃밭) {
  const width = 텃밭[0].length;
  const height = 텃밭.length;

  let 텃밭합 = [];
  for (let i = 0; i < 텃밭.length; i++) {
    텃밭합.push(Array(텃밭.length).fill(0));
  }

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (텃밭[i][j] === 1) {
        텃밭합[i][j] = 1;
      } else if (텃밭[i][j] === 0) {
        텃밭합[i][j] = 0;
      }
    }
  }
  // console.log("텃밭합", 텃밭합);

  for (let i = 1; i < height; i++) {
    for (let j = 1; j < width; j++) {
      // console.log("텃밭합", 텃밭합[i][j]);
      if (텃밭합[i][j] === 1) {
        let min;
        if (텃밭합[i - 1][j] > 텃밭합[i][j - 1]) {
          min = 텃밭합[i][j - 1];
        } else if (텃밭합[i - 1][j - 1] > 텃밭합[i - 1][j]) {
          min = 텃밭합[i - 1][j];
        } else {
          min = 텃밭합[i - 1][j - 1];
        }
        텃밭합[i][j] = min + 1;
      }
    }
  }

  console.log('ㄴㅇㄹ', 텃밭합);

  return 텃밭;
}

console.log(solution(텃밭));

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
