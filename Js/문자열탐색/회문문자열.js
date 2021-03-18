// 앞에서 읽나, 뒤에서 읽나 같은 문자열을 회문 문자열이라고 부른다.

// reverse() 사용하기
function solution(s) {
    let answer = "YES";
    s = s.toLowerCase().split("");

    if (s.join("") !== s.reverse().join("")) {
      answer = "NO";
    }
  
    return answer;
}

let str = "goooG";
console.log(solution(str));

// ------------------------------------------------------

// for문 이용하기
function solution(s) {
    let answer = "YES";
    let len = s.length;
    s = s.toLowerCase();
  
    for (let i = 0; i < Math.floor(len / 2); i++) {
      if (s[i] !== s[len - i - 1]) {
        return "No";
      }
    }
  
    return answer;
  }
  
  let str = "goooG";
  console.log(solution(str));
  