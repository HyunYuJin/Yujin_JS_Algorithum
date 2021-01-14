// 깊이우선 탐색
// 목표 노드가 존재하지 않으면 처음 방문한 노드로부터 그 자식 노드로 파고드는 검색방법
// 출력: E A B C D F

function dfs(graph, start) {
  let visited = [];
  let stack = [start];

  while (stack.length !== 0) {
    let n = stack.pop();
    if (!visited.includes(n)) {
      visited.push(n);
      let sub = graph[n].filter((x) => !visited.includes(x)); // 각각에 연결된 자식들
      for (let i of sub) {
        stack.push(i);
      }
    }
  }

  return visited;
}

const graph = {
  A: ["E", "C", "B"],
  B: ["A"],
  C: ["A"],
  D: ["E", "F"],
  E: ["D", "A"],
  F: ["D"]
};

console.log(dfs(graph, "E"));
