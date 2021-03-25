function solution(k, arr) {
    let answer = 0;
    let sum = 0;
    let n = arr.length; // n일
  
    for (let i = 0; i < n; i++) {
      sum = 0;
      for (let j = i; j < i + k; j++) {
        if (arr[j] !== undefined) sum += arr[j];
      }
  
      answer = Math.max(answer, sum);
    }
  
    return answer;
}

let a = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a));


// -----------------------------------------------------
// 슬라이딩 윈도우로 접근하기
function solution(k, arr) {
    let answer = 0;
    let sum = 0;
    let n = arr.length; // n일
  
    for (let i = 0; i < k; i++) {
      sum += arr[i];
      answer = sum;
    }
  
    for (let i = k; i < n; i++) {
      sum += arr[i] - arr[i - k];
      answer = Math.max(answer, sum);
    }
    return answer;
}

let a = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a));
  