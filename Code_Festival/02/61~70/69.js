// 골드바흐의 추측
// 2보다 큰 모든 짝수를 두 소수의 합으로 나타낸다. (골드바흐 파티션)
// ex) 100 == 47 + 53   56 == 19 + 37

let input = parseInt(prompt("숫자를 입력하세요."), 10);
const 소수 = prime_list(input + 1);
const 숫자 = input;

// 소수를 판별해주는 함수
function prime_list(input) {
  let prime_arr = [];
  let prime_TF = true;

  for (let i = 2; i < input; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        prime_TF = false;
      }
    }

    if (prime_TF) {
      prime_arr.push(i);
    }
    prime_TF = true;
  }

  return prime_arr;
}

function solution(prime, number) {
  let count = 0; // 순회
  let gold = [];

  for (let i of prime) {
    if (prime.includes(number - i)) {
      gold.push([i, number - i]);
    }

    if (count > prime.length / 2) {
      break;
    }

    count++;
  }

  let minus = gold.map((e) => e[1] - e[0]);
  let minIndex = minus.indexOf(Math.min.apply(null, minus)); // 차의 index를 return

  return gold[minIndex];
}

console.log(solution(소수, 숫자));
