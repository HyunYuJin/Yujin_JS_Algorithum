// 바른 문자열: 괄호 모양이 바르게 구성된 문자열
// 바르지 않은 문자열: 괄호 모양이 바르게 구성되어 있지 않은 문자열
// 바른 문자열이면 "YES"를, 바르지 않은 문자열이면 "NO"를 출력하기

function solution(arr) {
    // * 항상 (가 나오면 )도 나와야 한다.
    // (가 나올때마다 count++
    // )가 나올때마다 count--
    // if (count === 0) return 'YES';
    // return 'NO';
  
    if (arr[0] === ")") return "NO";
  
    let count = 0;
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === "(") {
        count++;
      } else if (arr[i] === ")") {
        count--;
      }
    }
  
    if (count !== 0) {
        return "NO";
    }
    
    return "YES";
  }

// 하지만 내가 로직은 다음과 같은 문자열은 NO가 아닌 YES를 출력한다.
// const input = "())(()".split("");
  
console.log(solution(input));


// ------------------------------------------------------


// ++++++
// 1. 배열을 이용해서 arr[i]가 (면 "("을 넣는다.
// 2. arr[i]가 )면 pop을 한다.
// 3. 이때 b의 배열의 길이가 0이면 return false
// 4. 최종적으로 배열의 길이가 0이 되면 return true

function solution(arr) {
    let count = 0;
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === "(") {
        count++;
      } else if (arr[i] === ")") {
        count--;
      }
    }
  
    if (count !== 0) {
      return "NO";
    }

    let b = [];

    for(let i in arr) {
        if (arr[i] === '(') {
            b.push(arr[i]);
        }

        if (arr[i] === ')') {
            if (b.length === 0) {
                return 'NO';
            }
            b.pop();
        }
    }
  
    return "YES";
  }
  
const input = "())(()".split("");
  
console.log(solution(input));
  

// ------------------------------------------------------


// 🍎최종 제출 코드🍎
function solution(arr) {
    let count = 0;
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === "(") {
        count++;
      }
      if (arr[i] === ")") {
        count--;
      }
    }
  
    if (count !== 0) return false;
  
    let bracket = [];
  
    for (let i in arr) {
      if (arr[i] === "(") {
        bracket.push(arr[i]);
      }
  
      if (arr[i] === ")") {
        if (bracket.length === 0) {
          return false;
        }
        bracket.pop();
      }
    }
  
    return true;
  }
  
const input = prompt("괄호를 입력하세요.").split("");
  
if (solution(input) === true) {
    console.log("YES");
} else {
    console.log("NO");
}
  