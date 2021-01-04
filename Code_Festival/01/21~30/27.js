// 첫번째 입력에서는 학생의 이름이 공백으로 구분되어 입력되고
// 두번째 입력에서는 수학점수가 공백으로 구분되어 입력된다.
// 학생의 이름이 key, 수학점수가 value인 객체를 출력하기

const name = "yujin hyewon".split(" ");
const score = "100 90".split(" ");
let obj = {};

for (let i in name) {
  obj[name[i]] = score[i]; // obj안에 name[i]라는 키에 접근하고 그것의 값이 score[i]
}
console.log(obj);

// ⭐객체로 만들어주는 것은 정말 응용이 많이된다.⭐
// ⭐평소에 어려워했던 부분이니 잘 기억해두자!!⭐