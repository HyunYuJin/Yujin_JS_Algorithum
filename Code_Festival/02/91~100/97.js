// 택배 배달
// 1. 모든 택배의 배송 시간 1 이상이며 배달지에 도착하고 돌아오는 왕복 시간이다.
// 2. 택배는 물류창고에서 출발
// 3. 배달을 완료하면 다시 물류창고로 돌아가 택배를 받는다.
// 4. 물류창고로 돌아가 택배를 받으면 배달을 시작한다.
// 5. 택배를 상차할 때 시간은 걸리지 않는다.

function solution(n, l) {
  // 배달원의 수만큼 현재 배달하는 Table을 0으로 저장
  let man = new Array(n).fill(0);
  let time = 0;

  // 배달 시작
  // 배열 요소 중 하나라도 0이 있을 경우 물류창고로 돌아가야 한다.
  // 돌아가면 0의 위치에 l.shift()를 한다.
  // 이때 time은 증가하지 않는다.
  while (l.length !== 0) {
    for (let i = 0; i < man.length; i++) {
      if (man[i] === 0) {
        man[i] += l.shift();
      }
    }
    
    man = man.map((x) => (x -= 1));

    time += 1;
  }

  time += Math.max.apply(null, man);

  return time;
}

const deliver = 3; // 배달원의 수
const deliverTime = [1, 2, 1, 3, 3, 3]; // 택배를 배달하는 배달 시간

console.log(solution(deliver, deliverTime));
// 출력값 = 5
