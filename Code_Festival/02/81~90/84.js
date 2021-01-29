// 숫자뽑기
// 어떤 숫자에서 k개의 수를 뽑았을 때 가장 큰 수 찾기
// 숫자 1723에서 두 개의 수를 뽑으면 [17, 12, 13, 72, 73, 23] 을 만들 수 있다.
// 이 중 가장 큰 수는 73

function solution(n) {
  let arr = [];

  const f = (prefix, n) => {
    for (let i = 0; i < n.length; i++) {
      arr.push(prefix + n[i]); // 모든 조합 내용 저장

      f(prefix + n[i], n.slice(i + 1));
    }
  };
  f("", n);

  let answer = arr.filter((n) => n.length === two);

  return Math.max.apply(null, answer);
}

const n = "1723".split("");
const two = 2;
console.log(solution(n));
