// Set을 만드는 방법 중 올바른 것을 모두 고르세요.

// 3) var x = new Set('javascript');
// 5) var x = new Set();

// 정답: 3), 5)

// ------------------------------------------------------

// Set?🤔
// 중복되지 않는 데이터를 저장하는 데이터 구조

const list = [1, 2, 2, 3, 4, 5, 5, 5, 6, 6];
let setVal = new Set(list);

console.log(setVal); // [1, 2, 3, 4, 5, 6]
console.log(setVal.has(10)); // false
console.log(setVal.has(1)); // true