function solution(s, t) {
    let answer = [];
    s = s.split("");
    let p = 1000;
  
    // 왼쪽에 있는 e로부터 떨어진 거리
    for (let i = 0; i < s.length; i++) {
      s[i] === t ? (p = 0) : p++;
      answer.push(p);
    }
  
    // 오른쪽에 있는 e로부터 떨어진 거리
    p = 1000;
    for (let j = s.length - 1; j >= 0; j--) {
      s[j] === t ? (p = 0) : p++;
  
      // 기존 answer에 저장되어있는 값과 새로운 p값 중 더 작은 값을 넣어준다.
      answer[j] = Math.min(answer[j], p);
    }
  
    return answer;
}
  
let str = "teachermode";
console.log(solution(str, "e"));  