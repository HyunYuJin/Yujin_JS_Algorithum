// 페이지 교체 - 선입선출 알고리즘
// 현재 할당된 페이지 중 어느 것을 교체할지 결정하는 방법
// 이 알고리즘은 페이지 부재가 발생해 새로운 페이지를 적재해야 하지만 공간이 없어서 이미 적재되어 있는 페이지 중 교체할 페이지를 정할 때 사용한다.
// 선입선출(FIFO): 가장 먼저 들어와서 가장 오래있었던 페이지를 우선으로 교체시키는 방법
// i와 n에 따른 전체 실행시간 구하기
// 스택 안에 같은 스케줄이 있다면 hit, 실행시간은 1초
// 스택 안에 같은 스케줄이 없다면 miss, 실행시간은 6초

function solution(input, n) {
  let stack = [];
  let hit = 0; // 스택 안에 같은 스케줄이 있음
  let miss = 0; // 스택 안에 같은 스케줄이 없음
  let time = 0;

  for (let i of n) {
    console.log("들어오는 페이지: ", i);

    if (!stack.includes(i)) {
      // 같은 페이지를 가지고 있지 않다면
      miss += 6; // miss
      if (stack.length !== input) {
        // 메모리가 꽉 차지 않은 경우
        stack.push(i);
      } else {
        // 메모리가 꽉 차있는 경우 -> 오래된 순서대로 교체!
        stack.shift();
        stack.push(i);
      }
    } else {
      // 같은 페이지를 가지고 있다면
      hit += 1;
    }
  }

  time = hit + miss;
  console.log(stack);

  return time;
}

const i = 3; // 메모리 크기
const n = "ABCDABEA".split(""); // 들어올 페이지
console.log(solution(i, n));


// ------------------------------------------------------


// 조금 더 보충하자면 프레임이 0인 경우에는 굳이 For문 안으로 들어갈 필요 없이
// 바로 페이지 개수 크기에 6을 곱해주고 끝내버리면 된다!!

if (input === 0) {
    time = n.length * 6;
    return time;
}
