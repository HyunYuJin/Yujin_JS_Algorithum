// 토끼들의 행진
// 대기 중인 토끼들의 통과 여부를 배열에 담아 출력

function solution(rock, r) {
  let answer = [];

  for (let i in r) {
    answer.push("pass");
  }

  for (let i in r) {
    let currnetPos = 0; // 토끼의 위치 index

    while (currnetPos < rock.length - 1) {
      // 토끼가 돌의 내구도의 마지막까지 잘 뛰었는지 확인
      currnetPos += r[i];
      rock[currnetPos - 1] -= 1;

      if (rock[currnetPos - 1] < 0) {
        answer[i] = "fail";
      }
    }

    let reduceRock = JSON.parse(JSON.stringify(rock));
    console.log(reduceRock);
  }

  return answer;
}

// 돌의내구도 = [1, 2, 1, 4]
// 토끼의점프력 = [2, 1]
// 출력: ['pass', 'pass']

// 돌의내구도 = [1, 2, 1, 4, 5, 2]
// 토끼의점프력 = [2, 1, 3, 1]
// 출력: ['pass', 'pass', 'fail', 'fail']

const rock = [1, 2, 1, 4, 5, 2];
const rabbit = [2, 1, 3, 1];

console.log(solution(rock, rabbit));
