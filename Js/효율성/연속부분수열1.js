function solution(m, arr) {
    let answer = 0;
    let sum = 0;
    let left = 0; // 배열의 왼쪽 담당
    let right = 0; // 배열의 오른쪽 담당
  
    for (let i = 0; i < arr.length; i++) {
      sum += arr[right++];
      if (sum === m) answer++;
  
      while (sum >= m) {
        sum -= arr[left++]; // 0번부터 순차적으로 빼준다.
        if (sum === m) answer++;
      }
    }
  
    return answer;
}

let a = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));
  