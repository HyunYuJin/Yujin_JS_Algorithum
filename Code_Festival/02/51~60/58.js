// 숫자를 입력받고 천 단위로 콤마(,) 찍기
// ex) 123456789 입력, 123,456,789 출력

let price = 123456789;
console.log(price.toLocaleString());


// ------------------------------------------------------

// ✔재귀함수 이용해서 문제풀기!
function comma(s) {
    if (s.length <= 3) {
      return s;
    } else {
      return comma(s.slice(0, s.length - 3)) + "," + s.slice(s.length - 3);
    }
  }
  
  console.log(comma("123456789"));

// 재귀과정
// 123456789
// 123456     ,789
// 123     ,456     ,789
  


// 🧨재귀함수 이해하기에 좋은 예시🧨
// 1. 팩토리얼
// 2. 시그마
// 3. 문자열 거꾸로 출력하기