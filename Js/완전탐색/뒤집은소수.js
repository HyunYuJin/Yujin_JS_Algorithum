// 소수 값 구하기
function isPrime(num) {
    if (num <= 1) {
      return false;
    }
  
    // 어떤 약수던지 자기 자신을 제외한 가장 큰 수는 그 숫자의 절반이다.
    for (let i = 2; i < Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  
  // 자연수를 뒤집어 주고 소수의 경우 return 해주는 함수
function solution(arr) {
    let answer = [];
  
    for (let i of arr) {
      // let rev = Math.floor(i.toString().split("").reverse().join(""));
      let rev = 0;
      
      while (i) {
        let t = i % 10;
        rev = rev * 10 + t;
        i = parseInt(i / 10, 10);
      }
  
      if (isPrime(rev)) answer.push(rev);
    }
  
    return answer;
}
  
let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));
  