// 자음 조합 구하기
// 조합이란 원소들을 조합하여 만들 수 있는 경우의 수이며 원소의 순서는 신경 쓰지 않는다.
// 입력받은 자음을 n 개를 선택하여 나올 수 있는 모든 조합과, 조합의 수를 출력하기

function solution(chars) {
  let answer = [];

  const f = (prefix, chars) => {
    for (let i = 0; i < chars.length; i++) {
      answer.push(prfix + chars[i]);

      f(prefix + chars[i], chars.slice(i + 1));
    }
  }

  f('', chars);

  const result = answer.filter((e) => e.length === n);
  console.log(result);

  return result.length;
}

// const input = prompt("조합을 구하고 싶은 자음을 공백으로 구분해서 입력하세요.").split(',');
// const n = parseInt(prompt("조합의 수를 입력하세요."), 10);
const input = 'ㄱ, ㄴ, ㄷ, ㄹ'.split(",");
const n = 3;
console.log(solution(input));
