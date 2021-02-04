// 페이지 교체 - LRU 알고리즘
// 현재 할당된 페이지 중 어느 것을 교체할지 결정하는 방법
// 이 알고리즘은 페이지 부재가 발생해 새로운 페이지를 적재해야 하지만 공간이 없어서 이미 적재되어 있는 페이지 중 교체할 페이지를 정할 때 사용한다.
// 캐시교체 알고리즘(LRU): 가장 오랫동안 이용되지 않은 페이지는 앞으로도 사용할 확률이 적다는 가정하여 진행하는 페이지 교체
// i와 n에 따른 전체 실행시간 구하기
// 스택 안에 같은 스케줄이 있다면 hit, 실행시간은 1초
// 스택 안에 같은 스케줄이 없다면 miss, 실행시간은 6초

function solution(input, n) {
  let stack = [];
  let hit = 0; // 스택 안에 같은 스케줄이 있음
  let miss = 0; // 스택 안에 같은 스케줄이 없음
  let time = 0;

  if (input === 0) {
    // 프레임이 0일 때 페이지의 크기만큼 6을 곱해주고 바로 끝낸다.
    time = n.length * 6;
    return time;
  }

  for (let i of n) {
    console.log("들어오는 페이지: ", i);
    if (stack.includes(i)) {
      // 같은 페이지를 가지고 있다면
      hit += 1;
      stack.push(stack.shift());
    } else {
      miss += 6; // miss
      if (stack.length !== input) {
        // 메모리가 꽉 차지 않은 경우
        stack.push(i);
      } else {
        // 메모리가 꽉 차있는 경우 -> 오래된 순서대로 교체!
        stack.shift();
        stack.push(i);
      }
    }
  }

  time = hit + miss;
  console.log(stack);

  return time;
}

const i = parseInt(prompt("메모리의 크기를 입력하세요."), 10); // 3
const n = prompt("들어올 페이지를 입력하세요.").split(""); // BCBAEBCE
console.log(solution(i, n)); // 33
