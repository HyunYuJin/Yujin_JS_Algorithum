// 너비 우선 탐색
// 목표 노드가 아니면 그 노드와 연결된 정점 중에서 우선 순위가 동일한 다른 노드를 찾고 그 순위에 없으면 그 다음 순위 노드를 차례대로 찾는 방법

function bfs(graph, start) {
  let visited = [];
  let queue = [start];
  console.log(queue);

  // D에 자식이 있으면
  while (queue.length !== 0) {
    let n = queue.shift();
    if (!visited.includes(n)) {
      visited.push(n);
      let sub = graph[n].filter((x) => !visited.includes(x)); // 각각에 연결된 자식들
      console.log(sub);

      for (let i of sub) {
        queue.push(i);
      }
    }
  }

  return visited;
}

const graph = {
  E: ["D", "A"],
  F: ["D"],
  A: ["E", "C", "B"],
  B: ["A"],
  C: ["A"],
  D: ["E", "F"]
};

console.log(bfs(graph, "E"));
