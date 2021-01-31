// 같은 의약 성분을 찾아라!
// 판콜비 = 'ABCDEFGH'
// 넥타이레놀 = 'EFGHIJKL'
// 특정 약품 A의 성분이 공개되었을 때 유사한 성분을 가진 데이터들의 출력 구하기
// ⭐효율성이 중요한 문제⭐

// 1. A~Z의 배열 생성
// 2. 8개만 랜덤으로 뽑아서 리턴하기
// 3. input의 요소와 4개가 같은 약품 전부 배열에 저장해서 출력

let alphabet = [];
for (let i = 65; i < 91; i++) {
  alphabet.push(String.fromCharCode(i));
}

function randomItem(a) {
  let string = [];

  while (string.length !== 8) {
    // 8자리로 만들어주기
    let b = a[Math.floor(Math.random() * a.length)]; // 1 ~ 25
    if (!string.includes(b)) {
      // 중복은 허용하지 않음
      string.push(b);
    }
  }

  let medicine = string.join("");
  return medicine;
}

// 100개의 의약성분 저장
let total_medicine = [];

for (let i = 0; i < 100; i++) {
  let m = randomItem(alphabet);
  if (!total_medicine.includes(m)) {
    total_medicine.push(m);
  }
}

const user_input = "ABCDEFGH 4".split(" ");
let result = [];

for (let i of total_medicine) {
  const setUser = new Set(user_input[0]);
  const setTotal = new Set(i);
  let interSection = new Set([...setUser].filter((x) => setTotal.has(x))); // has로 교집합 구하기

  if (interSection.size === parseInt(user_input[1], 10)) { // size는 Set의 크기
    result.push(i);
  }
}

console.log(result);
console.log(result.length);
