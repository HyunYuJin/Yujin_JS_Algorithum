// 최단경로 찾기
// 두 정점사이를 이동할 수 있는 최단 거리를 출력하기

const graph = {
  A: ["B", "C"],
  B: ["A", "D", "E"],
  C: ["A", "F"],
  D: ["B"],
  E: ["B", "F"],
  F: ["C", "E"]
};

// const user_input = ["A", "F"];
const user_input = prompt("두 정점을 입력하세요. (공백으로 구분)").split(" ");
const start = user_input[0];
const end = user_input[1];
let queue = [start];
let visitied = [start];

function solution() {
  let count = 0;

  while (queue.length !== 0) {
    for (let i = 0; i < queue.length; i++) {
      let node = queue.splice(0, 1); // splice도 마찬가지로 기존 배열의 요소를 삭제한다.

      if (String(node) === end) { // node는 배열 형태로 return
        return count;
      }

      for (let next_node in graph[node]) {
        if (!visitied.includes(graph[node][next_node])) { // 해당 node의 자식들을 queue와 visited에서 포함하고 있지 않다면,
          queue.push(graph[node][next_node]); // queue와
          visitied.push(graph[node][next_node]); // visited에 해당 node의 자식들을 넣어준다.
        }
      }
    }
    count += 1;
  }
}

console.log(solution());
// 출력: 2
