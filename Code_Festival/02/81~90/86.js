// n 위치에 놓여진 초밥을 먹고자 할 때 접시가 몇 번 지나가고 먹을 수 있을지 출력
// 예)
// A, B, C, D, E 초밥이 있고 각 점수가 1, 1, 3, 2, 5 일 때 3번째(C초밥)을 먹게 되는 순서는 점수가 1인 초밥 A와 B를 먹고 다음으로 점수가 2인 D 초밥을 먹어야 한다.
// A B C D E 의 순서로 접시가 도착하지만 C가 도착했을때 먹지 못하고 2점을 주었던 D를 먼저 먹어야 C를 먹을 수 있다.
// 즉, A B C D E C 의 순서로, 접시가 5번 지나가고 먹게 된다.

// 입력: point = [1,1,3,2,5], dish = 3
// 출력: 5

function solution(point, dish) {
  dish = dish - 1; // 먹을 접시 index
  let sort_point = point.slice(); // 최소값을 알기 위한 배열
  sort_point.sort((a, b) => {
    return a - b;
  });

  let answer = 0;

  while (true) {
    let first_dish = point.shift(); // 내 앞에 있는 접시

    if (sort_point[0] === first_dish) {
      if (dish === 0) {
        // 먹을 접시가 내 앞에 있으면 (중복 점수 고려)
        break;
      }
      dish -= 1; // 접시를 먹었으니까 하나 빼주기
      sort_point.shift();
    } else {
      point.push(first_dish);
      if (dish === 0) {
        dish = point.length - 1;
      } else {
        dish = dish - 1;
      }
    }
    answer += 1;
  }

  return answer;
}

const point = [5, 2, 3, 1, 2, 5];
const dish = 1;
console.log(solution(point, dish));
