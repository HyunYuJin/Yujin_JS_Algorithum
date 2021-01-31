// 천하제일 먹기 대회
// 정해진 시간이 끝난 후 음식을 먹은 그릇 개수를 파악 후 등수 메기기
// 1. 같은 이름의 선수는 없다.
// 2. 접시의 수가 같은 경우도 없다.

function solution(player, score) {
  let answer = {};
  let arr = {};

  // 1. player와 score를 key-value 형태로 만들어주기
  // 2. score를 순서대로 정렬해주기
  // 3. index + 1한 값을 다시 rank라는 키에 넣어주기
  // 4. 이름과 index를 answer 객체에 넣어주기

  arr = player.map((n, i) => {
    return {
      name: n,
      score: score[i]
    };
  });

  arr.sort((a, b) => {
    return b.score - a.score;
  });

  arr = arr.map((item, index) => {
    return {
      name: item.name,
      rank: index + 1
    };
  });

  console.log(arr);

  for (let i = 0; i < arr.length; i++) {
    answer[arr[i].name] = arr[i].rank;
  }

  return answer;
}

// const player = "손오공 야모차 메지터 비콜로".split(" ");
// const score = "70 10 55 40".split(" ");
const player = ["홍길동", "엄석대", "연개소문", "김첨지"];
const score = [2, 1, 10, 0];

console.log(solution(player, score));
