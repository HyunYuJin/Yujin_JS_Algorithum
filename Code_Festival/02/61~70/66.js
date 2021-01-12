// 입력: 탑 = ["ABCDEF", "BCAD", "ADEFQRX", "BEDFG", "EFGHZ"]
// 규칙 = "ABD"
// A는 B와 D보다 항상 앞에온다.
// B는 D보다 앞에온다.
// C의 뒤에는 A, B가 올 수 없다.

function solution(top, rule) {
    let answer = [];
    // 가능인지 불가능인지 push
    for (let pt of top) {
      answer.push(block(pt, rule));
    }
  
    return answer;
  }
  
  function block(part, rule) {
    let current_index = rule.indexOf(rule[0]);
  
    for (let i of part) {
      if (rule.includes(i)) {
        if (current_index > rule.indexOf(i)) {
          return "불가능";
        }
        current_index = rule.indexOf(i);
      }
    }
    return "가능";
  }
  
  const top = ["ABCDEF", "BCAD", "ADEFQRX", "BEDFG", "EFGHZ"];
  const rule = "ABD";
  console.log(solution(top, rule));
  