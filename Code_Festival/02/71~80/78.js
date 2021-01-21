// 원형 테이블
// 한개의 음식을 다 먹으면 시계방향으로 K번째 음식을 먹는다.
// 아직 오지 않은 친구들을 위해 2개의 접시를 남겨야 한다.
// 마지막으로 남은 음식은 어떤 접시인지 출력하기 -> 배열로

function solution(n, k) {
  let answer = [];
  let index = 0;

  for (let i = 1; i <= n; i++) {
    answer.push(i);
  }

  while (answer.length > 2) {
    if (answer.length === 2) break;

    answer.splice(index, 1);
    // index== 0, splice 1, answer == [2, 3, 4, 5, 6]
    // index== 2, splice 4, answer == [2, 3, 5, 6]
    // index== 0, splice 2, answer == [3, 5, 6]
    // index== 2, splice 6, answer == [3, 5]

    index = index + (k - 1);
    // 0 + 2 == 2 index == 2
    // 2 + 2 == 4 index == 4
    // 0 + 2 == 2 index == 2
    // 2 + 2 == 4 index == 4

    if (index >= answer.length) {
      index = index - answer.length;
      // 4 - 4 == 0 index == 0
      // 4 - 4 == 0 index == 0
    }
  }

  return answer;
}

// const input = ["6", "3"];
const input = prompt("음식의 개수 N과 음식의 순서 K를 입력하세요. (공백으로 구분)").split(" ");
const N = parseInt(input[0], 10);
const K = parseInt(input[1], 10);

console.log(solution(N, K)); // [3, 5]
