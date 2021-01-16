// 최장 경로찾기 - 너비 우선 탐색
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

// let user_input = prompt("두 정점을 입력하세요.").split(" "); // 1 7
const user_input = ["1", "7"];
let start = parseInt(user_input[0], 10);
let end = parseInt(user_input[1], 10);

let queue = [start];
let visited = [];

function solution(q, visited) {
  let node = q[q.length - 1]; // queue의 마지막 요소를 저장한다.
  let length = 0; // solution 함수가 실행될 때마다 length를 0으로 초기화

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
    q.push(graph[node][next_node]);

    max.push(length, solution(q, visited));
    length = Math.max.apply(null, max);

    q.pop();
  }

  return length;
}

console.log(solution(queue, visited));


// ------------------------------------------------------

// 💫코드 실행 동작💫
function solution(q, visited) {
  let node = q[q.length - 1]; // q == [1], visited == []
  let length = 0; // length == 0, node == 1, q == [1], visited == []

  if (node === end) {
    return visited.length;
  }

  if (visited.includes(node)) {
    return visited.length;
  } else {
    visited.push(node); // length == 0, node == 1, q == [1], visited == [1]
  }

  let max = [];
  /*
  length == 0,
  node == 1,
  q == [1],
  visited == [1],
  max == 0
  */

  for (let next_node in graph[node]) {
    /*
    length == 0,
    node == 1,
    q == [1, 2],
    visited == [1],
    max == 0,
    graph[node] = [2, 3, 4]
    */

    q.push(graph[node][next_node]);

    max.push(length, solution(q, visited));
    length = Math.max.apply(null, max);

    q.pop();
  }

  return length;
}


function solution(q, visited) { // q == [1, 2], visited = [1]
  let node = q[q.length - 1]; // q == [1, 2], visited == [1]
  let length = 0; // length == 0, node == 2, q == [1, 2], visited == [1]

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
    /*
    length == 0,
    node == 2,
    q == [1, 2],
    visited == [1, 2],
    max == 0,
    graph[node] = [2, 3, 4]
    */

    q.push(graph[node][next_node]);
    /*
    length == 0,
    node == 2,
    q == [1, 2, 1],
    visited == [1, 2],
    max == 0,
    graph[node] = [2, 3, 4]
    */

    max.push(length, solution(q, visited)); // length == 0, solution(n, visited) == 2
    length = Math.max.apply(null, max); // length == 2

    q.pop();
    /*
    length == 0,
    node == 2,
    q == [1, 2],
    visited == [1, 2],
    max == 0,
    graph[node] = [2, 3, 4]
    */
  }

  return length;
}

// 2번째 for문
function solution(q, visited) { // q == [1, 2], visited = [1]
  let node = q[q.length - 1]; // q == [1, 2], visited == [1]
  let length = 0; // length == 0, node == 2, q == [1, 2], visited == [1]

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
    /*
    length == 2,
    node == 2,
    q == [1, 2],
    visited == [1, 2],
    max == [0, 2],
    graph[node] = [1, 3, 4, 5, 6]
    next_node = 1
    */

    q.push(graph[node][next_node]);
    /*
    length == 2,
    node == 2,
    q == [1, 2, 3],
    visited == [1, 2],
    max == [0, 2],
    graph[node] = [1, 3, 4, 5, 6]
    next_node = 1
    */

    max.push(length, solution(q, visited)); // length == 2, solution([1, 2, 3], [1, 2]) == 3
    length = Math.max.apply(null, max); // length == 3 max == [2, 3]

    q.pop();
    /*
    length == 3,
    node == 2,
    q == [1, 2, 3],
    visited == [1, 2],
    max == [2, 3],
    graph[node] = [1, 3, 4, 5, 6]
    next_node = 1
    */
  }

  return length;
}
// 3번째 for문
function solution(q, visited) { // q == [1, 2], visited = [1]
  let node = q[q.length - 1]; // q == [1, 2], visited == [1]
  let length = 0; // length == 0, node == 2, q == [1, 2], visited == [1]

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
    /*
    length == 3,
    node == 2,
    q == [1, 2],
    visited == [1, 2],
    max == [2, 3],
    graph[node] = [1, 3, 4, 5, 6]
    next_node = 3
    */

    q.push(graph[node][next_node]);
    /*
    length == 3,
    node == 2,
    q == [1, 2, 3, 4],
    visited == [1, 2],
    max == [2, 3],
    graph[node] = [1, 3, 4, 5, 6]
    next_node = 3
    */

    max.push(length, solution(q, visited)); // length == 3, solution([1, 2, 3, 4], [1, 2, 3])
    length = Math.max.apply(null, max); // length == 3 max == [2, 3]

    q.pop();
    /*
    length == 3,
    node == 2,
    q == [1, 2, 3],
    visited == [1, 2],
    max == [2, 3],
    graph[node] = [1, 3, 4, 5, 6]
    next_node = 3
    */
  }

  return length;
}

function solution(q, visited) { // q == [1, 2, 3, 4], visited = [1, 2, 3]
  let node = q[q.length - 1]; // q == [1, 2, 3, 4], visited == [1, 2, 3]
  let length = 0; // length == 0, node == 4, q == [1, 2, 3, 4], visited == [1, 2, 3]

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
    /*
    length == 0,
    node == 4,
    q == [1, 2, 3, 4],
    visited == [1, 2, 3, 4],
    max == [],
    graph[node] = [1, 2, 5, 6]
    next_node = 1
    */

    q.push(graph[node][next_node]);
    /*
    length == 0,
    node == 4,
    q == [1, 2, 3, 4, 1],
    visited == [1, 2, 3, 4],
    max == [],
    graph[node] = [1, 2, 5, 6]
    next_node = 1
    */

    max.push(length, solution(q, visited)); // length == 0, solution([1, 2, 3, 4, 1], [1, 2, 3, 4])
    length = Math.max.apply(null, max);

    q.pop();
  }

  return length;
}

function solution(q, visited) { // q == [1, 2, 3, 4, 5], visited = [1, 2, 3, 4]
  let node = q[q.length - 1]; // q == [1, 2, 3, 4, 5], visited == [1, 2, 3, 4]
  let length = 0; // length == 0, node == 5, q == [1, 2, 3, 4, 5], visited == [1, 2, 3, 4]

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
    /*
    length == 0,
    node == 5,
    q == [1, 2, 3, 4, 5],
    visited == [1, 2, 3, 4, 5],
    max == [],
    graph[node] = [2, 4, 6, 7]
    next_node = 1
    */

    q.push(graph[node][next_node]);
    /*
    length == 0,
    node == 4,
    q == [1, 2, 3, 4, 5, 2],
    visited == [1, 2, 3, 4, 5],
    max == [],
    graph[node] = [2, 4, 6, 7]
    next_node = 1
    */

    max.push(length, solution(q, visited)); // length == 0, solution([1, 2, 3, 4, 5, 2], [1, 2, 3, 4, 5]) == 5
    length = Math.max.apply(null, max); // max == [0, 2], length = 5

    q.pop();
    /*
    length == 5,
    node == 4,
    q == [1, 2, 3, 4, 5],
    visited == [1, 2, 3, 4, 5],
    max == [0, 2],
    graph[node] = [2, 4, 6, 7]
    next_node = 1
    */
  }

  return length;
}
// 2번째 for문
function solution(q, visited) { // q == [1, 2, 3, 4, 5], visited = [1, 2, 3, 4]
  let node = q[q.length - 1]; // q == [1, 2, 3, 4, 5], visited == [1, 2, 3, 4]
  let length = 0; // length == 0, node == 5, q == [1, 2, 3, 4, 5], visited == [1, 2, 3, 4]

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
    /*
    length == 5,
    node == 4,
    q == [1, 2, 3, 4, 5],
    visited == [1, 2, 3, 4, 5],
    max == [0, 2],
    graph[node] = [2, 4, 6, 7]
    next_node = 2
    */

    q.push(graph[node][next_node]);
    /*
    length == 5,
    node == 4,
    q == [1, 2, 3, 4, 5, 2],
    visited == [1, 2, 3, 4, 5],
    max == [0, 2],
    graph[node] = [2, 4, 6, 7]
    next_node = 2
    */

    max.push(length, solution(q, visited)); // length == 5, solution([1, 2, 3, 4, 5, 2], [1, 2, 3, 4, 5]) == 5
    length = Math.max.apply(null, max); // max = [5, 5], length == 5

    q.pop();
    /*
    length == 5,
    node == 4,
    q == [1, 2, 3, 4, 5],
    visited == [1, 2, 3, 4, 5],
    max == [5, 5],
    graph[node] = [2, 4, 6, 7]
    next_node = 2
    */
  }

  return length;
}
// 3번째 for문
function solution(q, visited) { // q == [1, 2, 3, 4, 5], visited = [1, 2, 3, 4]
  let node = q[q.length - 1]; // q == [1, 2, 3, 4, 5], visited == [1, 2, 3, 4]
  let length = 0; // length == 0, node == 5, q == [1, 2, 3, 4, 5], visited == [1, 2, 3, 4]

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
    /*
    length == 5,
    node == 4,
    q == [1, 2, 3, 4, 5],
    visited == [1, 2, 3, 4, 5],
    max == [5, 5],
    graph[node] = [2, 4, 6, 7]
    next_node = 3
    */

    q.push(graph[node][next_node]);
    /*
    length == 5,
    node == 4,
    q == [1, 2, 3, 4, 5, 6],
    visited == [1, 2, 3, 4, 5],
    max == [5, 5],
    graph[node] = [2, 4, 6, 7]
    next_node = 3
    */

    max.push(length, solution(q, visited)); // length == 5, solution([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5])
    length = Math.max.apply(null, max);

    q.pop();
  }

  return length;
}

function solution(q, visited) { // q == [1, 2, 3, 4, 5, 6], visited = [1, 2, 3, 4, 5]
  let node = q[q.length - 1]; // q == [1, 2, 3, 4, 5, 6], visited == [1, 2, 3, 4, 5]
  let length = 0; // length == 0, node == 6, q == [1, 2, 3, 4, 5, 6], visited == [1, 2, 3, 4, 5]

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
    /*
    length == 0,
    node == 6,
    q == [1, 2, 3, 4, 5, 6],
    visited == [1, 2, 3, 4, 5, 6],
    max == [],
    graph[node] = [2, 4, 5, 7]
    next_node = 1
    */

    q.push(graph[node][next_node]);
    /*
    length == 0,
    node == 6,
    q == [1, 2, 3, 4, 5, 6, 2],
    visited == [1, 2, 3, 4, 5, 6],
    max == [],
    graph[node] = [2, 4, 5, 7]
    next_node = 1
    */

    max.push(length, solution(q, visited)); // length == 0, solution([1, 2, 3, 4, 5, 6, 2], [1, 2, 3, 4, 5, 6]) == 6
    length = Math.max.apply(null, max); // max = [0, 6], length == 6

    q.pop();

    /*
    length == 6,
    node == 6,
    q == [1, 2, 3, 4, 5, 6],
    visited == [1, 2, 3, 4, 5, 6],
    max == [0, 6],
    graph[node] = [2, 4, 5, 7]
    next_node = 1
    */
  }

  return length;
}
// 2번째 for문
function solution(q, visited) { // q == [1, 2, 3, 4, 5, 6], visited = [1, 2, 3, 4, 5]
  let node = q[q.length - 1]; // q == [1, 2, 3, 4, 5, 6], visited == [1, 2, 3, 4, 5]
  let length = 0; // length == 0, node == 6, q == [1, 2, 3, 4, 5, 6], visited == [1, 2, 3, 4, 5]

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
    /*
    length == 6,
    node == 6,
    q == [1, 2, 3, 4, 5, 6],
    visited == [1, 2, 3, 4, 5, 6],
    max == [0, 6],
    graph[node] = [2, 4, 5, 7]
    next_node = 2
    */

    q.push(graph[node][next_node]);
    /*
    length == 6,
    node == 6,
    q == [1, 2, 3, 4, 5, 6, 4],
    visited == [1, 2, 3, 4, 5, 6],
    max == [0, 6],
    graph[node] = [2, 4, 5, 7]
    next_node = 2
    */

    max.push(length, solution(q, visited)); // length == 6, solution([1, 2, 3, 4, 5, 6, 5], [1, 2, 3, 4, 5, 6]) == 6
    length = Math.max.apply(null, max); // max = [6, 6], length == 6

    q.pop();

    /*
    length == 6,
    node == 6,
    q == [1, 2, 3, 4, 5, 6],
    visited == [1, 2, 3, 4, 5, 6],
    max == [6, 6],
    graph[node] = [2, 4, 5, 7]
    next_node = 2
    */
  }

  return length;
}
// 3번째 for문
function solution(q, visited) { // q == [1, 2, 3, 4, 5, 6], visited = [1, 2, 3, 4, 5]
  let node = q[q.length - 1]; // q == [1, 2, 3, 4, 5, 6], visited == [1, 2, 3, 4, 5]
  let length = 0; // length == 0, node == 6, q == [1, 2, 3, 4, 5, 6], visited == [1, 2, 3, 4, 5]

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
    /*
    length == 6,
    node == 6,
    q == [1, 2, 3, 4, 5, 6],
    visited == [1, 2, 3, 4, 5, 6],
    max == [6, 6],
    graph[node] = [2, 4, 5, 7]
    next_node = 3
    */

    q.push(graph[node][next_node]);
    /*
    length == 6,
    node == 6,
    q == [1, 2, 3, 4, 5, 6, 7],
    visited == [1, 2, 3, 4, 5, 6],
    max == [6, 6],
    graph[node] = [2, 4, 5, 7]
    next_node = 3
    */

    max.push(length, solution(q, visited)); // length == 6, solution([1, 2, 3, 4, 5, 6, 7], [1, 2, 3, 4, 5, 6]) == 6
    length = Math.max.apply(null, max); // max == [6, 6] length == 6

    q.pop();

    /*
    length == 6,
    node == 6,
    q == [1, 2, 3, 4, 5, 6],
    visited == [1, 2, 3, 4, 5, 6],
    max == [6, 6],
    graph[node] = [2, 4, 5, 7]
    next_node = 3
    */
  }

  return length; // 6
}

function solution(q, visited) { // q == [1, 2, 3, 4, 5, 6, 7], visited = [1, 2, 3, 4, 5, 6]
  let node = q[q.length - 1]; // q == [1, 2, 3, 4, 5, 6, 7], visited == [1, 2, 3, 4, 5, 6]
  let length = 0; // length == 0, node == 7, q == [1, 2, 3, 4, 5, 6, 7], visited == [1, 2, 3, 4, 5, 6]

  if (node === end) {
    return visited.length; // 6 드디어~!~!
  }

  if (visited.includes(node)) {
    return visited.length;
  } else {
    visited.push(node);
  }

  let max = [];

  for (let next_node in graph[node]) {
    /*
    length == 6,
    node == 6,
    q == [1, 2, 3, 4, 5, 6],
    visited == [1, 2, 3, 4, 5, 6],
    max == [6, 6],
    graph[node] = [2, 4, 5, 7]
    next_node = 3
    */

    q.push(graph[node][next_node]);
    /*
    length == 6,
    node == 6,
    q == [1, 2, 3, 4, 5, 6, 7],
    visited == [1, 2, 3, 4, 5, 6],
    max == [6, 6],
    graph[node] = [2, 4, 5, 7]
    next_node = 3
    */

    max.push(length, solution(q, visited)); // length == 6, solution([1, 2, 3, 4, 5, 6, 7], [1, 2, 3, 4, 5, 6])
    length = Math.max.apply(null, max);

    q.pop();
  }

  return length;
}

function solution(q, visited) { // q == [1, 2, 3, 4, 5, 6, 5], visited = [1, 2, 3, 4, 5, 6]
  let node = q[q.length - 1]; // q == [1, 2, 3, 4, 5, 6, 5], visited == [1, 2, 3, 4, 5, 6]
  let length = 0; // length == 0, node == 5, q == [1, 2, 3, 4, 5, 6, 5], visited == [1, 2, 3, 4, 5, 6]

  if (node === end) {
    return visited.length;
  }

  if (visited.includes(node)) {
    return visited.length; // 6
  } else {
    visited.push(node);
  }

  let max = [];

  for (let next_node in graph[node]) {
    /*
    length == 6,
    node == 6,
    q == [1, 2, 3, 4, 5, 6],
    visited == [1, 2, 3, 4, 5, 6],
    max == [0, 6],
    graph[node] = [2, 4, 5, 7]
    next_node = 2
    */

    q.push(graph[node][next_node]);
    /*
    length == 6,
    node == 6,
    q == [1, 2, 3, 4, 5, 6, 4],
    visited == [1, 2, 3, 4, 5, 6],
    max == [0, 6],
    graph[node] = [2, 4, 5, 7]
    next_node = 2
    */

    max.push(length, solution(q, visited)); // length == 6, solution([1, 2, 3, 4, 5, 6, 4], [1, 2, 3, 4, 5, 6])
    length = Math.max.apply(null, max);

    q.pop();
  }

  return length;
}

function solution(q, visited) { // q == [1, 2, 3, 4, 5, 6, 2], visited = [1, 2, 3, 4, 5, 6]
  let node = q[q.length - 1]; // q == [1, 2, 3, 4, 5, 6, 2], visited == [1, 2, 3, 4, 5, 6]
  let length = 0; // length == 0, node == 2, q == [1, 2, 3, 4, 5, 6, 2], visited == [1, 2, 3, 4, 5, 6]

  if (node === end) {
    return visited.length;
  }

  if (visited.includes(node)) {
    return visited.length; // 6
  } else {
    visited.push(node);
  }

  let max = [];

  for (let next_node in graph[node]) {
    /*
    length == 0,
    node == 6,
    q == [1, 2, 3, 4, 5, 6],
    visited == [1, 2, 3, 4, 5, 6],
    max == [],
    graph[node] = [2, 4, 5, 7]
    next_node = 1
    */

    q.push(graph[node][next_node]);
    /*
    length == 0,
    node == 6,
    q == [1, 2, 3, 4, 5, 6, 2],
    visited == [1, 2, 3, 4, 5, 6],
    max == [],
    graph[node] = [2, 4, 5, 7]
    next_node = 1
    */

    max.push(length, solution(q, visited)); // length == 0, solution([1, 2, 3, 4, 5, 6, 2], [1, 2, 3, 4, 5, 6])
    length = Math.max.apply(null, max);

    q.pop();
  }

  return length;
}

function solution(q, visited) { // q == [1, 2, 3, 4, 5, 2], visited = [1, 2, 3, 4, 5]
  let node = q[q.length - 1]; // q == [1, 2, 3, 4, 5, 2], visited == [1, 2, 3, 4, 5]
  let length = 0; // length == 0, node == 2, q == [1, 2, 3, 4, 5, 2], visited == [1, 2, 3, 4, 5]

  if (node === end) {
    return visited.length;
  }

  if (visited.includes(node)) {
    return visited.length; // 5
  } else {
    visited.push(node);
  }

  let max = [];

  for (let next_node in graph[node]) {
    /*
    length == 5,
    node == 4,
    q == [1, 2, 3, 4, 5],
    visited == [1, 2, 3, 4, 5],
    max == [0, 2],
    graph[node] = [2, 4, 6, 7]
    next_node = 2
    */

    q.push(graph[node][next_node]);
    /*
    length == 5,
    node == 4,
    q == [1, 2, 3, 4, 5, 2],
    visited == [1, 2, 3, 4, 5],
    max == [0, 2],
    graph[node] = [2, 4, 6, 7]
    next_node = 2
    */

    max.push(length, solution(q, visited)); // length == 5, solution([1, 2, 3, 4, 5, 2], [1, 2, 3, 4, 5])
    length = Math.max.apply(null, max);

    q.pop();
  }

  return length;
}

function solution(q, visited) { // q == [1, 2, 3, 4, 5, 2], visited = [1, 2, 3, 4, 5]
  let node = q[q.length - 1]; // q == [1, 2, 3, 4, 5, 2], visited == [1, 2, 3, 4, 5]
  let length = 0; // length == 0, node == 2, q == [1, 2, 3, 4, 5, 2], visited == [1, 2, 3, 4, 5]

  if (node === end) {
    return visited.length;
  }

  if (visited.includes(node)) {
    return visited.length; // 5
  } else {
    visited.push(node);
  }

  let max = [];

  for (let next_node in graph[node]) {
    /*
    length == 0,
    node == 5,
    q == [1, 2, 3, 4, 5],
    visited == [1, 2, 3, 4, 5],
    max == [],
    graph[node] = [2, 4, 6, 7]
    next_node = 1
    */

    q.push(graph[node][next_node]);
    /*
    length == 0,
    node == 4,
    q == [1, 2, 3, 4, 2],
    visited == [1, 2, 3, 4, 5],
    max == [],
    graph[node] = [2, 4, 6, 7]
    next_node = 1
    */

    max.push(length, solution(q, visited)); // length == 0, solution([1, 2, 3, 4, 2], [1, 2, 3, 4, 5])
    length = Math.max.apply(null, max);

    q.pop();
  }

  return length;
}

function solution(q, visited) { // q == [1, 2, 3], visited = [1, 2, 3]
  let node = q[q.length - 1]; // q == [1, 2, 3], visited == [1, 2, 3]
  let length = 0; // length == 3, node == 3, q == [1, 2, 3], visited == [1, 2, 3]

  if (node === end) {
    return visited.length;
  }

  if (visited.includes(node)) {
    return visited.length; // 3
  } else {
    visited.push(node);
  }

  let max = [];

  for (let next_node in graph[node]) {
    /*
    length == 3,
    node == 2,
    q == [1, 2, 3],
    visited == [1, 2, 3],
    max == [],
    graph[node] = [1, 2, 7]
    next_node = 1
    */

    q.push(graph[node][next_node]);
    /*
    length == 0,
    node == 2,
    q == [1, 2, 3, 1],
    visited == [1, 2, 3],
    max == [],
    graph[node] = [1, 2, 7]
    next_node = 1
    */

    max.push(length, solution(q, visited)); // length == 0, solution([1, 2, 3, 1], [1, 2, 3]) == 3
    length = Math.max.apply(null, max); // max == [0, 3], length == 3

    q.pop();
    /*
    length == 3,
    node == 2,
    q == [1, 2, 3],
    visited == [1, 2, 3],
    max == [0, 3],
    graph[node] = [1, 2, 7]
    next_node = 1
    */
  }

  return length;
}
// 2번째 for문
function solution(q, visited) { // q == [1, 2, 3], visited = [1, 2]
  let node = q[q.length - 1]; // q == [1, 2, 3], visited == [1, 2]
  let length = 0; // length == 0, node == 3, q == [1, 2, 3], visited == [1, 2]

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
    /*
    length == 3,
    node == 2,
    q == [1, 2, 3],
    visited == [1, 2, 3],
    max == [0, 3],
    graph[node] = [1, 2, 7]
    next_node = 2
    */

    q.push(graph[node][next_node]);
    /*
    length == 0,
    node == 2,
    q == [1, 2, 3, 2],
    visited == [1, 2, 3],
    max == [0, 3],
    graph[node] = [1, 2, 7]
    next_node = 2
    */

    max.push(length, solution(q, visited)); // length == 0, solution([1, 2, 3, 2], [1, 2, 3]) == 3
    length = Math.max.apply(null, max); // max == [0, 3], length == 3

    q.pop();
    /*
    length == 3,
    node == 2,
    q == [1, 2, 3],
    visited == [1, 2, 3],
    max == [0, 3],
    graph[node] = [1, 2, 7]
    next_node = 2
    */
  }

  return length;
}

function solution(q, visited) { // q == [1, 2, 3, 2], visited = [1, 2, 3]
  let node = q[q.length - 1]; // q == [1, 2, 3, 2], visited == [1, 2, 3]
  let length = 0; // length == 0, node == 2, q == [1, 2, 3, 2], visited == [1, 2, 3]

  if (node === end) {
    return visited.length;
  }

  if (visited.includes(node)) {
    return visited.length; // 3
  } else {
    visited.push(node);
  }

  let max = [];

  for (let next_node in graph[node]) {
    /*
    length == 3,
    node == 2,
    q == [1, 2, 3],
    visited == [1, 2, 3],
    max == [0, 3],
    graph[node] = [1, 2, 7]
    next_node = 2
    */

    q.push(graph[node][next_node]);
    /*
    length == 0,
    node == 2,
    q == [1, 2, 3, 2],
    visited == [1, 2, 3],
    max == [0, 3],
    graph[node] = [1, 2, 7]
    next_node = 2
    */

    max.push(length, solution(q, visited)); // length == 0, solution([1, 2, 3, 2], [1, 2, 3]) == 3
    length = Math.max.apply(null, max); // max == [0, 3], length == 3

    q.pop();
    /*
    length == 3,
    node == 2,
    q == [1, 2, 3, 1],
    visited == [1, 2, 3],
    max == [0, 3],
    graph[node] = [1, 2, 7]
    next_node = 1
    */
  }

  return length;
}

function solution(q, visited) { // q == [1, 2, 3, 1], visited = [1, 2, 3]
  let node = q[q.length - 1]; // q == [1, 2, 3, 1], visited == [1, 2, 3]
  let length = 0; // length == 0, node == 1, q == [1, 2, 3, 1], visited == [1, 2, 3]

  if (node === end) {
    return visited.length;
  }

  if (visited.includes(node)) {
    return visited.length; // 3
  } else {
    visited.push(node);
  }

  let max = [];

  for (let next_node in graph[node]) {
    /*
    length == 2,
    node == 2,
    q == [1, 2, 3],
    visited == [1, 2, 3],
    max == [],
    graph[node] = [1, 2, 7]
    next_node = 1
    */

    q.push(graph[node][next_node]);
    /*
    length == 0,
    node == 2,
    q == [1, 2, 3, 1],
    visited == [1, 2, 3],
    max == [],
    graph[node] = [1, 2, 7]
    next_node = 1
    */

    max.push(length, solution(q, visited)); // length == 0, solution([1, 2, 3, 1], [1, 2, 3])
    length = Math.max.apply(null, max);

    q.pop();
  }

  return length;
}


function solution(q, visited) { // q == [1, 2, 1], visited = [1, 2]
  let node = q[q.length - 1]; // q == [1, 2, 1], visited == [1, 2]
  let length = 0; // length == 0, node == 1, q == [1, 2, 1], visited == [1, 2]

  if (node === end) {
    return visited.length;
  }

  if (visited.includes(node)) {
    return visited.length; // 2
  } else {
    visited.push(node);
  }

  let max = [];

  for (let next_node in graph[node]) {

    q.push(graph[node][next_node]);

    max.push(length, solution(q, visited));
    length = Math.max.apply(null, max);

    q.pop();
  }

  return length;
}
