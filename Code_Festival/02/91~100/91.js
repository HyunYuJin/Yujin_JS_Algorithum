// 반 평균 등수
// 1. 한 반에 30명인 학생, 총 7개의 반 점수가 '국어, 영어, 수학, 사회, 과학' 순서로 있는 다중 리스트를 랜덤 한 값으로 만들기
// 2. 반 점수 모두가 담긴 전교 점수 다중 리스트 만들기
// 2. 반 평균을 구하기
// 3. 반 1등 점수를 구하기
// 4. 전교 평균을 구하기

let student_score = []; // 각 학생의 랜덤한 점수가 담길 배열
let class_score = []; // 30명의 학생들의 점수 리스트가 저장
let total_score = []; // 총 7개의 반의 각각의 학생들 점수가 담길 배열

// 3중 for문
for (let k = 0; k < 7; k++) {
  class_score = [];
  for (let j = 0; j < 30; j++) {
    student_score = [];
    for (let i = 0; i < 5; i++) {
      student_score.push(Math.floor(Math.random() * 100) + 1); // 1 ~ 100 사이의 랜덤 값
    }
    class_score.push(student_score); // 반 리스트에 학생의 점수 리스트를 push
  }
  total_score.push(class_score); // 전교 리스트에 반 리스트를 push
}

console.log(total_score);

let total_average = [];
let c_average = []; // 반 평균 리스트
let s_average = 0; // 한명의 학생의 평균
let s_sum = 0;
let first = 0;

for (let c of total_score) {
  for (let s of c) {
    s_sum = s.reduce((a, b) => a + b); // 각 학생 점수의 총 합
    s_average = s_sum / 5; // 각 학생의 평균
    c_average.push(s_average); // 반 평균 리스트에 push
    if (first < s_average) { // 1등
      first = s_average;
    }
  }

  console.log("일등: ", first);
  first = 0; // 각 반의 1등을 구해야하니까 리셋
  total_average.push(c_average.reduce((a, b) => a + b) / 30); // 전체 평균은 반 평균 리스트의 총 합
  c_average = [];
}

console.log(total_average);
console.log(total_average.reduce((a, b) => a + b) / 7);
