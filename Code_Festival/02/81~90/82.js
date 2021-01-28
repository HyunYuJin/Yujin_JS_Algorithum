// 수학 괄호 파싱
// 수학 공식이 제대로 입력되었는지 판단하는 코드 작성하기
// 데이터 입력(1), 프로그램 종료(2): 1
// ex) "데이터를 입력하세요: " 3 + 5 -> True
// "데이터를 입력하세요: " 5 + 7) * (3 * 5) -> False

function math(e) {
  let arr = [];

  e = e.split("");
  e.filter((n) => {
    if (n !== " ") {
      arr.push(n);
    }
  });

  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "(") {
      count++;
    }
    if (arr[i] === ")") {
      count--;
    }
  }

  if (count !== 0 || count < 0) return false;
  return true;
}

while (1) {
  let order = parseInt(prompt("데이터 입력(1), 프로그램 종료(2)"), 10);

  if (order === 1) {
    const ex = prompt("데이터를 입력하세요: ");
    console.log(math(ex));
  } else {
    break;
  }
}
