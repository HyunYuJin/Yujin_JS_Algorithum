// 소수인지 아닌지 판별하는 프로그램 만들기
// 소수면 YES, 아니면 NO
// 소수: 1과 자기 자신만으로 나누어 떨어지는 1보다 큰 양수 (1은 제외)

const num = parseInt(prompt("숫자를 입력하세요."), 10);

function isPrime(n) {
  if (n <= 1) {
    // 1은 제외하기 때문에 다음 조건 정의
    return "NO";
  }

  let divisor = 0;

  while (n > divisor) {
    if (n % divisor === 0) {
      return "NO";
    }
    divisor++;
  }
  return "YES";
}

console.log(isPrime(num));


// ------------------------------------------------------

// for문을 이용해서 풀기

const prime = 1;

function isPrime(n) {
  if (n <= 1) {
    console.log('NO');
    return false;
  }

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      console.log('NO');
      return false;
    }
  }

  console.log('YES');
}

isPrime(prime);
