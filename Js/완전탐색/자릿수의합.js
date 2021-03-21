// [11, 10, 9, 4, 8, 11, 6]
// 137(11) > 128(11) 이기 때문에 137 출력

function solution(n, arr) {
  let answer = 0;
  let sum_arr = [];
  let str_arr = [];

  for (let i of arr) {
    let sum = 0;
    str_arr = String(i).split("");
    for (let j of str_arr) {
      sum += parseInt(j, 10);
    }
    sum_arr.push({ sum, i });
  }

  let max = { sum: Number.MIN_SAFE_INTEGER, i: Number.MIN_SAFE_INTEGER };
  for (let i = 0; i < sum_arr.length; i++) {
    if (sum_arr[i].sum >= max.sum) {
      max = sum_arr[i];
    }
  }
  
  answer = max.i;

  return answer;
}
  
let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));

// ------------------------------------------------------

function solution(n, arr) {
  let answer = 0;
  let max = Number.MIN_SAFE_INTEGER; // 작은 숫자로 초기화한다.

  for (let i of arr) {
    let sum = i
      .toString()
      .split("")
      .reduce((a, b) => a + parseInt(b, 10), 0);
    let temp = i;

    while (temp) {
      sum += temp % 10;
      temp = Math.floor(temp / 10);

      if (sum > max) {
        max = sum;
        answer = i;
      } else if (sum === max) {
        if (answer < i) answer = i;
      }
    }
  }

  return answer;
}

let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));

// ------------------------------------------------------

// 문자로 바꾸지 않고 숫자인 상태에서
function solution(n, arr) {
  let answer = 0;
  let max = Number.MIN_SAFE_INTEGER;

  for (let i of arr) {
    let sum = 0;
    let temp = i;

    while (temp) {
      sum += temp % 10;
      temp = Math.floor(temp / 10);

      if (sum > max) {
        max = sum;
        answer = i;
      } else if (sum === max) {
        if (answer < i) answer = i;
      }
    }
  }

  return answer;
}

let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));