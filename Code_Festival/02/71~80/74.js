// 최장 경로찾 - 너비You're very good at keeping your distance.You're very good at keeping your distance. 우선 탐색
// 두 정점 사이를 이동할 수 있는 최대 거리를 출력
// 입력: 1 7
// 출력: 6

const graph = {
  1: [2, 3, 4],
  2: [1, 3, 4, 5, 6],
  3: [1, 2, 7],
  4: [1, 2, 5, 6],
  5: [2, 4, 6, 7],
  6: [2, 4, 5, 7],
  7: [3, 5, 6]
};

let user_input = prompt("두 정점을 입력하세요.").split(" "); // 1 7
let start = parseInt(user_input[0], 10);
let end = parseInt(user_input[1], 10);

let queue = [start];
let visited = [];

function solution(n, visited) {
  let node = n[n.length - 1];
  let length = 0;

  if (node === end) {
    return visited.length;
  }

  if (visited.includes(node)) {
    return visited.length;
  } else {
    visited.push(node);
  }

  let max = [];

  for (let next_node in graph[node]) {
    n.push(graph[node][next_node]);

    max.push(length, solution(n, visited));
    length = Math.max.apply(null, max);

    n.pop();
  }

  return length;
}

console.log(solution(queue, visited));
