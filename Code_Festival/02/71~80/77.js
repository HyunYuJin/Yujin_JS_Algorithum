// 가장 긴 공통 부분 문자열
// 두 문자열이 있을 때 둘 사이의 부분 공통 문자열의 길이 구하기
// ex) S1 = ['T', 'H', 'I', 'S', 'I', 'S', 'S', 'T', 'R', 'I', 'N', 'G', 'S']
// S2 = ['T', 'H', 'I', 'S', 'I', 'S']라는 두 문자열이 있을 때
// 둘 사이의 부분 공통 문자열의 길이는 ['T', 'H', 'I', 'S', 'I', 'S']로 총 -4개

// 조합 알고리즘 문제
// 배열의 0번째를 고정하고 뒤의 요소들에 대해 조합을 구해서 붙인다.

function solution(s) {
  let result = [];
  for (let i = 1; i < s.length + 1; i++) {
    for (let j = 0; j < i; j++) {
      result.push(s.slice(j, j + s.length - i + 1));
    }
  }

  return result;
}

// input 1 -> 6
// const s1 = 'THISISSTRINGS';
// const s2 = 'THISIS';

// input 2 -> 6
const s1 = "THISISSTRINGS";
const s2 = "TATHISISKKQQAEW";

// input 3 -> 3
// const s1 = 'THISISSTRINGS';
// const s2 = 'KIOTHIKESSISKKQQAEW';

// input 4 -> 3
// const s1 = 'THISISSTRINGS';
// const s2 = 'TKHKIKSIS';

const comb1 = solution(s1);
const comb2 = solution(s2);

let intersection = comb1.filter((n) => comb2.includes(n));

intersection.sort((a, b) => {
  return b.length - a.length;
});

console.log(intersection[0].length);
