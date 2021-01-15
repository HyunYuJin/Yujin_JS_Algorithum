// 최단 경로찾기 - 너비 우선 탐색
// 두 정점 사이를 이동할 수 있는 최단 거리를 출력
// 입력: A F
// 출력: 2

const graph = {
  A: ["B", "C"],
  B: ["A", "D", "E"],
  C: ["A", "F"],
  D: ["B"],
  E: ["B", "F"],
  F: ["C", "E"]
};

let user_input = prompt('두 정점을 입력하세요. (공백으로 구분)').split(" ");
const start = user_input[0];
const end = user_input[1];

let queue = [start];
let visited = [start];

function solution() {
  let count = -1; // count는 0부터 시작을 할 것이다.

  while (queue.length !== 0) {
    count += 1;

    for (let i = 0; i < queue.length; i++) {
      let current = queue.splice(0, 1);
      if (String(current) === end) {
        return count;
      }

      for (let next_node in graph[current]) {
        if (!visited.includes(graph[current][next_node])) {
          queue.push(graph[current][next_node]);
          visited.push(graph[current][next_node]);
        }
      }
    }
  }
}

console.log(solution());
