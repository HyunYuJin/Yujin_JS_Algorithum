// 이름을 가나다 순으로 정렬하고 번호 매기기

let students = [
    "강은지",
    "김유정",
    "박현서",
    "최성훈",
    "홍유진",
    "박지호",
    "권윤일",
    "김채리",
    "한지호",
    "김진이",
    "김민호",
    "강채연"
  ];
  
  // 오름차순
  console.log(students.sort());
  // 내림차순
  // console.log(students.reverse());
  
  let obj = students.map((a, b) => {
    return {
      번호: b + 1,
      이름: a
    };
  });
  
  for (let i of obj) {
    console.log(i);
  }
  