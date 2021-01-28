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
  console.log(arr);

  let big = 0;
  let small = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "(") {
      small++;
    }
    if (arr[i] === ")") {
      small--;
    }

    if (arr[i] === "{") {
      big++;
    }
    if (arr[i] === "}") {
      big--;
    }
  }

  if (small !== 0 || small < 0 || big !== 0 || big < 0) return false;
  return true;
}

while (1) {
  let order = parseInt(prompt("데이터 입력(1), 프로그램 종료(2)"), 10);

  if (order === 1) {
    const ex = input('데이터를 입력하세요');
    console.log(math(ex));
  } else {
    break;
  }
}


// ------------------------------------------------------


function math(e) {
  const m = {
    ")": "(",
    "}": "{"
  };
  let stack = [];

  for (let i = 0; i < e.length; i++) {
    if (e[i].includes("(") || e[i].includes("{")) {
      stack.push(e[i]);
    } else if (m[e[i]]) {
      if (stack.length === 0) {
        return false;
      } else {
        let t = m[e[i]];
        if (t !== stack.pop()) {
          return false;
        }
      }
    }
  }

  return stack.length === 0;
}

let order = 1;
if (order === 1) {
  const ex = "5 + 7 * {(3 * 5)}";
  console.log(math(ex));
}
