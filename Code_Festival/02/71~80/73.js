// 최단 경로 찾기
// 두 정점 사이를 이동할 수 있는 최단 거리를 출력
// 입력: A F
// 출력: 2

function solution(graph) {
  
}

const graph = {'A': ['B', 'C'],
         'B': ['A', 'D', 'E'],
         'C': ['A', 'F'],
         'D': ['B'],
         'E': ['B', 'F'],
         'F': ['C', 'E']}

         console.log(solution(graph))
