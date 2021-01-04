// 자바스크립트 객체의 출력 값
var d = {
  'height': 180,
  'weight': 78,
  'weight': 84,
  'temperature': 36,
  'eyesight': 1
};

console.log(d['weight']);

// 정답: 84
// 객체에서 key의 값이 중복될 때는 ⭐마지막 key의 값⭐을 가져온다.

/*
  ➕ 객체's 보너스
  자바스크립트 엔진에서는 숫자, 문자를 알아서 구분해주기 때문에 문자열에 ''가 없어도 된다.
  단, 값을 가져올 때에는 ''가 있어야한다. -> d['weight'] or d.weight 이런식으로 접근하기
*/
