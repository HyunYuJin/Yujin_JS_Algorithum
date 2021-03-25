function solution(m, arr) {
    let answer = 0;
    let sum = 0;
    let right = 0;
  
    // 1. right(기준점)을 잡고 sum을 진행
    // 2. sum이 m보다 커지면 right++하고 sum은 다시 0으로 초기화
    while (right !== arr.length - 1) {
      for (let i = right; i < arr.length; i++) {
        if (sum > m) {
          sum = 0;
          right++;
        } else if (sum < m) {
          answer++;
        } else if (sum === m) {
          answer++;
          sum = 0;
          right++;
        }
  
        sum += arr[i];
      }
    }
  
    return answer;
}
  
let a = [1, 3, 1, 2, 3];
console.log(solution(5, a));
  