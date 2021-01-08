// 스탬프에 적힌 숫자가 공백으로 구분
// 이 숫자가 연속되는 수면 "YES" 아니면 "NO" 출력하기

function solution(arr) {
    let correct = []; // arr[0]부터 시작해서 그 길이 까지의 진짜 연속되는 수를 저장
    let arrSort = arr.sort((a, b) => {
      return a - b;
    });
  
    for (let i = arr[0]; i <= arrSort[arrSort.length - 1]; i++) {
      correct.push(i);
    }

    for (let i in arr) {
      if (arr[i] !== correct[i]) return "NO";
    }
  
    return "YES";
}
  
const input = "1 4 2 6 10".split(" ").map((n) => parseInt(n, 10));
  
console.log(solution(input));

// ------------------------------------------------------

// 🐥혼자 풀다가 마음에 안들어서 개선 시도!🐥

// 위의 코드는 반복이 많이 돌 수도 있는 문제가 있다.
// 따라서 i와 i+1의 차이가 1이 아니면 false를 return 하도록 했다.
function solution(arr) {
    let minus = 0;
    let before = 0;
    let next = 0;
  
    for (let i = 0; i < arr.length - 1; i++) {
      before = arr[i];
      next = arr[i + 1];
      minus = next - before;
      console.log(before, next, minus);
      if (minus !== 1) return "NO";
    }
  
    return "YES";
  }
  
  const input = "1 2 3 4 5 6".split(" ").map((n) => parseInt(n, 10));
  
  console.log(solution(input));